/* eslint-disable no-console */

// import { join } from "path"
// import { rmSync } from "fs"
import rimraf from "rimraf"
import { globby } from "globby"

const main = () => {
    const targetPaths = [
        "./build/tsc/**",
        "./build/api-extractor/*",
        "!.keep",
    ]
    globby(targetPaths)
        .then((paths) => {
            paths.map((item) => {
                rimraf.sync(item)
                // rmSync(item, { recursive: true, force: true })
            })
        })
        .catch((error) => {
            console.error(error)
        })
}

main()

// (async () => {
//     main()
//         .then((_res) => {
//             // @ts-ignore:next-line
//             // if (res) { console.log(res) }
//             process.exit(0)
//         })
//         .catch((error) => {
//             if (error) { console.error(error) }
//             process.exit(1)
//         })
// })()
