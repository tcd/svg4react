import { Stack } from "@mui/material"

import { Page, ComponentOverview } from "@app/features/shared"
import { MaskDemo } from "./MaskDemo"

export const MaskPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="<Mask>">
            <Stack spacing={4}>
                <ComponentOverview componentName="Mask" />
                <MaskDemo />
            </Stack>
        </Page>
    )
}

