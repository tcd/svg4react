import { Svg, LinearGradient, Circle } from "svg4react"

import { randomColor } from "@app/util"
import { LiveDemo } from "@app/features/shared"

export const LinearGradientDemo = (_props: unknown): JSX.Element => {

    const scope = { Svg, LinearGradient, Circle }

    return (
        <LiveDemo
            id="linear-gradient-demo-1"
            title="Linear Gradient Demo"
            componentName="LinearGradient"
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
    <Svg size="100%" viewBox="0 0 10 10">
        <LinearGradient {...props} />
        {/* using my linear gradient */}
        <Circle cx="5" cy="5" r="4" fill="url('#myGradient')" />
    </Svg>
)
`
