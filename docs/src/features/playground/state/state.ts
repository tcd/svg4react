import { createSlice } from "@reduxjs/toolkit"

import { FeatureKeys } from "@app/util"
import { reducers } from "./reducers"

// =============================================================================

export interface PlaygroundState {
    value: string
}

// =============================================================================

export const INITIAL_PLAYGROUND_STATE: PlaygroundState = {
    value: "",

}

// =============================================================================

export const PlaygroundSlice = createSlice({
    name: FeatureKeys.Playground,
    initialState: INITIAL_PLAYGROUND_STATE,
    reducers: reducers,
})
