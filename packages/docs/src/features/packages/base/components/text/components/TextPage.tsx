import { ComponentPage } from "@app/features/shared"
import { TextDemo } from "./TextDemo"

export const TextPage = (_props: unknown): JSX.Element => {
    return (
        <ComponentPage
            componentName="Text"
            demo={<TextDemo />}
            toc={[
                { text: "Overview", hash: "overview" },
                { text: "Props",    hash: "props" },
                { text: "Demo",     hash: "text-demo-1" },
            ]}
        />
    )
}

