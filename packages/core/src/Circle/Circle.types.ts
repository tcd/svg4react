import type { ISVGProps, CommonSVGAttributes } from "../utils"

/**
 * @see [MDN Web Docs - `<circle>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle)
 */
export type CircleAttributes = {
    /**
     * Shorthand for the x and y axis coordinates of the center of the circle.
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
     * The x-axis coordinate of the center of the circle.
     */
    cx?: number | string
    /**
     * The y-axis coordinate of the center of the circle.
     */
    cy?: number | string
    /**
     * The radius of the circle.
     *
     * A value lower or equal to zero disables rendering of the circle.
     */
    r: number | string
    /**
     * The total length for the circle's circumference, in user units.
     */
    pathLength?: number | string
}

/**
 * @see [MDN Web Docs - `<circle>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle)
 */
export type CircleProps =
    ISVGProps<SVGCircleElement>
    & CircleAttributes
    & CommonSVGAttributes
