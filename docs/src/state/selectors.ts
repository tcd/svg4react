import { FeatureKeys } from "@app/util"
import { CoreSelectors } from "@app/features/core"
import { RoutingSelectors } from "@app/features/routing"

export type AppSelectors = {
    [FeatureKeys.Core]:    typeof CoreSelectors
    [FeatureKeys.Routing]: typeof RoutingSelectors
}

export const Selectors: AppSelectors = {
    Core:    CoreSelectors,
    Routing: RoutingSelectors,
}
