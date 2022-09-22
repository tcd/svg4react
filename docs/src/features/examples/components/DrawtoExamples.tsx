import { Box } from "@mui/material"

import {
    Example1,
    Example2,
    Example3,
    Example4,
    Example5,
    Example6,
    Example7,
    Example8,
    Example101,
} from "./drawto"

export const DrawtoExamples = (_props: unknown): JSX.Element => {
    return (
        <Box sx={{ flexGrow: 1, display: "flex", flexFlow: "column nowrap", justifyContent: "stretch", alignItems: "stretch" }}>
            <Example1 />
            <Example2 />
            <Example3 />
            <Example4 />
            <Example5 />
            <Example6 />
            <Example7 />
            <Example8 />
            <Example101 />
        </Box>
    )
}
