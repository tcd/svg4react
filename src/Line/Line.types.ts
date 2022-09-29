import type { SVGProps } from "react"
import type { SvgPresentationAttributes } from "../utils"

type LineCoordinates = [
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
 * @see [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line)
 */
type LineAttributes = {
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
} & Pick<SvgPresentationAttributes,
    | "clipPath"
    | "clipRule"
    | "color"
    | "colorInterpolation"
    | "cursor"
    | "display"
    | "fill"
    | "fillOpacity"
    | "fillRule"
    | "filter"
    | "mask"
    | "opacity"
    | "pointerEvents"
    | "shapeRendering"
    | "stroke"
    | "strokeDasharray"
    | "strokeDashoffset"
    | "strokeLinecap"
    | "strokeLinejoin"
    | "strokeMiterlimit"
    | "strokeOpacity"
    | "strokeWidth"
    | "transform"
    | "vectorEffect"
    | "visibility"
>

/**
 * @public
 */
export type LineProps =
    Omit<SVGProps<SVGLineElement>, keyof LineAttributes>
    & LineAttributes

