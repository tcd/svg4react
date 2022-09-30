declare module "monaco-jsx-highlighter" {
    import * as _monaco from "monaco-editor"
    import { parse as _parse } from "@babel/parser"
    import _traverse from "@babel/traverse"

    class MonacoJSXHighlighter {

        constructor(
            monaco: typeof _monaco,
            parse: typeof _parse,
            traverse: typeof _traverse,
            editor: _monaco.editor.IStandaloneCodeEditor
        )

        /**
         * Activate JSX highlighting
         *
         * @param debounceTime milliseconds (default: 100)
         */
        public highlightOnDidChangeModelContent(debounceTime: number = 100): void
        /**
         * Activate JSX commenting
         */
        public addJSXCommentCommand(): void
    }

    export default MonacoJSXHighlighter
}
