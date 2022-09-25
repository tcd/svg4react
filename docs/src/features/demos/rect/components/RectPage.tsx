import { Page } from "@app/features/shared"

import { RectDemo } from "./RectDemo"

export const RectPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="Rect">
            <RectDemo />
        </Page>
    )
}
