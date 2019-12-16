/* 
  注意：在rules中每个配置项后面第一个值是eslint规则的错误等级。
  "off" 或 0 - 关闭这条规则
  "warn" 或 1 - 违反规则会警告（不会影响项目运行）
  "error" 或 2 - 违反规则会报错（屏幕上一堆错误代码~）
*/

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', //允许在开发环境下使用console。
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', //允许在开发环境下使用debugger。
    'no-new': 0, //禁止在使用new构造一个实例后不赋值
    'spaced-comment': 0, //注释风格要不要有空格什么的
    'no-multi-spaces': 0, //不能用多余的空格
    'no-unused-vars': 0, //不能有声明后未被使用的变量或参数
    'eol-last': 0, //文件以单一的换行符结束
    'space-infix-ops': 0, //中缀操作符周围要不要有空格
    'no-trailing-spaces': 0, //一行结束后面不要有空格
    'no-dupe-args': 'error', // 禁止在函数参数中出现重复名称的参数
    'no-dupe-keys': 'error', // 禁止在对象字面量中出现重复名称的键名
    quotes: [2, 'single'], //引号类型 `` "" ''
    indent: 0, //缩进风格
    'space-before-function-paren': 0, //函数定义时括号前面要不要有空格
    'no-labels': 0, //禁止标签声明
    'no-label-var': 0, //label名不能与var声明的变量名相同
    'no-unused-expressions': 0, //禁止无用的表达式
    semi: 0, //语句强制分号结尾
    'key-spacing': 0, //对象字面量中冒号的前后空格
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }] //iView将标签渲染为原生html标签时，由于这些标签是自闭合的，所以有end标签会报错。
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
