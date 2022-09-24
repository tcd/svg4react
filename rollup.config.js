import dts from "rollup-plugin-dts"

const config = [
    {
        input: "./dist/index.d.ts",
        output: [{ file: "./dist/svg4react.d.ts", format: "es" }],
        plugins: [dts()],
    },
]

export default config