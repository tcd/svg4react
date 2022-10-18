import { ComponentPage } from "@app/features/shared"
import { TextPathDemo } from "./TextPathDemo"

export const TextPathPage = (_props: unknown): JSX.Element => {
    return (
        <ComponentPage
            componentName="TextPath"
            demo={<TextPathDemo />}
            toc={[
                { text: "Overview", hash: "overview" },
                { text: "Props",    hash: "props" },
                { text: "Demo",     hash: "text-path-demo-1" },
            ]}
        />
    )
}

