import { forwardRef, useEffect, useRef, useState } from "react"
import { isBlank } from "@mlxb/coolkit"
import MonacoEditor from "react-monaco-editor"

// import monaco from "monaco-editor"
import { parse } from "@babel/parser"
import traverse from "@babel/traverse"
import MonacoJSXHighlighter from "monaco-jsx-highlighter"

import reactDefinitionFile from "@assets/txt/react-types.txt"

import { monacoApi, MonacoApi, DarkPlusMonacoTheme } from ".."

export interface SvgEditorProps {
    code: string
}

export const SvgEditor = forwardRef(function SvgEditor(props: SvgEditorProps, ref) {

    const editorRef = useRef<MonacoEditor>()

    // const [reactDefinitionFile, setReactDefinitionFile] = useState<string>()
    // const [fetchError, setFetchError] = useState<string>()

    // const shouldFetch = isBlank(reactDefinitionFile) && isBlank(fetchError)

    // useEffect(() => {
    //     if (!shouldFetch) {
    //         return
    //     }
    //     fetch("https://cdn.jsdelivr.net/npm/@types/react@16.9.41/index.d.ts", {
    //         credentials: "include",
    //         method: "get",
    //     })
    //         .then((body) => {
    //             return body.text()
    //         })
    //         .then((text) => {
    //             setReactDefinitionFile(text)
    //             console.log("definition file fetched")
    //         })
    //         .catch((e) => {
    //             console.error(e)
    //             setFetchError(e)
    //         })
    // }, [shouldFetch])

    const editorWillMount = (monaco: MonacoApi): void => {
        monaco.editor.defineTheme("dark-plus", DarkPlusMonacoTheme)
    }

    const editorDidMount = (editor: monacoApi.editor.IStandaloneCodeEditor, monaco: MonacoApi) => {
        // const highlighter = new MonacoJSXHighlighter(monaco, parse, traverse, editor)
        // highlighter.highlightOnDidChangeModelContent(100)
        // highlighter.addJSXCommentCommand()
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

    const onChange = (value: string, event: monacoApi.editor.IModelContentChangedEvent) => {

    }

    const handleClick = (): void => {
        // console.log("clicked");
        // const model = this.monacoRef.editor.getModel();
        // const value = model.getValue();
        // alert(value);
        // this.monacoRef.editor.executeCommand("Developer: Inspect Tokens", "Developer: Inspect Tokens")
        editorRef.current.editor.trigger("handleClick", "editor.action.inspectTokens", {})
        // const actions = this.editor.getSupportedActions().map((a) => a.id);
        // console.log(actions);
        // const tokenActions = actions.filter(x => x.includes("developer"));
        // console.log(tokenActions);
        editorRef.current.editor.focus()
    }

    const options: monacoApi.editor.IStandaloneEditorConstructionOptions = {
        // language: "jsx",
        // theme: "dark-plus",
    }

    return (
        <>
            <button className="btn btn-primary mb-5" onClick={handleClick}>Inspect</button>
            <MonacoEditor
                ref={(node) => { editorRef.current = node }}
                width="800"
                height="600"
                language="typescript"
                theme="dark-plus"
                // theme=""
                value={props.code}
                options={options}
                onChange={onChange}
                editorDidMount={editorDidMount}
                editorWillMount={editorWillMount}
            />
        </>
    )
})
