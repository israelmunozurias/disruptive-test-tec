module.exports = {
  root: true,
  env: {
    node: true,
    es6: false,
  },
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  parserOptions: {
    ecmaVersion: 5,
  },
  plugins: ["import", "node", "promise"],
  rules: {
    "no-console": "error",
    "no-unused-vars": "error",
    "node/no-unsupported-features/es-syntax": [
      "error",
      { ignores: ["modules"] },
    ],
    "node/no-missing-import": "error",
  },
};
