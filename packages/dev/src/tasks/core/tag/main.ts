import { join } from "path"
import { readFileSync } from "fs"
import inquirer from "inquirer"

import { PACKAGE_PATHS } from "../../../helpers/paths.js"
import { addTag } from "./add-tag.js"
import { pushTag } from "./push-tag.js"
import { getLastTag } from "./get-last-tag.js"

const packageJsonPath = join(PACKAGE_PATHS.core, "package.json")
const packageJson     = JSON.parse(readFileSync(packageJsonPath).toString())
const version         = `v${packageJson.version}`

// =============================================================================
// Inquirer.js
// =============================================================================

const promptAddTag = () => {
    inquirer
        .prompt([
            {
                name: "confirmation",
                type: "confirm",
                message: `add tag '${version}'? `,
            },
            {
                name: "message",
                type: "input",
                message: "tag message: ",
            },
        ])
        .then((answers) => {
            if (answers.confirmation !== true) {
                console.log(`please update version in ${packageJsonPath}`)
                process.exit(0)
            } else {
                addTag(version, answers.message)
                console.log("git tag added")
                promptPushTags()
            }
        })
        .catch((error) => {
            console.error(error)
            process.exit(1)
        })
}

const promptPushTags = () => {

    const lastTag = getLastTag()
    // console.log(lastTag);

    inquirer
        .prompt([{
            name: "confirmation",
            type: "confirm",
            message: `push tag '${lastTag}'? `,
        }])
        .then((answers) => {
            if (answers.confirmation !== true) {
                console.log(`not pushing`)
                process.exit(0)
            } else {
                if (pushTag(version)) {
                    console.log("git tag pushed")
                    process.exit(0)
                } else {
                    console.error("unable to push tag")
                    process.exit(1)
                }
            }
        })
        .catch((error) => {
            console.error(error)
            process.exit(1)
        })
}

// =============================================================================
// Main
// =============================================================================

const main = () => {
    promptAddTag()
}

main()
