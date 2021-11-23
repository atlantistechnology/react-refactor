module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
  },
  ignorePatterns: ['*.test.*', '*_spec.*']
}
