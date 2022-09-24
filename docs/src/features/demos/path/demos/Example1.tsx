import { Svg, Path } from "svg4react"

import { LiveDemo } from "@app/features/shared"

const code = `
render(
    <Svg size="100px" viewBox="0 0 100 100">
        <Path
            fill="indianred"
            commands={[
                ["M", [[              10,30]]],
                ["A", [[20,20, 0,0,1, 50,30]]],
                ["A", [[20,20, 0,0,1, 90,30]]],
                ["Q", [[90,60,        50,90]]],
                ["Q", [[10,60,        10,30]]],
                ["Z", []                     ],
            ]}
        />
    </Svg>
)
`

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#example
 */
export const Example1 = (_props: unknown): JSX.Element => {

    const scope = { Svg, Path }

    return (
        <LiveDemo
            title="Example #1"
            scope={scope}
            code={code}
        />
    )
}
