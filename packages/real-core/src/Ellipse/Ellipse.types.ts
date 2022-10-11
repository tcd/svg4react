import type { ISVGProps, CommonSVGPresentationAttributes } from "../utils"

export type EllipseAttributes = {
    /**
     * The x and y axis coordinates of the center of the Ellipse (`cx` and `cy`).
     *
     * If only one value is provided, it will be passed to both `cx` and `cy`.
     *
     * **Will** override `cx` and `cy`.
     *
     * @shorthand cx
     * @shorthand cy
     */
    coordinates?: [cx: number, cy?: number]
    /**
     * The x-axis coordinate of the center of the ellipse.
     */
    cx?: number | string
    /**
     * The y-axis coordinate of the center of the ellipse.
     */
    cy?: number | string
    /**
     * The radius of the ellipse on the x and y axis (`rx` and `ry).
     *
     * If only one value is provided, it will be passed to both `rx` and `ry`.
     *
     * **Will** override `rx` and `ry`.
     *
     * @shorthand rx
     * @shorthand ry
     */
    radius?: [rx: number, ry?: number]
    /**
     * The radius of the ellipse on the x axis.
     */
    rx: number | string
    /**
     * The radius of the ellipse on the y axis.
     */
    ry: number | string
    /**
     * Specifies the total length for the path, in user units.
     *
     * @see [MDN Web Docs - `pathLength`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pathLength)
     */
    pathLength: number | string // FIXME: use `SVGPresentationAttributes.pathLength`
}

/**
 * @see [MDN - `<ellipse>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/ellipse#attributes)
 */
export type EllipseProps =
    ISVGProps<SVGEllipseElement>
    & EllipseAttributes
    & CommonSVGPresentationAttributes
