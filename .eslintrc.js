module.exports = {
  extends: ["blitz"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        singleQuote: true,
        printWidth: 80,
        semi: true,
      },
    ],
  },
}
