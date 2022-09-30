import type { RootState } from "@app/state"

const _selectSlice = (rootState: RootState) => rootState?.Playground

const selectValue = (rootState: RootState): string => _selectSlice(rootState)?.value

// =============================================================================

export const PlaygroundSelectors = {
    value: selectValue,
}
