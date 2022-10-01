import { Stack } from "@mui/material"

import { ComponentOverview, Page } from "@app/features/shared"
import { LineDemo } from "./LineDemo"

export const LinePage = (_props: unknown): JSX.Element => {
    return (
        <Page title="<Line>">
            <Stack spacing={4}>
                <ComponentOverview componentName="Line" />
                <LineDemo />
            </Stack>
        </Page>
    )
}

