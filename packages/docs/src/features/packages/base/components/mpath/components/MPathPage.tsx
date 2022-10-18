import { ComponentPage } from "@app/features/shared"
import { MPathDemo } from "./MPathDemo"

export const MPathPage = (_props: unknown): JSX.Element => {
    return (
        <ComponentPage
            componentName="MPath"
            demo={<MPathDemo />}
            toc={[
                { text: "Overview", hash: "overview" },
                { text: "Props",    hash: "props" },
                { text: "Demo",     hash: "mpath-demo-1" },
            ]}
        />
    )
}

