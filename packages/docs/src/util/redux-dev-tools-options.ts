import type { EnhancerOptions } from "@redux-devtools/extension"

const blacklist: string[] = [
]

const whitelist: string[] = [
    // "Core/locationChange",
]

export const reduxDevToolsOptions: EnhancerOptions = {
    actionsDenylist: blacklist,
    // actionsAllowlist: whitelist,
    name: "svg4react",
}
