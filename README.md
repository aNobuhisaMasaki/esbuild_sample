# Esbuild Sample

## Description

Boilerplate for modern TypeScript developer using esbuild.

- Package Manager
  - [Yarn](https://github.com/yarnpkg/berry)
- Language
  - [TypeScript](https://github.com/microsoft/TypeScript)
- Testing
  - [jest](https://github.com/facebook/jest)
- Linter
  - [eslint](https://github.com/eslint/eslint)
- Bundler
  - [esbuild](https://github.com/evanw/esbuild)

## Installation

```sh
$ git clone git@github.com:aNobuhisaMasaki/esbuild_sample.git
$ cd esbuild_sample
$ yarn
```

## Features

### Type Checking

```sh
$ yarn type
$ yarn type-watch # Watches file change
```

### Testing

```sh
$ yarn test
$ yarn test-watch # Watches file change
```

### Linting

```sh
$ yarn lint
$ yarn lint-fix # Fixes automatically
$ yarn lint-watch # Watches file change
```

### Bundling

```sh
$ yarn bundle
$ yarn bundle-watch # Watches file change
```

### Building

```sh
$ yarn build
```

## Editor Integration

### [Atom](https://github.com/atom/atom)

1. Open Atom package manager

  `Atom` > `Preferences` > `Install`

2. Search Atom packages

  - `linter-eslint`

  - `linter`

  - `tester-jest`

3. Click `Install`

4. Customize package configs

  `Atom` > `Preferences` > `Packages` > `Filter Packages By Name` > `Settings`

  Or, `Atom` > `Preferences` > `Open Config Folder` and update `config.cson`:

  ```
  "*":
    ...
    "linter-eslint":
      ...
      scopes: [
        ...
        "source.ts"
      ]
    "linter-ui-default":
      ...
      showProviderName: true
    "tester-jest":
      ...
      binaryPath: "yarn test --"
      jestMajorVersion: 27
  ```

## Contribution

1. Fork this repo

2. Create a branch on your fork

3. Create a pull request to this repo

## [Third Party Licenses](./THIRD_PARTY_LICENSES)

## [License (MIT)](./LICENSE)

## Author

[Nobuhisa Masaki](https://github.com/aNobuhisaMasaki)
