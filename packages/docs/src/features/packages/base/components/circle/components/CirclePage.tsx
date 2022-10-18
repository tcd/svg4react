import { ComponentPage } from "@app/features/shared"
import { CircleDemo } from "./CircleDemo"

export const CirclePage = (_props: unknown): JSX.Element => {
    return (
        <ComponentPage
            componentName="Circle"
            demo={<CircleDemo />}
            toc={[
                { text: "Overview", hash: "overview" },
                { text: "Props",    hash: "props" },
                { text: "Demo",     hash: "circle-demo-1" },
            ]}
        />
    )
}

