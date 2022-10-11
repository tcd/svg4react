import { Svg, Use, Circle, Path, ClipPath } from "svg4react"

import { LiveDemo } from "@app/features/live-demo"

export const ClipPathDemo = (_props: unknown): JSX.Element => {

    const scope = { Svg, Use, Circle, Path, ClipPath }

    return (
        <LiveDemo
            id="clip-path-demo-1"
            title="Demo"
            code={code}
            scope={scope}
        />
    )
}

// =============================================================================

const code = `
import { Svg, Use, Circle, Path, ClipPath } from "svg4react"

const styles = /*CSS*/\`
    /* With a touch of CSS for browsers who implemented the r Geometry Property. */
    @keyframes openYourHeart {
        from { r: 0;    }
        to   { r: 60px; }
    }

    #myClip circle {
        animation: openYourHeart 10s infinite;
    }
\`

render(
    <>
        <style>{styles}</style>
        <Svg size="75%" vb={[100]}>
            <ClipPath id="myClip">
                {/* Everything outside the circle will be clipped and therefore invisible. */}
                <Circle coordinates={[40,35]} r="35" />
            </ClipPath>

            {/* The original black heart, for reference */}
            <Path
                id="heart"
                d="M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z"
            />

            {/* Only the portion of the red heart inside the clip circle is visible. */}
            <Use clipPath="url(#myClip)" href="#heart" fill="red" />
        </Svg>
    </>
)
`
