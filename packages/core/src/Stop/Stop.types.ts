import type { SVGProps } from "react"
import type { Property } from "csstype"
import { SVGPresentationAttributes } from "../utils"

/**
 * @see [MDN Web Docs - `<stop>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop)
 */
export type StopAttributes = {
    /**
     * Defines where the gradient stop is placed along the gradient vector.
     *
     * @default 0
     */
    offset?: string | number
    /**
     * Defines the color of the gradient stop.
     *
     * @see [MDN Web Docs - `stop-color`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stop-color)
     *
     * @default "black"
     */
    stopColor?: string
    /**
     * Defines the opacity of the gradient stop.
     *
     * @see [MDN Web Docs - `stop-opacity`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stop-opacity)
     *
     * @default 1
     */
    stopOpacity?: number
    /**
     * Used to provide a potential indirect value (currentcolor) for
     * the `fill`, `stroke`, `stop-color`, `flood-color`, and `lighting-color` attributes.
     *
     * @see [MDN Web Docs - `color`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color)
     */
    color?: string // FIXME: use shared definition for color
    /**
     * Lets you control the visibility of graphical elements.
     *
     * @see [MDN Web Docs - `visibility`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/visibility)
     */
    visibility?: Property.Visibility
}

/**
 * @see [MDN Web Docs - `<stop>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop)
 */
export type StopProps =
    Omit<SVGProps<SVGStopElement>, keyof StopAttributes>
    & StopAttributes
    & Pick<SVGPresentationAttributes, "display">
