import { Box } from "@mui/material"
import { Circle, Svg } from "svg4react"

export const CircleDemo = (_props: unknown): JSX.Element => {
    return (
        <Box>
            Circle Demo
            <br />
            <br />
            <Svg
                width="100px"
                height="100px"
            >
                <Circle
                    cx={50}
                    cy={50}
                    r={50}
                    fill="#00deaf"
                />
            </Svg>
        </Box>
    )
}
