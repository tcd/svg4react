import {
    Svg,
    Polygon,
    AnimateTransform,
} from "svg4react"

import { randomColor } from "@app/util"
import { LiveDemo } from "@app/features/live-demo"

export const AnimateTransformDemo = (_props: unknown): JSX.Element => {

    const scope = { Svg, AnimateTransform, Polygon }

    return (
        <LiveDemo
            id="animate-transform-demo-1"
            title="Demo"
            code={code}
            scope={scope}
        />
    )
}

// =============================================================================

const code = `
import { Svg, Polygon, AnimateTransform } from "svg4react"

render(
    <Svg size="120px" vb={[120]}>
        <Polygon fill="${randomColor()}" points={[[60,30], [90,90], [30,90]]}>
            <AnimateTransform
                attributeName="transform"
                type="rotate"
                from="0 60 70"
                to="360 60 70"
                dur="5s"
                repeatCount="indefinite"
            />
        </Polygon>
    </Svg>
)
`
