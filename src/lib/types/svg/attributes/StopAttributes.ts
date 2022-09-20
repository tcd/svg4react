import type { Property } from "csstype"

/**
 * @public
 *
 * @see [MDN `<stop>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop)
 */
export type StopAttributes = {
    /**
     * Defines where the gradient stop is placed along the gradient vector.
     *
     * @defaultValue 0
     */
    offset?: string | number
    /**
     * The color attribute is used to provide a potential indirect value (currentcolor) for
     * the `fill`, `stroke`, `stop-color`, `flood-color`, and `lighting-color` attributes.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color
     */
    color?: string
    /**
     * lets you control the rendering of graphical or container elements.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/display
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/display
     *
     * @defaultValue "inline"
     */
    display?: Property.Display
    /**
     * Defines the color of the gradient stop.
     * It can be used as a CSS property.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stop-color
     *
     * @defaultValue "black"
     */
    stopColor?: string
    /**
     * Defines the opacity of the gradient stop.
     * It can be used as a CSS property.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stop-opacity
     *
     * @defaultValue 1
     */
    stopOpacity?: number
    /**
     * Lets you control the visibility of graphical elements.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/visibility
     */
    visibility?: Property.Visibility
}
