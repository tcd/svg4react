/**
 * @see [MDN Web Docs - Path Commands](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#path_commands)
 * @see [SVG 1.1](https://www.w3.org/TR/SVG11/paths.html#PathData)
 * @see [SVG 2.0](https://www.w3.org/TR/SVG2/paths.html#TheDProperty)
 */
export namespace DrawArgs {
    /** `M` */
    export type moveto_absolute = [ x: number,  y: number]
    /** `m` */
    export type moveto_relative = [dx: number, dy: number]
    /** `L` */
    export type lineto_absolute = [ x: number,  y: number]
    /** `l` */
    export type lineto_relative = [dx: number, dy: number]
    /** `H` */
    export type horizontal_lineto_absolute = number
    /** `h` */
    export type horizontal_lineto_relative = number
    /** `V` */
    export type vertical_lineto_absolute = number
    /** `v` */
    export type vertical_lineto_relative = number
    /** `C` */
    export type curveto_absolute = [
        x1: number, y1: number,
        x2: number, y2: number,
        x: number,  y: number,
    ]
    /** `c` */
    export type curveto_relative = [
        dx1: number, dy1: number,
        dx2: number, dy2: number,
        dx: number,  dy: number,
    ]
    /** `S` */
    export type smooth_curveto_absolute = [
        x2: number, y2: number,
        x: number,  y: number,
    ]
    /** `s` */
    export type smooth_curveto_relative = [
        dx2: number, dy2: number,
        dx: number,  dy: number,
    ]
    /** `Q` */
    export type quadratic_bezier_curveto_absolute = [
        x1: number, y1: number,
        x: number,  y: number,
    ]
    /** `q` */
    export type quadratic_bezier_curveto_relative = [
        dx1: number, dy1: number,
        dx: number,  dy: number,
    ]
    /** `T` */
    export type smooth_quadratic_bezier_curveto_absolute = [ x: number,  y: number]
    /** `t` */
    export type smooth_quadratic_bezier_curveto_relative = [dx: number, dy: number]
    /** `A` */
    export type elliptical_arc_absolute = [
        rx: number, ry: number,
        angle: number,
        largeArcFlag: 0 | 1,
        sweepFlag: 0 | 1,
        x: number, y: number,
    ]
    /** `a` */
    export type elliptical_arc_relative = [
        rx: number, ry: number,
        angle: number,
        largeArcFlag: 0 | 1,
        sweepFlag: 0 | 1,
        x: number, y: number,
    ]
    /** `Z` / `z` */
    export type closepath = null | undefined
}
