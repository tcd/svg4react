import { useEffect, useRef } from "react"
import { Box } from "@mui/material"
import { highlightElement } from "prismjs"
import "prismjs/components/prism-typescript"

import type { ISxProps as SxProps } from "@app/theme"
import { ThemeVars } from "@app/theme"

export interface PropTypeCellProps {
    content?: string
}

export const PropTypeCell = (props: PropTypeCellProps): JSX.Element => {

    const { content } = props

    const codeRef = useRef()

    useEffect(() => {
        if (!codeRef?.current) { return }
        highlightElement(codeRef.current)
    }, [codeRef, content])

    return (
        <Box component="pre" sx={sx}>
            <code ref={codeRef} className="language-props">{content}</code>
        </Box>
    )
}

const sx: SxProps = {
    display: "inline-block",
    fontFamily: ThemeVars.fontFamily.monospace,
    // fontSize: "85%",
    fontWeight: 300,
    borderRadius: "6px",
    padding: "0.3em 0.5em !important",
    margin: "0px",
}
