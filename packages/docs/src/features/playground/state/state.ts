import { createSlice } from "@reduxjs/toolkit"

import { FeatureKeys, trimCode } from "@app/util"
import { reducers } from "./reducers"

// =============================================================================

export interface PlaygroundState {
    value: string
}

// =============================================================================

const defaultValue = trimCode(`
import * as svg4react from "svg4react"
import {
    Svg,
    Circle,
} from "svg4react"

render(
    <Svg size="75%" vb={[100]}>
        <Circle
            coordinates={[50, 50]}
            r="50"
            fill="lightseagreen"
        />
    </Svg>
)
`)

export const INITIAL_PLAYGROUND_STATE: PlaygroundState = {
    value: defaultValue,
}

// =============================================================================

export const PlaygroundSlice = createSlice({
    name: FeatureKeys.Playground,
    initialState: INITIAL_PLAYGROUND_STATE,
    reducers: reducers,
})
