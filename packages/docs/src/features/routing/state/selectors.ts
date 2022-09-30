import type { Location } from "history"

import type { RootState } from "@app/state"
import type { RoutingState } from "./state"

/** @private */
const _selectSlice = (rootState: RootState): RoutingState => {
    return rootState?.Routing
}

/**
 * An entry in the history stack.
 *
 * A location contains information about the URL path,
 * as well as possibly some arbitrary state and a key.
 */
const selectLocation = (rootState: RootState): Location => {
    return _selectSlice(rootState)?.location
}

/**
 * Previous entries in the history stack.
 */
const selectPreviousLocations = (rootState: RootState) => {
    return _selectSlice(rootState)?.previousLocations
}

/**
 * Previous entries to the history stack.
 */
const selectPreviousLocationChanges = (rootState: RootState) => {
    return _selectSlice(rootState)?.previousLocationChanges
}

export const RoutingSelectors = {
    location: selectLocation,
    previousLocations: selectPreviousLocations,
    previousLocationChanges: selectPreviousLocationChanges,
}
