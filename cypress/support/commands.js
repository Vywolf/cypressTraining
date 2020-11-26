// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options)
// => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject,
// options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import 'cypress-shadow-dom';

Cypress.Commands.add("loginSSO", () => {
  cy.visit(Cypress.env("baseUrl"));
  cy.wait(4000);

  cy.url().then(url => {
    if (url.includes("fedsso.perf")) {
      cy.get(Cypress.env("inputBox_user_pingFed")).type(
        Cypress.env("sso_login_username")
      );
      cy.contains("Next").click();
      cy.get(Cypress.env("inputBox_password"), {
        timeout: 10000
      }).type(Cypress.env("sso_login_password"));
      cy.get(Cypress.env("btn_LogIn")).click();
    }
  });
});
