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
import {
    Svg,
    Circle,
    LinearGradient,
    StopProps,
} from "svg4react"

const stopsProps: StopProps[] = [
    { offset: "5%",  stopColor: "${randomColor()}" },
    { offset: "95%", stopColor: "${randomColor()}" },
]

render(
    <Svg size="100%" vb={[10]}>
        <LinearGradient id="myGradient" stops={stopsProps} />
        {/* apply the gradient */}
        <Circle
            coordinates={[5,5]}
            r="4"
            fill="url(#myGradient)"
        />
    </Svg>
)
`
