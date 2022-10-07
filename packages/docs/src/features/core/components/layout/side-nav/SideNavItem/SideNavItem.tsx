import { Divider } from "@mui/material"

import { SideNavItem_link } from "./link"
import { SideNavItem_links } from "./links"
import { SideNavItem_rootLink } from "./root-link"

export type SideNavItemProps = {
    data: ILinkData | ILinksData
}

export const SideNavItem = ({ data }: SideNavItemProps): JSX.Element => {

    if (data.title === "root") {
        const $links = (data as ILinksData).links.map((link, i) => <SideNavItem_rootLink key={`root-link-${i}`} {...link} />)
        return (
            <>
                {/* <Divider /> */}
                {$links}
            </>
        )
    }

    if (isLink(data)) {
        return <SideNavItem_link {...data} />
    }

    if (isLinks(data)) {
        return <SideNavItem_links {...data} />
    }

    return null
}

// =============================================================================

const isLink  = (arg: any): arg is ILinkData  => (!!arg?.to)
const isLinks = (arg: any): arg is ILinksData => (!!arg?.links)
