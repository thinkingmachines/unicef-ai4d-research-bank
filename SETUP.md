## Setup instructions

To get the website running locally, you will need to do the following:

1. Install `git-restore-mtime`, which provides some [git utilities](https://github.com/MestreLion/git-tools). On Ubuntu, you can run:

> For Ubuntu

```
sudo apt install git-restore-mtime
```

> For Mac OS (Homebrew)

```
brew install git-tools
```

2. Use nvm (node version manager) to install node v18.14.2 (latest stable)

> For Ubuntu

```

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash     //install nvm
nvm install v18.14.2
nvm alias default v18.14.2
which node  //checks current node version
```

> For Mac OS

```
brew install nvm
source $(brew --prefix nvm)/nvm.sh     // Add nvm to your shell profile (restart terminal after running)
which node  //checks current node version
```

3. Activate [corepack to install pnpm](https://pnpm.io/installation#using-corepack)

> For Ubuntu
```
corepack enable
corepack prepare pnpm@latest --activate
```
> For MacOS
```
brew install corepack
corepack prepare pnpm@latest --activate
```

> If both do not work and you have a node version beyond 18.04
> you can try manually installing pnpm via npm (Ubuntu/MacOS)
```
npm install -g pnpm
````

> If it still doesn't work for macOS, try manually installing pnpm through homebrew
```
brew install pnpm
```

4. Fork the project and install project dependencies

```
git clone git@github.com:thinkingmachines/unicef-ai4d-research-bank.git
cd unicef-ai4d-research-bank
pnpm install

```

5. Create `.env.local` based from the `.env.sample` file. Update the `VITE_HOME_PATH` to use the new project name

```
// env.local for a forked project with the name "unicef-ai4d-research-bank-external"

VITE_HOME_PATH=/unicef-ai4d-research-bank-external
```

6. Update all instances of the original project name `unicef-ai4d-research-bank` in `vite.config.ts`, `cypress.config.ts`, `.env.github`, and `package.json` to your newly forked project name. Image below shows an example for a new project with the name `unicef-ai4d-research-bank-external`

![Update to new name](https://raw.githubusercontent.com/thinkingmachines/unicef-ai4d-research-bank/main/assets/vite-cypress-path-update.png)

7. Install a python virtual environment. You can use [virtualenv](https://virtualenv.pypa.io/en/latest/) for this.

8. In your virtual environment, run the following command to install the required python libraries

```bash
pip install -r requirements.txt
```

**_Make sure to set your virtual environment before running the next steps_**

9. Generate a `catalog.json` file. This file will be based on the `yaml` files in the `catalog` directory

```
pnpm merge-catalog
```

10. Run the web app using `pnpm dev`

## Running tests

1. Build the web app for production using `pnpm build:test-env`. This required since Cypress tests against the production build using a fixtures catalog database.
2. **_[Optional for WSL users]_** You may need to install some extra dependencies in your linux system as show in [**_the cypress docs_**](https://docs.cypress.io/guides/getting-started/installing-cypress#Linux-Prerequisites). In case you get weird issues like `gpu_memory_buffer_support_x11.cc(44)]`, you may need to [reset your wsl instance](https://github.com/cypress-io/cypress/issues/23343#issuecomment-1379954648) by typing `wsl --shutdown` in powershell or by restarting your device.
3. Run `pnpm test:e2e:headless` to run all the current tests or `pnpm test:e2e` to run the GUI which allows you to run tests on a per file basis and visualize how your tests run.

## Deploying

Forking the project will copy all the build and deploy scripts, but you will need to manually update some other settings for the project to properly deploy

1. Create a `DEPLOY_PAT` secret via `https://github.com/settings/tokens` with repo and workflow permissions and place it in `your_forked_repo->settings->Secrets and Variables->Actions`

![genrate token](https://raw.githubusercontent.com/thinkingmachines/unicef-ai4d-research-bank/main/assets/generate-token.png)

![new-token-settings](https://raw.githubusercontent.com/thinkingmachines/unicef-ai4d-research-bank/main/assets/new-token-settings.png)

![your-secret-here](https://raw.githubusercontent.com/thinkingmachines/unicef-ai4d-research-bank/main/assets/your-secret-here.png)

![secrets-and-variables](https://raw.githubusercontent.com/thinkingmachines/unicef-ai4d-research-bank/main/assets/secrets-and-variables.png)

- This will allow the github actions runner to run some of the build actions which normally require authentication

2. Go to `your_repo->actions` and run `Deploy-GH-Pages`. This will create a new branch called `gh-pages` where the compiled website will reside.

![workflows](https://raw.githubusercontent.com/thinkingmachines/unicef-ai4d-research-bank/main/assets/workflows.png)
![run-workflow](https://raw.githubusercontent.com/thinkingmachines/unicef-ai4d-research-bank/main/assets/run-workflow.png)

3. Go to `repo->settings->code and automation->pages` and update the following settings:

   a. Change `Build and Deployment` source to `deploy from a branch`. Note that you can also find the actual link to the deployed website here

   ![deploy-from-branch](https://raw.githubusercontent.com/thinkingmachines/unicef-ai4d-research-bank/main/assets/deploy-from-branch.png)

   b. Set the deploy branch to be `gh-pages` branch `/(root)` directory
   c. Run the `pages-build-deployment` workflow in order for github to deploy the site

4. The after all workflows have been run, the deployed site should show up in the link in step 3

## Validating Google Drive URLs (Optional)

**IMPORTANT**: If you plan to _host, add or update_ catalog items with datasets stored on **Google Drive**, you will need to setup a GCP Project and
create a Google Storage API Key within that project with access to the Google Drive API.

> Note: This is due to a work around done in order to allow Google Drive URLs to be downloaded without triggering
> an download screen for large files as [documented here](https://bytesbin.com/skip-google-drive-virus-scan-warning-large-files/)

Don't worry, as of the time of this writing, the Google Drive API is free and is used only for rate-limiting access
to your Google Drive datasets.

This is a requirement in order for the validation (i.e. `pnpm validate-catalog`) process to automatically check if your google drive URLs for your datasets are accessible to the public.

- An overview of the process to setup your GCP Project and API key is [discussed here](https://bytesbin.com/skip-google-drive-virus-scan-warning-large-files/#Method_1_Using_Google_Drive_API).

- To setup a GCP Project here are some [useful links](https://cloud.google.com/resource-manager/docs/creating-managing-projects#before_you_begin)

- To create a Google Drive API Key, you will need to enable the [Google Drive API](https://console.cloud.google.com/apis/api/drive.googleapis.com/) in your project and [create a Google Drive API Key](https://cloud.google.com/api-keys/docs/create-manage-api-keys) for it.

- Next, add an environment variable `GSTORAGE_API_KEY` with the value of the Google Drive API Key in your local environment.

- You will also need to add this `GSTORAGE_API_KEY` as a secret to your Github Deploy Actions environment. Place the `GSTORAGE_API_KEY` secret in `your_forked_repo->settings->Secrets and Variables->Actions`

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
