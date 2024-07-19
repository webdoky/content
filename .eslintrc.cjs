module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "airbnb-base",
    "plugin:editorconfig/noconflict",
    "plugin:promise/recommended",
    "plugin:array-func/all",
    "plugin:node/recommended",
    "plugin:security/recommended",
    "plugin:unicorn/all",
    "plugin:prettier/recommended",
    "plugin:jest/all",
    "prettier",
  ],
  overrides: [
    {
      files: ["./*", "setup-tests.js", "setupTests.js"],
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: true,
          },
        ],
        "node/no-extraneous-import": "off",
        "node/no-unpublished-import": "off",
        "node/no-unpublished-require": "off",
        "no-console": "off",
      },
    },
    {
      env: {
        "jest/globals": true,
      },
      files: ["**/*.test.js"],
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: true,
          },
        ],
        "no-magic-numbers": "off",
        "node/no-extraneous-import": "off",
        "jest/require-hook": "error",
      },
    },
    {
      env: {
        "jest/globals": true,
      },
      files: ["**/__mocks__/**"],
      rules: {
        "import/prefer-default-export": "off",
        "no-magic-numbers": "off",
      },
    },
    {
      files: ["**/front-matter-*"],
      rules: {
        "import/extensions": ["error", "ignorePackages"],
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  plugins: [
    "prettier",
    "promise",
    "unicorn",
    "array-func",
    "node",
    "jest",
    "simple-import-sort",
    "editorconfig",
    "security",
  ],
  root: true,
  rules: {
    "no-param-reassign": ["error", { props: false }],
    // 'consistent-return': 'off',
    // 'arrow-body-style': 0,
    // 'comma-dangle': 0,
    // 'import/prefer-await-to-then': 'off',
    // 'no-underscore-dangle': 'off',
    "unicorn/no-null": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "no-void": ["error", { allowAsStatement: true }],
    "no-magic-numbers": [
      "error",
      {
        ignore: [0, 1, -1],
        ignoreDefaultValues: true,
      },
    ],
    "no-console": "off",
    "jest/prefer-expect-assertions": "off",
    "jest/no-conditional-expect": "off",
    "jest/expect-expect": "off",
    "jest/prefer-strict-equal": "off",
    "unicorn/prefer-spread": "off",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Node.js builtins.
          // eslint-disable-next-line global-require
          [`^(${require("module").builtinModules.join("|")})(/|$)`],
          // Packages.
          ["^@?(\\w|.)[^./]"],
          // Side effect imports.
          ["^\\u0000"],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
    "import/order": "off",
    "no-loss-of-precision": "warn",
    "promise/no-nesting": "error",
    "unicorn/prefer-node-protocol": "off",
    "unicorn/no-unsafe-regex": "warn",
    "unicorn/prefer-at": "off",
    "unicorn/no-process-exit": "off",
    "no-process-exit": "off",
    "unicorn/no-array-for-each": "off",
    "unicorn/prefer-top-level-await": "off",
    "unicorn/no-array-reduce": "off",
    "jest/require-hook": "off",
  },
};
