import type { SxProps } from "@mui/material"
import { Box } from "@mui/material"

import { componentToString } from "@app/util"
import { Highlight, HighlightLanguage } from "./Highlight"

export type RenderRawProps = {
    children: React.ReactElement
    language: HighlightLanguage
    BoxSx?: SxProps
    HighlightSx?: SxProps
}

export const RenderRaw = (props: RenderRawProps): JSX.Element => {

    const {
        children = null,
        language = "tsx",
        HighlightSx = {},
        BoxSx = {},
    } = props

    const output = componentToString(children)

    return (
        <Box sx={BoxSx}>
            <Highlight
                content={output}
                language={language}
                sx={HighlightSx}
            />
        </Box>
    )
}
