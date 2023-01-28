import { JsonValue, Primitive } from "type-fest"

export type RequestMethod =
  | "get"
  | "head"
  | "post"
  | "put"
  | "patch"
  | "delete"
  | "options"
  | "purge"
  | "link"
  | "unlink"

/**
 * Inferred from `Body` interface.
 */
export type ContentType =
  | "arrayBuffer"
  | "blob"
  | "formData"
  | "json"
  | "text"

export interface ContentTypeMap {
  arrayBuffer: ArrayBuffer
  blob: Blob
  formData: FormData
  json: JsonValue
  text: string
}

export type ContentEncoding =
  | "ascii"
  | "ansi"
  | "binary"
  | "base64"
  | "base64url"
  | "hex"
  | "latin1"
  | "ucs-2"
  | "ucs2"
  | "utf-8"
  | "utf8"
  | "utf16le"

export type PathParams<K extends string> = Record<K, string | number>
export type QueryParams = Record<keyof never, Primitive>
