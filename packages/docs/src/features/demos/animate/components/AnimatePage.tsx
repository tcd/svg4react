import { Stack } from "@mui/material"

import { Page, ComponentOverview } from "@app/features/shared"
import { AnimateDemo } from "./AnimateDemo"

export const AnimatePage = (_props: unknown): JSX.Element => {
    return (
        <Page title="<Animate>">
            <Stack spacing={4}>
                <ComponentOverview componentName="Animate" />
                <AnimateDemo />
            </Stack>
        </Page>
    )
}

