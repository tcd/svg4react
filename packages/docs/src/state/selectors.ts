import { FeatureKeys } from "@app/util"
import { CoreSelectors } from "@app/features/core"
import { PlaygroundSelectors } from "@app/features/playground"
import { RoutingSelectors } from "@app/features/routing"

export type AppSelectors = {
    [FeatureKeys.Core]:       typeof CoreSelectors
    [FeatureKeys.Playground]: typeof PlaygroundSelectors
    [FeatureKeys.Routing]:    typeof RoutingSelectors
}

export const Selectors: AppSelectors = {
    Core:       CoreSelectors,
    Playground: PlaygroundSelectors,
    Routing:    RoutingSelectors,
}
