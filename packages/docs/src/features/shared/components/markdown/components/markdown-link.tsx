import type { ReactNode } from "react"
import type { Element } from "hast"
import { Link } from "react-router-dom"

type MarkdownLinkProps = Omit<JSX.IntrinsicElements["a"], "ref"> &  {
    node: Element,
    children?: ReactNode[]
}

export const MarkdownLink = (props: MarkdownLinkProps): JSX.Element => {

    const {
        node,
        href = "",
        ...otherProps
    } = props

    if (href.startsWith("/")) {
        return (
            <Link
                to={href}
                {...otherProps}
            />
        )
    }

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            {...otherProps}
        />
    )
}
