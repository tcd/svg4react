import type { SVGProps } from "react"
import { forwardRef } from "react"
// import { Box } from "@mui/material"
// import type { BoxProps } from "@mui/material"

/**
 * @public
 *
 * A wrapper for the [`<svg>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg) element.
 *
 * The `<svg>` element is a container that defines a new coordinate system and [viewport](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox).
 *
 * It is used as the outermost element of SVG documents, but it can also be used to embed an SVG fragment inside an SVG or HTML document.
 */
const Svg = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
    function Svg(props, ref) {
        return (
            <svg
                ref={ref}
                {...props}
            />
        )
    },
)

export default Svg
