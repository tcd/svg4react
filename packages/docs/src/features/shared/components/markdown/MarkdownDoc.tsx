/* eslint-disable react/no-children-prop */
import { useTheme } from "@mui/material"
import type { Options as ReactMarkdownOptions } from "react-markdown"
import ReactMarkdown from "react-markdown"
// @ts-ignore: next-line
import remarkRemoveComments from "remark-remove-comments"
import remarkGfm from "remark-gfm"
import remarkBreaks from "remark-breaks"

import { cleanMarkdownString } from "@app/util"
import { MarkdownLink } from "./components"

export interface MarkdownDocProps {
    content: string
}

/**
 * Used to render markdown from local files.
 */
export const MarkdownDoc = (props: MarkdownDocProps): JSX.Element => {

    const theme = useTheme()

    const {
        content = "",
    } = props

    if (content === null) {
        return null
    }

    const cleanContent = cleanMarkdownString(content)

    const options: Omit<ReactMarkdownOptions, "children"> = {
        skipHtml: false,
        // linkTarget: "_blank",
        remarkPlugins: [
            remarkRemoveComments,
            remarkGfm,
            remarkBreaks,
        ],
        components: {
            a: MarkdownLink,
        },
    }

    return (
        <ReactMarkdown
            children={cleanContent}
            className={`markdown-body-${theme.palette.mode}`}
            {...options}
        />
    )
}
