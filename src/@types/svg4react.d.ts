export declare module "svg4react" {

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

    export type DrawToCommandName = keyof typeof DrawToCommandNames
    export type DrawToCommandDescription = typeof DrawToCommandNames[DrawToCommandName]

}
