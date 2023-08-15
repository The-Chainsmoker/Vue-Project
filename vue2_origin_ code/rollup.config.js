import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'//配置自动引入文件夹的index.js文件,如./compiler == ./compiler/index.js
export default {
  input: './src/index.js',//入口
  output: {
    file: './dist/vue.js',//出口
    name: 'Vue',//以通过这个名字访问它打包后的文件,export default xxx直接访问,export xxx放到对象里
    format: 'umd',//esm es6模块 commonjs模块 iife目执行函数 umd (commonjs amd)
    sourcemap: true//可以调试源代码
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'//排除node_modules文件
    }),
    resolve()
  ]
}