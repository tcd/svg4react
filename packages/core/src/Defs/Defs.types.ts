import type { SVGProps } from "react"
import type { CommonSVGPresentationAttributes } from "../utils"

/**
 * @public
 *
 * @see [MDN Web Docs - `<defs>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/defs)
 */
type DefsAttributes = {
    // defs?: SVGProps<SVGLinearGradientElement>[]
} & CommonSVGPresentationAttributes

/**
 * @public
 *
 * @see [MDN Web Docs - `<defs>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/defs)
 */
export type DefsProps =
    Omit<SVGProps<SVGDefsElement>, keyof DefsAttributes>
    & DefsAttributes
