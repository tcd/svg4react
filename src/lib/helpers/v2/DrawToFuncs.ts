import type {
    XY,
    dXdY,
} from "./types"

/** Join with commas and no spaces. */
const j = (...args: (number | string)[]): string => args.join(",")

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
export const M = (...opts: XY[]) => {
    const points = opts.map(({ x, y }) => [x, y].join(","))
    return ["M", ...points].join(" ")
}

/**
 * `m`
 *
 * moveto_relative
 */
export const m = (...opts: dXdY[]) => {
    const points = opts.map(({ dx, dy }) => [dx, dy].join(","))
    return ["m", ...points].join(" ")
}

// =========================================================================

/**
 * `L`
 *
 * lineto_absolute
 */
export const L = (...opts: XY[]) => {
    // const points = args.map(({ x, y }) => [x, y].join(","))
    const points = opts.map(({ x, y }) => `${x},${y}`)
    return ["L", ...points].join(" ")
}

/**
 * `l`
 *
 * lineto_relative
 */
export const l = (...opts: dXdY[]) => {
    // const points = args.map(({ dx, dy }) => [dx, dy].join(","))
    const points = opts.map(({ dx, dy }) => `${dx},${dy}`)
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
export const C = (...opts: {
    x1: number, y1: number,
    x2: number, y2: number,
    x:  number, y:  number,
}[]): string => {
    const points = opts.map(({
        x1, y1,
        x2, y2,
        x,  y,
    }) => [
        `C`,
        j(x1, y1),
        j(x2, y2),
        j(x,  y),
    ])
    return points.join(" ")
}

/**
 * `c`
 *
 * curveto_relative
 */
export const c = (...opts: {
    dx1: number, dy1: number,
    dx2: number, dy2: number,
    dx:  number, dy:  number,
}[]): string => {
    const points = opts.map(({
        dx1, dy1,
        dx2, dy2,
        dx,  dy,
    }) => [
        `c`,
        j(dx1, dy1),
        j(dx2, dy2),
        j(dx,  dy),
    ])
    return points.join(" ")
}

// -------------------------------------------------------------------------

/**
 * `S`
 *
 * smooth_curveto_absolute
 */
export const S = (...opts: {
    x2: number, y2: number,
    x:  number, y:  number,
}[]): string => {
    const points = opts.map(({
        x2, y2,
        x,  y,
    }) => `S ${x2},${y2} ${x},${y}`)
    return points.join(" ")
}

/**
 * `s`
 *
 * smooth_curveto_relative
 */
export const s = (...opts: {
    dx2: number, dy2: number,
    dx:  number, dy:  number,
}[]): string => {
    const points = opts.map(({
        dx2, dy2,
        dx,  dy,
    }) => `s ${dx2},${dy2} ${dx},${dy}`)
    return points.join(" ")
}

// =========================================================================

/**
 * `Q`
 *
 * quadratic_bezier_curveto_absolute
 */
export const Q = (...opts: {
    x1: number, y1: number,
    x:  number, y:  number,
}[]): string => {
    const points = opts.map(({
        x1, y1,
        x,  y,
    }) => `Q ${x1},${y1} ${x},${y}`)
    return points.join(" ")
}

/**
 * `q`
 *
 * quadratic_bezier_curveto_relative
 */
export const q = (...opts: {
    dx1: number, dy1: number,
    dx:  number, dy:  number,
}[]): string => {
    const points = opts.map(({
        dx1, dy1,
        dx,  dy,
    }) => `q ${dx1},${dy1} ${dx},${dy}`)
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

export type elliptical_arc_absolute_opts = {
    rx: number
    ry: number
    angle: number
    largeArcFlag: 0 | 1
    sweepFlag: 0 | 1
    x: number
    y: number
}

/**
 * `A`
 *
 * elliptical_arc_absolute
 */
export const A = (...opts: elliptical_arc_absolute_opts[]): string => {
    const points = opts.map((o) => [
        `A`,
        o.rx,
        o.ry,
        o.angle,
        o.largeArcFlag,
        o.sweepFlag,
        j(o.x, o.y),
    ].join(" "))
    return points.join(" ")
}

export type elliptical_arc_relative_opts = {
    rx: number
    ry: number
    angle: number
    largeArcFlag: 0 | 1
    sweepFlag: 0 | 1
    dx: number
    dy: number
}

/**
 * `a`
 *
 * elliptical_arc_relative
 */
export const a = (...opts: elliptical_arc_relative_opts[]): string => {
    const points = opts.map((o) => [
        `a`,
        o.rx,
        o.ry,
        o.angle,
        o.largeArcFlag,
        o.sweepFlag,
        j(o.dx, o.dy),
    ].join(" "))
    return points.join(" ")
}
