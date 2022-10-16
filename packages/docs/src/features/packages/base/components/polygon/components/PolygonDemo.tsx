import { Svg, Polygon } from "svg4react"

import { randomColor } from "@app/util"
import { LiveDemo } from "@app/features/live-demo"

export const PolygonDemo = (_props: unknown): JSX.Element => {

    const scope = { Svg, Polygon }

    return (
        <LiveDemo
            id="polygon-demo-1"
            title="Demo"
            code={code}
            scope={scope}
        />
    )
}

// =============================================================================

const color = randomColor()

const code = `
import { Svg, Polygon, PolygonProps } from "svg4react"

// Example of a polygon with the default fill
const propsWithFill: PolygonProps = {
    fill: "${color}",
    points: [
        [  0, 100],
        [ 50,  25],
        [ 50,  75],
        [100,   0],
    ],
}

// Example of the same polygon shape with stroke and no fill
const propsWithoutFill: PolygonProps = {
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
        <Polygon {...propsWithFill} />
        <Polygon {...propsWithoutFill} />
    </Svg>
)
`
