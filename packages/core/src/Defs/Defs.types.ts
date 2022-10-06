import type { SVGProps } from "react"
import type { CommonSvgPresentationAttributes } from "../utils"

/**
 * @public
 *
 * @see [MDN Web Docs - `<defs>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/defs)
 */
type DefsAttributes = {
    // defs?: SVGProps<SVGLinearGradientElement>[]
} & CommonSvgPresentationAttributes

/**
 * @public
 *
 * @see [MDN Web Docs - `<defs>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/defs)
 */
export type DefsProps =
    Omit<SVGProps<SVGDefsElement>, keyof DefsAttributes>
    & DefsAttributes
