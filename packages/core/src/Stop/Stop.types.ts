import type { SVGProps } from "react"
import type { Property } from "csstype"

/**
 * @see [MDN Web Docs - `<stop>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop)
 */
export type StopAttributes = {
    /**
     * Defines where the gradient stop is placed along the gradient vector.
     *
     * @defaultValue 0
     */
    offset?: string | number
    /**
     * Defines the color of the gradient stop.
     * It can be used as a CSS property.
     *
     * @see [MDN Web Docs - `stop-color`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stop-color)
     *
     * @defaultValue "black"
     */
    stopColor?: string
    /**
     * Defines the opacity of the gradient stop.
     * It can be used as a CSS property.
     *
     * @see [MDN Web Docs - `stop-opacity`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stop-opacity)
     *
     * @defaultValue 1
     */
    stopOpacity?: number
    /**
     * Used to provide a potential indirect value (currentcolor) for
     * the `fill`, `stroke`, `stop-color`, `flood-color`, and `lighting-color` attributes.
     *
     * @see [MDN Web Docs - `color`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color)
     */
    color?: string
    /**
     * Lets you control the rendering of graphical or container elements.
     *
     * @see [MDN Web Docs - `display` (SVG)](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/display)
     * @see [MDN Web Docs - `display` (CSS)](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
     *
     * @defaultValue "inline"
     */
    display?: Property.Display
    /**
     * Lets you control the visibility of graphical elements.
     *
     * @see [MDN Web Docs - `visibility`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/visibility)
     */
    visibility?: Property.Visibility
}

/**
 * @public
 */
export type StopProps =
    Omit<SVGProps<SVGStopElement>, keyof StopAttributes>
    & StopAttributes
