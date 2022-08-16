// https://www.npmjs.com/package/eslint-plugin-vue
module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:vue/recommended', // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    'vue/no-unused-vars': 'error',
  },
};
