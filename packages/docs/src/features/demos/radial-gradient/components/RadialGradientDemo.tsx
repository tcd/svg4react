import { Svg, RadialGradient, Circle } from "svg4react"

import { randomColor } from "@app/util"
import { LiveDemo } from "@app/features/live-demo"

export const RadialGradientDemo = (_props: unknown): JSX.Element => {

    const scope = { Svg, RadialGradient, Circle }

    return (
        <LiveDemo
            id="radial-gradient-demo-1"
            title="Radial Gradient Demo"
            code={code}
            scope={scope}
        />
    )
}

// =============================================================================

const code = `
import { Svg, Circle, RadialGradient } from "svg4react"

render(
    <Svg size="100%" vb={[10]}>

        <RadialGradient
            id="myGradient"
            stops={[
                { offset: "10%", stopColor: "${randomColor()}" },
                { offset: "95%", stopColor: "${randomColor()}" },
            ]}
        />

        <Circle
            fill="url(#myGradient)"
            coordinates={[5,5]}
            r="4"
        />

    </Svg>
)
`
