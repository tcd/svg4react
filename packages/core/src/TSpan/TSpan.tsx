import type { TSpanProps } from "./TSpan.types"
import processProps from "./process-tspan-props"

/**
 * A wrapper for the [`<tspan>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/tspan) element.
 *
 * The SVG `<tspan>` element defines a subtext within a `<text>` element or another `<tspan>` element.
 *
 * It allows for adjustment of the style and/or position of that subtext as needed.
 */
const TSpan = (props: TSpanProps) => {

    const {
        children = undefined,
        addSpace = false,
        ...processedProps
    } = processProps(props)

    return (
        // @ts-ignore: next-line
        <tspan {...processedProps}>
            {children && children}
            {addSpace && <tspan fontSize="0">&nbsp;</tspan>}
        </tspan>
    )
}

export default TSpan
