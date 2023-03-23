# UNICEF AI4D (AI for Development) Research Bank Project

<!--
[![codecov](https://codecov.io/gh/wtchnm/Vitamin/branch/main/graph/badge.svg?token=H9BBAKGYI0)](https://codecov.io/gh/wtchnm/Vitamin) ![Test workflow](https://github.com/wtchnm/Vitamin/actions/workflows/test.yml/badge.svg) ![CodeQL workflow](https://github.com/wtchnm/Vitamin/actions/workflows/codeql-analysis.yml/badge.svg) [![Total alerts](https://img.shields.io/lgtm/alerts/g/wtchnm/Vitamin.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/wtchnm/Vitamin/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/wtchnm/Vitamin.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/wtchnm/Vitamin/context:javascript) [![Vitamin](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/etow1b&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/etow1b/runs) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/wtchnm/Vitamin/blob/main/LICENSE)
-->

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/wtchnm/Vitamin/blob/main/LICENSE)
[![Unicef AI4D Research Bank](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/simple/ivvovd&style=flat&logo=cypress)](https://cloud.cypress.io/projects/ivvovd/runs)

The UNICEF AI4D Research Bank is part of Thinking Machines's [overall push for open science through the AI4D](https://stories.thinkingmachin.es/unicef-ai4d-research-bank/) (AI for Development) initiative which aims to accelerate the development and adoption of effective machine learning (ML) models for development across Southeast Asia.

This site itself is hosted on [Github Pages](https://thinkingmachines.github.io/unicef-ai4d-research-bank) and uses
the [Vitamin template](https://github.com/wtchnm/Vitamin) with ~~customized~~ simplified features

## Contributing Datasets and Models

- Instructions on adding models and datasets are [provided here](catalog-contribution.md).

## Features

- [Vite](https://vitejs.dev) with [React](https://reactjs.org), [TypeScript](https://www.typescriptlang.org) and [absolute imports](https://github.com/aleclarson/vite-tsconfig-paths).
- [Tailwind CSS v3](https://tailwindcss.com) with a [basic reset for form styles](https://github.com/tailwindlabs/tailwindcss-forms) and a [Prettier plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) that automatically sorts classes.
- Use [ESLint](https://eslint.org), [stylelint](https://stylelint.io) and [Prettier](https://prettier.io) on VSCode and before you commit with [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged).
- [PWA](https://github.com/antfu/vite-plugin-pwa) with [17/17 Lighthouse score](https://web.dev/pwa-checklist/).
- Write unit and integration tests with [Vitest](https://vitest.dev/) and [Testing Library](https://testing-library.com/).
- Write e2e tests with [Cypress](https://www.cypress.io).
- ~~GitHub Actions for automatic [dependency updates](https://renovatebot.com/), [CodeQL Analysis](https://securitylab.github.com/tools/codeql), running tests and code coverage with [Codecov](https://about.codecov.io/).~~
- Deploy to ~~[vercel.com](https://vercel.com/) with pre-configured [SPA fallback](https://vercel.com/docs/configuration#routes/advanced/spa-fallback).~~ Github Pages.

## Getting started

To see the instructions for original Vitamin template [see this](old-README.md)

Customizations made to the installation and setup instructions for the Research Bank site are now [updated here](SETUP.md):

## Scripts

- `pnpm dev` - start a development server with hot reload.
- `pnpm build` - build for production. The generated files will be on the `dist` folder.
- `pnpm preview` - locally preview the production build.
- `pnpm test` - run unit and integration tests related to changed files based on git.
- `pnpm test:ci` - run all unit and integration tests in CI mode.
- `pnpm test:e2e` - run all e2e tests with the Cypress Test Runner.
- `pnpm test:e2e:headless` - run all e2e tests headlessly.
- `pnpm format` - format all files with Prettier.
- `pnpm lint` - runs TypeScript, ESLint and Stylelint.
- `pnpm validate` - runs `lint`, `test:ci` and `test:e2e:ci`.
