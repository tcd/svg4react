import { ComponentPage } from "@app/features/shared"
import { RectDemo } from "./RectDemo"

export const RectPage = (_props: unknown): JSX.Element => {
    return (
        <ComponentPage
            componentName="Rect"
            demo={<RectDemo />}
            toc={[
                { text: "Overview", hash: "overview" },
                { text: "Props",    hash: "props" },
                { text: "Demo",     hash: "rect-demo-1" },
            ]}
        />
    )
}
