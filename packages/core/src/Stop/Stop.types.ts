import { ISVGProps, SVGAttributes } from "../utils"

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
     * @default "black"
     * @see [MDN Web Docs - `stop-color`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stop-color)
     */
    stopColor?: string
    /**
     * Defines the opacity of the gradient stop.
     *
     * @default 1
     * @see [MDN Web Docs - `stop-opacity`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stop-opacity)
     */
    stopOpacity?: string | number
}

/**
 * @see [MDN Web Docs - `<stop>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop)
 */
export type StopProps =
    ISVGProps<SVGStopElement>
    & StopAttributes
    & Pick<SVGAttributes, "display" | "visibility">
