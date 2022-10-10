import type { MPathProps } from "./MPath.types"
import processMPathProps from "./process-props"

/**
 * A wrapper for the [`<mpath>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/mpath) element.
 *
 * The `<mpath>` sub-element for the <animateMotion> element provides the ability to reference an external `<path>` element as the definition of a motion path.
 */
const MPath = (props: MPathProps) => {

    const processedProps = processMPathProps(props)

    return (
        // @ts-ignore: next-line
        <mpath
            {...processedProps}
        />
    )
}

export default MPath
