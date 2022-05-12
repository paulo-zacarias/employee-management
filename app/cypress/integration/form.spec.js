/// <reference types="cypress" />

describe('employee form', () => {
  const urlSufix = '/employees/0/edit';
  before(() => {
    if (Cypress.config().baseUrl) {
      cy.visit('/' + urlSufix);
    } else {
      cy.visit(Cypress.env('baseUrl') + urlSufix);
    }
  });

  it('verifies form functionality', () => {
    cy.get('button[type="submit"]').should('be.disabled');
    cy.get('input').should('have.length', 5);
    cy.get('[formControlName="firstName"]').type('Jon');
    cy.get('[formControlName="lastName"]').type('Snow');
    cy.get('[formControlName="phone"]').type('37200000000');
    cy.get('body').click();
    cy.get('form').contains('Invalid phone format');
    cy.get('[formControlName="phone"]').clear();
    cy.get('[formControlName="phone"]').type('+37200000000');
    cy.get('[formControlName="birthDate"]').type(new Date().toString());
    cy.get('[formControlName="officeId"]').click();
    cy.get('mat-option').first().click();
    cy.get('button[type="submit"]').should('not.be.disabled');
  });
});
