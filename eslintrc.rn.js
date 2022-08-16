// https://www.npmjs.com/package/eslint-plugin-react-native
module.exports = {
  env: {
    'react-native/react-native': true,
  },
  extends: ['plugin:react-native/all'],
  plugins: ['react-native'],
  rules: {
    'react-native/no-unused-styles': 'error',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-raw-text': 'error',
    'react-native/no-single-element-style-arrays': 'error',
  },
};
