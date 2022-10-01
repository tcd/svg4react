import type { SVGProps } from "react"
import type { SvgPresentationAttributes } from "../utils"

/**
 * @public
 *
 * @see [MDN Web Docs - `<defs>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/defs)
 */
type DefsAttributes = {
    // defs?: SVGProps<SVGLinearGradientElement>[]
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
 * @public
 *
 * @see [MDN Web Docs - `<defs>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/defs)
 */
export type DefsProps =
    Omit<SVGProps<SVGDefsElement>, keyof DefsAttributes>
    & DefsAttributes
