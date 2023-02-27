describe('Register page', () => {
  context('iphone X resolution', () => {
    beforeEach(() => {
      cy.viewport('iphone-x')

    })
    it('should have disabled button', () => {
      cy.visit('');
      cy.get('[data-cy="start-app-button"]').click();
      cy.get('[data-cy="register-app-button"]').click();
      cy.get('[data-cy="title-0"]').should('have.text', 'Entre ton e-mail');
      cy.get('[data-cy="text-0"]').should('have.text', 'Il te servira d\'identifiant pour te connecter à Younzee');

      cy.get('.swiper-pagination-bullet').first().should('have.class', 'swiper-pagination-bullet-active')

      cy.get('[data-cy="title-3"]').should('have.text', 'Consommez responsable et durable');
      cy.get('[data-cy="text-3"]').should('have.text', 'Renouvelez votre garde robe en achetant les pièces de créateurs engagés sélectionnées pour vous, par votre personal shopper.');

    })


    it('should redirect to register page', () => {
      cy.visit('/welcome-features');
      cy.get('[data-cy="register-app-button"]').should('have.text', 'S\'inscrire');
      cy.get('.already-signup-text').should('have.text', 'Déjà inscrit(e) ?');
      cy.get('[data-cy="register-app-button"]').click();
      cy.url().should('include', '/register/0');
    })

    it('should redirect to login page', () => {
      cy.visit('/welcome-features');
      cy.get('[data-cy="login-app-button"]').should('have.text', 'Se connecter');
      cy.get('[data-cy="login-app-button"]').click();
      cy.url().should('include', '/login');
    })
  })
})