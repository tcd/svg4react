import { forwardRef } from "react"
import type { DefsProps } from "./Defs.types"

/**
 * A wrapper for the [`<defs>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/defs) element.
 *
 * The `<defs>` element is used to store graphical objects that will be used at a later time.
 *
 * Objects created inside a `<defs>` element are not rendered directly.
 *
 * To display them you have to reference them (with a [`<use>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use) element for example).
 */
const Defs = forwardRef<SVGDefsElement, DefsProps>(function Defs(props: DefsProps, ref) {
    return (
        // @ts-ignore: next-line
        <defs
            ref={ref}
            {...props}
        />
    )
})

export default Defs
