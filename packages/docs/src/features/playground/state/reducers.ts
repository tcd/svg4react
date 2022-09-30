import type { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import { CoreActions } from "@app/features/core"
import type { PlaygroundState } from "./state"
import { INITIAL_PLAYGROUND_STATE as INITIAL_STATE } from "./state"

export const reducers = {
    setValue: (state: PlaygroundState, { payload }: PayloadAction<string>) => {
        state.value = payload
    },
    resetValue: (state: PlaygroundState) => {
        state.value = INITIAL_STATE.value
    },
}

export const extraReducers = (builder: ActionReducerMapBuilder<PlaygroundState>) => {
    builder
        .addCase(CoreActions.resetState, () => INITIAL_STATE)
}
