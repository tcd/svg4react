import { Stack } from "@mui/material"

import { Card, Page } from "@app/features/shared"
import { V1 } from "./V1"
import { V2 } from "./V2"

export const PreserveAspectRatioPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="preserveAspectRatio">
            <Card title="preserveAspectRatio">
                <Stack direction="column" spacing={2}>
                    <V1 />
                    <V2 />
                </Stack>
            </Card>
        </Page>
    )
}
