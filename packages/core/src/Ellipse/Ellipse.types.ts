import type { SVGProps } from "react"
import type { SvgPresentationAttributes } from "../utils"

/**
 * @see [MDN - `<ellipse>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/ellipse)
 */
type EllipseAttributes = {
    /**
     * The x and y axis coordinates of the center of the Ellipse.
     *
     * Will override `cx` and `cy`
     */
    coordinates?: [cx: number, cy: number]
    /**
     * The x-axis coordinate of the center of the ellipse.
     */
    cx?: number | string
    /**
     * The y-axis coordinate of the center of the ellipse.
     */
    cy?: number | string
    /**
     * The radius of the ellipse on the x axis.
     */
    rx: number | string
    /**
     * The radius of the ellipse on the y axis.
     */
    ry: number | string
    /**
     * This attribute lets specify the total length for the path, in user units.
     */
    pathLength: number | string
} & Pick<SvgPresentationAttributes,
    | "clipPath"
    | "clipRule"
    | "color"
    | "colorInterpolation"
    | "cursor"
    | "display"
    | "fill"
    | "fillOpacity"
    | "fillRule"
    | "filter"
    | "mask"
    | "opacity"
    | "pointerEvents"
    | "shapeRendering"
    | "stroke"
    | "strokeDasharray"
    | "strokeDashoffset"
    | "strokeLinecap"
    | "strokeLinejoin"
    | "strokeMiterlimit"
    | "strokeOpacity"
    | "strokeWidth"
    | "transform"
    | "vectorEffect"
    | "visibility"
>

/**
 * @see [MDN - `<ellipse>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/ellipse)
 */
export type EllipseProps =
    Omit<SVGProps<SVGEllipseElement>, keyof EllipseAttributes>
    & EllipseAttributes
