// // =============================================================================
// // V1
// // =============================================================================
//
// export declare module "svg4react" {
//
//     export enum DrawToCommandNames {
//         "M" = "moveto_absolute",
//         "m" = "moveto_relative",
//         "L" = "lineto_absolute",
//         "l" = "lineto_relative",
//         "H" = "horizontal_lineto_absolute",
//         "h" = "horizontal_lineto_relative",
//         "V" = "vertical_lineto_absolute",
//         "v" = "vertical_lineto_relative",
//         "C" = "curveto_absolute",
//         "c" = "curveto_relative",
//         "S" = "smooth_curveto_absolute",
//         "s" = "smooth_curveto_relative",
//         "Q" = "quadratic_bezier_curveto_absolute",
//         "q" = "quadratic_bezier_curveto_relative",
//         "T" = "smooth_quadratic_bezier_curveto_absolute",
//         "t" = "smooth_quadratic_bezier_curveto_relative",
//         "A" = "elliptical_arc_absolute",
//         "a" = "elliptical_arc_relative",
//         "Z" = "closepath",
//         // "z" = "closepath",
//     }
//
//     export type DrawToCommandName = keyof typeof DrawToCommandNames
//     export type DrawToCommandDescription = typeof DrawToCommandNames[DrawToCommandName]
//
// }


// =============================================================================
// V2
// =============================================================================

// import type {
//     CircleAttributes as _CircleAttributes,
//     LinearGradientAttributes as _LinearGradientAttributes,
//     StopAttributes as _StopAttributes,
// } from "./attributes"
// // import type { CircleAttributes as _CircleAttributes } from "./attributes/CircleAttributes"
//
// declare namespace svg4react {
//
//     type CircleAttributes = _CircleAttributes
//     // export type LinearGradientAttributes = _LinearGradientAttributes
//     // export type StopAttributes = _StopAttributes
// }
//
// export = svg4react

// =============================================================================
// V3
// =============================================================================

// import type {
//     CircleAttributes as _CircleAttributes,
//     // LinearGradientAttributes as _LinearGradientAttributes,
//     // StopAttributes as _StopAttributes,
// } from "./attributes"
// // import type { CircleAttributes as _CircleAttributes } from "./attributes/CircleAttributes"
//
// export = svg4react;
// export as namespace svg4react;
//
// declare namespace svg4react {
//
//         type CircleAttributes = _CircleAttributes
//         // export type LinearGradientAttributes = _LinearGradientAttributes
//         // export type StopAttributes = _StopAttributes
// }

// =============================================================================
// V4
// =============================================================================

// eslint-disable-next-line @typescript-eslint/triple-slash-reference

// disable automatic export
// export {}
// export * from "./attributes"

// import type { CircleAttributes as _CircleAttributes } from "./attributes/CircleAttributes"

// export as namespace svg4react;
// export = svg4react;

declare module "svg4react" {

    /**
     * @public
     */
    export enum DrawToCommandNames {
        "M" = "moveto_absolute",
        "m" = "moveto_relative",
        "L" = "lineto_absolute",
        "l" = "lineto_relative",
        "H" = "horizontal_lineto_absolute",
        "h" = "horizontal_lineto_relative",
        "V" = "vertical_lineto_absolute",
        "v" = "vertical_lineto_relative",
        "C" = "curveto_absolute",
        "c" = "curveto_relative",
        "S" = "smooth_curveto_absolute",
        "s" = "smooth_curveto_relative",
        "Q" = "quadratic_bezier_curveto_absolute",
        "q" = "quadratic_bezier_curveto_relative",
        "T" = "smooth_quadratic_bezier_curveto_absolute",
        "t" = "smooth_quadratic_bezier_curveto_relative",
        "A" = "elliptical_arc_absolute",
        "a" = "elliptical_arc_relative",
        "Z" = "closepath",
        // "z" = "closepath",
    }

    /**
     * @public
     */
    export type DrawToCommandName = keyof typeof DrawToCommandNames
    /**
     * @public
     */
    export type DrawToCommandDescription = typeof DrawToCommandNames[DrawToCommandName]

    /**
     * @public
     *
     * @see [SVG Attribute reference - transform](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform)
     */
    export type TransformFunction =
        | "matrix"
        | "translate"
        | "scale"
        | "rotate"
        | "skewX"
        | "skewY"
}
