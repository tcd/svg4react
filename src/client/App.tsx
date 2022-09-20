import type { CSSProperties } from "react"
import { PathTest } from "./path"


export const App = (_props: unknown): JSX.Element => {
    return (
        <div style={styles}>
            {/* <h1>Welcome!</h1> */}
            <PathTest />
        </div>
    )
}

// =============================================================================

const styles: CSSProperties = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "turquoise",
}
