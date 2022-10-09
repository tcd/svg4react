import type { SVGProps } from "react"
import type { CommonSVGPresentationAttributes } from "../utils"

export type LineCoordinates = [
    /**
     * Defines the x-axis coordinate of the line starting point.
     *
     * @default 0
     */
    x1: number | string,
    /**
     * Defines the y-axis coordinate of the line starting point.
     *
     * @default 0
     */
    y1: number | string,
    /**
     * Defines the x-axis coordinate of the line ending point.
     *
     * @default 0
     */
    x2: number | string,
    /**
     * Defines the y-axis coordinate of the line ending point.
     *
     * @default 0
     */
    y2: number | string,
]

/**
 * @public
 *
 * @see [MDN Web Docs - `<line>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line)
 */
export type _LineAttributes = {
    /**
     * Values, in order, for:
     *
     * - `x1` - x-axis start
     * - `y1` - y-axis start
     * - `x2` - x-axis end
     * - `y2` - y-axis end
     */
    coordinates: LineCoordinates
    // /**
    //  * Defines the x-axis coordinate of the line starting point.
    //  *
    //  * @default 0
    //  */
    // x1: number | string
    // /**
    //  * Defines the x-axis coordinate of the line ending point.
    //  *
    //  * @default 0
    //  */
    // x2: number | string
    // /**
    //  * Defines the y-axis coordinate of the line starting point.
    //  *
    //  * @default 0
    //  */
    // y1: number | string
    // /**
    //  * Defines the y-axis coordinate of the line ending point.
    //  *
    //  * @default 0
    //  */
    // y2: number | string
    /**
     * Defines the total path length in user units.
     *
     * @default "none"
     */
    pathLength?: number
}

/**
 * @public
 *
 * @see [MDN Web Docs - `<line>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line)
 */
export type LineAttributes = _LineAttributes & CommonSVGPresentationAttributes

/**
 * @public
 *
 * @see [MDN Web Docs - `<line>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line)
 */
export type LineProps =
    Omit<SVGProps<SVGLineElement>, keyof LineAttributes>
    & LineAttributes
