module.exports = {
  'no-nested-ternary': 'off', // 允许嵌套的三元表达式
  'prettier/prettier': 'error',
  'no-use-before-define': ['error', { functions: false, classes: false }], // 先定义后使用，函数和类除外
  'consistent-return': 'off', // return 类型要一致
  'max-classes-per-file': 'off', // 一个文件只有一个类
  'no-console': 'warn',
  'no-shadow': 'off',
  'max-lines': ['error', 300], // 单文件不超过300行,
  'no-plusplus': 'off',
  '@fengyinchao/custom/file-header-annotation': 'error',
  'import/extensions': [
    'error',
    'ignorePackages',
    {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    },
  ],
};
