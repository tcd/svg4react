import { Stack } from "@mui/material"

import { ComponentOverview, Page } from "@app/features/shared"
import { ClipPathDemo } from "./ClipPathDemo"

export const ClipPathPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="<ClipPath>">
            <Stack spacing={4}>
                <ComponentOverview componentName="ClipPath" />
                <ClipPathDemo />
            </Stack>
        </Page>
    )
}

