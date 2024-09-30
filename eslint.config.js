module.exports = {
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    semi: ['error', 'always'],
    'no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^_',
        args: 'after-used',
        ignoreRestSiblings: true
      }
    ],
    'no-console': 'off',
    'no-debugger': 'error',
    'no-trailing-spaces': 'error',
    'eol-last': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'prefer-const': 'error',
    eqeqeq: ['error', 'always'],
    curly: 'error',
    'brace-style': 'error',
    'array-callback-return': 'warn',
    'default-case': 'warn',
    'consistent-return': 'error'
  }
};
