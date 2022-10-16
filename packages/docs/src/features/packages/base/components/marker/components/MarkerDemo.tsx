import { useSelector } from "react-redux"
import { Svg, Defs, Marker, Path, Circle, Polyline } from "svg4react"

import { Selectors } from "@app/state"
import { LiveDemo } from "@app/features/live-demo"

export const MarkerDemo = (_props: unknown): JSX.Element => {

    const darkModeEnabled = useSelector(Selectors.Core.darkModeEnabled)

    const scope = { Svg, Defs, Marker, Path, Circle, Polyline }

    return (
        <LiveDemo
            id="marker-demo-1"
            title="Demo"
            code={code(darkModeEnabled)}
            scope={scope}
        />
    )
}

// =============================================================================

const code = (darkMode: boolean) => {

    const color = darkMode ? "white" : "black"

    return `
import { Svg, Defs, Marker, Path, Circle, Polyline } from "svg4react"

render(
    <Svg size="75%" vb={[100]}>
        <Defs>
            {/* arrowhead marker definition */}
            <Marker
                id="arrow"
                viewBox="0 0 10 10"
                refXY={[5]}
                size={[6]}
                orient="auto-start-reverse"
            >
                <Path d="M 0,0 L 10,5 0,10 Z" fill="${color}" />
            </Marker>

            {/* simple dot marker definition */}
            <Marker
                id="dot"
                viewBox="0 0 10 10"
                refXY={[5]}
                markerSize={[5]}
            >
                <Circle coordinates={[5]} r="5" fill="red" />
            </Marker>
        </Defs>

        {/* Coordinate axes with a arrowhead in both direction */}
        <Polyline
            points={[[10,10], [10,90], [90,90]]}
            fill="none"
            stroke="${color}"
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
}
