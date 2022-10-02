import { useContext } from "react"
import { LiveContext } from "react-live"

import { DocsSx } from "@app/theme"
import { RenderRaw } from "@app/features/shared"

export const LiveDemo2RawPreview = (_props: unknown): JSX.Element => {
    const {
        // TODO: File issue with https://github.com/FormidableLabs/react-live for better typings
        // @ts-ignore: next-line
        element: Element = null,
    } = useContext(LiveContext)

    let $element = null

    if (Element !== null) {
        $element = <Element />
    }

    return (
        <RenderRaw
            language="html"
            BoxSx={DocsSx.LiveDemo2.preview.raw.box}
            HighlightSx={DocsSx.LiveDemo2.preview.raw.highlight}
        >
            {$element}
        </RenderRaw>
    )
}
