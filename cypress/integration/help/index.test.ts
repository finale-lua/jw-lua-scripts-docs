it('renders', () => {
    cy.visit('/help')
    cy.injectAxe()
    cy.checkA11y()
})

export {}
