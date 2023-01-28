import { ResolveSchema, SchemaMocker, Schemas, SchemaSatisfier } from "openapi-schema-tools"
import { ValueOf } from "type-fest"

import QuerySchema from "../QuerySchema"

export function SwaggerSchema<S extends ValueOf<Context>, Context extends Schemas>(schema: S, context?: Context): QuerySchema<S, ResolveSchema<S, Context>> {
  const satisfier = new SchemaSatisfier(context)
  const mocker = new SchemaMocker(context)

  return {
    schema,
    parse: (value) => satisfier.mocked(value, schema),
    mock: () => mocker.mock(schema)
  }
}
