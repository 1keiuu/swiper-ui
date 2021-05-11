const path = require("path");
const environment = process.env.NODE_ENV || "development";

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 7,
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    quotes: ["error", "double"],
    "import/extensions": [
      "error",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".jsx", ".tsx"],
      },
    ],
    "react/react-in-jsx-scope": "off",
    "no-void": [
      "error",
      {
        allowAsStatement: true,
      },
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/prop-types": "off",
    "operator-linebreak": 0,
    "implicit-arrow-linebreak": 0,
    "comma-dangle": 0,
    "import/prefer-default-export": 0,
    "import/no-unresolved": "off",
  },
  settings: {
    "import/resolver": "webpack",
  },
};
