import type { Location } from "react-router-dom"

export declare global {

    // =========================================================================
    // Routing
    // =========================================================================

    export type LocationChangePayload = {
        location: Location
        previousLocation?: Location
        hash: string
    }

    // =========================================================================
    // Links
    // =========================================================================

    export interface ILinkData {
        title: string
        to: string
    }

    export interface ILinksData {
        title: string
        links: ILinkData[]
    }

    // =========================================================================
    // Nested Dot Access with Strings :D
    // =========================================================================

    type Builtin =
        | "toString"
        | "toExponential"
        | "toFixed"
        | "toLocaleString"
        | "toPrecision"
        | "valueOf"

    type DotNotation<T extends string> = T extends ("" | Builtin) ? "" : `.${T}`

    /**
     * ### See:
     *
     * - [StackOverflow (mindlid)](https://stackoverflow.com/a/68404823/7687024)
     * - [TypeScript Playground](https://www.typescriptlang.org/play?ssl=1&ssc=1&pln=2&pc=1#code/C4TwDgpgBAIg9sACgJwgMwJYA8A8AVKCLYCAOwBMBnKS4ZDUgcwD4oBeKAoki6gIj5QA-FAFQAXFAAGAOgAkAbzwBfKQCg1oSLAQA5CLQjkA0hBCV8rDgAouxMlShwARgCsIAY2DC1UP1AUoAG1jKAYoAFEsDwAbAFdyCBwAazM4NE4AGhoQAFtnOBjmAF1JKUVjZUV4JFRMXBr9QxMzCzwQ4uZmVShlIKjYhKTUkHSsnPzCkt9-SQEASkJ7XjDSNAhkWGFI4mQAQy8cGGzaeiZWSVIIADcNgG4NAHoAKigSWgZGKGfHjS1oJokcgAeTcnmAeHA0A4Chmfj2klOnzhUGciLoyP8UCutEksKxWI86LOjAeWOUKIQAAsNoC8SjCcTPmT-BSKZooVBAUZQe4vKZzOwdMBuS1zDhRbzwZDIMw1I9Hm9OZKwfzWkK+HtBAAfUTOHWiHHAGQeA18am0gzG00aDxwUi0N5WgBMkgAgsh9iAJVaeargALKFZgpq+Nk+Prw0aTWHRBbkICY8VbfbKIUIDIYnBGNZ3sBnfM1EA)
     */
    export type NestedKeyOf<T> =
        (T extends (Array<any> | Builtin) ? "" : (
            T extends object
                ? { [K in Exclude<keyof T, symbol>]: `${K}${DotNotation<NestedKeyOf<T[K]>>}` }[Exclude<keyof T, symbol>]
                : ""
        ) extends infer D ? Extract<D, string> : never) | keyof T
}
