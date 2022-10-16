import { Stack } from "@mui/material"

import { Page, ComponentOverview } from "@app/features/shared"
import { TextPathDemo } from "./TextPathDemo"

export const TextPathPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="<TextPath>">
            <Stack spacing={4}>
                <ComponentOverview componentName="TextPath" />
                <TextPathDemo />
            </Stack>
        </Page>
    )
}

