// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
  Expect<Equal<Pop<[]>, []>>,
]


// ============= Your Code Here =============
type Pop<T extends any[]> = 
  T['length'] extends 0 
    ? T 
    : T['length'] extends 1 
      ? []
      : T extends [infer E, ...(infer A)] 
        ? [E, ...Pop<A>] 
        : never 
