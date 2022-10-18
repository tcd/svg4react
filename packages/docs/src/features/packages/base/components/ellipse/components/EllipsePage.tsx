import { ComponentPage } from "@app/features/shared"
import { EllipseDemo } from "./EllipseDemo"

export const EllipsePage = (_props: unknown): JSX.Element => {
    return (
        <ComponentPage
            componentName="Ellipse"
            demo={<EllipseDemo />}
            toc={[
                { text: "Overview", hash: "overview" },
                { text: "Props",    hash: "props" },
                { text: "Demo",     hash: "ellipse-demo-1" },
            ]}
        />
    )
}
