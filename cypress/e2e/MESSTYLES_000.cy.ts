describe('My Styles - Wardrobe', () => {
    context('Wardrobe styles menu', () => {
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
        })

        it('redirection page wardrobe-style', () => {
            cy.get('[id="tab-bar"]');
            cy.get('[data-cy="wardrobe-tab-button"]').click();
            cy.contains('[class="title"]', 'GARDE ROBE');
            cy.get('[id="Segment-WARDROBE.STYLES.TITLE-menu"]').click(); 
        })

        it('Add Style - Complete - 1 VET/ 1 ACC/ 1 CHAU', () => {
            //---------------//Bouton add//-------------//
            cy.get('[id="add-article-button"]').click();
            //**************************//Page d'ajout//***********************//
            //---------------//Titre//-------------//
            cy.get('[data-cy="title-style-input"] > input').click().type('1VET/ACC/CHAU');
             //---------------//Saison//-------------//
            cy.get('[data-cy="saisonFW-style-button"]').click();
            //---------------//Météo//-------------//
            cy.get('[data-cy="weather_rainy-style-button"]').click();
            //---------------//Tags//-------------//
            cy.get('[data-cy="tags-style-input"] > input').click().type('Test1');
            cy.get('[data-cy="addtags-style-button"]').click();
            //---------------//Selection-VET//-------------//
            cy.get('[data-cy="select_clothes-style-box"]').click();
            cy.get('[id="article-card-0"]').click();
            cy.get('[data-cy="confirm_select-style-button"]').click();
            //---------------//Selection-ACC//-------------//
            cy.get('[data-cy="select_access-style-box"]').click();
            cy.get('[id="article-card-0"]').click();
            cy.get('[data-cy="confirm_select-style-button"]').click();
            //---------------//Selection-CHAU//-------------//
            cy.get('[data-cy="select_shoes-style-box"]').click();
            cy.get('[id="article-card-0"]').click();
            cy.get('[data-cy="confirm_select-style-button"]').click();
            //---------------//Ajouter le style//-------------//
            cy.get('[data-cy="submit-addstyle-button"]').click();
            //---------------//Retour feed style//-------------//
            //cy.get('[data-cy="goback-addstyle-button"]').click();
        })

        it('Add Style - No ACC - 3 VET/1 CHAU', () => {
            cy.wait(500);
            //---------------//Bouton add//-------------//
            cy.get('[id="add-article-button"]').click();
            //**************************//Page d'ajout//***********************//
            //---------------//Titre//-------------//
            cy.get('[data-cy="title-style-input"] > input').click().type('3 VET/1 CHAU');
             //---------------//Saison//-------------//
            cy.get('[data-cy="saisonFW-style-button"]').click();
            //---------------//Météo//-------------//
            cy.get('[data-cy="weather_rainy-style-button"]').click();
            //---------------//Tags//-------------//
            cy.get('[data-cy="tags-style-input"] > input').click().type('Test1');
            cy.get('[data-cy="addtags-style-button"]').click();
            //---------------//Selection-VET//-------------//
            cy.get('[data-cy="select_clothes-style-box"]').click();
            cy.get('[id="article-card-0"]').click();
            cy.get('[id="article-card-1"]').click();
            cy.get('[id="article-card-2"]').click();
            cy.get('[data-cy="confirm_select-style-button"]').click();
            //---------------//Selection-CHAU//-------------//
            cy.get('[data-cy="select_shoes-style-box"]').click();
            cy.get('[id="article-card-0"]').click();
            cy.get('[data-cy="confirm_select-style-button"]').click();
            //---------------//Ajouter le style//-------------//
            cy.get('[data-cy="submit-addstyle-button"]').click();
            //---------------//Retour feed style//-------------//
            //cy.get('[data-cy="goback-addstyle-button"]').click();
        })

        it('Add Style - Complete max - 6 VET/3 ACC/1 CHAU', () => {
            cy.wait(1000);
            //---------------//Bouton add//-------------//
            cy.get('[id="add-article-button"]').click();
            //**************************//Page d'ajout//***********************//
            //---------------//Titre//-------------//
            cy.get('[data-cy="title-style-input"] > input').click().type('6 VET/3 ACC/1 CHAU');
             //---------------//Saison//-------------//
            cy.get('[data-cy="saisonFW-style-button"]').click();
            //---------------//Météo//-------------//
            cy.get('[data-cy="weather_rainy-style-button"]').click();
            //---------------//Tags//-------------//
            cy.get('[data-cy="tags-style-input"] > input').click().type('Test1');
            cy.get('[data-cy="addtags-style-button"]').click();
            //---------------//Selection-VET//-------------//
            cy.get('[data-cy="select_clothes-style-box"]').click();
            cy.get('[id="article-card-0"]').click();
            cy.get('[id="article-card-1"]').click();
            cy.get('[id="article-card-2"]').click();
            cy.get('[id="article-card-3"]').click();
            cy.get('[id="article-card-4"]').click();
            cy.get('[id="article-card-5"]').click();
            cy.get('[data-cy="confirm_select-style-button"]').click();
            //---------------//Selection-ACC//-------------//
            cy.get('[data-cy="select_access-style-box"]').click();
            cy.get('[id="article-card-0"]').click();
            cy.get('[id="article-card-1"]').click();
            cy.get('[id="article-card-2"]').click();
            cy.get('[data-cy="confirm_select-style-button"]').click();
            //---------------//Selection-CHAU//-------------//
            cy.get('[data-cy="select_shoes-style-box"]').click();
            cy.get('[id="article-card-0"]').click();
            cy.get('[data-cy="confirm_select-style-button"]').click();
            //---------------//Ajouter le style//-------------//
            cy.get('[data-cy="submit-addstyle-button"]').click();
            //---------------//Retour feed style//-------------//
            //cy.get('[data-cy="goback-addstyle-button"]').click();
        })

        it('Add Style - Error - No title', () => {
            cy.wait(500);
            //---------------//Bouton add//-------------//
            cy.get('[id="add-article-button"]').click();
            //**************************//Page d'ajout//***********************//
             //---------------//Saison//-------------//
            cy.get('[data-cy="saisonFW-style-button"]').click();
            //---------------//Météo//-------------//
            cy.get('[data-cy="weather_rainy-style-button"]').click();
            //---------------//Tags//-------------//
            cy.get('[data-cy="tags-style-input"] > input').click().type('Test1');
            cy.get('[data-cy="addtags-style-button"]').click();
            //---------------//Selection-VET//-------------//
            cy.get('[data-cy="select_clothes-style-box"]').click();
            cy.get('[id="article-card-0"]').click();
            cy.get('[id="article-card-1"]').click();
            cy.get('[id="article-card-2"]').click();
            cy.get('[id="article-card-3"]').click();
            cy.get('[id="article-card-4"]').click();
            cy.get('[id="article-card-5"]').click();
            cy.get('[data-cy="confirm_select-style-button"]').click();
            //---------------//Selection-ACC//-------------//
            cy.get('[data-cy="select_access-style-box"]').click();
            cy.get('[id="article-card-0"]').click();
            cy.get('[id="article-card-1"]').click();
            cy.get('[id="article-card-2"]').click();
            cy.get('[data-cy="confirm_select-style-button"]').click();
            //---------------//Selection-CHAU//-------------//
            cy.get('[data-cy="select_shoes-style-box"]').click();
            cy.get('[id="article-card-0"]').click();
            cy.get('[data-cy="confirm_select-style-button"]').click();
            //---------------// Ajouter le style - disabled //-------------//
            cy.get('[data-cy="submit-addstyle-button"]').should('have.attr', 'disabled');
            //---------------//Retour feed style//-------------//
            cy.get('[data-cy="goback-addstyle-button"]').click();
        })

        it('Add Style - Error - No tag', () => {
            cy.wait(500);
            //---------------//Bouton add//-------------//
            cy.get('[id="add-article-button"]').click();
            //**************************//Page d'ajout//***********************//
            //---------------//Titre//-------------//
            cy.get('[data-cy="title-style-input"] > input').click().type('6 VET/3 ACC/1 CHAU');
             //---------------//Saison//-------------//
            cy.get('[data-cy="saisonFW-style-button"]').click();
            //---------------//Météo//-------------//
            cy.get('[data-cy="weather_rainy-style-button"]').click();
            //---------------//Selection-VET//-------------//
            cy.get('[data-cy="select_clothes-style-box"]').click();
            cy.get('[id="article-card-0"]').click();
            cy.get('[id="article-card-1"]').click();
            cy.get('[id="article-card-2"]').click();
            cy.get('[id="article-card-3"]').click();
            cy.get('[id="article-card-4"]').click();
            cy.get('[id="article-card-5"]').click();
            cy.get('[data-cy="confirm_select-style-button"]').click();
            //---------------//Selection-ACC//-------------//
            cy.get('[data-cy="select_access-style-box"]').click();
            cy.get('[id="article-card-0"]').click();
            cy.get('[id="article-card-1"]').click();
            cy.get('[id="article-card-2"]').click();
            cy.get('[data-cy="confirm_select-style-button"]').click();
            //---------------//Selection-CHAU//-------------//
            cy.get('[data-cy="select_shoes-style-box"]').click();
            cy.get('[id="article-card-0"]').click();
            cy.get('[data-cy="confirm_select-style-button"]').click();
            //---------------// Ajouter le style - disabled //-------------//
            cy.get('[data-cy="submit-addstyle-button"]').should('not.have.attr', 'disabled');
            //---------------//Retour feed style//-------------//
            cy.get('[data-cy="goback-addstyle-button"]').click();
        })

        it('Add Style - Error - No VET', () => {
            cy.wait(500);
            //---------------//Bouton add//-------------//
            cy.get('[id="add-article-button"]').click();
            //**************************//Page d'ajout//***********************//
            //---------------//Titre//-------------//
            cy.get('[data-cy="title-style-input"] > input').click().type('6 VET/3 ACC/1 CHAU');
             //---------------//Saison//-------------//
            cy.get('[data-cy="saisonFW-style-button"]').click();
            //---------------//Météo//-------------//
            cy.get('[data-cy="weather_rainy-style-button"]').click();
            //---------------//Tags//-------------//
            cy.get('[data-cy="tags-style-input"] > input').click().type('Test1');
            cy.get('[data-cy="addtags-style-button"]').click();
            //---------------//Selection-ACC//-------------//
            cy.get('[data-cy="select_access-style-box"]').click();
            cy.get('[id="article-card-0"]').click();
            cy.get('[id="article-card-1"]').click();
            cy.get('[id="article-card-2"]').click();
            cy.get('[data-cy="confirm_select-style-button"]').click();
            //---------------//Selection-CHAU//-------------//
            cy.get('[data-cy="select_shoes-style-box"]').click();
            cy.get('[id="article-card-0"]').click();
            cy.get('[data-cy="confirm_select-style-button"]').click();
            //---------------// Ajouter le style - disabled //-------------//
            cy.get('[data-cy="submit-addstyle-button"]').should('have.attr', 'disabled');
            //---------------//Retour feed style//-------------//
            cy.get('[data-cy="goback-addstyle-button"]').click();
        })

        it('Add Style - Error - No CHAU', () => {
            cy.wait(500);
            //---------------//Bouton add//-------------//
            cy.get('[id="add-article-button"]').click();
            //**************************//Page d'ajout//***********************//
            //---------------//Titre//-------------//
            cy.get('[data-cy="title-style-input"] > input').click().type('6 VET/3 ACC/1 CHAU');
             //---------------//Saison//-------------//
            cy.get('[data-cy="saisonFW-style-button"]').click();
            //---------------//Météo//-------------//
            cy.get('[data-cy="weather_rainy-style-button"]').click();
            //---------------//Tags//-------------//
            cy.get('[data-cy="tags-style-input"] > input').click().type('Test1');
            cy.get('[data-cy="addtags-style-button"]').click();
            //---------------//Selection-VET//-------------//
            cy.get('[data-cy="select_clothes-style-box"]').click();
            cy.get('[id="article-card-0"]').click();
            cy.get('[id="article-card-1"]').click();
            cy.get('[id="article-card-2"]').click();
            cy.get('[id="article-card-3"]').click();
            cy.get('[id="article-card-4"]').click();
            cy.get('[id="article-card-5"]').click();
            cy.get('[data-cy="confirm_select-style-button"]').click();
            //---------------//Selection-ACC//-------------//
            cy.get('[data-cy="select_access-style-box"]').click();
            cy.get('[id="article-card-0"]').click();
            cy.get('[id="article-card-1"]').click();
            cy.get('[id="article-card-2"]').click();
            cy.get('[data-cy="confirm_select-style-button"]').click();
            //---------------// Ajouter le style - disabled //-------------//
            cy.get('[data-cy="submit-addstyle-button"]').should('have.attr', 'disabled');
            //---------------//Retour feed style//-------------//
            cy.get('[data-cy="goback-addstyle-button"]').click();
        })

        it('Add Style - Test - open/close', () => {
            cy.wait(500);
            //---------------//Bouton add//-------------//
            cy.get('[id="add-article-button"]').click();
            //**************************//Page d'ajout//***********************//
            //---------------//Retour feed style//-------------//
            cy.get('[data-cy="goback-addstyle-button"]').click();
        })

        it(' Modify style - selection', () => {
            cy.wait(500);
            //**************************//Page garde robe//***********************//
            //-------------//selectionner bouton//-------------//
            cy.get('[data-cy="Selection-wardrobe-button"]').click();
            //-------------//selectionner cartes//-------------//
            cy.get('[id="card-1"]').click();
            cy.get('[id="card-2"]').click();
            //-------------//annuler bouton//-------------//
            cy.get('[data-cy="Selection-cancel-wardrobe-button"]').click();
        })

        it(' Modify style - erase 1 style from feed', () => {
            cy.wait(500);
            //**************************//Page garde robe//***********************//
            //-------------//selectionner bouton//-------------//
            cy.get('[data-cy="Selection-wardrobe-button"]').click();
            //-------------//selectionner cartes//-------------//
            cy.get('[id="card-0"]').click();
            //-------------//supprimer bouton//-------------//
            cy.get('[id="add-article-button"]').click();
            //-------------//supprimer bouton modale//-------------//
            cy.get('[id="modalselect-deletearticle-button"]').click();
            cy.wait(1500);
        })

        it('Se déconnecter', () => {
            cy.visit('')
            cy.get('[id="tab-bar"]');
            cy.get('[id="tab-button-profile"]').click();
            cy.get('[id="parameters-button"]').click();
            cy.get('[id="logout-button"]').click();
        })
    })       
})