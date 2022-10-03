import { useCallback, useContext, useEffect, useRef, useState } from "react"
import MonacoEditor from "react-monaco-editor"
import { LiveContext } from "react-live"

import type { customMonaco, CustomMonaco } from "@app/features/live-demo"
import {
    DarkPlusMonacoTheme,
    configureMonaco,
    cleanCode,
} from "@app/features/live-demo"

const options: customMonaco.editor.IStandaloneEditorConstructionOptions = {
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
    fixedOverflowWidgets: true,
    automaticLayout: true,
}

export const LiveEditor2 = (_props: unknown) => {

    const editorRef = useRef<MonacoEditor>()

    const [_value, set_value] = useState<string>()
    const [changed, setChanged] = useState<boolean>(false)

    const {
        code,
        // TODO: File issue with https://github.com/FormidableLabs/react-live for better typings
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

    const handleWillMount = (monaco: CustomMonaco): void => {
        monaco.editor.defineTheme("dark-plus", DarkPlusMonacoTheme)
    }

    const handleDidMount = (editor: customMonaco.editor.IStandaloneCodeEditor, monaco: CustomMonaco) => {
        configureMonaco(editor, monaco)
    }

    const handleChange = (value: string, _event: customMonaco.editor.IModelContentChangedEvent) => {
        onChange(cleanCode(value))
        setChanged(true)
        set_value(value)
    }

    return (
        <MonacoEditor
            ref={(node) => { editorRef.current = node }}
            className="s4r__editor"
            value={theRealValue()}
            options={options}
            onChange={handleChange}
            editorDidMount={handleDidMount}
            editorWillMount={handleWillMount}
        />
    )
}
