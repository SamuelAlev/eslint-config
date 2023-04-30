const tsconfig = process.env.ESLINT_TSCONFIG || 'tsconfig.json';

module.exports = {
    reportUnusedDisableDirectives: true,
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] },
            typescript: true,
        },
    },

    extends: [
        'standard',
        'plugin:jsonc/recommended-with-jsonc',
        'plugin:eslint-comments/recommended',
        'plugin:yml/standard',
        'plugin:markdown/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'prettier',
    ],
    plugins: ['html', 'unicorn', 'no-only-tests', 'prettier'],
    ignorePatterns: [
        '*.min.*',
        '*.d.ts',
        'CHANGELOG.md',
        'dist',
        'LICENSE*',
        'output',
        'out',
        'coverage',
        'public',
        'temp',
        'package-lock.json',
        'pnpm-lock.yaml',
        'yarn.lock',
        '__snapshots__',
    ],
    overrides: [
        {
            files: ['*.json', '*.json5'],
            parser: 'jsonc-eslint-parser',
            rules: {
                'jsonc/array-bracket-spacing': ['error', 'never'],
                'jsonc/comma-dangle': ['error', 'never'],
                'jsonc/comma-style': ['error', 'last'],
                'jsonc/indent': ['error', 4],
                'jsonc/key-spacing': ['error', { beforeColon: false, afterColon: true }],
                'jsonc/no-octal-escape': 'error',
                'jsonc/object-curly-newline': ['error', { multiline: true, consistent: true }],
                'jsonc/object-curly-spacing': ['error', 'always'],
                'jsonc/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
            },
        },
        {
            files: ['*.yaml', '*.yml'],
            parser: 'yaml-eslint-parser',
            rules: {
                'spaced-comment': 'off',
                'yml/quotes': ['error', { prefer: 'double', avoidEscape: false }],
                'yml/no-empty-document': 'off',
            },
        },
        {
            files: ['package.json'],
            parser: 'jsonc-eslint-parser',
            rules: {
                'jsonc/sort-keys': [
                    'error',
                    {
                        pathPattern: '^$',
                        order: [
                            'publisher',
                            'name',
                            'displayName',
                            'type',
                            'version',
                            'private',
                            'packageManager',
                            'description',
                            'author',
                            'license',
                            'funding',
                            'homepage',
                            'repository',
                            'bugs',
                            'keywords',
                            'categories',
                            'sideEffects',
                            'exports',
                            'main',
                            'module',
                            'unpkg',
                            'jsdelivr',
                            'types',
                            'typesVersions',
                            'bin',
                            'icon',
                            'files',
                            'engines',
                            'activationEvents',
                            'contributes',
                            'scripts',
                            'peerDependencies',
                            'peerDependenciesMeta',
                            'dependencies',
                            'optionalDependencies',
                            'devDependencies',
                            'pnpm',
                            'overrides',
                            'resolutions',
                            'eslintConfig',
                        ],
                    },
                    {
                        pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
                        order: { type: 'asc' },
                    },
                    {
                        pathPattern: '^exports.*$',
                        order: ['types', 'require', 'import'],
                    },
                ],
            },
        },
        {
            files: ['*.js', '*.cjs', '*.jsx'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
                '@typescript-eslint/no-require-imports': 'off',
            },
        },
        {
            files: ['*.d.ts'],
            rules: {
                'import/no-duplicates': 'off',
            },
        },
        {
            files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
            rules: {
                'no-void': ['error', { allowAsStatement: true }],
            },
        },
        {
            files: ['scripts/**/*.*', 'cli/**/*.*'],
            rules: {
                'no-console': 'off',
            },
        },
        {
            files: [
                '*.test.ts',
                '*.test.tsx',
                '*.test.js',
                '*.test.jsx',
                '*.spec.ts',
                '*.spec.tsx',
                '*.spec.js',
                '*.spec.jsx',
            ],
            rules: {
                'no-unused-expressions': 'off',
                'no-only-tests/no-only-tests': 'error',
            },
        },
        {
            // Code blocks in markdown file
            files: ['**/*.md/*.*'],
            rules: {
                '@typescript-eslint/no-redeclare': 'off',
                '@typescript-eslint/no-unused-vars': 'off',
                '@typescript-eslint/no-use-before-define': 'off',
                '@typescript-eslint/no-var-requires': 'off',
                '@typescript-eslint/comma-dangle': 'off',
                '@typescript-eslint/consistent-type-imports': 'off',
                'import/no-unresolved': 'off',
                'unused-imports/no-unused-imports': 'off',
                'unused-imports/no-unused-vars': 'off',
                'no-alert': 'off',
                'no-console': 'off',
                'no-restricted-imports': 'off',
                'no-undef': 'off',
                'no-unused-expressions': 'off',
                'no-unused-vars': 'off',
            },
        },
        {
            parserOptions: {
                tsconfigRootDir: process.cwd(),
                project: [tsconfig],
            },
            parser: '@typescript-eslint/parser',
            excludedFiles: ['**/*.md/*.*'],
            files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
            // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended-requiring-type-checking.ts
            rules: {
                'no-throw-literal': 'off',
                '@typescript-eslint/no-throw-literal': 'error',
                'no-implied-eval': 'off',
                '@typescript-eslint/no-implied-eval': 'error',
                'dot-notation': 'off',
                '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],
                '@typescript-eslint/no-floating-promises': 'error',
                '@typescript-eslint/no-misused-promises': 'error',
                '@typescript-eslint/await-thenable': 'error',
                '@typescript-eslint/no-for-in-array': 'error',
                '@typescript-eslint/no-unnecessary-type-assertion': 'error',
                '@typescript-eslint/no-unsafe-argument': 'error',
                '@typescript-eslint/no-unsafe-assignment': 'error',
                '@typescript-eslint/no-unsafe-call': 'error',
                '@typescript-eslint/no-unsafe-member-access': 'error',
                '@typescript-eslint/no-unsafe-return': 'error',
                'require-await': 'off',
                '@typescript-eslint/require-await': 'error',
                '@typescript-eslint/restrict-plus-operands': 'error',
                '@typescript-eslint/restrict-template-expressions': 'error',
                '@typescript-eslint/unbound-method': 'error',
            },
        },
    ],
    rules: {
        'prettier/prettier': 'error',
        'linebreak-style': ['error', 'unix'],
        'prefer-template': 'error',
        'template-curly-spacing': 'error',
        'no-useless-concat': 'error',
        'no-var': 'error',
        eqeqeq: 'error',
        'no-eval': 'error',
        'no-extra-bind': 'error',
        curly: ['error', 'all'],
        semi: ['error', 'always'],
        quotes: ['error', 'single', { avoidEscape: true }],
        'vars-on-top': 'error',
        'block-scoped-var': 'error',
        'array-callback-return': 'error',
        'no-use-before-define': 'off',
        'object-shorthand': [
            'error',
            'always',
            {
                ignoreConstructors: false,
                avoidQuotes: true,
            },
        ],
        'jsonc/no-dupe-keys': 'error',
        'consistent-return': 'off',
        complexity: ['off', 11],
        'no-alert': 'warn',
        'no-case-declarations': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-with': 'error',
        'no-void': 'error',
        'no-useless-escape': 'off',
        'no-invalid-this': 'error',
        'require-await': 'off',
        'no-return-assign': 'off',
        'max-statements-per-line': ['error', { max: 1 }],
        'prefer-exponentiation-operator': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'generator-star-spacing': 'off',
        'spaced-comment': [
            'error',
            'always',
            {
                line: {
                    markers: ['/'],
                    exceptions: ['/', '#'],
                },
                block: {
                    markers: ['!'],
                    exceptions: ['*'],
                    balanced: true,
                },
            },
        ],
        'prefer-const': [
            'error',
            {
                destructuring: 'all',
                ignoreReadBeforeAssign: true,
            },
        ],
        'prefer-arrow-callback': [
            'error',
            {
                allowNamedFunctions: false,
                allowUnboundThis: true,
            },
        ],
        'object-curly-spacing': ['error', 'always'],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        'no-debugger': 'error',
        'no-constant-condition': 'warn',

        // unicorns
        // Pass error message when throwing errors
        'unicorn/error-message': 'error',
        // Uppercase regex escapes
        'unicorn/escape-case': 'error',
        // Array.isArray instead of instanceof
        'unicorn/no-instanceof-array': 'error',
        // Prevent deprecated `new Buffer()`
        'unicorn/no-new-buffer': 'error',
        // Keep regex literals safe!
        'unicorn/no-unsafe-regex': 'error',
        // Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
        'unicorn/number-literal-case': 'error',
        // use find when possible
        'unicorn/prefer-array-find': 'error',
        // use default param instead of foo = foo || 'bar';
        'unicorn/prefer-default-parameters': 'error',
        // includes over indexOf when checking for existence
        'unicorn/prefer-includes': 'error',
        // String methods startsWith/endsWith instead of more complicated stuff
        'unicorn/prefer-string-starts-ends-with': 'error',
        // Use replaceAll instead of replace with regex
        'unicorn/prefer-string-replace-all': 'error',
        // textContent instead of innerText
        'unicorn/prefer-text-content': 'error',
        // Enforce throwing type error when throwing error while checking typeof
        'unicorn/prefer-type-error': 'error',
        // Use new when throwing error
        'unicorn/throw-new-error': 'error',
        // Prefer using the node: protocol
        'unicorn/prefer-node-protocol': 'error',
        'unicorn/no-array-for-each': 'error',
        'unicorn/custom-error-definition': 'error',
        'unicorn/better-regex': 'error',
        'unicorn/explicit-length-check': 'error',
        'unicorn/no-await-expression-member': 'error',
        'unicorn/no-nested-ternary': 'error',
        'unicorn/no-new-array': 'error',
        'unicorn/no-this-assignment': 'error',
        'unicorn/no-useless-length-check': 'error',
        'unicorn/catch-error-name': 'error',

        // import
        'sort-imports': [
            'error',
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
                allowSeparatedGroups: false,
            },
        ],
        'import/order': 'error',
        'import/first': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-unresolved': 'off',
        'import/no-absolute-path': 'off',
        'import/newline-after-import': ['error', { count: 1, considerComments: true }],
        'import/no-duplicates': ['error', { 'prefer-inline': true }],

        // TS
        '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
        '@typescript-eslint/member-delimiter-style': 'error',
        '@typescript-eslint/type-annotation-spacing': ['error', {}],
        '@typescript-eslint/consistent-type-imports': [
            'error',
            { prefer: 'type-imports', disallowTypeAnnotations: false },
        ],
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/no-require-imports': 'error',

        // React
        'jsx-quotes': ['error', 'prefer-double'],
        'react/prop-types': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-no-useless-fragment': 'error',
    },
};
