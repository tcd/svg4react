import { ComponentPage } from "@app/features/shared"
import { SymbolDemo } from "./SymbolDemo"

export const SymbolPage = (_props: unknown): JSX.Element => {
    return (
        <ComponentPage
            componentName="Symbol"
            demo={<SymbolDemo />}
            toc={[
                { text: "Overview", hash: "overview" },
                { text: "Props",    hash: "props" },
                { text: "Demo",     hash: "symbol-demo-1" },
            ]}
        />
    )
}

