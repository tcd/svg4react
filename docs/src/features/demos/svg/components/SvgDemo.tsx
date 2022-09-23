import { Circle, Svg } from "svg4react"

import { LiveDemo } from "@app/features/shared"

const code = `
    <Svg size="100px">
        <Circle
            cx={50}
            cy={50}
            r={50}
            fill="#00deaf"
        />
    </Svg>
`

export const SvgDemo = (_props: unknown): JSX.Element => {

    const scope = {
        Svg,
        Circle,
    }

    return (
        <LiveDemo
            title="Svg Demo"
            componentName="Svg"
            code={code}
            scope={scope}
        />
    )
}
