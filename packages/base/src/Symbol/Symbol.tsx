import type { SymbolProps } from "./Symbol.types"
import processProps from "./process-symbol-props"

/**
 * A wrapper for the [`<symbol>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/symbol) element.
 *
 * The `<symbol>` element is used to define graphical template objects which can be instantiated by a `<use>` element.
 */
const Symbol = (props: SymbolProps) => {

    const processedProps = processProps(props)

    return (
        // @ts-ignore: next-line
        <symbol
            {...processedProps}
        />
    )
}

export default Symbol
