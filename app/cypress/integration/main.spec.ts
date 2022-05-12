/// <reference types="cypress" />

describe('main app', () => {
  before(() => {
    if (Cypress.config().baseUrl) {
      cy.visit('/');
    } else {
      cy.visit(Cypress.env('baseUrl'));
    }
  });

  it('renders main pages', () => {
    cy.get('.cy-title').should('have.text', 'Employee List');
    cy.get('a').last().click();
    cy.get('.cy-title').should('have.text', 'Office List');
  });
});
