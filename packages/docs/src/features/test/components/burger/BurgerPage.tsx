import { Stack } from "@mui/material"

import { Page, Card } from "@app/features/shared"
import * as burgers from "./burgers"
import { useState } from "react"

export const BurgerPage = (_props: unknown): JSX.Element => {

    const [checked, setChecked] = useState(false)
    const onChange = () => setChecked(!checked)

    const burgerProps = {
        checked,
        onChange,
    }

    return (
        <Page title="Burger">
            <Card title="Burger">
                <Stack direction="column" spacing={5}>
                    <burgers.V4 {...burgerProps} />
                    <burgers.V5 {...burgerProps} />
                </Stack>
            </Card>
        </Page>
    )
}
