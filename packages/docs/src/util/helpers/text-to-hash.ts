function makeUnique(hash: string, unique: Record<string, boolean>, i = 1): string {
    const uniqueHash = i === 1 ? hash : `${hash}-${i}`

    if (!unique[uniqueHash]) {
        unique[uniqueHash] = true
        return uniqueHash
    }

    return makeUnique(hash, unique, i + 1)
}

/**
 * Copied from [MUI](https://github.com/mui/material-ui/blob/a52c566848b70b1a78314443010c170b390b8ecc/docs/packages/markdown/textToHash.js)
 *
 * @returns a string that is safe to use in fragment links
 */
export function textToHash(text: string, unique: Record<string, boolean> = {}): string {
    return makeUnique(
        encodeURI(
            text
                .toLowerCase()
                .replace(/<\/?[^>]+(>|$)/g, "") // remove HTML
                .replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>|&#39;/g, "")
                .replace(/[!@#$%^&*()=_+[\]{}`~;:'"|,.<>/?\s]+/g, "-")
                .replace(
                    /([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])\uFE0F?/g,
                    "",
                ) // remove emojis
                .replace(/-+/g, "-")
                .replace(/^-|-$/g, ""),
        ),
        unique,
    )
}
