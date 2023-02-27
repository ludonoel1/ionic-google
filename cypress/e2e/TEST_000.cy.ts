import 'cypress-file-upload'
describe.skip('Add an article', () => {
    context('Add article in wardrobe', () => {
        beforeEach(() => {
            // run these tests as if in a desktop
            // browser with a 720p monitor
            cy.viewport(390, 844)
            cy.restoreLocalStorage();
        })

        afterEach(() => {
            cy.saveLocalStorage();
        })

        it.skip('Se connecter', () => {
            cy.visit('');
            cy.get('[id="btn-login"]').click();
            cy.contains('[class="title-1"]', 'CONNECTEZ-VOUS !');
            cy.get('[id="email"]').type('engineering@younzee.com').should('have.value', 'engineering@younzee.com')
            cy.get('[id="password"]').type('YounzeeTest!').should('have.value', 'YounzeeTest!')
            cy.get('[id="btn-continu-login"]').click();

        })
        it.skip(' Add Piece VET - complete', () => {
            cy.get('[id="tab-bar"]');
            cy.get('[data-cy="wardrobe-tab-button"]').click();
            cy.contains('[class="title"]', 'GARDE ROBE');
            cy.get('[id="add-article-button"]').click();
            //**************************//Page d'ajout//***********************//

            //---------------------------------------//Photo//------------------------------//
            cy.get('[data-cy="input-picture-0"]').click();
            cy.wait(1500);
            cy.get('pwa-action-sheet').shadow().find('.content').contains("From Photos").click().attachFile('myfixture.jpg');
            /*cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.camera-video').click();
            cy.wait(1500);
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.camera-video').click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.shutter').click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.accept-use').click();
            cy.wait(1500);
            cy.get('[data-cy="validate-crop-image-button"]').click();
            //---------------// Valider Bouton //-------------//
            cy.get('[data-cy="Submit-addarticle-button"]').click();
            //---------------// Confirmer Bouton //-------------//
            cy.get('[data-cy="confirm-addarticle-button"]').click();
            //---------------// Retour Bouton //-------------//
            cy.get('[data-cy="goback-addarticle-button"]').click();/*

        */})
    })
})