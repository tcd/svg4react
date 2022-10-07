export const CommonProps: PropData[] = [
    {
        name: "preserveAspectRatio",
        type: '"none" | `x${"Min"|"Mid"|"Max"}Y${"Min"|"Mid"|"Max"} ${"meet"|"slice"}`',
        description: "How the `svg` fragment must be deformed if it is displayed with a different aspect ratio.\n\nSee [MDN Web Docs - preserveAspectRatio](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio).",
        // default: '"xMidYMid meet"',
    },
]
