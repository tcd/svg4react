import { Svg, LinearGradient } from "svg4react"

import { randomColor } from "@app/util"
import { LiveDemo } from "@app/features/shared"

export const LinearGradientDemo = (_props: unknown): JSX.Element => {

    const scope = {
        Svg,
        LinearGradient,
    }

    return (
        <LiveDemo
            title="Linear Gradient Demo"
            componentName="LinearGradient"
            code={code}
            scope={scope}
        />
    )
}

// =============================================================================

const code = `
const props = {
    cx: 50,
    cy: 50,
    r: 50,
    fill: "${randomColor()}",
}

render(
    <Svg size="100%" viewBox="0 0 100 100">
        <Circle {...props} />
    </Svg>
)
`
