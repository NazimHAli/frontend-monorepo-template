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


## Install

#### Repo is pre-configured as a template

- [Use template](https://github.com/NazimHAli/frontend-monorepo-template/generate)

## Useful commands

Run scripts from each package

```bash
yarn workspaces foreach run lint
```

```bash
yarn workspaces foreach run test
```

```bash
yarn workspaces foreach run build
```

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
