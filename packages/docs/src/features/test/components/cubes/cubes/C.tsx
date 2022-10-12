import {
    Defs,
    G,
    LinearGradient,
    Path,
    StopProps,
    Svg,
} from "svg4react"

import "./c.scss"

const gradientStops: StopProps[] = [
    { offset: "0%",   stopColor: "#8b09e8", stopOpacity: 1.0 },
    { offset: "50%",  stopColor: "#326be5", stopOpacity: 0.9 },
    { offset: "100%", stopColor: "#44b9d6", stopOpacity: 0.6 },
]

/**
 * [Isometric Cube Animation - Gabriel Antonio (CodePen)](https://codepen.io/Mareken/pen/wjzRBO?editors=1100)
 */
export const C = (_props: unknown): JSX.Element => {
    return (
        <Svg id="cube" vb={[100]} width="200px" height="250px" style={{ background: "papayawhip" }}>
            <Defs>
                <filter id="gaussian">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
                </filter>
                <LinearGradient
                    id="purpleGradient"
                    coordinates={[0, 0, "100%", "100%"]}
                    stops={gradientStops}
                />
            </Defs>
            <Path className="shadow"    commands={[["M", [[ 5,85], [50,100], [95,85], [50,60]]]]} fill="rgba(0,0,0,.4)" filter="url(#gaussian)" />
            <G fill="url(#purpleGradient)">
                <Path className="roof"  commands={[["M", [[10,20], [50, 5],  [90,20], [50,35]]]]} />
                <Path className="left"  commands={[["M", [[10,20], [50,35],  [50,90], [10,75]]]]} />
                <Path className="right" commands={[["M", [[50,90], [50,35],  [90,20], [90,75]]]]} />
            </G>
        </Svg>
    )
}
