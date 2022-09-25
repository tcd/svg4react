import { parse } from "@babel/parser"
import traverse from "@babel/traverse"
import MonacoJSXHighlighter from "monaco-jsx-highlighter"

import type { monacoApi, MonacoApi } from ".."
import { DarkPlusMonacoTheme } from ".."
import { addShortcut } from "./add-shortcut"

import reactDefs from "@assets/txt/react.d.ts.txt"
import svg4reactDefs from "@assets/txt/svg4react.d.ts.txt"

export const configureMonaco = (editor: monacoApi.editor.IStandaloneCodeEditor, monaco: MonacoApi): void => {

    // -------------------------------------------------------------------------
    // https://github.com/luminaxster/syntax-highlighter
    // -------------------------------------------------------------------------

    const highlighter = new MonacoJSXHighlighter(monaco, parse, traverse, editor)
    highlighter.highlightOnDidChangeModelContent(100)
    highlighter.addJSXCommentCommand()

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
        reactDefs,
        "file:///node_modules/@react/types/index.d.ts",
    )
    monaco.languages.typescript.typescriptDefaults.addExtraLib(
        svg4reactDefs,
    )

    // =========================================================================
    // Keyboard Shortcuts
    // =========================================================================

    addShortcut(editor, monaco)
}
