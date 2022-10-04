import { AutoTypings, LocalStorageCache } from "monaco-editor-auto-typings"
import { parse } from "@babel/parser"
import traverse from "@babel/traverse"
import MonacoJSXHighlighter from "monaco-jsx-highlighter"


import { CONFIG } from "@app/util"
import { addShortcut } from "@app/features/live-demo"
import type { customMonaco, CustomMonaco } from "@app/features/live-demo"


// import reactDefs from "@assets/txt/react.d.ts.txt"
// import svg4reactDefs from "@assets/txt/svg4react.d.ts.txt"
// import csstypeDefs from "@assets/txt/csstype.d.ts.txt"
// import cloudflareImagesDefs from "@assets/txt/cloudflare-images.d.ts.txt"

export const configureMonaco = async (editor: customMonaco.editor.IStandaloneCodeEditor, monaco: CustomMonaco): Promise<void> => {

    // -------------------------------------------------------------------------
    // https://github.com/luminaxster/syntax-highlighter
    // -------------------------------------------------------------------------

    const highlighter = new MonacoJSXHighlighter(monaco, parse, traverse, editor)
    highlighter.highlightOnDidChangeModelContent(100)
    highlighter.addJSXCommentCommand()

    // =============================================================================
    // Add Shortcuts
    // =============================================================================

    addShortcut(editor, monaco)

    // =============================================================================
    // Add Theme
    // =============================================================================

    // monaco.editor.defineTheme("dark-plus", DarkPlusMonacoTheme)

    // =============================================================================
    // Configure TypeScript
    // =============================================================================

    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
        target: monaco.languages.typescript.ScriptTarget.Latest,
        allowNonTsExtensions: true,
        moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
        module: monaco.languages.typescript.ModuleKind.CommonJS,
        noEmit: true,
        // esModuleInterop: true,
        jsx: monaco.languages.typescript.JsxEmit.React,
        reactNamespace: "React",
        allowJs: true,
        // baseUrl: "./totally",
        // "paths": {
        //     "csstype": ["csstype"],
        // },
        // typeRoots: [
        //     "node_modules/@types",
        // ],
        // types: [
        //     "svg4react",
        // ],
        // allowSyntheticDefaultImports: true,
        // importHelpers: true,
    })

    // =============================================================================
    // Silence Errors
    // =============================================================================

    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
        noSemanticValidation: false,
        noSyntaxValidation: false,
        diagnosticCodesToIgnore: [8010],
    })

    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
        noSemanticValidation: false,
        noSyntaxValidation: false,
        diagnosticCodesToIgnore: [8010],
    })

    // =========================================================================
    // Add Types
    // =========================================================================

    /**
     * @see https://github.com/lukasbach/monaco-editor-auto-typings#configuration
     */
    AutoTypings.create(editor, {
        monaco,
        sourceCache: new LocalStorageCache(), // Cache loaded sources in localStorage. May be omitted
        shareCache: true,
        preloadPackages: true,
        onlySpecifiedPackages: true, // FIXME: this one isn't ideal
        versions: {
            "svg4react": CONFIG.latest,
        },
    })

    // // =============================================================================
    // // Add Types
    // // =============================================================================
    //
    // // monaco.languages.typescript.typescriptDefaults.addExtraLib(
    // //     reactDefs,
    // //     "file:///node_modules/@react/types/index.d.ts",
    // // )
}
