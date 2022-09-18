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
export const M = (...args: [x: number, y: number][]) => {
    const points = args.map((xy) => xy.join(","))
    return ["M", ...points].join(" ")
}

/**
 * `m`
 *
 * moveto_relative
 */
export const m = (...args: [dx: number, dy: number][]) => {
    const points = args.map((dXdY) => dXdY.join(","))
    return ["m", ...points].join(" ")
}

// =========================================================================

/**
 * `L`
 *
 * lineto_absolute
 */
export const L = (...args: [x: number, y: number][]) => {
    const points = args.map((xy) => xy.join(","))
    return ["L", ...points].join(" ")
}

/**
 * `l`
 *
 * lineto_relative
 */
export const l = (...args: [dx: number, dy: number][]) => {
    const points = args.map((dXdY) => dXdY.join(","))
    return ["l", ...points].join(" ")
}

// -------------------------------------------------------------------------

/**
 * `H`
 *
 * horizontal_lineto_absolute
 */
export const H = (...y: number[]) => {
    return ["H", ...y].join(" ")
}

/**
 * `h`
 *
 * horizontal_lineto_relative
 */
export const h = (...y: number[]) => {
    return ["h", ...y].join(" ")
}

// -------------------------------------------------------------------------

/**
 * `V`
 *
 * vertical_lineto_absolute
 */
export const V = (...x: number[]) => {
    return ["V", ...x].join(" ")
}

/**
 * `v`
 *
 * vertical_lineto_relative
 */
export const v = (...x: number[]) => {
    return ["V", ...x].join(" ")
}

// =========================================================================

/**
 * `C`
 *
 * curveto_absolute
 */
export const C = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x: number,
    y: number,
) => { return "" }

/**
 * `c`
 *
 * curveto_relative
 */
export const c = (
    dx1: number,
    dy1: number,
    dx2: number,
    dy2: number,
    dx: number,
    dy: number,
) => { return "" }

// -------------------------------------------------------------------------

/**
 * `S`
 *
 * smooth_curveto_absolute
 */
export const S = (
    x2: number,
    y2: number,
    x: number,
    y: number,
) => { return "" }

/**
 * `s`
 *
 * smooth_curveto_relative
 */
export const s = (
    dx2: number,
    dy2: number,
    dx: number,
    dy: number,
) => { return "" }

// =========================================================================

/**
 * `Q`
 *
 * quadratic_bezier_curveto_absolute
 */
export const Q = (
    x1: number,
    y1: number,
    x: number,
    y: number,
) => { return "" }

/**
 * `q`
 *
 * quadratic_bezier_curveto_relative
 */
export const q = (
    dx1: number,
    dy1: number,
    dx: number,
    dy: number,
) => { return "" }

// -------------------------------------------------------------------------

/**
 * `T`
 *
 * smooth_quadratic_bezier_curveto_absolute
 */
export const T = (
    x: number,
    y: number,
) => { return "" }

/**
 * `t`
 *
 * smooth_quadratic_bezier_curveto_relative
 */
export const t = (
    dx: number,
    dy: number,
) => { return "" }

// =========================================================================

/**
 * `A`
 *
 * elliptical_arc_absolute
 */
export const A = (
    rx: number,
    ry: number,
    angle: number,
    largeArcFlag: 0 | 1,
    sweepFlag: 0 | 1,
    x: number,
    y: number,
) => { return "" }

/**
 * `a`
 *
 * elliptical_arc_relative
 */
export const a = (
    rx: number,
    ry: number,
    angle: number,
    largeArcFlag: 0 | 1,
    sweepFlag: 0 | 1,
    dx: number,
    dy: number,
) => { return "" }
