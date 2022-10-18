import { ComponentPage } from "@app/features/shared"
import { LineDemo } from "./LineDemo"

export const LinePage = (_props: unknown): JSX.Element => {
    return (
        <ComponentPage
            componentName="Line"
            demo={<LineDemo />}
            toc={[
                { text: "Overview", hash: "overview" },
                { text: "Props",    hash: "props" },
                { text: "Demo",     hash: "line-demo-1" },
            ]}
        />
    )
}

