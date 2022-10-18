import { ComponentPage } from "@app/features/shared"
import { MaskDemo } from "./MaskDemo"

export const MaskPage = (_props: unknown): JSX.Element => {
    return (
        <ComponentPage
            componentName="Mask"
            demo={<MaskDemo />}
            toc={[
                { text: "Overview", hash: "overview" },
                { text: "Props",    hash: "props" },
                { text: "Demo",     hash: "mask-demo-1" },
            ]}
        />
    )
}
