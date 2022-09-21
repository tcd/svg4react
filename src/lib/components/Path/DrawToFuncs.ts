import type * as DrawToArgs from "./DrawToArgs"

// /**
//  * `Z`
//  *
//  * closepath
//  */
// export const Z = () => { return "Z" }
//
// /**
//  * `z`
//  *
//  * closepath
//  */
// export const z = () => { return "z" }

/**
 * `Z` or `z`
 *
 * closepath
 */
export const Z = () => { return "Z" }

// =========================================================================

/**
 * `M`
 *
 * moveto_absolute
 */
export const M = (...args: DrawToArgs.m[]) => {
    const points = args.map((xy) => xy.join(","))
    return ["M", ...points].join(" ")
}

/**
 * `m`
 *
 * moveto_relative
 */
export const m = (...args: DrawToArgs.m[]) => {
    const points = args.map((dXdY) => dXdY.join(","))
    return ["m", ...points].join(" ")
}

// =========================================================================

/**
 * `L`
 *
 * lineto_absolute
 */
export const L = (...args: DrawToArgs.L[]) => {
    const points = args.map((xy) => xy.join(","))
    return ["L", ...points].join(" ")
}

/**
 * `l`
 *
 * lineto_relative
 */
export const l = (...args: DrawToArgs.l[]) => {
    const points = args.map((dXdY) => dXdY.join(","))
    return ["l", ...points].join(" ")
}

// -------------------------------------------------------------------------

/**
 * `H`
 *
 * horizontal_lineto_absolute
 */
export const H = (...y: DrawToArgs.H[]) => {
    return ["H", ...y].join(" ")
}

/**
 * `h`
 *
 * horizontal_lineto_relative
 */
export const h = (...y: DrawToArgs.h[]) => {
    return ["h", ...y].join(" ")
}

// -------------------------------------------------------------------------

/**
 * `V`
 *
 * vertical_lineto_absolute
 */
export const V = (...x: DrawToArgs.V[]) => {
    return ["V", ...x].join(" ")
}

/**
 * `v`
 *
 * vertical_lineto_relative
 */
export const v = (...x: DrawToArgs.v[]) => {
    return ["v", ...x].join(" ")
}

// =========================================================================

/**
 * `C`
 *
 * curveto_absolute
 */
export const C = (...opts: DrawToArgs.c[]): string => {
    const points = opts.map((opt) => `C ${opt[0]},${opt[1]} ${opt[2]},${opt[3]} ${opt[4]},${opt[5]}`)
    return points.join(" ")
}

/**
 * `c`
 *
 * curveto_relative
 */
export const c = (...opts: DrawToArgs.c[]): string => {
    const points = opts.map((opt) => `c ${opt[0]},${opt[1]} ${opt[2]},${opt[3]} ${opt[4]},${opt[5]}`)
    return points.join(" ")
}

// -------------------------------------------------------------------------

/**
 * `S`
 *
 * smooth_curveto_absolute
 */
export const S = (...opts: DrawToArgs.S[]): string => {
    const points = opts.map((opt) => `S ${opt[0]},${opt[1]} ${opt[2]},${opt[3]}`)
    return points.join(" ")
}

/**
 * `s`
 *
 * smooth_curveto_relative
 */
export const s = (...opts: DrawToArgs.s[]): string => {
    const points = opts.map((opt) => `s ${opt[0]},${opt[1]} ${opt[2]},${opt[3]}`)
    return points.join(" ")
}

// =========================================================================

/**
 * `Q`
 *
 * quadratic_bezier_curveto_absolute
 */
export const Q = (...opts: DrawToArgs.Q[]) => {
    const points = opts.map((opt) => `Q ${opt[0]},${opt[1]} ${opt[2]},${opt[3]}`)
    return points.join(" ")
}

/**
 * `q`
 *
 * quadratic_bezier_curveto_relative
 */
export const q = (...opts: DrawToArgs.q[]) => {
    const points = opts.map((opt) => `q ${opt[0]},${opt[1]} ${opt[2]},${opt[3]}`)
    return points.join(" ")
}

// -------------------------------------------------------------------------

/**
 * `T`
 *
 * smooth_quadratic_bezier_curveto_absolute
 */
export const T = (...args: DrawToArgs.T[]) => {
    const points = args.map((xy) => xy.join(","))
    return ["T", ...points].join(" ")
}

/**
 * `t`
 *
 * smooth_quadratic_bezier_curveto_relative
 */
export const t = (...args: DrawToArgs.t[]) => {
    const points = args.map((dXdY) => dXdY.join(","))
    return ["t", ...points].join(" ")
}

// =========================================================================

// export type A_options = [
//     rx: number,
//     ry: number,
//     angle: number,
//     largeArcFlag: 0 | 1,
//     sweepFlag: 0 | 1,
//     x: number,
//     y: number,
// ]

/**
 * `A`
 *
 * elliptical_arc_absolute
 */
export const A = (...opts: DrawToArgs.A[]): string => {
    const points = opts.map((opt) => `A ${opt[0]},${opt[1]} ${opt[2]},${opt[3]},${opt[4]} ${opt[5]},${opt[6]}`)
    return points.join(" ")
}

/**
 * `a`
 *
 * elliptical_arc_relative
 */
export const a = (...opts: DrawToArgs.a[]): string => {
    const points = opts.map((opt) => `a ${opt[0]},${opt[1]} ${opt[2]},${opt[3]},${opt[4]} ${opt[5]},${opt[6]}`)
    return points.join(" ")
}

/**
 * @internal
 */
export const DrawToFuncs = {
    M,
    m,
    L,
    l,
    H,
    h,
    V,
    v,
    C,
    c,
    S,
    s,
    Q,
    q,
    T,
    t,
    A,
    a,
    Z,
}
