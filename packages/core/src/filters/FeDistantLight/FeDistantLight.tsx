import type { FeDistantLightProps } from "./FeDistantLight.types"

/**
 * A wrapper for the [`<feDistantLight>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDistantLight) element.
 *
 * The `<feDistantLight>` filter primitive defines a distant light source that can be used within a lighting filter primitive: `<feDiffuseLighting>` or `<feSpecularLighting>`.
 */
const FeDistantLight = (props: FeDistantLightProps) => {

    const {
        ...otherProps
    } = props

    return (
        // @ts-ignore: next-line
        <feDistantLight
            {...otherProps}
        />
    )
}

export default FeDistantLight
