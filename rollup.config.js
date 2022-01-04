import path from 'path'
const resolve = p => path.resolve(__dirname, p)
const pkg = require(resolve(`package.json`))

// rollup.config.js
export default {
    input: 'src/index.js',
    output: {
        file: `dist/${pkg.name}.umd.bundle.js`,
        format: 'umd',
        name: 'fd-utils'
    }
};
