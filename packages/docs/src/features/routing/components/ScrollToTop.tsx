import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const ScrollToTop = (_props: unknown): JSX.Element => {

    // const [lastPage, setLastPage] = useState(null)

    const {
        pathname: windowPathname,
        hash: windowHash,
    } = window.location

    const { pathname, hash } = useLocation()

    useEffect(() => {

        // const canControlScrollRestoration = "scrollRestoration" in window.history
        // if (canControlScrollRestoration) {
        //     window.history.scrollRestoration = "manual"
        // }

        if (!hash) {
            window.scrollTo(0, 0)
        } else {
            // FIXME: handle hashes
        }
    }, [
        pathname,
        hash,
        windowHash,
        windowPathname,
    ])

    return null
}
