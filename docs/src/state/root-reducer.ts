import { combineReducers } from "@reduxjs/toolkit"

import { FeatureKeys } from "@app/util"
import { CoreSlice } from "@app/features/core"
import { RoutingSlice } from "@app/features/routing"

export const rootReducer = combineReducers({
    [FeatureKeys.Core]:    CoreSlice.reducer,
    [FeatureKeys.Routing]: RoutingSlice.reducer,
})
