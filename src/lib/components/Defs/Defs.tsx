import { forwardRef } from "react"
import type { DefsProps } from "./Defs.types"

/**
 * @public
 *
 * A wrapper for the [`<defs>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/defs) element.
 *
 * The `<defs>` element is used to store graphical objects that will be used at a later time.
 *
 * Objects created inside a `<defs>` element are not rendered directly.
 *
 * To display them you have to reference them (with a [`<use>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use) element for example).
 */
const Defs = forwardRef<SVGDefsElement>(function Def(props: DefsProps, ref) {
    return (
        <defs
            ref={ref}
            {...props} >
        </defs>
    )
})

export default Defs
