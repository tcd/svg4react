import { Svg, Ellipse } from "svg4react"

import { randomColor } from "@app/util"
import { LiveDemo } from "@app/features/live-demo"

export const EllipseDemo = (_props: unknown): JSX.Element => {

    const scope = { Svg, Ellipse }

    return (
        <LiveDemo
            id="ellipse-demo-1"
            title="Demo"
            code={code}
            scope={scope}
        />
    )
}

// =============================================================================

const code = `
import { Svg, Ellipse } from "svg4react"

render(
    <Svg size="75%" vb={[200,100]}>
        <Ellipse
            fill="${randomColor()}"
            coordinates={[100,50]}
            radius={[100,50]}
        />
    </Svg>
)
`
