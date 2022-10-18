import { ComponentPage } from "@app/features/shared"
import { PolylineDemo } from "./PolylineDemo"

export const PolylinePage = (_props: unknown): JSX.Element => {
    return (
        <ComponentPage
            componentName="Polyline"
            demo={<PolylineDemo />}
            toc={[
                { text: "Overview", hash: "overview" },
                { text: "Props",    hash: "props" },
                { text: "Demo",     hash: "polyline-demo-1" },
            ]}
        />
    )
}

