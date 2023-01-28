import { JsonValue, ValueOf } from "type-fest"

import { ContentType, ContentTypeMap } from "./types"

/**
 * Only `JsonType` can be typed.
 */
export type ResolveContentType<T extends ContentType, JsonType = unknown> =
  T extends Exclude<keyof ContentTypeMap, "json"> ? ContentTypeMap[T] :
  T extends "json" ? (JsonType extends JsonValue ? JsonType : JsonValue) :
  never

// export enum RequestMethod {
//   GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS
// }


/**
 * Extracts `{variable}` from `string`.
 */
export type ExtractVariables<T extends string> = T extends `${string}{${infer V}}${infer Tail}` ? V | ExtractVariables<Tail> : never
export type ReplaceVariables<
  Input extends string,
  Variables extends Record<string, string | number>,
> =
  Input extends `${infer Head}{${keyof Variables extends string ? keyof Variables : never}}${infer Tail}` ?
  `${Head}${ValueOf<Variables>}${ReplaceVariables<Tail, Variables>}` :
  Input
