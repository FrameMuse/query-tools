import QuerySchema from "./QuerySchema"
import { ContentType, PathParams as PathVariables, QueryParams, RequestMethod } from "./types"
import { ExtractVariables, ResolveContentType } from "./types.helpers"

export interface IQueryRequest<Body, Path extends string> {
  path: Path
  method: RequestMethod | Uppercase<RequestMethod>

  /**
   * Params that fit right into the path.
   * 
   * @example
   * { user_id: 1 }
   * 
   * @example
   * { user_id: 1 } <== "/user/{user_id}" ==> "/user/1"
   */
  pathVariables?: PathVariables<ExtractVariables<Path>>
  /**
   * A URL search query parameters.
   * 
   * @example
   * { array: [{ bar: "bar" }, { foo: "foo" }], plain: "string" } => "array=bar:bar,foo:foo&plain=string"
   */
  queryParams?: QueryParams
  /**
   * Content that may be sent by `POST`, `PATCH` and `PUT` request.
   */
  body?: Body

  headers?: Headers | Record<string, string>
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// export interface IQueryRequestAny extends IQueryRequest<unknown, string> { }


export interface IQueryAction<Request extends QueryBodyAny, Response extends QueryBodyAny, Path extends string> {
  request: IQueryRequest<ReturnType<Request["prepare"]>, Path>
  requestBody?: Request
  responseBody?: Response
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IQueryActionAny extends IQueryAction<QueryBodyAny, QueryBodyAny, string> { }

/**
 * Describes the shape of a content.
 */
interface IQueryContentShape<Output = unknown, Input = Output, Schema = unknown, CT extends ContentType = ContentType> {
  /**
   * Force a `contentType`. Otherwise it will be inferred from schema.
   */
  type?: CT | ContentType
  schema?: QuerySchema<Schema, Input>
  transform?: (value: Input) => Output
}

/**
 * Processes the shape of a content.
 */
export class QueryBody<Output = unknown, Input = Output, Schema = unknown, CT extends ContentType = "json"> {
  constructor(readonly shape: IQueryContentShape<Output, Input, Schema, CT>) { }

  /**
   * Prepares `originalData` to be fit in shape.
   * 
   * ## Sequence
   * 
   * ### 1. Schema Satisfier 
   * Checks `originalData` follows the schema, if not, will try to replace with a mock.
   * If "mock()" method is not presented in the schema, will throw an error.
   * 
   * ### 2. Free Transformation
   * Comes before "Schema Transformation" because it's easier to understand **unchanged** property keys.
   * There is a helper class `Mapping`.
   * 
   * ### 3. Schema Propery Transformation
   * Transform data according to a property schema (i.e. if data is `string` and schema is also `string` but holding date-time, it will be transformed to `Date`).
   * 
   * ### 4. Schema `ContentType` Transformation
   * Transform data according to a `contentType` schema (i.e. if schema requires `FormData`, data will be converted to `FormData`).
   * This step will be skipped in favor of "required content type" if presented. 
   * 
   * ### 5. Required `ContentType` Transformation
   * Transforms into required content type.
   */
  prepare(originalData: Input): ResolveContentType<CT, Output> {
    return originalData as never
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type QueryBodyAny = QueryBody<any, any, any>

// interface QueryContentAny<Input = any, Output = Input> extends QueryContent<Input, Output, any, any> { }

/**
 * Defines a shape of the data.
 */
class QueryAction {
  constructor() { }


}

// /**
//  * Defines what data should be sent and received.
//  */
// export class QueryRequest {
//   static createRequest(action: IQueryActionAny): Request {
//     return new Request(action.endpoint.toString(), {
//       // body: action.response?.prepare()
//     })
//   }
// }

/**
 * ## ISSUE
 * 
 * There may be multiple responses for a single query action.
 */



export default QueryAction
