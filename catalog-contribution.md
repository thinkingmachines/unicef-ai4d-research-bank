# Contributing Datasets and Models to the Research Bank

To contribute models and datasets to the UNICEF AI4D Research Bank, follow these steps to submit a pull request (PR) on the Github repository.

1. **Fork the Repository**: Click on the "Fork" button in the top-right corner of the repository's main page to create a copy of the repository in your own Github account.

2. **Clone the Repository**: Clone your forked repository to your local directory or codespace using the following command in your terminal:

   ```bash
   git clone https://github.com/<your-username>/<repository-name>.git
   ```

3. **Create a YAML File**: Locate the `catalog` folder and make a copy of the `catalog-item.yml.sample` file. Rename the copied file with a unique lowercase name and a `.yml` file extension. Ensure that the file name contains no spaces or special characters (except a dash `-`).

4. **Edit the YAML File**: Open the YAML file you created and add the relevant data for your item. Follow the instructions provided in the file's comments. Remove any optional fields if you are not providing data for them.

5. **Commit Changes**: Save the YAML file and commit your changes to your local git repository using the following commands:

   ```bash
   git add .
   git commit -m "<your-git-commit-message>"
   ```

   Your commit message should briefly describe the items you are adding or updating.

6. **Push Changes**: Push the changes from your local repository to your forked repository on Github using the following command in your terminal:

   ```bash
   git push
   ```

7. **Create a Pull Request**: Go to the main page of your forked repository and click on the "New Pull Request" button. This will create a pull request to merge your changes into the main UNICEF AI4D Research Bank repository. The source of the pull request should be the git branch you used to make your changes (default `main`).

8. **Validate the Pull Request**: Check that the Pull Request passes validation (indicated by a green checkmark). If it fails, address the errors in your local repository and push the changes again.

9. **Notify the Maintainers**: Optionally, you can notify the maintainers of your request. However, Github will already notify them via email about your Pull Request.

10. **Validate Entries (Optional)**: If you want to validate your entries before pushing them to the repository, install the development environment and follow the instructions for a local development setup. Run the validation script using the command:

    ```bash
    pnpm validate-catalog
    ```

    Fix any flagged errors. If no errors are flagged, your entries can be submitted for merging into the UNICEF AI4D Research Bank.

11. **Confirmation and Notification**: Once your Pull Request is approved and merged by the maintainers of the UNICEF AI4D Research Bank, you will receive an email notification.

Please note that this guide provides a step-by-step process for contributing datasets and models to the UNICEF AI4D Research Bank via pull requests on Github.
