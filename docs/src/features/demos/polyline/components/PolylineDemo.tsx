import { Svg, Polyline, PolylineProps } from "svg4react"

import { LiveDemo } from "@app/features/shared"
import { Box } from "@mui/material"

const code = `
// Example of a polyline with the default fill
const propsWithFill = {
    points: [
        [  0, 100],
        [ 50,  25],
        [ 50,  75],
        [100,   0],
    ],
}

// Example of the same polyline shape with stroke and no fill
const propsWithoutFill  {
    points: [
        [  0, 100],
        [ 50,  25],
        [ 50,  75],
        [100,   0],
    ],
}

render(
    <Svg size="200px" viewBox="0 0 200 100">
        <Polyline {...propsWithFill} />
        <Polyline {...propsWithoutFill} />
    </Svg>
)
`

const propsWithFill: PolylineProps = {
    points: [
        [  0, 100],
        [ 50,  25],
        [ 50,  75],
        [100,   0],
    ],
}

const propsWithoutFill: PolylineProps = {
    fill: "none",
    stroke: "black",
    points: [
        [100, 100],
        [150,  25],
        [150,  75],
        [200,   0],
    ],
}

export const PolylineDemo = (_props: unknown): JSX.Element => {

    const scope = {
        Svg,
        Polyline,
    }

    // return (
    //     <Box>
    //         <Svg size="200px" viewBox="0 0 200 100">
    //             <Polyline {...propsWithFill}/>
    //             <Polyline {...propsWithoutFill}/>
    //         </Svg>
    //     </Box>
    // )

    return (
        <LiveDemo
            title="Polyline Demo"
            componentName="Polyline"
            code={code}
            scope={scope}
        />
    )
}
