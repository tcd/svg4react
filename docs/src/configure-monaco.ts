import * as monaco from "monaco-editor/esm/vs/editor/editor.api"

import { DarkPlusMonacoTheme } from "@app/features/monaco"

// import reactDefs from "@assets/txt/react.d.ts.txt"
// import svg4reactDefs from "@assets/txt/svg4react.d.ts.txt"
// import csstypeDefs from "@assets/txt/csstype.d.ts.txt"
// import cloudflareImagesDefs from "@assets/txt/cloudflare-images.d.ts.txt"

// =============================================================================
// Add Theme
// =============================================================================

monaco.editor.defineTheme("dark-plus", DarkPlusMonacoTheme)

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
    // jsx: monaco.languages.typescript.JsxEmit.React,
    // reactNamespace: "React",
    // allowJs: true,
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

// monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
//     noSemanticValidation: true,
//     noSyntaxValidation: true,
// })
//
// monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
//     noSemanticValidation: true,
//     noSyntaxValidation: true,
//     diagnosticCodesToIgnore: [8010]
// })

// =============================================================================
// Add Types
// =============================================================================

// monaco.languages.typescript.typescriptDefaults.addExtraLib(
//     reactDefs,
//     "file:///node_modules/@react/types/index.d.ts",
// )

// -----------------------------------------------------------------------------
// Not sure anything below works
// -----------------------------------------------------------------------------


// const filePaths = [
//     "file:///node_modules/@types/csstype",
//     "file:///node_modules/@types/csstype/index.d.ts",
//     "file:///node_modules/csstype/index.d.ts",
//     "node_modules/@types/csstype",
//     "node_modules/@types",
//     "node_modules/@types",
// ]
//
// console.log(csstypeDefs)
//
// for (const path of filePaths) {
//     monaco.languages.typescript.typescriptDefaults.addExtraLib(
//         csstypeDefs,
//         path,
//     )
// }

// const svg4reactPaths = [
//     "inmemory://model/node_modules/svg4react/dist/esm/index",
// ]
//
// for (const path of svg4reactPaths) {
//     monaco.languages.typescript.typescriptDefaults.addExtraLib(
//         svg4reactDefs,
//         path,
//     )
// }

// monaco.languages.typescript.typescriptDefaults.addExtraLib(
//     svg4reactDefs,
//     "file:///node_modules/@types/svg4react/index.d.ts",
// )
// monaco.languages.typescript.typescriptDefaults.addExtraLib(
//     svg4reactDefs,
//     "file:///node_modules/svg4react/dist/index.d.ts",
// )
// monaco.languages.typescript.typescriptDefaults.addExtraLib(
//     svg4reactDefs,
//     "file:///svg4react/index.d.ts",
// )
// monaco.languages.typescript.typescriptDefaults.addExtraLib(
//     svg4reactDefs,
//     "file:///svg4react",
// )
// monaco.languages.typescript.typescriptDefaults.addExtraLib(
//     svg4reactDefs,
//     "@types/svg4react/index.d.ts",
// )
// monaco.languages.typescript.typescriptDefaults.addExtraLib(
//     svg4reactDefs,
//     "svg4react",
// )
