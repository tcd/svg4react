import { Stack } from "@mui/material"

import { Page, ComponentOverview } from "@app/features/shared"
import { RadialGradientDemo } from "./RadialGradientDemo"

export const RadialGradientPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="<RadialGradient>">
            <Stack spacing={4}>
                <ComponentOverview componentName="RadialGradient" />
                <RadialGradientDemo />
            </Stack>
        </Page>
    )
}

