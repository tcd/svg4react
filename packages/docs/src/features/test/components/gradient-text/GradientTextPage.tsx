import { Stack } from "@mui/material"

import { Page } from "@app/features/shared"
import * as examples from "./examples"

export const GradientTextPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="Gradient Text">
            <Stack direction="column" spacing={5}>
                <examples.V0 />
                <examples.V1 />
                <examples.V2 />
            </Stack>
        </Page>
    )
}
