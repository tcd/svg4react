import { Stack } from "@mui/material"

import { Page, ComponentOverview } from "@app/features/shared"
import { TSpanDemo } from "./TSpanDemo"

export const TSpanPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="<TSpan>">
            <Stack spacing={4}>
                <ComponentOverview componentName="TSpan" />
                <TSpanDemo />
            </Stack>
        </Page>
    )
}

