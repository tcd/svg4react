import type { Length } from "@types"

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/linearGradient
 */
export type LinearGradientAttributes = {
    /**
     * Defines the coordinate system for attributes `x1`, `x2`, `y1`, `y2`.
     *
     * @see [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/gradientUnits)
     *
     * @default "objectBoundingBox"
     */
    gradientUnits?: "userSpaceOnUse" | "objectBoundingBox"
    /**
     * This attribute provides additional [transformation](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform) to the gradient coordinate system.
     *
     * @see [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/gradientTransform)
     */
    gradientTransform?: string
    /**
     * This attribute defines a reference to another `<linearGradient>` element that will be used as a template.
     *
     * @see [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/href)
     */
    href?: string
    /**
     * This attribute indicates how the gradient behaves if it starts or ends inside the bounds of the shape containing the gradient.
     *
     * @see [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/spreadMethod)
     *
     * @default "pad"
     */
    spreadMethod?: "pad" | "reflect" | "repeat"
    /**
     * This attribute defines the x coordinate of the starting point of the vector gradient along which the linear gradient is drawn.
     *
     * @see [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/x1)
     *
     * @default "0%"
     */
    x1?: Length
    /**
     * This attribute defines the x coordinate of the ending point of the vector gradient along which the linear gradient is drawn.
     *
     * @see [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/x2)
     *
     * @default "100%"
     */
    x2?: Length
    /**
     * This attribute defines the y coordinate of the starting point of the vector gradient along which the linear gradient is drawn.
     *
     * @see [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/y1)
     *
     * @default "0%"
     */
    y1?: Length
    /**
     * This attribute defines the y coordinate of the ending point of the vector gradient along which the linear gradient is drawn.
     *
     * @see [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/y2)
     *
     * @default "0%"
     */
    y2?: Length
}
