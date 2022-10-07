import type { SVGProps } from "react"
import type { CommonSvgPresentationAttributes } from "../../utils"

export type _FilterAttributes = {

}

export type FilterAttributes = _FilterAttributes & CommonSvgPresentationAttributes

/**
 * @see [MDN - `<filter>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter)
 */
export type FilterProps =
    Omit<SVGProps<SVGFilterElement>, keyof FilterAttributes>
    & FilterAttributes
