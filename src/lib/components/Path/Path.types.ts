import type * as DrawToArgs from "./DrawToArgs"

/**
 * @public
 */
export enum DrawToCommandNames {
    M = "moveto_absolute",
    m = "moveto_relative",
    L = "lineto_absolute",
    l = "lineto_relative",
    H = "horizontal_lineto_absolute",
    h = "horizontal_lineto_relative",
    V = "vertical_lineto_absolute",
    v = "vertical_lineto_relative",
    C = "curveto_absolute",
    c = "curveto_relative",
    S = "smooth_curveto_absolute",
    s = "smooth_curveto_relative",
    Q = "quadratic_bezier_curveto_absolute",
    q = "quadratic_bezier_curveto_relative",
    T = "smooth_quadratic_bezier_curveto_absolute",
    t = "smooth_quadratic_bezier_curveto_relative",
    A = "elliptical_arc_absolute",
    a = "elliptical_arc_relative",
    Z = "closepath",
    z = "closepath", // but lowercase
}

/**
 * @public
 */
export type DrawToCommandName = keyof typeof DrawToCommandNames
// /**
//  * @public
//  */
// export type DrawToCommandDescription = typeof DrawToCommandNames[DrawToCommandName]

/**
 * @public
 */
export type TCmdProp<TCmd extends DrawToCommandName, TArgs> = [
    cmd: TCmd,
    args: TArgs[],
]

/**
 * @public
 */
export type CmdProp =
    | TCmdProp<"M", DrawToArgs.M>
    | TCmdProp<"m", DrawToArgs.m>
    | TCmdProp<"L", DrawToArgs.L>
    | TCmdProp<"l", DrawToArgs.l>
    | TCmdProp<"H", DrawToArgs.H>
    | TCmdProp<"h", DrawToArgs.h>
    | TCmdProp<"V", DrawToArgs.V>
    | TCmdProp<"v", DrawToArgs.v>
    | TCmdProp<"C", DrawToArgs.C>
    | TCmdProp<"c", DrawToArgs.c>
    | TCmdProp<"S", DrawToArgs.S>
    | TCmdProp<"s", DrawToArgs.s>
    | TCmdProp<"Q", DrawToArgs.Q>
    | TCmdProp<"q", DrawToArgs.q>
    | TCmdProp<"T", DrawToArgs.T>
    | TCmdProp<"t", DrawToArgs.t>
    | TCmdProp<"A", DrawToArgs.A>
    | TCmdProp<"a", DrawToArgs.a>
    | TCmdProp<"Z", DrawToArgs.Z>
    | TCmdProp<"z", DrawToArgs.z>

/**
 * @public
 */
export type PathProps = {
    commands: CmdProp[]
    id?: string
    // FIXME: add proper presentation attributes
    fill?: any
    stroke?: any
}
