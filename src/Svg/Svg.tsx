import { forwardRef } from "react"
import type { SvgProps } from "./Svg.types"

const defaultProps: Partial<SvgProps> = {
    xmlns: "http://www.w3.org/2000/svg",
    // width: "100px",
    // height: "100px",
    viewBox: "0 0 100 100",
}

/**
 * @public
 *
 * A wrapper for the [`<svg>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg) element.
 *
 * The `<svg>` element is a container that defines a new coordinate system and [viewport](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox).
 *
 * It is used as the outermost element of SVG documents, but it can also be used to embed an SVG fragment inside an SVG or HTML document.
 */
const Svg = forwardRef<SVGSVGElement, SvgProps>(
    function Svg(props, ref) {
        props = {
            ...defaultProps,
            ...props,
        }
        return (
            <svg
                ref={ref}
                {...props}
            />
        )
    },
)

export default Svg
