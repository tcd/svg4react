import { ComponentPage } from "@app/features/shared"
import { UseDemo } from "./UseDemo"

export const UsePage = (_props: unknown): JSX.Element => {
    return (
        <ComponentPage
            componentName="Use"
            demo={<UseDemo />}
            toc={[
                { text: "Overview", hash: "overview" },
                { text: "Props",    hash: "props" },
                { text: "Demo",     hash: "use-demo-1" },
            ]}
        />
    )
}

