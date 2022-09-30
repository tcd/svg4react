import { Svg, Line } from "svg4react"

import { randomColor } from "@app/util"
import { LiveDemo } from "@app/features/live-demo"

export const LineDemo = (_props: unknown): JSX.Element => {

    const scope = { Svg, Line }

    return (
        <LiveDemo
            id="line-demo-1"
            title="Line Demo"
            componentName="Line"
            code={code}
            scope={scope}
        />
    )
}

// =============================================================================

const color = randomColor()

const code = `
import { Svg, Line, LineProps } from "svg4react"

const lineProps: LineProps = {
    stroke: "${color}",
    coordinates: [
        0,80,
        100,20,
    ],
}

render(
    <Svg size="90%" vb={[100]}>
        <Line {...lineProps} />
    </Svg>
)
`
