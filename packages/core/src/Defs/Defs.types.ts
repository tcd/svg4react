import type { ISVGProps, CommonSVGAttributes } from "../utils"

/**
 * @see [MDN Web Docs - `<defs>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/defs)
 */
export type DefsAttributes = {
    // defs?: SVGProps<SVGLinearGradientElement>[]
}

/**
 * @see [MDN Web Docs - `<defs>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/defs)
 */
export type DefsProps =
    ISVGProps<SVGDefsElement>
    & DefsAttributes
    & CommonSVGAttributes
