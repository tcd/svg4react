type NodeEnv = "development" | "production"

export interface IEnv {
    NODE_ENV: NodeEnv
    S4R_VERSION: string
}

// Provided using `webpack.DefinePlugin`
// @ts-ignore: next-line
const env: IEnv = ENV

class Configuration {

    public env: NodeEnv
    /**
     * Latest release version of *svg4react*
     */
    public latest: string

    constructor() {
        this.env = env.NODE_ENV
        this.latest = env.S4R_VERSION
    }
}

const CONFIG = new Configuration()

export default CONFIG
