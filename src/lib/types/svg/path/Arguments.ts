/* eslint-disable @typescript-eslint/no-namespace */

/**
 * @public
 *
 * ## Resources:
 *
 * - [MDN - `d` - Path Commands](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#path_commands)
 * - [W3C - SVG 2 - Paths](https://www.w3.org/TR/SVG/paths.html)
 */
export declare namespace DrawToCommandArgs {
    // =========================================================================
    /** closepath */
    export interface Z { }
    // =========================================================================
    /** moveto_absolute */
    export interface M {
        x: number
        y: number
    }
    /** moveto_relative */
    export interface m {
        dx: number
        dy: number
    }
    // =========================================================================
    /** lineto_absolute */
    export interface L {
        x: number
        y: number
    }
    /** lineto_relative */
    export interface l {
        dx: number
        dy: number
    }
    // -------------------------------------------------------------------------
    /** horizontal_lineto_absolute */
    export interface H {
        x: number
    }
    /** horizontal_lineto_relative */
    export interface h {
        dx: number
    }
    // -------------------------------------------------------------------------
    /** vertical_lineto_absolute */
    export interface V {
        y: number
    }
    /** vertical_lineto_relative */
    export interface v {
        dy: number
    }
    // =========================================================================
    /** curveto_absolute */
    export interface C {
        x1: number
        y1: number
        x2: number
        y2: number
        x: number
        y: number
    }
    /** curveto_relative */
    export interface c {
        dx1: number
        dy1: number
        dx2: number
        dy2: number
        dx: number
        dy: number
    }
    // -------------------------------------------------------------------------
    /** smooth_curveto_absolute */
    export interface S {
        x2: number
        y2: number
        x: number
        y: number
    }
    /** smooth_curveto_relative */
    export interface s {
        dx2: number
        dy2: number
        dx: number
        dy: number
    }
    // =========================================================================
    /** quadratic_bezier_curveto_absolute */
    export interface Q {
        x1: number
        y1: number
        x: number
        y: number
    }
    /** quadratic_bezier_curveto_relative */
    export interface q {
        dx1: number
        dy1: number
        dx: number
        dy: number
    }
    // -------------------------------------------------------------------------
    /** smooth_quadratic_bezier_curveto_absolute */
    export interface T {
        x: number
        y: number
    }
    /** smooth_quadratic_bezier_curveto_relative */
    export interface t {
        dx: number
        dy: number
    }
    // =========================================================================
    /** elliptical_arc_absolute */
    export interface A {
        rx: number
        ry: number
        angle: number
        largeArcFlag: 0 | 1
        sweepFlag: 0 | 1
        x: number
        y: number
    }
    /** elliptical_arc_relative */
    export interface a {
        rx: number
        ry: number
        angle: number
        largeArcFlag: 0 | 1
        sweepFlag: 0 | 1
        dx: number
        dy: number
    }
}
