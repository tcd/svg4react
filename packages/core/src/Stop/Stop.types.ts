import { ISVGProps, SVGPresentationAttributes } from "../utils"

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
}

/**
 * @see [MDN Web Docs - `<stop>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop)
 */
export type StopProps =
    ISVGProps<SVGStopElement>
    & StopAttributes
    & Pick<SVGPresentationAttributes, "display" | "visibility">
