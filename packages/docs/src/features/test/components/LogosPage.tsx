import { Stack } from "@mui/material"

import { Page } from "@app/features/shared"
import * as logos from "./logos"

export const LogosPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="Logos">
            <Stack direction="column" spacing={5}>
                <logos.NpmCube />
                <logos.Svg4React />
                <logos.Atom />
            </Stack>
        </Page>
    )
}
