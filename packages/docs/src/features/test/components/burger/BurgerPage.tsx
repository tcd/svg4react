import { Stack } from "@mui/material"

import { Page, Card } from "@app/features/shared"
import * as burgers from "./burgers"

export const BurgerPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="Burger">
            <Card title="Burger">
                <Stack direction="column" spacing={5}>
                    <burgers.V4 />
                    <burgers.V5 />
                </Stack>
            </Card>
        </Page>
    )
}
