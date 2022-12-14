import type { StopProps } from "../Stop"
import type { ISVGProps, CommonSVGAttributes } from "../utils"

export type LinearGradientCoords = [
    x1: number | string,
    y1: number | string,
    x2: number | string,
    y2: number | string,
]

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/linearGradient
 */
export type _LinearGradientAttributes = {
    /**
     * TODO: document
     */
    stops?: StopProps[]
    /**
     * @shorthand x1
     * @shorthand y1
     * @shorthand x2
     * @shorthand y2
     */
    coordinates?: LinearGradientCoords
    /**
     * Defines the coordinate system for attributes `x1`, `y1`, `x2`, `y2`.
     *
     * @default "objectBoundingBox"
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/gradientUnits)
     */
    gradientUnits?: "userSpaceOnUse" | "objectBoundingBox"
    /**
     * This attribute provides additional [transformation](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform) to the gradient coordinate system.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/gradientTransform)
     */
    gradientTransform?: string
    /**
     * This attribute defines a reference to another `<linearGradient>` element that will be used as a template.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/href)
     */
    href?: string
    /**
     * This attribute indicates how the gradient behaves if it starts or ends inside the bounds of the shape containing the gradient.
     *
     * @default "pad"
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/spreadMethod)
     */
    spreadMethod?: "pad" | "reflect" | "repeat"
    /**
     * This attribute defines the x coordinate of the starting point of the vector gradient along which the linear gradient is drawn.
     *
     * @default "0%"
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/x1)
     */
    x1?: string | number
    /**
     * This attribute defines the x coordinate of the ending point of the vector gradient along which the linear gradient is drawn.
     *
     * @default "100%"
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/x2)
     */
    x2?: string | number
    /**
     * This attribute defines the y coordinate of the starting point of the vector gradient along which the linear gradient is drawn.
     *
     * @default "0%"
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/y1)
     */
    y1?: string | number
    /**
     * This attribute defines the y coordinate of the ending point of the vector gradient along which the linear gradient is drawn.
     *
     * @default "0%"
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/y2)
     */
    y2?: string | number
}

export type LinearGradientAttributes = _LinearGradientAttributes & CommonSVGAttributes

/**
 * @see [MDN Web Docs - `<linearGradient>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/linearGradient)
 */
export type LinearGradientProps =
    ISVGProps<SVGLinearGradientElement>
    & LinearGradientAttributes
    & CommonSVGAttributes
