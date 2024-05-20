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

      it('can add a book to cart', () => {
        cy.wait(2500)
        cy.get('//div[@class="d-flex justify-content-start card-deck-container mb-4 ng-star-inserted"]/div[@class="p-1 ng-star-inserted"][1]/app-book-card[@_ngcontent-pnw-c64=""]/mat-card[@class="mat-mdc-card mdc-card book-card mat-elevation-z12"]/mat-card-content[@class="mat-mdc-card-content"]/app-addtocart[@_ngcontent-pnw-c31="" and @_nghost-pnw-c26=""]/button[@class="mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base"]/span[@class="mat-mdc-button-touch-target"]').click()              
      })
    
    })
  
})