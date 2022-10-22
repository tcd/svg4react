import { Svg, Defs, Pattern, Polygon, Circle } from "svg4react"

import { randomColor } from "@app/util"
import { LiveDemo } from "@app/features/live-demo"

export const PatternDemo = (_props: unknown): JSX.Element => {

    const scope = { Svg, Defs, Pattern, Polygon, Circle }

    return (
        <LiveDemo
            id="pattern-demo-1"
            title="Demo"
            code={code}
            scope={scope}
        />
    )
}

// =============================================================================

const color = randomColor()

const code = `
import { Svg, Defs, Pattern, Polygon, Circle } from "svg4react"

render(
    <Svg size="100%" vb={[230,100]}>
        <Defs>
            <Pattern id="star" size={["10%"]} vb={[10]}>
                <Polygon
                    points={[[0,0], [2,5], [0,10], [5,8], [10,10], [8,5], [10,0], [5,2]]}
                    fill="${color}"
                />
            </Pattern>
        </Defs>

        <Circle
            coordinates={[50]}
            r="50"
            fill="url(#star)"
        />

        <Circle
            coordinates={[180,50]}
            r="40"
            fill="none"
            strokeWidth="20"
            stroke="url(#star)"
        />
    </Svg>
)
`
