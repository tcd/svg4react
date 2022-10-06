/* eslint-disable react/no-children-prop */
import { useTheme } from "@mui/material"
import type { Options as ReactMarkdownOptions } from "react-markdown"
import ReactMarkdown from "react-markdown"
// @ts-ignore: next-line
import remarkRemoveComments from "remark-remove-comments"
import remarkGfm from "remark-gfm"
import remarkBreaks from "remark-breaks"
import rehypeExternalLinks from "rehype-external-links"


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

    const cleanContent = cleanMarkdownString(content)

    return (
        <ReactMarkdown
            children={cleanContent}
            className={`markdown-body-${theme.palette.mode}`}
            {...options}
        />
    )
}

// =============================================================================

const cleanMarkdownString = (input: string): string => {
    return `${input}`
        .replace(/^"/, "")
        .replace(/"$/, "")
        .replaceAll(/(?<!\n|\|)\n{1}(?!\n)/gm, " ") // only break for two newlines
        .replaceAll(/(?<!\\n)\\n{1}(?!\\n)/gm, " ") // only break for two newlines
        .replaceAll("\\n", "\n") // unescape json
}

const options: Omit<ReactMarkdownOptions, "children"> = {
    skipHtml: false,
    // linkTarget: "_blank",
    remarkPlugins: [
        remarkRemoveComments,
        remarkGfm,
        remarkBreaks,
    ],
    rehypePlugins: [
        [rehypeExternalLinks, { target: "_blank", rel: ["noopener noreferrer"] }],
    ],
}
