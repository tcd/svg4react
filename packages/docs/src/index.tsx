import { createRoot } from "react-dom/client"

// import Prism from "prismjs"
import "prismjs"
import "prismjs/components/prism-markup"
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-jsx"
import "prismjs/components/prism-tsx"

import "prismjs/plugins/line-numbers/prism-line-numbers"
// // import "prismjs/plugins/toolbar/prism-toolbar"
// // import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js"

import { App } from "./app"
import "./styles/main.scss"
import { PrismLanguageProps } from "./util"

import { ErrorBoundary } from "react-error-boundary"
import { DefaultErrorFallback } from "@app/features/shared"

// (typeof global !== "undefined" ? global : window).Prism = Prism
window.Prism.languages["props"] = PrismLanguageProps

const container = document.getElementById("root")
const root = createRoot(container)

const WrappedApp = () => {
    return (
        <ErrorBoundary FallbackComponent={DefaultErrorFallback}>
            <App />
        </ErrorBoundary>
    )
}

root.render(<WrappedApp />)
