import type * as DrawArgs from "./DrawArgs"
import type { DrawCommandCode } from "./DrawCommandNames"

export type TDrawCommand<TCmd extends DrawCommandCode, TArgs> = [
    cmd: TCmd,
    args: TArgs[],
]

/**
 * Alternative syntax for building SVG path data.
 *
 * @see [MDN Web Docs - Path Commands](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#path_commands)
 * @see [SVG 1.1](https://www.w3.org/TR/SVG11/paths.html#PathData)
 * @see [SVG 2.0](https://www.w3.org/TR/SVG2/paths.html#TheDProperty)
 */
export type DrawCommand =
    | TDrawCommand<"M", DrawArgs.M>
    | TDrawCommand<"m", DrawArgs.m>
    | TDrawCommand<"L", DrawArgs.L>
    | TDrawCommand<"l", DrawArgs.l>
    | TDrawCommand<"H", DrawArgs.H>
    | TDrawCommand<"h", DrawArgs.h>
    | TDrawCommand<"V", DrawArgs.V>
    | TDrawCommand<"v", DrawArgs.v>
    | TDrawCommand<"C", DrawArgs.C>
    | TDrawCommand<"c", DrawArgs.c>
    | TDrawCommand<"S", DrawArgs.S>
    | TDrawCommand<"s", DrawArgs.s>
    | TDrawCommand<"Q", DrawArgs.Q>
    | TDrawCommand<"q", DrawArgs.q>
    | TDrawCommand<"T", DrawArgs.T>
    | TDrawCommand<"t", DrawArgs.t>
    | TDrawCommand<"A", DrawArgs.A>
    | TDrawCommand<"a", DrawArgs.a>
    | TDrawCommand<"Z", DrawArgs.Z>
    | TDrawCommand<"z", DrawArgs.z>
