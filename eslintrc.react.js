// https://www.npmjs.com/package/eslint-plugin-react-hooks
// https://github.com/jsx-eslint/eslint-plugin-react
module.exports = {
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/sort-comp': 'off', // 生命周期等要按顺序写
    'react-hooks/rules-of-hooks': 'error', // hook 不能写在分支里
    'react-hooks/exhaustive-deps': 'warn', // effect 等依赖检测
  },
};
