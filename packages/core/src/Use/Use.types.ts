import type { SVGProps } from "react"
import type { SvgPresentationAttributes, Length } from "../utils"

/**
 * @public
 *
 * @see [MDN Web Docs - `<use>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use)
 */
type UseAttributes = {
    // /**
    //  * `id` of the element to *use*. No preceeding hash required.
    //  */
    // useId?: string
    /**
     * The URL to an element/fragment that needs to be duplicated.
     */
    href?: string
    /**
     * The x coordinate of the use element.
     *
     * @default 0
     */
    x?: Length
    /**
     * The y coordinate of the use element.
     *
     * @default 0
     */
    y?: Length
    /**
     * The width of the use element.
     *
     * @default 0
     */
    width?: Length
    /**
     * The height of the use element.
     *
     * @default 0
     */
    height?: Length
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

type Deprecated =
    | "xlinkHref"

/**
 * @public
 *
 * @see [MDN Web Docs - `<use>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use)
 */
export type UseProps =
    Omit<SVGProps<SVGUseElement>, keyof UseAttributes | Deprecated>
    & UseAttributes
