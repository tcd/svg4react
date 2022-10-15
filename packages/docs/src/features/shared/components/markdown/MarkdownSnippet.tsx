/* eslint-disable react/no-children-prop */
import { useTheme } from "@mui/material"
import type { Options as ReactMarkdownOptions } from "react-markdown"
import ReactMarkdown from "react-markdown"
// @ts-ignore: next-line
import remarkRemoveComments from "remark-remove-comments"
import remarkGfm from "remark-gfm"
import remarkBreaks from "remark-breaks"
import rehypeExternalLinks from "rehype-external-links"

import { cleanMarkdownString } from "@app/util"

export interface MarkdownSnippetProps {
    content: string
    /** @default false */
    noExternalLinks?: boolean
}

export const MarkdownSnippet = (props: MarkdownSnippetProps): JSX.Element => {

    const theme = useTheme()

    const {
        content = "",
        noExternalLinks = false,
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
        rehypePlugins: (noExternalLinks ? [] : [
            [rehypeExternalLinks, { target: "_blank", rel: ["noopener noreferrer"] }],
        ]),
    }

    return (
        <ReactMarkdown
            children={cleanContent}
            className={`markdown-body-${theme.palette.mode}`}
            {...options}
        />
    )
}
