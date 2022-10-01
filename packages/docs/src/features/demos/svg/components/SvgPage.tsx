import { Stack } from "@mui/material"

import { Page, ComponentOverview } from "@app/features/shared"
import { SvgDemo } from "./SvgDemo"

export const SvgPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="Svg">
            <Stack spacing={4}>
                <ComponentOverview componentName="Svg" />
                <SvgDemo />
            </Stack>
        </Page>
    )
}
