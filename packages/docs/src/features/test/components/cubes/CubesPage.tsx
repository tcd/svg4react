import { Stack } from "@mui/material"

import { Page, Card } from "@app/features/shared"
import * as cubes from "./cubes"

export const CubesPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="Cubes">
            <Card title="Cubes">
                <Stack direction="column" spacing={5}>
                    {/* <cubes.A />
                    <cubes.B /> */}
                    <cubes.C />
                </Stack>
            </Card>
        </Page>
    )
}