import { renderToString } from "react-dom/server"
import { html_beautify, HTMLBeautifyOptions } from "js-beautify"

const options: HTMLBeautifyOptions = {
    indent_size: 4,
    wrap_attributes: "force",
    end_with_newline: true,
}

export const componentToString = (el: React.ReactElement): string => {
    const rendered = renderToString(el)
    const formatted = html_beautify(rendered, options)
    return formatted
}
