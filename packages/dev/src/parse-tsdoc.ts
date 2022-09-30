/* eslint-disable no-console */
import { join } from "path"
import { readFile } from "fs/promises"

import { MONOREPO_ROOT } from "./monorepo-root.js"


// =============================================================================
// typedoc
// =============================================================================

/**
 * @see https://github.com/TypeStrong/typedoc/blob/7ceda7b96651441924c6fd2f1476fec77da7099e/src/lib/converter/comments/lexer.ts
 */

export const TokenSyntaxKind = {
    Text: "text",
    NewLine: "new_line",
    OpenBrace: "open_brace",
    CloseBrace: "close_brace",
    Tag: "tag",
    Code: "code",
    TypeAnnotation: "type",
}

// =============================================================================
// Main
// =============================================================================


const main = async () => {
    const inputPath = join(MONOREPO_ROOT, "packages", "core", "tmp", "svg4react.d.json")
    // console.log(inputPath)
    const inputString = await readFile(inputPath)
    // @ts-ignore: next-line
    const input = JSON.parse(inputString)?.children
    // console.log(input)

    const svg = input.find((x: any) => x.name ==="Svg" )
    console.log(svg)
}

try {
    await main()
    process.exit(0)
} catch (error) {
    console.error(error)
    process.exit(1)
}

