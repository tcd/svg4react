import { forwardRef } from "react"
import type { SvgProps } from "./Svg.types"
import processProps from "./process-svg-props"

/**
 * A wrapper for the [`<svg>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg) element.
 *
 * The `<svg>` element is a container that defines a new coordinate system and [viewport](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox).
 *
 * It is used as the outermost element of SVG documents, but it can also be used to embed an SVG fragment inside an SVG or HTML document.
 *
 * @see [SVG2](https://svgwg.org/svg2-draft/struct.html#NewDocument)
 */
const Svg = forwardRef<SVGSVGElement, SvgProps>(function Svg(props, ref) {

    const processedProps = processProps(props)

    return (
    // @ts-ignore: next-line
        <svg
            ref={ref}
            {...processedProps}
        />
    )
})

export default Svg
