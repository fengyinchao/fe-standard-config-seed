// 更多配置：https://prettier.io/docs/en/options.html

module.exports = {
  printWidth: 120, // 一行最大宽度，超过自动折行
  semi: true, // 语句后加分号
  singleQuote: true, // 使用单引号
  quoteProps: 'as-needed', // 对象中的属性按需加引号
  trailingComma: 'all', // 使用冗余逗号
  bracketSpacing: true, // 对象左右括号里使用空格
  arrowParens: 'avoid', // 箭头函数单参数时不用加括号
  htmlWhitespaceSensitivity: 'css', // html内联元素空格处理，ignore忽略前后空格，css
};
