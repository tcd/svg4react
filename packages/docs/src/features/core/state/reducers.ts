import type { PayloadAction } from "@reduxjs/toolkit"

import type { CoreState } from "./state"
import { INITIAL_CORE_STATE as INITIAL_STATE } from "./state"

export const reducers = {
    resetState: () => INITIAL_STATE,
    // -------------------------------------------------------------------------
    // Page Title
    // -------------------------------------------------------------------------
    setPageTitle: (state: CoreState, { payload }: PayloadAction<string>) => {
        state.pageTitle = payload
    },
    clearPageTitle: (state: CoreState) => {
        state.pageTitle = null
    },
    // -------------------------------------------------------------------------
    // Routing
    // -------------------------------------------------------------------------
    locationChange: (state: CoreState, _action: PayloadAction<LocationChangePayload>) => state,
    // -------------------------------------------------------------------------
    // Dark Mode
    // -------------------------------------------------------------------------
    toggleDarkMode: (state: CoreState) => {
        state.darkModeEnabled = !state.darkModeEnabled
    },
    // -------------------------------------------------------------------------
    // Drawer
    // -------------------------------------------------------------------------
    toggleDrawer: (state: CoreState) => {
        state.drawerOpened = !state.drawerOpened
    },
    openDrawer: (state: CoreState) => {
        state.drawerOpened = true
    },
    closeDrawer: (state: CoreState) => {
        state.drawerOpened = false
    },
    openDrawerSection: (state: CoreState, { payload }: PayloadAction<string>) => {
        state.openedDrawerSections.push(payload)
    },
    closeDrawerSection: (state: CoreState, { payload }: PayloadAction<string>) => {
        state.openedDrawerSections = state.openedDrawerSections.filter(x => x != payload)
    },
    toggleDrawerSection: (state: CoreState, { payload }: PayloadAction<string>) => {
        if (state.openedDrawerSections.includes(payload)) {
            state.openedDrawerSections = state.openedDrawerSections.filter(x => x != payload)
        } else {
            state.openedDrawerSections.push(payload)
        }
    },
}
