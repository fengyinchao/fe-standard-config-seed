module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022,
    ecmaFeatures: {
      // 不允许 return 语句出现在 global 环境下
      globalReturn: false,
      // 开启全局 script 模式
      impliedStrict: true,
      // 允许 JSX
      jsx: true,
    },
    // 即使没有 babelrc 配置文件，也使用 babel-eslint 来解析
    requireConfigFile: false,
  },
  extends: ['eslint:recommended', 'eslint-config-airbnb-base', 'eslint-config-prettier'],
  plugins: ['prettier', 'import', 'deprecation', '@vigor/fed'],
  rules: {
    ...require('./js-ts-common.rule'),
  },
};
