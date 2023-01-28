
import { ResolveSchema } from "openapi-schema-tools"
import { IsAny, ValueOf } from "ts-essentials"

import { IQueryAction, IQueryRequest, QueryBody, QueryBodyAny } from "./Action"
import Endpoint from "./Endpoint"
import Mapping from "./Mapping"
import QuerySchema from "./QuerySchema"
import { SchemaSampleJson } from "./schema.json"
import { SwaggerSchema } from "./schemas/SwaggerSchema"


describe("Action", () => {
  test("Responses schema type", () => {
    type AccountsMe_SCHEMA_REF = { "$ref": "#/components/schemas/AccountsMe" }
    type AuthenticateInvalidToken_SCHEMA_REF = { "$ref": "#/components/schemas/AuthenticateInvalidToken" }
    type MULTIPLE_SCHEMA_REFS = AccountsMe_SCHEMA_REF | AuthenticateInvalidToken_SCHEMA_REF
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const __mupltipleResponsesTypeTEST__: ReturnType<QuerySchema<MULTIPLE_SCHEMA_REFS, ResolveSchema<MULTIPLE_SCHEMA_REFS, typeof SchemaSampleJson.components.schemas>>["parse"]> = 1 as unknown as {
      last_name?: string | undefined
      avatar?: string | undefined
      first_name: string
      type: number
      email: string
    } | {
      error: {
        type: "warning"
        code: "authenticate_invalid_token"
      }
    }


    expect(true).toBe(true)
  })

  test("Prepare type", () => {
    const mySwagger = <S extends ValueOf<typeof SchemaSampleJson.components.schemas>>(schema: S) => SwaggerSchema(schema, SchemaSampleJson.components.schemas)

    class RequestAction<TRequest extends QueryBodyAny, TResponse extends QueryBodyAny> {
      constructor(readonly action: IQueryAction<TRequest, TResponse, string>) { }

      build(baseURL: string | URL): Request {
        const url = Endpoint.buildURL(this.action.request.path, { baseURL })

        return new Request(url, {
          // body: this.action.request.body?.prepare()
        })
      }
    }


    const { action } = new RequestAction({
      request: {
        path: "/user/2",
        method: "GET",

        body: {

        }
      },
      requestBody: new QueryBody({
        // type: "formData",
        schema: mySwagger(SchemaSampleJson.components.schemas.AccountsMe),
        transform: Mapping.Options({ casing: "camel" }) as Pipeline
      })
    })

    const actual = action.responseBody?.prepare({
      first_name: "",
      type: 0,
      email: "",
    })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const expected: ({
      lastName?: string | undefined;
      avatar?: string | undefined;
      firstName: string;
      type: number;
      email: string;
    } | undefined) = action.responseBody?.prepare({
      first_name: "",
      type: 0,
      email: "",
    })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const TEST: IsAny<typeof actual> = false

    expect(true).toBe(true)
  })


})

class QueryAction<TRequest extends QueryBodyAny, TResponse extends QueryBodyAny, Path extends string>{
  constructor(readonly params: IQueryAction<TRequest, TResponse, Path>) { }

  toRequest(): Request {
    const url = Endpoint.buildURL(this.params.request.path, { baseURL: "" })

    return new Request(url, {
      // body: this.action.requestBody?.prepare()
    })
  }

  fetch(): Promise<Response> {
    return fetch(this.toRequest())
  }
}

class QueryActionRequest<TRequest extends QueryBodyAny, TResponse extends QueryBodyAny, Path extends string> extends QueryAction<TRequest, TResponse, Path> {
  constructor(request: IQueryRequest<ReturnType<TRequest["prepare"]>, Path>) {
    super({
      request
    })
  }
}

const action = new QueryActionRequest({
  path: "/user/{user_id}",
  method: "GET",

  pathVariables: {
    user_id: 1
  }
})

if (action.params.request.pathVariables) {
  const test = Endpoint.resolvePathParams(action.params.request.path, action.params.request.pathVariables)
}


fetch(action.toRequest())

// type LastElement<T> = T extends [...unknown[], infer LastItem] ? LastItem : never

// type Operator<A, B> = (value: A) => B
// type OperatorA<T> = T extends Operator<infer A, any> ? A : never
// type OperatorB<T> = T extends Operator<any, infer B> ? B : never

// type PipeOperators<Operators extends unknown[], Input> =
//   Operators extends [infer Item, ...infer Tail]
//   ? [Operator<Input, OperatorB<Item>>, ...PipeOperators<Tail, OperatorB<Item>>]
//   : Operators
// type PipeOperatorsOutput<Operators extends unknown[]> = OperatorB<LastElement<Operators>>

// function pipe<Input, Operators extends unknown[]>(...operators: PipeOperators<Operators, Input>): (input: Input) => PipeOperatorsOutput<Operators> {
//   return operators as never // Runtime implementation.
// }

// // interface Pipeline {
// //   ():
// // } 

// // const pipeline =


// const add = (x: number) => (y: number) => x + y
// const format = (n: number) => `value: ${n.toString()}`
// const upper = (s: string) => s.toUpperCase()


// const __TEST1__: string = pipe(add(2), format, upper)(1)
// const __TEST2__: string = pipe(add(2), upper)(1) // Error: Type 'number' is not assignable to type 'string'.
// const __TEST3__: string = pipe(add(2), format)("") // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// const __TEST4__: string = pipe(add(2), format)(1)
// const __TEST5__: number = pipe(add(2), add(2))(1)
