import { ISVGProps } from "../utils"

export type MatrixRow    = [number, number, number, number, number]
export type MatrixValues = [MatrixRow, MatrixRow, MatrixRow, MatrixRow]

export type FeColorMatrixAttributes = {
    values: MatrixValues
}

/**
 * @see [MDN - `<feColorMatrix>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix)
 */
export type FeColorMatrixProps =
    ISVGProps<SVGFEDistantLightElement>
    & FeColorMatrixAttributes
