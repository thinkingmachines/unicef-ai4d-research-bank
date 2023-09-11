# Contributing Datasets and Models to the ML Web Catalog

To contribute models and datasets to the UNICEF AI4D ML Web Catalog, follow these steps to submit a pull request (PR) on the [UNICEF AI4D ML Web Catalog Github repository](https://github.com/thinkingmachines/unicef-ai4d-research-bank).

1. **Fork the main repository**: Click on the "Fork" button in the top-right corner of the repository's main page to create a copy of the repository in your own Github account (or [click on this link](https://github.com/thinkingmachines/unicef-ai4d-research-bank/fork)).

   ![Fork button](https://raw.githubusercontent.com/thinkingmachines/unicef-ai4d-research-bank/main/assets/fork-button1.png)

2. **Clone your forked repository**: Clone your forked repository to your local directory using the following command in your terminal (assuming that your forked repository name is `unicef-ai4d-research-bank`):

   ```bash
   git clone https://github.com/<your-username>/unicef-ai4d-research-bank.git
   ```

   Alternatively you can use your forked github directory to add a new yaml file without having to create a local copy by using [Github's web editor](https://docs.github.com/en/codespaces/the-githubdev-web-based-editor). To edit files in your forked repository using the github web editor, open the following url in your browser:

```bash
https://github.dev/<your-username>/unicef-ai4d-research-bank
```

3. **Create a new YAML File for your dataset/model contribution**: Locate the [`catalog` folder](https://github.com/thinkingmachines/unicef-ai4d-research-bank/tree/main/catalog) in your forked repository and make a copy of the [`sample-catalog-item.yml` file](https://github.com/thinkingmachines/unicef-ai4d-research-bank/blob/main/catalog/sample-catalog-item.yml). Your new file should have a unique lowercase name that is somewhat descriptive of your dataset/model (e.g. `povmap-philippines.yml` for a relative wealth model of the Philippines or `airquality-thailand-model.yml` for an air quality model for Thailand) . Ensure that the file name contains no spaces or special characters (except a dash `-`) and has a `.yml` file extension.

4. **Edit the YAML File**: Open the YAML file you created and add the relevant data for your item. Follow the [instructions provided](https://github.dev/thinkingmachines/unicef-ai4d-research-bank/blob/main/catalog/sample-catalog-item.yml) in the file's comments. Remove any optional fields if you are not providing data for them.

   - The following fields are required:

| Field        | Description               | Remarks                                                                                                                           |
| ------------ | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| name         | Dataset/Model Name        | A short descriptive name or title for your model/dataset                                                                          |
| description  | Model/Dataset Description | A concise but informative description of your model/dataset                                                                       |
| card-type    | Catalog item type         | Valid values are either `model` or `dataset`. Models can also link related datasets.                                              |
| organization | Organization name and URL | Name and URL of the organization/individual providing the model/dataset.                                                          |
| date-added   | Date Added                | Date when the dataset/model was first added to the catalog                                                                        |
| links        | Dataset/model links       | URLs, names and descriptions to datasets, models, documentation and other related information. At least one link must be provided |

The following are the optional, (but _highly recommended!_) fields:

| Field              | Description                                        | Remarks                                                                                                                                                                                                                    |
| ------------------ | -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| country-region     | Country or countries covered                       | Country or countries (and regions) relevant to the dataset or model. The list of valid countries/regions are [listed here](https://github.com/thinkingmachines/unicef-ai4d-research-bank/blob/main/validation/regions.txt) |
| year-period        | Year (or years (`startyear-endyear`)) covered      | Year (or years - format: `startyear-endyear`) relevant to the dataset or model                                                                                                                                             |
| evaluation-metrics | Evaluation metrics or links to metrics discussions | Actual values or links to discussions on metrics can be specified for models. You can list multiple evaluation metrics                                                                                                     |
| tags               | topics or keywords related to the dataset/model    | These can be provided to provide better searchability for your dataset/model                                                                                                                                               |

Evaluation metric subfields can have a `link` or a `metric` (or both) that are relevant to a model.

For a `link` it should have the subfields of `description` and `url` -- the intent is to point to some further discussion (such as charts and plots) of the metrics.

For a `metric`, it should should have the subfields of `metric-type` and `value` -- this is to present any commonly used evaluation metric values such as `accuracy`,`f1-score` or `r-squared`.

The following are the fully optional fields.

| Field        | Description                        | Remarks                                                                                                                                                                        |
| ------------ | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| data-columns | data columns for a dataset preview | These, along with the sample data, provide a peek into what your model/dataset provides                                                                                        |
| sample-data  | sample data for a dataset preview  | If not supplied, a processing script automatically looks for the first available dataset link (csv or geojson) and extracts these columns and sample rows to use as a preview. |

Links have the following subfields:

| Subfield                | Required | Description                              | Remarks                                                                                                                                   |
| ----------------------- | -------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| url                     | yes      | a valid URL link                         | If using a gdrive link, make sure the link is accessible to anyone                                                                        |
| description             | yes      | a link description                       | A concise description of the resource the link is providing                                                                               |
| type                    | yes      | link type                                | The types of resources the url is providing                                                                                               |
| name                    | no       | resource name                            | This can be the filename (useful for dataset links) as distinct from the description                                                      |
| skip-hxl-tag-validation | no       | hxl tag validation flag (`true`/`false`) | Used for to skip hxl tag validation for `csv` dataset link types                                                                          |
| alt-format              | no       | alternative format link                  | This is a list of link `url` and link `type` entries for providing alternate dataset formats (e.g. `geojson`, `csv`) for the same dataset |

Link types - the following types of links are allowed:

| Link type                | Is Dataset | Description                                                 |
| ------------------------ | ---------- | ----------------------------------------------------------- |
| documentation            | no         | link to documentation                                       |
| repository               | no         | link to a code repository                                   |
| code-notebook            | no         | link to a code or a notebook                                |
| model-weights            | no         | link to model weights                                       |
| dataset-csv              | yes        | link to a csv file (checked for hxl tags)                   |
| dataset-geojson          | yes        | link to a geojson file                                      |
| research-paper           | no         | link to a research paper                                    |
| limitations              | no         | link to a discussion on the dataset/model limitations       |
| training-dataset-csv     | yes        | link to a model training csv dataset (checked for hxl tags) |
| training-dataset-geojson | yes        | link to a model training geojson dataset                    |

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

   If you are using the github editor (the url starting with `https://github.dev/<your-github-username>/unicef-ai4d-research-bank`), make sure to commit and push the changes
   back to your repository in order to preserve your edits.

7. **Create a Pull Request**: Go to the **Pull requests** tab of your forked repository and click on the "New pull request" button. This will create a pull request to merge your changes into the main [UNICEF AI4D ML Web Catalog repository](https://github.com/thinkingmachines/unicef-ai4d-research-bank). The source of the pull request should be the git branch you used to make your changes (default `main`).

![Fork button](https://raw.githubusercontent.com/thinkingmachines/unicef-ai4d-research-bank/main/assets/pullrequest.png)

8. **Validate the Pull Request**: Check that your [Pull request passes validation](https://github.com/thinkingmachines/unicef-ai4d-research-bank/pulls) (indicated by a green checkmark). If it fails, address the errors in your forked repository and push the changes again.

9. **Notify the Maintainers**: Optionally, you can notify the maintainers of your pull request. However, even without your notification, Github will already notify them via email about your Pull Request.

10. **Validate Entries (Optional)**: If you want to validate your entries before pushing them to the main repository, install the development environment and follow the instructions for a [local development setup](https://github.com/thinkingmachines/unicef-ai4d-research-bank/blob/main/SETUP.md). Run the validation script using the command:

    ```bash
    pnpm validate-catalog
    ```

    Fix any flagged errors. If no errors are flagged, your entries can be submitted for merging into the UNICEF AI4D ML Web Catalog.

11. **Confirmation and Notification**: Once your Pull Request is approved and merged by the maintainers of the UNICEF AI4D ML Web Catalog, you will receive an email notification.

Please note that this guide provides a step-by-step process for contributing datasets and models to the UNICEF AI4D ML Web Catalog via pull requests on Github.

If you have comments, suggestions and clarifications to improve this contribution guide, feel free to add an issue in our [discussions section](https://github.com/thinkingmachines/unicef-ai4d-research-bank/discussions).
