import { useContext } from "react"
import { LiveContext } from "react-live"

import { LiveDemoRawPreview } from "./LiveDemoRawPreview"

export type LiveDemoPreviewProps = {
    showRaw: boolean
}

export const LiveDemoPreview = (props: LiveDemoPreviewProps): JSX.Element => {

    const {
        showRaw = false,
    } = props

    const {
        // TODO: File issue with https://github.com/FormidableLabs/react-live for better typings
        // @ts-ignore: next-line
        element: Element = null,
    } = useContext(LiveContext)

    if (Element === null) {
        return null
    }

    if (showRaw) {
        return <LiveDemoRawPreview />
    }

    return <Element />
}
