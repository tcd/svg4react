import { Page } from "@app/features/shared"

import { Playground } from "./playground"

export const PlaygroundPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="Playground">
            <Playground />
        </Page>
    )
}
