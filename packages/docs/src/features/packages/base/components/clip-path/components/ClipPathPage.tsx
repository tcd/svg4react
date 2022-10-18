import { ComponentPage } from "@app/features/shared"
import { ClipPathDemo } from "./ClipPathDemo"

export const ClipPathPage = (_props: unknown): JSX.Element => {
    return (
        <ComponentPage
            componentName="ClipPath"
            demo={<ClipPathDemo />}
            toc={[
                { text: "Overview", hash: "overview" },
                { text: "Props",    hash: "props" },
                { text: "Demo",     hash: "clip-path-demo-1" },
            ]}
        />
    )
}

