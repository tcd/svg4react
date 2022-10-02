import { useContext } from "react"
import { LiveContext } from "react-live"
import { Box } from "@mui/material"

import { DocsSx } from "@app/theme"

export const Live2DemoPreview = (_props: unknown): JSX.Element => {

    const {
        // TODO: File issue with https://github.com/FormidableLabs/react-live for better typings
        // @ts-ignore: next-line
        element: Element = null,
    } = useContext(LiveContext)

    let $content = (
        null
    )

    if (Element !== null) {
        $content = <Element />
    }

    return (
        <Box sx={DocsSx.LiveDemo2.preview.live}>
            {$content}
        </Box>
    )
}

