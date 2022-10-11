import type { ISVGProps, CommonSVGPresentationAttributes } from "../utils"

/**
 * @see [MDN Web Docs - `<mask>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/mask)
 */
export type MaskAttributes = {
    /**
     * Shorthand for the x and y coordinates of the top-left corner of the masking area.
     *
     * If only one value is provided, it will be passed to both `x` and `y`.
     *
     * @shorthand x
     * @shorthand y
     * @default ["-10%"]
     */
    coordinates?: [cx: number | string, cy?: number | string]
    /**
     * Shorthand for the width & height of the mask.
     *
     * If only one value is provided, it will be passed to both `width` and `height`.
     *
     * @shorthand width
     * @shorthand height
     * @default ["120%"]
     */
    size?: [width: number | string, height?: number | string]
    /**
     * Defines the coordinate system for the contents of the mask.
     *
     * @default "userSpaceOnUse"
     * @animatable true
     */
    maskContentUnits?: "userSpaceOnUse" | "objectBoundingBox"
    /**
     * Defines the coordinate system for attributes x, y, width and height on the mask.
     *
     * @default "objectBoundingBox"
     * @animatable
     */
    maskUnits?: "userSpaceOnUse" | "objectBoundingBox"
}

/**
 * @see [MDN Web Docs - `<mask>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/mask)
 */
export type MaskProps =
    ISVGProps<SVGMaskElement>
    & MaskAttributes
    & CommonSVGPresentationAttributes
