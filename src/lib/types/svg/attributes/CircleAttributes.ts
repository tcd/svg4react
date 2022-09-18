import type { Length } from "@types"

/**
 *
 * @see [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle)
 */
export interface CircleAttributes {
    /**
     * The x-axis coordinate of the center of the circle.
     */
    cx: Length
    /**
     * The y-axis coordinate of the center of the circle.
     */
    cy: Length
    /**
     * The radius of the circle.
     *
     * A value lower or equal to zero disables rendering of the circle.
     */
    r: Length
}

// clipPath
// clipRule
// color
// colorInterpolation
// cursor
// display
// fill
// fillOpacity
// fillRule
// filter
// mask
// opacity
// pointerEvents
// shapeRendering
// stroke
// strokeDasharray
// strokeDashoffset
// strokeLinecap
// strokeLinejoin
// strokeMiterlimit
// strokeOpacity
// strokeWidth
// transform
// vectorEffect
// visibility
