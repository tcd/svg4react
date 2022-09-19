import type { Property } from "csstype"
import type { Color, Length } from "@types"

/**
 * @see [MDN `<stop>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop)
 */
export type StopAttributes = {
    /**
     * Defines where the gradient stop is placed along the gradient vector.
     *
     * @default 0
     */
    offset?: Length
    /**
     * The color attribute is used to provide a potential indirect value (currentcolor) for
     * the `fill`, `stroke`, `stop-color`, `flood-color`, and `lighting-color` attributes.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color
     */
    color?: Color
    /**
     * lets you control the rendering of graphical or container elements.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/display
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/display
     *
     * @default "inline"
     */
    display?: Property.Display
    /**
     * Defines the color of the gradient stop.
     * It can be used as a CSS property.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stop-color
     *
     * @default "black"
     */
    stopColor?: Color
    /**
     * Defines the opacity of the gradient stop.
     * It can be used as a CSS property.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stop-opacity
     *
     * @default 1
     */
    stopOpacity?: number
    /**
     * Lets you control the visibility of graphical elements.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/visibility
     */
    visibility?: Property.Visibility
}
