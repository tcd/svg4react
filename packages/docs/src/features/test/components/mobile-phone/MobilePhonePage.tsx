import { Stack } from "@mui/material"

import { Page, Card } from "@app/features/shared"
import * as graphics from "./graphics"

export const MobilePhonePage = (_props: unknown): JSX.Element => {
    return (
        <Page title="Mobile Phone">
            <Card title="Mobile Phone">
                <Stack direction="column" spacing={5}>
                    {/* <graphics.V0 /> */}
                    <graphics.V2 />
                </Stack>
            </Card>
        </Page>
    )
}
