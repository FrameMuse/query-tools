interface QuerySchema<Schema = unknown, Type = unknown> {
  readonly schema: Schema
  /**
   * Must return result or throw error.
   */
  parse(value: Partial<Type> | null | undefined): Type
  mock?(): Type
}

export default QuerySchema
