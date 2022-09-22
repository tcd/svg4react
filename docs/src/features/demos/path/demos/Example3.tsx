import { Svg, Path } from "svg4react"
import { LiveDemo } from "@app/features/shared"

const code = `
const pathProps = {
    fill: "none",
    stroke: "indianred",
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
    <Svg size="100px" viewBox="0 0 100 100">
        <Path {...pathProps} />
    </Svg>
)
`

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#using_d_as_a_css_property
 */
export const Example3 = (_props: unknown): JSX.Element => {

    const scope = { Svg, Path }

    return (
        <LiveDemo
            title="MoveTo"
            code={code}
            scope={scope}
            trimCode={false}
            noInline
        />
    )
}
