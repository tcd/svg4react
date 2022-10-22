import { ComponentPage } from "@app/features/shared"
import { PatternDemo } from "./PatternDemo"

export const PatternPage = (_props: unknown): JSX.Element => {
    return (
        <ComponentPage
            componentName="Pattern"
            demo={<PatternDemo />}
            toc={[
                { text: "Overview", hash: "overview" },
                { text: "Props",    hash: "props" },
                { text: "Demo",     hash: "pattern-demo-1" },
            ]}
        />
    )
}

