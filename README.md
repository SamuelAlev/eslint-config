# @salev/eslint-config

[![npm](https://img.shields.io/npm/v/@salev/eslint-config)](https://npmjs.com/package/@salev/eslint-config)

-   Single quotes, with semi
-   Designed to work with TypeScript and React out of the box
-   Lint also for JSON, YAML, Markdown
-   Sorted imports, dangling commas
-   Reasonable defaults, best practices, only one-line of config
-   **Style principle**: Minimal for reading, stable for diff

## Usage

### Install

```bash
pnpm add -D eslint prettier typescript react react-dom @salev/eslint-config
```

### Config `.eslintrc`

```json
{
    "extends": "@salev/eslint-config"
}
```

### Config `.prettierrc`

```json
{
    "singleQuote": true,
    "tabWidth": 4,
    "printWidth": 120,
    "trailingComma": "all",
    "arrowParens": "always",
    "endOfLine": "lf"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
    "scripts": {
        "lint": "eslint .",
        "lint:fix": "eslint . --fix"
    }
}
```

### Config VS Code auto fix

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and create `.vscode/settings.json`

```json
{
    "prettier.enable": false,
    "editor.formatOnSave": false,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}
```

## Inspirations

-   [antfu/eslint-config](https://github.com/antfu/eslint-config)

## License

[MIT](./LICENSE) License &copy; 2023-PRESENT [Samuel Alev](https://github.com/SamuelAlev)
