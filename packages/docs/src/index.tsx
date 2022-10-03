import { createRoot } from "react-dom/client"

import { App } from "./app"

import "./styles/main.scss"

window.Prism.languages["props"]

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)
