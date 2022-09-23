import type { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import { CoreActions } from "@app/features/core"

import type { RoutingState } from "./state"
import { INITIAL_ROUTING_STATE as INITIAL_STATE } from "./state"

export const reducers = {
    locationChange: (state: RoutingState, { payload }: PayloadAction<LocationChangePayload>) => {
        state.previousLocationChanges.push(payload)
        state.previousLocations.push(state.location)
        state.location = payload.location
        return state
    },
}

export const extraReducers = (builder: ActionReducerMapBuilder<RoutingState>) => {
    builder
        .addCase(CoreActions.resetState, () => INITIAL_STATE)
}
