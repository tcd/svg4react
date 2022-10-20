
import { Card } from "@app/features/shared"

import { parseText } from "@app/features/shared/components/CustomTypography/parse-text"
import { CustomTypographyF } from "@app/features/shared/components/CustomTypography/CustomTypographyF"

// const CODE_PATTERN = /(?<code>`[^`]+`)/gm
const CODE_PATTERN = /`[^`]+`/gm

export const TestPage = (_props: unknown): JSX.Element => {

    // let lastEnd = 0
    // const resultingSegments = []
    const text = "Using `d` as a `CSS` property"
    const resultingSegments = parseText(text)
//     // const input = "Using d as a CSS property"
//
//     const matches = [...text.matchAll(CODE_PATTERN)]
//     // const matches = CODE_PATTERN.matchAll(input)
//     // const result = parseText(input)
//
//     if (matches.length > 0) {
//         for (const matchData of matches) {
//             // debugger
//             const match = matchData[0]
//             const index = matchData.index
//             const segment = text.slice(lastEnd, index)
//             console.log(segment)
//             resultingSegments.push([segment, "normal"])
//             resultingSegments.push([match.replaceAll("`", ""), "code"])
//             lastEnd = lastEnd + segment.length + match.length
//             // console.log(match)
//             // match.length
//             // if (firstMatch) {
//             // firstMatch = false
//             // continue
//             // }
//         }
//         const lastSegment = text.slice(lastEnd)
//         resultingSegments.push([lastSegment, "normal"])
//         // console.log(matches)
//         // debugger
//     }

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
            <CustomTypographyF>
                Using `d` as a `CSS` property
            </CustomTypographyF>

        </Card>
    )
}
