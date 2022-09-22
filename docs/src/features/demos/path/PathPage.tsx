import { Stack } from "@mui/material"

import * as Examples from "./demos"

export const PathPage = (_props: unknown): JSX.Element => {
    return (
        <Stack direction="column" spacing={5}>
            <Examples.Example1 />
            <Examples.Example2 />
            <Examples.Example3 />
            <Examples.Example4 />
            <Examples.Example5 />
            <Examples.Example6 />
            <Examples.Example7 />
            <Examples.Example8 />
            <Examples.Example101 />
        </Stack>
    )
}
