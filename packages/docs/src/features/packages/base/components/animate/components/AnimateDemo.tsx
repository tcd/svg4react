import { Svg, Animate, Rect } from "svg4react"

import { randomColor } from "@app/util"
import { LiveDemo } from "@app/features/live-demo"

export const AnimateDemo = (_props: unknown): JSX.Element => {

    const scope = { Svg, Animate, Rect }

    return (
        <LiveDemo
            id="animate-demo-1"
            title="Demo"
            code={code}
            scope={scope}
        />
    )
}

// =============================================================================

const code = `
import { Svg, Animate } from "svg4react"

render(
    <Svg size="80%" vb={[10]}>
        <Rect size={[10]} fill="${randomColor()}">
            <Animate
                attributeName="rx"
                values={[0, 5, 0]}
                dur="5s"
                repeatCount="indefinite"
            />
        </Rect>
    </Svg>
)
`
