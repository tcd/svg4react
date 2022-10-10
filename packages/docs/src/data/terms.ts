export interface TermData {
    /** Name of the term. */
    name: string
    /** Meaning of the term. */
    description: string
    /**
     * Official source of `description`.
     */
    link: string
}

export const TERMS = [
    {
        name: "presentation time",
        description: "For SVG, the term presentation time indicates the position in the timeline relative to the document begin of a given document fragment.",
        link: "https://svgwg.org/specs/animations/#PresentationTime",
    },
]
