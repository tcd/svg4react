import type { ISVGProps, CommonSVGPresentationAttributes } from "../utils"

export type _RectAttributes = {
    /**
     * Shorthand for the x and y axis coordinates of the center of the rect.
     *
     * @shorthand x
     * @shorthand y
     */
    points?: [x: number, y?: number]
    /**
     * Shorthand for the width and height of the rect.
     *
     * @shorthand width
     * @shorthand height
     */
    size?: [width: number, height?: number]
    /**
     * Shorthand for the horizontal and vertical corner radii of the rect.
     *
     * @shorthand rx
     * @shorthand ry
     */
    radius?: [rx: number, ry?: number]
}

/**
 * @see [MDN Web Docs - `<rect>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect)
 */
export type RectAttributes = _RectAttributes & {
    /**
     * The x coordinate of the rect.
     *
     * @default 0
     */
    x?: number | string
    /**
     * The y coordinate of the rect.
     *
     * @default 0
     */
    y?: number | string
    /**
     * The width of the rect.
     *
     * @default "auto"
     */
    width?: "auto" | number | string
    /**
     * The height of the rect.
     *
     * @default "auto"
     */
    height?: "auto" | number | string
    /**
     * The horizontal corner radius of the rect.
     *
     * Defaults to `ry` ("auto") if it is specified.
     *
     * @default "auto"
     */
    rx?: "auto" | number | string
    /**
     * The vertical corner radius of the rect.
     *
     * Defaults to `rx` ("auto") if it is specified.
     *
     * @default "auto"
     */
    ry?: "auto" | number | string
    /**
     * The total length of the rectangle's perimeter, in user units.
     *
     * @default "none"
     */
    pathLength?: number
}

/**
 * @see [MDN Web Docs - `<rect>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect)
 */
export type RectProps =
    ISVGProps<SVGRectElement>
    & RectAttributes
    & CommonSVGPresentationAttributes
