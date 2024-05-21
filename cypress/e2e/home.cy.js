describe('Home Page', () => {

  beforeEach('user is able to open the home page properly', () => {
    cy.visit('/')
  })
    context('user finds a toolbar containing different options', () => {
      /*it('shows a toolbar', () => {
        cy.get('.mat-toolbar-row').should((toolbar) => {
          expect(toolbar).to.exist
        })  
      })

      it('can search book or authors', () => {
        cy.get('input[placeholder="Search books or authors"]') 
          .should('have.attr', 'type')
          .and('equal', 'search')
      })*/
    })

    context('User can add a Book to the Cart', () => {
      it('can add a book to cart', () => {
        cy.getABook().then(bookNumber => {
          cy.log(`Book Number: ${bookNumber}`)
        
          cy.getBookNameUsing(bookNumber).then(selectedBook => {
            cy.log(`Selected book: ${selectedBook}`)
            
            cy.addBookToCartUsing(bookNumber)
            cy.goToCart()
            cy.verifyBookIsAddedToCart(selectedBook)
          })

        })

      })
    })
  
})