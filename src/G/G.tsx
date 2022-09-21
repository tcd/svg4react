import { forwardRef } from "react"
import type { SVGProps } from "react"

/**
 * @public
 *
 * A wrapper for the [`<g>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g) element.
 *
 * The `<g>` SVG element is a container used to group other SVG elements.
 *
 * Transformations applied to the `<g>` element are performed on its child elements, and its attributes are inherited by its children.
 * It can also group multiple elements to be referenced later with the [`<use>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use) element.
 */
const G = forwardRef<SVGGElement, SVGProps<SVGGElement>>(
    function G(props, ref) {
        return (
            <g
                ref={ref}
                {...props}
            />
        )
    },
)

export default G
