import { Stack } from "@mui/material"

import { Page, Card } from "@app/features/shared"
import { V1 } from "./V1"
import { V2 } from "./V2"

export const CircleMotionPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="Gradient Text">
            <Card title="Circle Motion">
                <Stack direction="column" spacing={5}>
                    <a href="https://stackoverflow.com/a/67364272/7687024">Source (JHeth on StackOverflow)</a>
                    <V1 />
                    <V2 />
                </Stack>
            </Card>
        </Page>
    )
}
