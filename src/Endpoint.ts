import _ from "lodash"
import { Split, Trim } from "type-fest"

import { interpolate, isDictionary } from "./helpers"
import { ExtractVariables, ReplaceVariables } from "./types.helpers"

type TrimLeftSlash<S extends string> = S extends `/${infer T}` ? TrimLeftSlash<T> : S
type TrimRightSlash<S extends string> = S extends `${infer T}/` ? TrimRightSlash<T> : S
/**
 * Removes `/` from start and end of a endpoint.
 */
type TrimSlash<T extends string> = TrimLeftSlash<TrimRightSlash<T>>

export type NormalizeEndpoint<T extends string> = `/${Trim<TrimLeftSlash<Trim<T>>>}`

interface EndpointConfig<Path extends string> {
  pathParams?: Record<Split<Path, "/">[number], unknown>
  queryParams?: Record<string | number, unknown>
}

class Endpoint {
  static build<T extends string>(path: T, config?: EndpointConfig<T>): string {
    let endpoint: string = this.normalize(path)

    if (config?.pathParams) {
      endpoint = Endpoint.resolvePathParams(endpoint, config.pathParams)
    }
    if (config?.queryParams) {
      const search = Endpoint.stringifyQueryParams(config.queryParams)
      endpoint += "?" + search
    }

    return endpoint
  }

  static buildURL<T extends string>(path: T, config: EndpointConfig<T> & { baseURL: string | URL }): URL {
    const url = new URL(path, config.baseURL)

    if (config.pathParams) {
      url.pathname = Endpoint.resolvePathParams(url.pathname, config.pathParams)
    }
    if (config.queryParams) {
      url.search = Endpoint.stringifyQueryParams(config.queryParams)
    }

    return url
  }

  /**
   * Normalizes and then splits to components by `/`.
   */
  static split<Endpoint extends string>(endpoint: Endpoint): Split<TrimSlash<Endpoint>, "/"> {
    const normalized = this.normalize(endpoint)
    const components = normalized.split("/") as Split<TrimSlash<Endpoint>, "/">

    return components
  }

  /**
   * - Removes white spaces from sides.
   * - Adds slash to left if not presented, the right one is left untouched (This is by `URL.pathname` behavior).
   */
  static normalize<Endpoint extends string>(endpoint: Endpoint): NormalizeEndpoint<Endpoint> {
    let normalizedEndpoint: string = endpoint
    // Remove white spaces
    normalizedEndpoint = normalizedEndpoint.trim()
    // Removes slashes
    normalizedEndpoint = _.trimStart(normalizedEndpoint, "/").trim()
    // Adds slashes
    return `/${normalizedEndpoint}` as never
  }

  /**
   * Gets params from `path`.
   */
  static pathParams<Path extends string>(path: Path): ExtractVariables<Path>[] {
    const matches = path.match(/{.*?}/g) as never
    return matches || []
  }

  /**
   * @param pathParams - Values will be transformed to string.
   */
  static resolvePathParams<Path extends string, Params extends Record<ExtractVariables<Path>, string | number>>(path: Path, pathParams: Params): ReplaceVariables<Path, Params> {
    return interpolate(path, pathParams) as never
  }

  static queryParams() { }

  /**
   * - Stringify objects and arrays
   * - Supports deep nesting
   * 
   * @returns search query without `?`.
   * @example
   * { state1: 6, state2: "horse" } => "state1=6&state2=horse"
   */
  static stringifyQueryParams(searchParams: Record<keyof never, unknown>): string {
    if (!searchParams || !Object.keys(searchParams).length) return ""

    const queryKeys = Object.keys(searchParams)
    const queryArray = queryKeys.map(key => {
      const value = searchParams[key]
      if (value) {
        if (isDictionary(value)) {
          return this.stringifyQueryParams(value)
        }

        return encodeURIComponent(key) + "=" + encodeURIComponent(String(value))
      }
      return ""
    })

    return queryArray.filter(Boolean).join("&")
  }
}

export default Endpoint
