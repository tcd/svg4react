import { createSlice } from "@reduxjs/toolkit"

import { FeatureKeys } from "@app/util"
import { reducers } from "./reducers"

// =============================================================================

export interface CoreState {
    pageTitle: string
    drawerOpened: boolean
    openedDrawerSections: string[]
    darkModeEnabled: boolean
}

// =============================================================================

export const INITIAL_CORE_STATE: CoreState = {
    pageTitle: "",
    drawerOpened: false,
    openedDrawerSections: [],
    // darkModeEnabled: window.matchMedia("(prefers-color-scheme: dark)").matches ? true : false,
    darkModeEnabled: false,
}

// =============================================================================

export const CoreSlice = createSlice({
    name: FeatureKeys.Core,
    initialState: INITIAL_CORE_STATE,
    reducers: reducers,
})
