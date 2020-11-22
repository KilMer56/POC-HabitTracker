module.exports = {
    parserOptions: {
        parser: 'babel-eslint',
        ecmaFeatures: {
            legacyDecorators: true
        }
    },
    extends: [
      'plugin:vue/vue3-recommended',
    ],
    rules: {
        "no-unused-vars": "off"
    }
  }