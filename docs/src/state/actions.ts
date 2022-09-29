import { FeatureKeys } from "@app/util"
import { CoreActions } from "@app/features/core"
import { PlaygroundActions } from "@app/features/playground"
import { RoutingActions } from "@app/features/routing"

export type AppActions = {
    [FeatureKeys.Core]:       typeof CoreActions
    [FeatureKeys.Playground]: typeof PlaygroundActions
    [FeatureKeys.Routing]:    typeof RoutingActions
}

export const Actions: AppActions = {
    Core:       CoreActions,
    Playground: PlaygroundActions,
    Routing:    RoutingActions,
}
