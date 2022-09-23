import { FeatureKeys } from "@app/util"
import { CoreActions } from "@app/features/core"
import { RoutingActions } from "@app/features/routing"

export type AppActions = {
    [FeatureKeys.Core]:    typeof CoreActions
    [FeatureKeys.Routing]: typeof RoutingActions
}

export const Actions: AppActions = {
    Core:    CoreActions,
    Routing: RoutingActions,
}
