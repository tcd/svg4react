import dedent from "dedent"
/*
    ^([a-zA-Z]) =
    { name: "$1", type: `
*/

export const DRAW_ARGS_DATA: PropData[] = [
    { name: "M", description: "moveto_absolute", type: `[x: number, y: number]` },
    { name: "m", description: "moveto_relative", type: `[dx: number, dy: number]` },
    { name: "L", description: "lineto_absolute", type: `[x: number, y: number]` },
    { name: "l", description: "lineto_relative", type: `[dx: number, dy: number]` },
    { name: "H", description: "horizontal_lineto_absolute", type: `number` },
    { name: "h", description: "horizontal_lineto_relative", type: `number` },
    { name: "V", description: "vertical_lineto_absolute", type: `number` },
    { name: "v", description: "vertical_lineto_relative", type: `number` },
    { name: "C", description: "curveto_absolute", type: dedent`[\n\n    x1: number, y1: number,\n\n    x2: number, y2: number,\n\n    x:  number, y:  number,\n\n]` },
    { name: "c", description: "curveto_relative", type: dedent`[
        dx1: number, dy1: number,
        dx2: number, dy2: number,
        dx:  number, dy:  number,
    ]` },
    { name: "S", description: "smooth_curveto_absolute", type: dedent`[
        x2: number, y2: number,
        x:  number, y:  number,
    ]` },
    { name: "s", description: "smooth_curveto_relative", type: dedent`[
        dx2: number, dy2: number,
        dx:  number, dy:  number,
    ]` },
    { name: "Q", description: "quadratic_bezier_curveto_absolute", type: dedent`[
        x1: number, y1: number,
        x:  number, y:  number,
    ]` },
    { name: "q", description: "quadratic_bezier_curveto_relative", type: dedent`[
        dx1: number, dy1: number,
        dx:  number, dy:  number,
    ]` },
    { name: "T", description: "smooth_quadratic_bezier_curveto_absolute", type: `[ x: number,  y: number]` },
    { name: "t", description: "smooth_quadratic_bezier_curveto_relative", type: `[dx: number, dy: number]` },
    { name: "A", description: "elliptical_arc_absolute", type: dedent`[
        rx: number,
        ry: number,
        angle: number,
        largeArcFlag: 0 | 1,
        sweepFlag:    0 | 1,
        x: number,
        y: number,
    ]` },
    { name: "a", description: "elliptical_arc_relative", type: dedent`[
        rx: number,
        ry: number,
        angle: number,
        largeArcFlag: 0 | 1,
        sweepFlag:    0 | 1,
        x: number,
        y: number,
    ]` },
    { name: "Z", description: "closepath", type: `null | undefined` },
    { name: "z", description: "closepath", type: `null | undefined` },

]
