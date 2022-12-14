import { Card, LogoStack } from "@app/features/shared"
import { V0 } from "./V0"
import { V1 } from "./V1"
import { V2 } from "./V2"

export const Svg4React = (_props: unknown): JSX.Element => {
    return (
        <Card title="svg4react">
            <LogoStack>
                <V0 />
                <V1 />
                <V2 />
            </LogoStack>
        </Card>
    )
}
