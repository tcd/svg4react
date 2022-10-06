import { ComponentPage } from "@app/features/shared"
import { StopDemo } from "./StopDemo"

export const StopPage = (_props: unknown): JSX.Element => {
    return (
        <ComponentPage componentName="Stop">
            <StopDemo />
        </ComponentPage>
    )
}
