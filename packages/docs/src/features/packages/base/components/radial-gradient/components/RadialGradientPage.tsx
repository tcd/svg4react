import { ComponentPage } from "@app/features/shared"
import { RadialGradientDemo } from "./RadialGradientDemo"

export const RadialGradientPage = (_props: unknown): JSX.Element => {
    return (
        <ComponentPage
            componentName="RadialGradient"
            demo={<RadialGradientDemo />}
            toc={[
                { text: "Overview", hash: "overview" },
                { text: "Props",    hash: "props" },
                { text: "Demo",     hash: "radial-gradient-demo-1" },
            ]}
        />
    )
}

