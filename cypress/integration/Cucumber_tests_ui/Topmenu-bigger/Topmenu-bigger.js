/// <reference types="Cypress" />
import * as Data from '../../Data/Data';

  Given('the playground is using the Global menu', () => {
    cy.loginSSO();
    cy.wait(1000);
    cy.url().should('eq', 'https://omnitracs-gmenu-playground-navigation-playground-dev.apps.dc12-dev-01.cld.omnitracs.com/app1');
  });
  
  Then('the top menu applications are displayed in the page in order', () => { 
    cy.get('.container .tabs li a')
    .then($apps => {
      expect($apps.length).to.equal(Data.APP_NAMES.length);
      assert.equal($apps.length, Data.APP_NAMES.length);
      $apps.each((index, value) => {
      expect(value.textContent.trim()).to.equal(Data.APP_NAMES[index]);     
        });
    });
  });

  Then('the top menu is displayed on the page and has a title', () => {
  cy.get('ot-global-navbar')
  .shadowFind('div.navbar-start')
  .shadowFirst()
  .then($title => {
      expect($title.text().trim()).to.eq('My Fleets');
      expect($title).to.have.css('color', 'rgb(112, 116, 123)');
  });
});
  
  Then('the app {string} exists in the top menu with order: {string}', (app, index) => {
    cy.get('.container .tabs li a')
    .then($apps => { 
      expect($apps[index-1].textContent.trim()).to.equal(app);     
    });
    cy.get('.container .tabs li a').contains('app');
    cy.contains('app').then($elementFound =>  {
      cy.log($elementFound.text().trim());
    });
  });

  Then('the top menu is displayed on the page and has menu options', () => {
    cy.get('ot-global-navbar')
    .shadow()
    .find('div.navbar-start > div > a.navbar-item.is-link')
    .then($menuOptions => { 
      $menuOptions.each((index, value) => {
        expect(value.textContent.trim()).to.eq(Data.MENU_OPTIONS[index]);
        expect($menuOptions[index].textContent.trim()).to.eq(Data.MENU_OPTIONS[index]);
        expect($menuOptions.eq(index).text().trim()).to.eq(Data.MENU_OPTIONS[index]);
      });
    });
  });
  Then('the top menu is displayed on the page and people has dropdown options', () => {
    cy.shadowGet('ot-global-navbar')
    .shadowFind('.navbar-dropdown .navbar-item.is-link')
    .then($menuOptions => { 
      $menuOptions.each((index, value) => {
        expect(value.textContent.trim()).to.eq(Data.DROPDOWN_MENU_OPTIONS[index]);
        expect($menuOptions[index].textContent.trim()).to.eq(Data.DROPDOWN_MENU_OPTIONS[index]);
      });
    });
  });
  
  Then('the top menu is displayed on the page and I fail', () => {
    cy.get('.container .tabs li a').contains('thisWillFail');
  });