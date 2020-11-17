type RecursivePartial<T> = {
  [K in keyof T]?: T[K] extends Array<infer U>
    ? Array<RecursivePartial<U>>
    : T[K] extends object
      ? RecursivePartial<T[K]>
      : T[K]
}

export const partial = <T>(partial?: RecursivePartial<T>): T => partial as any
