import type { PatternProps } from "./Pattern.types"
import processProps from "./process-pattern-props"

/**
 * A wrapper for the [`<pattern>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/pattern) element.
 *
 * The `<pattern>` element defines a graphics object which can be redrawn at repeated x- and y-coordinate intervals ("tiled") to cover an area.
 *
 * The `<pattern>` is referenced by the `fill` and/or `stroke` attributes on other [graphics elements](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes) to fill or stroke those elements with the referenced pattern.
 */
const Pattern = (props: PatternProps) => {

    const processedProps = processProps(props)

    return (
        // @ts-ignore: next-line
        <pattern
            {...processedProps}
        />
    )
}

export default Pattern
