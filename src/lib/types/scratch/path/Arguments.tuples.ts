/* eslint-disable @typescript-eslint/no-namespace */

/**
 * ## Resources:
 *
 * - [MDN - `d` - Path Commands](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#path_commands)
 * - [W3C - SVG 2 - Paths](https://www.w3.org/TR/SVG/paths.html)
 */
export declare namespace DrawToCommandArgs {
    // =========================================================================
    /** closepath */
    export type Z = [ ]
    // =========================================================================
    /** moveto_absolute */
    export type M = [
        x: number,
        y: number,
    ]
    /** moveto_relative */
    export type m = [
        dx: number,
        dy: number,
    ]
    // =========================================================================
    /** lineto_absolute */
    export type L = [
        x: number,
        y: number,
    ]
    /** lineto_relative */
    export type l = [
        dx: number,
        dy: number,
    ]
    // -------------------------------------------------------------------------
    /** horizontal_lineto_absolute */
    export type H = [
        x: number,
    ]
    /** horizontal_lineto_relative */
    export type h = [
        dx: number,
    ]
    // -------------------------------------------------------------------------
    /** vertical_lineto_absolute */
    export type V = [
        y: number,
    ]
    /** vertical_lineto_relative */
    export type v = [
        dy: number,
    ]
    // =========================================================================
    /** curveto_absolute */
    export type C = [
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        x: number,
        y: number,
    ]
    /** curveto_relative */
    export type c = [
        dx1: number,
        dy1: number,
        dx2: number,
        dy2: number,
        dx: number,
        dy: number,
    ]
    // -------------------------------------------------------------------------
    /** smooth_curveto_absolute */
    export type S = [
        x2: number,
        y2: number,
        x: number,
        y: number,
    ]
    /** smooth_curveto_relative */
    export type s = [
        dx2: number,
        dy2: number,
        dx: number,
        dy: number,
    ]
    // =========================================================================
    /** quadratic_bezier_curveto_absolute */
    export type Q = [
        x1: number,
        y1: number,
        x: number,
        y: number,
    ]
    /** quadratic_bezier_curveto_relative */
    export type q = [
        dx1: number,
        dy1: number,
        dx: number,
        dy: number,
    ]
    // -------------------------------------------------------------------------
    /** smooth_quadratic_bezier_curveto_absolute */
    export type T = [
        x: number,
        y: number,
    ]
    /** smooth_quadratic_bezier_curveto_relative */
    export type t = [
        dx: number,
        dy: number,
    ]
    // =========================================================================
    /** elliptical_arc_absolute */
    export type A = [
        rx: number,
        ry: number,
        angle: number,
        largeArcFlag: 0 | 1,
        sweepFlag: 0 | 1,
        x: number,
        y: number,
    ]
    /** elliptical_arc_relative */
    export type a = [
        rx: number,
        ry: number,
        angle: number,
        largeArcFlag: 0 | 1,
        sweepFlag: 0 | 1,
        dx: number,
        dy: number,
    ]
}
