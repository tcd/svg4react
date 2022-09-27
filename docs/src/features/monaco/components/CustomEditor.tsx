import { useRef, useEffect, useState } from "react"
import * as monaco from "monaco-editor/esm/vs/editor/editor.api"
import { AutoTypings, LocalStorageCache } from "monaco-editor-auto-typings"

const code = `
import { Property } from "csstype"

let viz: Property.Isolation = ""

console.log(viz)
`

const options: monaco.editor.IStandaloneEditorConstructionOptions = {
    language: "typescript",
    theme: "dark-plus",
    minimap: {
        enabled: false,
    },
    // for whatever reason, this doesn't work when set as an object
    // @ts-ignore: next-line
    "bracketPairColorization.enabled": false,
}

export const CustomEditor = (_props: unknown): JSX.Element => {
    const divEl = useRef<HTMLDivElement>(null)

    const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor>(null)
    const [configured, setConfigured] = useState<boolean>(false)

    useEffect(() => {
        if (divEl.current && !editor) {
            const e = monaco.editor.create(divEl.current, {
                ...options,
                // value: code.type
                model: monaco.editor.createModel(code, "typescript"),
            })
            // addShortcut(e)
            setEditor(e)
        }
        return () => {
            editor.dispose()
        }
    }, [])

    useEffect(() => {
        const configure = async () => {
            await AutoTypings.create(editor, {
                sourceCache: new LocalStorageCache(), // Cache loaded sources in localStorage. May be omitted
                // Other options...
                monaco: monaco,
            })
            setConfigured(true)
        }
        if (editor && !configured) {
            configure()
        }
    }, [editor, configured])

    return (
        <div
            className="Editor"
            ref={divEl}
        />
    )
}
