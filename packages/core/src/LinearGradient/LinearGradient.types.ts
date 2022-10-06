import type { SVGProps } from "react"
import type { StopProps } from "../Stop"
import type { CommonSvgPresentationAttributes } from "../utils"

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/linearGradient
 */
export type _LinearGradientAttributes = {
    /**
     * TODO: document
     */
    stops?: StopProps[]
    /**
     * Defines the coordinate system for attributes `x1`, `x2`, `y1`, `y2`.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/gradientUnits)
     *
     * @defaultValue "objectBoundingBox"
     */
    gradientUnits?: "userSpaceOnUse" | "objectBoundingBox"
    /**
     * This attribute provides additional [transformation](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform) to the gradient coordinate system.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/gradientTransform)
     */
    gradientTransform: string
    /**
     * This attribute defines a reference to another `<linearGradient>` element that will be used as a template.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/href)
     */
    href?: string
    /**
     * This attribute indicates how the gradient behaves if it starts or ends inside the bounds of the shape containing the gradient.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/spreadMethod)
     *
     * @defaultValue "pad"
     */
    spreadMethod?: "pad" | "reflect" | "repeat"
    /**
     * This attribute defines the x coordinate of the starting point of the vector gradient along which the linear gradient is drawn.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/x1)
     *
     * @defaultValue "0%"
     */
    x1?: string | number
    /**
     * This attribute defines the x coordinate of the ending point of the vector gradient along which the linear gradient is drawn.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/x2)
     *
     * @defaultValue "100%"
     */
    x2?: string | number
    /**
     * This attribute defines the y coordinate of the starting point of the vector gradient along which the linear gradient is drawn.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/y1)
     *
     * @defaultValue "0%"
     */
    y1?: string | number
    /**
     * This attribute defines the y coordinate of the ending point of the vector gradient along which the linear gradient is drawn.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/y2)
     *
     * @defaultValue "0%"
     */
    y2?: string | number
}

export type LinearGradientAttributes = _LinearGradientAttributes & CommonSvgPresentationAttributes

/**
 * @see [MDN Web Docs - `<linearGradient>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/linearGradient)
 */
export type LinearGradientProps =
    Omit<SVGProps<SVGLinearGradientElement>, keyof LinearGradientAttributes>
    & LinearGradientAttributes
