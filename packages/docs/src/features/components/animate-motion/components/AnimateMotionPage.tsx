import { Stack } from "@mui/material"

import { Page, ComponentOverview } from "@app/features/shared"
import { AnimateMotionDemo } from "./AnimateMotionDemo"

export const AnimateMotionPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="<AnimateMotion>">
            <Stack spacing={4}>
                <ComponentOverview componentName="AnimateMotion" />
                <AnimateMotionDemo />
            </Stack>
        </Page>
    )
}

