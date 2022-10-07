import { Stack } from "@mui/material"

import { Page, ComponentOverview } from "@app/features/shared"
import { AnimateTransformDemo } from "./AnimateTransformDemo"

export const AnimateTransformPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="<AnimateTransform>">
            <Stack spacing={4}>
                <ComponentOverview componentName="AnimateTransform" />
                <AnimateTransformDemo />
            </Stack>
        </Page>
    )
}

