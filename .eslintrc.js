const jsTsCustomRules = {
  'prettier/prettier': 'error',
  'no-use-before-define': ['error', { functions: false, classes: false }], // 先定义后使用，函数和类除外
  'import/order': 'off', // 导入依赖要有顺序
  'no-underscore-dangle': 'off', // 禁止下划线命名
  'no-bitwise': 'off', // 不使用位运算
  'import/no-extraneous-dependencies': 'off', // 依赖引入不区分 dep 和 devDep
  'consistent-return': 'off', // return 类型要一致
  'no-param-reassign': 'off', // 参数不要重新赋值
  'prefer-rest-params': 'off', // 不使用 arguments
  'max-classes-per-file': 'off', // 一个文件只有一个类
  'no-return-assign': 'off', // 箭头函数返回值不能是赋值语句
  'no-restricted-syntax': 'off', // 数组迭代避免使用循环
  'no-multi-assign': 'off', // 不能多=赋值
  'default-case': 'off', // switch case 要有 default
  'no-console': 'error',
};
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
    project: ['./tsconfig.app.json'],
    sourceType: 'module',
  },
  plugins: ['prettier', '@typescript-eslint'],
  overrides: [
    {
      files: ['*.js', '*.mjs', '*.cjs'],
      extends: 'airbnb-base',
      rules: { ...jsTsCustomRules },
    },
    {
      files: ['*.ts'],
      extends: ['plugin:@typescript-eslint/recommended'], //定义文件继承的子规范
      rules: {
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            accessibility: 'no-public',
          },
        ], // 类实例属性方法必须带修饰符，public除外
        '@typescript-eslint/ban-types': ['error', { types: { Function: false } }], // 不使用 object Object String等作为类型，可以使用 Function
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow' },
        ], // 类型断言要一致，<xx> or as xx
        '@typescript-eslint/restrict-plus-operands': 'off', // 加号两边类型要相同
        '@typescript-eslint/restrict-template-expressions': 'off', // 模板表达式中只能使用某些类型
        '@typescript-eslint/unbound-method': 'off', // 不将未绑定 this 的函数当参数
        '@typescript-eslint/no-floating-promises': 'off', // promise 要有错误处理
        '@typescript-eslint/switch-exhaustiveness-check': 'off', // switch 必须命中一个case
        '@typescript-eslint/no-dynamic-delete': 'off', // 动态删除属性
        ...jsTsCustomRules,
      },
    },
  ],
};
