import { useEffect, useRef } from "react"
import { Box } from "@mui/material"
import { highlightElement } from "prismjs"
// import "prismjs/components/prism-json"
import "prismjs/components/prism-markup"
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-jsx"
import "prismjs/components/prism-tsx"

import "prismjs/plugins/line-numbers/prism-line-numbers"
// import "prismjs/plugins/toolbar/prism-toolbar"
// import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js"

import type { ISxProps as SxProps } from "@app/theme"
import { trimCode } from "@app/util"

export type HighlightLanguage = "tsx" | "html" | "typescript"

export interface HighlightProps {
    content?: string
    sx?: SxProps
    /** @default "language-tsx" */
    language?: HighlightLanguage
}

export const Highlight = (props: HighlightProps): JSX.Element => {

    const {
        content,
        sx = {},
        language = "tsx",
    } = props

    const codeRef = useRef()

    let highlightLanguage

    switch (language) {
        case "tsx":        highlightLanguage = "language-tsx";  break
        case "html":       highlightLanguage = "language-html"; break
        case "typescript": highlightLanguage = "language-typescript"; break
        default:           highlightLanguage = "language-tsx";  break
    }

    useEffect(() => {
        if (!codeRef?.current) { return }
        highlightElement(codeRef.current)
    }, [codeRef, content])

    const trimmedContent = trimCode(content)

    return (
        <Box component="pre" sx={sx}>
            <code
                ref={codeRef}
                className={[
                    "line-numbers",
                    // "language-jsx",
                    // "language-tsx",
                    highlightLanguage,
                ].join(" ")}
            >{trimmedContent}</code>
        </Box>
    )
}
