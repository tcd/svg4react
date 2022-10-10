import { Stack } from "@mui/material"

import { Page, Card } from "@app/features/shared"
import { V4 } from "./v4/V4"

export const BurgerPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="Burger">
            <Card title="Burger">
                <Stack direction="column" spacing={5}>
                    <V4 />
                </Stack>
            </Card>
        </Page>
    )
}
