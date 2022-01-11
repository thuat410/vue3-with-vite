module.exports = {
  extends: ["plugin:vue/vue3-recommended", "prettier"],
  rules: {
    "vue/script-setup-uses-vars": 'error',
    "vue/no-unused-vars": 'error'
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  }
};
