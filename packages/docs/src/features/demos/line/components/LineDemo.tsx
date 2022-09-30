import { Box } from "@mui/material"
import { Svg, Line, LineProps } from "svg4react"

import { Card, Highlight } from "@app/features/shared"
import { componentToString, randomColor } from "@app/util"

const color = randomColor()

const lineProps: LineProps = {
    stroke: color,
    coordinates: [
        0,80,
        100,20,
    ],
}

const content = `
const lineProps: LineProps = {
    stroke: "${color}",
    coordinates: [
        0,80,
        100,20,
    ],
}

const ExampleLine = (): JSX.Element => {
    return (
        <Svg viewBox="0 0 100 100">
            <Line {...lineProps} />
        </Svg>
    )
}
`
export const LineDemo = (_props: unknown): JSX.Element => {

    const exampleOutput = componentToString(<ExampleLine />)

    return (
        <Card
            title="Line Demo"
            componentName="Line"
        >
            <Box sx={{ display: "flex", flexFlow: "row nowrap", justifyContent: "space-between", alignItems: "stretch" }}>
                <Box sx={{ width: "50%" }}>
                    <Highlight content={content} />
                </Box>
                <Box sx={{ width: "50%" }}>
                    <Highlight content={exampleOutput} language="html" />
                </Box>
            </Box>

        </Card>
    )
}

const ExampleLine = (): JSX.Element => {
    return (
        <Svg viewBox="0 0 100 100" size="200px">
            <Line {...lineProps} />
        </Svg>
    )
}
