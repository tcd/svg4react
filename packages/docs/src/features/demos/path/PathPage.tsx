import { Stack } from "@mui/material"

import { Page } from "@app/features/shared"
import { PathOverview } from "./PathOverview"
import * as Examples from "./demos"

export const PathPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="Path">
            <Stack direction="column" spacing={5}>
                <PathOverview />
                <Examples.Example1 />
                <Examples.Example2 />
                <Examples.Example3 />
                <Examples.Example4 />
                <Examples.Example5 />
                <Examples.Example6 />
                <Examples.Example7 />
                <Examples.Example8 />
            </Stack>
        </Page>
    )
}
