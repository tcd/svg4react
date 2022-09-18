export const buildD = () => {

}

/**
 * @see [MDN docs source code](https://github.com/mdn/content/blob/main/files/en-us/web/svg/attribute/d/index.md?plain=1)
 */
export class DBuilder {

    public d: string


    // =========================================================================
    // [MoveTo path commands](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#moveto_path_commands)
    //
    // MoveTo instructions can be thought of as picking up the drawing
    // instrument, and setting it down somewhere else; in other words,
    // moving the current point `(P<sub>o</sub>; {x<sub>o</sub>, y<sub>o</sub>})`.
    // There is no line drawn between `P<sub>o</sub>` and the new current point
    // `(P<sub>n</sub>; {x<sub>n</sub>, y<sub>n</sub>})`.
    // =========================================================================

    /**
     * Move the current point to the coordinate `x`, `y`.
     *
     * Any subsequent coordinate pair(s) are interpreted as parameter(s) for implicit absolute LineTo (`L`) command(s) (see below).
     */
    public M(x: number, y: number): void { }

    /**
     * Move the current point by shifting the last known position of the path by `dx` along the x-axis and by `dy` along the y-axis.
     *
     * Any subsequent coordinate pair(s) are interpreted as parameter(s) for implicit relative LineTo (`l`) command(s) (see below).
     */
    public m(dx: number, dy: number): void { }

    // =========================================================================
    // [LineTo path commands](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#lineto_path_commands)
    // =========================================================================

    /**
     * Draw a line from the current point to the end point specified by `x`, `y`.
     *
     * Any subsequent coordinate pair(s) are interpreted as parameter(s) for implicit absolute LineTo (`L`) command(s).
     */
    public L(x: number, y: number): void { }

    /**
     * Draw a line from the current point to the end point, which is the current
     * point shifted by `dx` along the x-axis and `dy` along the y-axis.
     *
     * Any subsequent coordinate pair(s) are interpreted as parameter(s) for implicit relative LineTo (`l`) command(s) (see below).
     */
    public l(dx: number, dy: number): void { }

    /**
     * Draw a horizontal line from the current point to the end point, which is specified by the `x` parameter and the current point's `y` coordinate.
     *
     * Any subsequent value(s) are interpreted as parameter(s) for implicit absolute horizontal LineTo (`H`) command(s).
     */
    public H(x: number): void { }

    /**
     * Draw a horizontal line from the current point to the end point, which is specified by the current point shifted by `dx` along the x-axis and the current point's `y` coordinate.
     *
     * Any subsequent value(s) are interpreted as parameter(s) for implicit relative horizontal LineTo (`h`) command(s).
     */
    public h(dx: number): void { }

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
    public V(y: number): void { }

    /**
     * Draw a vertical line from the current point to the end point, which is specified by the current point shifted by `dy` along the y-axis and the current point's `x` coordinate.
     *
     * Any subsequent value(s) are interpreted as parameter(s) for implicit relative vertical LineTo (`v`) command(s).
     */
    public v(dy: number): void { }
}
