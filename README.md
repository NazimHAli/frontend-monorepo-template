# frontend-monorepo-template

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

> Monorepo template configured with Yarn 2, Typescript, automated Gihub releases and npm publishing.

## Structure

```
project
│   README.md
│
└───.github
│   └───workflows
│       │   release.yml
│       │   unit-tests.yml
│
└───packages
    └───package-a
    │   │   release.yml
    │   │   package.json
    │   │   tsconfig.json
    │   └───src
    │   |     | index.ts
    │   └───test
    │         | index.spec.ts
    └───package-b
        │   release.yml
        │   package.json
        │   tsconfig.json
        └───src
        |     | index.ts
        └───test
               | index.spec.ts

```

The folder `packages` contains independent npm packages. Each one has its own `package.json` with a unique name and yarn workspaces will automatically recognize them.
Review [yarn workspaces](https://yarnpkg.com/features/workspaces) for requirements.

## Shared configuration examples

- [jest.base-config.js](/jest.base-config.js)
  - [package-a/jest.config.js](/packages/package-a/jest.config.js)
  - [package-b/jest.config.js](/packages/package-b/jest.config.js)
- [tsconfig.json](/tsconfig.json)
  - [package-a/tsconfig.json](/packages/package-a/tsconfig.json)
  - [package-b/tsconfig.json](/packages/package-b/tsconfig.json)

## Generate new project

1. [Option 1 - Generate GitHub template](/generate) since this repo is configured as a template
2. Option 2 - scaffold new project with `degit`
   - `mkdir new-monorepo`
   - `npx degit NazimHAli/frontend-monorepo-template new-monorepo`

##### Optional & recommended configurations

- [semantic-releases](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/getting-started.md#getting-started)
  - Automates versioning, GitHub releases + publishing to registries like npmjs
- [commitizen](https://commitizen.github.io/cz-cli/)
  - Simple commit conventions for internet citizens. When you commit with Commitizen, you'll be prompted to fill out any required commit fields at commit time.

## Run scripts against each package

- `yarn workspaces foreach run test`
- `yarn workspaces foreach run build`

## Similar projects

- [ts-monorepo](https://github.com/NiGhTTraX/ts-monorepo)
- [typescript-npm-package-template](https://github.com/ryansonshine/typescript-npm-package-template)
- [node-module-boilerplate](https://github.com/sindresorhus/node-module-boilerplate)

[build-img]: https://github.com/NazimHAli/frontend-monorepo-template/actions/workflows/release.yml/badge.svg
[build-url]: https://github.com/NazimHAli/frontend-monorepo-template/actions/workflows/release.yml
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
[downloads-img]: https://img.shields.io/npm/dt/frontend-monorepo-template
[downloads-url]: https://www.npmtrends.com/frontend-monorepo-template
[issues-img]: https://img.shields.io/github/issues/NazimHAli/frontend-monorepo-template
[issues-url]: https://github.com/NazimHAli/frontend-monorepo-template/issues
[npm-img]: https://img.shields.io/npm/v/frontend-monorepo-template
[npm-url]: https://www.npmjs.com/package/frontend-monorepo-template
[semantic-release-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
