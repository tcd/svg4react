import { LiveProvider, withLive } from "react-live"

import { trimCode } from "@app/util"
import { cleanCode } from "@app/features/live-demo"
import type { LiveDemo2Props } from "./types"

import { LiveDemo2Wrapped } from "./LiveDemo2.wrapped"

const _LiveDemo2 = (props: LiveDemo2Props): JSX.Element => {

    const {
        scope,
        inline = false,
    } = props

    return (
        <LiveProvider
            code={trimCode(props?.code)}
            scope={scope}
            noInline={!!!inline}
            transformCode={(code) => cleanCode(code)}
        >
            <LiveDemo2Wrapped {...props} />
        </LiveProvider>
    )
}

export const LiveDemo2 = withLive(_LiveDemo2)
