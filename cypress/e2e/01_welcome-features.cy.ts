
describe('Welcome Fatures page', () => {
  context('iphone X resolution', () => {
    beforeEach(() => {
      cy.viewport('iphone-x')
    })

    it('should test title and text of each swipe in english', () => {
      cy.visit('').its('navigator.language').should('equal', 'en-US')
      cy.get('[data-cy="start-app-button"]').click()
      cy.get('[data-cy="title-0"]').should('have.text', 'Digitalize your wardrobe');
      cy.get('[data-cy="text-0"]').should('have.text', 'Add, store and find your clothes easily in your digital wardrobe.');

      cy.get('.swiper-pagination-bullet').first().should('have.class', 'swiper-pagination-bullet-active')
      cy.get('.swiper-pagination-bullet').first().next().should('not.have.class', 'swiper-pagination-bullet-active')
      cy.get('.swiper-pagination-bullet').first().next().next().should('not.have.class', 'swiper-pagination-bullet-active')
      cy.get('.swiper-pagination-bullet').last().should('not.have.class', 'swiper-pagination-bullet-active')

      cy.get('swiper')
        .trigger('pointerdown', { which: 1 })
        .trigger('pointermove', 'left')
        .trigger('pointerup', { force: true })
      cy.wait(1000);

      cy.get('[data-cy="title-1"]').should('have.text', 'Create your outfits');
      cy.get('[data-cy="text-1"]').should('have.text', 'Once your clothes are digitized, create outfits, organize them and save time !');
      cy.get('.swiper-pagination-bullet').first().should('not.have.class', 'swiper-pagination-bullet-active')
      cy.get('.swiper-pagination-bullet').first().next().should('have.class', 'swiper-pagination-bullet-active')
      cy.get('.swiper-pagination-bullet').first().next().next().should('not.have.class', 'swiper-pagination-bullet-active')
      cy.get('.swiper-pagination-bullet').last().should('not.have.class', 'swiper-pagination-bullet-active')
      cy.get('swiper')
        .trigger('pointerdown', { which: 1 })
        .trigger('pointermove', 'left')
        .trigger('pointerup', { force: true })
      cy.wait(1000)

      cy.get('[data-cy="title-2"]').should('have.text', 'Take advantage of customized advice');
      cy.get('[data-cy="text-2"]').should('have.text', 'Get daily outfit ideas based on the weather and the clothes in your closet.');
      cy.get('.swiper-pagination-bullet').first().should('not.have.class', 'swiper-pagination-bullet-active')
      cy.get('.swiper-pagination-bullet').first().next().should('not.have.class', 'swiper-pagination-bullet-active')
      cy.get('.swiper-pagination-bullet').first().next().next().should('have.class', 'swiper-pagination-bullet-active')
      cy.get('.swiper-pagination-bullet').last().should('not.have.class', 'swiper-pagination-bullet-active')
      cy.get('swiper')
        .trigger('pointerdown', { which: 1 })
        .trigger('pointermove', 'left')
        .trigger('pointerup', { force: true })
      cy.wait(1000)

      cy.get('[data-cy="title-3"]').should('have.text', 'Consume responsibly and sustainably');
      cy.get('[data-cy="text-3"]').should('have.text', 'Renew your wardrobe by buying pieces from committed designers selected for you by your personal shopper.');
      cy.get('.swiper-pagination-bullet').first().should('not.have.class', 'swiper-pagination-bullet-active')
      cy.get('.swiper-pagination-bullet').first().next().should('not.have.class', 'swiper-pagination-bullet-active')
      cy.get('.swiper-pagination-bullet').first().next().next().should('not.have.class', 'swiper-pagination-bullet-active')
      cy.get('.swiper-pagination-bullet').last().should('have.class', 'swiper-pagination-bullet-active')
    })

    it('should test title and text of each swipe in french', () => {
      cy.visit('', {
        onBeforeLoad(win) {
          Object.defineProperty(win.navigator, 'language', { value: 'fr' });
        }
      }).its('navigator.language').should('equal', 'fr')
      cy.get('[data-cy="start-app-button"]').click()
      cy.get('[data-cy="title-0"]').should('have.text', 'Digitalisez votre Garde-Robe');
      cy.get('[data-cy="text-0"]').should('have.text', 'Ajoutez, rangez et retrouvez facilement vos vêtements dans votre garde-robe digitale.');

      cy.get('.swiper-pagination-bullet').first().should('have.class', 'swiper-pagination-bullet-active')
      cy.get('.swiper-pagination-bullet').first().next().should('not.have.class', 'swiper-pagination-bullet-active')
      cy.get('.swiper-pagination-bullet').first().next().next().should('not.have.class', 'swiper-pagination-bullet-active')
      cy.get('.swiper-pagination-bullet').last().should('not.have.class', 'swiper-pagination-bullet-active')

      cy.get('swiper')
        .trigger('pointerdown', { which: 1 })
        .trigger('pointermove', 'left')
        .trigger('pointerup', { force: true })
      cy.wait(500);

      cy.get('[data-cy="title-1"]').should('have.text', 'Créez vos styles');
      cy.get('[data-cy="text-1"]').should('have.text', 'Une fois vos vêtements digitalisés, créez des tenues, organisez-les et gagnez du temps !');
      cy.get('.swiper-pagination-bullet').first().should('not.have.class', 'swiper-pagination-bullet-active')
      cy.get('.swiper-pagination-bullet').first().next().should('have.class', 'swiper-pagination-bullet-active')
      cy.get('.swiper-pagination-bullet').first().next().next().should('not.have.class', 'swiper-pagination-bullet-active')
      cy.get('.swiper-pagination-bullet').last().should('not.have.class', 'swiper-pagination-bullet-active')
      cy.get('swiper')
        .trigger('pointerdown', { which: 1 })
        .trigger('pointermove', 'left')
        .trigger('pointerup', { force: true })
      cy.wait(500)

      cy.get('[data-cy="title-2"]').should('have.text', 'Profitez de conseils sur mesure');
      cy.get('[data-cy="text-2"]').should('have.text', 'Recevez chaque jour des idées de styles basées sur la météo et sur vos vêtements présents dans votre garde-robe.');
      cy.get('.swiper-pagination-bullet').first().should('not.have.class', 'swiper-pagination-bullet-active')
      cy.get('.swiper-pagination-bullet').first().next().should('not.have.class', 'swiper-pagination-bullet-active')
      cy.get('.swiper-pagination-bullet').first().next().next().should('have.class', 'swiper-pagination-bullet-active')
      cy.get('.swiper-pagination-bullet').last().should('not.have.class', 'swiper-pagination-bullet-active')
      cy.get('swiper')
        .trigger('pointerdown', { which: 1 })
        .trigger('pointermove', 'left')
        .trigger('pointerup', { force: true })
      cy.wait(500)

      cy.get('[data-cy="title-3"]').should('have.text', 'Consommez responsable et durable');
      cy.get('[data-cy="text-3"]').should('have.text', 'Renouvelez votre garde robe en achetant les pièces de créateurs engagés sélectionnées pour vous, par votre personal shopper.');
      cy.get('.swiper-pagination-bullet').first().should('not.have.class', 'swiper-pagination-bullet-active')
      cy.get('.swiper-pagination-bullet').first().next().should('not.have.class', 'swiper-pagination-bullet-active')
      cy.get('.swiper-pagination-bullet').first().next().next().should('not.have.class', 'swiper-pagination-bullet-active')
      cy.get('.swiper-pagination-bullet').last().should('have.class', 'swiper-pagination-bullet-active')
    })

    it('should redirect to register page in english', () => {
      cy.visit('/welcome-features');
      cy.get('[data-cy="register-button"]').should('have.text', 'Sign up');
      cy.get('.already-signup-text').should('have.text', 'Already registered ?');
      cy.get('[data-cy="register-button"]').click();
      cy.url().should('include', '/register/0');
    })

    it('should redirect to login page in english', () => {
      cy.visit('/welcome-features');
      cy.get('[data-cy="login-button"]').should('have.text', 'Sign in');
      cy.get('[data-cy="login-button"]').click();
      cy.url().should('include', '/login');
    })

    it('should reload app and get welcome features page in english', () => {
      cy.visit('/welcome-features')
      cy.reload(true)
      cy.url().should('include', 'welcome-features')
      cy.get('[data-cy="login-button"]').should('have.text', 'Sign in');
      cy.get('[data-cy="register-button"]').should('have.text', 'Sign up');

    })


    it('should redirect to register page in french', () => {
      cy.visit('/welcome-features', {
        onBeforeLoad(win) {
          Object.defineProperty(win.navigator, 'language', { value: 'fr' });
        }
      }).its('navigator.language').should('equal', 'fr')
      cy.get('[data-cy="register-button"]').should('have.text', 'S\'inscrire');
      cy.get('.already-signup-text').should('have.text', 'Déjà inscrit(e) ?');
      cy.get('[data-cy="register-button"]').click();
      cy.url().should('include', '/register/0');
    })

    it('should redirect to login page in french', () => {
      cy.visit('/welcome-features', {
        onBeforeLoad(win) {
          Object.defineProperty(win.navigator, 'language', { value: 'fr' });
        }
      }).its('navigator.language').should('equal', 'fr')
      cy.get('[data-cy="login-button"]').should('have.text', 'Se connecter');
      cy.get('[data-cy="login-button"]').click();
      cy.url().should('include', '/login');
    })
  })
})

