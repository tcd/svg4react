import { Svg, LinearGradient, Circle } from "svg4react"

import { randomColor } from "@app/util"
import { LiveDemo } from "@app/features/live-demo"

export const LinearGradientDemo = (_props: unknown): JSX.Element => {

    const scope = { Svg, LinearGradient, Circle }

    return (
        <LiveDemo
            id="linear-gradient-demo-1"
            title="Linear Gradient Demo"
            code={code}
            scope={scope}
        />
    )
}

// =============================================================================

const code = `
import { Svg, Circle, LinearGradient, LinearGradientProps } from "svg4react"

const props: LinearGradientProps = {
    id: "myGradient",
    stops: [
        { offset: "5%",  stopColor: "${randomColor()}" },
        { offset: "95%", stopColor: "${randomColor()}" },
    ],
}

render(
    <Svg size="100%" vb={[10]}>
        <LinearGradient {...props} />
        {/* apply the gradient */}
        <Circle
            coordinates={[5,5]}
            r="4"
            fill="url(#myGradient)"
        />
    </Svg>
)
`
