import { Box, Stack } from "@mui/material"

import { ComponentPage } from "@app/features/shared"
import * as Examples from "./demos"

export const PathPage = (_props: unknown): JSX.Element => {
    return (
        <ComponentPage
            componentName="Path"
            toc={[
                {
                    text: "Overview",
                    hash: "overview",
                },
                {
                    text: "Props",
                    hash: "props",
                },
                {
                    text: "Demos",
                    hash: "demos",
                    children: [
                        { text: "Example",                     hash: "path-example-1" },
                        { text: "Using `d` as a CSS property", hash: "path-example-2" },
                        { text: "MoveTo path commands",        hash: "path-example-3" },
                        { text: "LineTo path commands",        hash: "path-example-4" },
                        { text: "Cubic Bézier Curve",          hash: "path-example-5" },
                        { text: "Quadratic Bézier Curve",      hash: "path-example-6" },
                        { text: "Elliptical Arc Curve",        hash: "path-example-7" },
                        { text: "ClosePath",                   hash: "path-example-8" },
                    ],
                },
            ]}
            demo={
                <Stack id="demos" spacing={4} sx={{ flexGrow: 1 }}>
                    <Examples.Example1 />
                    <Examples.Example2 />
                    <Examples.Example3 />
                    <Examples.Example4 />
                    <Examples.Example5 />
                    <Examples.Example6 />
                    <Examples.Example7 />
                    <Examples.Example8 />
                </Stack>
            }
        />
    )
}

