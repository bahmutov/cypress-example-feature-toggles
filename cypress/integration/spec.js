// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

it('has feature 1 on, feature 2 off', () => {
  cy.visit('index.html', {
    onBeforeLoad (win) {
      Object.defineProperty(win, 'features', {
        writable: false,
        value: {
          first: true,
          second: false
        }
      })
      // when the application code tries to set "window.features"
      // it will be silently ignored
    }
  })
  // confirm the first checkbox is checked
  cy.get('#first').should('be.checked')
  cy.get('#second').should('not.be.checked')
})

it('has both features on', () => {
  cy.visit('index.html', {
    onBeforeLoad (win) {
      Object.defineProperty(win, 'features', {
        writable: false,
        value: {
          first: true,
          second: true
        }
      })
    }
  })
  cy.get('#first').should('be.checked')
  cy.get('#second').should('be.checked')
})
