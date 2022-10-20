type ParseResult = [
    text: string,
    format: "normal" | "code"
]

const CODE_PATTERN = /`[^`]+`/gm

export const parseText = (text: string): ParseResult[] => {
    let lastEnd = 0
    const resultingSegments: ParseResult[] = []

    const matches = [...text.matchAll(CODE_PATTERN)]

    if (!(matches.length > 0)) {
        return [[text, "normal"]]
    }

    for (const matchData of matches) {
        const match = matchData[0]
        const index = matchData.index
        const segment = text.slice(lastEnd, index)
        resultingSegments.push([segment, "normal"])
        resultingSegments.push([match.replaceAll("`", ""), "code"])
        lastEnd = lastEnd + segment.length + match.length
    }

    const lastSegment = text.slice(lastEnd)
    resultingSegments.push([lastSegment, "normal"])

    return resultingSegments
}
