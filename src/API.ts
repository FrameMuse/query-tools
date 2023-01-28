import axios from "axios"

axios.Axios

type Version = string
type VersionWithPrefix = `${Version}-${string}`

interface APIConfig {
  title?: string
  version?: Version | VersionWithPrefix
  baseURL: string | URL
  options?: IAPIOptions
}

interface IAPIOptions {
  endpoint?: IAPIOptionsEndpoint
  debug?: {
    /**
     * Whether to enable debug mode.
     */
    enabled?: boolean

    /**
     * Whether to replace unsatisfied body with a mock.
     * 
     * ### Description
     * 
     * - `auto` - body will be mocked if the method is presented.
     * - `always` - body always will be mocked.
     * - `never` - body never will be mocked.
     * 
     * @default 
     * "auto"
     */
    mock?: "auto" | "always" | "never"
  }
}

interface IAPIOptionsEndpoint {
  /**
   * Whether to add version to request url.
   * 
   * @example
   * "https://example.com/my-endpoint" => "https://example.com/v1.0.0/my-endpoint"
   */
  includeVersion?: boolean
  /**
   * Whether to add slash on the end of an endpoint.
   * 
   * @example
   * "/my-endpoint" => "/my-endpoint/"
   * 
   * @example
   * "/my-endpoint?foo=bar" => "/my-endpoint/?foo=bar"
   */
  includeTrailingSlash?: boolean
}

class API<Config extends APIConfig> {
  constructor(readonly config: Config) { }
}



const api = new API({
  title: "Test",
  version: "",
  baseURL: "https://example.com/",

  options: {
    endpoint: {
      includeVersion: true,
      includeTrailingSlash: true
    }
  }
})

api.config.version

export default API
