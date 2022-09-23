import { isBlank } from "@mlxb/coolkit"

import type { RootState } from "@app/state"

const _selectSlice = (rootState: RootState) => rootState?.Core

const selectDrawerOpened = (rootState: RootState) => _selectSlice(rootState)?.drawerOpened
const selectOpenedDrawerSections = (rootState: RootState) => _selectSlice(rootState)?.openedDrawerSections
const selectDarkModeEnabled = (rootState: RootState) => _selectSlice(rootState)?.darkModeEnabled

const selectPageTitle = (rootState: RootState) => {
    const pageTitle = _selectSlice(rootState)?.pageTitle
    if (isBlank(pageTitle)) {
        return "svg4react"
    } else {
        return `${pageTitle} | svg4react`
    }
}

// =============================================================================

export const CoreSelectors = {
    drawerOpened: selectDrawerOpened,
    openedDrawerSections: selectOpenedDrawerSections,
    pageTitle: selectPageTitle,
    darkModeEnabled: selectDarkModeEnabled,
}
