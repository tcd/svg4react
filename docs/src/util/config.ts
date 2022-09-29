type NodeEnv = "development" | "production"

export interface IEnv {
    NODE_ENV: NodeEnv
}

// Provided using `webpack.DefinePlugin`
// @ts-ignore: next-line
const env: IEnv = ENV

class Configuration {

    public env: NodeEnv

    constructor() {
        this.env = env.NODE_ENV
    }
}

const CONFIG = new Configuration()

export default CONFIG
