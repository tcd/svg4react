import { combineReducers } from "@reduxjs/toolkit"

import { FeatureKeys } from "@app/util"
import { CoreSlice } from "@app/features/core"
import { PlaygroundSlice } from "@app/features/playground"
import { RoutingSlice } from "@app/features/routing"

export const rootReducer = combineReducers({
    [FeatureKeys.Core]:       CoreSlice.reducer,
    [FeatureKeys.Playground]: PlaygroundSlice.reducer,
    [FeatureKeys.Routing]:    RoutingSlice.reducer,
})
