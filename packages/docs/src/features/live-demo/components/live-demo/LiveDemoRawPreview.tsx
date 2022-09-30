import { useContext } from "react"
import { LiveContext } from "react-live"

import { DocsSx } from "@app/theme"
import { RenderRaw } from "@app/features/shared"

export const LiveDemoRawPreview = (_props: unknown): JSX.Element => {
    const {
        // TODO: File issue with https://github.com/FormidableLabs/react-live for better typings
        // @ts-ignore: next-line
        element: Element = null,
    } = useContext(LiveContext)

    if (Element === null) {
        return null
    }

    return (
        <RenderRaw language="html" sx={DocsSx.LiveDemo.rawPreview}>
            <Element />
        </RenderRaw>
    )
}
