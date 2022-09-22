import { Svg, Path } from "svg4react"
import { LiveDemo } from "@app/features/shared"

const code = `
    const pathProps = {
        fill: "none",
        stroke: "indianred",
        commands: [
            ["M", [[              10,30]]],
            ["A", [[20,20, 0,0,1, 50,30]]],
            ["A", [[20,20, 0,0,1, 90,30]]],
            ["Q", [[90,60,        50,90]]],
            ["Q", [[10,60,        10,30]]],
            ["Z", []                     ],
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
export const Example2 = (_props: unknown): JSX.Element => {

    const scope = { Svg, Path }

    return (
        <LiveDemo
            title="CSS"
            code={code}
            scope={scope}
            noInline
        />
    )
}
