import { useContext } from "react"
import { LiveContext } from "react-live"

import { LiveDemo2RawPreview } from "./LiveDemo2RawPreview"

export type LiveDemo2PreviewProps = {
}

export const Live2DemoPreview = (props: LiveDemo2PreviewProps): JSX.Element => {

    const {
        // TODO: File issue with https://github.com/FormidableLabs/react-live for better typings
        // @ts-ignore: next-line
        element: Element = null,
    } = useContext(LiveContext)

    let $content = (
        <div></div>
    )

    if (Element !== null) {
        $content = (
            <>
                <Element />
            </>
        )
    }

    return (
        <>
            {$content}
        </>
    )
}

