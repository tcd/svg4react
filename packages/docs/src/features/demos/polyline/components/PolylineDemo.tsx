import { Svg, Polyline } from "svg4react"

import { randomColor } from "@app/util"
import { LiveDemo } from "@app/features/live-demo"

export const PolylineDemo = (_props: unknown): JSX.Element => {

    const scope = { Svg, Polyline }

    return (
        <LiveDemo
            id="polyline-demo-1"
            title="Polyline Demo"
            componentName="Polyline"
            code={code}
            scope={scope}
        />
    )
}

// =============================================================================

const color = randomColor()

const code = `
import { Svg, Polyline, PolylineProps } from "svg4react"

// Example of a polyline with the default fill
const propsWithFill: PolylineProps = {
    fill: "${color}",
    points: [
        [  0, 100],
        [ 50,  25],
        [ 50,  75],
        [100,   0],
    ],
}

// Example of the same polyline shape with stroke and no fill
const propsWithoutFill: PolylineProps = {
    fill: "none",
    stroke: "${color}",
    points: [
        [100, 100],
        [150,  25],
        [150,  75],
        [200,   0],
    ],
}

render(
    <Svg size="75%" vb={[200,100]}>
        <Polyline {...propsWithFill} />
        <Polyline {...propsWithoutFill} />
    </Svg>
)
`
