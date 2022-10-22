import type { FilterProps } from "./Filter.types"
import processFilterProps from "./process-filter-props"

/**
 * A wrapper for the [`<filter>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter) element.
 *
 * The `<filter>` SVG element defines a custom filter effect by grouping atomic filter primitives.
 *
 * It is never rendered itself, but must be used by the `filter` attribute on SVG elements, or the `filter CSS property` for SVG/HTML elements.
 */
const Filter = (props: FilterProps) => {

    const processedProps = processFilterProps(props)

    return (
        // @ts-ignore: next-line
        <filter
            {...processedProps}
        />
    )
}

export default Filter
