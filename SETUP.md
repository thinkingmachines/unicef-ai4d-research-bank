## Setup instructions

To get the website running locally, you will need to do the following:

1. Install `git-restore-mtime`, which provides some [git utilities](https://github.com/MestreLion/git-tools). On Ubuntu, you can run:

```
sudo apt install git-restore-mtime
```

2. Use nvm (node version manager) to install node v18.14.2 (latest stable)

```
nvm install v18.14.2
nvm alias default v18.14.2
which node  //checks current node version
```

3. Activate [corepack to install pnpm](https://pnpm.io/installation#using-corepack)

```
corepack enable
corepack prepare pnpm@latest --activate

```

4. Install required `node_modules`

```
git clone git@github.com:thinkingmachines/unicef-ai4d-research-bank.git
cd unicef-ai4d-research-bank
pnpm install

```

5. Create `.env.local` based from the `.env.sample` file.

6. Install a python virtual environment. You can use [virtualenv](https://virtualenv.pypa.io/en/latest/) for this.

7. In your virtual environment, run the following command to install the required python libraries

```bash
pip install -r requirements.txt
```

**_Make sure to set your virtual environment before running the next steps_**

8. Generate a `catalog.json` file. This file will be based on the `yaml` files in the `catalog` directory

```
pnpm merge-catalog
```

9. Run the web app using `pnpm dev`

## Running tests

1. Make sure you already ran `pnpm install` since this is required to install cypress
2. Build the web app for production using `pnpm build:test-env`. This required since Cypress tests against the production build using a fixtures catalog database.
3. **_[Optional for WSL users]_** You may need to install some extra dependencies in your linux system as show in [**_the cypress docs_**](https://docs.cypress.io/guides/getting-started/installing-cypress#Linux-Prerequisites). In case you get weird issues like `gpu_memory_buffer_support_x11.cc(44)]`, you may need to [reset your wsl instance](https://github.com/cypress-io/cypress/issues/23343#issuecomment-1379954648) by typing `wsl --shutdown` in powershell or by restarting your device.
4. Run `pnpm test:e2e:headless` to run all the current tests or `pnpm test:e2e` to run the GUI which allows you to run tests on a per file basis and visualize how your tests run.

## Deploying

Forking the project will copy all the build and deploy scripts, but you will need to manually update some other settings for the project to properly deploy

1. Fork the project.
   - The forked project will automatically run the github actions workflows, but will fail with the following error `Run actions/checkout@v3 Error: Input required and not supplied: token` fixed by the next steps
2. Create a `DEPLOY_PAT` secret via `https://github.com/settings/tokens` and place it in `your_forked_repo->settings->Secrets and Variables->Actions`
   - This will allow the github actions runner to run some of the build actions which normally require authentication
3. Re-run the failing `build` and `deploy` checks via `commits->the little red x button->details->Re-run all jobs`
4. Go to `repo->settings->code and automation->pages` and update the following settings:
   1. Change `Build and Deployment` source to `deploy from a branch`
   2. Set the deploy branch to be `gh-pages` branch `/(root)` directory
   3. Rerun build and deploy checks
5. Update the prefixes which are commented with `// override-prefix` in the `vite.config.ts` `.env.github` files. An example commit which does this is found here [found here](https://github.com/butchland/my-ai4d-research-bank/commit/ae92fb66e88edabf9ef47ed5ca3a68a50f20a0cf)
6. Wait for final automated build and deploy checks and the final link to the live site should be available in `settings->pages`

## Validating Google Drive URLs (Optional)

**IMPORTANT**: If you plan to _host, add or update_ catalog items with datasets stored on **Google Drive**, you will need to setup a GCP Project and
create a Google Storage API Key within that project with access to the Google Drive API.

> Note: This is due to a work around done in order to allow  Google Drive URLs to be downloaded without triggering
an download screen for large files as [documented here](https://bytesbin.com/skip-google-drive-virus-scan-warning-large-files/)

Don't worry, as of the time of this writing, the Google Drive API is free and is used only for rate-limiting access
to your Google Drive datasets.

This is a requirement in order for the validation (i.e. `pnpm validate-catalog`) process to automatically check if your google drive URLs for your datasets are accessible to the public.

* An overview of the process to setup your GCP Project and API key is [discussed here](https://bytesbin.com/skip-google-drive-virus-scan-warning-large-files/#Method_1_Using_Google_Drive_API).

* To setup a GCP Project here are some [useful links](https://cloud.google.com/resource-manager/docs/creating-managing-projects#before_you_begin)

* To create a Google Drive API Key, you will need to enable the [Google Drive API](https://console.cloud.google.com/apis/api/drive.googleapis.com/) in your project and [create a Google Drive API Key](https://cloud.google.com/api-keys/docs/create-manage-api-keys) for it.

* Next, add an environment variable `GSTORAGE_API_KEY` with the value of the Google Drive API Key in your local environment.

* You will also need to add this `GSTORAGE_API_KEY`  as a secret to your Github Deploy Actions environment. Place the `GSTORAGE_API_KEY` secret in `your_forked_repo->settings->Secrets and Variables->Actions`

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
