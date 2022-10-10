import { Card, LogoStack } from "@app/features/shared"

import { V1 } from "./V1"
// import { V2 } from "./V2"

export const B = (_props: unknown): JSX.Element => {
    return (
        <Card title="yoksel - How to Create (Animated) Text Fills">
            {/* https://tympanus.net/codrops-playground/yoksel/aIjeerkS/editor/html,css,result */}
            <a href="How to Create (Animated) Text Fills">How to Create (Animated) Text Fills</a>
            <br />
            <LogoStack>
                <V1 />
            </LogoStack>
        </Card>
    )
}
