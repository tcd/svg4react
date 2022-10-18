import { ComponentPage } from "@app/features/shared"
import { AnimateMotionDemo } from "./AnimateMotionDemo"

export const AnimateMotionPage = (_props: unknown): JSX.Element => {
    return (
        <ComponentPage
            componentName="AnimateMotion"
            demo={<AnimateMotionDemo />}
            toc={[
                { text: "Overview", hash: "overview" },
                { text: "Props",    hash: "props" },
                { text: "Demo",     hash: "animate-motion-demo-1" },
            ]}
        />
    )
}

