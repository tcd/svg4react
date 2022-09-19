import type { SVGProps } from "react"

import { Stop } from "./Stop"
import type { StopProps } from "./Stop"

import type { Length } from "@src/lib/types"

/**
 * All properties aside from `id` and `stops` & `className` are animatable.
 */
export type LinearGradientProps = SVGProps<SVGLinearGradientElement> & {
    id: string
    className?: string
    stops?: StopProps[]
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

const _exampleProps: LinearGradientProps = {
    id: "example",
}

/**
 * ## Reference
 *
 * - [MDN `<stop>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop)
 */
export const LinearGradient = (props: LinearGradientProps): JSX.Element => {
    const {
        stops,
        ...otherProps
    } = props
    return (
        <linearGradient {...otherProps}>
            {stops.map((stop, index) => <Stop key={index} {...stop} />)}
        </linearGradient>
    )
}


/**
 * @see [MDN - SVG Presentation Attributes](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Presentation)
 */
export const LinearGradientAttributes = {
    clipPath:           "clip-path",
    clipRule:           "clip-rule",
    color:              "color",
    colorInterpolation: "color-interpolation",
    colorRendering:     "color-rendering",
    cursor:             "cursor",
    display:            "display",
    fill:               "fill",
    fillOpacity:        "fill-opacity",
    fillRule:           "fill-rule",
    filter:             "filter",
    mask:               "mask",
    opacity:            "opacity",
    pointerEvents:      "pointer-events",
    shapeRendering:     "shape-rendering",
    stroke:             "stroke",
    strokeDasharray:    "stroke-dasharray",
    strokeDashoffset:   "stroke-dashoffset",
    strokeLinecap:      "stroke-linecap",
    strokeLinejoin:     "stroke-linejoin",
    strokeMiterlimit:   "stroke-miterlimit",
    strokeOpacity:      "stroke-opacity",
    strokeWidth:        "stroke-width",
    transform:          "transform",
    vectorEffect:       "vector-effect",
    visibility:         "visibility",
} as const

