export const cleanCode = (code: string): string => {
    const cleaned =
        `${code}`
            .replaceAll(/^import \{[^{]+\} from .+$\n/gm, "")
            .replaceAll(/: \S+ = /g, " = ")
    return cleaned
}
