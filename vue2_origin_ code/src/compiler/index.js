const ncname = `[a-zA-Z_][\\-\\.0-9_a-zA-Z]*`
const qnameCapture = `((?:${ncname}\\:)?${ncname})`
// const 
//对模板进行编译处理
export function compileToFunction(template) {
  //1.就是将template 转化ast语法树

  //2.生成render方法 (render方法执行后的返回的结果就是 虚拟dom)
  console.log(template);
}
