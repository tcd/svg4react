/* eslint-disable no-console */
import { join, resolve } from "path"
// import { readFileSync, copyFile } from "fs"
import { copyFile } from "fs/promises"

const NODE_MODULES_PATH = resolve(process.cwd(), "node_modules")
const ASSETS_PATH = resolve(process.cwd(), "src", "assets", "txt")

const filesToCopy = [
    {
        name: "csstype.d.ts.txt",
        path: join(NODE_MODULES_PATH, "csstype", "index.d.ts"),
    },
    {
        name: "react.d.ts.txt",
        path: join(NODE_MODULES_PATH, "@types", "react", "index.d.ts"),
    },
]

const copyFiles = async () => {
    for (const file of filesToCopy) {
        const outputPath = join(ASSETS_PATH, file.name)
        console.log(outputPath)
        copyFile(file.path, outputPath)
    }
}

const main = async () => {
    await copyFiles()
}

(async () => {
    main()
        .then((res) => {
            if (res) { console.log(res) }
            process.exit(0)
        })
        .catch((error) => {
            if (error) { console.error(error) }
            process.exit(1)
        })
})()

