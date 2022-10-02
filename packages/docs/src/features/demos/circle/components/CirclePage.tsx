import { Stack } from "@mui/material"

import { Page, ComponentOverview } from "@app/features/shared"
import { CircleDemo } from "./CircleDemo"

export const CirclePage = (_props: unknown): JSX.Element => {
    return (
        <Page title="<Circle>">
            <Stack spacing={4}>
                {/* <ComponentOverview componentName="Circle" /> */}
                <CircleDemo />
            </Stack>
        </Page>
    )
}

