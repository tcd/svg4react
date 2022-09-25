import { useCallback, useEffect, useRef, useState } from "react"
import MonacoEditor from "react-monaco-editor"

import {
    monacoApi,
    MonacoApi,
    DarkPlusMonacoTheme,
    configureMonaco2,
} from "@app/features/monaco"

export interface TsxEditorProps {
    code: string
}

export const TsxEditor = ({ code }: TsxEditorProps) => {

    const editorRef = useRef<MonacoEditor>()

    const [_value, set_value] = useState<string>()
    const [changed, setChanged] = useState<boolean>(false)

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
        configureMonaco2(editor, monaco)
    }

    const handleChange = (value: string, _event: monacoApi.editor.IModelContentChangedEvent) => {
        setChanged(true)
        set_value(value)
    }

    const options: monacoApi.editor.IStandaloneEditorConstructionOptions = {
        language: "typescript",
        // language: "typescriptreact",
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
