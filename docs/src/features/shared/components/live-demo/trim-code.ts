import { isBlank } from "@mlxb/coolkit"

export const trimCode = (code: string): string => {

    if (isBlank(code)) {
        return ""
    }

    if (code?.match(/^\n/)) {
        code = code.replace(/^\n/, "")
    }

    if (code?.match(/\n^$/)) {
        code = code.replace(/\n^$/m, "")
    }

    return code
}
