import { isBlank } from "@mlxb/coolkit"
import type {
    MonacoApi,
    monacoApi as m,
} from "./types"

export const defaultMonacoOptions: m.editor.IStandaloneEditorConstructionOptions = {
    lineNumbers: "on",
    roundedSelection: false,
    readOnly: false,
    selectOnLineNumbers: true,
    minimap: { enabled: false },
}

export interface MonacoConfiguration {
    languageName: string
    themeName: string
    languageDef: m.languages.IMonarchLanguage | m.Thenable<m.languages.IMonarchLanguage>
    languageConfig?: m.languages.LanguageConfiguration
    theme: m.editor.IStandaloneThemeData,
    completion: m.languages.CompletionItemProvider,
}

export class MonacoConfigurator {

    public config: MonacoConfiguration

    constructor(configuration: MonacoConfiguration) {
        this.config = configuration
    }

    public configureMonaco(monacoApi: MonacoApi): void {
        const {
            languageName,
            themeName,
            languageDef,
            completion,
            theme,
        } = this.config
        monacoApi.languages.register({ id: languageName })
        monacoApi.languages.setMonarchTokensProvider(languageName, languageDef)
        if (!isBlank(this.config.languageConfig)) {
            monacoApi.languages.setLanguageConfiguration(languageName, this.config.languageConfig)
        }
        monacoApi.editor.defineTheme(themeName, theme)
        monacoApi.languages.registerCompletionItemProvider(languageName, completion)
    }

    public options(value = ""): m.editor.IStandaloneEditorConstructionOptions {
        const options: m.editor.IStandaloneEditorConstructionOptions = { ...defaultMonacoOptions }
        options.theme    = this.config.themeName
        options.language = this.config.languageName
        options.value    = value
        return options
    }
}
