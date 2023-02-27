import { waitForAsync } from "@angular/core/testing";

describe('My Clothes-Pieces - Wardrobe', () => {
    context('Wardrobe pieces menu', () => {
        beforeEach(() => {
            // run these tests as if in a desktop
            // browser with a 720p monitor
            cy.viewport(390, 844)
            cy.restoreLocalStorage();
        })

        afterEach(() => {
            cy.saveLocalStorage();
        })

        it('Log in', () => {
            cy.visit('');
            cy.get('[id="btn-login"]').click();
            cy.contains('[class="title-1"]', 'CONNECTEZ-VOUS !');
            cy.get('[id="email"]').type('engineering@younzee.com').should('have.value', 'engineering@younzee.com')
            cy.get('[id="password"]').type('YounzeeTest!').should('have.value', 'YounzeeTest!')
            cy.get('[id="btn-continu-login"]').click();
            cy.get('[id="tab-bar"]');
        })

        /* it('should import picture', () => {
             cy.visit('');
             cy.get('[id="tab-bar"]');
             cy.get('[data-cy="wardrobe-tab-button"]').click();
             cy.contains('[class="title"]', 'GARDE ROBE');
             cy.get('[id="add-article-button"]').click();
             //cy.get('[data-cy="input-picture-0"]').click();
             //cy.get('pwa-action-sheet').shadow().find('.content').contains("From Photos").selectFile('photo.jpg');
             cy.fixture('photo.jpg', 'binary')
                 .then(Cypress.Blob.binaryStringToBlob)
                 .then(fileContent => {
                     cy.get('[data-cy="input-picture-0"]').attachFile({
                         fileContent,
                         filePath: 'photo.jpg',
                         encoding: 'utf-8',
                         lastModified: new Date().getTime()
                     });
                 });
 
         })*/

        it('Add Piece - Error - No category selected', () => {
            cy.visit('');
            cy.get('[id="tab-bar"]');
            cy.get('[data-cy="wardrobe-tab-button"]').click();
            cy.contains('[class="title"]', 'GARDE ROBE');
            cy.get('[id="add-article-button"]').click();
            //**************************//Page d'ajout//***********************//
            //---------------// Marque //-------------//
            cy.get('[id="Brands_Field"]').click();
            cy.get('[id="brand-106-checkbox"]').click();
            //---------------// Couleurs //-------------//
            cy.get('[id="Colors_Field"]').click();
            cy.get('[id="color-16-checkbox"]').click();
            cy.get('[id="color-4-checkbox"]').click();
            cy.get('[id="colors_sub-button"]').click();
            cy.wait(200);
            //---------------// Prix //-------------//
            cy.get('[data-cy="Price_Field"] > input').click().type('500');
            //---------------// Etat d'achat //-------------//
            cy.get('[id="Secondhand_Radio"]').click();
            //---------------// Photo //-------------//
            cy.get('[data-cy="input-picture-0"]').click();
            cy.get('pwa-action-sheet').shadow().find('.content').contains("Prendre une photo").click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.camera-video').click();
            cy.wait(1500);
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.camera-video').click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.shutter').click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.accept-use').click();
            cy.wait(1500);
            cy.get('[data-cy="validate-crop-image-button"]').click();
            //---------------// Valider Bouton //-------------//
            cy.get('[data-cy="Submit-addarticle-button"]').should('have.attr', 'disabled');
            //---------------// Retour Bouton //-------------//
            cy.get('[data-cy="goback-addarticle-button"]').click();
            cy.wait(2000);
        })

        it('Add Piece - Error - No brand selected', () => {
            cy.get('[id="add-article-button"]').click();
            //**************************//Page d'ajout//***********************//
            //-------------//categorie//-------------//
            cy.get('[id="Category_Field"]').click();
            cy.get('[id="category-FAM_01-button"]').click();
            cy.get('[id="category-VET_01-button"]').click();
            cy.get('[id="category-SHIRT_01-checkbox"]').click();
            //-------------// Couleurs//-------------//
            cy.get('[id="Colors_Field"]').click();
            cy.get('[id="color-16-checkbox"]').click();
            cy.get('[id="color-4-checkbox"]').click();
            cy.get('[id="colors_sub-button"]').click();
            //---------------// Taille //-------------//
            cy.get('[id="Size_Field"]').click();
            cy.get('ion-select-option').should('have.length', '8');
            cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(2).click({ force: true }); //second to valid value
            cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(2).click({ force: true }); // last to remove popup
            cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(2).click({ force: true }); // last to remove popup
            cy.get('ion-select').should('have.attr', 'aria-label').and('equal', ' S ');
            cy.wait(200);
            //---------------// prix //-------------//
            cy.get('[data-cy="Price_Field"] > input').click().type('500');
            //---------------// état d'achat //-------------//
            cy.get('[id="Secondhand_Radio"]').click();
            //---------------// coupe  //-------------//
            cy.get('[id="fit-0-radiobutton"]').click();
            //---------------------------------------//Photo//------------------------------//
            cy.get('[data-cy="input-picture-0"]').click();
            cy.get('pwa-action-sheet').shadow().find('.content').contains("Prendre une photo").click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.camera-video').click();
            cy.wait(1500);
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.camera-video').click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.shutter').click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.accept-use').click();
            cy.wait(1500);
            cy.get('[data-cy="validate-crop-image-button"]').click();
            //---------------// Valider Bouton //-------------//
            cy.get('[data-cy="Submit-addarticle-button"]').should('have.attr', 'disabled');
            //---------------// Retour Bouton //-------------//
            cy.get('[data-cy="goback-addarticle-button"]').click();
        })

        it('Add Piece - Error - No color selected', () => {
            cy.get('[id="add-article-button"]').click();
            //**************************//Page d'ajout//***********************//
            //-------------//categorie//-------------//
            cy.get('[id="Category_Field"]').click();
            cy.get('[id="category-FAM_01-button"]').click();
            cy.get('[id="category-VET_01-button"]').click();
            cy.get('[id="category-SHIRT_01-checkbox"]').click();
            //---------------// Marque //-------------//
            cy.get('[id="Brands_Field"]').click();
            cy.get('[id="brand-106-checkbox"]').click();
            //---------------// Taille //-------------//
            cy.get('[id="Size_Field"]').click();
            cy.get('ion-select-option').should('have.length', '8');
            cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(2).click({ force: true }); //second to valid value
            cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(2).click({ force: true }); // last to remove popup
            cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(2).click({ force: true }); // last to remove popup
            cy.get('ion-select').should('have.attr', 'aria-label').and('equal', ' S ');
            cy.wait(200);
            //---------------// prix //-------------//
            cy.get('[data-cy="Price_Field"] > input').click().type('500');
            //---------------// état d'achat //-------------//
            cy.get('[id="Secondhand_Radio"]').click();
            //---------------// coupe  //-------------//
            cy.get('[id="fit-0-radiobutton"]').click();
            //---------------------------------------//Photo//------------------------------//
            cy.get('[data-cy="input-picture-0"]').click();
            cy.get('pwa-action-sheet').shadow().find('.content').contains("Prendre une photo").click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.camera-video').click();
            cy.wait(1500);
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.camera-video').click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.shutter').click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.accept-use').click();
            cy.wait(1500);
            cy.get('[data-cy="validate-crop-image-button"]').click();
            //---------------// Valider Bouton //-------------//
            cy.get('[data-cy="Submit-addarticle-button"]').should('have.attr', 'disabled');
            //---------------// Retour Bouton //-------------//
            cy.get('[data-cy="goback-addarticle-button"]').click();
        })

        it('Add Piece - Error - No price selected', () => {
            cy.get('[id="add-article-button"]').click();
            //**************************//Page d'ajout//***********************//
            //-------------//categorie//-------------//
            cy.get('[id="Category_Field"]').click();
            cy.get('[id="category-FAM_01-button"]').click();
            cy.get('[id="category-VET_01-button"]').click();
            cy.get('[id="category-SHIRT_01-checkbox"]').click();
            //---------------// Marque //-------------//
            cy.get('[id="Brands_Field"]').click();
            cy.get('[id="brand-106-checkbox"]').click();
            //-------------// Couleurs//-------------//
            cy.get('[id="Colors_Field"]').click();
            cy.get('[id="color-16-checkbox"]').click();
            cy.get('[id="color-4-checkbox"]').click();
            cy.get('[id="colors_sub-button"]').click();
            //---------------// Taille //-------------//
            cy.get('[id="Size_Field"]').click();
            cy.get('ion-select-option').should('have.length', '8');
            cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(2).click({ force: true }); //second to valid value
            cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(2).click({ force: true }); // last to remove popup
            cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(2).click({ force: true }); // last to remove popup
            cy.get('ion-select').should('have.attr', 'aria-label').and('equal', ' S ');
            cy.wait(200);
            //---------------// coupe  //-------------//
            cy.get('[id="fit-0-radiobutton"]').click();
            //---------------// état d'achat //-------------//
            cy.get('[id="Secondhand_Radio"]').click();
            //---------------------------------------//Photo//------------------------------//
            cy.get('[data-cy="input-picture-0"]').click();
            cy.get('pwa-action-sheet').shadow().find('.content').contains("Prendre une photo").click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.camera-video').click();
            cy.wait(1500);
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.camera-video').click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.shutter').click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.accept-use').click();
            cy.wait(1500);
            cy.get('[data-cy="validate-crop-image-button"]').click();
            //---------------// Valider Bouton //-------------//
            cy.get('[data-cy="Submit-addarticle-button"]').should('have.attr', 'disabled');
            //---------------// Retour Bouton //-------------//
            cy.get('[data-cy="goback-addarticle-button"]').click();
        })

        it('Add Piece - Error - No state selected', () => {
            cy.get('[id="add-article-button"]').click();
            //**************************//Page d'ajout//***********************//
            //-------------//categorie//-------------//
            cy.get('[id="Category_Field"]').click();
            cy.get('[id="category-FAM_01-button"]').click();
            cy.get('[id="category-VET_01-button"]').click();
            cy.get('[id="category-SHIRT_01-checkbox"]').click();
            //---------------// Marque //-------------//
            cy.get('[id="Brands_Field"]').click();
            cy.get('[id="brand-106-checkbox"]').click();
            //-------------// Couleurs//-------------//
            cy.get('[id="Colors_Field"]').click();
            cy.get('[id="color-16-checkbox"]').click();
            cy.get('[id="color-4-checkbox"]').click();
            cy.get('[id="colors_sub-button"]').click();
            //---------------// Taille //-------------//
            cy.get('[id="Size_Field"]').click();
            cy.get('ion-select-option').should('have.length', '8');
            cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(2).click({ force: true }); //second to valid value
            cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(2).click({ force: true }); // last to remove popup
            cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(2).click({ force: true }); // last to remove popup
            cy.get('ion-select').should('have.attr', 'aria-label').and('equal', ' S ');
            cy.wait(200);
            //---------------// prix //-------------//
            cy.get('[data-cy="Price_Field"] > input').click().type('500');
            //---------------// coupe  //-------------//
            cy.get('[id="fit-0-radiobutton"]').click();
            //---------------------------------------//Photo//------------------------------//
            cy.get('[data-cy="input-picture-0"]').click();
            cy.get('pwa-action-sheet').shadow().find('.content').contains("Prendre une photo").click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.camera-video').click();
            cy.wait(1500);
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.camera-video').click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.shutter').click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.accept-use').click();
            cy.wait(1500);
            cy.get('[data-cy="validate-crop-image-button"]').click();
            //---------------// Valider Bouton //-------------//
            cy.get('[data-cy="Submit-addarticle-button"]').should('have.attr', 'disabled');
            //---------------// Retour Bouton //-------------//
            cy.get('[data-cy="goback-addarticle-button"]').click();
        })

        it('Add Piece - Error - No fit selected', () => {
            cy.get('[id="add-article-button"]').click();
            //**************************//Page d'ajout//***********************//
            //-------------//categorie//-------------//
            cy.get('[id="Category_Field"]').click();
            cy.get('[id="category-FAM_01-button"]').click();
            cy.get('[id="category-VET_01-button"]').click();
            cy.get('[id="category-SHIRT_01-checkbox"]').click();
            //---------------// Marque //-------------//
            cy.get('[id="Brands_Field"]').click();
            cy.get('[id="brand-106-checkbox"]').click();
            //-------------// Couleurs//-------------//
            cy.get('[id="Colors_Field"]').click();
            cy.get('[id="color-16-checkbox"]').click();
            cy.get('[id="color-4-checkbox"]').click();
            cy.get('[id="colors_sub-button"]').click();
            //---------------// Taille //-------------//
            cy.get('[id="Size_Field"]').click();
            cy.get('ion-select-option').should('have.length', '8');
            cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(2).click({ force: true }); //second to valid value
            cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(2).click({ force: true }); // last to remove popup
            cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(2).click({ force: true }); // last to remove popup
            cy.get('ion-select').should('have.attr', 'aria-label').and('equal', ' S ');
            cy.wait(200);
            //---------------// prix //-------------//
            cy.get('[data-cy="Price_Field"] > input').click().type('500');
            //---------------// état d'achat //-------------//
            cy.get('[id="Secondhand_Radio"]').click();
            //---------------------------------------//Photo//------------------------------//
            cy.get('[data-cy="input-picture-0"]').click();
            cy.get('pwa-action-sheet').shadow().find('.content').contains("Prendre une photo").click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.camera-video').click();
            cy.wait(1500);
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.camera-video').click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.shutter').click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.accept-use').click();
            cy.wait(1500);
            cy.get('[data-cy="validate-crop-image-button"]').click();
            //---------------// Valider Bouton //-------------//
            cy.get('[data-cy="Submit-addarticle-button"]').should('have.attr', 'disabled');
            //---------------// Retour Bouton //-------------//
            cy.get('[data-cy="goback-addarticle-button"]').click();
        })

        it('Add Piece - Error - No photo uploaded', () => {
            cy.get('[id="add-article-button"]').click();
            //**************************//Page d'ajout//***********************//
            //-------------//categorie//-------------//
            cy.get('[id="Category_Field"]').click();
            cy.get('[id="category-FAM_01-button"]').click();
            cy.get('[id="category-VET_01-button"]').click();
            cy.get('[id="category-SHIRT_01-checkbox"]').click();
            //---------------// Marque //-------------//
            cy.get('[id="Brands_Field"]').click();
            cy.get('[id="brand-106-checkbox"]').click();
            //-------------// Couleurs//-------------//
            cy.get('[id="Colors_Field"]').click();
            cy.get('[id="color-16-checkbox"]').click();
            cy.get('[id="color-4-checkbox"]').click();
            cy.get('[id="colors_sub-button"]').click();
            //---------------// Taille //-------------//
            cy.get('[id="Size_Field"]').click();
            cy.get('ion-select-option').should('have.length', '8');
            cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(2).click({ force: true }); //second to valid value
            cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(2).click({ force: true }); // last to remove popup
            cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(2).click({ force: true }); // last to remove popup
            cy.get('ion-select').should('have.attr', 'aria-label').and('equal', ' S ');
            cy.wait(200);
            //---------------// prix //-------------//
            cy.get('[data-cy="Price_Field"] > input').click().type('500');
            //---------------// état d'achat //-------------//
            cy.get('[id="Secondhand_Radio"]').click();
            //---------------// coupe  //-------------//
            cy.get('[id="fit-0-radiobutton"]').click();
            //---------------// Valider Bouton //-------------//
            cy.get('[data-cy="Submit-addarticle-button"]').should('have.attr', 'disabled');
            //---------------// Retour Bouton //-------------//
            cy.get('[data-cy="goback-addarticle-button"]').click();
        })

        it(' Add Piece VET - complete', () => {
            cy.wait(500)
            cy.get('[id="add-article-button"]').click();
            //**************************//Page d'ajout//***********************//
            //-------------//categorie//-------------//
            cy.get('[id="Category_Field"]').click();
            cy.get('[id="category-FAM_01-button"]').click();
            cy.get('[id="category-VET_01-button"]').click();
            cy.get('[id="category-SHIRT_01-checkbox"]').click();
            //---------------// Marque //-------------//
            cy.get('[id="Brands_Field"]').click();
            cy.get('[id="brand-106-checkbox"]').click();
            //-------------// Couleurs//-------------//
            cy.get('[id="Colors_Field"]').click();
            cy.get('[id="color-16-checkbox"]').click();
            cy.get('[id="color-4-checkbox"]').click();
            cy.get('[id="colors_sub-button"]').click();
            //---------------// Taille //-------------//
            cy.get('[id="Size_Field"]').click();
            cy.get('ion-select-option').should('have.length', '8');
            cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(2).click({ force: true }); //second to valid value
            cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(2).click({ force: true }); // last to remove popup
            cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(2).click({ force: true }); // last to remove popup
            cy.get('ion-select').should('have.attr', 'aria-label').and('equal', ' S ');
            cy.wait(200);
            //---------------// prix //-------------//
            cy.get('[data-cy="Price_Field"] > input').click().type('500');
            //---------------// état d'achat //-------------//
            cy.get('[id="Secondhand_Radio"]').click();
            //---------------// coupe  //-------------//
            cy.get('[id="fit-0-radiobutton"]').click();
            //---------------------------------------//Photo//------------------------------//
            cy.get('[data-cy="input-picture-0"]').click();
            cy.get('pwa-action-sheet').shadow().find('.content').contains("Prendre une photo").click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.camera-video').click();
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
        })

        it(' Add Piece - CHAU complete', () => {
            cy.wait(2000);
            cy.get('[id="add-article-button"]').click({ force: true });
            //**************************//Page d'ajout//***********************//
            //-------------//categorie//-------------//
            cy.get('[id="Category_Field"]').click();
            cy.get('[id="category-FAM_02-button"]').click();
            cy.get('[id="category-CHAU_02-button"]').click();
            cy.get('[id="category-CPLAT_01-checkbox"]').click();
            //---------------// Marque //-------------//
            cy.get('[id="Brands_Field"]').click();
            cy.get('[id="brand-106-checkbox"]').click();
            //-------------// Couleurs//-------------//
            cy.get('[id="Colors_Field"]').click();
            cy.get('[id="color-16-checkbox"]').click();
            cy.get('[id="color-4-checkbox"]').click();
            cy.get('[id="colors_sub-button"]').click();
            //---------------// Taille //-------------//
            cy.get('[id="Size_Field"]').click();
            cy.get('ion-select-option').should('have.length', '26');
            cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(4).click({ force: true }); //second to valid value
            cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(4).click({ force: true }); // last to remove popup
            cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(4).click({ force: true }); // last to remove popup
            cy.get('ion-select').should('have.attr', 'aria-label').and('equal', ' 37 ');
            cy.wait(200);
            //---------------// prix //-------------//
            cy.get('[data-cy="Price_Field"] > input').click().type('500');
            //---------------// état d'achat //-------------//
            cy.get('[id="Secondhand_Radio"]').click();
            //---------------------------------------//Photo//------------------------------//
            cy.get('[data-cy="input-picture-0"]').click();
            cy.get('pwa-action-sheet').shadow().find('.content').contains("Prendre une photo").click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.camera-video').click();
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
        })

        it(' Add Piece - ACC complete', () => {
            cy.wait(1000);
            cy.get('[id="add-article-button"]').click();
            //**************************//Page d'ajout//***********************//
            //-------------//categorie//-------------//
            cy.get('[id="Category_Field"]').click();
            cy.get('[id="category-FAM_03-button"]').click();
            cy.get('[id="category-ACC_01-button"]').click();
            cy.get('[id="category-SAC_01-checkbox"]').click();
            //---------------// Marque //-------------//
            cy.get('[id="Brands_Field"]').click();
            cy.get('[id="brand-2387-checkbox"]').click();
            //-------------// Couleurs//-------------//
            cy.get('[id="Colors_Field"]').click();
            cy.get('[id="color-16-checkbox"]').click();
            cy.get('[id="color-4-checkbox"]').click();
            cy.get('[id="colors_sub-button"]').click();
            //---------------// prix //-------------//
            cy.get('[data-cy="Price_Field"] > input').click().type('500');
            //---------------// état d'achat //-------------//
            cy.get('[id="Secondhand_Radio"]').click();
            //---------------------------------------//Photo//------------------------------//
            cy.get('[data-cy="input-picture-0"]').click();
            cy.get('pwa-action-sheet').shadow().find('.content').contains("Prendre une photo").click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.camera-video').click();
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
        })

        it(' Add 2 similar pieces in a row - complete', () => {
            cy.wait(1000);
            cy.get('[id="add-article-button"]').click();
            //**************************//Page d'ajout//***********************//
            //-------------//categorie//-------------//
            cy.get('[id="Category_Field"]').click();
            cy.get('[id="category-FAM_01-button"]').click();
            cy.get('[id="category-VET_01-button"]').click();
            cy.get('[id="category-SHIRT_01-checkbox"]').click();
            //---------------// Marque //-------------//
            cy.get('[id="Brands_Field"]').click();
            cy.get('[id="brand-106-checkbox"]').click();
            //-------------// Couleurs//-------------//
            cy.get('[id="Colors_Field"]').click();
            cy.get('[id="color-16-checkbox"]').click();
            cy.get('[id="color-4-checkbox"]').click();
            cy.get('[id="colors_sub-button"]').click();
            //---------------// Taille //-------------//
            cy.get('[id="Size_Field"]').click();
            cy.get('ion-select-option').should('have.length', '8');
            cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(2).click({ force: true }); //second to valid value
            cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(2).click({ force: true }); // last to remove popup
            cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(2).click({ force: true }); // last to remove popup
            cy.get('ion-select').should('have.attr', 'aria-label').and('equal', ' S ');
            cy.wait(200);
            //---------------// prix //-------------//
            cy.get('[data-cy="Price_Field"] > input').click().type('500');
            //---------------// état d'achat //-------------//
            cy.get('[id="Secondhand_Radio"]').click();
            //---------------// coupe  //-------------//
            cy.get('[id="fit-0-radiobutton"]').click();
            //---------------------------------------//Photo//------------------------------//
            cy.get('[data-cy="input-picture-0"]').click();
            cy.get('pwa-action-sheet').shadow().find('.content').contains("Prendre une photo").click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.camera-video').click();
            cy.wait(1500);
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.camera-video').click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.shutter').click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.accept-use').click();
            cy.wait(1500);
            cy.get('[data-cy="validate-crop-image-button"]').click();
            //---------------// Valider Bouton //-------------//
            cy.get('[data-cy="Submit-addarticle-button"]').click();
            //---------------// Similaire Checkbox //-------------//
            cy.get('[data-cy="SameArticle-addarticle-checkbox"]').click();
            //---------------// Confirmer Bouton //-------------//
            cy.get('[data-cy="confirm-addarticle-button"]').click();

            //**************************//Page d'ajout//***********************//
            //-------------//categorie//-------------//
            cy.get('[id="Category_Field"]').click();
            cy.get('[id="category-FAM_01-button"]').click();
            cy.get('[id="category-VET_01-button"]').click();
            cy.get('[id="category-SHIRT_01-checkbox"]').click();
            //---------------// Marque //-------------//
            cy.get('[id="Brands_Field"]').click();
            cy.get('[id="brand-106-checkbox"]').click();
            //-------------// Couleurs//-------------//
            cy.get('[id="Colors_Field"]').click();
            cy.get('[id="color-16-checkbox"]').click();
            cy.get('[id="color-4-checkbox"]').click();
            cy.get('[id="colors_sub-button"]').click();
            //---------------// Taille //-------------//
            cy.get('[id="Size_Field"]').click();
            cy.get('ion-select-option').should('have.length', '8');
            cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(2).click({ force: true }); //second to valid value
            cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(2).click({ force: true }); // last to remove popup
            cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(2).click({ force: true }); // last to remove popup
            cy.get('ion-select').should('have.attr', 'aria-label').and('equal', ' S ');
            cy.wait(200);
            //---------------// prix //-------------//
            cy.get('[data-cy="Price_Field"] > input').click().type('500');
            //---------------// état d'achat //-------------//
            cy.get('[id="Secondhand_Radio"]').click();
            //---------------// coupe  //-------------//
            cy.get('[id="fit-0-radiobutton"]').click();
            //---------------------------------------//Photo//------------------------------//
            cy.get('[data-cy="input-picture-0"]').click();
            cy.get('pwa-action-sheet').shadow().find('.content').contains("Prendre une photo").click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.camera-video').click();
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
            //cy.get('[data-cy="goback-addarticle-button"]').click();
        })

        it(' Add Piece and change title - complete', () => {
            cy.wait(500);
            cy.get('[id="add-article-button"]').click();
            //**************************//Page d'ajout//***********************//
            //-------------//categorie//-------------//
            cy.get('[id="Category_Field"]').click();
            cy.get('[id="category-FAM_01-button"]').click();
            cy.get('[id="category-VET_01-button"]').click();
            cy.get('[id="category-SHIRT_01-checkbox"]').click();
            //---------------// Marque //-------------//
            cy.get('[id="Brands_Field"]').click();
            cy.get('[id="brand-106-checkbox"]').click();
            //-------------// Couleurs//-------------//
            cy.get('[id="Colors_Field"]').click();
            cy.get('[id="color-16-checkbox"]').click();
            cy.get('[id="color-4-checkbox"]').click();
            cy.get('[id="colors_sub-button"]').click();
            //---------------// Taille //-------------//
            cy.get('[id="Size_Field"]').click();
            cy.get('ion-select-option').should('have.length', '8');
            cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(2).click({ force: true }); //second to valid value
            cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(2).click({ force: true }); // last to remove popup
            cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(2).click({ force: true }); // last to remove popup
            cy.get('ion-select').should('have.attr', 'aria-label').and('equal', ' S ');
            cy.wait(200);
            //---------------// prix //-------------//
            cy.get('[data-cy="Price_Field"] > input').click().type('500');
            //---------------// état d'achat //-------------//
            cy.get('[id="Secondhand_Radio"]').click();
            //---------------// coupe  //-------------//
            cy.get('[id="fit-0-radiobutton"]').click();
            //---------------------------------------//Photo//------------------------------//
            cy.get('[data-cy="input-picture-0"]').click();
            cy.get('pwa-action-sheet').shadow().find('.content').contains("Prendre une photo").click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.camera-video').click();
            cy.wait(1500);
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.camera-video').click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.shutter').click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.accept-use').click();
            cy.wait(1500);
            cy.get('[data-cy="validate-crop-image-button"]').click();
            //---------------// Valider Bouton //-------------//
            cy.get('[data-cy="Submit-addarticle-button"]').click();
            //---------------// Modifier titre //-------------//
            cy.wait(1500);
            cy.get('[data-cy="Titlearticle-input"] > input').clear().type('Added Title').should('have.value', 'Added Title');
            //---------------// Confirmer Bouton //-------------//
            cy.wait(1500);
            cy.get('[data-cy="confirm-addarticle-button"]').click();
            //---------------// Retour Bouton //-------------//
            //cy.get('[data-cy="goback-addarticle-button"]').click();
        })

        it(' Modify pieces - selection', () => {
            //**************************//Page garde robe//***********************//
            //-------------//selectionner bouton//-------------//
            cy.get('[data-cy="Selection-wardrobe-button"]').click();
            //-------------//selectionner cartes//-------------//
            cy.get('[id="card-1"]').click();
            cy.get('[id="card-2"]').click();
            //-------------//annuler bouton//-------------//
            cy.get('[data-cy="Selection-cancel-wardrobe-button"]').click();
        })

        it(' Modify pieces - erase 1 pieces from wardobe feed', () => {
            //**************************//Page garde robe//***********************//
            //-------------//selectionner bouton//-------------//
            cy.get('[data-cy="Selection-wardrobe-button"]').click();
            //-------------//selectionner cartes//-------------//
            cy.get('[id="card-5"]').click();
            //-------------//supprimer bouton//-------------//
            cy.get('[id="add-article-button"]').click();
            //-------------//supprimer bouton modale//-------------//
            cy.get('[id="modalselect-deletearticle-button"]').click();
            cy.wait(1500);
        })

        it(' Modify pieces - erase 2 pieces from wardobe feed', () => {
            //**************************//Page garde robe//***********************//
            //-------------//selectionner bouton//-------------//
            cy.get('[data-cy="Selection-wardrobe-button"]').click();
            //-------------//selectionner cartes//-------------//
            cy.get('[id="card-4"]').click();
            cy.get('[id="card-6"]').click();
            //-------------//supprimer bouton//-------------//
            cy.get('[id="add-article-button"]').click();
            //-------------//supprimer bouton modale//-------------//
            cy.get('[id="modalselect-deletearticle-button"]').click();
            cy.wait(1500);
        })

        it(' Modify pieces - erase 1 piece from detail page', () => {
            //**************************//Page garde robe//***********************//
            //-------------//selectionner cartes//-------------//
            cy.get('[id="card-1"]').click();
            //**************************//Edit//***********************//
            cy.get('[data-cy="edit-articledetail-button"]').click();
            //**************************//Supprimer l'article//***********************//
            cy.get('[data-cy="delete-articledetail-button"]').click();
            //-------------//supprimer bouton modale//-------------//
            cy.get('[id="modal-deletearticle-button"]').click();
            cy.wait(1500);
        })

        it(' Modify pieces - modify all informations - 1 piece from detail page', () => {
            //**************************//Page garde robe//***********************//
            //-------------//selectionner cartes//-------------//
            cy.get('[id="card-3"]').click();
            //**************************//Edit//***********************//
            cy.get('[data-cy="edit-articledetail-button"]').click();
            //**************************//modifier l'article//***********************//
            cy.get('[data-cy="modify-articledetail-button"]').click();
            //---------------// Modifier titre //-------------//
            cy.wait(1500);
            cy.get('[data-cy="title-modifyarticle-field"]').click().clear().type('Modified from detail');
            //-------------//Modifier categorie//-------------//
            cy.get('[data-cy="category-modifyarticle-field"]').click();
            cy.get('[id="category-FAM_01-button"]').click();
            cy.get('[id="category-VET_04-button"]').click();
            cy.get('[id="category-SWEAT_01-checkbox"]').click();
            //---------------// Modifier Marque //-------------//
            cy.get('[data-cy="brand-modifyarticle-field"]').click();
            cy.get('[id="brand-2387-checkbox"]').click();
            //-------------// Modifier Couleurs//-------------//
            cy.get('[data-cy="color-modifyarticle-field"]').click();
            cy.get('[id="color-16-checkbox"]').click();
            cy.get('[id="color-4-checkbox"]').click();
            cy.get('[id="color-14-checkbox"]').click();
            cy.get('[id="color-19-checkbox"]').click();
            cy.get('[id="colors_sub-button"]').click();
            //---------------// Modifier prix //-------------//
            cy.get('[data-cy="price-modifyarticle-field"]').click().clear().type('48,99');
            //---------------// Modifier état d'achat //-------------//
            cy.get('[data-cy="stateneuf-modifyarticle-radiobutton"]').click();
            //---------------// Modifier coupe  //-------------//
            //cy.get('[id="modifyfit-2-radiobutton"]').click()
            //---------------------------------------//Ajouter 2 ème Photo//------------------------------//
            cy.get('[data-cy="input-picture-1"]').click();
            cy.get('pwa-action-sheet').shadow().find('.content').contains("Prendre une photo").click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.camera-video').click();
            cy.wait(1500);
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.camera-video').click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.shutter').click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.accept-use').click();
            cy.wait(1500);
            cy.get('[data-cy="validate-crop-image-button"]').click();
            //---------------// Valider Modif Bouton //-------------//
            cy.get('[data-cy="Submit-modifyarticle-button"]').click();
            //---------------// Retour Bouton //-------------//
            cy.get('[data-cy="goback-articledetail-button"]').click();
        })

        it(' Modify pieces - modify title - 1 piece from detail page', () => {
            //**************************//Page garde robe//***********************//
            //-------------//selectionner cartes//-------------//
            cy.get('[id="card-0"]').click();
            //**************************//Edit//***********************//
            cy.get('[data-cy="edit-articledetail-button"]').click();
            //**************************//modifier l'article//***********************//
            cy.get('[data-cy="modify-articledetail-button"]').click();
            //---------------// Modifier titre //-------------//
            cy.wait(1500);
            cy.get('[data-cy="title-modifyarticle-field"]').click().clear().type('Unique Modified from detail');
            //---------------// Valider Modif Bouton //-------------//
            cy.get('[data-cy="Submit-modifyarticle-button"]').click();
            //---------------// Retour Bouton //-------------//
            cy.get('[data-cy="goback-articledetail-button"]').click();
        })

        it(' Modify pieces - modify category - 1 piece from detail page', () => {
            //**************************//Page garde robe//***********************//
            //-------------//selectionner cartes//-------------//
            cy.get('[id="card-0"]').click();
            //**************************//Edit//***********************//
            cy.get('[data-cy="edit-articledetail-button"]').click();
            //**************************//modifier l'article//***********************//
            cy.get('[data-cy="modify-articledetail-button"]').click();
            //-------------//Modifier categorie//-------------//
            cy.get('[data-cy="category-modifyarticle-field"]').click();
            cy.get('[id="category-FAM_02-button"]').click();
            cy.get('[id="category-CHAU_01-button"]').click();
            cy.get('[id="category-BSK_01-checkbox"]').click();
            //---------------// Valider Modif Bouton //-------------//
            cy.get('[data-cy="Submit-modifyarticle-button"]').click();
            //---------------// Retour Bouton //-------------//
            cy.get('[data-cy="goback-articledetail-button"]').click();
        })

        it(' Modify pieces - modify brand - 1 piece from detail page', () => {
            //**************************//Page garde robe//***********************//
            //-------------//selectionner cartes//-------------//
            cy.get('[id="card-0"]').click();
            //**************************//Edit//***********************//
            cy.get('[data-cy="edit-articledetail-button"]').click();
            //**************************//modifier l'article//***********************//
            cy.get('[data-cy="modify-articledetail-button"]').click();
            //---------------// Modifier Marque //-------------//
            cy.get('[data-cy="brand-modifyarticle-field"]').click();
            cy.get('[id="brand-2387-checkbox"]').click();
            //---------------// Valider Modif Bouton //-------------//
            cy.get('[data-cy="Submit-modifyarticle-button"]').click();
            //---------------// Retour Bouton //-------------//
            cy.get('[data-cy="goback-articledetail-button"]').click();

        })

        it(' Modify pieces - modify colors - 1 piece from detail page', () => {
            //**************************//Page garde robe//***********************//
            //-------------//selectionner cartes//-------------//
            cy.get('[id="card-15"]').click();
            //**************************//Edit//***********************//
            cy.get('[data-cy="edit-articledetail-button"]').click();
            //**************************//modifier l'article//***********************//
            cy.get('[data-cy="modify-articledetail-button"]').click();
            //-------------// Modifier Couleurs//-------------//
            cy.get('[data-cy="color-modifyarticle-field"]').click();
            cy.get('[id="color-16-checkbox"]').click();
            cy.get('[id="color-4-checkbox"]').click();
            cy.get('[id="color-14-checkbox"]').click();
            cy.get('[id="color-19-checkbox"]').click();
            cy.get('[id="colors_sub-button"]').click();
            //---------------// Valider Modif Bouton //-------------//
            cy.get('[data-cy="Submit-modifyarticle-button"]').click();
            //---------------// Retour Bouton //-------------//
            cy.get('[data-cy="goback-articledetail-button"]').click();

        })

        //it(' Modify pieces - modify size - 1 piece from detail page', () => {
        //**************************//Page garde robe//***********************//
        //-------------//selectionner cartes//-------------//
        //cy.get('[id="card-0"]').click();
        //**************************//Edit//***********************//
        //cy.get('[data-cy="edit-articledetail-button"]').click();
        //**************************//modifier l'article//***********************//
        //cy.get('[data-cy="modify-articledetail-button"]').click(); 
        //---------------// Taille //-------------//
        //cy.get('[id="Size_Field"]').click();
        //cy.get('ion-select-option').should('have.length', '8');
        //cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(2).click({ force: true }); //second to valid value
        //cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(2).click({ force: true }); // last to remove popup
        //cy.get('ion-popover > ion-select-popover > ion-list > ion-radio-group > ion-item > ion-radio').eq(2).click({ force: true }); // last to remove popup
        //cy.get('ion-select').should('have.attr', 'aria-label').and('equal', ' S ');
        //cy.wait(200);
        //---------------// Valider Modif Bouton //-------------//
        //cy.get('[data-cy="Submit-modifyarticle-button"]').click();
        //---------------// Retour Bouton //-------------//
        //cy.get('[data-cy="goback-articledetail-button"]').click(); 
        //})

        it(' Modify pieces - modify price - 1 piece from detail page', () => {
            //**************************//Page garde robe//***********************//
            //-------------//selectionner cartes//-------------//
            cy.get('[id="card-2"]').click();
            //**************************//Edit//***********************//
            cy.get('[data-cy="edit-articledetail-button"]').click();
            //**************************//modifier l'article//***********************//
            cy.get('[data-cy="modify-articledetail-button"]').click();
            //---------------// Modifier prix //-------------//
            cy.get('[data-cy="price-modifyarticle-field"]').click().clear().type('48,99');
            //---------------// Valider Modif Bouton //-------------//
            cy.get('[data-cy="Submit-modifyarticle-button"]').click();
            //---------------// Retour Bouton //-------------//
            cy.get('[data-cy="goback-articledetail-button"]').click();
        })

        it(' Modify pieces - modify state - 1 piece from detail page', () => {
            //**************************//Page garde robe//***********************//
            //-------------//selectionner cartes//-------------//
            cy.get('[id="card-0"]').click();
            //**************************//Edit//***********************//
            cy.get('[data-cy="edit-articledetail-button"]').click();
            //**************************//modifier l'article//***********************//
            cy.get('[data-cy="modify-articledetail-button"]').click();
            //---------------// Modifier état d'achat //-------------//
            cy.get('[data-cy="stateneuf-modifyarticle-radiobutton"]').click();
            //---------------// Valider Modif Bouton //-------------//
            cy.get('[data-cy="Submit-modifyarticle-button"]').click();
            //---------------// Retour Bouton //-------------//
            cy.get('[data-cy="goback-articledetail-button"]').click();
        })

        //it(' Modify pieces - modify fit - 1 piece from detail page', () => {
        //**************************//Page garde robe//***********************//
        //-------------//selectionner cartes//-------------//
        //cy.get('[id="card-15"]').click();
        //cy.wait(1500)
        //**************************//Edit//***********************//
        //cy.get('[data-cy="edit-articledetail-button"]').click();
        //**************************//modifier l'article//***********************//
        //cy.get('[data-cy="modify-articledetail-button"]').click();
        //---------------// Modifier coupe  //-------------//
        //cy.get('[id="modifyfit-2-radiobutton"]').click()
        //---------------// Valider Modif Bouton //-------------//
        //cy.get('[data-cy="Submit-modifyarticle-button"]').click();
        //---------------// Retour Bouton //-------------//
        //cy.get('[data-cy="goback-articledetail-button"]').click();
        //})

        it(' Modify pieces - add 2nd photo - 1 piece from detail page', () => {
            //**************************//Page garde robe//***********************//
            //-------------//selectionner cartes//-------------//
            cy.get('[id="card-0"]').click();
            //**************************//Edit//***********************//
            cy.get('[data-cy="edit-articledetail-button"]').click();
            //**************************//modifier l'article//***********************//
            cy.get('[data-cy="modify-articledetail-button"]').click();
            //---------------------------------------//Ajouter 2 ème Photo//------------------------------//
            cy.get('[data-cy="input-picture-1"]').click();
            cy.get('pwa-action-sheet').shadow().find('.content').contains("Prendre une photo").click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.camera-video').click();
            cy.wait(1500);
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.camera-video').click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.shutter').click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.accept-use').click();
            cy.wait(1500);
            cy.get('[data-cy="validate-crop-image-button"]').click();
            //---------------// Valider Modif Bouton //-------------//
            cy.get('[data-cy="Submit-modifyarticle-button"]').click();
            //---------------// Retour Bouton //-------------//
            cy.get('[data-cy="goback-articledetail-button"]').click();
        })

        it('Check - Categories number', () => {
            cy.get('[id="tab-bar"]');
            cy.get('[data-cy="wardrobe-tab-button"]').click();
            cy.contains('[class="title"]', 'GARDE ROBE');
            cy.get('[id="add-article-button"]').click();
            cy.get('[id="Category_Field"]').click();
            cy.get('ion-list').find('ion-item').should('have.length', 3)
            cy.get('[id="category-FAM_01-button"]').click();
            cy.get('ion-list').find('ion-item').should('have.length', 10)
            cy.get('[id="category-VET_01-button"]').click();
            cy.get('ion-list').find('ion-item').should('have.length', 5)
            cy.get('[data-cy="goback-categories-button"]').click();
            cy.get('[id="category-VET_02-button"]').click();
            cy.get('ion-list').find('ion-item').should('have.length', 3)
            cy.get('[data-cy="goback-categories-button"]').click();
            cy.get('[id="category-VET_03-button"]').click();
            cy.get('ion-list').find('ion-item').should('have.length', 2)
            cy.get('[data-cy="goback-categories-button"]').click();
            cy.get('[id="category-VET_04-button"]').click();
            cy.get('ion-list').find('ion-item').should('have.length', 3)
            cy.get('[data-cy="goback-categories-button"]').click();
            cy.get('[id="category-VET_05-button"]').click();
            cy.get('ion-list').find('ion-item').should('have.length', 4)
            cy.get('[data-cy="goback-categories-button"]').click();
            cy.get('[id="category-VET_06-button"]').click();
            cy.get('ion-list').find('ion-item').should('have.length', 5)
            cy.get('[data-cy="goback-categories-button"]').click();
            cy.get('[id="category-VET_07-button"]').click();
            cy.get('ion-list').find('ion-item').should('have.length', 4)
            cy.get('[data-cy="goback-categories-button"]').click();
            cy.get('[id="category-VET_08-button"]').click();
            cy.get('ion-list').find('ion-item').should('have.length', 13)
            cy.get('[data-cy="goback-categories-button"]').click();
            cy.get('[id="category-VET_09-button"]').click();
            cy.get('ion-list').find('ion-item').should('have.length', 4)
            cy.get('[data-cy="goback-categories-button"]').click();
            cy.get('[id="category-VET_10-button"]').click();
            cy.get('ion-list').find('ion-item').should('have.length', 6)
            cy.get('[data-cy="goback-categories-button"]').click();
            cy.get('[data-cy="goback-categories-button"]').click();
            cy.get('[id="category-FAM_02-button"]').click();
            cy.get('ion-list').find('ion-item').should('have.length', 4)
            cy.get('[id="category-CHAU_01-button"]').click();
            cy.get('ion-list').find('ion-item').should('have.length', 2)
            cy.get('[data-cy="goback-categories-button"]').click();
            cy.get('[id="category-CHAU_02-button"]').click();
            cy.get('ion-list').find('ion-item').should('have.length', 5)
            cy.get('[data-cy="goback-categories-button"]').click();
            cy.get('[id="category-CHAU_03-button"]').click();
            cy.get('ion-list').find('ion-item').should('have.length', 3)
            cy.get('[data-cy="goback-categories-button"]').click();
            cy.get('[data-cy="goback-categories-button"]').click();
            cy.get('[data-cy="goback-categories-button"]').click();
            cy.get('[data-cy="goback-addarticle-button"]').click();
        })

        it('Check - colors number', () => {
            cy.get('[id="tab-bar"]');
            cy.get('[data-cy="wardrobe-tab-button"]').click();
            cy.contains('[class="title"]', 'GARDE ROBE');
            cy.get('[id="add-article-button"]').click();
            cy.get('[id="Colors_Field"]').click()
            cy.get('ion-list').find('ion-item').should('have.length', 28)
            cy.wait(1500)
            cy.get('[data-cy="goback-colormodal-button"]').click();
            cy.get('[data-cy="goback-addarticle-button"]').click();
        })

        /* it('Check - sub-menu navigation', () => {
             cy.get('[id="tab-bar"]');
             cy.get('[data-cy="wardrobe-tab-button"]').click();
             cy.contains('[class="title"]', 'GARDE ROBE');
             cy.get('[id="Segment-WARDROBE.CATEGORIES.FAM_01-menu"]').click();
             cy.get('[id="Segment-WARDROBE.CATEGORIES.FAM_02-menu"]').click();
             cy.get('[id="Segment-WARDROBE.CATEGORIES.FAM_03-menu"]').click();
             cy.get('[id="Segment-WARDROBE.CATEGORIES.ALL-menu"]').click();
 
 
         })*/

        it('Se déconnecter', () => {
            cy.visit('')
            cy.get('[id="tab-bar"]');
            cy.get('[id="tab-button-profile"]').click();
            cy.get('[id="parameters-button"]').click();
            cy.get('[id="logout-button"]').click();
        })

    })
})