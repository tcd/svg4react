import type { ReactNode } from "react"
import type { Element } from "hast"

import { Highlight } from "@app/features/shared/components/Highlight"

type MarkdownCodeBlockProps = Omit<JSX.IntrinsicElements["code"], "ref"> &  {
    node: Element,
    children?: ReactNode[]
    className?: string
    inline?: boolean
}

export const MarkdownCodeBlock = (props: MarkdownCodeBlockProps): JSX.Element => {

    const {
        node,
        inline,
        className,
        children,
        ...otherProps
    } = props

    const match = /language-(\w+)/.exec(className || "")

    return !inline && match ? (
        <Highlight
            // @ts-ignore: next-line
            language={match[1]}
            content={String(children).replace(/\n$/, "")}
        />
    ) : (
        <code className={className} {...otherProps}>
            {children}
        </code>
    )
}
