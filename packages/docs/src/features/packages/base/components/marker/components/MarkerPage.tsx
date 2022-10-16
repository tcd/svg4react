import { Stack } from "@mui/material"

import { Page, ComponentOverview } from "@app/features/shared"
import { MarkerDemo } from "./MarkerDemo"

export const MarkerPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="<Marker>">
            <Stack spacing={4}>
                <ComponentOverview componentName="Marker" />
                <MarkerDemo />
            </Stack>
        </Page>
    )
}

