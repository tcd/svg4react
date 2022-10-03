import { Stack } from "@mui/material"

import { Page, ComponentOverview } from "@app/features/shared"
import { LinearGradientDemo } from "./LinearGradientDemo"

export const LinearGradientPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="<LinearGradient>">
            <Stack spacing={4}>
                <ComponentOverview componentName="LinearGradient" />
                <LinearGradientDemo />
            </Stack>
        </Page>
    )
}

