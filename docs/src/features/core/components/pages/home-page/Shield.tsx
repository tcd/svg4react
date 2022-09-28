import { Box } from "@mui/material"

export interface ShieldProps {
    href: string
    imgSrc: string
    title: string
}

export const Shield = (props: ShieldProps): JSX.Element => {

    const {
        href,
        imgSrc,
        title,
    } = props

    return (
        <Box
            component="a"
            href={href}
            title={title}
            // target="_blank"
            // rel="noopener noreferrer"
        >
            <Box
                component="img"
                src={imgSrc}
                alt={title}
            />
        </Box>
    )
}
