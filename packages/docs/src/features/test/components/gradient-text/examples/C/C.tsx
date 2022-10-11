import { Card, LogoStack } from "@app/features/shared"

import { V3 } from "./V3"

export const C = (_props: unknown): JSX.Element => {
    return (
        <Card title="Gradient Text">
            <LogoStack>
                <V3 />
            </LogoStack>
        </Card>
    )
}
