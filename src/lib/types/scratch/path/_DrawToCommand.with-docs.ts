/* eslint-disable @typescript-eslint/no-namespace */

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#path_commands
 */
export declare namespace DrawToCommand {
    export namespace Names {
        export type moveto_absolute = "M"
        export type moveto_relative = "m"
        export type lineto_absolute = "L"
        export type lineto_relative = "l"
        export type horizontal_lineto_absolute = "H"
        export type horizontal_lineto_relative = "h"
        export type vertical_lineto_absolute = "V"
        export type vertical_lineto_relative = "v"
        export type curveto_absolute = "C"
        export type curveto_relative = "c"
        export type smooth_curveto_absolute = "S"
        export type smooth_curveto_relative = "s"
        export type quadratic_bezier_curveto_absolute = "Q"
        export type quadratic_bezier_curveto_relative = "q"
        export type smooth_quadratic_bezier_curveto_absolute = "T"
        export type smooth_quadratic_bezier_curveto_relative = "t"
        export type elliptical_arc_absolute = "A"
        export type elliptical_arc_relative = "a"
        export type closepath_absolute = "Z"
    }
    /**
     * [MoveTo path commands](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#moveto_path_commands)
     *
     * MoveTo instructions can be thought of as picking up the drawing
     * instrument, and setting it down somewhere else; in other words,
     * moving the current point `(P<sub>o</sub>; {x<sub>o</sub>, y<sub>o</sub>})`.
     * There is no line drawn between `P<sub>o</sub>` and the new current point
     * `(P<sub>n</sub>; {x<sub>n</sub>, y<sub>n</sub>})`.
     */
    export namespace MoveTo {
        /**
         * Move the current point to the coordinate `x`, `y`.
         *
         * Any subsequent coordinate pair(s) are interpreted as parameter(s) for implicit absolute LineTo (`L`) command(s) (see below).
         */
        export interface M {
            x: number
            y: number
        }
        /**
         * Move the current point by shifting the last known position of the path by `dx` along the x-axis and by `dy` along the y-axis.
         *
         * Any subsequent coordinate pair(s) are interpreted as parameter(s) for implicit relative LineTo (`l`) command(s) (see below).
         */
        export interface m {
            dx: number
            dy: number
        }
    }
    /**
     * [LineTo path commands](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#lineto_path_commands)
     */
    export namespace LineTo {
        /**
         * Draw a line from the current point to the end point specified by `x`, `y`.
         *
         * Any subsequent coordinate pair(s) are interpreted as parameter(s) for implicit absolute LineTo (`L`) command(s).
         */
        export interface L {
            x: number
            y: number
        }
        /**
         * Draw a line from the current point to the end point, which is the current
         * point shifted by `dx` along the x-axis and `dy` along the y-axis.
         *
         * Any subsequent coordinate pair(s) are interpreted as parameter(s) for implicit relative LineTo (`l`) command(s) (see below).
         */
        export interface l {
            dx: number
            dy: number
        }
        /**
         * Draw a horizontal line from the current point to the end point, which is specified by the `x` parameter and the current point's `y` coordinate.
         *
         * Any subsequent value(s) are interpreted as parameter(s) for implicit absolute horizontal LineTo (`H`) command(s).
         */
        export interface H {
            x: number
        }
        /**
         * Draw a horizontal line from the current point to the end point, which is specified by the current point shifted by `dx` along the x-axis and the current point's `y` coordinate.
         *
         * Any subsequent value(s) are interpreted as parameter(s) for implicit relative horizontal LineTo (`h`) command(s).
         */
        export interface h {
            dx: number
        }
        /**
         * Draw a vertical line from the current point to the end point, which is specified by the `y` parameter and the current point's `x` coordinate.
         *
         * Any subsequent values are interpreted as parameters for implicit absolute vertical LineTo (`V`) command(s).
         *
         * ## Formula
         *
         * ```math
         * P_{o'} = Pn = \{x_{o'}, {y}\}
         * ```
         */
        export interface V {
            y: number
        }
        /**
         * Draw a vertical line from the current point to the end point, which is specified by the current point shifted by `dy` along the y-axis and the current point's `x` coordinate.
         *
         * Any subsequent value(s) are interpreted as parameter(s) for implicit relative vertical LineTo (`v`) command(s).
         */
        export interface v {
            dy: number
        }
    }
    export namespace CubicBezierCurve {
        export interface C { }
        export interface c { }
        export interface S { }
        export interface s { }
    }
    export namespace X {
        export interface Q { }
        export interface q { }
        export interface T { }
        export interface t { }
    }
}
