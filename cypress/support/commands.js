// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

function getABook() {
    /*cy.get('.col')
        .find('.d-flex')
        .then(($value) => {
            return $value.length
        })*/
    
    return Math.floor(Math.random() * (44 - 1) + 1);
}
Cypress.Commands.add('getABook', getABook);

Cypress.Commands.add('getBookNameUsing', bookNumber => {
    cy.get(`:nth-child(${bookNumber}) > app-book-card > .mat-mdc-card > .mat-mdc-card-content > .card-title > a > strong`).then(bookTitle => {
        return bookTitle.text()
    })
});

Cypress.Commands.add('addBookToCartUsing', bookNumber => {
    cy.get(`:nth-child(${bookNumber}) > app-book-card > .mat-mdc-card > .mat-mdc-card-content > app-addtocart > .mdc-button > .mdc-button__label`).should(book => {
        expect(book).to.exist
    }).then(button => {
        cy.wrap(button).click()
    })
})

Cypress.Commands.add('goToCart', () => {
    cy.get(".mdc-icon-button > .mat-mdc-button-touch-target").then(cart => {
        cart.click()
    })
})

Cypress.Commands.add('verifyBookIsAddedToCart', (selectedBook) => {
    cy.get('.cdk-column-title > a').invoke('text').should((cartItem) => {
        expect(cartItem).to.equal(selectedBook)
      })
})