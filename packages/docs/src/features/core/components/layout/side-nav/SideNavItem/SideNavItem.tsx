import { SideNavItem_link } from "./link"
import { SideNavItem_links } from "./links"

export type SideNavItemProps = {
    data: ILinkData | ILinksData
}

export const SideNavItem = ({ data }: SideNavItemProps): JSX.Element => {

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
