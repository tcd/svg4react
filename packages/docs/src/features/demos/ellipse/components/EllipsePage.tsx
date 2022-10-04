import { Stack } from "@mui/material"

import { Page, ComponentOverview } from "@app/features/shared"
import { EllipseDemo } from "./EllipseDemo"

export const EllipsePage = (_props: unknown): JSX.Element => {
    return (
        <Page title="<Ellipse>">
            <Stack spacing={4}>
                <ComponentOverview componentName="Ellipse" />
                <EllipseDemo />
            </Stack>
        </Page>
    )
}
