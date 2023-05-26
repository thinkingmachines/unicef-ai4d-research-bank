# Setup

## Setup instructions

1. Use nvm (node version manager) to install node v18.14.2 (latest stable)

```
nvm install v18.14.2
nvm alias default v18.14.2
which node  // checks current node version
```

2. Activate [corepack to install pnpm](https://pnpm.io/installation#using-corepack)

```
corepack enable
corepack prepare pnpm@latest --activate

```

3. Install required `node_modules`

```
git clone git@github.com:thinkingmachines/unicef-ai4d-research-bank.git
cd unicef-ai4d-research-bank
pnpm install

```

4. Create `.env.local` based from the `.env.sample` file.

5. Install a python virtual environment. You can use [virtualenv](https://virtualenv.pypa.io/en/latest/) for this.

6. In your virtual environment, run the following command to install the required python libraries

```bash
pip install -r requirements.txt
```

**_Make sure to set your virtual environment before running the next steps_**

7. Generate a `catalog.json` file. This file will be based on the `yaml` files in the `catalog` directory

```
pnpm merge-catalog
```

8. Run the web app using `pnpm dev`

## Running tests

1. Make sure you already ran `pnpm install` since to install cypress
2. Build the web app for production using `pnpm build`. This required since Cypress tests against the production build.
3. **_[Optional for WSL users]_** You may need to install some extra dependencies in your linux system as show in [**_the cypress docs_**](https://docs.cypress.io/guides/getting-started/installing-cypress#Linux-Prerequisites). In case you get weird issues like `gpu_memory_buffer_support_x11.cc(44)]`, you may need to [reset your wsl instance](https://github.com/cypress-io/cypress/issues/23343#issuecomment-1379954648) by typing `wsl --shutdown` in powershell or by restarting your device.
4. Run `pnpm test:e2e:headless` to run all the current tests or `pnpm test:e2e` to run the GUI which allows you to run tests on a per file basis and visualize how your tests run.

## Customizations

- Deploy to github pages instead of vercel (see [deploy workflow](.github/workflows/deploy.yml))

## Notes

- Using [vite](https://vitejs.dev/) with the [Vitamin template](https://github.com/wtchnm/Vitamin) - an opinionated community template (see [demo site](https://vitamin-wtchnm.vercel.app/))
  - uses [pnpm vs npm](https://pnpm.io/pnpm-vs-npm)
  - uses [vitest](https://vitest.dev/) vs Jest
  - uses husky vs pre-commit
  - ~~uses [commitizen](https://github.com/commitizen/cz-cli) for git-commits~~
  - uses [cypress](https://docs.cypress.io/guides/overview/why-cypress) for e2e (end-to-end) tests
    - note: disabled recording because it requires cypress cloud during CI
  - ~~uses [codecov](https://about.codecov.io/) for code coverage reporting~~
    - for actual repo, will require admin rights to add codecov app to research bank github repo and set repo secret. See [codecov install docs for details](https://docs.codecov.com/docs)
