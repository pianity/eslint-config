module.exports = {
    env: {
        commonjs: false,
        es6: true,
    },
    extends: [
        "airbnb-base",
        "eslint:recommended",

        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",

        "prettier",
    ],
    plugins: ["@typescript-eslint", "eslint-plugin-tsdoc"],
    parser: "@typescript-eslint/parser",
    ignorePatterns: [],
    rules: {
        "no-constant-condition": "warn",
        "no-else-return": "off",
        "@typescript-eslint/explicit-module-boundary-types": ["off"],
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                varsIgnorePattern: "^_.*",
                argsIgnorePattern: "^_.*",
            },
        ],
        "@typescript-eslint/prefer-namespace-keyword": "off",

        "tsdoc/syntax": "warn",

        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",

        "max-len": ["warn", { code: 100 }],
        "prefer-template": "off",
        "no-use-before-define": "off",
        "no-unused-vars": "off",
        "no-restricted-imports": [
            "error",
            {
                patterns: [".", "../*", "./*"],
            },
        ],
        "no-underscore-dangle": ["off"],
        "class-methods-use-this": ["off"],
        "linebreak-style": ["error", "unix"],
        camelcase: ["error"],
        "require-jsdoc": ["off"],
        "no-invalid-this": ["off"],
        "arrow-body-style": ["off"],
        "no-shadow": ["off"],
        "no-return-await": ["off"],
        "prefer-promise-reject-errors": ["off"],
        "no-param-reassign": ["off"],
        "no-useless-return": ["off"],
        "no-undef": ["error"],
        "no-plusplus": ["off"],
        radix: ["off"],
        "eslinttguard-for-in": ["off"],
        "no-restricted-syntax": ["off"],
        "no-alert": ["off"],
        "guard-for-in": ["off"],
        "max-classes-per-file": ["off"],
        "no-await-in-loop": ["off"],
        "no-continue": ["off"],
        "no-console": ["off"],
    },
};
