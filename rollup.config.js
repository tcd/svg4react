import dts from "rollup-plugin-dts"

const config = [
    {
        input: "./dist/index.d.ts",
        output: [{ file: "./tmp/svg4react.d.ts" }],
        plugins: [dts()],
    },
]

export default config
