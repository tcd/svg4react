import type { SxProps } from "@mui/system"

import { componentToString } from "@app/util"
import { Highlight, HighlightLanguage } from "./Highlight"

export type RenderRawProps = {
    children: React.ReactElement
    language: HighlightLanguage
    sx?: SxProps
}

export const RenderRaw = (props: RenderRawProps): JSX.Element => {

    const {
        children = null,
        language = "tsx",
        sx = {},
    } = props

    const output = componentToString(children)

    return (
        <Highlight
            content={output}
            language={language}
            sx={sx}
        />
    )
}
