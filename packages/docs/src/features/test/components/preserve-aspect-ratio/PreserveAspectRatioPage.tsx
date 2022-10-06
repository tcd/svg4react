import { Box } from "@mui/material"

import { Card, Page } from "@app/features/shared"
import { V1 as PreserveAspectRatio } from "./V1"

export const PreserveAspectRatioPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="preserveAspectRatio">
            <Card title="preserveAspectRatio">
                <Box>
                    <PreserveAspectRatio />
                </Box>
            </Card>
        </Page>
    )
}
