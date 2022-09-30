import { Page } from "@app/features/shared"

import { SvgDemo } from "./SvgDemo"

export const SvgPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="Svg">
            <SvgDemo />
        </Page>
    )
}
