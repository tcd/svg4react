import type { DrawToArgs } from "./DrawArgs.long"

/**
 * `Z` / `z`
 *
 * Close the current subpath by drawing a straight line from the current point to current subpath's initial point.
 */
export const closepath = (z: "z" | "Z"): "z" | "Z" => z

// =========================================================================

/**
 * `M`
 *
 * Start a new sub-path at the given (x,y) coordinate.
 */
export const moveto_absolute = (...args: DrawToArgs.moveto_absolute[]) => {
    const points = args.map((xy) => xy.join(","))
    return ["M", ...points].join(" ")
}

/**
 * `m`
 *
 * Start a new sub-path at the given (x,y) coordinate.
 */
export const moveto_relative = (...args: DrawToArgs.moveto_relative[]) => {
    const points = args.map((dXdY) => dXdY.join(","))
    return ["m", ...points].join(" ")
}

// =========================================================================

/**
 * `L`
 */
export const lineto_absolute = (...args: DrawToArgs.lineto_absolute[]) => {
    const points = args.map((xy) => xy.join(","))
    return ["L", ...points].join(" ")
}

/**
 * `l`
 *
 * lineto_relative
 */
export const lineto_relative = (...args: DrawToArgs.lineto_relative[]) => {
    const points = args.map((dXdY) => dXdY.join(","))
    return ["l", ...points].join(" ")
}

// -------------------------------------------------------------------------

/**
 * `H`
 *
 * horizontal_lineto_absolute
 */
export const horizontal_lineto_absolute = (...y: DrawToArgs.horizontal_lineto_absolute[]) => {
    return ["H", ...y].join(" ")
}

/**
 * `h`
 *
 * horizontal_lineto_relative
 */
export const horizontal_lineto_relative = (...y: DrawToArgs.horizontal_lineto_relative[]) => {
    return ["h", ...y].join(" ")
}

// -------------------------------------------------------------------------

/**
 * `V`
 *
 * vertical_lineto_absolute
 */
export const vertical_lineto_absolute = (...x: DrawToArgs.vertical_lineto_absolute[]) => {
    return ["V", ...x].join(" ")
}

/**
 * `v`
 *
 * vertical_lineto_relative
 */
export const vertical_lineto_relative = (...x: DrawToArgs.vertical_lineto_relative[]) => {
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
export const curveto_absolute = (...opts: DrawToArgs.curveto_absolute[]): string => {
    const points = opts.map((opt) => `C ${opt[0]},${opt[1]} ${opt[2]},${opt[3]} ${opt[4]},${opt[5]}`)
    return points.join(" ")
}

/**
 * `c`
 *
 * curveto_relative
 */
export const curveto_relative = (...opts: DrawToArgs.curveto_relative[]): string => {
    const points = opts.map((opt) => `c ${opt[0]},${opt[1]} ${opt[2]},${opt[3]} ${opt[4]},${opt[5]}`)
    return points.join(" ")
}

// -------------------------------------------------------------------------

/**
 * `S`
 *
 * smooth_curveto_absolute
 */
export const smooth_curveto_absolute = (...opts: DrawToArgs.smooth_curveto_absolute[]): string => {
    const points = opts.map((opt) => `S ${opt[0]},${opt[1]} ${opt[2]},${opt[3]}`)
    return points.join(" ")
}

/**
 * `s`
 *
 * smooth_curveto_relative
 */
export const smooth_curveto_relative = (...opts: DrawToArgs.smooth_curveto_relative[]): string => {
    const points = opts.map((opt) => `s ${opt[0]},${opt[1]} ${opt[2]},${opt[3]}`)
    return points.join(" ")
}

// =========================================================================

/**
 * `Q`
 *
 * quadratic_bezier_curveto_absolute
 */
export const quadratic_bezier_curveto_absolute = (...opts: DrawToArgs.quadratic_bezier_curveto_absolute[]) => {
    const points = opts.map((opt) => `Q ${opt[0]},${opt[1]} ${opt[2]},${opt[3]}`)
    return points.join(" ")
}

/**
 * `q`
 *
 * quadratic_bezier_curveto_relative
 */
export const quadratic_bezier_curveto_relative = (...opts: DrawToArgs.quadratic_bezier_curveto_relative[]) => {
    const points = opts.map((opt) => `q ${opt[0]},${opt[1]} ${opt[2]},${opt[3]}`)
    return points.join(" ")
}

// -------------------------------------------------------------------------

/**
 * `T`
 *
 * smooth_quadratic_bezier_curveto_absolute
 */
export const smooth_quadratic_bezier_curveto_absolute = (...args: DrawToArgs.smooth_quadratic_bezier_curveto_absolute[]) => {
    const points = args.map((xy) => xy.join(","))
    return ["T", ...points].join(" ")
}

/**
 * `t`
 *
 * smooth_quadratic_bezier_curveto_relative
 */
export const smooth_quadratic_bezier_curveto_relative = (...args: DrawToArgs.smooth_quadratic_bezier_curveto_relative[]) => {
    const points = args.map((dXdY) => dXdY.join(","))
    return ["t", ...points].join(" ")
}

// =========================================================================

/**
 * `A`
 *
 * elliptical_arc_absolute
 */
export const elliptical_arc_absolute = (...opts: DrawToArgs.elliptical_arc_absolute[]): string => {
    const points = opts.map((opt) => `A ${opt[0]},${opt[1]} ${opt[2]},${opt[3]},${opt[4]} ${opt[5]},${opt[6]}`)
    return points.join(" ")
}

/**
 * `a`
 *
 * elliptical_arc_relative
 */
export const elliptical_arc_relative = (...opts: DrawToArgs.elliptical_arc_relative[]): string => {
    const points = opts.map((opt) => `a ${opt[0]},${opt[1]} ${opt[2]},${opt[3]},${opt[4]} ${opt[5]},${opt[6]}`)
    return points.join(" ")
}
