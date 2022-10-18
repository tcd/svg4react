import { ComponentPage } from "@app/features/shared"
import { SvgDemo } from "./SvgDemo"

export const SvgPage = (_props: unknown): JSX.Element => {
    return (
        <ComponentPage
            componentName="Svg"
            demo={<SvgDemo />}
            toc={[
                { text: "Overview", hash: "overview" },
                { text: "Props",    hash: "props" },
                { text: "Demo",     hash: "svg-demo-1" },
            ]}
        />
)
}
