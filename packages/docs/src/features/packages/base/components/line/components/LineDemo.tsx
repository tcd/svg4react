import { Svg, Line } from "svg4react"

import { randomColor } from "@app/util"
import { LiveDemo } from "@app/features/live-demo"

export const LineDemo = (_props: unknown): JSX.Element => {

    const scope = { Svg, Line }

    return (
        <LiveDemo
            id="line-demo-1"
            title="Demo"
            code={code}
            scope={scope}
        />
    )
}

// =============================================================================

const color = randomColor()

const code = `
import { Svg, Line } from "svg4react"

render(
    <Svg size="90%" vb={[100]}>
        <Line
            stroke="${color}"
            coordinates={[0,80, 100,20]}
        />
    </Svg>
)
`
