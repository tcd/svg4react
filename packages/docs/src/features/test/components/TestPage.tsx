
import { Card } from "@app/features/shared"

import { parseText } from "@app/features/shared/components/CustomTypography/parse-text"
import { CustomTypographyF } from "@app/features/shared/components/CustomTypography/CustomTypographyF"

// const CODE_PATTERN = /(?<code>`[^`]+`)/gm
const CODE_PATTERN = /`[^`]+`/gm

export const TestPage = (_props: unknown): JSX.Element => {

    const text = "Using `d` as a `CSS` property"
    const resultingSegments = parseText(text)

    const $matches = resultingSegments.map((x, i) => {
        return (
            <li key={i}>{JSON.stringify(x)}</li>
        )
    })

    return (
        <Card title="Testing">
            {/* input: {text}
            <br />
            <br />
            matches:
            <br />
            <ul>
                {$matches}
            </ul> */}
        </Card>
    )
}
