import { Card, LogoStack } from "@app/features/shared"
import { V0 } from "./V0"
import { V1 } from "./V1"

export const Atom = (_props: unknown): JSX.Element => {
    return (
        <Card title="atom">
            <LogoStack>
                <V0 />
                <V1 />
            </LogoStack>
        </Card>
    )
}
