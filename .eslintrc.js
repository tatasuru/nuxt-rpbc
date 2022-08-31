module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier', 'standard'],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'vue/multi-word-component-names': 'off',
    'unicorn/prefer-includes': 'off'
  },
}
