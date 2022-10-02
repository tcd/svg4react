import { forwardRef } from "react"
import type { UseProps } from "./Use.types"

/**
 * A wrapper for the [`<use>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use) element.
 *
 * The `<use>` element takes nodes from within the SVG document, and duplicates them somewhere else.
 *
 * Most attributes on `use` do not override those already on the element referenced by `use`.
 *
 * Only the attributes `x`, `y`, `width`, `height` and `href` on the use element will override those set on the referenced element.
 *
 * However, any other attributes not set on the referenced element will be applied to the `use` element.
 */
const Use = forwardRef<SVGUseElement, UseProps>(function Use(props: UseProps, ref) {

    const {
        // useId = "",
        ...otherProps
    } = props

    // const href = `url(#${useId})`

    return (
        // @ts-ignore: next-line
        <use
            ref={ref}
            {...otherProps}
        />
    )
})

export default Use
