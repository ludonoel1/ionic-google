describe('Profile', () => {
    context('Profile menu', () => {
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

        it('redirection page profile', () => {
            cy.get('[id="tab-bar"]');
            cy.get('[data-cy="profile-tab-button"]').click();
            cy.wait(1000)
        })

        it('Modify profile - all fields', () => {
            cy.contains('Nom');
            //---------------//Bouton edit//-------------//
            cy.get('[data-cy="edit-profile-button"]').click();
            //---------------//Photo edit//-------------//
            cy.get('[data-cy="editphoto-profile-button"]').click();
            cy.get('pwa-action-sheet').shadow().find('.content').contains("Prendre une photo").click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.camera-video').click();
            cy.wait(1500);
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.camera-video').click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.shutter').click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.accept-use').click();
            cy.wait(1500);
            cy.get('[data-cy="validate-crop-image-button"]').click();
            //---------------//Name edit//-------------//
            cy.get('[data-cy="editname-profile-field"]').click();
            cy.get('[data-cy="typeedit-profile-field"]').clear().type('Younzee');
            cy.get('[data-cy="saveedit-profile-button"]').click({ force: true });
            //---------------//First name edit//-------------//
            cy.get('[data-cy="editfirstname-profile-field"]').click();
            cy.get('[data-cy="typeedit-profile-field"]').clear().type('Test').clear().type('Test1');
            cy.get('[data-cy="saveedit-profile-button"]').click({ force: true });
            //---------------//Username edit//-------------//
            cy.get('[data-cy="username-profile-field"]').click();
            cy.get('[data-cy="typeedit-profile-field"]').clear().type('TestUser').clear().type('TestUser1');
            cy.get('[data-cy="saveedit-profile-button"]').click({ force: true });
            //---------------//Pseudo name edit//-------------//
            cy.get('[data-cy="pseudo-profile-field"]').click()
            cy.get('[data-cy="typeedit-pseudoprofile-field"]').clear().type('testuser').clear().type('testuser1');
            cy.get('[data-cy="saveedit-profile-button"]').click({ force: true });
            //---------------//sexe edit//-------------//
            cy.get('[data-cy="sexe-profile-field"]').click();
            cy.get('[aria-checked="false"]').click();
            cy.get('[data-cy="saveedit-profile-button"]').click({ force: true });
            //---------------//birthdate edit//-------------//
            cy.get('[data-cy="birthdate-profile-field"]').click();
            cy.get('[data-cy="typeedit-dateprofile-field"]').click();
            cy.get('[class="myDpMonthYearText"]').click();
            cy.get('[class="myDpPrevBtn"]').click();
            cy.get('[id="y_2_4"]').click();
            cy.get('[id="d_2_3"]').click();
            cy.get('[data-cy="saveedit-profile-button"]').click({ force: true });
            //---------------//Bouton back//-------------//
            cy.get('[data-cy="editprofile-back-button"]').click({ force: true });
        })

        it('Modify profile - name edit', () => {
            //---------------//Bouton edit//-------------//
            cy.get('[data-cy="edit-profile-button"]').click();
            //---------------//Name edit//-------------//
            cy.get('[data-cy="editname-profile-field"]').click();
            cy.get('[data-cy="typeedit-profile-field"]').clear().type('Younzee').clear().type('Younzeex');
            cy.get('[data-cy="saveedit-profile-button"]').click({ force: true });
            //---------------//Bouton back//-------------//
            cy.get('[data-cy="editprofile-back-button"]').click();
        })

        it('Modify profile - first name edit ', () => {
            //---------------//Bouton edit//-------------//
            cy.get('[data-cy="edit-profile-button"]').click();
            //---------------//First name edit//-------------//
            cy.get('[data-cy="editfirstname-profile-field"]').click();
            cy.get('[data-cy="typeedit-profile-field"]').clear().type('Test').clear().type('Testx');
            cy.get('[data-cy="saveedit-profile-button"]').click({ force: true });
            //---------------//Bouton back//-------------//
            cy.get('[data-cy="editprofile-back-button"]').click();
        })

        it('Modify profile - username edit ', () => {
            //---------------//Bouton edit//-------------//
            cy.get('[data-cy="edit-profile-button"]').click();
            //---------------//Username edit//-------------//
            cy.get('[data-cy="username-profile-field"]').click();
            cy.get('[data-cy="typeedit-profile-field"]').clear().type('TestUser').clear().type('TestUserx');
            cy.get('[data-cy="saveedit-profile-button"]').click({ force: true });
            //---------------//Bouton back//-------------//
            cy.get('[data-cy="editprofile-back-button"]').click();
        })

        it('Modify profile - pseudoname edit ', () => {
            //---------------//Bouton edit//-------------//
            cy.get('[data-cy="edit-profile-button"]').click();
            //---------------//Pseudo name edit//-------------//
            cy.get('[data-cy="pseudo-profile-field"]').click()
            cy.get('[data-cy="typeedit-pseudoprofile-field"]').clear().type('testuser').clear().type('testuser1');
            cy.get('[data-cy="saveedit-profile-button"]').click({ force: true });
            //---------------//Bouton back//-------------//
            cy.get('[data-cy="editprofile-back-button"]').click();
        })

        it('Modify profile - sexe edit ', () => {
            //---------------//Bouton edit//-------------//
            cy.get('[data-cy="edit-profile-button"]').click();
            //---------------//sexe edit//-------------//
            cy.get('[data-cy="sexe-profile-field"]').click();
            cy.get('[aria-checked="false"]').click();
            cy.get('[data-cy="saveedit-profile-button"]').click({ force: true });
            //---------------//Bouton back//-------------//
            cy.get('[data-cy="editprofile-back-button"]').click();
        })

        it('Modify profile - birthdate edit ', () => {
            //---------------//Bouton edit//-------------//
            cy.get('[data-cy="edit-profile-button"]').click();
            //---------------//birthdate edit//-------------//
            cy.get('[data-cy="birthdate-profile-field"]').click();
            cy.get('[data-cy="typeedit-dateprofile-field"]').click();
            cy.get('[class="myDpHeaderBtn myDpYearBtn myDpYearLabel"]').click();
            cy.get('[class="myDpNextBtn"]').click();
            cy.get('[id="y_2_4"]').click();
            cy.get('[id="d_2_3"]').click();
            cy.get('[data-cy="saveedit-profile-button"]').click({ force: true });
            //---------------//Bouton back//-------------//
            cy.get('[data-cy="editprofile-back-button"]').click();
        })

        it('Modify profile - photo edit ', () => {
            //---------------//Bouton edit//-------------//
            cy.get('[data-cy="edit-profile-button"]').click();
            //---------------//Photo edit//-------------//
            cy.get('[data-cy="editphoto-profile-button"]').click();
            cy.get('pwa-action-sheet').shadow().find('.content').contains("Prendre une photo").click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.camera-video').click();
            cy.wait(1500);
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.camera-video').click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.shutter').click();
            cy.get('pwa-camera-modal-instance').shadow().find('pwa-camera').shadow().find('.accept-use').click();
            cy.wait(1500);
            cy.get('[data-cy="validate-crop-image-button"]').click();
            //---------------//Bouton back//-------------//
            cy.get('[data-cy="editprofile-back-button"]').click();
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

