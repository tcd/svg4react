import { isBlank } from "@mlxb/coolkit"
import type {
    MonacoApi,
    monacoApi as _monacoApi,
} from "@app/features/monaco"

export const defaultMonacoOptions: _monacoApi.editor.IStandaloneEditorConstructionOptions = {
    lineNumbers: "on",
    roundedSelection: false,
    readOnly: false,
    selectOnLineNumbers: true,
    minimap: { enabled: false },
}

export interface MonacoConfiguration {
    languageName: string
    themeName: string
    languageDef: _monacoApi.languages.IMonarchLanguage | _monacoApi.Thenable<_monacoApi.languages.IMonarchLanguage>
    languageConfig?: _monacoApi.languages.LanguageConfiguration
    theme: _monacoApi.editor.IStandaloneThemeData,
    completion: _monacoApi.languages.CompletionItemProvider,
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

    public options(value = ""): _monacoApi.editor.IStandaloneEditorConstructionOptions {
        const options: _monacoApi.editor.IStandaloneEditorConstructionOptions = { ...defaultMonacoOptions }
        options.theme    = this.config.themeName
        options.language = this.config.languageName
        options.value    = value
        return options
    }
}
