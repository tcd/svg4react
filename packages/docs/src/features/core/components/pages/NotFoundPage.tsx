import { Page } from "@app/features/shared"
import { Box, Typography } from "@mui/material"

import { DocsSx } from "@app/theme"

export const NotFoundPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="404">
            <Box sx={DocsSx.NotFoundPage.root}>
                <Typography>404 - Not Found</Typography>
            </Box>
        </Page>
    )
}
