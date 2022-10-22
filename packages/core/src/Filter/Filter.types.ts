import type { ISVGProps, CommonSVGAttributes, Length } from "../utils"

export type FilterAttributes = {
    id: string
    /**
     * Defines the coordinate system for the attributes `x`, `y`, `width`, and `height`.
     *
     * @default "objectBoundingBox"
     */
    filterUnits?: "userSpaceOnUse" | "objectBoundingBox"
    /**
     * Specifies the coordinate system for the various length values within the filter primitives and for the attributes that define the filter primitive subregion.
     *
     * @default "userSpaceOnUse"
     */
    primitiveUnits?: "userSpaceOnUse" | "objectBoundingBox"

    /**
     * @shorthand x
     * @shorthand y
     */
    coords?: [x: Length, y?: Length]

    /**
     * @shorthand width
     * @shorthand height
     */
    size?: [width: Length, height?: Length]

    x?: Length
    y?: Length
    width?: Length
    height?: Length
}

/**
 * @see [MDN - `<filter>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter)
 */
export type FilterProps =
    ISVGProps<SVGFilterElement>
    & FilterAttributes
    & CommonSVGAttributes
