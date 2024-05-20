describe('Home Page', () => {

  beforeEach('user is able to open the home page properly', () => {
    cy.log('testing')
    cy.log(Cypress.env('main_url'))
    cy.visit('https://bookcart.azurewebsites.net/') //Cypress.env('main_url')
  })
    context('user finds a toolbar containing different options', () => {
      it('shows a toolbar', () => {
        cy.get('.mat-toolbar-row').should((toolbar) => {
          expect(toolbar).to.exist
        })  
      })

      it('can search book or authors', () => {
        cy.get('input[placeholder="Search books or authors"]') 
          .should('have.attr', 'type')
          .and('equal', 'search')
      })
      
    })
  
})