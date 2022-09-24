import { Svg, Polyline } from "svg4react"

import { LiveDemo } from "@app/features/shared"

const code = `
// Example of a polyline with the default fill
const propsWithFill = {
    fill: "lime",
    points: [
        [  0, 100],
        [ 50,  25],
        [ 50,  75],
        [100,   0],
    ],
}

// Example of the same polyline shape with stroke and no fill
const propsWithoutFill = {
    fill: "none",
    stroke: "lime",
    points: [
        [100, 100],
        [150,  25],
        [150,  75],
        [200,   0],
    ],
}

render(
    <Svg width="732px" height="100px" viewBox="0 0 200 100">
        <Polyline {...propsWithFill} />
        <Polyline {...propsWithoutFill} />
    </Svg>
)
`

export const PolylineDemo = (_props: unknown): JSX.Element => {

    const scope = {
        Svg,
        Polyline,
    }

    return (
        <LiveDemo
            title="Polyline Demo"
            componentName="Polyline"
            code={code}
            scope={scope}
        />
    )
}
