import { createRoot } from "react-dom/client"

import { App } from "./app"

import "./styles/main.scss"
import "./styles/markdown/github-markdown-light.css"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)
