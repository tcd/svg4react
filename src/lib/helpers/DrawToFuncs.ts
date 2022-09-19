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
export const C = (...opts: [
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x: number,
    y: number,
][]): string => {
    const points = opts.map((opt) => `C ${opt[0]},${opt[1]} ${opt[2]},${opt[3]} ${opt[4]},${opt[5]}`)
    return points.join(" ")
}

/**
 * `c`
 *
 * curveto_relative
 */
export const c = (...opts: [
    dx1: number,
    dy1: number,
    dx2: number,
    dy2: number,
    dx: number,
    dy: number,
][]): string => {
    const points = opts.map((opt) => `c ${opt[0]},${opt[1]} ${opt[2]},${opt[3]} ${opt[4]},${opt[5]}`)
    return points.join(" ")
}

// -------------------------------------------------------------------------

/**
 * `S`
 *
 * smooth_curveto_absolute
 */
export const S = (...opts: [
    x2: number,
    y2: number,
    x: number,
    y: number,
][]): string => {
    const points = opts.map((opt) => `S ${opt[0]},${opt[1]} ${opt[2]},${opt[3]}`)
    return points.join(" ")
}

/**
 * `s`
 *
 * smooth_curveto_relative
 */
export const s = (...opts: [
    dx2: number,
    dy2: number,
    dx: number,
    dy: number,
][]): string => {
    const points = opts.map((opt) => `s ${opt[0]},${opt[1]} ${opt[2]},${opt[3]}`)
    return points.join(" ")
}

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
export const q = (...opts: [
    dx1: number,
    dy1: number,
    dx: number,
    dy: number,
][]) => {
    const points = opts.map((opt) => `q ${opt[0]},${opt[1]} ${opt[2]},${opt[3]}`)
    return points.join(" ")
}

// -------------------------------------------------------------------------

/**
 * `T`
 *
 * smooth_quadratic_bezier_curveto_absolute
 */
export const T = (...args: [x: number, y: number][]) => {
    const points = args.map((xy) => xy.join(","))
    return ["T", ...points].join(" ")
}

/**
 * `t`
 *
 * smooth_quadratic_bezier_curveto_relative
 */
export const t = (...args: [dx: number, dy: number][]) => {
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
export const a = (...opts: [
    rx: number,
    ry: number,
    angle: number,
    largeArcFlag: 0 | 1,
    sweepFlag: 0 | 1,
    x: number,
    y: number,
][]): string => {
    const points = opts.map((opt) => `a ${opt[0]},${opt[1]} ${opt[2]},${opt[3]},${opt[4]} ${opt[5]},${opt[6]}`)
    return points.join(" ")
}

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
