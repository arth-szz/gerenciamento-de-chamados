
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuarios
 * 
 */
export type Usuarios = $Result.DefaultSelection<Prisma.$UsuariosPayload>
/**
 * Model Chamados
 * 
 */
export type Chamados = $Result.DefaultSelection<Prisma.$ChamadosPayload>
/**
 * Model Respostas
 * 
 */
export type Respostas = $Result.DefaultSelection<Prisma.$RespostasPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  Aberto: 'Aberto',
  EmAndamento: 'EmAndamento',
  Concluido: 'Concluido'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuarios.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuarios.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuarios`: Exposes CRUD operations for the **Usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.UsuariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chamados`: Exposes CRUD operations for the **Chamados** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chamados
    * const chamados = await prisma.chamados.findMany()
    * ```
    */
  get chamados(): Prisma.ChamadosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.respostas`: Exposes CRUD operations for the **Respostas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Respostas
    * const respostas = await prisma.respostas.findMany()
    * ```
    */
  get respostas(): Prisma.RespostasDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuarios: 'Usuarios',
    Chamados: 'Chamados',
    Respostas: 'Respostas'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuarios" | "chamados" | "respostas"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuarios: {
        payload: Prisma.$UsuariosPayload<ExtArgs>
        fields: Prisma.UsuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findFirst: {
            args: Prisma.UsuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findMany: {
            args: Prisma.UsuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>[]
          }
          create: {
            args: Prisma.UsuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          createMany: {
            args: Prisma.UsuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>[]
          }
          delete: {
            args: Prisma.UsuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          update: {
            args: Prisma.UsuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          deleteMany: {
            args: Prisma.UsuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>[]
          }
          upsert: {
            args: Prisma.UsuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.UsuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
      Chamados: {
        payload: Prisma.$ChamadosPayload<ExtArgs>
        fields: Prisma.ChamadosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChamadosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChamadosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadosPayload>
          }
          findFirst: {
            args: Prisma.ChamadosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChamadosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadosPayload>
          }
          findMany: {
            args: Prisma.ChamadosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadosPayload>[]
          }
          create: {
            args: Prisma.ChamadosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadosPayload>
          }
          createMany: {
            args: Prisma.ChamadosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChamadosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadosPayload>[]
          }
          delete: {
            args: Prisma.ChamadosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadosPayload>
          }
          update: {
            args: Prisma.ChamadosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadosPayload>
          }
          deleteMany: {
            args: Prisma.ChamadosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChamadosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChamadosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadosPayload>[]
          }
          upsert: {
            args: Prisma.ChamadosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadosPayload>
          }
          aggregate: {
            args: Prisma.ChamadosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChamados>
          }
          groupBy: {
            args: Prisma.ChamadosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChamadosGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChamadosCountArgs<ExtArgs>
            result: $Utils.Optional<ChamadosCountAggregateOutputType> | number
          }
        }
      }
      Respostas: {
        payload: Prisma.$RespostasPayload<ExtArgs>
        fields: Prisma.RespostasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RespostasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RespostasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostasPayload>
          }
          findFirst: {
            args: Prisma.RespostasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RespostasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostasPayload>
          }
          findMany: {
            args: Prisma.RespostasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostasPayload>[]
          }
          create: {
            args: Prisma.RespostasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostasPayload>
          }
          createMany: {
            args: Prisma.RespostasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RespostasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostasPayload>[]
          }
          delete: {
            args: Prisma.RespostasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostasPayload>
          }
          update: {
            args: Prisma.RespostasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostasPayload>
          }
          deleteMany: {
            args: Prisma.RespostasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RespostasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RespostasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostasPayload>[]
          }
          upsert: {
            args: Prisma.RespostasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostasPayload>
          }
          aggregate: {
            args: Prisma.RespostasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRespostas>
          }
          groupBy: {
            args: Prisma.RespostasGroupByArgs<ExtArgs>
            result: $Utils.Optional<RespostasGroupByOutputType>[]
          }
          count: {
            args: Prisma.RespostasCountArgs<ExtArgs>
            result: $Utils.Optional<RespostasCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuarios?: UsuariosOmit
    chamados?: ChamadosOmit
    respostas?: RespostasOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    chamados: number
    Respostas: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chamados?: boolean | UsuariosCountOutputTypeCountChamadosArgs
    Respostas?: boolean | UsuariosCountOutputTypeCountRespostasArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountChamadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChamadosWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountRespostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RespostasWhereInput
  }


  /**
   * Count Type ChamadosCountOutputType
   */

  export type ChamadosCountOutputType = {
    Respostas: number
  }

  export type ChamadosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Respostas?: boolean | ChamadosCountOutputTypeCountRespostasArgs
  }

  // Custom InputTypes
  /**
   * ChamadosCountOutputType without action
   */
  export type ChamadosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChamadosCountOutputType
     */
    select?: ChamadosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChamadosCountOutputType without action
   */
  export type ChamadosCountOutputTypeCountRespostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RespostasWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senha: string | null
    ehAdm: boolean | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senha: string | null
    ehAdm: boolean | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    ehAdm: number
    _all: number
  }


  export type UsuariosMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    ehAdm?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    ehAdm?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    ehAdm?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to aggregate.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type UsuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuariosWhereInput
    orderBy?: UsuariosOrderByWithAggregationInput | UsuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: UsuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id: string
    nome: string
    email: string
    senha: string
    ehAdm: boolean
    _count: UsuariosCountAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends UsuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type UsuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    ehAdm?: boolean
    chamados?: boolean | Usuarios$chamadosArgs<ExtArgs>
    Respostas?: boolean | Usuarios$RespostasArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type UsuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    ehAdm?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type UsuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    ehAdm?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type UsuariosSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    ehAdm?: boolean
  }

  export type UsuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "ehAdm", ExtArgs["result"]["usuarios"]>
  export type UsuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chamados?: boolean | Usuarios$chamadosArgs<ExtArgs>
    Respostas?: boolean | Usuarios$RespostasArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuarios"
    objects: {
      chamados: Prisma.$ChamadosPayload<ExtArgs>[]
      Respostas: Prisma.$RespostasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      senha: string
      ehAdm: boolean
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type UsuariosGetPayload<S extends boolean | null | undefined | UsuariosDefaultArgs> = $Result.GetResult<Prisma.$UsuariosPayload, S>

  type UsuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface UsuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuarios'], meta: { name: 'Usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {UsuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuariosFindUniqueArgs>(args: SelectSubset<T, UsuariosFindUniqueArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuariosFindFirstArgs>(args?: SelectSubset<T, UsuariosFindFirstArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuariosFindManyArgs>(args?: SelectSubset<T, UsuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {UsuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends UsuariosCreateArgs>(args: SelectSubset<T, UsuariosCreateArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuariosCreateManyArgs>(args?: SelectSubset<T, UsuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuarios.
     * @param {UsuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends UsuariosDeleteArgs>(args: SelectSubset<T, UsuariosDeleteArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {UsuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuariosUpdateArgs>(args: SelectSubset<T, UsuariosUpdateArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuariosDeleteManyArgs>(args?: SelectSubset<T, UsuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuariosUpdateManyArgs>(args: SelectSubset<T, UsuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuariosUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuarios.
     * @param {UsuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends UsuariosUpsertArgs>(args: SelectSubset<T, UsuariosUpsertArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuariosCountArgs>(
      args?: Subset<T, UsuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuariosGroupByArgs['orderBy'] }
        : { orderBy?: UsuariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuarios model
   */
  readonly fields: UsuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chamados<T extends Usuarios$chamadosArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$chamadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChamadosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Respostas<T extends Usuarios$RespostasArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$RespostasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespostasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuarios model
   */
  interface UsuariosFieldRefs {
    readonly id: FieldRef<"Usuarios", 'String'>
    readonly nome: FieldRef<"Usuarios", 'String'>
    readonly email: FieldRef<"Usuarios", 'String'>
    readonly senha: FieldRef<"Usuarios", 'String'>
    readonly ehAdm: FieldRef<"Usuarios", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Usuarios findUnique
   */
  export type UsuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios findUniqueOrThrow
   */
  export type UsuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios findFirst
   */
  export type UsuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios findFirstOrThrow
   */
  export type UsuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios findMany
   */
  export type UsuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios create
   */
  export type UsuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuarios.
     */
    data: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
  }

  /**
   * Usuarios createMany
   */
  export type UsuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuariosCreateManyInput | UsuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuarios createManyAndReturn
   */
  export type UsuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuariosCreateManyInput | UsuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuarios update
   */
  export type UsuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuarios.
     */
    data: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
    /**
     * Choose, which Usuarios to update.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios updateMany
   */
  export type UsuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuariosUpdateManyMutationInput, UsuariosUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuarios updateManyAndReturn
   */
  export type UsuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuariosUpdateManyMutationInput, UsuariosUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuarios upsert
   */
  export type UsuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuarios to update in case it exists.
     */
    where: UsuariosWhereUniqueInput
    /**
     * In case the Usuarios found by the `where` argument doesn't exist, create a new Usuarios with this data.
     */
    create: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
    /**
     * In case the Usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
  }

  /**
   * Usuarios delete
   */
  export type UsuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter which Usuarios to delete.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios deleteMany
   */
  export type UsuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuarios.chamados
   */
  export type Usuarios$chamadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamados
     */
    select?: ChamadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamados
     */
    omit?: ChamadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadosInclude<ExtArgs> | null
    where?: ChamadosWhereInput
    orderBy?: ChamadosOrderByWithRelationInput | ChamadosOrderByWithRelationInput[]
    cursor?: ChamadosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChamadosScalarFieldEnum | ChamadosScalarFieldEnum[]
  }

  /**
   * Usuarios.Respostas
   */
  export type Usuarios$RespostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respostas
     */
    select?: RespostasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Respostas
     */
    omit?: RespostasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostasInclude<ExtArgs> | null
    where?: RespostasWhereInput
    orderBy?: RespostasOrderByWithRelationInput | RespostasOrderByWithRelationInput[]
    cursor?: RespostasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RespostasScalarFieldEnum | RespostasScalarFieldEnum[]
  }

  /**
   * Usuarios without action
   */
  export type UsuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
  }


  /**
   * Model Chamados
   */

  export type AggregateChamados = {
    _count: ChamadosCountAggregateOutputType | null
    _min: ChamadosMinAggregateOutputType | null
    _max: ChamadosMaxAggregateOutputType | null
  }

  export type ChamadosMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    status: $Enums.Status | null
    dataCriacao: Date | null
    usuarioId: string | null
  }

  export type ChamadosMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    status: $Enums.Status | null
    dataCriacao: Date | null
    usuarioId: string | null
  }

  export type ChamadosCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    status: number
    dataCriacao: number
    usuarioId: number
    _all: number
  }


  export type ChamadosMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    status?: true
    dataCriacao?: true
    usuarioId?: true
  }

  export type ChamadosMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    status?: true
    dataCriacao?: true
    usuarioId?: true
  }

  export type ChamadosCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    status?: true
    dataCriacao?: true
    usuarioId?: true
    _all?: true
  }

  export type ChamadosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chamados to aggregate.
     */
    where?: ChamadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chamados to fetch.
     */
    orderBy?: ChamadosOrderByWithRelationInput | ChamadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChamadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chamados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chamados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chamados
    **/
    _count?: true | ChamadosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChamadosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChamadosMaxAggregateInputType
  }

  export type GetChamadosAggregateType<T extends ChamadosAggregateArgs> = {
        [P in keyof T & keyof AggregateChamados]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChamados[P]>
      : GetScalarType<T[P], AggregateChamados[P]>
  }




  export type ChamadosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChamadosWhereInput
    orderBy?: ChamadosOrderByWithAggregationInput | ChamadosOrderByWithAggregationInput[]
    by: ChamadosScalarFieldEnum[] | ChamadosScalarFieldEnum
    having?: ChamadosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChamadosCountAggregateInputType | true
    _min?: ChamadosMinAggregateInputType
    _max?: ChamadosMaxAggregateInputType
  }

  export type ChamadosGroupByOutputType = {
    id: string
    titulo: string
    descricao: string
    status: $Enums.Status
    dataCriacao: Date
    usuarioId: string
    _count: ChamadosCountAggregateOutputType | null
    _min: ChamadosMinAggregateOutputType | null
    _max: ChamadosMaxAggregateOutputType | null
  }

  type GetChamadosGroupByPayload<T extends ChamadosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChamadosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChamadosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChamadosGroupByOutputType[P]>
            : GetScalarType<T[P], ChamadosGroupByOutputType[P]>
        }
      >
    >


  export type ChamadosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    status?: boolean
    dataCriacao?: boolean
    usuarioId?: boolean
    usuarios?: boolean | UsuariosDefaultArgs<ExtArgs>
    Respostas?: boolean | Chamados$RespostasArgs<ExtArgs>
    _count?: boolean | ChamadosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chamados"]>

  export type ChamadosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    status?: boolean
    dataCriacao?: boolean
    usuarioId?: boolean
    usuarios?: boolean | UsuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chamados"]>

  export type ChamadosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    status?: boolean
    dataCriacao?: boolean
    usuarioId?: boolean
    usuarios?: boolean | UsuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chamados"]>

  export type ChamadosSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    status?: boolean
    dataCriacao?: boolean
    usuarioId?: boolean
  }

  export type ChamadosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descricao" | "status" | "dataCriacao" | "usuarioId", ExtArgs["result"]["chamados"]>
  export type ChamadosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | UsuariosDefaultArgs<ExtArgs>
    Respostas?: boolean | Chamados$RespostasArgs<ExtArgs>
    _count?: boolean | ChamadosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChamadosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | UsuariosDefaultArgs<ExtArgs>
  }
  export type ChamadosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | UsuariosDefaultArgs<ExtArgs>
  }

  export type $ChamadosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chamados"
    objects: {
      usuarios: Prisma.$UsuariosPayload<ExtArgs>
      Respostas: Prisma.$RespostasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      descricao: string
      status: $Enums.Status
      dataCriacao: Date
      usuarioId: string
    }, ExtArgs["result"]["chamados"]>
    composites: {}
  }

  type ChamadosGetPayload<S extends boolean | null | undefined | ChamadosDefaultArgs> = $Result.GetResult<Prisma.$ChamadosPayload, S>

  type ChamadosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChamadosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChamadosCountAggregateInputType | true
    }

  export interface ChamadosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chamados'], meta: { name: 'Chamados' } }
    /**
     * Find zero or one Chamados that matches the filter.
     * @param {ChamadosFindUniqueArgs} args - Arguments to find a Chamados
     * @example
     * // Get one Chamados
     * const chamados = await prisma.chamados.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChamadosFindUniqueArgs>(args: SelectSubset<T, ChamadosFindUniqueArgs<ExtArgs>>): Prisma__ChamadosClient<$Result.GetResult<Prisma.$ChamadosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chamados that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChamadosFindUniqueOrThrowArgs} args - Arguments to find a Chamados
     * @example
     * // Get one Chamados
     * const chamados = await prisma.chamados.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChamadosFindUniqueOrThrowArgs>(args: SelectSubset<T, ChamadosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChamadosClient<$Result.GetResult<Prisma.$ChamadosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chamados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChamadosFindFirstArgs} args - Arguments to find a Chamados
     * @example
     * // Get one Chamados
     * const chamados = await prisma.chamados.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChamadosFindFirstArgs>(args?: SelectSubset<T, ChamadosFindFirstArgs<ExtArgs>>): Prisma__ChamadosClient<$Result.GetResult<Prisma.$ChamadosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chamados that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChamadosFindFirstOrThrowArgs} args - Arguments to find a Chamados
     * @example
     * // Get one Chamados
     * const chamados = await prisma.chamados.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChamadosFindFirstOrThrowArgs>(args?: SelectSubset<T, ChamadosFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChamadosClient<$Result.GetResult<Prisma.$ChamadosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chamados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChamadosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chamados
     * const chamados = await prisma.chamados.findMany()
     * 
     * // Get first 10 Chamados
     * const chamados = await prisma.chamados.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chamadosWithIdOnly = await prisma.chamados.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChamadosFindManyArgs>(args?: SelectSubset<T, ChamadosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChamadosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chamados.
     * @param {ChamadosCreateArgs} args - Arguments to create a Chamados.
     * @example
     * // Create one Chamados
     * const Chamados = await prisma.chamados.create({
     *   data: {
     *     // ... data to create a Chamados
     *   }
     * })
     * 
     */
    create<T extends ChamadosCreateArgs>(args: SelectSubset<T, ChamadosCreateArgs<ExtArgs>>): Prisma__ChamadosClient<$Result.GetResult<Prisma.$ChamadosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chamados.
     * @param {ChamadosCreateManyArgs} args - Arguments to create many Chamados.
     * @example
     * // Create many Chamados
     * const chamados = await prisma.chamados.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChamadosCreateManyArgs>(args?: SelectSubset<T, ChamadosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chamados and returns the data saved in the database.
     * @param {ChamadosCreateManyAndReturnArgs} args - Arguments to create many Chamados.
     * @example
     * // Create many Chamados
     * const chamados = await prisma.chamados.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chamados and only return the `id`
     * const chamadosWithIdOnly = await prisma.chamados.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChamadosCreateManyAndReturnArgs>(args?: SelectSubset<T, ChamadosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChamadosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chamados.
     * @param {ChamadosDeleteArgs} args - Arguments to delete one Chamados.
     * @example
     * // Delete one Chamados
     * const Chamados = await prisma.chamados.delete({
     *   where: {
     *     // ... filter to delete one Chamados
     *   }
     * })
     * 
     */
    delete<T extends ChamadosDeleteArgs>(args: SelectSubset<T, ChamadosDeleteArgs<ExtArgs>>): Prisma__ChamadosClient<$Result.GetResult<Prisma.$ChamadosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chamados.
     * @param {ChamadosUpdateArgs} args - Arguments to update one Chamados.
     * @example
     * // Update one Chamados
     * const chamados = await prisma.chamados.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChamadosUpdateArgs>(args: SelectSubset<T, ChamadosUpdateArgs<ExtArgs>>): Prisma__ChamadosClient<$Result.GetResult<Prisma.$ChamadosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chamados.
     * @param {ChamadosDeleteManyArgs} args - Arguments to filter Chamados to delete.
     * @example
     * // Delete a few Chamados
     * const { count } = await prisma.chamados.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChamadosDeleteManyArgs>(args?: SelectSubset<T, ChamadosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chamados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChamadosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chamados
     * const chamados = await prisma.chamados.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChamadosUpdateManyArgs>(args: SelectSubset<T, ChamadosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chamados and returns the data updated in the database.
     * @param {ChamadosUpdateManyAndReturnArgs} args - Arguments to update many Chamados.
     * @example
     * // Update many Chamados
     * const chamados = await prisma.chamados.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chamados and only return the `id`
     * const chamadosWithIdOnly = await prisma.chamados.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChamadosUpdateManyAndReturnArgs>(args: SelectSubset<T, ChamadosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChamadosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chamados.
     * @param {ChamadosUpsertArgs} args - Arguments to update or create a Chamados.
     * @example
     * // Update or create a Chamados
     * const chamados = await prisma.chamados.upsert({
     *   create: {
     *     // ... data to create a Chamados
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chamados we want to update
     *   }
     * })
     */
    upsert<T extends ChamadosUpsertArgs>(args: SelectSubset<T, ChamadosUpsertArgs<ExtArgs>>): Prisma__ChamadosClient<$Result.GetResult<Prisma.$ChamadosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chamados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChamadosCountArgs} args - Arguments to filter Chamados to count.
     * @example
     * // Count the number of Chamados
     * const count = await prisma.chamados.count({
     *   where: {
     *     // ... the filter for the Chamados we want to count
     *   }
     * })
    **/
    count<T extends ChamadosCountArgs>(
      args?: Subset<T, ChamadosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChamadosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chamados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChamadosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChamadosAggregateArgs>(args: Subset<T, ChamadosAggregateArgs>): Prisma.PrismaPromise<GetChamadosAggregateType<T>>

    /**
     * Group by Chamados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChamadosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChamadosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChamadosGroupByArgs['orderBy'] }
        : { orderBy?: ChamadosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChamadosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChamadosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chamados model
   */
  readonly fields: ChamadosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chamados.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChamadosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends UsuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuariosDefaultArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Respostas<T extends Chamados$RespostasArgs<ExtArgs> = {}>(args?: Subset<T, Chamados$RespostasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespostasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chamados model
   */
  interface ChamadosFieldRefs {
    readonly id: FieldRef<"Chamados", 'String'>
    readonly titulo: FieldRef<"Chamados", 'String'>
    readonly descricao: FieldRef<"Chamados", 'String'>
    readonly status: FieldRef<"Chamados", 'Status'>
    readonly dataCriacao: FieldRef<"Chamados", 'DateTime'>
    readonly usuarioId: FieldRef<"Chamados", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Chamados findUnique
   */
  export type ChamadosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamados
     */
    select?: ChamadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamados
     */
    omit?: ChamadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadosInclude<ExtArgs> | null
    /**
     * Filter, which Chamados to fetch.
     */
    where: ChamadosWhereUniqueInput
  }

  /**
   * Chamados findUniqueOrThrow
   */
  export type ChamadosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamados
     */
    select?: ChamadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamados
     */
    omit?: ChamadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadosInclude<ExtArgs> | null
    /**
     * Filter, which Chamados to fetch.
     */
    where: ChamadosWhereUniqueInput
  }

  /**
   * Chamados findFirst
   */
  export type ChamadosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamados
     */
    select?: ChamadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamados
     */
    omit?: ChamadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadosInclude<ExtArgs> | null
    /**
     * Filter, which Chamados to fetch.
     */
    where?: ChamadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chamados to fetch.
     */
    orderBy?: ChamadosOrderByWithRelationInput | ChamadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chamados.
     */
    cursor?: ChamadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chamados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chamados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chamados.
     */
    distinct?: ChamadosScalarFieldEnum | ChamadosScalarFieldEnum[]
  }

  /**
   * Chamados findFirstOrThrow
   */
  export type ChamadosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamados
     */
    select?: ChamadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamados
     */
    omit?: ChamadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadosInclude<ExtArgs> | null
    /**
     * Filter, which Chamados to fetch.
     */
    where?: ChamadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chamados to fetch.
     */
    orderBy?: ChamadosOrderByWithRelationInput | ChamadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chamados.
     */
    cursor?: ChamadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chamados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chamados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chamados.
     */
    distinct?: ChamadosScalarFieldEnum | ChamadosScalarFieldEnum[]
  }

  /**
   * Chamados findMany
   */
  export type ChamadosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamados
     */
    select?: ChamadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamados
     */
    omit?: ChamadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadosInclude<ExtArgs> | null
    /**
     * Filter, which Chamados to fetch.
     */
    where?: ChamadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chamados to fetch.
     */
    orderBy?: ChamadosOrderByWithRelationInput | ChamadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chamados.
     */
    cursor?: ChamadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chamados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chamados.
     */
    skip?: number
    distinct?: ChamadosScalarFieldEnum | ChamadosScalarFieldEnum[]
  }

  /**
   * Chamados create
   */
  export type ChamadosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamados
     */
    select?: ChamadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamados
     */
    omit?: ChamadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadosInclude<ExtArgs> | null
    /**
     * The data needed to create a Chamados.
     */
    data: XOR<ChamadosCreateInput, ChamadosUncheckedCreateInput>
  }

  /**
   * Chamados createMany
   */
  export type ChamadosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chamados.
     */
    data: ChamadosCreateManyInput | ChamadosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chamados createManyAndReturn
   */
  export type ChamadosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamados
     */
    select?: ChamadosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chamados
     */
    omit?: ChamadosOmit<ExtArgs> | null
    /**
     * The data used to create many Chamados.
     */
    data: ChamadosCreateManyInput | ChamadosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chamados update
   */
  export type ChamadosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamados
     */
    select?: ChamadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamados
     */
    omit?: ChamadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadosInclude<ExtArgs> | null
    /**
     * The data needed to update a Chamados.
     */
    data: XOR<ChamadosUpdateInput, ChamadosUncheckedUpdateInput>
    /**
     * Choose, which Chamados to update.
     */
    where: ChamadosWhereUniqueInput
  }

  /**
   * Chamados updateMany
   */
  export type ChamadosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chamados.
     */
    data: XOR<ChamadosUpdateManyMutationInput, ChamadosUncheckedUpdateManyInput>
    /**
     * Filter which Chamados to update
     */
    where?: ChamadosWhereInput
    /**
     * Limit how many Chamados to update.
     */
    limit?: number
  }

  /**
   * Chamados updateManyAndReturn
   */
  export type ChamadosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamados
     */
    select?: ChamadosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chamados
     */
    omit?: ChamadosOmit<ExtArgs> | null
    /**
     * The data used to update Chamados.
     */
    data: XOR<ChamadosUpdateManyMutationInput, ChamadosUncheckedUpdateManyInput>
    /**
     * Filter which Chamados to update
     */
    where?: ChamadosWhereInput
    /**
     * Limit how many Chamados to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chamados upsert
   */
  export type ChamadosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamados
     */
    select?: ChamadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamados
     */
    omit?: ChamadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadosInclude<ExtArgs> | null
    /**
     * The filter to search for the Chamados to update in case it exists.
     */
    where: ChamadosWhereUniqueInput
    /**
     * In case the Chamados found by the `where` argument doesn't exist, create a new Chamados with this data.
     */
    create: XOR<ChamadosCreateInput, ChamadosUncheckedCreateInput>
    /**
     * In case the Chamados was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChamadosUpdateInput, ChamadosUncheckedUpdateInput>
  }

  /**
   * Chamados delete
   */
  export type ChamadosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamados
     */
    select?: ChamadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamados
     */
    omit?: ChamadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadosInclude<ExtArgs> | null
    /**
     * Filter which Chamados to delete.
     */
    where: ChamadosWhereUniqueInput
  }

  /**
   * Chamados deleteMany
   */
  export type ChamadosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chamados to delete
     */
    where?: ChamadosWhereInput
    /**
     * Limit how many Chamados to delete.
     */
    limit?: number
  }

  /**
   * Chamados.Respostas
   */
  export type Chamados$RespostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respostas
     */
    select?: RespostasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Respostas
     */
    omit?: RespostasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostasInclude<ExtArgs> | null
    where?: RespostasWhereInput
    orderBy?: RespostasOrderByWithRelationInput | RespostasOrderByWithRelationInput[]
    cursor?: RespostasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RespostasScalarFieldEnum | RespostasScalarFieldEnum[]
  }

  /**
   * Chamados without action
   */
  export type ChamadosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamados
     */
    select?: ChamadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamados
     */
    omit?: ChamadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadosInclude<ExtArgs> | null
  }


  /**
   * Model Respostas
   */

  export type AggregateRespostas = {
    _count: RespostasCountAggregateOutputType | null
    _min: RespostasMinAggregateOutputType | null
    _max: RespostasMaxAggregateOutputType | null
  }

  export type RespostasMinAggregateOutputType = {
    id: string | null
    mensagem: string | null
    chamadoId: string | null
    dataEnvio: Date | null
    usuarioId: string | null
  }

  export type RespostasMaxAggregateOutputType = {
    id: string | null
    mensagem: string | null
    chamadoId: string | null
    dataEnvio: Date | null
    usuarioId: string | null
  }

  export type RespostasCountAggregateOutputType = {
    id: number
    mensagem: number
    chamadoId: number
    dataEnvio: number
    usuarioId: number
    _all: number
  }


  export type RespostasMinAggregateInputType = {
    id?: true
    mensagem?: true
    chamadoId?: true
    dataEnvio?: true
    usuarioId?: true
  }

  export type RespostasMaxAggregateInputType = {
    id?: true
    mensagem?: true
    chamadoId?: true
    dataEnvio?: true
    usuarioId?: true
  }

  export type RespostasCountAggregateInputType = {
    id?: true
    mensagem?: true
    chamadoId?: true
    dataEnvio?: true
    usuarioId?: true
    _all?: true
  }

  export type RespostasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Respostas to aggregate.
     */
    where?: RespostasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Respostas to fetch.
     */
    orderBy?: RespostasOrderByWithRelationInput | RespostasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RespostasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Respostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Respostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Respostas
    **/
    _count?: true | RespostasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RespostasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RespostasMaxAggregateInputType
  }

  export type GetRespostasAggregateType<T extends RespostasAggregateArgs> = {
        [P in keyof T & keyof AggregateRespostas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRespostas[P]>
      : GetScalarType<T[P], AggregateRespostas[P]>
  }




  export type RespostasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RespostasWhereInput
    orderBy?: RespostasOrderByWithAggregationInput | RespostasOrderByWithAggregationInput[]
    by: RespostasScalarFieldEnum[] | RespostasScalarFieldEnum
    having?: RespostasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RespostasCountAggregateInputType | true
    _min?: RespostasMinAggregateInputType
    _max?: RespostasMaxAggregateInputType
  }

  export type RespostasGroupByOutputType = {
    id: string
    mensagem: string
    chamadoId: string
    dataEnvio: Date
    usuarioId: string
    _count: RespostasCountAggregateOutputType | null
    _min: RespostasMinAggregateOutputType | null
    _max: RespostasMaxAggregateOutputType | null
  }

  type GetRespostasGroupByPayload<T extends RespostasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RespostasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RespostasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RespostasGroupByOutputType[P]>
            : GetScalarType<T[P], RespostasGroupByOutputType[P]>
        }
      >
    >


  export type RespostasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mensagem?: boolean
    chamadoId?: boolean
    dataEnvio?: boolean
    usuarioId?: boolean
    chamado_id?: boolean | ChamadosDefaultArgs<ExtArgs>
    usuario_id?: boolean | UsuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["respostas"]>

  export type RespostasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mensagem?: boolean
    chamadoId?: boolean
    dataEnvio?: boolean
    usuarioId?: boolean
    chamado_id?: boolean | ChamadosDefaultArgs<ExtArgs>
    usuario_id?: boolean | UsuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["respostas"]>

  export type RespostasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mensagem?: boolean
    chamadoId?: boolean
    dataEnvio?: boolean
    usuarioId?: boolean
    chamado_id?: boolean | ChamadosDefaultArgs<ExtArgs>
    usuario_id?: boolean | UsuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["respostas"]>

  export type RespostasSelectScalar = {
    id?: boolean
    mensagem?: boolean
    chamadoId?: boolean
    dataEnvio?: boolean
    usuarioId?: boolean
  }

  export type RespostasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mensagem" | "chamadoId" | "dataEnvio" | "usuarioId", ExtArgs["result"]["respostas"]>
  export type RespostasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chamado_id?: boolean | ChamadosDefaultArgs<ExtArgs>
    usuario_id?: boolean | UsuariosDefaultArgs<ExtArgs>
  }
  export type RespostasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chamado_id?: boolean | ChamadosDefaultArgs<ExtArgs>
    usuario_id?: boolean | UsuariosDefaultArgs<ExtArgs>
  }
  export type RespostasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chamado_id?: boolean | ChamadosDefaultArgs<ExtArgs>
    usuario_id?: boolean | UsuariosDefaultArgs<ExtArgs>
  }

  export type $RespostasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Respostas"
    objects: {
      chamado_id: Prisma.$ChamadosPayload<ExtArgs>
      usuario_id: Prisma.$UsuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mensagem: string
      chamadoId: string
      dataEnvio: Date
      usuarioId: string
    }, ExtArgs["result"]["respostas"]>
    composites: {}
  }

  type RespostasGetPayload<S extends boolean | null | undefined | RespostasDefaultArgs> = $Result.GetResult<Prisma.$RespostasPayload, S>

  type RespostasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RespostasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RespostasCountAggregateInputType | true
    }

  export interface RespostasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Respostas'], meta: { name: 'Respostas' } }
    /**
     * Find zero or one Respostas that matches the filter.
     * @param {RespostasFindUniqueArgs} args - Arguments to find a Respostas
     * @example
     * // Get one Respostas
     * const respostas = await prisma.respostas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RespostasFindUniqueArgs>(args: SelectSubset<T, RespostasFindUniqueArgs<ExtArgs>>): Prisma__RespostasClient<$Result.GetResult<Prisma.$RespostasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Respostas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RespostasFindUniqueOrThrowArgs} args - Arguments to find a Respostas
     * @example
     * // Get one Respostas
     * const respostas = await prisma.respostas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RespostasFindUniqueOrThrowArgs>(args: SelectSubset<T, RespostasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RespostasClient<$Result.GetResult<Prisma.$RespostasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Respostas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostasFindFirstArgs} args - Arguments to find a Respostas
     * @example
     * // Get one Respostas
     * const respostas = await prisma.respostas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RespostasFindFirstArgs>(args?: SelectSubset<T, RespostasFindFirstArgs<ExtArgs>>): Prisma__RespostasClient<$Result.GetResult<Prisma.$RespostasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Respostas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostasFindFirstOrThrowArgs} args - Arguments to find a Respostas
     * @example
     * // Get one Respostas
     * const respostas = await prisma.respostas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RespostasFindFirstOrThrowArgs>(args?: SelectSubset<T, RespostasFindFirstOrThrowArgs<ExtArgs>>): Prisma__RespostasClient<$Result.GetResult<Prisma.$RespostasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Respostas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Respostas
     * const respostas = await prisma.respostas.findMany()
     * 
     * // Get first 10 Respostas
     * const respostas = await prisma.respostas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const respostasWithIdOnly = await prisma.respostas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RespostasFindManyArgs>(args?: SelectSubset<T, RespostasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespostasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Respostas.
     * @param {RespostasCreateArgs} args - Arguments to create a Respostas.
     * @example
     * // Create one Respostas
     * const Respostas = await prisma.respostas.create({
     *   data: {
     *     // ... data to create a Respostas
     *   }
     * })
     * 
     */
    create<T extends RespostasCreateArgs>(args: SelectSubset<T, RespostasCreateArgs<ExtArgs>>): Prisma__RespostasClient<$Result.GetResult<Prisma.$RespostasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Respostas.
     * @param {RespostasCreateManyArgs} args - Arguments to create many Respostas.
     * @example
     * // Create many Respostas
     * const respostas = await prisma.respostas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RespostasCreateManyArgs>(args?: SelectSubset<T, RespostasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Respostas and returns the data saved in the database.
     * @param {RespostasCreateManyAndReturnArgs} args - Arguments to create many Respostas.
     * @example
     * // Create many Respostas
     * const respostas = await prisma.respostas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Respostas and only return the `id`
     * const respostasWithIdOnly = await prisma.respostas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RespostasCreateManyAndReturnArgs>(args?: SelectSubset<T, RespostasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespostasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Respostas.
     * @param {RespostasDeleteArgs} args - Arguments to delete one Respostas.
     * @example
     * // Delete one Respostas
     * const Respostas = await prisma.respostas.delete({
     *   where: {
     *     // ... filter to delete one Respostas
     *   }
     * })
     * 
     */
    delete<T extends RespostasDeleteArgs>(args: SelectSubset<T, RespostasDeleteArgs<ExtArgs>>): Prisma__RespostasClient<$Result.GetResult<Prisma.$RespostasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Respostas.
     * @param {RespostasUpdateArgs} args - Arguments to update one Respostas.
     * @example
     * // Update one Respostas
     * const respostas = await prisma.respostas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RespostasUpdateArgs>(args: SelectSubset<T, RespostasUpdateArgs<ExtArgs>>): Prisma__RespostasClient<$Result.GetResult<Prisma.$RespostasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Respostas.
     * @param {RespostasDeleteManyArgs} args - Arguments to filter Respostas to delete.
     * @example
     * // Delete a few Respostas
     * const { count } = await prisma.respostas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RespostasDeleteManyArgs>(args?: SelectSubset<T, RespostasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Respostas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Respostas
     * const respostas = await prisma.respostas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RespostasUpdateManyArgs>(args: SelectSubset<T, RespostasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Respostas and returns the data updated in the database.
     * @param {RespostasUpdateManyAndReturnArgs} args - Arguments to update many Respostas.
     * @example
     * // Update many Respostas
     * const respostas = await prisma.respostas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Respostas and only return the `id`
     * const respostasWithIdOnly = await prisma.respostas.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RespostasUpdateManyAndReturnArgs>(args: SelectSubset<T, RespostasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespostasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Respostas.
     * @param {RespostasUpsertArgs} args - Arguments to update or create a Respostas.
     * @example
     * // Update or create a Respostas
     * const respostas = await prisma.respostas.upsert({
     *   create: {
     *     // ... data to create a Respostas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Respostas we want to update
     *   }
     * })
     */
    upsert<T extends RespostasUpsertArgs>(args: SelectSubset<T, RespostasUpsertArgs<ExtArgs>>): Prisma__RespostasClient<$Result.GetResult<Prisma.$RespostasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Respostas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostasCountArgs} args - Arguments to filter Respostas to count.
     * @example
     * // Count the number of Respostas
     * const count = await prisma.respostas.count({
     *   where: {
     *     // ... the filter for the Respostas we want to count
     *   }
     * })
    **/
    count<T extends RespostasCountArgs>(
      args?: Subset<T, RespostasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RespostasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Respostas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RespostasAggregateArgs>(args: Subset<T, RespostasAggregateArgs>): Prisma.PrismaPromise<GetRespostasAggregateType<T>>

    /**
     * Group by Respostas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RespostasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RespostasGroupByArgs['orderBy'] }
        : { orderBy?: RespostasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RespostasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRespostasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Respostas model
   */
  readonly fields: RespostasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Respostas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RespostasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chamado_id<T extends ChamadosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChamadosDefaultArgs<ExtArgs>>): Prisma__ChamadosClient<$Result.GetResult<Prisma.$ChamadosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario_id<T extends UsuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuariosDefaultArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Respostas model
   */
  interface RespostasFieldRefs {
    readonly id: FieldRef<"Respostas", 'String'>
    readonly mensagem: FieldRef<"Respostas", 'String'>
    readonly chamadoId: FieldRef<"Respostas", 'String'>
    readonly dataEnvio: FieldRef<"Respostas", 'DateTime'>
    readonly usuarioId: FieldRef<"Respostas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Respostas findUnique
   */
  export type RespostasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respostas
     */
    select?: RespostasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Respostas
     */
    omit?: RespostasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostasInclude<ExtArgs> | null
    /**
     * Filter, which Respostas to fetch.
     */
    where: RespostasWhereUniqueInput
  }

  /**
   * Respostas findUniqueOrThrow
   */
  export type RespostasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respostas
     */
    select?: RespostasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Respostas
     */
    omit?: RespostasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostasInclude<ExtArgs> | null
    /**
     * Filter, which Respostas to fetch.
     */
    where: RespostasWhereUniqueInput
  }

  /**
   * Respostas findFirst
   */
  export type RespostasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respostas
     */
    select?: RespostasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Respostas
     */
    omit?: RespostasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostasInclude<ExtArgs> | null
    /**
     * Filter, which Respostas to fetch.
     */
    where?: RespostasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Respostas to fetch.
     */
    orderBy?: RespostasOrderByWithRelationInput | RespostasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Respostas.
     */
    cursor?: RespostasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Respostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Respostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Respostas.
     */
    distinct?: RespostasScalarFieldEnum | RespostasScalarFieldEnum[]
  }

  /**
   * Respostas findFirstOrThrow
   */
  export type RespostasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respostas
     */
    select?: RespostasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Respostas
     */
    omit?: RespostasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostasInclude<ExtArgs> | null
    /**
     * Filter, which Respostas to fetch.
     */
    where?: RespostasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Respostas to fetch.
     */
    orderBy?: RespostasOrderByWithRelationInput | RespostasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Respostas.
     */
    cursor?: RespostasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Respostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Respostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Respostas.
     */
    distinct?: RespostasScalarFieldEnum | RespostasScalarFieldEnum[]
  }

  /**
   * Respostas findMany
   */
  export type RespostasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respostas
     */
    select?: RespostasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Respostas
     */
    omit?: RespostasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostasInclude<ExtArgs> | null
    /**
     * Filter, which Respostas to fetch.
     */
    where?: RespostasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Respostas to fetch.
     */
    orderBy?: RespostasOrderByWithRelationInput | RespostasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Respostas.
     */
    cursor?: RespostasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Respostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Respostas.
     */
    skip?: number
    distinct?: RespostasScalarFieldEnum | RespostasScalarFieldEnum[]
  }

  /**
   * Respostas create
   */
  export type RespostasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respostas
     */
    select?: RespostasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Respostas
     */
    omit?: RespostasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostasInclude<ExtArgs> | null
    /**
     * The data needed to create a Respostas.
     */
    data: XOR<RespostasCreateInput, RespostasUncheckedCreateInput>
  }

  /**
   * Respostas createMany
   */
  export type RespostasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Respostas.
     */
    data: RespostasCreateManyInput | RespostasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Respostas createManyAndReturn
   */
  export type RespostasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respostas
     */
    select?: RespostasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Respostas
     */
    omit?: RespostasOmit<ExtArgs> | null
    /**
     * The data used to create many Respostas.
     */
    data: RespostasCreateManyInput | RespostasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Respostas update
   */
  export type RespostasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respostas
     */
    select?: RespostasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Respostas
     */
    omit?: RespostasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostasInclude<ExtArgs> | null
    /**
     * The data needed to update a Respostas.
     */
    data: XOR<RespostasUpdateInput, RespostasUncheckedUpdateInput>
    /**
     * Choose, which Respostas to update.
     */
    where: RespostasWhereUniqueInput
  }

  /**
   * Respostas updateMany
   */
  export type RespostasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Respostas.
     */
    data: XOR<RespostasUpdateManyMutationInput, RespostasUncheckedUpdateManyInput>
    /**
     * Filter which Respostas to update
     */
    where?: RespostasWhereInput
    /**
     * Limit how many Respostas to update.
     */
    limit?: number
  }

  /**
   * Respostas updateManyAndReturn
   */
  export type RespostasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respostas
     */
    select?: RespostasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Respostas
     */
    omit?: RespostasOmit<ExtArgs> | null
    /**
     * The data used to update Respostas.
     */
    data: XOR<RespostasUpdateManyMutationInput, RespostasUncheckedUpdateManyInput>
    /**
     * Filter which Respostas to update
     */
    where?: RespostasWhereInput
    /**
     * Limit how many Respostas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Respostas upsert
   */
  export type RespostasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respostas
     */
    select?: RespostasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Respostas
     */
    omit?: RespostasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostasInclude<ExtArgs> | null
    /**
     * The filter to search for the Respostas to update in case it exists.
     */
    where: RespostasWhereUniqueInput
    /**
     * In case the Respostas found by the `where` argument doesn't exist, create a new Respostas with this data.
     */
    create: XOR<RespostasCreateInput, RespostasUncheckedCreateInput>
    /**
     * In case the Respostas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RespostasUpdateInput, RespostasUncheckedUpdateInput>
  }

  /**
   * Respostas delete
   */
  export type RespostasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respostas
     */
    select?: RespostasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Respostas
     */
    omit?: RespostasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostasInclude<ExtArgs> | null
    /**
     * Filter which Respostas to delete.
     */
    where: RespostasWhereUniqueInput
  }

  /**
   * Respostas deleteMany
   */
  export type RespostasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Respostas to delete
     */
    where?: RespostasWhereInput
    /**
     * Limit how many Respostas to delete.
     */
    limit?: number
  }

  /**
   * Respostas without action
   */
  export type RespostasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respostas
     */
    select?: RespostasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Respostas
     */
    omit?: RespostasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostasInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuariosScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    ehAdm: 'ehAdm'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const ChamadosScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    status: 'status',
    dataCriacao: 'dataCriacao',
    usuarioId: 'usuarioId'
  };

  export type ChamadosScalarFieldEnum = (typeof ChamadosScalarFieldEnum)[keyof typeof ChamadosScalarFieldEnum]


  export const RespostasScalarFieldEnum: {
    id: 'id',
    mensagem: 'mensagem',
    chamadoId: 'chamadoId',
    dataEnvio: 'dataEnvio',
    usuarioId: 'usuarioId'
  };

  export type RespostasScalarFieldEnum = (typeof RespostasScalarFieldEnum)[keyof typeof RespostasScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuariosWhereInput = {
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    id?: StringFilter<"Usuarios"> | string
    nome?: StringFilter<"Usuarios"> | string
    email?: StringFilter<"Usuarios"> | string
    senha?: StringFilter<"Usuarios"> | string
    ehAdm?: BoolFilter<"Usuarios"> | boolean
    chamados?: ChamadosListRelationFilter
    Respostas?: RespostasListRelationFilter
  }

  export type UsuariosOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    ehAdm?: SortOrder
    chamados?: ChamadosOrderByRelationAggregateInput
    Respostas?: RespostasOrderByRelationAggregateInput
  }

  export type UsuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    nome?: StringFilter<"Usuarios"> | string
    senha?: StringFilter<"Usuarios"> | string
    ehAdm?: BoolFilter<"Usuarios"> | boolean
    chamados?: ChamadosListRelationFilter
    Respostas?: RespostasListRelationFilter
  }, "id" | "email">

  export type UsuariosOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    ehAdm?: SortOrder
    _count?: UsuariosCountOrderByAggregateInput
    _max?: UsuariosMaxOrderByAggregateInput
    _min?: UsuariosMinOrderByAggregateInput
  }

  export type UsuariosScalarWhereWithAggregatesInput = {
    AND?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    OR?: UsuariosScalarWhereWithAggregatesInput[]
    NOT?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuarios"> | string
    nome?: StringWithAggregatesFilter<"Usuarios"> | string
    email?: StringWithAggregatesFilter<"Usuarios"> | string
    senha?: StringWithAggregatesFilter<"Usuarios"> | string
    ehAdm?: BoolWithAggregatesFilter<"Usuarios"> | boolean
  }

  export type ChamadosWhereInput = {
    AND?: ChamadosWhereInput | ChamadosWhereInput[]
    OR?: ChamadosWhereInput[]
    NOT?: ChamadosWhereInput | ChamadosWhereInput[]
    id?: StringFilter<"Chamados"> | string
    titulo?: StringFilter<"Chamados"> | string
    descricao?: StringFilter<"Chamados"> | string
    status?: EnumStatusFilter<"Chamados"> | $Enums.Status
    dataCriacao?: DateTimeFilter<"Chamados"> | Date | string
    usuarioId?: StringFilter<"Chamados"> | string
    usuarios?: XOR<UsuariosScalarRelationFilter, UsuariosWhereInput>
    Respostas?: RespostasListRelationFilter
  }

  export type ChamadosOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    dataCriacao?: SortOrder
    usuarioId?: SortOrder
    usuarios?: UsuariosOrderByWithRelationInput
    Respostas?: RespostasOrderByRelationAggregateInput
  }

  export type ChamadosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChamadosWhereInput | ChamadosWhereInput[]
    OR?: ChamadosWhereInput[]
    NOT?: ChamadosWhereInput | ChamadosWhereInput[]
    titulo?: StringFilter<"Chamados"> | string
    descricao?: StringFilter<"Chamados"> | string
    status?: EnumStatusFilter<"Chamados"> | $Enums.Status
    dataCriacao?: DateTimeFilter<"Chamados"> | Date | string
    usuarioId?: StringFilter<"Chamados"> | string
    usuarios?: XOR<UsuariosScalarRelationFilter, UsuariosWhereInput>
    Respostas?: RespostasListRelationFilter
  }, "id">

  export type ChamadosOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    dataCriacao?: SortOrder
    usuarioId?: SortOrder
    _count?: ChamadosCountOrderByAggregateInput
    _max?: ChamadosMaxOrderByAggregateInput
    _min?: ChamadosMinOrderByAggregateInput
  }

  export type ChamadosScalarWhereWithAggregatesInput = {
    AND?: ChamadosScalarWhereWithAggregatesInput | ChamadosScalarWhereWithAggregatesInput[]
    OR?: ChamadosScalarWhereWithAggregatesInput[]
    NOT?: ChamadosScalarWhereWithAggregatesInput | ChamadosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chamados"> | string
    titulo?: StringWithAggregatesFilter<"Chamados"> | string
    descricao?: StringWithAggregatesFilter<"Chamados"> | string
    status?: EnumStatusWithAggregatesFilter<"Chamados"> | $Enums.Status
    dataCriacao?: DateTimeWithAggregatesFilter<"Chamados"> | Date | string
    usuarioId?: StringWithAggregatesFilter<"Chamados"> | string
  }

  export type RespostasWhereInput = {
    AND?: RespostasWhereInput | RespostasWhereInput[]
    OR?: RespostasWhereInput[]
    NOT?: RespostasWhereInput | RespostasWhereInput[]
    id?: StringFilter<"Respostas"> | string
    mensagem?: StringFilter<"Respostas"> | string
    chamadoId?: StringFilter<"Respostas"> | string
    dataEnvio?: DateTimeFilter<"Respostas"> | Date | string
    usuarioId?: StringFilter<"Respostas"> | string
    chamado_id?: XOR<ChamadosScalarRelationFilter, ChamadosWhereInput>
    usuario_id?: XOR<UsuariosScalarRelationFilter, UsuariosWhereInput>
  }

  export type RespostasOrderByWithRelationInput = {
    id?: SortOrder
    mensagem?: SortOrder
    chamadoId?: SortOrder
    dataEnvio?: SortOrder
    usuarioId?: SortOrder
    chamado_id?: ChamadosOrderByWithRelationInput
    usuario_id?: UsuariosOrderByWithRelationInput
  }

  export type RespostasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RespostasWhereInput | RespostasWhereInput[]
    OR?: RespostasWhereInput[]
    NOT?: RespostasWhereInput | RespostasWhereInput[]
    mensagem?: StringFilter<"Respostas"> | string
    chamadoId?: StringFilter<"Respostas"> | string
    dataEnvio?: DateTimeFilter<"Respostas"> | Date | string
    usuarioId?: StringFilter<"Respostas"> | string
    chamado_id?: XOR<ChamadosScalarRelationFilter, ChamadosWhereInput>
    usuario_id?: XOR<UsuariosScalarRelationFilter, UsuariosWhereInput>
  }, "id">

  export type RespostasOrderByWithAggregationInput = {
    id?: SortOrder
    mensagem?: SortOrder
    chamadoId?: SortOrder
    dataEnvio?: SortOrder
    usuarioId?: SortOrder
    _count?: RespostasCountOrderByAggregateInput
    _max?: RespostasMaxOrderByAggregateInput
    _min?: RespostasMinOrderByAggregateInput
  }

  export type RespostasScalarWhereWithAggregatesInput = {
    AND?: RespostasScalarWhereWithAggregatesInput | RespostasScalarWhereWithAggregatesInput[]
    OR?: RespostasScalarWhereWithAggregatesInput[]
    NOT?: RespostasScalarWhereWithAggregatesInput | RespostasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Respostas"> | string
    mensagem?: StringWithAggregatesFilter<"Respostas"> | string
    chamadoId?: StringWithAggregatesFilter<"Respostas"> | string
    dataEnvio?: DateTimeWithAggregatesFilter<"Respostas"> | Date | string
    usuarioId?: StringWithAggregatesFilter<"Respostas"> | string
  }

  export type UsuariosCreateInput = {
    id?: string
    nome: string
    email: string
    senha: string
    ehAdm?: boolean
    chamados?: ChamadosCreateNestedManyWithoutUsuariosInput
    Respostas?: RespostasCreateNestedManyWithoutUsuario_idInput
  }

  export type UsuariosUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    senha: string
    ehAdm?: boolean
    chamados?: ChamadosUncheckedCreateNestedManyWithoutUsuariosInput
    Respostas?: RespostasUncheckedCreateNestedManyWithoutUsuario_idInput
  }

  export type UsuariosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ehAdm?: BoolFieldUpdateOperationsInput | boolean
    chamados?: ChamadosUpdateManyWithoutUsuariosNestedInput
    Respostas?: RespostasUpdateManyWithoutUsuario_idNestedInput
  }

  export type UsuariosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ehAdm?: BoolFieldUpdateOperationsInput | boolean
    chamados?: ChamadosUncheckedUpdateManyWithoutUsuariosNestedInput
    Respostas?: RespostasUncheckedUpdateManyWithoutUsuario_idNestedInput
  }

  export type UsuariosCreateManyInput = {
    id?: string
    nome: string
    email: string
    senha: string
    ehAdm?: boolean
  }

  export type UsuariosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ehAdm?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuariosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ehAdm?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChamadosCreateInput = {
    id?: string
    titulo: string
    descricao: string
    status?: $Enums.Status
    dataCriacao?: Date | string
    usuarios: UsuariosCreateNestedOneWithoutChamadosInput
    Respostas?: RespostasCreateNestedManyWithoutChamado_idInput
  }

  export type ChamadosUncheckedCreateInput = {
    id?: string
    titulo: string
    descricao: string
    status?: $Enums.Status
    dataCriacao?: Date | string
    usuarioId: string
    Respostas?: RespostasUncheckedCreateNestedManyWithoutChamado_idInput
  }

  export type ChamadosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuariosUpdateOneRequiredWithoutChamadosNestedInput
    Respostas?: RespostasUpdateManyWithoutChamado_idNestedInput
  }

  export type ChamadosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    Respostas?: RespostasUncheckedUpdateManyWithoutChamado_idNestedInput
  }

  export type ChamadosCreateManyInput = {
    id?: string
    titulo: string
    descricao: string
    status?: $Enums.Status
    dataCriacao?: Date | string
    usuarioId: string
  }

  export type ChamadosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChamadosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type RespostasCreateInput = {
    id?: string
    mensagem: string
    dataEnvio?: Date | string
    chamado_id: ChamadosCreateNestedOneWithoutRespostasInput
    usuario_id: UsuariosCreateNestedOneWithoutRespostasInput
  }

  export type RespostasUncheckedCreateInput = {
    id?: string
    mensagem: string
    chamadoId: string
    dataEnvio?: Date | string
    usuarioId: string
  }

  export type RespostasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    chamado_id?: ChamadosUpdateOneRequiredWithoutRespostasNestedInput
    usuario_id?: UsuariosUpdateOneRequiredWithoutRespostasNestedInput
  }

  export type RespostasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    chamadoId?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type RespostasCreateManyInput = {
    id?: string
    mensagem: string
    chamadoId: string
    dataEnvio?: Date | string
    usuarioId: string
  }

  export type RespostasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespostasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    chamadoId?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ChamadosListRelationFilter = {
    every?: ChamadosWhereInput
    some?: ChamadosWhereInput
    none?: ChamadosWhereInput
  }

  export type RespostasListRelationFilter = {
    every?: RespostasWhereInput
    some?: RespostasWhereInput
    none?: RespostasWhereInput
  }

  export type ChamadosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RespostasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuariosCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    ehAdm?: SortOrder
  }

  export type UsuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    ehAdm?: SortOrder
  }

  export type UsuariosMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    ehAdm?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsuariosScalarRelationFilter = {
    is?: UsuariosWhereInput
    isNot?: UsuariosWhereInput
  }

  export type ChamadosCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    dataCriacao?: SortOrder
    usuarioId?: SortOrder
  }

  export type ChamadosMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    dataCriacao?: SortOrder
    usuarioId?: SortOrder
  }

  export type ChamadosMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    dataCriacao?: SortOrder
    usuarioId?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ChamadosScalarRelationFilter = {
    is?: ChamadosWhereInput
    isNot?: ChamadosWhereInput
  }

  export type RespostasCountOrderByAggregateInput = {
    id?: SortOrder
    mensagem?: SortOrder
    chamadoId?: SortOrder
    dataEnvio?: SortOrder
    usuarioId?: SortOrder
  }

  export type RespostasMaxOrderByAggregateInput = {
    id?: SortOrder
    mensagem?: SortOrder
    chamadoId?: SortOrder
    dataEnvio?: SortOrder
    usuarioId?: SortOrder
  }

  export type RespostasMinOrderByAggregateInput = {
    id?: SortOrder
    mensagem?: SortOrder
    chamadoId?: SortOrder
    dataEnvio?: SortOrder
    usuarioId?: SortOrder
  }

  export type ChamadosCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<ChamadosCreateWithoutUsuariosInput, ChamadosUncheckedCreateWithoutUsuariosInput> | ChamadosCreateWithoutUsuariosInput[] | ChamadosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ChamadosCreateOrConnectWithoutUsuariosInput | ChamadosCreateOrConnectWithoutUsuariosInput[]
    createMany?: ChamadosCreateManyUsuariosInputEnvelope
    connect?: ChamadosWhereUniqueInput | ChamadosWhereUniqueInput[]
  }

  export type RespostasCreateNestedManyWithoutUsuario_idInput = {
    create?: XOR<RespostasCreateWithoutUsuario_idInput, RespostasUncheckedCreateWithoutUsuario_idInput> | RespostasCreateWithoutUsuario_idInput[] | RespostasUncheckedCreateWithoutUsuario_idInput[]
    connectOrCreate?: RespostasCreateOrConnectWithoutUsuario_idInput | RespostasCreateOrConnectWithoutUsuario_idInput[]
    createMany?: RespostasCreateManyUsuario_idInputEnvelope
    connect?: RespostasWhereUniqueInput | RespostasWhereUniqueInput[]
  }

  export type ChamadosUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<ChamadosCreateWithoutUsuariosInput, ChamadosUncheckedCreateWithoutUsuariosInput> | ChamadosCreateWithoutUsuariosInput[] | ChamadosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ChamadosCreateOrConnectWithoutUsuariosInput | ChamadosCreateOrConnectWithoutUsuariosInput[]
    createMany?: ChamadosCreateManyUsuariosInputEnvelope
    connect?: ChamadosWhereUniqueInput | ChamadosWhereUniqueInput[]
  }

  export type RespostasUncheckedCreateNestedManyWithoutUsuario_idInput = {
    create?: XOR<RespostasCreateWithoutUsuario_idInput, RespostasUncheckedCreateWithoutUsuario_idInput> | RespostasCreateWithoutUsuario_idInput[] | RespostasUncheckedCreateWithoutUsuario_idInput[]
    connectOrCreate?: RespostasCreateOrConnectWithoutUsuario_idInput | RespostasCreateOrConnectWithoutUsuario_idInput[]
    createMany?: RespostasCreateManyUsuario_idInputEnvelope
    connect?: RespostasWhereUniqueInput | RespostasWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ChamadosUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<ChamadosCreateWithoutUsuariosInput, ChamadosUncheckedCreateWithoutUsuariosInput> | ChamadosCreateWithoutUsuariosInput[] | ChamadosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ChamadosCreateOrConnectWithoutUsuariosInput | ChamadosCreateOrConnectWithoutUsuariosInput[]
    upsert?: ChamadosUpsertWithWhereUniqueWithoutUsuariosInput | ChamadosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: ChamadosCreateManyUsuariosInputEnvelope
    set?: ChamadosWhereUniqueInput | ChamadosWhereUniqueInput[]
    disconnect?: ChamadosWhereUniqueInput | ChamadosWhereUniqueInput[]
    delete?: ChamadosWhereUniqueInput | ChamadosWhereUniqueInput[]
    connect?: ChamadosWhereUniqueInput | ChamadosWhereUniqueInput[]
    update?: ChamadosUpdateWithWhereUniqueWithoutUsuariosInput | ChamadosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: ChamadosUpdateManyWithWhereWithoutUsuariosInput | ChamadosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: ChamadosScalarWhereInput | ChamadosScalarWhereInput[]
  }

  export type RespostasUpdateManyWithoutUsuario_idNestedInput = {
    create?: XOR<RespostasCreateWithoutUsuario_idInput, RespostasUncheckedCreateWithoutUsuario_idInput> | RespostasCreateWithoutUsuario_idInput[] | RespostasUncheckedCreateWithoutUsuario_idInput[]
    connectOrCreate?: RespostasCreateOrConnectWithoutUsuario_idInput | RespostasCreateOrConnectWithoutUsuario_idInput[]
    upsert?: RespostasUpsertWithWhereUniqueWithoutUsuario_idInput | RespostasUpsertWithWhereUniqueWithoutUsuario_idInput[]
    createMany?: RespostasCreateManyUsuario_idInputEnvelope
    set?: RespostasWhereUniqueInput | RespostasWhereUniqueInput[]
    disconnect?: RespostasWhereUniqueInput | RespostasWhereUniqueInput[]
    delete?: RespostasWhereUniqueInput | RespostasWhereUniqueInput[]
    connect?: RespostasWhereUniqueInput | RespostasWhereUniqueInput[]
    update?: RespostasUpdateWithWhereUniqueWithoutUsuario_idInput | RespostasUpdateWithWhereUniqueWithoutUsuario_idInput[]
    updateMany?: RespostasUpdateManyWithWhereWithoutUsuario_idInput | RespostasUpdateManyWithWhereWithoutUsuario_idInput[]
    deleteMany?: RespostasScalarWhereInput | RespostasScalarWhereInput[]
  }

  export type ChamadosUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<ChamadosCreateWithoutUsuariosInput, ChamadosUncheckedCreateWithoutUsuariosInput> | ChamadosCreateWithoutUsuariosInput[] | ChamadosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ChamadosCreateOrConnectWithoutUsuariosInput | ChamadosCreateOrConnectWithoutUsuariosInput[]
    upsert?: ChamadosUpsertWithWhereUniqueWithoutUsuariosInput | ChamadosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: ChamadosCreateManyUsuariosInputEnvelope
    set?: ChamadosWhereUniqueInput | ChamadosWhereUniqueInput[]
    disconnect?: ChamadosWhereUniqueInput | ChamadosWhereUniqueInput[]
    delete?: ChamadosWhereUniqueInput | ChamadosWhereUniqueInput[]
    connect?: ChamadosWhereUniqueInput | ChamadosWhereUniqueInput[]
    update?: ChamadosUpdateWithWhereUniqueWithoutUsuariosInput | ChamadosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: ChamadosUpdateManyWithWhereWithoutUsuariosInput | ChamadosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: ChamadosScalarWhereInput | ChamadosScalarWhereInput[]
  }

  export type RespostasUncheckedUpdateManyWithoutUsuario_idNestedInput = {
    create?: XOR<RespostasCreateWithoutUsuario_idInput, RespostasUncheckedCreateWithoutUsuario_idInput> | RespostasCreateWithoutUsuario_idInput[] | RespostasUncheckedCreateWithoutUsuario_idInput[]
    connectOrCreate?: RespostasCreateOrConnectWithoutUsuario_idInput | RespostasCreateOrConnectWithoutUsuario_idInput[]
    upsert?: RespostasUpsertWithWhereUniqueWithoutUsuario_idInput | RespostasUpsertWithWhereUniqueWithoutUsuario_idInput[]
    createMany?: RespostasCreateManyUsuario_idInputEnvelope
    set?: RespostasWhereUniqueInput | RespostasWhereUniqueInput[]
    disconnect?: RespostasWhereUniqueInput | RespostasWhereUniqueInput[]
    delete?: RespostasWhereUniqueInput | RespostasWhereUniqueInput[]
    connect?: RespostasWhereUniqueInput | RespostasWhereUniqueInput[]
    update?: RespostasUpdateWithWhereUniqueWithoutUsuario_idInput | RespostasUpdateWithWhereUniqueWithoutUsuario_idInput[]
    updateMany?: RespostasUpdateManyWithWhereWithoutUsuario_idInput | RespostasUpdateManyWithWhereWithoutUsuario_idInput[]
    deleteMany?: RespostasScalarWhereInput | RespostasScalarWhereInput[]
  }

  export type UsuariosCreateNestedOneWithoutChamadosInput = {
    create?: XOR<UsuariosCreateWithoutChamadosInput, UsuariosUncheckedCreateWithoutChamadosInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutChamadosInput
    connect?: UsuariosWhereUniqueInput
  }

  export type RespostasCreateNestedManyWithoutChamado_idInput = {
    create?: XOR<RespostasCreateWithoutChamado_idInput, RespostasUncheckedCreateWithoutChamado_idInput> | RespostasCreateWithoutChamado_idInput[] | RespostasUncheckedCreateWithoutChamado_idInput[]
    connectOrCreate?: RespostasCreateOrConnectWithoutChamado_idInput | RespostasCreateOrConnectWithoutChamado_idInput[]
    createMany?: RespostasCreateManyChamado_idInputEnvelope
    connect?: RespostasWhereUniqueInput | RespostasWhereUniqueInput[]
  }

  export type RespostasUncheckedCreateNestedManyWithoutChamado_idInput = {
    create?: XOR<RespostasCreateWithoutChamado_idInput, RespostasUncheckedCreateWithoutChamado_idInput> | RespostasCreateWithoutChamado_idInput[] | RespostasUncheckedCreateWithoutChamado_idInput[]
    connectOrCreate?: RespostasCreateOrConnectWithoutChamado_idInput | RespostasCreateOrConnectWithoutChamado_idInput[]
    createMany?: RespostasCreateManyChamado_idInputEnvelope
    connect?: RespostasWhereUniqueInput | RespostasWhereUniqueInput[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsuariosUpdateOneRequiredWithoutChamadosNestedInput = {
    create?: XOR<UsuariosCreateWithoutChamadosInput, UsuariosUncheckedCreateWithoutChamadosInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutChamadosInput
    upsert?: UsuariosUpsertWithoutChamadosInput
    connect?: UsuariosWhereUniqueInput
    update?: XOR<XOR<UsuariosUpdateToOneWithWhereWithoutChamadosInput, UsuariosUpdateWithoutChamadosInput>, UsuariosUncheckedUpdateWithoutChamadosInput>
  }

  export type RespostasUpdateManyWithoutChamado_idNestedInput = {
    create?: XOR<RespostasCreateWithoutChamado_idInput, RespostasUncheckedCreateWithoutChamado_idInput> | RespostasCreateWithoutChamado_idInput[] | RespostasUncheckedCreateWithoutChamado_idInput[]
    connectOrCreate?: RespostasCreateOrConnectWithoutChamado_idInput | RespostasCreateOrConnectWithoutChamado_idInput[]
    upsert?: RespostasUpsertWithWhereUniqueWithoutChamado_idInput | RespostasUpsertWithWhereUniqueWithoutChamado_idInput[]
    createMany?: RespostasCreateManyChamado_idInputEnvelope
    set?: RespostasWhereUniqueInput | RespostasWhereUniqueInput[]
    disconnect?: RespostasWhereUniqueInput | RespostasWhereUniqueInput[]
    delete?: RespostasWhereUniqueInput | RespostasWhereUniqueInput[]
    connect?: RespostasWhereUniqueInput | RespostasWhereUniqueInput[]
    update?: RespostasUpdateWithWhereUniqueWithoutChamado_idInput | RespostasUpdateWithWhereUniqueWithoutChamado_idInput[]
    updateMany?: RespostasUpdateManyWithWhereWithoutChamado_idInput | RespostasUpdateManyWithWhereWithoutChamado_idInput[]
    deleteMany?: RespostasScalarWhereInput | RespostasScalarWhereInput[]
  }

  export type RespostasUncheckedUpdateManyWithoutChamado_idNestedInput = {
    create?: XOR<RespostasCreateWithoutChamado_idInput, RespostasUncheckedCreateWithoutChamado_idInput> | RespostasCreateWithoutChamado_idInput[] | RespostasUncheckedCreateWithoutChamado_idInput[]
    connectOrCreate?: RespostasCreateOrConnectWithoutChamado_idInput | RespostasCreateOrConnectWithoutChamado_idInput[]
    upsert?: RespostasUpsertWithWhereUniqueWithoutChamado_idInput | RespostasUpsertWithWhereUniqueWithoutChamado_idInput[]
    createMany?: RespostasCreateManyChamado_idInputEnvelope
    set?: RespostasWhereUniqueInput | RespostasWhereUniqueInput[]
    disconnect?: RespostasWhereUniqueInput | RespostasWhereUniqueInput[]
    delete?: RespostasWhereUniqueInput | RespostasWhereUniqueInput[]
    connect?: RespostasWhereUniqueInput | RespostasWhereUniqueInput[]
    update?: RespostasUpdateWithWhereUniqueWithoutChamado_idInput | RespostasUpdateWithWhereUniqueWithoutChamado_idInput[]
    updateMany?: RespostasUpdateManyWithWhereWithoutChamado_idInput | RespostasUpdateManyWithWhereWithoutChamado_idInput[]
    deleteMany?: RespostasScalarWhereInput | RespostasScalarWhereInput[]
  }

  export type ChamadosCreateNestedOneWithoutRespostasInput = {
    create?: XOR<ChamadosCreateWithoutRespostasInput, ChamadosUncheckedCreateWithoutRespostasInput>
    connectOrCreate?: ChamadosCreateOrConnectWithoutRespostasInput
    connect?: ChamadosWhereUniqueInput
  }

  export type UsuariosCreateNestedOneWithoutRespostasInput = {
    create?: XOR<UsuariosCreateWithoutRespostasInput, UsuariosUncheckedCreateWithoutRespostasInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutRespostasInput
    connect?: UsuariosWhereUniqueInput
  }

  export type ChamadosUpdateOneRequiredWithoutRespostasNestedInput = {
    create?: XOR<ChamadosCreateWithoutRespostasInput, ChamadosUncheckedCreateWithoutRespostasInput>
    connectOrCreate?: ChamadosCreateOrConnectWithoutRespostasInput
    upsert?: ChamadosUpsertWithoutRespostasInput
    connect?: ChamadosWhereUniqueInput
    update?: XOR<XOR<ChamadosUpdateToOneWithWhereWithoutRespostasInput, ChamadosUpdateWithoutRespostasInput>, ChamadosUncheckedUpdateWithoutRespostasInput>
  }

  export type UsuariosUpdateOneRequiredWithoutRespostasNestedInput = {
    create?: XOR<UsuariosCreateWithoutRespostasInput, UsuariosUncheckedCreateWithoutRespostasInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutRespostasInput
    upsert?: UsuariosUpsertWithoutRespostasInput
    connect?: UsuariosWhereUniqueInput
    update?: XOR<XOR<UsuariosUpdateToOneWithWhereWithoutRespostasInput, UsuariosUpdateWithoutRespostasInput>, UsuariosUncheckedUpdateWithoutRespostasInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ChamadosCreateWithoutUsuariosInput = {
    id?: string
    titulo: string
    descricao: string
    status?: $Enums.Status
    dataCriacao?: Date | string
    Respostas?: RespostasCreateNestedManyWithoutChamado_idInput
  }

  export type ChamadosUncheckedCreateWithoutUsuariosInput = {
    id?: string
    titulo: string
    descricao: string
    status?: $Enums.Status
    dataCriacao?: Date | string
    Respostas?: RespostasUncheckedCreateNestedManyWithoutChamado_idInput
  }

  export type ChamadosCreateOrConnectWithoutUsuariosInput = {
    where: ChamadosWhereUniqueInput
    create: XOR<ChamadosCreateWithoutUsuariosInput, ChamadosUncheckedCreateWithoutUsuariosInput>
  }

  export type ChamadosCreateManyUsuariosInputEnvelope = {
    data: ChamadosCreateManyUsuariosInput | ChamadosCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type RespostasCreateWithoutUsuario_idInput = {
    id?: string
    mensagem: string
    dataEnvio?: Date | string
    chamado_id: ChamadosCreateNestedOneWithoutRespostasInput
  }

  export type RespostasUncheckedCreateWithoutUsuario_idInput = {
    id?: string
    mensagem: string
    chamadoId: string
    dataEnvio?: Date | string
  }

  export type RespostasCreateOrConnectWithoutUsuario_idInput = {
    where: RespostasWhereUniqueInput
    create: XOR<RespostasCreateWithoutUsuario_idInput, RespostasUncheckedCreateWithoutUsuario_idInput>
  }

  export type RespostasCreateManyUsuario_idInputEnvelope = {
    data: RespostasCreateManyUsuario_idInput | RespostasCreateManyUsuario_idInput[]
    skipDuplicates?: boolean
  }

  export type ChamadosUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: ChamadosWhereUniqueInput
    update: XOR<ChamadosUpdateWithoutUsuariosInput, ChamadosUncheckedUpdateWithoutUsuariosInput>
    create: XOR<ChamadosCreateWithoutUsuariosInput, ChamadosUncheckedCreateWithoutUsuariosInput>
  }

  export type ChamadosUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: ChamadosWhereUniqueInput
    data: XOR<ChamadosUpdateWithoutUsuariosInput, ChamadosUncheckedUpdateWithoutUsuariosInput>
  }

  export type ChamadosUpdateManyWithWhereWithoutUsuariosInput = {
    where: ChamadosScalarWhereInput
    data: XOR<ChamadosUpdateManyMutationInput, ChamadosUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type ChamadosScalarWhereInput = {
    AND?: ChamadosScalarWhereInput | ChamadosScalarWhereInput[]
    OR?: ChamadosScalarWhereInput[]
    NOT?: ChamadosScalarWhereInput | ChamadosScalarWhereInput[]
    id?: StringFilter<"Chamados"> | string
    titulo?: StringFilter<"Chamados"> | string
    descricao?: StringFilter<"Chamados"> | string
    status?: EnumStatusFilter<"Chamados"> | $Enums.Status
    dataCriacao?: DateTimeFilter<"Chamados"> | Date | string
    usuarioId?: StringFilter<"Chamados"> | string
  }

  export type RespostasUpsertWithWhereUniqueWithoutUsuario_idInput = {
    where: RespostasWhereUniqueInput
    update: XOR<RespostasUpdateWithoutUsuario_idInput, RespostasUncheckedUpdateWithoutUsuario_idInput>
    create: XOR<RespostasCreateWithoutUsuario_idInput, RespostasUncheckedCreateWithoutUsuario_idInput>
  }

  export type RespostasUpdateWithWhereUniqueWithoutUsuario_idInput = {
    where: RespostasWhereUniqueInput
    data: XOR<RespostasUpdateWithoutUsuario_idInput, RespostasUncheckedUpdateWithoutUsuario_idInput>
  }

  export type RespostasUpdateManyWithWhereWithoutUsuario_idInput = {
    where: RespostasScalarWhereInput
    data: XOR<RespostasUpdateManyMutationInput, RespostasUncheckedUpdateManyWithoutUsuario_idInput>
  }

  export type RespostasScalarWhereInput = {
    AND?: RespostasScalarWhereInput | RespostasScalarWhereInput[]
    OR?: RespostasScalarWhereInput[]
    NOT?: RespostasScalarWhereInput | RespostasScalarWhereInput[]
    id?: StringFilter<"Respostas"> | string
    mensagem?: StringFilter<"Respostas"> | string
    chamadoId?: StringFilter<"Respostas"> | string
    dataEnvio?: DateTimeFilter<"Respostas"> | Date | string
    usuarioId?: StringFilter<"Respostas"> | string
  }

  export type UsuariosCreateWithoutChamadosInput = {
    id?: string
    nome: string
    email: string
    senha: string
    ehAdm?: boolean
    Respostas?: RespostasCreateNestedManyWithoutUsuario_idInput
  }

  export type UsuariosUncheckedCreateWithoutChamadosInput = {
    id?: string
    nome: string
    email: string
    senha: string
    ehAdm?: boolean
    Respostas?: RespostasUncheckedCreateNestedManyWithoutUsuario_idInput
  }

  export type UsuariosCreateOrConnectWithoutChamadosInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutChamadosInput, UsuariosUncheckedCreateWithoutChamadosInput>
  }

  export type RespostasCreateWithoutChamado_idInput = {
    id?: string
    mensagem: string
    dataEnvio?: Date | string
    usuario_id: UsuariosCreateNestedOneWithoutRespostasInput
  }

  export type RespostasUncheckedCreateWithoutChamado_idInput = {
    id?: string
    mensagem: string
    dataEnvio?: Date | string
    usuarioId: string
  }

  export type RespostasCreateOrConnectWithoutChamado_idInput = {
    where: RespostasWhereUniqueInput
    create: XOR<RespostasCreateWithoutChamado_idInput, RespostasUncheckedCreateWithoutChamado_idInput>
  }

  export type RespostasCreateManyChamado_idInputEnvelope = {
    data: RespostasCreateManyChamado_idInput | RespostasCreateManyChamado_idInput[]
    skipDuplicates?: boolean
  }

  export type UsuariosUpsertWithoutChamadosInput = {
    update: XOR<UsuariosUpdateWithoutChamadosInput, UsuariosUncheckedUpdateWithoutChamadosInput>
    create: XOR<UsuariosCreateWithoutChamadosInput, UsuariosUncheckedCreateWithoutChamadosInput>
    where?: UsuariosWhereInput
  }

  export type UsuariosUpdateToOneWithWhereWithoutChamadosInput = {
    where?: UsuariosWhereInput
    data: XOR<UsuariosUpdateWithoutChamadosInput, UsuariosUncheckedUpdateWithoutChamadosInput>
  }

  export type UsuariosUpdateWithoutChamadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ehAdm?: BoolFieldUpdateOperationsInput | boolean
    Respostas?: RespostasUpdateManyWithoutUsuario_idNestedInput
  }

  export type UsuariosUncheckedUpdateWithoutChamadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ehAdm?: BoolFieldUpdateOperationsInput | boolean
    Respostas?: RespostasUncheckedUpdateManyWithoutUsuario_idNestedInput
  }

  export type RespostasUpsertWithWhereUniqueWithoutChamado_idInput = {
    where: RespostasWhereUniqueInput
    update: XOR<RespostasUpdateWithoutChamado_idInput, RespostasUncheckedUpdateWithoutChamado_idInput>
    create: XOR<RespostasCreateWithoutChamado_idInput, RespostasUncheckedCreateWithoutChamado_idInput>
  }

  export type RespostasUpdateWithWhereUniqueWithoutChamado_idInput = {
    where: RespostasWhereUniqueInput
    data: XOR<RespostasUpdateWithoutChamado_idInput, RespostasUncheckedUpdateWithoutChamado_idInput>
  }

  export type RespostasUpdateManyWithWhereWithoutChamado_idInput = {
    where: RespostasScalarWhereInput
    data: XOR<RespostasUpdateManyMutationInput, RespostasUncheckedUpdateManyWithoutChamado_idInput>
  }

  export type ChamadosCreateWithoutRespostasInput = {
    id?: string
    titulo: string
    descricao: string
    status?: $Enums.Status
    dataCriacao?: Date | string
    usuarios: UsuariosCreateNestedOneWithoutChamadosInput
  }

  export type ChamadosUncheckedCreateWithoutRespostasInput = {
    id?: string
    titulo: string
    descricao: string
    status?: $Enums.Status
    dataCriacao?: Date | string
    usuarioId: string
  }

  export type ChamadosCreateOrConnectWithoutRespostasInput = {
    where: ChamadosWhereUniqueInput
    create: XOR<ChamadosCreateWithoutRespostasInput, ChamadosUncheckedCreateWithoutRespostasInput>
  }

  export type UsuariosCreateWithoutRespostasInput = {
    id?: string
    nome: string
    email: string
    senha: string
    ehAdm?: boolean
    chamados?: ChamadosCreateNestedManyWithoutUsuariosInput
  }

  export type UsuariosUncheckedCreateWithoutRespostasInput = {
    id?: string
    nome: string
    email: string
    senha: string
    ehAdm?: boolean
    chamados?: ChamadosUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UsuariosCreateOrConnectWithoutRespostasInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutRespostasInput, UsuariosUncheckedCreateWithoutRespostasInput>
  }

  export type ChamadosUpsertWithoutRespostasInput = {
    update: XOR<ChamadosUpdateWithoutRespostasInput, ChamadosUncheckedUpdateWithoutRespostasInput>
    create: XOR<ChamadosCreateWithoutRespostasInput, ChamadosUncheckedCreateWithoutRespostasInput>
    where?: ChamadosWhereInput
  }

  export type ChamadosUpdateToOneWithWhereWithoutRespostasInput = {
    where?: ChamadosWhereInput
    data: XOR<ChamadosUpdateWithoutRespostasInput, ChamadosUncheckedUpdateWithoutRespostasInput>
  }

  export type ChamadosUpdateWithoutRespostasInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuariosUpdateOneRequiredWithoutChamadosNestedInput
  }

  export type ChamadosUncheckedUpdateWithoutRespostasInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type UsuariosUpsertWithoutRespostasInput = {
    update: XOR<UsuariosUpdateWithoutRespostasInput, UsuariosUncheckedUpdateWithoutRespostasInput>
    create: XOR<UsuariosCreateWithoutRespostasInput, UsuariosUncheckedCreateWithoutRespostasInput>
    where?: UsuariosWhereInput
  }

  export type UsuariosUpdateToOneWithWhereWithoutRespostasInput = {
    where?: UsuariosWhereInput
    data: XOR<UsuariosUpdateWithoutRespostasInput, UsuariosUncheckedUpdateWithoutRespostasInput>
  }

  export type UsuariosUpdateWithoutRespostasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ehAdm?: BoolFieldUpdateOperationsInput | boolean
    chamados?: ChamadosUpdateManyWithoutUsuariosNestedInput
  }

  export type UsuariosUncheckedUpdateWithoutRespostasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ehAdm?: BoolFieldUpdateOperationsInput | boolean
    chamados?: ChamadosUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type ChamadosCreateManyUsuariosInput = {
    id?: string
    titulo: string
    descricao: string
    status?: $Enums.Status
    dataCriacao?: Date | string
  }

  export type RespostasCreateManyUsuario_idInput = {
    id?: string
    mensagem: string
    chamadoId: string
    dataEnvio?: Date | string
  }

  export type ChamadosUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    Respostas?: RespostasUpdateManyWithoutChamado_idNestedInput
  }

  export type ChamadosUncheckedUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    Respostas?: RespostasUncheckedUpdateManyWithoutChamado_idNestedInput
  }

  export type ChamadosUncheckedUpdateManyWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespostasUpdateWithoutUsuario_idInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    chamado_id?: ChamadosUpdateOneRequiredWithoutRespostasNestedInput
  }

  export type RespostasUncheckedUpdateWithoutUsuario_idInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    chamadoId?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespostasUncheckedUpdateManyWithoutUsuario_idInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    chamadoId?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespostasCreateManyChamado_idInput = {
    id?: string
    mensagem: string
    dataEnvio?: Date | string
    usuarioId: string
  }

  export type RespostasUpdateWithoutChamado_idInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario_id?: UsuariosUpdateOneRequiredWithoutRespostasNestedInput
  }

  export type RespostasUncheckedUpdateWithoutChamado_idInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type RespostasUncheckedUpdateManyWithoutChamado_idInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}