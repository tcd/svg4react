import { Svg, Circle } from "svg4react"

import { LiveDemo } from "@app/features/shared"
import { randomColor } from "@app/util"

export const SvgDemo = (_props: unknown): JSX.Element => {

    const scope = { Svg, Circle }

    return (
        <LiveDemo
            id="svg-demo-1"
            title="Svg Demo"
            componentName="Svg"
            code={code}
            scope={scope}
        />
    )
}

// =============================================================================

const code = `
import { Svg, Circle } from "svg4react"

render(
    <Svg size="100%">
        <Circle
            cx={50}
            cy={50}
            r={50}
            fill="${randomColor()}"
        />
    </Svg>
)
`
