import { Page } from "@app/features/shared"

import { CircleDemo } from "./CircleDemo"

export const CirclePage = (_props: unknown): JSX.Element => {
    return (
        <Page title="<Circle>">
            <CircleDemo />
        </Page>
    )
}

