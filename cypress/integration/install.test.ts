it('renders', () => {
    cy.visit('/install')
    cy.injectAxe()
    cy.checkA11y()
})

export {}
