import { ComponentPage } from "@app/features/shared"
import { MarkerDemo } from "./MarkerDemo"

export const MarkerPage = (_props: unknown): JSX.Element => {
    return (
        <ComponentPage
            componentName="Marker"
            demo={<MarkerDemo />}
            toc={[
                { text: "Overview", hash: "overview" },
                { text: "Props",    hash: "props" },
                { text: "Demo",     hash: "marker-demo-1" },
            ]}
        />
    )
}

