import { ComponentPage } from "@app/features/shared"
import { TSpanDemo } from "./TSpanDemo"

export const TSpanPage = (_props: unknown): JSX.Element => {
    return (
        <ComponentPage
            componentName="TSpan"
            demo={<TSpanDemo />}
            toc={[
                { text: "Overview", hash: "overview" },
                { text: "Props",    hash: "props" },
                { text: "Demo",     hash: "tspan-demo-1" },
            ]}
        />
    )
}

