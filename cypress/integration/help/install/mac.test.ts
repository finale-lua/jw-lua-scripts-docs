it('renders', () => {
    cy.visit('/help/install/mac')
    cy.injectAxe()
    cy.checkA11y()
})

export {}
