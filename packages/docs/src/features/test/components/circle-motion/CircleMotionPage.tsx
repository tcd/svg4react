import { Stack } from "@mui/material"

import { Page, Card } from "@app/features/shared"
import { CircleMotion } from "./CircleMotion"

export const CircleMotionPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="Gradient Text">
            <Card title="Circle Motion">
                <Stack direction="column" spacing={5}>
                    <a href="https://stackoverflow.com/a/67364272/7687024">Source (JHeth on StackOverflow)</a>
                    <CircleMotion />
                </Stack>
            </Card>
        </Page>
    )
}
