Feature: Top menu Apps

   Background:
      Given the playground is using the Global menu

   Scenario: Verify applications are displayed correctly
      Then the top menu applications are displayed in the page in order

   Scenario: Verify title is displayed correctly
      Then the top menu is displayed on the page and has a title

   Scenario Outline: Verify that the apps are displayed correctly
      Then the app "<app>" exists in the top menu with order: "<index>"

      Examples:
         | index | app |
         | 1 | app1      |
         | 2 | app2      |
         | 3 | app3      |
         | 4 | app4      |

   Scenario: Verify menu options are displayed correctly
      Then the top menu is displayed on the page and has menu options
   
   Scenario: Verify dropdown menu options are displayed correctly
      Then the top menu is displayed on the page and people has dropdown options
