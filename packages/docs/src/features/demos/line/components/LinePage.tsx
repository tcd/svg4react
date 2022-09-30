import { Page } from "@app/features/shared"

import { LineDemo } from "./LineDemo"

export const LinePage = (_props: unknown): JSX.Element => {
    return (
        <Page title="<Line>">
            <LineDemo />
        </Page>
    )
}

