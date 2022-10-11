import type { ISVGProps, SVGPresentationAttributes } from "../utils"

/**
 * @see [MDN Web Docs - `<g>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g)
 */
export type GProps =
    ISVGProps<SVGGElement>
    & SVGPresentationAttributes
