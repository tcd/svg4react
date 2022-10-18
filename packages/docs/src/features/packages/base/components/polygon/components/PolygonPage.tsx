import { ComponentPage } from "@app/features/shared"
import { PolygonDemo } from "./PolygonDemo"

export const PolygonPage = (_props: unknown): JSX.Element => {
    return (
        <ComponentPage
            componentName="Polygon"
            demo={<PolygonDemo />}
            toc={[
                { text: "Overview", hash: "overview" },
                { text: "Props",    hash: "props" },
                { text: "Demo",     hash: "polygon-demo-1" },
            ]}
        />
    )
}

