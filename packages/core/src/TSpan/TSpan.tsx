import type { TSpanProps } from "./TSpan.types"
import processTSpanProps from "./process-tspan-props"
import HiddenSpace from "./HiddenSpace"

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
    } = processTSpanProps(props)

    return (
        // @ts-ignore: next-line
        <tspan {...processedProps}>
            {children && children}
            {addSpace && <HiddenSpace />}
        </tspan>
    )
}

export default TSpan
