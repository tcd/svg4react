import noop from "lodash/noop"
import React, { forwardRef, useCallback, useContext, useEffect, useRef, useState } from "react"
import MonacoEditor from "react-monaco-editor"
import { LiveContext } from "react-live"
import { isBlank } from "@mlxb/coolkit"


// import monaco from "monaco-editor"
import { parse } from "@babel/parser"
import traverse from "@babel/traverse"
import MonacoJSXHighlighter from "monaco-jsx-highlighter"

import reactDefinitionFile from "@assets/txt/react-types.txt"

import { monacoApi, MonacoApi, DarkPlusMonacoTheme } from ".."

export interface SvgEditorProps {
    code: string
    dev?: boolean
}

export const SvgEditor = (props: SvgEditorProps) => {

    const {
        dev = false,
    } = props

    const editorRef = useRef<MonacoEditor>()
    const [_value, set_value] = useState<string>()

    const {
        code,
        // @ts-ignore: next-line
        onChange,
    } = useContext(LiveContext)

    useEffect(() => {
        // console.log(live)
        set_value(code)
    }, [code])

    const handleWillMount = (monaco: MonacoApi): void => {
        monaco.editor.defineTheme("dark-plus", DarkPlusMonacoTheme)
    }

    const handleDidMount = (editor: monacoApi.editor.IStandaloneCodeEditor, monaco: MonacoApi) => {
        _handleDidMount(editor, monaco)
        editorRef?.current?.editor?.trigger("handleClick", "", {})
        if (dev) {
            editorRef?.current?.editor?.trigger("handleClick", "editor.action.inspectTokens", {})
        }
    }

    const handleChange = (value: string, _event: monacoApi.editor.IModelContentChangedEvent) => {
        onChange(value)
        set_value(value)
    }

    //     const handleClick = (): void => {
    //
    //         const editor = editorRef?.current?.editor
    //         if (!!!editor) {
    //             return null
    //         }
    //
    //         editor.trigger("handleClick", "editor.action.inspectTokens", {})
    //         // editor.focus()
    //
    //         // const actions = editor.getSupportedActions().map((a) => a.id)
    //         // const tokenActions = actions.filter(x => x.includes("developer"));
    //         // console.log(actions)
    //         // console.log(tokenActions);
    //     }

    const options: monacoApi.editor.IStandaloneEditorConstructionOptions = {
        // language: "jsx",
        // theme: "dark-plus",
    }

    return (
        <>
            {/* <button className="btn btn-primary mb-5" onClick={handleClick}>Inspect</button> */}
            <MonacoEditor
                ref={(node) => { editorRef.current = node }}
                width="800"
                height="600"
                // language="typescript"
                theme="dark-plus"
                value={_value}
                options={options}
                onChange={handleChange}
                editorDidMount={handleDidMount}
                editorWillMount={handleWillMount}
            />
        </>
    )
}

// =============================================================================
// Helpers
// =============================================================================

const _handleDidMount = (editor: monacoApi.editor.IStandaloneCodeEditor, monaco: MonacoApi) => {

    // -------------------------------------------------------------------------
    // https://github.com/luminaxster/syntax-highlighter
    // -------------------------------------------------------------------------

    // const highlighter = new MonacoJSXHighlighter(monaco, parse, traverse, editor)
    // highlighter.highlightOnDidChangeModelContent(100)
    // highlighter.addJSXCommentCommand()

    // -------------------------------------------------------------------------
    // https://github.com/microsoft/monaco-editor/issues/264#issuecomment-654578687
    // -------------------------------------------------------------------------

    monaco.editor.defineTheme("dark-plus", DarkPlusMonacoTheme)
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
        target: monaco.languages.typescript.ScriptTarget.Latest,
        allowNonTsExtensions: true,
        moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
        module: monaco.languages.typescript.ModuleKind.CommonJS,
        noEmit: true,
        esModuleInterop: true,
        jsx: monaco.languages.typescript.JsxEmit.React,
        reactNamespace: "React",
        allowJs: true,
        typeRoots: ["node_modules/@types"],
    })
    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
        noSemanticValidation: false,
        noSyntaxValidation: false,
    })
    monaco.languages.typescript.typescriptDefaults.addExtraLib(
        reactDefinitionFile,
        "file:///node_modules/@react/types/index.d.ts",
    )
}
