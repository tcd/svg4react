import type * as DrawArgs from "./DrawArgs"

/**
 * `Z`
 *
 * closepath
 *
 * Close the current subpath by drawing a straight line from the current point to current subpath's initial point.
 */
export const Z = () => "Z"

/**
 * `z`
 *
 * closepath
 *
 * Close the current subpath by drawing a straight line from the current point to current subpath's initial point.
 */
export const z = () => "z"

// =========================================================================

/**
 * `M`
 *
 * moveto_absolute
 *
 * Start a new sub-path at the given (x,y) coordinate.
 */
export const M = (...args: DrawArgs.m[]) => {
    const points = args.map((xy) => xy.join(","))
    return ["M", ...points].join(" ")
}

/**
 * `m`
 *
 * moveto_relative
 *
 * Start a new sub-path at the given (x,y) coordinate.
 */
export const m = (...args: DrawArgs.m[]) => {
    const points = args.map((dXdY) => dXdY.join(","))
    return ["m", ...points].join(" ")
}

// =========================================================================

/**
 * `L`
 *
 * lineto_absolute
 */
export const L = (...args: DrawArgs.L[]) => {
    const points = args.map((xy) => xy.join(","))
    return ["L", ...points].join(" ")
}

/**
 * `l`
 *
 * lineto_relative
 */
export const l = (...args: DrawArgs.l[]) => {
    const points = args.map((dXdY) => dXdY.join(","))
    return ["l", ...points].join(" ")
}

// -------------------------------------------------------------------------

/**
 * `H`
 *
 * horizontal_lineto_absolute
 */
export const H = (...y: DrawArgs.H[]) => {
    return ["H", ...y].join(" ")
}

/**
 * `h`
 *
 * horizontal_lineto_relative
 */
export const h = (...y: DrawArgs.h[]) => {
    return ["h", ...y].join(" ")
}

// -------------------------------------------------------------------------

/**
 * `V`
 *
 * vertical_lineto_absolute
 */
export const V = (...x: DrawArgs.V[]) => {
    return ["V", ...x].join(" ")
}

/**
 * `v`
 *
 * vertical_lineto_relative
 */
export const v = (...x: DrawArgs.v[]) => {
    return ["v", ...x].join(" ")
}

// =========================================================================

/**
 * `C`
 *
 * curveto_absolute
 *
 * Draws a cubic Bézier curve from the current point to (x,y) using (x1,y1) as the control point at the beginning of the curve and (x2,y2) as the control point at the end of the curve.
 */
export const C = (...opts: DrawArgs.C[]): string => {
    const points = opts.map((opt) => `C ${opt[0]},${opt[1]} ${opt[2]},${opt[3]} ${opt[4]},${opt[5]}`)
    return points.join(" ")
}

/**
 * `c`
 *
 * curveto_relative
 */
export const c = (...opts: DrawArgs.c[]): string => {
    const points = opts.map((opt) => `c ${opt[0]},${opt[1]} ${opt[2]},${opt[3]} ${opt[4]},${opt[5]}`)
    return points.join(" ")
}

// -------------------------------------------------------------------------

/**
 * `S`
 *
 * smooth_curveto_absolute
 */
export const S = (...opts: DrawArgs.S[]): string => {
    const points = opts.map((opt) => `S ${opt[0]},${opt[1]} ${opt[2]},${opt[3]}`)
    return points.join(" ")
}

/**
 * `s`
 *
 * smooth_curveto_relative
 */
export const s = (...opts: DrawArgs.s[]): string => {
    const points = opts.map((opt) => `s ${opt[0]},${opt[1]} ${opt[2]},${opt[3]}`)
    return points.join(" ")
}

// =========================================================================

/**
 * `Q`
 *
 * quadratic_bezier_curveto_absolute
 */
export const Q = (...opts: DrawArgs.Q[]) => {
    const points = opts.map((opt) => `Q ${opt[0]},${opt[1]} ${opt[2]},${opt[3]}`)
    return points.join(" ")
}

/**
 * `q`
 *
 * quadratic_bezier_curveto_relative
 */
export const q = (...opts: DrawArgs.q[]) => {
    const points = opts.map((opt) => `q ${opt[0]},${opt[1]} ${opt[2]},${opt[3]}`)
    return points.join(" ")
}

// -------------------------------------------------------------------------

/**
 * `T`
 *
 * smooth_quadratic_bezier_curveto_absolute
 */
export const T = (...args: DrawArgs.T[]) => {
    const points = args.map((xy) => xy.join(","))
    return ["T", ...points].join(" ")
}

/**
 * `t`
 *
 * smooth_quadratic_bezier_curveto_relative
 */
export const t = (...args: DrawArgs.t[]) => {
    const points = args.map((dXdY) => dXdY.join(","))
    return ["t", ...points].join(" ")
}

// =========================================================================

/**
 * `A`
 *
 * elliptical_arc_absolute
 */
export const A = (...opts: DrawArgs.A[]): string => {
    const points = opts.map((opt) => `A ${opt[0]},${opt[1]} ${opt[2]},${opt[3]},${opt[4]} ${opt[5]},${opt[6]}`)
    return points.join(" ")
}

/**
 * `a`
 *
 * elliptical_arc_relative
 */
export const a = (...opts: DrawArgs.a[]): string => {
    const points = opts.map((opt) => `a ${opt[0]},${opt[1]} ${opt[2]},${opt[3]},${opt[4]} ${opt[5]},${opt[6]}`)
    return points.join(" ")
}
