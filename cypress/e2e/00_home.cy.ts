
describe('Home page', () => {
  context('iphone X resolution in en-US', () => {
    beforeEach(() => {
      // run these tests as if in a desktop
      // browser with a 720p monitor
      cy.viewport('iphone-x')

    })

    it('Redirect to Welcome Features Slides Page in english', () => {
      cy.visit('').its('navigator.language').should('equal', 'en-US')
      cy.get('.title').should('have.text', 'Welcome to Younzee')
      cy.get('.subtitle').should('have.text', 'Your Personal Shopper at your fingertips')
      cy.get('.text').should('have.text', 'Take back control of your wardrobe, Buy responsibly and sustainably,Shaping tomorrow\'s fashion together')
      cy.get('ion-button').should('have.text', 'Start')
      cy.get('[data-cy="start-app-button"]').click();
      cy.url().should('include', '/welcome-features')
    })
    it('should reload page and be back at home page', () => {
      cy.visit('')
      cy.reload(true)
      cy.get('.title').should('have.text', 'Welcome to Younzee')
      cy.get('.subtitle').should('have.text', 'Your Personal Shopper at your fingertips')
      cy.get('.text').should('have.text', 'Take back control of your wardrobe, Buy responsibly and sustainably,Shaping tomorrow\'s fashion together')
      cy.get('ion-button').should('have.text', 'Start')
    })
    it('Redirect to Welcome Features Slides Page in french', () => {
      cy.visit('', {
        onBeforeLoad(win) {
          Object.defineProperty(win.navigator, 'language', { value: 'fr' });
        }
      }).its('navigator.language').should('equal', 'fr')
      cy.get('.title').should('have.text', 'Bienvenue sur Younzee')
      cy.get('.subtitle').should('have.text', 'Votre Personal Shopper à portée de main')
      cy.get('.text').should('have.text', 'Reprenez le contrôle de votre garde-robe, Achetez responsable et durable,Façonnons ensemble la mode de demain')
      cy.get('ion-button').should('have.text', 'Commencer')
      cy.get('[data-cy="start-app-button"]').click();
      cy.url().should('include', '/welcome-features')
    })
  })
})