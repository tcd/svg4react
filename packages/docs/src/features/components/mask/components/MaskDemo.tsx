import { Svg, Mask, Rect, Path, Polygon, Circle } from "svg4react"

import { LiveDemo } from "@app/features/live-demo"

export const MaskDemo = (_props: unknown): JSX.Element => {

    const scope = { Svg, Mask, Rect, Path, Polygon, Circle }

    return (
        <LiveDemo
            id="mask-demo-1"
            title="Demo"
            code={code}
            scope={scope}
        />
    )
}

// =============================================================================

const code = `
import { Svg, Mask, Rect, Path, Polygon, Circle } from "svg4react"

render(
    <Svg size="300px" viewBox="-10 -10 120 120">
        <Mask id="myMask">
            {/* Everything under a white pixel will be visible  */}
            <Rect points={[0, 0]} size={[100]} fill="white" />

            {/* Everything under a black pixel will be invisible */}
            <Path fill="black" commands={[
                ["M", [[10,35]]],
                ["A", [[20,20,0,0,1,50,35], [20,20,0,0,1,90,35]]],
                ["Q", [[90,65,50,95], [10,65,10,35]]],
                ["Z", []],
            ]}/>
        </Mask>

        <Polygon points={[[-10,110],[110,110],[110,-10]]} fill="royalblue" />

        {/* with this mask applied, we "punch" a heart shape hole into the circle */}
        <Circle coordinates={[50]} r="50" fill="darkslategray" mask="url(#myMask)" />
    </Svg>
)
`
