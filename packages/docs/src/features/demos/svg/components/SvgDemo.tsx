import { Svg, Circle } from "svg4react"

import { LiveDemo } from "@app/features/live-demo"
import { randomColor } from "@app/util"

export const SvgDemo = (_props: unknown): JSX.Element => {

    const scope = { Svg, Circle }

    return (
        <LiveDemo
            id="svg-demo-1"
            title="Svg Demo"
            componentName="Svg"
            code={code}
            scope={scope}
        />
    )
}

// =============================================================================

const code = `
import { Svg, SvgProps, Circle } from "svg4react"

const props: SvgProps = {
    size: "50%",
    vb: [100],
}

render(
    <Svg {...props}>
        <Circle
            coordinates={[50, 50]}
            r={50}
            fill="${randomColor()}"
        />
    </Svg>
)
`
