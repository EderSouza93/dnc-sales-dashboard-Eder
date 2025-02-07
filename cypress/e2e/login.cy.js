describe('Login Flow Correct Credentials', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('should display login form', () => {
    cy.get('form').should('be.visible')
  })

  it('should login with valid creditals', () => {
    cy.get('input[type="email"]').type('ederdev.93@gmail.com')
    cy.get('input[type="password"]').type('Eder&Lih@93')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/home')
    cy.get('header').should('be.visible')
  })
})

describe('Login Flow Invalid Credentials', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('should display login form', () => {
    cy.get('form').should('be.visible')
  })

  it('should login with valid Credentials', () => {
    cy.get('input[type="email"').type('ederdevq.93@gmail.com')
    cy.get('input[type="password"').type('Eder&Lih@933')
    cy.get('button[type="submit"').click()
    cy.contains('Email e/ou senha inválidos').should('be.visible')
  })
})
