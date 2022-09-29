import { useContext } from "react"
import { Alert, AlertTitle, Box } from "@mui/material"
import { LiveContext } from "react-live"

import { DocsSx } from "@app/theme"
import { RenderRaw } from "@app/features/shared"

export type LiveDemoPreviewProps = {
    showRaw: boolean
}

export const LiveDemoPreview = (props: LiveDemoPreviewProps): JSX.Element => {

    const {
        showRaw = false,
    } = props

    const {
        // TODO: File issue with https://github.com/FormidableLabs/react-live for better typings
        // @ts-ignore: next-line
        element: Element,
    } = useContext(LiveContext)

    if (showRaw) {
        return (
            <RenderRaw language="html" sx={DocsSx.LiveDemo.rawPreview}>
                {Element ? <Element /> : null}
            </RenderRaw>
        )
    }

    return (
        <>
            {Element ? <Element /> : null}
        </>
    )
}
