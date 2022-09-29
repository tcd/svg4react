import { forwardRef } from "react"
import type { SvgProps } from "./Svg.types"

const defaultProps: Partial<SvgProps> = {
    // @ts-ignore: next-line
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    // @ts-ignore: next-line
    xmlns: "http://www.w3.org/2000/svg",
}

/**
 * A wrapper for the [`<svg>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg) element.
 *
 * The `<svg>` element is a container that defines a new coordinate system and [viewport](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox).
 *
 * It is used as the outermost element of SVG documents, but it can also be used to embed an SVG fragment inside an SVG or HTML document.
 */
const Svg = forwardRef<SVGSVGElement, SvgProps>(
    function Svg(props, ref) {

        const {
            size = null,
            vb = [],
            ...otherProps
        } = {
            ...defaultProps,
            ...props,
        }

        if (!otherProps.viewBox) {
            if (vb.length === 1) { otherProps.viewBox = `0 0 ${vb[0]} ${vb[0]}` }
            if (vb.length === 2) { otherProps.viewBox = `0 0 ${vb[0]} ${vb[1]}` }
        }

        if (size) {
            otherProps.width  = otherProps?.width ?? size
            otherProps.height = otherProps.height ?? size
        }

        return (
            // @ts-ignore: next-line
            <svg
                ref={ref}
                {...otherProps}
            />
        )
    },
)

export default Svg
