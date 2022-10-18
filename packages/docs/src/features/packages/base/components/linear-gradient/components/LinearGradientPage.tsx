import { ComponentPage } from "@app/features/shared"
import { LinearGradientDemo } from "./LinearGradientDemo"

export const LinearGradientPage = (_props: unknown): JSX.Element => {
    return (
        <ComponentPage
            componentName="Animate"
            demo={<LinearGradientDemo />}
            toc={[
                { text: "Overview", hash: "overview" },
                { text: "Props",    hash: "props" },
                { text: "Demo",     hash: "linear-gradient-demo-1" },
            ]}
        />
    )
}

