import type { ISVGProps, CommonSVGPresentationAttributes } from "../utils"

/**
 * @see [MDN Web Docs - `<clipPath>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/clipPath)
 */
export type ClipPathAttributes = {
    /**
     * Defines the coordinate system for the contents of the `<ClipPath>` element.
     *
     * @default "userSpaceOnUse"
     * @animatable true
     * @cssProperty false
     */
    clipPathUnits?: "userSpaceOnUse" | "objectBoundingBox"
}

/**
 * @see [MDN Web Docs - `<clipPath>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/clipPath)
 */
export type ClipPathProps =
    ISVGProps<SVGClipPathElement>
    & ClipPathAttributes
    & CommonSVGPresentationAttributes
