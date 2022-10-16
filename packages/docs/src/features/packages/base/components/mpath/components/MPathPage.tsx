import { Stack } from "@mui/material"

import { ComponentOverview, Page } from "@app/features/shared"
import { MPathDemo } from "./MPathDemo"

export const MPathPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="<MPath>">
            <Stack spacing={4}>
                <ComponentOverview componentName="MPath" />
                <MPathDemo />
            </Stack>
        </Page>
    )
}

