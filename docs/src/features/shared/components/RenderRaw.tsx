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

    const exampleOutput = componentToString(children)
    return (
        <Highlight
            content={exampleOutput}
            language={language}
            sx={sx}
        />
    )
}
