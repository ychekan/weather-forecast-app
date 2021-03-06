module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
    "arrow-body-style": 0,
    "react/prefer-stateless-function": 0,
    "no-trailing-spaces": 0,
    "comma-dangle": 0,
    "no-console": 0,
    "radix": 0,
    "max-len": [
      2,
      {
        "code": 120,
        "ignorePattern": "^import"
      }
    ],
    "jsx-a11y/label-has-for": 0,
    "class-methods-use-this": 0,
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "react/jsx-props-no-spreading": ["error", {"exceptions": ["TextInputMask"]}]
  },
};
