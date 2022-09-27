import { useCallback, useEffect, useRef, useState } from "react"
import MonacoEditor from "react-monaco-editor"
import { AutoTypings, LocalStorageCache } from "monaco-editor-auto-typings"

import type { customMonaco, CustomMonaco } from "@app/features/monaco/lib"
import {
    addShortcut,
    DarkPlusMonacoTheme,
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

    const handleWillMount = (monaco: CustomMonaco): void => {
        monaco.editor.defineTheme("dark-plus", DarkPlusMonacoTheme)
    }

    const handleDidMount = async (editor: customMonaco.editor.IStandaloneCodeEditor, monaco: CustomMonaco) => {
        addShortcut(editor, monaco)

        await AutoTypings.create(editor, {
            sourceCache: new LocalStorageCache(), // Cache loaded sources in localStorage. May be omitted
            // Other options...
        })
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
