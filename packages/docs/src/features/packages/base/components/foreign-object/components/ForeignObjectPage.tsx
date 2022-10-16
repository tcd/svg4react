import { Stack } from "@mui/material"

import { ComponentOverview, Page } from "@app/features/shared"
import { ForeignObjectDemo } from "./ForeignObjectDemo"

export const ForeignObjectPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="<ForeignObject>">
            <Stack spacing={4}>
                <ComponentOverview componentName="ForeignObject" />
                <ForeignObjectDemo />
            </Stack>
        </Page>
    )
}

