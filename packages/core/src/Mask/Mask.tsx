import type { MaskProps } from "./Mask.types"
import processProps from "./process-mask-props"

/**
 * A wrapper for the [`<mask>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/mask) element.
 *
 * The `<mask>` element defines an alpha mask for compositing the current object into the background.
 *
 * A mask is used/referenced using the `mask` property.
 */
const Mask = (props: MaskProps) => {

    const processedProps = processProps(props)

    return (
        // @ts-ignore: next-line
        <mask
            {...processedProps}
        />
    )
}

export default Mask
