import { Stack } from "@mui/material"

import { PageV2, ComponentOverview } from "@app/features/shared"
import { AnimateDemo } from "./AnimateDemo"

export const AnimatePage = (_props: unknown): JSX.Element => {
    return (
        <PageV2
            title="<Animate>"
            toc={[
                { text: "Overview", hash: "overview" },
                { text: "Props",    hash: "props" },
                { text: "Demo",     hash: "animate-demo-1" },
            ]}
        >
            <Stack spacing={4}>
                <ComponentOverview componentName="Animate" />
                <AnimateDemo />
            </Stack>
        </PageV2>
    )
}

