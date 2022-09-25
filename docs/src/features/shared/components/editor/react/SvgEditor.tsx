import { useCallback, useContext, useEffect, useRef, useState } from "react"
import MonacoEditor from "react-monaco-editor"
import { LiveContext } from "react-live"

import { monacoApi, MonacoApi, DarkPlusMonacoTheme } from ".."
import { configureMonaco } from "./configure-monaco"

export interface SvgEditorProps {
    dev?: boolean
}

export const SvgEditor = (props: SvgEditorProps) => {

    const {
        dev = false,
    } = props

    const editorRef = useRef<MonacoEditor>()

    const [_value, set_value] = useState<string>()
    const [changed, setChanged] = useState<boolean>(false)

    const {
        code,
        // @ts-ignore: next-line
        onChange,
    } = useContext(LiveContext)

    const theRealValue = useCallback(() => {
        if (changed) { return _value }
        return code
    }, [changed, code, _value])

    useEffect(() => {
        set_value(code)
    }, [code])

    const handleWillMount = (monaco: MonacoApi): void => {
        monaco.editor.defineTheme("dark-plus", DarkPlusMonacoTheme)
    }

    const handleDidMount = (editor: monacoApi.editor.IStandaloneCodeEditor, monaco: MonacoApi) => {
        configureMonaco(editor, monaco)
        if (dev) {
            editorRef?.current?.editor?.trigger("handleDidMount", "editor.action.inspectTokens", {})
        }
    }

    const handleChange = (value: string, _event: monacoApi.editor.IModelContentChangedEvent) => {
        onChange(value)
        setChanged(true)
        set_value(value)
    }

    const options: monacoApi.editor.IStandaloneEditorConstructionOptions = {
        language: "typescript",
        theme: "dark-plus",
        // smartSelect: {
        //     selectLeadingAndTrailingWhitespace: false,
        // },
        // scrollBeyondLastLine: false,
        minimap: {
            enabled: false,
        },
        // for whatever reason, this doesn't work when set as an object
        // @ts-ignore: next-line
        "bracketPairColorization.enabled": false,
    }

    return (
        <MonacoEditor
            ref={(node) => { editorRef.current = node }}
            width="800"
            height="600"
            value={theRealValue()}
            options={options}
            onChange={handleChange}
            editorDidMount={handleDidMount}
            editorWillMount={handleWillMount}
        />
    )
}
