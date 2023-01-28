/**
 * https://stackoverflow.com/questions/38304401/javascript-check-if-dictionary/71975382#71975382
 */
export function isDictionary(object: unknown): object is Record<keyof never, unknown> {
  return object instanceof Object && object.constructor === Object
}

/**
 * Interpolates {variable} in string
 */
export function interpolate<T extends string>(value: T, vars: Record<string, unknown>): string {
  const varKeys = Object.keys(vars)
  return varKeys.reduce((result: string, next) => result.replace(new RegExp(`{${next}}`, "g"), String(vars[next])), value)
}

export function mapKeysDeep(object: Record<keyof never, unknown>, callback: (key: string, value: unknown) => keyof never): Record<string, unknown> {
  function iterate(value: unknown): unknown {
    if (isDictionary(value)) {
      return mapKeysDeep(value, callback)
    }

    if (value instanceof Array) {
      return value.map(iterate)
    }

    return value
  }

  return (
    Object
      .entries(object)
      .reduce((result, [key, value]) => ({ ...result, [callback(key, value)]: iterate(value) }), {})
  )
}
