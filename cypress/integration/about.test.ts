it('renders', () => {
    cy.visit('/about')
    cy.injectAxe()
    cy.checkA11y()
})

export {}
