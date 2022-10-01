import { Svg, Circle } from "svg4react"

import { randomColor } from "@app/util"
import { LiveDemo } from "@app/features/live-demo"

export const CircleDemo = (_props: unknown): JSX.Element => {

    const scope = { Svg, Circle }

    return (
        <LiveDemo
            id="circle-demo-1"
            title="Demo"
            code={code}
            scope={scope}
        />
    )
}

// =============================================================================

const code = `
import { Svg, Circle, CircleProps } from "svg4react"

const circleProps: CircleProps = {
    coordinates: [50, 50],
    r: 50,
    fill: "${randomColor()}",
}

render(
    <Svg size="75%" vb={[100]}>
        <Circle {...circleProps} />
    </Svg>
)
`
