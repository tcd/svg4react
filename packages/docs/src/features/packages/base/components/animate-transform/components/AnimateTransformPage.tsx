import { ComponentPage } from "@app/features/shared"
import { AnimateTransformDemo } from "./AnimateTransformDemo"

export const AnimateTransformPage = (_props: unknown): JSX.Element => {
    return (
        <ComponentPage
            componentName="AnimateTransform"
            demo={<AnimateTransformDemo />}
            toc={[
                { text: "Overview", hash: "overview" },
                { text: "Props",    hash: "props" },
                { text: "Demo",     hash: "animate-transform-demo-1" },
            ]}
        />
    )
}

