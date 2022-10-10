import type { ReactNode } from "react"
import { List, ListItemButton } from "@mui/material"

const credit: AttributionItemProps[] = [
    {
        content: "The majority of the demos & examples on this site are copied directly from the MDN Web Docs for SVGs.",
        url: "https://developer.mozilla.org/en-US/docs/Web/SVG",
    },
    // {
    //     content: `animation icon by Adrien Coquet from Noun Project`,
    //     url: "https://thenounproject.com/browse/icons/term/animation/",
    // },
]

export const Attribution = (_props: unknown): JSX.Element => {

    const $credits = credit.map((props, index) => <AttributionItem key={index} {...props} />)

    return (
        <List>
            {$credits}
        </List>
    )
}

export type AttributionItemProps = {
    content: ReactNode
    url: string
}

const AttributionItem = (props: AttributionItemProps): JSX.Element => {
    const { url, content } = props

    return (
        <ListItemButton
            component="a"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
        >
            {content}
        </ListItemButton>
    )
}
