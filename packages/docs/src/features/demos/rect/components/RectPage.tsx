import { Stack } from "@mui/material"

import { Page, ComponentOverview } from "@app/features/shared"
import { RectDemo } from "./RectDemo"

export const RectPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="Rect">
            <Stack spacing={4}>
                <ComponentOverview componentName="Rect" />
                <RectDemo />
            </Stack>
        </Page>
    )
}
