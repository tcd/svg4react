/* eslint-disable no-console */

// import { join } from "path"
// import { readFileSync } from "fs"
import rimraf from "rimraf"
import globby from "globby"


const main = async () => {
    globby(["./build/**/*", "!.keep"])
        .then((paths) => {
            paths.map((item) => {
                rimraf.sync(item)
            })
        })
}

(async () => {
    main()
        .then((_res) => {
            // @ts-ignore:next-line
            // if (res) { console.log(res) }
            process.exit(0)
        })
        .catch((error) => {
            if (error) { console.error(error) }
            process.exit(1)
        })
})()
