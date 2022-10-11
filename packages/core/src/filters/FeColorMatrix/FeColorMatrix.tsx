import type { FeColorMatrixProps } from "./FeColorMatrix.types"
import processProps from "./process-props"

/**
 * A wrapper for the [`<feColorMatrix>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix) element.
 *
 * The `<feColorMatrix>` SVG filter element changes colors based on a transformation matrix.
 *
 * Every pixel's color value `[R,G,B,A]` is [matrix multiplied](https://en.wikipedia.org/wiki/Matrix_multiplication) by a 5 by 5 color matrix to create new color `[R',G',B',A']`.
 */
const FeColorMatrix = (props: FeColorMatrixProps) => {

    const processedProps = processProps(props)

    return (
        // @ts-ignore: next-line
        <feColorMatrix {...processedProps} />
    )
}

export default FeColorMatrix
