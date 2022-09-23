import type { RootState } from "@app/state"

const _selectSlice = (rootState: RootState) => rootState?.Core

const selectDrawerOpened = (rootState: RootState) => _selectSlice(rootState)?.drawerOpened
const selectOpenedDrawerSections = (rootState: RootState) => _selectSlice(rootState)?.openedDrawerSections
const selectDarkModeEnabled = (rootState: RootState) => _selectSlice(rootState)?.darkModeEnabled

const selectPageTitle = (rootState: RootState) => {
    const areaDisplayName = _selectSlice(rootState)?.pageTitle
    if (areaDisplayName == null) {
        return "svg4react"
    } else {
        return `svg4react - ${areaDisplayName}`
    }
}

// =============================================================================

export const CoreSelectors = {
    drawerOpened: selectDrawerOpened,
    openedDrawerSections: selectOpenedDrawerSections,
    pageTitle: selectPageTitle,
    darkModeEnabled: selectDarkModeEnabled,
}
