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
            document.getElementById("root").scrollTo(0, 0)
            // window.scrollTo(0, 0)
        } else {
            // eslint-disable-next-line no-console
            const $target = document.getElementById(hash.slice(1))
            if ($target) {
                const targetY = $target.offsetTop - 93
                document.getElementById("root").scrollTo(0, targetY)
                // document.getElementById(hash.slice(1)).scrollIntoView()
            }
        }
    }, [
        pathname,
        hash,
        windowHash,
        windowPathname,
    ])

    return null
}
