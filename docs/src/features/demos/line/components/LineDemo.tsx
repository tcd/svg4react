import { Svg, Line, LineProps } from "svg4react"

import { Card } from "@app/features/shared"
import { Box } from "@mui/material"

const lineProps: LineProps = {
    stroke: "black",
    coordinates: [
        0,80,
        100,20,
    ],
}

export const LineDemo = (_props: unknown): JSX.Element => {

    return (
        <Card
            title="Line Demo"
            componentName="Line"
        >
            <Box sx={{ display: "flex", flexFlow: "row nowrap", justifyContent: "stretch", alignItems: "stretch" }}>
                <Box>
                </Box>
                <Box>
                    <Svg viewBox="0 0 100 100" size="100px">
                        <Line {...lineProps} />
                    </Svg>
                </Box>
            </Box>

        </Card>
    )
}

const ExampleLine = (): JSX.Element => {
    return (
        <Svg viewBox="0 0 100 100">
            <Line {...lineProps} />
        </Svg>
    )
}
