import { Svg, Circle } from "svg4react"

import { randomColor } from "@app/util"
import { LiveDemo } from "@app/features/shared"

const _code1 = `
<Svg size="100px">
    <Circle
        cx={50}
        cy={50}
        r={50}
        fill: "${randomColor()}",
    />
</Svg>
`

const code2 = `
const circleProps = {
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

export const CircleDemo = (_props: unknown): JSX.Element => {

    const scope = {
        Svg,
        Circle,
    }

    return (
        <LiveDemo
            title="Circle Demo"
            componentName="Circle"
            code={code2}
            scope={scope}
        />
    )
}
