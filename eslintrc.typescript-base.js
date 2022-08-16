// https://typescript-eslint.io/rules/
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', '@vigor/fed', 'import', 'deprecation'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-airbnb-base',
    'eslint-config-prettier',
  ],
  rules: {
    ...require('./js-ts-common.rule'),
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'no-public',
      },
    ], // 类实例属性方法必须带修饰符，public除外
    '@typescript-eslint/ban-types': ['error'], // 不使用 object Object String等作为类型
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow' },
    ], // 类型断言要一致，<xx> or as xx
    '@typescript-eslint/restrict-template-expressions': 'warn', // 模板表达式中只能使用某些类型
    '@typescript-eslint/unbound-method': 'off', // 不将未绑定 this 的函数当参数
    '@typescript-eslint/no-floating-promises': 'off', // promise 要有错误处理
    '@typescript-eslint/switch-exhaustiveness-check': 'off', // switch 必须命中一个case:https://typescript-eslint.io/rules/switch-exhaustiveness-check
    '@typescript-eslint/no-dynamic-delete': 'off', // 动态删除属性
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-shadow': ['error'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
};
