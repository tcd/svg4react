export enum DrawCommands {
    "moveto_absolute"                          = "M",
    "moveto_relative"                          = "m",
    "lineto_absolute"                          = "L",
    "lineto_relative"                          = "l",
    "horizontal_lineto_absolute"               = "H",
    "horizontal_lineto_relative"               = "h",
    "vertical_lineto_absolute"                 = "V",
    "vertical_lineto_relative"                 = "v",
    "curveto_absolute"                         = "C",
    "curveto_relative"                         = "c",
    "smooth_curveto_absolute"                  = "S",
    "smooth_curveto_relative"                  = "s",
    "quadratic_bezier_curveto_absolute"        = "Q",
    "quadratic_bezier_curveto_relative"        = "q",
    "smooth_quadratic_bezier_curveto_absolute" = "T",
    "smooth_quadratic_bezier_curveto_relative" = "t",
    "elliptical_arc_absolute"                  = "A",
    "elliptical_arc_relative"                  = "a",
    "closepath"                                = "Z",
}

export type DrawCommandName = keyof typeof DrawCommands

export type DrawCommandCode = typeof DrawCommands[DrawCommandName]
