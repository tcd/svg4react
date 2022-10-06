import { Stack } from "@mui/material"

import { Page, ComponentOverview } from "@app/features/shared"
import { TextDemo } from "./TextDemo"

export const TextPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="<Text>">
            <Stack spacing={4}>
                <ComponentOverview componentName="Text" />
                <TextDemo />
            </Stack>
        </Page>
    )
}

