/* eslint-disable @typescript-eslint/no-namespace */

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#path_commands
 */
export type DrawToCommandCategory =
    | "MoveTo"
    | "LineTo"
    | "CurveTo"
    | "CubicBezierCurve"
    | "QuadraticBezierCurve"
    | "EllipticalArcCurve"
    | "ClosePath"

export type drawto_command =
    | "moveto"
    | "closepath"
    | "lineto"
    | "horizontal_lineto"
    | "vertical_lineto"
    | "curveto"
    | "smooth_curveto"
    | "quadratic_bezier_curveto"
    | "smooth_quadratic_bezier_curveto"
    | "elliptical_arc"

// MoveTo: M, m
// LineTo: L, l, H, h, V, v
// Cubic Bézier Curve: C, c, S, s
// Quadratic Bézier Curve: Q, q, T, t
// Elliptical Arc Curve: A, a
// ClosePath: Z, z

export type Positioning = "absolute" | "relative"
export type Direction = "horizontal" | "vertical" | "none"

interface IDrawToCommand {
    code: string
    name: string
    cat_1: DrawToCommandCategory
    cat_2: drawto_command
    position: Positioning
    smooth: boolean
}

const IDrawToCommands: IDrawToCommand[] = [
    { "code": "M", "cat_2": "moveto",                          "cat_1": "MoveTo",               "position": "absolute", "smooth": false, "name": "moveto_absolute" },
    { "code": "m", "cat_2": "moveto",                          "cat_1": "MoveTo",               "position": "relative", "smooth": false, "name": "moveto_relative" },
    { "code": "L", "cat_2": "lineto",                          "cat_1": "LineTo",               "position": "absolute", "smooth": false, "name": "lineto_absolute" },
    { "code": "l", "cat_2": "lineto",                          "cat_1": "LineTo",               "position": "relative", "smooth": false, "name": "lineto_relative" },
    { "code": "H", "cat_2": "horizontal_lineto",               "cat_1": "LineTo",               "position": "absolute", "smooth": false, "name": "horizontal_lineto_absolute" },
    { "code": "h", "cat_2": "horizontal_lineto",               "cat_1": "LineTo",               "position": "relative", "smooth": false, "name": "horizontal_lineto_relative" },
    { "code": "V", "cat_2": "vertical_lineto",                 "cat_1": "LineTo",               "position": "absolute", "smooth": false, "name": "vertical_lineto_absolute" },
    { "code": "v", "cat_2": "vertical_lineto",                 "cat_1": "LineTo",               "position": "relative", "smooth": false, "name": "vertical_lineto_relative" },
    { "code": "C", "cat_2": "curveto",                         "cat_1": "CurveTo",              "position": "absolute", "smooth": false, "name": "curveto_absolute" },
    { "code": "c", "cat_2": "curveto",                         "cat_1": "CurveTo",              "position": "relative", "smooth": false, "name": "curveto_relative" },
    { "code": "S", "cat_2": "smooth_curveto",                  "cat_1": "CubicBezierCurve",     "position": "absolute", "smooth": true,  "name": "smooth_curveto_absolute" },
    { "code": "s", "cat_2": "smooth_curveto",                  "cat_1": "CubicBezierCurve",     "position": "relative", "smooth": true,  "name": "smooth_curveto_relative" },
    { "code": "Q", "cat_2": "quadratic_bezier_curveto",        "cat_1": "QuadraticBezierCurve", "position": "absolute", "smooth": false, "name": "quadratic_bezier_curveto_absolute" },
    { "code": "q", "cat_2": "quadratic_bezier_curveto",        "cat_1": "QuadraticBezierCurve", "position": "relative", "smooth": false, "name": "quadratic_bezier_curveto_relative" },
    { "code": "T", "cat_2": "smooth_quadratic_bezier_curveto", "cat_1": "QuadraticBezierCurve", "position": "absolute", "smooth": true,  "name": "smooth_quadratic_bezier_curveto_absolute" },
    { "code": "t", "cat_2": "smooth_quadratic_bezier_curveto", "cat_1": "QuadraticBezierCurve", "position": "relative", "smooth": true,  "name": "smooth_quadratic_bezier_curveto_relative" },
    { "code": "A", "cat_2": "elliptical_arc",                  "cat_1": "EllipticalArcCurve",   "position": "absolute", "smooth": false, "name": "elliptical_arc_absolute" },
    { "code": "a", "cat_2": "elliptical_arc",                  "cat_1": "EllipticalArcCurve",   "position": "relative", "smooth": false, "name": "elliptical_arc_relative" },
    { "code": "Z", "cat_2": "closepath",                       "cat_1": "ClosePath",            "position": "absolute", "smooth": false, "name": "closepath_absolute" },
    { "code": "z", "cat_2": "closepath",                       "cat_1": "ClosePath",            "position": "absolute", "smooth": false, "name": "closepath_absolute" },
]

export const DrawToCommandNames = <const>{
    "M": "moveto_absolute",
    "m": "moveto_relative",
    "L": "lineto_absolute",
    "l": "lineto_relative",
    "H": "horizontal_lineto_absolute",
    "h": "horizontal_lineto_relative",
    "V": "vertical_lineto_absolute",
    "v": "vertical_lineto_relative",
    "C": "curveto_absolute",
    "c": "curveto_relative",
    "S": "smooth_curveto_absolute",
    "s": "smooth_curveto_relative",
    "Q": "quadratic_bezier_curveto_absolute",
    "q": "quadratic_bezier_curveto_relative",
    "T": "smooth_quadratic_bezier_curveto_absolute",
    "t": "smooth_quadratic_bezier_curveto_relative",
    "A": "elliptical_arc_absolute",
    "a": "elliptical_arc_relative",
    "Z": "closepath",
    // "z": "closepath",
}

export type DrawToCommandName = keyof typeof DrawToCommandNames
export type DrawToCommandDescription = typeof DrawToCommandNames[DrawToCommandName]

// export const DrawToCommandArgs: Record<DrawToCommandName, string[]> ={
//     "M": ["x","y"],
//     "m": ["dx","dy"],
//     "L": ["x","y"],
//     "l": ["dx","dy"],
//     "H": ["x"],
//     "h": ["dx"],
//     "V": ["y"],
//     "v": ["dy"],
//     "C": ["x1","y1", "x2","y2", "x","y"],
//     "c": ["dx1","dy1", "dx2","dy2", "dx","dy"],
//     "S": ["x2","y2", "x","y"],
//     "s": ["dx2","dy2", "dx","dy"],
//     "Q": ["x1","y1", "x","y"],
//     "q": ["dx1","dy1", "dx","dy"],
//     "T": ["x","y"],
//     "t": ["dx","dy"],
//     "A": ["rx", "ry", "angle", "large-arc-flag", "sweep-flag", "x", "y"],
//     "a": ["rx", "ry", "angle", "large-arc-flag", "sweep-flag", "dx", "dy"],
//     "Z": [],
//     // "z": [],
// }

// export type DrawToCommandName =
//     | "M"
//     | "m"
//     | "L"
//     | "l"
//     | "H"
//     | "h"
//     | "V"
//     | "v"
//     | "C"
//     | "c"
//     | "S"
//     | "s"
//     | "Q"
//     | "q"
//     | "T"
//     | "t"
//     | "A"
//     | "a"
//     | "Z"
//     // | "z"
