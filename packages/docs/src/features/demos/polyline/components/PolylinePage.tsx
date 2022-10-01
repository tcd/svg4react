import { Stack } from "@mui/material"

import { Page, ComponentOverview } from "@app/features/shared"
import { PolylineDemo } from "./PolylineDemo"

export const PolylinePage = (_props: unknown): JSX.Element => {
    return (
        <Page title="<Polyline>">
            <Stack spacing={4}>
                <ComponentOverview componentName="Polyline" />
                <PolylineDemo />
            </Stack>
        </Page>
    )
}

