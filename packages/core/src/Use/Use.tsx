import type { UseProps } from "./Use.types"
import processProps from "./process-use-props"

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
const Use = (props: UseProps) => {

    const processedProps = processProps(props)

    return (
        // @ts-ignore: next-line
        <use
            {...processedProps}
        />
    )
}

export default Use
