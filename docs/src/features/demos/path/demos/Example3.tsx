import { Svg, Path } from "svg4react"

import { randomColor } from "@app/util"
import { LiveDemo } from "@app/features/live-demo"

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#using_d_as_a_css_property
 */
export const Example3 = (_props: unknown): JSX.Element => {

    const scope = { Svg, Path }

    return (
        <LiveDemo
            id="path-example-3"
            title="MoveTo"
            code={code}
            scope={scope}
        />
    )
}

// =============================================================================

const code = `
import { Svg, Path, PathProps } from "svg4react"

const pathProps: PathProps = {
    fill: "none",
    stroke: "${randomColor()}",
    commands: [
        ["M", [[ 10,10]]], ["h", [10]],
        ["m", [[  0,10]]], ["h", [10]],
        ["m", [[  0,10]]], ["h", [10]],
        ["M", [[ 40,20]]], ["h", [10]],
        ["m", [[  0,10]]], ["h", [10]],
        ["m", [[  0,10]]], ["h", [10]],
        ["m", [[  0,10]]], ["h", [10]],
        ["M", [[ 50,50]]], ["h", [10]],
        ["m", [[-20,10]]], ["h", [10]],
        ["m", [[-20,10]]], ["h", [10]],
        ["m", [[-20,10]]], ["h", [10]],
    ],
}

render(
    <Svg size="100%" viewBox="0 0 100 100">
        <Path {...pathProps} />
    </Svg>
)
`
