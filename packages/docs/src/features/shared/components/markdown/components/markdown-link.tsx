export type MarkdownComponentArgs = {
    node: any,
} & any[]

export const markdownLink = ({ node, ...props }: { node: any }) => {
    return (
        <>
            <a {...props} />
        </>
    )
}
