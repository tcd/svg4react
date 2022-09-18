export type X = [x: number]
export type Y = [y: number]
export type XY = [x: number, y: number]
export type dXdY = [dx: number, dy: number]

// =========================================================================

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
export const closepath = () => { return "Z" }

// =========================================================================

/**
 * `M`
 *
 * moveto_absolute
 */
export const moveto_absolute = (...args: XY[]) => {
    const points = args.map((xy) => xy.join(","))
    return ["M", ...points].join(" ")
}

/**
 * `m`
 *
 * moveto_relative
 */
export const moveto_relative = (...args: dXdY[]) => {
    const points = args.map((dXdY) => dXdY.join(","))
    return ["m", ...points].join(" ")
}

// =========================================================================

/**
 * `L`
 *
 * lineto_absolute
 */
export const lineto_absolute = (...args: XY[]) => {
    const points = args.map((xy) => xy.join(","))
    return ["L", ...points].join(" ")
}

/**
 * `l`
 *
 * lineto_relative
 */
export const lineto_relative = (...args: dXdY[]) => {
    const points = args.map((dXdY) => dXdY.join(","))
    return ["l", ...points].join(" ")
}

// -------------------------------------------------------------------------

/**
 * `H`
 *
 * horizontal_lineto_absolute
 */
export const horizontal_lineto_absolute = (...args: X[]) => {
    return ["H", ...args].join(" ")
}

/**
 * `h`
 *
 * horizontal_lineto_relative
 */
export const horizontal_lineto_relative = (...args: Y[]) => {
    return ["h", ...args].join(" ")
}

// -------------------------------------------------------------------------

/**
 * `V`
 *
 * vertical_lineto_absolute
 */
export const vertical_lineto_absolute = (...x: number[]) => {
    return ["V", ...x].join(" ")
}

/**
 * `v`
 *
 * vertical_lineto_relative
 */
export const vertical_lineto_relative = (...x: number[]) => {
    return ["V", ...x].join(" ")
}

// =========================================================================

/** curveto_absolute */
export const C = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x: number,
    y: number,
) => { return "" }

/** curveto_relative */
export const c = (
    dx1: number,
    dy1: number,
    dx2: number,
    dy2: number,
    dx: number,
    dy: number,
) => { return "" }

// -------------------------------------------------------------------------

/** smooth_curveto_absolute */
export const S = (
    x2: number,
    y2: number,
    x: number,
    y: number,
) => { return "" }

/** smooth_curveto_relative */
export const s = (
    dx2: number,
    dy2: number,
    dx: number,
    dy: number,
) => { return "" }

// =========================================================================

/** quadratic_bezier_curveto_absolute */
export const Q = (
    x1: number,
    y1: number,
    x: number,
    y: number,
) => { return "" }

/** quadratic_bezier_curveto_relative */
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
export const smooth_quadratic_bezier_curveto_absolute = (
    x: number,
    y: number,
) => { return "" }

/**
 * `t`
 *
 * smooth_quadratic_bezier_curveto_relative
 */
export const smooth_quadratic_bezier_curveto_relative = (
    dx: number,
    dy: number,
) => { return "" }

// =========================================================================

/**
 * `A`
 *
 * elliptical_arc_absolute
 */
export const elliptical_arc_absolute = (
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
export const elliptical_arc_relative = (
    rx: number,
    ry: number,
    angle: number,
    largeArcFlag: 0 | 1,
    sweepFlag: 0 | 1,
    dx: number,
    dy: number,
) => { return "" }
