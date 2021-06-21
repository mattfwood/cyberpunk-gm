module.exports = {
  extends: ['blitz'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 80,
        semi: true,
      },
    ],
    'jsx-a11y/no-onchange': 0,
  },
};
