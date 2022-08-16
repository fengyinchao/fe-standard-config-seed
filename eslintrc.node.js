// https://github.com/mysticatea/eslint-plugin-node
module.exports = {
  env: {
    node: true,
  },
  extends: ['plugin:node/recommended'],
  plugins: ['node'],
  rules: {
    'node/exports-style': ['error', 'module.exports'],
    'node/prefer-global/buffer': ['error', 'always'],
    'node/prefer-global/console': ['error', 'always'],
    'node/prefer-global/process': ['error', 'always'],
    'node/prefer-global/url-search-params': ['error', 'always'],
    'node/prefer-global/url': ['error', 'always'],
  },
};
