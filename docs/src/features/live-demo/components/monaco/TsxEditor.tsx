import { useCallback, useEffect, useRef, useState } from "react"
import MonacoEditor from "react-monaco-editor"

import type { customMonaco, CustomMonaco } from "@app/features/live-demo"
import {
    configureMonaco,
    DarkPlusMonacoTheme,
} from "@app/features/live-demo"

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

    const handleWillMount = (monaco: CustomMonaco): void => {
        monaco.editor.defineTheme("dark-plus", DarkPlusMonacoTheme)
    }

    const handleDidMount = async (editor: customMonaco.editor.IStandaloneCodeEditor, monaco: CustomMonaco) => {
        configureMonaco(editor, monaco)
    }

    const handleChange = (value: string, _event: customMonaco.editor.IModelContentChangedEvent) => {
        setChanged(true)
        set_value(value)
    }

    const options: customMonaco.editor.IStandaloneEditorConstructionOptions = {
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
        // "javascript.validate.enable": false,
    }

    return (
        <MonacoEditor
            ref={(node) => { editorRef.current = node }}
            width="800"
            height="600"
            value={theRealValue()}
            options={options}
            language="typescript"
            onChange={handleChange}
            editorWillMount={handleWillMount}
            editorDidMount={handleDidMount}
        />
    )
}
