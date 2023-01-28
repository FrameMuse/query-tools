import _ from "lodash"
import { CamelCasedPropertiesDeep, KebabCasedPropertiesDeep, SnakeCasedPropertiesDeep } from "type-fest"
import { SimplifyDeep } from "type-fest/source/merge-deep"

import { isDictionary, mapKeysDeep } from "./helpers"

type Casing = "camel" | "snake" | "kebab"

interface MappingOptions {
  /**
   * Transform **keys** to chosen casing.
   */
  casing?: Casing
}

function casingTransform(value: string, casing?: Casing): string {
  switch (casing) {
    case "camel": return _.camelCase(value)
    case "snake": return _.snakeCase(value)
    case "kebab": return _.kebabCase(value)
    // case "lower": return _.lowerCase(value)
    // case "upper": return _.upperCase(value)
    // case "start": return _.startCase(value)

    default: return value
  }
}

type CasingPropertiesDeep<V, C extends Casing> =
  C extends "camel" ? CamelCasedPropertiesDeep<V> :
  C extends "snake" ? SnakeCasedPropertiesDeep<V> :
  C extends "kebab" ? KebabCasedPropertiesDeep<V> :
  V

class Mapping<T, NewT> {
  transform: (value: T) => NewT

  // constructor() { }

  /**
   * Arrays and Records are transformed deeply.
   */
  static Options<
    Options extends MappingOptions,
    T,
    NewT = SimplifyDeep<CasingPropertiesDeep<T, NonNullable<Options["casing"]>>>
  >(options: Options): (value: T) => NewT {
    return (value): NewT => {
      if (options.casing) {
        if (isDictionary(value)) {
          return mapKeysDeep(value, key => casingTransform(key, options.casing)) as never
        }
      }

      return 1 as never
    }
  }

  // static as = class {
  //   static Enum<E extends EnumType<E>>(enumerator: E): (schemaField: SchemaField) => PlainField<keyof never, E[keyof E]> {
  //     return (field) => {
  //       const value = enumerator[field.value as keyof E]

  //       if (value == null) {
  //         throw new Error("Enum member was not found.", { cause: { field, enumerator } })
  //       }

  //       return [field.key, field.value as E[keyof E]]
  //     }
  //   }

  //   /**
  //    * Plain dictionary to instance (to class).
  //    */
  //   static Instance<C extends ClassConstructor<unknown>>(instance: C): C {
  //     return instance
  //   }

  //   /**
  //    * @example
  //    * {
  //    *   avatar: Transform(imagePath)
  //    * }
  //    */
  //   static Transform<V, R>(transform: (value: V) => R): (schemaField: SchemaField<keyof never, V>) => PlainField<keyof never, R> {
  //     return (schemaField) => {
  //       if (isInstance(transform)) {
  //         return [schemaField.key, new transform(schemaField.value) as R]
  //       }

  //       return [schemaField.key, transform(schemaField.value) as R]
  //     }
  //   }
  // }
}

export default Mapping
