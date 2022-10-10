import { Card, LogoStack } from "@app/features/shared"

import { V0 } from "./V0"
import { V1 } from "./V1"
import { V2 } from "./V2"

export const A = (_props: unknown): JSX.Element => {
    return (
        <Card title="Brenna O'Brien - CodePen">
            <a href="https://codepen.io/brenna/pen/mybQVx">SVG Gradient Filled Text</a>
            <br />
            <LogoStack>
                <V0 />
                <V1 />
                <V2 />
            </LogoStack>
        </Card>
    )
}
