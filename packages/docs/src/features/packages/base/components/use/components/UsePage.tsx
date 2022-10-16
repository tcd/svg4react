import { Stack } from "@mui/material"

import { ComponentOverview, Page } from "@app/features/shared"
import { UseDemo } from "./UseDemo"

export const UsePage = (_props: unknown): JSX.Element => {
    return (
        <Page title="<Use>">
            <Stack spacing={4}>
                <ComponentOverview componentName="Use" />
                <UseDemo />
            </Stack>
        </Page>
    )
}

