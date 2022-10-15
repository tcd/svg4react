/* eslint-disable react/no-danger */
import noop from "lodash/noop"
import * as React from "react"
import PropTypes from "prop-types"
import throttle from "lodash/throttle"
import { styled, alpha } from "@mui/material/styles"
// import Link from "docs/src/modules/components/Link"
import { Link, NoSsr, Box, Typography } from "@mui/material"
import { openLinkInNewTab } from "./open-link-in-new-tab"

import type { ITheme as Theme } from "@app/theme"

export const Nav = styled("nav")(({ theme }) => ({
    top: "70px",
    right: 0,
    order: 1,
    width: 240,
    flexShrink: 0,
    position: "fixed",
    height: "100vh",
    overflowY: "auto",
    zIndex: 100_000,
    background: "black",
    padding: theme.spacing("calc(69px + 1rem)", 4, 2, 0),
    display: "none",
    [theme.breakpoints.up("mobile")]: {
        display: "block",
    },
}))

export const NavLabel = styled(Typography)(({ theme }) => ({
    marginTop: 2,
    marginBottom: 1,
    paddingLeft: 1.4,
    fontSize: theme.typography.pxToRem(11),
    fontWeight: theme.typography.fontWeightBold,
    textTransform: "uppercase",
    letterSpacing: ".08rem",
    color: theme.palette.grey[600],
}))

export const NavList = styled(Typography)({
    padding: 0,
    margin: 0,
    listStyle: "none",
})

export type StyledNavItemProps = {
    active?: any
    secondary?: any
    theme: Theme
}

export const NavItem = styled(Link, {
    shouldForwardProp: (prop) => prop !== "active" && prop !== "secondary",
})(({ active, secondary, theme }: StyledNavItemProps) => {
    const activeStyles = {
        borderLeftColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
        "&:hover": {
            borderLeftColor: "lime",
            color: "lime",
        },
    }

    return {
        fontSize: theme.typography.pxToRem(13),
        padding: theme.spacing(0, 1, 0, secondary ? 2.5 : "10px"),
        margin: theme.spacing(0.5, 0, 1, 0),
        borderLeft: `1px solid transparent`,
        boxSizing: "border-box",
        fontWeight: 500,
        "&:hover": {
            borderLeftColor:
        theme.palette.mode === "light" ? theme.palette.grey[400] : theme.palette.grey[600],
            color: theme.palette.mode === "light" ? theme.palette.grey[600] : theme.palette.grey[200],
        },
        ...(!active && {
            color: theme.palette.mode === "dark" ? theme.palette.grey[500] : theme.palette.text.primary,
        }),
        // TODO: We probably want `aria-current="location"` instead.
        ...(active && activeStyles),
        "&:active": activeStyles,
    }
})

function useThrottledOnScroll(callback: () => void, delay: number) {
    const throttledCallback = React.useMemo(() => (
        callback ? throttle(callback, delay) : noop
    ), [callback, delay])

    React.useEffect(() => {
        if (throttledCallback === noop) {
            return undefined
        }

        window.addEventListener("scroll", throttledCallback)
        return () => {
            window.removeEventListener("scroll", throttledCallback)
            // @ts-ignore: next-line
            throttledCallback?.cancel()
        }
    }, [throttledCallback])
}

function flatten(headings: TocItem[]) {
    const itemsWithNode: any[] = []

    headings.forEach((item) => {
        itemsWithNode.push(item)

        if (item.children.length > 0) {
            item.children.forEach((subitem) => {
                itemsWithNode.push(subitem)
            })
        }
    })
    return itemsWithNode
}

const shouldShowJobAd = () => {
    const date = new Date()
    const timeZoneOffset = date.getTimezoneOffset()
    // Hide for time zones UT+5.5 - UTC+14 & UTC-8 - UTC-12
    if (timeZoneOffset <= -5.5 * 60 || timeZoneOffset >= 8 * 60) {
        return false
    }
    return true
}

export type TocItem = {
    text: string
    hash: string
    children?: any[]
}

export type AppTableOfContentsProps = {
    toc: TocItem[]
}

export default function AppTableOfContents(props: AppTableOfContentsProps) {
    const { toc } = props
    const showAddJob = shouldShowJobAd()

    const items = React.useMemo(() => flatten(toc), [toc])
    const [activeState, setActiveState] = React.useState(null)
    const clickedRef = React.useRef(false)
    const unsetClickedRef = React.useRef(null)
    const findActiveIndex = React.useCallback(() => {
        // Don't set the active index based on scroll if a link was just clicked
        if (clickedRef.current) {
            return
        }

        let active
        for (let i = items.length - 1; i >= 0; i -= 1) {
            // No hash if we're near the top of the page
            if (document.documentElement.scrollTop < 200) {
                active = { hash: null }
                break
            }

            const item = items[i]
            const node = document.getElementById(item.hash)

            if (process.env.NODE_ENV !== "production") {
                if (!node) {
                    console.error(`Missing node on the item ${JSON.stringify(item, null, 2)}`)
                }
            }

            if (
                node &&
                node.offsetTop <
                document.documentElement.scrollTop + document.documentElement.clientHeight / 8
            ) {
                active = item
                break
            }
        }

        if (active && activeState !== active.hash) {
            setActiveState(active.hash)
        }
    }, [activeState, items])

    // Corresponds to 10 frames at 60 Hz
    useThrottledOnScroll(items.length > 0 ? findActiveIndex : null, 166)

    const handleClick = (hash: any) => (event: any) => {
    // Ignore click for new tab/new window behavior
        if (openLinkInNewTab(event)) {
            return
        }

        // Used to disable findActiveIndex if the page scrolls due to a click
        clickedRef.current = true
        unsetClickedRef.current = setTimeout(() => {
            clickedRef.current = false
        }, 1000)

        if (activeState !== hash) {
            setActiveState(hash)
        }
    }

    React.useEffect(
        () => () => {
            clearTimeout(unsetClickedRef.current)
        },
        [],
    )

    const itemLink = (item: TocItem, secondary: any = null) => (
        <NavItem
            display="block"
            href={`#${item.hash}`}
            underline="none"
            onClick={handleClick(item.hash)}
            // @ts-ignore: next-line
            active={activeState === item.hash}
            secondary={secondary}
        >
            <span dangerouslySetInnerHTML={{ __html: item.text }} />
        </NavItem>
    )

    return (
        <Nav aria-label="pageTOC">
            <NoSsr>
                {showAddJob && (
                    <Link
                        href="https://jobs.ashbyhq.com/MUI?utm_source=2vOWXNv1PE"
                        underline="none"
                        sx={(theme: Theme) => ({
                            mb: 2,
                            display: "flex",
                            flexDirection: "column",
                            overflow: "auto",
                            backgroundColor:  alpha(theme.palette.grey[50], 0.4),
                            border: "1px solid",
                            borderColor: theme.palette.grey[200],
                            borderRadius: 1,
                            transitionProperty: "all",
                            transitionTiming: "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "150ms",
                            "&:hover, &:focus-visible": {
                                borderColor: theme.palette.primary.main,
                            },
                        })}
                    >
                        <Box sx={{ p: 1 }}>
                            <Typography component="span" variant="button" fontWeight="500" color="text.primary">
                                {"🚀 Join the MUI team!"}
                            </Typography>
                            <Typography
                                component="span"
                                variant="caption"
                                fontWeight="normal"
                                color="text.secondary"
                                sx={{ mt: 0.5 }}
                            >
                                {"We're looking for React Engineers and other amazing roles - come find out more!"}
                            </Typography>
                        </Box>
                    </Link>
                )}
            </NoSsr>
            {toc.length > 0 ? (
                <React.Fragment>
                    <NavLabel gutterBottom>Table of Contents</NavLabel>
                    <NavList as="ul">
                        {toc.map((item) => (
                            <li key={item.text}>
                                {itemLink(item)}
                                {item.children.length > 0 ? (
                                    <NavList as="ul">
                                        {item.children.map((subitem) => (
                                            <li key={subitem.text}>{itemLink(subitem, true)}</li>
                                        ))}
                                    </NavList>
                                ) : null}
                            </li>
                        ))}
                    </NavList>
                </React.Fragment>
            ) : null}
        </Nav>
    )
}

AppTableOfContents.propTypes = {
    toc: PropTypes.array.isRequired,
}
