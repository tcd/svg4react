import { Box  } from "@mui/material"
import { Circle, Svg } from "svg4react"

import { LiveDemo } from "@app/features/shared"

const code = `
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
`

export const CircleDemo = (_props: unknown): JSX.Element => {

    const scope = {
        Svg,
        Circle,
    }

    return (
        <Box>
            <LiveDemo
                title="Circle Demo"
                componentName="Circle"
                code={code}
                scope={scope}
            />
        </Box>
    )
}
