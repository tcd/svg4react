import { ComponentPage } from "@app/features/shared"
import { StopDemo } from "./StopDemo"

export const StopPage = (_props: unknown): JSX.Element => {
    return (
        <ComponentPage
            componentName="Stop"
            demo={<StopDemo />}
            toc={[
                { text: "Overview", hash: "overview" },
                { text: "Props",    hash: "props" },
                { text: "Demo",     hash: "stop-demo-1" },
            ]}
        />
    )
}
