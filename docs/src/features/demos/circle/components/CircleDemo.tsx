import { Box } from "@mui/material"
import { Circle } from "svg4react"

export const CircleDemo = (_props: unknown): JSX.Element => {
    return (
        <Box>
            Circle Demo
            <br />
            <br />
            <Circle
                cx={2}
                cy={0}
                r={0}
            />
        </Box>
    )
}
