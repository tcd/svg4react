import type { ReactNode } from "react"
// import { Scrollspy } from "@makotot/ghostui"
import Scrollspy from "react-scrollspy"

import { textToHash } from "@app/util"

export type ContentsProps = {
    titles: string[]
}

export const Contents = (props: ContentsProps): JSX.Element => {

    const {
        titles = [],
    } = props

    const ids: string[] = []
    const $sections: ReactNode[] = []

    for (const title of titles) {
        const id = textToHash(title)
        ids.push(id)
        $sections.push(
            <li key={id}>
                <a href={`#${id}`}>
                    {title}
                </a>
            </li>,
        )
    }

    return (
        <Scrollspy
            className="scrollspy"
            items={ids}
            currentClassName="isCurrent"
            rootEl="#root"
            offset={800}
        >
            <li><a href="#section-1">section 1</a></li>
            <li><a href="#section-2">section 2</a></li>
            <li><a href="#section-3">section 3</a></li>
            <li><a href="#section-4">section 4</a></li>
            <li><a href="#section-5">section 5</a></li>
        </Scrollspy>
    )
}
