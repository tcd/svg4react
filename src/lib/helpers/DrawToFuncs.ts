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
    return ["v", ...x].join(" ")
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
) => { return "C" }

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
) => { return "c" }

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
) => { return "S" }

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
) => { return "s" }

// =========================================================================

/**
 * `Q`
 *
 * quadratic_bezier_curveto_absolute
 */
export const Q = (...opts: [
    x1: number,
    y1: number,
    x: number,
    y: number,
][]) => {
    const points = opts.map((opt) => `Q ${opt[0]},${opt[1]} ${opt[2]},${opt[3]}`)
    return points.join(" ")
}

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
) => { return "q" }

// -------------------------------------------------------------------------

/**
 * `T`
 *
 * smooth_quadratic_bezier_curveto_absolute
 */
export const T = (
    x: number,
    y: number,
) => { return "T" }

/**
 * `t`
 *
 * smooth_quadratic_bezier_curveto_relative
 */
export const t = (
    dx: number,
    dy: number,
) => { return "t" }

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
export const A = (...opts: [
    rx: number,
    ry: number,
    angle: number,
    largeArcFlag: 0 | 1,
    sweepFlag: 0 | 1,
    x: number,
    y: number,
][]): string => {
    const points = opts.map((opt) => `A ${opt[0]},${opt[1]} ${opt[2]},${opt[3]},${opt[4]} ${opt[5]},${opt[6]}`)
    return points.join(" ")
}

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
) => { return "a" }
