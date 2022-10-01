/* eslint-disable react/no-children-prop */
import { useTheme } from "@mui/material"
import type { Options as ReactMarkdownOptions } from "react-markdown"
import ReactMarkdown from "react-markdown"
// @ts-ignore: next-line
import remarkRemoveComments from "remark-remove-comments"
import remarkGfm from "remark-gfm"
import remarkBreaks from "remark-breaks"

export interface MarkdownDocProps {
    content: string
}

export const MarkdownDoc = (props: MarkdownDocProps): JSX.Element => {

    const theme = useTheme()

    const {
        content = "",
    } = props

    if (content === null) {
        return null
    }

    const cleanContent = content
        .replace(/^"/, "")
        .replace(/"$/, "")
        .replaceAll("\\n", "\n")

    return (
        <ReactMarkdown
            children={cleanContent}
            className={`markdown-body-${theme.palette.mode}`}
            {...options}
        />
    )
}

// =============================================================================

const options: Omit<ReactMarkdownOptions, "children"> = {
    skipHtml: false,
    remarkPlugins: [
        remarkRemoveComments,
        remarkGfm,
        remarkBreaks,
    ],
}
