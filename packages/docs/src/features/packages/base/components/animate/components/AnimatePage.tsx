import { ComponentPage } from "@app/features/shared"
import { AnimateDemo } from "./AnimateDemo"

export const AnimatePage = (_props: unknown): JSX.Element => {
    return (
        <ComponentPage
            componentName="Animate"
            demo={<AnimateDemo />}
            toc={[
                { text: "Overview", hash: "overview" },
                { text: "Props",    hash: "props" },
                { text: "Demo",     hash: "animate-demo-1" },
            ]}
        />
    )
}

