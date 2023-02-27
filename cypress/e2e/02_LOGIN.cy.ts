function generateEmail() {
    const random_number = Math.floor(Math.random() * 1000000000);
    const email = `user_${random_number}@test.com`
    return email;
}

describe('Login Inscription', () => {
    context('iphone X resolution', () => {
        beforeEach(() => {
            // run these tests as if in a desktop
            // browser with a 720p monitor
            cy.viewport('iphone-x')

        })

        it('should be login impossible because fields are empty', () => {
            cy.visit('');
            cy.get('[data-cy="signup-button"]').click();
            cy.contains('[class="title"]', 'S\'inscrire');
            cy.get('[data-cy="signup-btn"]').should('have.attr', 'disabled');
            const email = generateEmail()
            cy.get('[data-cy="email-input"]').type(email).should('have.value', email)
            cy.get('[data-cy="password-input"]').type('Younzee123!').should('have.value', 'Younzee123!')
            cy.get('[data-cy="signup-btn"]').should('not.have.attr', 'disabled');
            //cy.get('[value="accept"]').click();
            //cy.get('[data-cy="cancel-button"]').click();
        })

        it('Echec de l\'inscription - email invalide mdp valides et correspondants', () => {
            cy.visit('');
            cy.get('[id="btn-signup"]').click();
            cy.contains('[class="title-2"]', 'C\'EST PARTI !');
            cy.get('[id="email"]').type('camz.burgmail.com').should('have.value', 'camz.burgmail.com')
            cy.get('[id="password"]').type('Giulygiuly8!').should('have.value', 'Giulygiuly8!')
            cy.get('[id="password-confirmation"]').type('Giulygiuly8!').should('have.value', 'Giulygiuly8!')
            cy.get('[id="btn-continue-signup"]').click();


        })

        it('Echec de l\'inscription -email valide mdp invalides et correspondants', () => {
            cy.visit('');
            cy.get('[id="btn-signup"]').click();
            cy.contains('[class="title-2"]', 'C\'EST PARTI !');
            cy.get('[id="email"]').type('mz.bur@gmail.com').should('have.value', 'mz.bur@gmail.com')
            cy.get('[id="password"]').type('Giu').should('have.value', 'Giu')
            cy.get('[id="password-confirmation"]').type('Giu').should('have.value', 'Giu')
            cy.get('[id="btn-continue-signup"]').click();

        })

        it('Echec de l\'inscription -email valide mdp valides et non correspondants', () => {
            cy.visit('');
            cy.get('[id="btn-signup"]').click();
            cy.contains('[class="title-2"]', 'C\'EST PARTI !');
            cy.get('[id="email"]').type('mz.bur@gmail.com').should('have.value', 'mz.bur@gmail.com')
            cy.get('[id="password"]').type('Giulygiuly8!').should('have.value', 'Giulygiuly8!')
            cy.get('[id="password-confirmation"]').type('Giulygiuly8!i').should('have.value', 'Giulygiuly8!i')
            cy.get('[id="btn-continue-signup"]').click();

        })

        it('Echec de l\'inscription -email invalide mdp invalides et correspondants', () => {
            cy.visit('');
            cy.get('[id="btn-signup"]').click();
            cy.contains('[class="title-2"]', 'C\'EST PARTI !');
            cy.get('[id="email"]').type('mz.burgmail.com').should('have.value', 'mz.burgmail.com')
            cy.get('[id="password"]').type('Giu!').should('have.value', 'Giu!')
            cy.get('[id="password-confirmation"]').type('Giu!i').should('have.value', 'Giu!i')
            cy.get('[id="btn-continue-signup"]').click();

        })
    })
})
