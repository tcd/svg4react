import { Svg, Circle } from "svg4react"

import { randomColor } from "@app/util"
import { LiveDemo } from "@app/features/live-demo"

export const CircleDemo = (_props: unknown): JSX.Element => {

    const scope = { Svg, Circle }

    return (
        <LiveDemo
            id="circle-demo-1"
            title="Circle Demo"
            componentName="Circle"
            code={code}
            scope={scope}
        />
    )
}

// =============================================================================

const code = `
import { Svg, Circle, CircleProps } from "svg4react"

const circleProps: CircleProps = {
    cx: 50,
    cy: 50,
    r: 50,
    fill: "${randomColor()}",
}

render(
    <Svg size="100%" viewBox="0 0 100 100">
        <Circle {...circleProps} />
    </Svg>
)
`
