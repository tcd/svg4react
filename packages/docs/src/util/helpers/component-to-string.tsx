import { renderToString } from "react-dom/server"
import { html_beautify, HTMLBeautifyOptions } from "js-beautify"

export const componentToString = (el: React.ReactElement, wrap: boolean = false): string => {
    const rendered = renderToString(el)
    if (wrap) {
        const formatted = html_beautify(rendered, options_wrap)

        const reFormatted = beautify_wrap(formatted)
        return reFormatted
    } else {
        const formatted = html_beautify(rendered, options_noWrap)
        const reFormatted = beautify_nowrap(formatted)
        return reFormatted
    }
}

// =============================================================================

const options: HTMLBeautifyOptions = {
    end_with_newline: true,
    indent_size: 4,
}

const options_wrap: HTMLBeautifyOptions = {
    ...options,
    wrap_attributes: "force-aligned",
    wrap_line_length: 1,
}

const options_noWrap: HTMLBeautifyOptions = {
    ...options,
}

// =============================================================================

const PATTERNS: Record<string, [RegExp, string]> = {
    selfClosingTag: [
        /(\n\s+)?(><\/[a-z]+>)$/gm,
        " />",
    ],
    /** FIXME: doesn't exactly work */
    wrapFirstAttribute: [
        /(^\s+)?(<[a-z]+)\s/gm,
        "$1$2\n$1     ",
    ],
}

const beautify_wrap = (val: string): string => {
    return val
        .replaceAll(...PATTERNS.selfClosingTag)
        .replaceAll(...PATTERNS.wrapFirstAttribute)
}

const beautify_nowrap = (val: string): string => {
    return val
        .replaceAll(...PATTERNS.selfClosingTag)
}
