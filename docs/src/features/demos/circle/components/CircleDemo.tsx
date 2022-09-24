import { Circle, Svg } from "svg4react"

import { LiveDemo } from "@app/features/shared"

const _code1 = `
<Svg size="100px">
    <Circle
        cx={50}
        cy={50}
        r={50}
        fill="#00deaf"
    />
</Svg>
`

const code2 = `
const circleProps = {
    cx: 50,
    cy: 50,
    r: 50,
    fill: "#00deaf",
}

render(
    <Svg size="100px">
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
