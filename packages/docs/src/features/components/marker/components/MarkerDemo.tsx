import { Svg, Defs, Marker, Path, Circle, Polyline } from "svg4react"

import { LiveDemo } from "@app/features/live-demo"

export const MarkerDemo = (_props: unknown): JSX.Element => {
    const scope = { Svg, Defs, Marker, Path, Circle, Polyline }

    return (
        <LiveDemo
            id="marker-demo-1"
            title="Demo"
            code={code}
            scope={scope}
        />
    )
}

// =============================================================================

const code = `
import { Svg, Defs, Marker, Path, Circle, Polyline } from "svg4react"

render(
    <Svg size="75%" vb={[100]}>
        <Defs>
            {/* arrowhead marker definition */}
            <Marker
                id="arrow"
                viewBox="0 0 10 10"
                refXY={[5,5]}
                markerSize={[6,6]}
                orient="auto-start-reverse"
            >
                <Path commands={[
                    ["M", [[0,0]]],
                    ["L", [[10,5]]],
                    ["L", [[0,10]]],
                    ["Z", []],
                ]}/>
            </Marker>

            {/* simple dot marker definition */}
            <Marker
                id="dot"
                viewBox="0 0 10 10"
                refXY={[5,5]}
                markerSize={[5,5]}
            >
                <Circle coordinates={[5,5]} r="5" fill="red" />
            </Marker>
        </Defs>

        {/* Coordinate axes with a arrowhead in both direction */}
        <Polyline
            points={[[10,10], [10,90], [90,90]]}
            fill="none"
            stroke="black"
            markerStart="url(#arrow)"
            markerEnd="url(#arrow)"
        />

        {/* Data line with polymarkers */}
        <Polyline
            points={[[15,80], [29,50], [43,60], [57,30], [71,40], [85,15]]}
            fill="none"
            stroke="grey"
            markerStart="url(#dot)"
            markerMid="url(#dot)"
            markerEnd="url(#dot)"
        />
    </Svg>
)
`
