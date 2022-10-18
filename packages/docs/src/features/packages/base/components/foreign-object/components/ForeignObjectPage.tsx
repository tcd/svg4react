import { ComponentPage } from "@app/features/shared"
import { ForeignObjectDemo } from "./ForeignObjectDemo"

export const ForeignObjectPage = (_props: unknown): JSX.Element => {
    return (
        <ComponentPage
            componentName="ForeignObject"
            demo={<ForeignObjectDemo />}
            toc={[
                { text: "Overview", hash: "overview" },
                { text: "Props",    hash: "props" },
                { text: "Demo",     hash: "foreign-object-demo-1" },
            ]}
        />
    )
}

