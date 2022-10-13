import { useState } from "react"
import { Stack, Button, FormControlLabel, Switch } from "@mui/material"
import {
    AnimateTransform,
    AnimateTransformProps,
    Circle,
    G,
    Mask,
    Rect,
    Path,
    Svg,
} from "svg4react"

import { styles } from "./styles"

const motionPaths = [
    "M718.54,66.06L294.41,490.19c-48.89,48.89-128.09,48.95-176.91,0.13c-48.82-48.82-48.76-128.02,0.13-176.91 s128.09-48.95,176.91-0.13 M294.28,313.55l424.13,424.13c48.89,48.89,128.09,48.95,176.91,0.13c48.82-48.82,48.76-128.02-0.13-176.91 c-48.89-48.89-128.09-48.95-176.91-0.13",
    "M753.9,101.42c0,0-424.26,424.26-424.26,424.26c-68.34,68.34-179.15,68.34-247.49,0s-68.34-179.15,0-247.49 s179.15-68.34,247.49,0 M329.63,278.19L753.9,702.46c29.29,29.29,76.78,29.29,106.07,0c29.29-29.29,29.29-76.78,0-106.07 s-76.78-29.29-106.07,0",
    "M683.19,30.7L258.92,454.97c-29.29,29.29-76.78,29.29-106.07,0c-29.29-29.29-29.29-76.78,0-106.07 c29.29-29.29,76.78-29.29,106.07,0 M258.92,348.9c0,0,424.26,424.26,424.26,424.26c68.34,68.34,179.15,68.34,247.49,0s68.34-179.15,0-247.49 s-179.15-68.34-247.49,0",
]

const animateTransformProps: AnimateTransformProps = {
    type: "scale",
    keyTimes: [0, 0.25999, 0.26, 1],
    values: [1, 1, 0, 0],
    dur: "5s",
    additive: "sum",
    repeatCount: "indefinite",
}

export const V2 = (_props: unknown): JSX.Element => {

    const [showMask, setShowMask] = useState(true)

    const $circles = motionPaths.map((pathData, index) => (
        <Circle key={index} r="20" fill="blue">
            <animateMotion
                dur="5s"
                repeatCount="indefinite"
                path={pathData}
            />
        </Circle>
    ))

    return (
        <Stack>
            <style>{styles}</style>
            <FormControlLabel label="Visualize Mask" control={
                <Switch
                    checked={showMask}
                    onChange={() => setShowMask(!showMask)}
                />
            } />
            <Svg vb={[1015,855]}>
                <Mask id="myMask">
                    {/* Pixels under white are rendered */}
                    <Rect points={[0, 0]} size={[1015,855]} fill="white" />
                    {/* Pixels under black are hidden */}
                    <Rect
                        points={[315]}
                        size={[150]}
                        // transform="rotate(45, 395, 395)"
                        transform={[
                            ["rotate", [45, 395, 395]],
                        ]}
                    >
                        <AnimateTransform {...animateTransformProps} />
                    </Rect>
                </Mask>

                <Path className="st0" d="M718.54,66.06L294.41,490.19c-48.89,48.89-128.09,48.95-176.91,0.13c-48.82-48.82-48.76-128.02,0.13-176.91 s128.09-48.95,176.91-0.13" />
                <Path className="st1" d="M683.19,30.7L258.92,454.97c-29.29,29.29-76.78,29.29-106.07,0c-29.29-29.29-29.29-76.78,0-106.07 c29.29-29.29,76.78-29.29,106.07,0" />
                <Path className="st2" d="M753.9,101.42c0,0-424.26,424.26-424.26,424.26c-68.34,68.34-179.15,68.34-247.49,0s-68.34-179.15,0-247.49 s179.15-68.34,247.49,0" />

                <Path className="st0" d="M294.28,313.55l424.13,424.13c48.89,48.89,128.09,48.95,176.91,0.13c48.82-48.82,48.76-128.02-0.13-176.91 c-48.89-48.89-128.09-48.95-176.91-0.13" />
                <Path className="st2" d="M329.63,278.19L753.9,702.46c29.29,29.29,76.78,29.29,106.07,0c29.29-29.29,29.29-76.78,0-106.07 s-76.78-29.29-106.07,0" />
                <Path className="st1" d="M258.92,348.9c0,0,424.26,424.26,424.26,424.26c68.34,68.34,179.15,68.34,247.49,0s68.34-179.15,0-247.49 s-179.15-68.34-247.49,0" />

                {/* Group the circles and apply the mask to the group, not the circles */}
                <G mask="url(#myMask)">
                    {$circles}
                </G>

                {showMask && (
                    <Rect points={[315,335]} size={[150]} fill="#f00" opacity="0.1" transform={[["rotate", [45, 395, 395]]]}>
                        <AnimateTransform {...animateTransformProps} />
                    </Rect>
                )}

            </Svg>
        </Stack>
    )
}
