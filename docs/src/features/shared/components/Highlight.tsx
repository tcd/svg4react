import { useEffect, useRef, useState } from "react"
import { Box } from "@mui/material"
import { highlightElement } from "prismjs"
// import "prismjs/components/prism-json";
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-jsx"
import "prismjs/components/prism-tsx"

import "prismjs/plugins/line-numbers/prism-line-numbers"

import type { ISxProps as SxProps } from "@app/theme"
import { trimCode } from "@app/util"

export interface HighlightProps {
    content?: string
    sx?: SxProps
}

export const Highlight = (props: HighlightProps): JSX.Element => {

    const {
        content,
        sx = {},
    } = props

    const [highlighted, setHighlighted] = useState(false)
    const codeRef = useRef()

    useEffect(() => {
        if (!highlighted && codeRef?.current) {
            highlightElement(codeRef.current)
            setHighlighted(true)
        }
    }, [codeRef, highlighted, setHighlighted])

    const trimmedContent = trimCode(content)

    return (
        <Box sx={sx}>
            <pre>
                <code
                    ref={codeRef}
                    className={[
                        "line-numbers",
                        // "language-jsx",
                        // "language-tsx",
                        "language-tsx",
                    ].join(" ")}
                >{trimmedContent}</code>
            </pre>
        </Box>
    )
}
