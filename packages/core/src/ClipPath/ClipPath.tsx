import type { ClipPathProps } from "./ClipPath.types"

/**
 * A wrapper for the [`<clipPath>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/clipPath) element.
 *
 * The `<clipPath>` SVG element defines a clipping path, to be used by the `clipPath` property.
 *
 * A clipping path restricts the region to which paint can be applied.
 * Conceptually, parts of the drawing that lie outside of the region bounded by the clipping path are not drawn.
 */
const ClipPath = (props: ClipPathProps) => {

    return (
        // @ts-ignore: next-line
        <clipPath
            {...props}
        />
    )
}

export default ClipPath
