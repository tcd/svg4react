import type { SVGProps } from "react"
import type { CommonSvgPresentationAttributes } from "../../utils"

export type _FilterAttributes = {
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
}

export type FilterAttributes = _FilterAttributes & CommonSvgPresentationAttributes

/**
 * @see [MDN - `<filter>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter)
 */
export type FilterProps =
    Omit<SVGProps<SVGFilterElement>, keyof FilterAttributes>
    & FilterAttributes
