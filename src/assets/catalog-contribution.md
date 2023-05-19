# Contributing Datasets and Models to the Research Bank

Submitting a pull request (PR) is a way for contributors to add models and datasets to the UNICEF AI4D Research Bank.
This guide will walk you through the steps to submit a PR to the UNICEF AI4D Research Bank Github repository.

- Fork the Github repository by clicking on the "Fork" button located in the top-right corner of the repository's main page. This will create a copy of the repository in your own Github account.

- Clone your forked repository to your local directory or to a codespace. You can use the following command in your terminal to clone the repository:

```bash
git clone https://github.com/<your-username>/<repository-name>.git
```

- Copy the sample file `catalog-item.yml.sample` in provided in the `catalog` folder and rename it to a unique file name with a `.yml` file extension. This file will be used to add your item's data. Please make sure the file name is in lowercase with no spaces and no special characters (except possibly for a dash(`-`), no underscores).

- Edit the yml file you created and add your item's data. Follow the instructions in the comments in the file. If you are not providing data for any optional fields, remove them from the file.

- Save the yml file and do a git commit to your local git repository. Run the following command.

```bash
git add .
git commit -m "<your-git-commit-message"
```

Your git commit message should be a short description of what items you are adding or updating"

- Push the changes you made in your local repository to your forked repository on Github using the following command in your terminal:

```bash
git push
```

- Create a Pull Request to the main UNICEF AI4D Research Bank repository. This can be done by clicking on the "New Pull Request" button located in the main page of your forked repository. The source of the pull request is whatever git branch you used to create your changes in (default `main`).

- Check that the Pull Request passes the validation (it should have a green check on your PR). If it fails, fix the errors in your local repository and push the changes again.

- Once the Pull Request passes validation, notify the maintainers of your request (optional). Github will already notify the maintainers of your Pull Request via email.

- If you wish to validate if your entries are correct before pushing it to the repo, install the development environment. Follow the [instructions for a local development setup](SETUP.md). Run the command to run the validation script:

```
pnpm validate-catalog
```

Fix any errors that are flagged. If no errors are flagged, you may submit the entries for merging into the UNICEF AI4D Research Bank

- Once your Pull Request has been approved and merged by the maintainers of the UNICEF AI4D Research Bank, you will get notified via email.
