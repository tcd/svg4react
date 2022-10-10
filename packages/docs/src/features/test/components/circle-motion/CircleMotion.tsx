import { Box } from "@mui/material"
import {
    Svg,
    Text,
    TSpan,
} from "svg4react"

const styles = /*CSS*/`
    svg {
        max-width: 500px;
    }

    .st0,
    .st1 {
        fill: none;
        stroke: #8ea5ae;
        stroke-width: 50;
        stroke-miterlimit: 10;
    }

    .st1 {
        stroke-linecap: round;
    }

    .st2 {
        fill: none;
        stroke: #758992;
        stroke-width: 50;
        stroke-miterlimit: 10;
    }
`

export const CircleMotion = (_props: unknown): JSX.Element => {
    return (
        <Box>
            <style>{styles}</style>
            <svg viewBox="0 0 1015 855">
                <mask id="myMask">
                    Pixels under white are rendered
                    <rect x="0" y="0" width="1015" height="855" fill="white"/>
                    Pixels under black are hidden
                    <rect className="moveme" x="315" y="335" height="150" width="150" transform="rotate(45 395 395)">
                        <animateTransform
                            attributeName="transform"
                            attributeType="XML"
                            type="scale"
                            keyTimes="0; 0.25999; 0.26; 1"
                            values="1; 1; 0; 0"
                            dur="5s"
                            additive="sum"
                            repeatCount="indefinite"
                        />
                    </rect>
                </mask>

                <path className="st0" d="M718.54,66.06L294.41,490.19c-48.89,48.89-128.09,48.95-176.91,0.13c-48.82-48.82-48.76-128.02,0.13-176.91 s128.09-48.95,176.91-0.13"/>
                <path className="st1" d="M683.19,30.7L258.92,454.97c-29.29,29.29-76.78,29.29-106.07,0c-29.29-29.29-29.29-76.78,0-106.07 c29.29-29.29,76.78-29.29,106.07,0"/>
                <path className="st2" d="M753.9,101.42c0,0-424.26,424.26-424.26,424.26c-68.34,68.34-179.15,68.34-247.49,0s-68.34-179.15,0-247.49 s179.15-68.34,247.49,0"/>
                <path className="st0" d="M294.28,313.55l424.13,424.13c48.89,48.89,128.09,48.95,176.91,0.13c48.82-48.82,48.76-128.02-0.13-176.91 c-48.89-48.89-128.09-48.95-176.91-0.13"/>
                <path className="st2" d="M329.63,278.19L753.9,702.46c29.29,29.29,76.78,29.29,106.07,0c29.29-29.29,29.29-76.78,0-106.07 s-76.78-29.29-106.07,0"/>
                <path className="st1" d="M258.92,348.9c0,0,424.26,424.26,424.26,424.26c68.34,68.34,179.15,68.34,247.49,0s68.34-179.15,0-247.49 s-179.15-68.34-247.49,0"/>
                Group the circles and apply the mask to the group, not the circles
                <g mask="url(#myMask)">
                    <circle r="20" fill="blue">
                        <animateMotion dur="5s" repeatCount="indefinite" path="M718.54,66.06L294.41,490.19c-48.89,48.89-128.09,48.95-176.91,0.13c-48.82-48.82-48.76-128.02,0.13-176.91 s128.09-48.95,176.91-0.13 M294.28,313.55l424.13,424.13c48.89,48.89,128.09,48.95,176.91,0.13c48.82-48.82,48.76-128.02-0.13-176.91 c-48.89-48.89-128.09-48.95-176.91-0.13"/>
                    </circle>
                    <circle r="20" fill="blue">
                        <animateMotion dur="5s" repeatCount="indefinite" path="M753.9,101.42c0,0-424.26,424.26-424.26,424.26c-68.34,68.34-179.15,68.34-247.49,0s-68.34-179.15,0-247.49 s179.15-68.34,247.49,0 M329.63,278.19L753.9,702.46c29.29,29.29,76.78,29.29,106.07,0c29.29-29.29,29.29-76.78,0-106.07 s-76.78-29.29-106.07,0"/>
                    </circle>
                    <circle r="20" fill="blue">
                        <animateMotion dur="5s" repeatCount="indefinite" path="M683.19,30.7L258.92,454.97c-29.29,29.29-76.78,29.29-106.07,0c-29.29-29.29-29.29-76.78,0-106.07 c29.29-29.29,76.78-29.29,106.07,0 M258.92,348.9c0,0,424.26,424.26,424.26,424.26c68.34,68.34,179.15,68.34,247.49,0s68.34-179.15,0-247.49 s-179.15-68.34-247.49,0"/>
                    </circle>
                </g>

                uncomment the rect below to visualize the animation applied to the mask
                <rect x="315" y="335" height="150" width="150" fill="#f00" opacity=".1" transform="rotate(45, 395, 395)">
                    <animateTransform attributeName="transform" attributeType="XML" type="scale" keyTimes="0; 0.25999; 0.26; 1" values="1; 1; 0; 0" dur="5s" additive="sum" repeatCount="indefinite"/>
                </rect>

            </svg>
        </Box>
    )
}
