import { Stack } from "@mui/material"

import { Page, ComponentOverview } from "@app/features/shared"
import { PolygonDemo } from "./PolygonDemo"

export const PolygonPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="<Polygon>">
            <Stack spacing={4}>
                <ComponentOverview componentName="Polygon" />
                <PolygonDemo />
            </Stack>
        </Page>
    )
}

