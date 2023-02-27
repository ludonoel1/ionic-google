"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_main_profile_profile_module_ts"],{

/***/ 90479:
/*!**************************************************************************!*\
  !*** ./src/app/main/profile/edit-profile/edit-profile-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePageRoutingModule": () => (/* binding */ EditProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _edit_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile.component */ 26250);




const routes = [
    {
        path: '',
        component: _edit_profile_component__WEBPACK_IMPORTED_MODULE_0__.EditProfileComponent,
    },
];
let EditProfilePageRoutingModule = class EditProfilePageRoutingModule {
};
EditProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditProfilePageRoutingModule);



/***/ }),

/***/ 26250:
/*!*********************************************************************!*\
  !*** ./src/app/main/profile/edit-profile/edit-profile.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfileComponent": () => (/* binding */ EditProfileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _edit_profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile.component.html?ngResource */ 8004);
/* harmony import */ var _edit_profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile.component.scss?ngResource */ 85007);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 63947);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var src_shared_components_edit_profile_modal_edit_profile_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/components/edit-profile-modal/edit-profile-modal.component */ 18271);
/* harmony import */ var src_shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/services/data.service */ 31043);
/* harmony import */ var src_shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/services/toaster.service */ 29238);
/* harmony import */ var src_shared_state_app_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/state/app.state.service */ 29245);
/* harmony import */ var _wardrobe_image_crop_modal_image_crop_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../wardrobe/image-crop-modal/image-crop-modal.component */ 13255);














let EditProfileComponent = class EditProfileComponent {
    constructor(modalController, dataService, http, toasterService, appState, spinner) {
        this.modalController = modalController;
        this.dataService = dataService;
        this.http = http;
        this.toasterService = toasterService;
        this.appState = appState;
        this.spinner = spinner;
        this.genders = src_app_app_constants__WEBPACK_IMPORTED_MODULE_3__.ProfileConstants.genders;
        this.photos = [
            {
                filepath: '',
                webviewPath: '',
            },
            {
                filepath: '',
                webviewPath: '',
            },
        ];
        this.convertBlobToBase64 = (blob) => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onerror = reject;
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(blob);
        });
    }
    ngOnInit() {
        this.currentUser$ = this.appState.getUserInfos();
        //this.dataService.getUserData().then((user) => this.currentUser = user);
    }
    ionViewDidEnter() {
        this.spinner.hide('appSpinner');
    }
    /*ionViewWillEnter() {
      StatusBar.setBackgroundColor({ color: '#FFDE59' })
    }
  
    ionViewWillLeave() {
      StatusBar.setBackgroundColor({ color: '#FFFFFF' })
    }*/
    onOpenModal(title, value, key, userID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_shared_components_edit_profile_modal_edit_profile_modal_component__WEBPACK_IMPORTED_MODULE_4__.EditProfileModalComponent,
                componentProps: {
                    data: { title, value, key, userID },
                    backdropDismiss: false,
                },
            });
            yield modal.present();
            const result = yield modal.onWillDismiss();
            if (result.data) {
                //this.currentUser = result.data;
            }
        });
    }
    onUpdateAvatar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            // Take a photo
            const capturedPhoto = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto({
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Uri,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Prompt,
                promptLabelPhoto: "Depuis votre galerie",
                promptLabelPicture: "Prendre une photo",
                quality: 100,
                height: 1000,
                width: 1000,
            }).then(photo => {
                this.readAsBase64(photo).then(base64 => {
                    this.show(base64).then(result => {
                        //console.log(this.calc_image_size(result));
                        if (result.includes('data:image/png;base64,')) {
                            const plop = result.replace('data:image/png;base64,', '');
                            const shopper = {
                                avatar_base64: plop,
                            };
                            this.http
                                .patch(`${src_app_app_constants__WEBPACK_IMPORTED_MODULE_3__.AppConstants.shopperUrl}/${this.currentUser$.getValue().id}`, { shopper }, { observe: 'response' })
                                .subscribe((response) => {
                                this.dataService.setData("user", response.body.data);
                                this.appState.setUserInfos(response.body.data);
                                //this.currentUser = response.body.data;
                                this.toasterService.presentSuccessToast(`MESSAGE.PROFILE.EDIT_${response.status}`);
                            }),
                                error => {
                                    console.log(error);
                                    this.toasterService.presentErrorToast('SHARED.ERROR');
                                };
                        }
                    });
                });
            });
        });
    }
    readAsBase64(photo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            // "hybrid" will detect Cordova or Capacitor
            /* if (this.platform.is('hybrid')) {
               // Read the file into base64 format
               const file = await Filesystem.readFile({
                 path: photo.path
               });
         
               return file.data;
             }
             else {*/
            // Fetch the photo, read as a blob, then convert to base64 format
            const response = yield fetch(photo.webPath);
            const blob = yield response.blob();
            return (yield this.convertBlobToBase64(blob));
            // }
        });
    }
    show(imageBase64) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _wardrobe_image_crop_modal_image_crop_modal_component__WEBPACK_IMPORTED_MODULE_8__.ImageCropModalComponent,
                backdropDismiss: false,
                componentProps: {
                    imageBase64,
                    aspectRatio: 1 / 1,
                },
            });
            yield modal.present();
            const result = yield modal.onWillDismiss();
            if (result.data && result.data.croppedImageBase64) {
                return result.data.croppedImageBase64;
            }
            return null;
        });
    }
};
EditProfileComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: src_shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__.DataService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient },
    { type: src_shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_6__.ToasterService },
    { type: src_shared_state_app_state_service__WEBPACK_IMPORTED_MODULE_7__.AppStateService },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerService }
];
EditProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-edit-profile',
        template: _edit_profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditProfileComponent);



/***/ }),

/***/ 21489:
/*!******************************************************************!*\
  !*** ./src/app/main/profile/edit-profile/edit-profile.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePageModule": () => (/* binding */ EditProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/shared/shared.module */ 8395);
/* harmony import */ var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile-routing.module */ 90479);
/* harmony import */ var _edit_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-profile.component */ 26250);





let EditProfilePageModule = class EditProfilePageModule {
};
EditProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [src_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_1__.EditProfilePageRoutingModule],
        declarations: [_edit_profile_component__WEBPACK_IMPORTED_MODULE_2__.EditProfileComponent],
    })
], EditProfilePageModule);



/***/ }),

/***/ 28377:
/*!********************************************************!*\
  !*** ./src/app/main/profile/profile-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 86457);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage,
    },
    {
        path: 'profile-params',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_main_profile_profile-params_profile-params_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profile-params/profile-params.module */ 85470)).then(m => m.ProfileParamsPageModule),
    },
    {
        path: 'edit-profile',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./edit-profile/edit-profile.module */ 21489)).then(m => m.EditProfilePageModule),
    },
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 83602:
/*!************************************************!*\
  !*** ./src/app/main/profile/profile.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/shared/shared.module */ 8395);
/* harmony import */ var _edit_profile_edit_profile_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile/edit-profile.module */ 21489);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-routing.module */ 28377);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ 86457);






let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_5__.CUSTOM_ELEMENTS_SCHEMA],
        imports: [
            src_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__.ProfilePageRoutingModule,
            _edit_profile_edit_profile_module__WEBPACK_IMPORTED_MODULE_1__.EditProfilePageModule,
        ],
        declarations: [
            _profile_page__WEBPACK_IMPORTED_MODULE_3__.ProfilePage,
            //ExpandableHeaderDirective
        ],
    })
], ProfilePageModule);



/***/ }),

/***/ 86457:
/*!**********************************************!*\
  !*** ./src/app/main/profile/profile.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page.html?ngResource */ 85340);
/* harmony import */ var _profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss?ngResource */ 92209);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var src_shared_state_wardrobe_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/state/wardrobe-state.service */ 40084);
/* harmony import */ var src_shared_utils_subscriber_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/utils/subscriber-component */ 16391);
/* harmony import */ var _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor-community/firebase-analytics */ 67285);
/* harmony import */ var src_shared_state_app_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/state/app.state.service */ 29245);











let ProfilePage = class ProfilePage extends src_shared_utils_subscriber_component__WEBPACK_IMPORTED_MODULE_4__.SubscriberComponent {
    constructor(router, wardrobeState, appState) {
        super();
        this.router = router;
        this.wardrobeState = wardrobeState;
        this.appState = appState;
        this.genders = src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.ProfileConstants.genders;
    }
    ionViewWillEnter() {
        _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_5__.FirebaseAnalytics.setScreenName({
            screenName: "ProfileScreen",
            nameOverride: "ProfileScreen",
        });
        _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_5__.FirebaseAnalytics.logEvent({
            name: "profile_page_entered",
            params: {}
        });
        this.currentUser$ = this.appState.getUserInfos();
        this.styles$ = this.wardrobeState.getAllStyles();
        this.subscription$ = this.addSubscription((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this.wardrobeState.extractArticlesByCategoryId(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.WardrobeCategory.CLOTHES),
            this.wardrobeState.extractArticlesByCategoryId(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.WardrobeCategory.SHOES),
            this.wardrobeState.extractArticlesByCategoryId(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.WardrobeCategory.ACCESSORIES)]).subscribe((categoryValues) => {
            this.allArticles = categoryValues.reduce((acc, val) => acc.concat([...val]), []);
        }));
    }
    ionViewWillLeave() {
        this.removeAllSubscriptions();
    }
    onGoToParameters() {
        this.router.navigate(['/main/profile/profile-params']);
    }
    onEditProfile() {
        this.router.navigate(['/main/profile/edit-profile']);
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_shared_state_wardrobe_state_service__WEBPACK_IMPORTED_MODULE_3__.WardrobeStateService },
    { type: src_shared_state_app_state_service__WEBPACK_IMPORTED_MODULE_6__.AppStateService }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-profile',
        template: _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 85007:
/*!**********************************************************************************!*\
  !*** ./src/app/main/profile/edit-profile/edit-profile.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "/** Ionic CSS Variables **/\n:root {\n  --ion-color-white: #ffffff;\n  --ion-color-black: #000000;\n  /** primary color**/\n  --ion-color-primary: #ffde59;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #111111;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #ffeeae;\n  --ion-color-primary-tint: #ffde59;\n  /** secondary for text**/\n  --ion-color-secondary: #111111;\n  --ion-color-secondary-rgb: 17, 17, 17;\n  --ion-color-secondary-contrast: #ffde59;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0f0f0f;\n  --ion-color-secondary-tint: #292929;\n  /** tertiary used for input background and background icone**/\n  --ion-color-tertiary: #dbdbdb;\n  --ion-color-tertiary-rgb: 219, 219, 219;\n  --ion-color-tertiary-contrast: #000000;\n  --ion-color-tertiary-contrast-rgb: 0, 0, 0;\n  --ion-color-tertiary-shade: #c1c1c1;\n  --ion-color-tertiary-tint: #dfdfdf;\n  /** success **/\n  --ion-color-success: #01db72;\n  --ion-color-success-rgb: 1, 219, 114;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #01c164;\n  --ion-color-success-tint: #1adf80;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #ff1166;\n  --ion-color-danger-rgb: 255, 17, 102;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e00f5a;\n  --ion-color-danger-tint: #ff2976;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: rgba(255, 222, 89, 0.19);\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** Tab-bar **/\n  --ion-toolbar-background: white;\n  --text-font-style: \"IBMPlexSans\";\n  --title-font-style: \"IBMPlexSans\";\n}\n:root .spinner-bubbles {\n  color: var(--ion-color-primary);\n}\n:root ion-tab-button.tab-selected {\n  --color-selected: var(--ion-color-primary);\n}\n:root ion-segment {\n  --background: var(--ion-color-white);\n}\n:root ion-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --color-checked: black;\n  --indicator-transition: none;\n}\n:root ion-button {\n  text-transform: none;\n}\nion-content ion-header {\n  min-height: 3rem;\n  height: 3rem;\n}\nion-content ion-header ion-toolbar {\n  height: 100%;\n  padding: 0rem 1rem 0rem 1rem;\n}\nion-content ion-header ion-toolbar ion-buttons {\n  background: white;\n}\nion-content ion-header ion-toolbar ion-buttons ion-icon {\n  width: 1.5rem;\n  height: 1.5rem;\n}\nion-content ion-header ion-toolbar ion-title {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: #111111;\n  font-weight: 600;\n}\nion-content ion-header::after {\n  background-image: none;\n  height: 0;\n}\nion-content .content {\n  padding: 0rem 1rem 0rem 1rem;\n  background-color: white;\n  width: 100%;\n  --padding-end: 1rem;\n  --padding-start: 1rem;\n}\nion-content .content .sub_header {\n  padding: 1rem 0 3rem 0;\n}\nion-content .content .sub_header .picture-container {\n  height: 8.5rem;\n  display: flex;\n  justify-content: center;\n}\nion-content .content .sub_header .picture-container .picture {\n  position: relative;\n  width: 8.5rem;\n  height: 8.5rem;\n}\nion-content .content .sub_header .picture-container .picture ion-avatar {\n  height: 100%;\n  width: 100%;\n  filter: brightness(0.5);\n}\nion-content .content .sub_header .picture-container .picture ion-button {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  --border-radius: 50%;\n  --background: transparent;\n  --color: white;\n  margin: 0;\n}\nion-content .content .sub_header .picture-container .picture ion-button ion-icon {\n  height: 48px;\n  width: 48px;\n}\nion-content .content ion-item {\n  height: 40px;\n  --inner-padding-end: 0;\n  --padding-start: 0;\n  --min-height: 30px;\n  --detail-icon-font-size: 24px;\n  --detail-icon-color: #9d9c99;\n  --detail-icon-opacity: none;\n  border-bottom: 1px solid #dbdbdb;\n  margin-top: 1rem;\n}\nion-content .content ion-item .info-label,\nion-content .content ion-item .info-text {\n  padding-left: 0.5rem;\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiZWRpdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsMEJBQUE7QUFvQkE7RUFDRSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLDZEQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsMENBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBTUEsY0FBQTtFQW1CQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7QUNwREY7QUQyQkU7RUFDRSwrQkFBQTtBQ3pCSjtBRDZCRTtFQUNFLDBDQUFBO0FDM0JKO0FEOEJFO0VBQ0Usb0NBQUE7QUM1Qko7QUQrQkU7RUFDRSw4Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUM3Qko7QURnQ0U7RUFDRSxvQkFBQTtBQzlCSjtBQXBGRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQXVGSjtBQXJGSTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtBQXVGTjtBQXJGTTtFQUNFLGlCQUFBO0FBdUZSO0FBckZRO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUF1RlY7QUFuRk07RUNzRUosZURyRTZCO0VDc0U3QiwwQkFGd0Y7RUFHeEYsY0Z0RlE7RUV1RlIsZ0JBSnFFO0FEb0J2RTtBQW5GRTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtBQXFGSjtBQWxGRTtFQUNFLDRCQUFBO0VBMkRBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUEwQko7QUF0Rkk7RUFDRSxzQkFBQTtBQXdGTjtBQXRGTTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUF3RlI7QUF0RlE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBd0ZWO0FBdEZVO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQXdGWjtBQXJGVTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQXVGWjtBQXJGWTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBdUZkO0FBaEZJO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUFrRk47QUFoRk07O0VBRUUsb0JBQUE7RUNrQk4sZURqQjJCO0VDa0IzQiwwQkFGc0Y7RUFHdEYsaUNEbkJpQztFQ29CakMsZ0JBSm1FO0FEcUVyRSIsImZpbGUiOiJlZGl0LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cblxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG5cbi8vIGNvbG9yc1xuJGJsYWNrMjogIzQwNDAzZjtcbiRncmF5NjAwOiAjMTExMTExOyAvL3VzZWRcbiRncmF5NTAwOiAjMjkyOTI5OyAvL3VzZWRcbiRncmF5NDAwOiAjNTk1OTU5OyAvL3VzZWRcbiRncmF5MzAwOiAjODg4ODg4OyAvL3VzZWRcbiRncmF5MjAwOiAjQjhCOEI4O1xuJGdyYXkyOiAjOWQ5Yzk5O1xuJGdyYXkzOiAjZGJkYmRiO1xuJHllbGxvdzEwMDogI2ZmZmNlZjtcbiR5ZWxsb3cyMDA6ICNmZmY1Y2U7XG4keWVsbG93MzogI2ZkZTg5NjtcbiR5ZWxsb3c0OiAjZmNlZWI2O1xuJHllbGxvdzU6ICNmYmYyZDQ7XG4keWVsbG93NjogI0ZGREU1OTtcbiR3aGl0ZTgwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4kZGFyazc1OiByZ2JhKDAsIDAsIDAsIDAuMjUpOyAvL2J1dHRvbnMgc2hhZG93XG5cbjpyb290IHtcbiAgLS1pb24tY29sb3Itd2hpdGU6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWJsYWNrOiAjMDAwMDAwO1xuICAvKiogcHJpbWFyeSBjb2xvcioqL1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjZmZkZTU5O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNTYsIDEyOCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjMTExMTExO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogI2ZmZWVhZTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjZmZkZTU5O1xuXG4gIC8qKiBzZWNvbmRhcnkgZm9yIHRleHQqKi9cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjMTExMTExO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiAxNywgMTcsIDE3O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmRlNTk7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzBmMGYwZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICMyOTI5Mjk7XG5cbiAgLyoqIHRlcnRpYXJ5IHVzZWQgZm9yIGlucHV0IGJhY2tncm91bmQgYW5kIGJhY2tncm91bmQgaWNvbmUqKi9cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNkYmRiZGI7IC8vc2FtZSBhcyBncmF5M1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDIxOSwgMjE5LCAyMTk7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjYzFjMWMxO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjZGZkZmRmO1xuXG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMDFkYjcyO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogMSwgMjE5LCAxMTQ7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMDFjMTY0O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICMxYWRmODA7XG5cbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmM0MDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDE5NiwgOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGFjMDg7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmY2EyMjtcblxuICAvKiogZGFuZ2VyICoqL1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNmZjExNjY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI1NSwgMTcsIDEwMjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNlMDBmNWE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZmYyOTc2O1xuXG4gIC8qKiBkYXJrICoqL1xuICAtLWlvbi1jb2xvci1kYXJrOiAjMjIyNDI4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcblxuICAvKiogbWVkaXVtICoqL1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5Mjk0OWM7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE0NiwgMTQ4LCAxNTY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODA4Mjg5O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogIzlkOWZhNjtcblxuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiByZ2JhKDI1NSwgMjIyLCA4OSwgMC4xOSk7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjQ0LCAyNDUsIDI0ODtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNWY2Zjk7XG5cbiAgLnNwaW5uZXItYnViYmxlcyB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuXG4gIC8qKiBUYWItYmFyICoqL1xuICBpb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQge1xuICAgIC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuXG4gIGlvbi1zZWdtZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIH1cblxuICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLS1jb2xvci1jaGVja2VkOiBibGFjaztcbiAgICAtLWluZGljYXRvci10cmFuc2l0aW9uOiBub25lO1xuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIH1cblxuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLXRleHQtZm9udC1zdHlsZTogJ0lCTVBsZXhTYW5zJztcbiAgLS10aXRsZS1mb250LXN0eWxlOiAnSUJNUGxleFNhbnMnO1xufVxuXG4vLyBWZXJpZmllZFxuJHdpZHRoLXNkOiAzMDBweDsgLy9mb2xkXG4kd2lkdGgtbWQ6IDM4MHB4OyAvL2lwaG9uZSBTRVxuJHdpZHRoLWxkOiA0MTJweDsgLy9pcGhvbmUgWFJcbiR3aWR0aC14bGQ6IDc2OHB4OyAvL2lwYWQiLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi8uLi90aGVtZS92YXJpYWJsZXMuc2Nzcyc7XG5cbmlvbi1jb250ZW50IHtcbiAgaW9uLWhlYWRlciB7XG4gICAgbWluLWhlaWdodDogM3JlbTtcbiAgICBoZWlnaHQ6IDNyZW07XG5cbiAgICBpb24tdG9vbGJhciB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAwcmVtIDFyZW0gMHJlbSAxcmVtO1xuXG4gICAgICBpb24tYnV0dG9ucyB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICB3aWR0aDogMS41cmVtO1xuICAgICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlvbi10aXRsZSB7XG4gICAgICAgIEBpbmNsdWRlIGJsYWNrU3VidGl0bGUoMXJlbSwgJGdyYXk2MDAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpb24taGVhZGVyOjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgcGFkZGluZzogMHJlbSAxcmVtIDByZW0gMXJlbTtcblxuICAgIC5zdWJfaGVhZGVyIHtcbiAgICAgIHBhZGRpbmc6IDFyZW0gMCAzcmVtIDA7XG5cbiAgICAgIC5waWN0dXJlLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogOC41cmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAucGljdHVyZSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHdpZHRoOiA4LjVyZW07XG4gICAgICAgICAgaGVpZ2h0OiA4LjVyZW07XG5cbiAgICAgICAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpb24taXRlbSB7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgLS1taW4taGVpZ2h0OiAzMHB4O1xuICAgICAgLS1kZXRhaWwtaWNvbi1mb250LXNpemU6IDI0cHg7XG4gICAgICAtLWRldGFpbC1pY29uLWNvbG9yOiAjOWQ5Yzk5OyAvL2dyYXkyXG4gICAgICAtLWRldGFpbC1pY29uLW9wYWNpdHk6IG5vbmU7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGdyYXkzO1xuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcblxuICAgICAgLmluZm8tbGFiZWwsXG4gICAgICAuaW5mby10ZXh0IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gICAgICAgIEBpbmNsdWRlIHJlZ3VsYXJUZXh0KDFyZW0sIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAtLXBhZGRpbmctZW5kOiAxcmVtO1xuICAgIC0tcGFkZGluZy1zdGFydDogMXJlbTtcbiAgfVxufSIsIkBtaXhpbiB0aXRsZSgkZm9udC1zaXplOiAycmVtLFxuICAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycsXG4gICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSksXG4gICRmb250LXdlaWdodDogYm9sZCkge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cblxuXG5AbWl4aW4gc2ltcGxlX2J1dHRvbigkd2lkdGg6IDI1JSwgJGhlaWdodDogMi41cmVtLCAkY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpKSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbiAgLS1jb2xvcjogJGNvbG9yO1xufVxuXG5AbWl4aW4gaWNvbigkd2lkdGg6IDFyZW0sICRoZWlnaHQ6IDFyZW0pIHtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xufVxuXG5AbWl4aW4gdGV4dCgkZm9udC1zaXplOiAwLjg3NXJlbSxcbiAgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnLFxuICAkY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpLFxuICAkZm9udC13ZWlnaHQ6IG5vcm1hbCkge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiB0ZXh0LW92ZXJmbG93KCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuXG4vL3ZlcmlmaWVkXG5cbkBtaXhpbiBmbGV4KCRkaXJlY3Rpb246IHJvdywgJGFsaWduLWl0ZW1zOiBjZW50ZXIsICRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQsICR3cmFwOiBub3dyYXAsICRpbmxpbmU6IGZhbHNlLCAkcG9zaXRpb246IHJlbGF0aXZlKSB7XG4gIHBvc2l0aW9uOiAkcG9zaXRpb247XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ24taXRlbXM7XG5cbiAgQGlmICRpbmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB9XG5cbiAgQGVsc2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbiAgZmxleC13cmFwOiAkd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeS1jb250ZW50O1xufVxuXG5AbWl4aW4gYnV0dG9uKCR3aWR0aDogMjUlLCAkaGVpZ2h0OiAyLjVyZW0sICRmb250LXNpemU6IDAuODc1cmVtLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycsICRmb250LXdlaWdodDogNjAwKSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xuICBtaW4taGVpZ2h0OiAkaGVpZ2h0O1xufVxuXG5AbWl4aW4gd2hpdGVUaXRsZSgkZm9udC1zaXplOiAxLjc1cmVtLCAkY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSksICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gd2hpdGVTdWJ0aXRsZSgkZm9udC1zaXplOiAxcmVtLCAkY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSksICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gYmxhY2tUaXRsZSgkZm9udC1zaXplOiAxLjc1cmVtLCAkY29sb3I6ICRncmF5NTAwLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnLCApIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xuICBtYXJnaW46IDBweDtcbn1cblxuQG1peGluIGJsYWNrU3VidGl0bGUoJGZvbnQtc2l6ZTogMXJlbSwgJGNvbG9yOiAkZ3JheTUwMCwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiBtZWRpdW1UZXh0KCRmb250LXNpemU6IDAuNzVyZW0sICRjb2xvcjogJGdyYXk1MDAsICRmb250LXdlaWdodDogNTAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gcmVndWxhclRleHQoJGZvbnQtc2l6ZTogMXJlbSwgJGNvbG9yOiAkZ3JheTYwMCwgJGZvbnQtd2VpZ2h0OiA0MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiBzZW1pQm9sZFRleHQoJGZvbnQtc2l6ZTogMnJlbSwgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIGJvbGRUZXh0KCRmb250LXNpemU6IDEuMTI1cmVtLCAkY29sb3I6ICRncmF5NjAwLCAkZm9udC13ZWlnaHQ6IDcwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn0iXX0= */";

/***/ }),

/***/ 92209:
/*!***********************************************************!*\
  !*** ./src/app/main/profile/profile.page.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "/** Ionic CSS Variables **/\n:root {\n  --ion-color-white: #ffffff;\n  --ion-color-black: #000000;\n  /** primary color**/\n  --ion-color-primary: #ffde59;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #111111;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #ffeeae;\n  --ion-color-primary-tint: #ffde59;\n  /** secondary for text**/\n  --ion-color-secondary: #111111;\n  --ion-color-secondary-rgb: 17, 17, 17;\n  --ion-color-secondary-contrast: #ffde59;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0f0f0f;\n  --ion-color-secondary-tint: #292929;\n  /** tertiary used for input background and background icone**/\n  --ion-color-tertiary: #dbdbdb;\n  --ion-color-tertiary-rgb: 219, 219, 219;\n  --ion-color-tertiary-contrast: #000000;\n  --ion-color-tertiary-contrast-rgb: 0, 0, 0;\n  --ion-color-tertiary-shade: #c1c1c1;\n  --ion-color-tertiary-tint: #dfdfdf;\n  /** success **/\n  --ion-color-success: #01db72;\n  --ion-color-success-rgb: 1, 219, 114;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #01c164;\n  --ion-color-success-tint: #1adf80;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #ff1166;\n  --ion-color-danger-rgb: 255, 17, 102;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e00f5a;\n  --ion-color-danger-tint: #ff2976;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: rgba(255, 222, 89, 0.19);\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** Tab-bar **/\n  --ion-toolbar-background: white;\n  --text-font-style: \"IBMPlexSans\";\n  --title-font-style: \"IBMPlexSans\";\n}\n:root .spinner-bubbles {\n  color: var(--ion-color-primary);\n}\n:root ion-tab-button.tab-selected {\n  --color-selected: var(--ion-color-primary);\n}\n:root ion-segment {\n  --background: var(--ion-color-white);\n}\n:root ion-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --color-checked: black;\n  --indicator-transition: none;\n}\n:root ion-button {\n  text-transform: none;\n}\nion-content {\n  width: 100%;\n}\nion-content ion-header {\n  min-height: 3rem;\n  height: 3rem;\n}\nion-content ion-header ion-toolbar {\n  height: 100%;\n  padding: 0rem 1rem 0rem 1rem;\n}\nion-content ion-header ion-toolbar ion-button {\n  margin: 0;\n  height: 2.5rem;\n  width: 2.5rem;\n  --padding-end: 0;\n  --padding-start: 0;\n  --box-shadow: none;\n  --background: white;\n}\nion-content ion-header ion-toolbar ion-button ion-icon {\n  width: 1.5rem;\n  height: 1.5rem;\n}\nion-content ion-header ion-toolbar ion-title {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: #111111;\n  font-weight: 600;\n  padding-right: 3rem;\n  padding-left: 3rem;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n}\nion-content ion-header::after {\n  background-image: none;\n  height: 0;\n}\nion-content .sub_header {\n  padding: 1rem 0 0rem 0;\n}\nion-content .sub_header .picture-container {\n  height: 8.5rem;\n  display: flex;\n  justify-content: center;\n}\n@media screen and (max-width: 370px) {\n  ion-content .sub_header .picture-container {\n    height: 6.5rem;\n  }\n}\nion-content .sub_header .picture-container .picture {\n  position: relative;\n  width: 8.5rem;\n  height: 8.5rem;\n}\n@media screen and (max-width: 370px) {\n  ion-content .sub_header .picture-container .picture {\n    height: 6.5rem;\n    width: 6.5rem;\n  }\n}\nion-content .sub_header .picture-container .picture ion-avatar {\n  height: 100%;\n  width: 100%;\n}\nion-content .sub_header .picture-container .picture ion-button {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  height: 1.875rem;\n  width: 1.875rem;\n  --border-radius: 50%;\n  --background: white;\n  --color: black;\n  --padding-end: 0;\n  --padding-start: 0;\n}\nion-content .sub_header .infos {\n  width: 100%;\n  position: relative;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: center;\n  padding: 0.5rem;\n}\nion-content .sub_header .infos .pseudo {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-black);\n  font-weight: 500;\n}\nion-content .sub_header .infos .sub-infos {\n  margin-top: 0.5rem;\n  height: 4rem;\n  width: 100%;\n  display: inline-flex;\n  justify-content: center;\n}\nion-content .sub_header .infos .sub-infos .sub-data {\n  position: relative;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: center;\n}\nion-content .sub_header .infos .sub-infos .sub-data .sub-number {\n  font-size: 0.875rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-black);\n  font-weight: 700;\n}\nion-content .sub_header .infos .sub-infos .sub-data .sub-title {\n  font-size: 0.875rem;\n  font-family: \"IBMPlexSans\";\n  color: #9d9c99;\n  font-weight: 400;\n  padding-top: 0.5rem;\n}\nion-content .sub_header .infos .sub-infos .vertical-bar {\n  margin-left: 1rem;\n  margin-right: 1rem;\n  border: 1px solid #dbdbdb;\n  background: #dbdbdb;\n  height: 60%;\n  align-self: center;\n}\nion-content .content {\n  padding: 0 1rem 0 1rem;\n}\nion-content .content .info-line {\n  position: relative;\n  align-items: center;\n  display: inline-flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  height: 2.5rem;\n  margin-bottom: 1rem;\n  padding: 0rem 0.5rem 0rem 0.5rem;\n  width: 100%;\n  border-bottom: 1px solid #dbdbdb;\n}\nion-content .content .info-line .label {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: 400;\n}\nion-content .content .info-line .value {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: 400;\n  overflow-x: auto;\n  margin-left: 1rem;\n  white-space: nowrap;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwicHJvZmlsZS5wYWdlLnNjc3MiLCIuLi8uLi8uLi90aGVtZS9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSwwQkFBQTtBQW9CQTtFQUNFLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsNkRBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFNQSxjQUFBO0VBbUJBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQ0FBQTtBQ3BERjtBRDJCRTtFQUNFLCtCQUFBO0FDekJKO0FENkJFO0VBQ0UsMENBQUE7QUMzQko7QUQ4QkU7RUFDRSxvQ0FBQTtBQzVCSjtBRCtCRTtFQUNFLDhDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQzdCSjtBRGdDRTtFQUNFLG9CQUFBO0FDOUJKO0FBckZBO0VBQ0UsV0FBQTtBQXdGRjtBQXRGRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQXdGSjtBQXRGSTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtBQXdGTjtBQXRGTTtFQUNFLFNBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBd0ZSO0FBdEZRO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUF3RlY7QUFwRk07RUM4REosZUQ3RDZCO0VDOEQ3QiwwQkFGd0Y7RUFHeEYsY0Z0RlE7RUV1RlIsZ0JBSnFFO0VEM0QvRCxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQXlGUjtBQXBGRTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtBQXNGSjtBQW5GRTtFQUNFLHNCQUFBO0FBcUZKO0FBbkZJO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQXFGTjtBQW5GTTtFQUxGO0lBTUksY0FBQTtFQXNGTjtBQUNGO0FBcEZNO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQXNGUjtBQXBGUTtFQUxGO0lBTUksY0FBQTtJQUNBLGFBQUE7RUF1RlI7QUFDRjtBQXJGUTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBdUZWO0FBcEZRO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXNGVjtBQWpGSTtFQUNFLFdBQUE7RUM3Q0osa0JBRHlIO0VBRXpILG1CRDZDMEI7RUN0Q3hCLGFBQUE7RUFHRixzQkRtQ2tCO0VDbENsQixpQkFic0Y7RUFjdEYsdUJEaUNrQztFQUM5QixlQUFBO0FBd0ZOO0FBdEZNO0VDTUosZURMMEI7RUNNMUIsMEJBRndGO0VBR3hGLDZCRFBnQztFQ1FoQyxnQkFKcUU7QUR1RnZFO0FBeEZNO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7QUEwRlI7QUF4RlE7RUM1RE4sa0JBRHlIO0VBRXpILG1CRDREOEI7RUNyRDVCLGFBQUE7RUFHRixzQkRrRHNCO0VDakR0QixpQkFic0Y7RUFjdEYsdUJEZ0RzQztBQStGeEM7QUE3RlU7RUNhUixtQkRaNEI7RUNhNUIsMEJBRnVGO0VBR3ZGLDZCRGRzQztFQ2V0QyxnQkFKb0U7QUR1RnRFO0FBL0ZVO0VDTFIsbUJETStCO0VDTC9CLDBCQUZzRjtFQUd0RixjRi9GTTtFRWdHTixnQkFKbUU7RURRekQsbUJBQUE7QUFvR1o7QUFoR1E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkQzR0Y7RUM0R0UsV0FBQTtFQUNBLGtCQUFBO0FBa0dWO0FBNUZFO0VBQ0Usc0JBQUE7QUE4Rko7QUE1Rkk7RUN4RkYsa0JBRHlIO0VBRXpILG1CRHdGdUI7RUNyRnJCLG9CQUFBO0VBT0YsbUJEOEVrQjtFQzdFbEIsaUJENkU4QztFQzVFOUMsOEJENEUrQjtFQUMzQixjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQW1HTjtBQWpHTTtFQ2xDSixlRG1DMkI7RUNsQzNCLDBCQUZzRjtFQUd0RixpQ0RpQ2lDO0VDaENqQyxnQkFKbUU7QUQwSXJFO0FBbkdNO0VDdENKLGVEdUMyQjtFQ3RDM0IsMEJBRnNGO0VBR3RGLGlDRHFDaUM7RUNwQ2pDLGdCQUptRTtFRHlDN0QsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtBQXdHUiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cblxuLy8gY29sb3JzXG4kYmxhY2syOiAjNDA0MDNmO1xuJGdyYXk2MDA6ICMxMTExMTE7IC8vdXNlZFxuJGdyYXk1MDA6ICMyOTI5Mjk7IC8vdXNlZFxuJGdyYXk0MDA6ICM1OTU5NTk7IC8vdXNlZFxuJGdyYXkzMDA6ICM4ODg4ODg7IC8vdXNlZFxuJGdyYXkyMDA6ICNCOEI4Qjg7XG4kZ3JheTI6ICM5ZDljOTk7XG4kZ3JheTM6ICNkYmRiZGI7XG4keWVsbG93MTAwOiAjZmZmY2VmO1xuJHllbGxvdzIwMDogI2ZmZjVjZTtcbiR5ZWxsb3czOiAjZmRlODk2O1xuJHllbGxvdzQ6ICNmY2VlYjY7XG4keWVsbG93NTogI2ZiZjJkNDtcbiR5ZWxsb3c2OiAjRkZERTU5O1xuJHdoaXRlODA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiRkYXJrNzU6IHJnYmEoMCwgMCwgMCwgMC4yNSk7IC8vYnV0dG9ucyBzaGFkb3dcblxuOnJvb3Qge1xuICAtLWlvbi1jb2xvci13aGl0ZTogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItYmxhY2s6ICMwMDAwMDA7XG4gIC8qKiBwcmltYXJ5IGNvbG9yKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICNmZmRlNTk7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA1NiwgMTI4LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICMxMTExMTE7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjZmZlZWFlO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICNmZmRlNTk7XG5cbiAgLyoqIHNlY29uZGFyeSBmb3IgdGV4dCoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMxMTExMTE7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDE3LCAxNywgMTc7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZGU1OTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMGYwZjBmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzI5MjkyOTtcblxuICAvKiogdGVydGlhcnkgdXNlZCBmb3IgaW5wdXQgYmFja2dyb3VuZCBhbmQgYmFja2dyb3VuZCBpY29uZSoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2RiZGJkYjsgLy9zYW1lIGFzIGdyYXkzXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMjE5LCAyMTksIDIxOTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICNjMWMxYzE7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICNkZmRmZGY7XG5cbiAgLyoqIHN1Y2Nlc3MgKiovXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMwMWRiNzI7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiAxLCAyMTksIDExNDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMwMWMxNjQ7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzFhZGY4MDtcblxuICAvKiogd2FybmluZyAqKi9cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmYzQwOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMTk2LCA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYWMwODtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZjYTIyO1xuXG4gIC8qKiBkYW5nZXIgKiovXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ZmMTE2NjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjU1LCAxNywgMTAyO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2UwMGY1YTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmZjI5NzY7XG5cbiAgLyoqIGRhcmsgKiovXG4gIC0taW9uLWNvbG9yLWRhcms6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuXG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzkyOTQ5YztcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTQ2LCAxNDgsIDE1NjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4MDgyODk7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjOWQ5ZmE2O1xuXG4gIC8qKiBsaWdodCAqKi9cbiAgLS1pb24tY29sb3ItbGlnaHQ6IHJnYmEoMjU1LCAyMjIsIDg5LCAwLjE5KTtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcblxuICAuc3Bpbm5lci1idWJibGVzIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG5cbiAgLyoqIFRhYi1iYXIgKiovXG4gIGlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCB7XG4gICAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG5cbiAgaW9uLXNlZ21lbnQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgfVxuXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IGJsYWNrO1xuICAgIC0taW5kaWNhdG9yLXRyYW5zaXRpb246IG5vbmU7XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgfVxuXG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tdGV4dC1mb250LXN0eWxlOiAnSUJNUGxleFNhbnMnO1xuICAtLXRpdGxlLWZvbnQtc3R5bGU6ICdJQk1QbGV4U2Fucyc7XG59XG5cbi8vIFZlcmlmaWVkXG4kd2lkdGgtc2Q6IDMwMHB4OyAvL2ZvbGRcbiR3aWR0aC1tZDogMzgwcHg7IC8vaXBob25lIFNFXG4kd2lkdGgtbGQ6IDQxMnB4OyAvL2lwaG9uZSBYUlxuJHdpZHRoLXhsZDogNzY4cHg7IC8vaXBhZCIsIkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL21peGlucy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzJztcblxuaW9uLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcblxuICBpb24taGVhZGVyIHtcbiAgICBtaW4taGVpZ2h0OiAzcmVtO1xuICAgIGhlaWdodDogM3JlbTtcblxuICAgIGlvbi10b29sYmFyIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDByZW0gMXJlbSAwcmVtIDFyZW07XG5cbiAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgICB3aWR0aDogMi41cmVtO1xuICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgd2lkdGg6IDEuNXJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpb24tdGl0bGUge1xuICAgICAgICBAaW5jbHVkZSBibGFja1N1YnRpdGxlKDFyZW0sICRncmF5NjAwKTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogM3JlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW9uLWhlYWRlcjo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgaGVpZ2h0OiAwO1xuICB9XG5cbiAgLnN1Yl9oZWFkZXIge1xuICAgIHBhZGRpbmc6IDFyZW0gMCAwcmVtIDA7XG5cbiAgICAucGljdHVyZS1jb250YWluZXIge1xuICAgICAgaGVpZ2h0OiA4LjVyZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3MHB4KSB7XG4gICAgICAgIGhlaWdodDogNi41cmVtO1xuICAgICAgfVxuXG4gICAgICAucGljdHVyZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDguNXJlbTtcbiAgICAgICAgaGVpZ2h0OiA4LjVyZW07XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzcwcHgpIHtcbiAgICAgICAgICBoZWlnaHQ6IDYuNXJlbTtcbiAgICAgICAgICB3aWR0aDogNi41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBoZWlnaHQ6IDEuODc1cmVtO1xuICAgICAgICAgIHdpZHRoOiAxLjg3NXJlbTtcbiAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIC0tY29sb3I6IGJsYWNrO1xuICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmluZm9zIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgQGluY2x1ZGUgZmxleChjb2x1bW4sIGNlbnRlciwgY2VudGVyKTtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcblxuICAgICAgLnBzZXVkbyB7XG4gICAgICAgIEBpbmNsdWRlIG1lZGl1bVRleHQoMXJlbSwgdmFyKC0taW9uLWNvbG9yLWJsYWNrKSk7XG4gICAgICB9XG5cbiAgICAgIC5zdWItaW5mb3Mge1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgICAgIGhlaWdodDogNHJlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAuc3ViLWRhdGEge1xuICAgICAgICAgIEBpbmNsdWRlIGZsZXgoY29sdW1uLCBjZW50ZXIsIGNlbnRlcik7XG5cbiAgICAgICAgICAuc3ViLW51bWJlciB7XG4gICAgICAgICAgICBAaW5jbHVkZSBib2xkVGV4dCgwLjg3NXJlbSwgdmFyKC0taW9uLWNvbG9yLWJsYWNrKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnN1Yi10aXRsZSB7XG4gICAgICAgICAgICBAaW5jbHVkZSByZWd1bGFyVGV4dCgwLjg3NXJlbSwgJGdyYXkyKTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnZlcnRpY2FsLWJhciB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRncmF5MztcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JheTM7XG4gICAgICAgICAgaGVpZ2h0OiA2MCU7XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDAgMXJlbSAwIDFyZW07XG5cbiAgICAuaW5mby1saW5lIHtcbiAgICAgIEBpbmNsdWRlIGZsZXgocm93LCBjZW50ZXIsIHNwYWNlLWJldHdlZW4sIG5vd3JhcCwgdHJ1ZSk7XG4gICAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICBwYWRkaW5nOiAwcmVtIDAuNXJlbSAwcmVtIDAuNXJlbTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRncmF5MztcblxuICAgICAgLmxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgcmVndWxhclRleHQoMXJlbSwgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkpO1xuICAgICAgfVxuXG4gICAgICAudmFsdWUge1xuICAgICAgICBAaW5jbHVkZSByZWd1bGFyVGV4dCgxcmVtLCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSk7XG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiQG1peGluIHRpdGxlKCRmb250LXNpemU6IDJyZW0sXG4gICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJyxcbiAgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSxcbiAgJGZvbnQtd2VpZ2h0OiBib2xkKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuXG5cbkBtaXhpbiBzaW1wbGVfYnV0dG9uKCR3aWR0aDogMjUlLCAkaGVpZ2h0OiAyLjVyZW0sICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkpIHtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xuICAtLWNvbG9yOiAkY29sb3I7XG59XG5cbkBtaXhpbiBpY29uKCR3aWR0aDogMXJlbSwgJGhlaWdodDogMXJlbSkge1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG59XG5cbkBtaXhpbiB0ZXh0KCRmb250LXNpemU6IDAuODc1cmVtLFxuICAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycsXG4gICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSksXG4gICRmb250LXdlaWdodDogbm9ybWFsKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIHRleHQtb3ZlcmZsb3coKSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5cbi8vdmVyaWZpZWRcblxuQG1peGluIGZsZXgoJGRpcmVjdGlvbjogcm93LCAkYWxpZ24taXRlbXM6IGNlbnRlciwgJGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCwgJHdyYXA6IG5vd3JhcCwgJGlubGluZTogZmFsc2UsICRwb3NpdGlvbjogcmVsYXRpdmUpIHtcbiAgcG9zaXRpb246ICRwb3NpdGlvbjtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbi1pdGVtcztcblxuICBAaWYgJGlubGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIH1cblxuICBAZWxzZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xuICBmbGV4LXdyYXA6ICR3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5LWNvbnRlbnQ7XG59XG5cbkBtaXhpbiBidXR0b24oJHdpZHRoOiAyNSUsICRoZWlnaHQ6IDIuNXJlbSwgJGZvbnQtc2l6ZTogMC44NzVyZW0sICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJywgJGZvbnQtd2VpZ2h0OiA2MDApIHtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG4gIG1pbi1oZWlnaHQ6ICRoZWlnaHQ7XG59XG5cbkBtaXhpbiB3aGl0ZVRpdGxlKCRmb250LXNpemU6IDEuNzVyZW0sICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKSwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiB3aGl0ZVN1YnRpdGxlKCRmb250LXNpemU6IDFyZW0sICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKSwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiBibGFja1RpdGxlKCRmb250LXNpemU6IDEuNzVyZW0sICRjb2xvcjogJGdyYXk1MDAsICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycsICkge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5AbWl4aW4gYmxhY2tTdWJ0aXRsZSgkZm9udC1zaXplOiAxcmVtLCAkY29sb3I6ICRncmF5NTAwLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIG1lZGl1bVRleHQoJGZvbnQtc2l6ZTogMC43NXJlbSwgJGNvbG9yOiAkZ3JheTUwMCwgJGZvbnQtd2VpZ2h0OiA1MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiByZWd1bGFyVGV4dCgkZm9udC1zaXplOiAxcmVtLCAkY29sb3I6ICRncmF5NjAwLCAkZm9udC13ZWlnaHQ6IDQwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIHNlbWlCb2xkVGV4dCgkZm9udC1zaXplOiAycmVtLCAkY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSksICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gYm9sZFRleHQoJGZvbnQtc2l6ZTogMS4xMjVyZW0sICRjb2xvcjogJGdyYXk2MDAsICRmb250LXdlaWdodDogNzAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufSJdfQ== */";

/***/ }),

/***/ 8004:
/*!**********************************************************************************!*\
  !*** ./src/app/main/profile/edit-profile/edit-profile.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"safe-area\" *ngIf=\"(currentUser$ | async) as currentUser\">\n  <ion-header class=\"safe-area\">\n    <ion-toolbar mode=\"ios\" color=\"white\">\n      <ion-title>{{'PROFILE.EDIT_PROFILE' | translate}}</ion-title>\n      <ion-buttons slot=\"start\">\n        <ion-back-button data-cy=\"editprofile-back-button\" mode=\"md\" defaultHref=\"/main/profile\" icon=\"chevron-back-outline\"></ion-back-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <div class=\"content\">\n    <div class=\"sub_header\">\n      <div class=\"picture-container\">\n        <div class=\"picture\">\n          <ion-avatar>\n            <cached-img [className]=\"'profile-avatar'\" *ngIf=\"currentUser.avatar_s3_presigned_url !== null; else noAvatar\" [src]=\"currentUser.avatar_s3_presigned_url\"></cached-img>\n            <ng-template #noAvatar>\n              <img src=\"../../../assets/mock_img/start-profile-picture.svg\" />\n            </ng-template>\n          </ion-avatar>\n          <ion-button data-cy=\"editphoto-profile-button\" expand=\"block\" (click)=\"onUpdateAvatar()\">\n            <ion-icon slot=\"icon-only\" name=\"camera-outline\"></ion-icon>\n          </ion-button>\n        </div>\n      </div>\n    </div>\n    <ion-item data-cy=\"editname-profile-field\" button class=\"input\" lines=\"none\" (click)=\"onOpenModal('SHARED.NAME', currentUser.last_name, 'last_name', currentUser.id)\" detail>\n      <ion-label class=\"info-label ion-no-margin\">{{ 'SHARED.NAME' | translate }}</ion-label>\n      <ion-text type=\"text\" class=\"info-text\">{{ currentUser.last_name }} </ion-text>\n    </ion-item>\n    <ion-item data-cy=\"editfirstname-profile-field\" lines=\"none\" button class=\"input\"\n      (click)=\"onOpenModal('SHARED.FIRSTNAME', currentUser.first_name, 'first_name', currentUser.id)\" detail>\n      <ion-label class=\"info-label ion-no-margin\">{{ 'SHARED.FIRSTNAME' | translate }}</ion-label>\n      <ion-text type=\"text\" class=\"info-text\">{{ currentUser.first_name }} </ion-text>\n    </ion-item>\n    <ion-item data-cy=\"username-profile-field\" lines=\"none\" button class=\"input\"\n      (click)=\"onOpenModal('SHARED.PROFILENAME', currentUser.profile_name, 'profile_name', currentUser.id)\" detail>\n      <ion-label class=\"info-label ion-no-margin\">{{ 'SHARED.PROFILENAME' | translate }}</ion-label>\n      <ion-text type=\"text\" class=\"info-text\">{{ currentUser.profile_name }} </ion-text>\n    </ion-item>\n    <ion-item data-cy=\"pseudo-profile-field\" lines=\"none\" button class=\"input\" (click)=\"onOpenModal('SHARED.NICKNAME', currentUser.nickname, 'nickname', currentUser.id)\" detail>\n      <ion-label class=\"info-label ion-no-margin\">{{ 'SHARED.NICKNAME' | translate }}</ion-label>\n      <ion-text type=\"text\" class=\"info-text\">@{{ currentUser.nickname }} </ion-text>\n    </ion-item>\n    <ion-item data-cy=\"birthdate-profile-field\" lines=\"none\" button class=\"input\" (click)=\"\n        onOpenModal('SHARED.BIRTHDATE_NO_FORMAT', currentUser.date_of_birth, 'date_of_birth', currentUser.id)\n      \" detail>\n      <ion-label class=\"info-label ion-no-margin\">{{ 'SHARED.BIRTHDATE_NO_FORMAT' | translate }}</ion-label>\n      <ion-text type=\"text\" class=\"info-text\">{{ currentUser.date_of_birth | date: 'dd/MM/YYYY' }}\n      </ion-text>\n    </ion-item>\n    <ion-item data-cy=\"sexe-profile-field\" lines=\"none\" button class=\"input\" (click)=\"onOpenModal('SHARED.GENDER', currentUser.gender_id, 'gender_id', currentUser.id)\" detail>\n      <ion-label class=\"info-label ion-no-margin\">{{ 'SHARED.GENDER' | translate }}</ion-label>\n      <ion-text type=\"text\" class=\"info-text\">{{ genders[currentUser.gender_id].name | translate }}\n      </ion-text>\n    </ion-item>\n  </div>\n  <div class=\"bottom\"></div>\n</ion-content>";

/***/ }),

/***/ 85340:
/*!***********************************************************!*\
  !*** ./src/app/main/profile/profile.page.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<ion-content *ngIf=\"currentUser$ | async as currentUser\" class=\"page safe-area\">\n  <ion-header class=\"safe-area\">\n    <ion-toolbar mode=\"ios\" color=\"white\">\n      <ion-title>{{currentUser.profile_name}}</ion-title>\n      <ion-button slot=\"end\" id=\"parameters-button\" (click)=\"onGoToParameters()\">\n        <ion-icon slot=\"icon-only\" name=\"settings-outline\"></ion-icon>\n      </ion-button>\n    </ion-toolbar>\n  </ion-header>\n  <div class=\"sub_header\">\n    <div class=\"picture-container\">\n      <div class=\"picture\">\n        <ion-avatar *ngIf=\"currentUser.avatar_s3_presigned_url !== null; else noAvatar\">\n          <cached-img [className]=\"'profile-avatar'\" [src]=\"currentUser.avatar_s3_presigned_url\"></cached-img>\n          <!-- <img [src]=\"currentUser.avatar_s3_presigned_url\" /> -->\n        </ion-avatar>\n        <ng-template #noAvatar>\n          <ion-avatar>\n            <img src=\"../../../assets/mock_img/start-profile-picture.svg\" />\n          </ion-avatar>\n        </ng-template>\n        <ion-button data-cy=\"edit-profile-button\" expand=\"block\" (click)=\"onEditProfile()\">\n          <ion-icon slot=\"icon-only\" src=\"assets/icon/modify-profile-icon.svg\"></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n    <div class=\"infos\">\n      <span class=\"pseudo\">@{{currentUser.nickname}}</span>\n      <div class=\"sub-infos\">\n        <div class=\"sub-data\">\n          <div class=\"sub-number\">{{allArticles.length}}</div>\n          <div class=\"sub-title\">{{'PROFILE.PIECES' | translate }}</div>\n        </div>\n        <div class=\"vertical-bar\"></div>\n        <div class=\"sub-data\" *ngIf=\"styles$ | async as styles\">\n          <div class=\"sub-number\">{{styles.length}}</div>\n          <div class=\"sub-title\">{{'PROFILE.STYLES' | translate }}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"content\">\n    <div class=\"info-line\">\n      <span class=\"label\">{{'SHARED.NAME' | translate }}</span>\n      <span class=\"value\">{{currentUser.last_name}}</span>\n    </div>\n    <div class=\"info-line\">\n      <span class=\"label\">{{'SHARED.FIRSTNAME' | translate }}</span>\n      <span class=\"value\">{{currentUser.first_name}}</span>\n    </div>\n    <div class=\"info-line\">\n      <span class=\"label\">{{'SHARED.EMAIL' | translate }}</span>\n      <span class=\"value\">{{currentUser.email}}</span>\n    </div>\n    <div class=\"info-line\">\n      <span class=\"label\">{{'SHARED.BIRTHDATE_NO_FORMAT' | translate }}</span>\n      <span class=\"value\">{{currentUser.date_of_birth | date:'dd/MM/YYYY'}}</span>\n    </div>\n    <div class=\"info-line\">\n      <span class=\"label\">{{'SHARED.GENDER' | translate }}</span>\n      <span class=\"value\">{{genders[currentUser.gender_id].name | translate}}</span>\n    </div>\n  </div>\n  <div class=\"bottom\"></div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_main_profile_profile_module_ts.js.map