import type { SVGProps } from "react"
import type { StopProps } from "../Stop"
import type { CommonSvgPresentationAttributes } from "../utils"

/**
 * @see [MDN Web Docs - `<radialGradient>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/radialGradient)
 */
export type _RadialGradientAttributes = {
    /**
     * TODO: document
     */
    stops?: StopProps[]
    /**
     * Defines the radius of the end circle of the radial gradient.
     * The gradient will be drawn such that the 100% `<stop>` is mapped to the perimeter of the end circle.
     *
     * @defaultValue "50%"
     */
    r?: string
    /**
     * Defines the x coordinate of the end circle of the radial gradient.
     *
     * @defaultValue "50%"
     */
    cx?: string
    /**
     * Defines the y coordinate of the end circle of the radial gradient.
     *
     * @defaultValue "50%"
     */
    cy?: string
    /**
     * This attribute defines the radius of the start circle of the radial gradient.
     * The gradient will be drawn such that the 0% `<stop>` is mapped to the perimeter of the start circle.
     *
     * @defaultValue "0%"
     */
    ft?: string
    /**
     * Defines the x coordinate of the start circle of the radial gradient.
     */
    fx?: string
    /**
     * Defines the y coordinate of the start circle of the radial gradient.
     */
    fy?: string
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
     * This attribute indicates how the gradient behaves if it starts or ends inside the bounds of the shape containing the gradient.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/spreadMethod)
     *
     * @defaultValue "pad"
     */
    spreadMethod?: "pad" | "reflect" | "repeat"
    /**
     * This attribute defines a reference to another `<radialGradient>` element that will be used as a template.
     *
     * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/href)
     */
    href?: string
}

/**
 * @see [MDN Web Docs - `<radialGradient>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/radialGradient)
 */
export type RadialGradientAttributes = _RadialGradientAttributes & CommonSvgPresentationAttributes

/**
 * @see [MDN Web Docs - `<radialGradient>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/radialGradient)
 */
export type RadialGradientProps =
    Omit<SVGProps<SVGRadialGradientElement>, keyof RadialGradientAttributes>
    & RadialGradientAttributes
