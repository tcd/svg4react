import { useSelector } from "react-redux"
import { Svg, ClipPath, Use, Circle, Path, Animate } from "svg4react"

import { Selectors } from "@app/state"
import { LiveDemo } from "@app/features/live-demo"

export const ClipPathDemo = (_props: unknown): JSX.Element => {

    const darkModeEnabled = useSelector(Selectors.Core.darkModeEnabled)

    const scope = { Svg, ClipPath, Use, Circle, Path, Animate }

    return (
        <LiveDemo
            id="clip-path-demo-1"
            title="Demo"
            code={code(darkModeEnabled)}
            scope={scope}
        />
    )
}

// =============================================================================

const code = (darkMode: boolean) => {

    // const color = darkMode ? "white" : "black"
    const color = "black"

    return `
import { Svg, ClipPath, Use, Circle, Path, Animate } from "svg4react"

render(
    <Svg size="80%" vb={[100]}>
        <ClipPath id="myClip">
            {/* Everything outside the circle will be clipped and therefore invisible. */}
            <Circle coordinates={[40,35]}>
                <Animate
                    attributeName="r"
                    from="0px"
                    to="60px"
                    dur="10s"
                    repeatCount="indefinite"
                />
            </Circle>
        </ClipPath>

        {/* The original ${color} heart, for reference */}
        <Path
            id="heart"
            // fill="${color}"
            d="M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z"
        />

        {/* Only the portion of the red heart inside the clip circle is visible. */}
        <Use clipPath="url(#myClip)" href="#heart" fill="red" />
    </Svg>
)
`
}
