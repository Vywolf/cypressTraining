**Cypress version**
The cypress current version used for the test suite is **3.5.0**

**Running tests with different environments**

The configuration files for each environment are in the cypress/config folder, if a new environment needs to be added just add a new file in there.
To run headless:
    npx cypress run --spec cypress/integration/cucumber_tests_ui/DashboardView/{nameOfFeatureFile.feature} --env name={environment}

Example for running HEADLESS only Reports UI tests:
    npx cypress run --spec "cypress/integration/cucumber_tests_ui/ReportView/{featureFolder}/**.feature" --env name={environment}

To open cypress UI:
    npx cypress open  --env name={environment}

Note: the {environment} should be as it appears on the cypress/config/.json file (stage,dev,beta)
