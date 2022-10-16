import { Stack } from "@mui/material"

import { ComponentOverview, Page } from "@app/features/shared"
import { SymbolDemo } from "./SymbolDemo"

export const SymbolPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="<Symbol>">
            <Stack spacing={4}>
                <ComponentOverview componentName="Symbol" />
                <SymbolDemo />
            </Stack>
        </Page>
    )
}

