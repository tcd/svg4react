import { Svg, LinearGradient, Circle } from "svg4react"

import { randomColor } from "@app/util"
import { LiveDemo } from "@app/features/live-demo"

export const StopDemo = (_props: unknown): JSX.Element => {

    const scope = { Svg, LinearGradient, Circle }

    return (
        <LiveDemo
            id="stop-demo-1"
            title="Demo"
            code={code}
            scope={scope}
        />
    )
}

// =============================================================================

const code = `
import { Svg, LinearGradient, Circle } from "svg4react"

render(
    <Svg size="100%" vb={[10]}>

        {/* define the gradient */}
        <LinearGradient
            id="myGradient"
            stops={[
                { offset: "5%",  stopColor: "${randomColor()}" },
                { offset: "95%", stopColor: "${randomColor()}" },
            ]}
        />

        {/* apply the gradient */}
        <Circle
            coordinates={[5,5]}
            r="4"
            fill="url(#myGradient)"
        />
    </Svg>
)
`
