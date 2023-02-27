"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_onboarding_morphology_morphology_module_ts"],{

/***/ 40194:
/*!********************************************************************!*\
  !*** ./src/app/onboarding/morphology/morphology-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MorphologyRoutingModule": () => (/* binding */ MorphologyRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _morphology_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./morphology.component */ 16219);




const routes = [
    {
        path: '',
        component: _morphology_component__WEBPACK_IMPORTED_MODULE_0__.MorphologyComponent,
    },
];
let MorphologyRoutingModule = class MorphologyRoutingModule {
};
MorphologyRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MorphologyRoutingModule);



/***/ }),

/***/ 16219:
/*!***************************************************************!*\
  !*** ./src/app/onboarding/morphology/morphology.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MorphologyComponent": () => (/* binding */ MorphologyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _morphology_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./morphology.component.html?ngResource */ 57040);
/* harmony import */ var _morphology_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./morphology.component.scss?ngResource */ 98305);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 63947);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var src_shared_crud_shopper_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/crud/shopper-crud.service */ 16925);
/* harmony import */ var src_shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/services/toaster.service */ 29238);











let MorphologyComponent = class MorphologyComponent {
    constructor(shopperCrud, router, toasterService, spinner, cdr, actionSheetController) {
        this.shopperCrud = shopperCrud;
        this.router = router;
        this.toasterService = toasterService;
        this.spinner = spinner;
        this.cdr = cdr;
        this.actionSheetController = actionSheetController;
        this.isTooltipDisplayed = false;
        this.genders = src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.ProfileConstants.genders;
        this.slidesOpts = {
            allowTouchMove: false,
            autoHeight: false,
        };
        this.slides = src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.ProfileConstants.morphologySlides;
        this.currentSlide = this.slides[0];
    }
    get height() {
        return this.bodyForm.get('height');
    }
    get chest() {
        return this.bodyForm.get('chest');
    }
    get weight() {
        return this.bodyForm.get('weight');
    }
    get birthDate() {
        return this.bodyForm.get('birth_date');
    }
    ngOnInit() {
        this.initForm();
    }
    ionViewDidEnter() {
        this.spinner.hide('guardSpinner');
    }
    segmentChanged(event) {
        console.log(event);
    }
    onPreviousButtonTouched() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.currentSlide === this.slides[0]) {
                const actionSheet = yield this.actionSheetController.create({
                    header: `Quitter l'onboarding`,
                    subHeader: "Si vous quittez l'onboarding maintenant vos informations saisies seront effacées, nous vous conseillons de le terminer",
                    //cssClass: 'alert-delete-button',
                    buttons: [
                        {
                            text: `Quitter l'onboarding`,
                            role: 'destructive',
                            id: 'exit',
                            handler: () => {
                                this.router.navigate(['/main']);
                            },
                        },
                        {
                            text: 'Annuler',
                            role: 'cancel',
                            handler: () => {
                                console.log('Cancel clicked');
                            },
                        },
                    ],
                });
                yield actionSheet.present();
            }
            else {
                this.ionSlides.slidePrev();
            }
        });
    }
    initForm() {
        this.bodyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            height: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(300),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[0-9]*$'),
            ]),
            chest: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(300),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[0-9]*$'),
            ]),
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(300),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[0-9]*$'),
            ]),
            weight_min: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(300),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[0-9]*$'),
            ]),
            weight_max: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(300),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[0-9]*$'),
            ]),
        });
    }
    onSlidesChanged() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const index = yield this.ionSlides.getActiveIndex();
            this.currentSlide = this.slides[index];
        });
    }
    onNextButtonTouched() {
        this.ionSlides.slideNext();
        this.ionContent.scrollToTop();
        if (this.currentSlide === this.slides[3]) {
        }
        if (this.currentSlide === this.slides[2]) {
            const doc = document.getElementById('content');
            //doc.shadowRoot.getElementById('background-content').style.background = 'url("/assets/onboarding-background/congrats_morpho.svg")';
            /*if (this.bodyForm.valid) {
              const profile_name = `${this.firstName.value} ${this.lastName.value}`;
              this.auth.idTokenClaims$.subscribe((userInfos) => {
                const shopper: IShopper = {
                  id: userInfos.sub,
                  first_name: this.firstName.value,
                  last_name: this.lastName.value,
                  email: userInfos.email,
                  date_of_birth: DateFormatter.convertDate(this.birthDate.value.singleDate.formatted, 'en'),
                  gender_id: Number(this.sexe.value),
                  nickname: this.nickname.value,
                  profile_name,
                  swipe_filter: { gender_id: Number(this.sexe.value) }
                };
                this.spinner.show('guardSpinner').then(() => {
                  this.shopperCrud.createShopper(shopper).subscribe({
                    next: () => {
                      this.router.navigate(['/thanks']);
                    },
                    error: (error) => {
                      this.toasterService.presentErrorToast(`MESSAGE.PROFILE.${error.status}`);
                      this.spinner.hide('guardSpinner');
                    }
                  })
                })
              })
            }*/
        }
    }
    onOpenTooltip() {
        this.isTooltipDisplayed = !this.isTooltipDisplayed;
        if (this.isTooltipDisplayed) {
            document.getElementById('sexe-tooltip').style.visibility = 'visible';
        }
        else {
            document.getElementById('sexe-tooltip').style.visibility = 'hidden';
        }
    }
};
MorphologyComponent.ctorParameters = () => [
    { type: src_shared_crud_shopper_crud_service__WEBPACK_IMPORTED_MODULE_3__.ShopperCRUDService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__.ToasterService },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ActionSheetController }
];
MorphologyComponent.propDecorators = {
    ionContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, { static: true },] }],
    ionSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSlides, { static: false },] }]
};
MorphologyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-morphology',
        template: _morphology_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_morphology_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MorphologyComponent);



/***/ }),

/***/ 12929:
/*!************************************************************!*\
  !*** ./src/app/onboarding/morphology/morphology.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MorphologyModule": () => (/* binding */ MorphologyModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/shared/shared.module */ 8395);
/* harmony import */ var _morphology_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./morphology-routing.module */ 40194);
/* harmony import */ var _morphology_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./morphology.component */ 16219);





let MorphologyModule = class MorphologyModule {
};
MorphologyModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [src_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _morphology_routing_module__WEBPACK_IMPORTED_MODULE_1__.MorphologyRoutingModule],
        declarations: [_morphology_component__WEBPACK_IMPORTED_MODULE_2__.MorphologyComponent],
    })
], MorphologyModule);



/***/ }),

/***/ 98305:
/*!****************************************************************************!*\
  !*** ./src/app/onboarding/morphology/morphology.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "/** Ionic CSS Variables **/\n:root {\n  --ion-color-white: #ffffff;\n  --ion-color-black: #000000;\n  /** primary color**/\n  --ion-color-primary: #ffde59;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #111111;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #ffeeae;\n  --ion-color-primary-tint: #ffde59;\n  /** secondary for text**/\n  --ion-color-secondary: #111111;\n  --ion-color-secondary-rgb: 17, 17, 17;\n  --ion-color-secondary-contrast: #ffde59;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0f0f0f;\n  --ion-color-secondary-tint: #292929;\n  /** tertiary used for input background and background icone**/\n  --ion-color-tertiary: #dbdbdb;\n  --ion-color-tertiary-rgb: 219, 219, 219;\n  --ion-color-tertiary-contrast: #000000;\n  --ion-color-tertiary-contrast-rgb: 0, 0, 0;\n  --ion-color-tertiary-shade: #c1c1c1;\n  --ion-color-tertiary-tint: #dfdfdf;\n  /** success **/\n  --ion-color-success: #01db72;\n  --ion-color-success-rgb: 1, 219, 114;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #01c164;\n  --ion-color-success-tint: #1adf80;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #ff1166;\n  --ion-color-danger-rgb: 255, 17, 102;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e00f5a;\n  --ion-color-danger-tint: #ff2976;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: rgba(255, 222, 89, 0.19);\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** Tab-bar **/\n  --ion-toolbar-background: white;\n  --text-font-style: \"IBMPlexSans\";\n  --title-font-style: \"IBMPlexSans\";\n}\n:root .spinner-bubbles {\n  color: var(--ion-color-primary);\n}\n:root ion-tab-button.tab-selected {\n  --color-selected: var(--ion-color-primary);\n}\n:root ion-segment {\n  --background: var(--ion-color-white);\n}\n:root ion-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --color-checked: black;\n  --indicator-transition: none;\n}\n:root ion-button {\n  text-transform: none;\n}\nion-content {\n  --background: url(\"/assets/onboarding-background/account-creation-background.svg\") no-repeat 100% 100%;\n  background-color: #111111;\n}\nion-content ion-slides {\n  height: calc(100vh - 2rem);\n}\nion-content ion-slides .slide {\n  height: 100%;\n  width: 100%;\n  /*.second-slide {\n    @include flex(column, center, flex-end);\n    height: 100%;\n    width: 100%;\n\n    form {\n      @include flex(column, flex-start, center);\n      height: 80%;\n      padding-bottom: 2rem;\n\n      @media screen and (max-width: 370px) {\n        justify-content: flex-end;\n      }\n\n      ion-item {\n        --show-full-highlight: 0 !important;\n        margin-bottom: 0.5rem;\n        --min-height: 35px;\n        --padding-start: 0;\n        height: 2.5rem;\n        width: 100%;\n        --background: transparent;\n\n        ion-icon {\n          width: 1.5rem;\n          height: 1.5rem;\n\n          @media screen and (max-width: 370px) {\n            width: 1rem;\n            height: 1rem;\n          }\n        }\n\n\n\n        .nickname-input {\n          --padding-start: 0px;\n        }\n\n      }\n\n      .div-date-input {\n        position: relative;\n        display: inline-flex;\n        margin-bottom: 0.5rem;\n        height: 2.5rem;\n        align-items: center;\n        width: 100%;\n        border-bottom: 1px solid #DBDBDB;\n\n        ion-icon {\n          width: 1.5rem;\n          height: 1.5rem;\n\n          @media screen and (max-width: 370px) {\n            width: 1rem;\n            height: 1rem;\n          }\n        }\n\n        input::placeholder {\n          color: $gray500;\n          opacity: 0.5;\n        }\n\n        input {\n          outline: none;\n          font-size: 1rem;\n          font-family: 'IBMPlexSans';\n          padding-left: 18px;\n          border: none;\n          width: 100%;\n          background: transparent;\n\n          @media screen and (max-width: 370px) {\n            font-size: 0.75rem;\n          }\n        }\n      }\n\n      ion-radio-group {\n        @include flex(row, center, space-between, wrap, true);\n        border-bottom: 1px solid $gray3;\n        width: 100%;\n\n        ion-item {\n          --inner-border-width: 0;\n          width: fit-content;\n          height: 2.5rem;\n          margin-bottom: 0;\n\n          @media screen and (max-width: 384px) {\n            --inner-padding-end: 0.5rem;\n            --padding-start: 0rem;\n          }\n\n          ion-label {\n            margin-right: 0px;\n            @include text(1rem);\n\n            @media screen and (max-width: 370px) {\n              font-size: 0.75rem;\n            }\n          }\n\n          ion-icon {\n            margin-right: 0px;\n            margin-left: 4px;\n            width: 1rem;\n            height: 1rem;\n          }\n        }\n\n        ion-radio {\n          @include flex(row, center, center, nowrap, false);\n          margin-top: 0;\n          margin-bottom: 0;\n          margin-right: 0.25rem;\n          margin-left: 0;\n          height: 1rem;\n          width: 1rem;\n        }\n\n        .sexe-radio-items {\n          display: inline-flex;\n\n          @media screen and (max-width: 350px) {\n            display: flex;\n            flex-direction: column;\n          }\n        }\n\n      }\n\n      #sexe-tooltip {\n        @include text(0.875rem);\n        visibility: hidden;\n        text-align: justify;\n        border-radius: 1rem;\n        padding: 0.5rem;\n        position: relative;\n        background: $gray3;\n        box-shadow: 0px 4px 4px #00000040;\n\n        @media screen and (max-width: 370px) {\n          @include text(0.75rem);\n        }\n      }\n\n      .text-tiny {\n        @include text(0.75rem, 'IBMPlexSans', red);\n      }\n\n    }\n\n    .buttons {\n      width: 100%;\n      display: inline-flex;\n      justify-content: flex-end;\n\n      ion-button {\n        @include button(40vw, 2.5rem, 1.125rem, var(--ion-color-secondary), 'IBMPlexSans');\n        align-self: flex-end;\n        max-width: 10rem;\n        font-weight: 600;\n        --box-shadow: none;\n        --border-radius: 1.25rem;\n\n        @media screen and (max-width: 370px) {\n          min-height: 2rem;\n          font-size: 0.75rem;\n          height: 2rem;\n        }\n      }\n    }\n  }*/\n}\nion-content ion-slides .slide .body-slide {\n  position: relative;\n  align-items: flex-start;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-end;\n  height: 100%;\n  /* .welcome_text {\n    @include text(1rem, 'IBMPlexSans', $black2);\n    margin-bottom: 2rem;\n    width: 90%;\n\n    @media screen and (max-width: 370px) {\n      font-size: 0.75rem;\n    }\n  }\n\n  .trust-text {\n    width: 85%;\n    align-self: flex-end;\n  }\n\n  img {\n    align-self: center;\n    margin-bottom: 0.5rem;\n    width: 50vh;\n\n    @media screen and (max-width: 370px) {\n      width: 60%;\n    }\n\n    @media screen and (max-width: 380px) {\n      width: 70%;\n    }\n  }\n\n  ion-button {\n    @include button(40vw, 2.5rem, 1.125rem, var(--ion-color-secondary), 'IBMPlexSans');\n    align-self: flex-end;\n    max-width: 10rem;\n    font-weight: 600;\n    --box-shadow: none;\n    --border-radius: 1.25rem;\n\n    @media screen and (max-width: 370px) {\n      min-height: 2rem;\n      font-size: 0.75rem;\n      height: 2rem;\n    }\n  }*/\n}\nion-content ion-slides .slide .body-slide .title {\n  font-size: 2rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: bold;\n  margin-bottom: 1rem;\n}\n@media screen and (max-width: 370px) {\n  ion-content ion-slides .slide .body-slide .title {\n    font-size: 1.625rem;\n  }\n}\nion-content ion-slides .slide .body-slide .description {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: #40403f;\n  font-weight: normal;\n}\nion-content ion-slides .slide .body-slide ion-item {\n  --show-full-highlight: 0 !important;\n  margin-bottom: 0.5rem;\n  --min-height: 35px;\n  --padding-start: 0;\n  height: 4rem;\n  width: 100%;\n  --background: transparent;\n}\nion-content ion-slides .slide .body-slide ion-item ion-label {\n  font-size: 0.875rem;\n  font-family: \"IBMPlexSans\";\n  color: #40403f;\n  font-weight: normal;\n  margin-top: 0;\n}\nion-content ion-slides .slide .body-slide ion-item ion-input {\n  border: 0.5px solid #9d9c99;\n  border-radius: 0.5rem;\n  --placeholder-color: $gray2;\n  --placeholder-opacity: 0.5;\n  color: var(--ion-color-secondary);\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  --padding-start: 2rem;\n}\n@media screen and (max-width: 370px) {\n  ion-content ion-slides .slide .body-slide ion-item ion-input {\n    font-size: 0.75rem;\n  }\n}\nion-content ion-slides .slide .body-slide ion-item ion-input ion-icon {\n  padding-left: 0.5rem;\n  height: 1.5rem;\n  width: 1.5rem;\n}\n@media screen and (max-width: 370px) {\n  ion-content ion-slides .slide .body-slide ion-item ion-input ion-icon {\n    font-size: 0.75rem;\n  }\n}\nion-content ion-slides .slide .body-slide ion-item-group {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n}\nion-content ion-slides .slide .body-slide ion-item-group ion-item {\n  width: 32%;\n  height: 40px;\n}\nion-content ion-slides .slide .body-slide ion-item-group ion-item ion-input {\n  height: 40px;\n  --padding-start: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwibW9ycGhvbG9neS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL3RoZW1lL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLDBCQUFBO0FBb0JBO0VBQ0UsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHFDQUFBO0VBQ0EsdUNBQUE7RUFDQSxpREFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSw2REFBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsWUFBQTtFQUNBLDJDQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQU1BLGNBQUE7RUFtQkEsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0FDcERGO0FEMkJFO0VBQ0UsK0JBQUE7QUN6Qko7QUQ2QkU7RUFDRSwwQ0FBQTtBQzNCSjtBRDhCRTtFQUNFLG9DQUFBO0FDNUJKO0FEK0JFO0VBQ0UsOENBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FDN0JKO0FEZ0NFO0VBQ0Usb0JBQUE7QUM5Qko7QUFyRkE7RUFDRSxzR0FBQTtFQUNBLHlCQUFBO0FBd0ZGO0FBdEZFO0VBQ0UsMEJBQUE7QUF3Rko7QUF0Rkk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQXdIQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBO0FBZ0pOO0FBdFFNO0VDNkJKLGtCQUR5SDtFQUV6SCx1QkQ3QjRCO0VDb0MxQixhQUFBO0VBR0Ysc0JEdkNvQjtFQ3dDcEIsaUJBYnNGO0VBY3RGLHlCRHpDd0M7RUFDbEMsWUFBQTtFQXVFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUE7QUFpUFI7QUF0VFE7RUNkTixlRGV1QjtFQ2R2QiwwQkRjNkI7RUNiN0IsaUNEYTRDO0VDWjVDLGlCRFl3RTtFQUNoRSxtQkFBQTtBQTJUVjtBQXpUVTtFQUpGO0lBS0ksbUJBQUE7RUE0VFY7QUFDRjtBQXpUUTtFQ0FOLGVEQ3NCO0VDQXRCLDBCQUFBO0VBQ0EsY0Z2Qk87RUV3QlAsbUJERm9EO0FBOFR0RDtBQTNUUTtFQUNFLG1DQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQTZUVjtBQTNUVTtFQ2JSLG1CRGN3QjtFQ2J4QiwwQkRha0M7RUNabEMsY0Z2Qk87RUV3QlAsbUJBSmM7RURnQkosYUFBQTtBQWdVWjtBQTdUVTtFQUNFLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQStUWjtBQTdUWTtFQVZGO0lBV0ksa0JBQUE7RUFnVVo7QUFDRjtBQTlUWTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFnVWQ7QUE5VGM7RUFMRjtJQU1JLGtCQUFBO0VBaVVkO0FBQ0Y7QUE1VFE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBOFRWO0FBNVRVO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUE4VFo7QUE1VFk7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUE4VGQiLCJmaWxlIjoibW9ycGhvbG9neS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cblxuLy8gY29sb3JzXG4kYmxhY2syOiAjNDA0MDNmO1xuJGdyYXk2MDA6ICMxMTExMTE7IC8vdXNlZFxuJGdyYXk1MDA6ICMyOTI5Mjk7IC8vdXNlZFxuJGdyYXk0MDA6ICM1OTU5NTk7IC8vdXNlZFxuJGdyYXkzMDA6ICM4ODg4ODg7IC8vdXNlZFxuJGdyYXkyMDA6ICNCOEI4Qjg7XG4kZ3JheTI6ICM5ZDljOTk7XG4kZ3JheTM6ICNkYmRiZGI7XG4keWVsbG93MTAwOiAjZmZmY2VmO1xuJHllbGxvdzIwMDogI2ZmZjVjZTtcbiR5ZWxsb3czOiAjZmRlODk2O1xuJHllbGxvdzQ6ICNmY2VlYjY7XG4keWVsbG93NTogI2ZiZjJkNDtcbiR5ZWxsb3c2OiAjRkZERTU5O1xuJHdoaXRlODA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiRkYXJrNzU6IHJnYmEoMCwgMCwgMCwgMC4yNSk7IC8vYnV0dG9ucyBzaGFkb3dcblxuOnJvb3Qge1xuICAtLWlvbi1jb2xvci13aGl0ZTogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItYmxhY2s6ICMwMDAwMDA7XG4gIC8qKiBwcmltYXJ5IGNvbG9yKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICNmZmRlNTk7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA1NiwgMTI4LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICMxMTExMTE7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjZmZlZWFlO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICNmZmRlNTk7XG5cbiAgLyoqIHNlY29uZGFyeSBmb3IgdGV4dCoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMxMTExMTE7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDE3LCAxNywgMTc7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZGU1OTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMGYwZjBmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzI5MjkyOTtcblxuICAvKiogdGVydGlhcnkgdXNlZCBmb3IgaW5wdXQgYmFja2dyb3VuZCBhbmQgYmFja2dyb3VuZCBpY29uZSoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2RiZGJkYjsgLy9zYW1lIGFzIGdyYXkzXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMjE5LCAyMTksIDIxOTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICNjMWMxYzE7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICNkZmRmZGY7XG5cbiAgLyoqIHN1Y2Nlc3MgKiovXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMwMWRiNzI7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiAxLCAyMTksIDExNDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMwMWMxNjQ7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzFhZGY4MDtcblxuICAvKiogd2FybmluZyAqKi9cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmYzQwOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMTk2LCA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYWMwODtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZjYTIyO1xuXG4gIC8qKiBkYW5nZXIgKiovXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ZmMTE2NjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjU1LCAxNywgMTAyO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2UwMGY1YTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmZjI5NzY7XG5cbiAgLyoqIGRhcmsgKiovXG4gIC0taW9uLWNvbG9yLWRhcms6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuXG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzkyOTQ5YztcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTQ2LCAxNDgsIDE1NjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4MDgyODk7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjOWQ5ZmE2O1xuXG4gIC8qKiBsaWdodCAqKi9cbiAgLS1pb24tY29sb3ItbGlnaHQ6IHJnYmEoMjU1LCAyMjIsIDg5LCAwLjE5KTtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcblxuICAuc3Bpbm5lci1idWJibGVzIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG5cbiAgLyoqIFRhYi1iYXIgKiovXG4gIGlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCB7XG4gICAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG5cbiAgaW9uLXNlZ21lbnQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgfVxuXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IGJsYWNrO1xuICAgIC0taW5kaWNhdG9yLXRyYW5zaXRpb246IG5vbmU7XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgfVxuXG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tdGV4dC1mb250LXN0eWxlOiAnSUJNUGxleFNhbnMnO1xuICAtLXRpdGxlLWZvbnQtc3R5bGU6ICdJQk1QbGV4U2Fucyc7XG59XG5cbi8vIFZlcmlmaWVkXG4kd2lkdGgtc2Q6IDMwMHB4OyAvL2ZvbGRcbiR3aWR0aC1tZDogMzgwcHg7IC8vaXBob25lIFNFXG4kd2lkdGgtbGQ6IDQxMnB4OyAvL2lwaG9uZSBYUlxuJHdpZHRoLXhsZDogNzY4cHg7IC8vaXBhZCIsIkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL21peGlucy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzJztcblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9vbmJvYXJkaW5nLWJhY2tncm91bmQvYWNjb3VudC1jcmVhdGlvbi1iYWNrZ3JvdW5kLnN2ZycpIG5vLXJlcGVhdCAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XG5cbiAgaW9uLXNsaWRlcyB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMnJlbSk7XG5cbiAgICAuc2xpZGUge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIC5ib2R5LXNsaWRlIHtcbiAgICAgICAgQGluY2x1ZGUgZmxleChjb2x1bW4sIGZsZXgtc3RhcnQsIGZsZXgtZW5kKTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgQGluY2x1ZGUgdGl0bGUoMnJlbSwgJ0lCTVBsZXhTYW5zJywgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSksIGJvbGQpO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzBweCkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjYyNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIEBpbmNsdWRlIHRleHQoMXJlbSwgJ0lCTVBsZXhTYW5zJywgJGJsYWNrMiwgbm9ybWFsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAtLXNob3ctZnVsbC1oaWdobGlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICAgICAgLS1taW4taGVpZ2h0OiAzNXB4O1xuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgICBoZWlnaHQ6IDRyZW07XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBAaW5jbHVkZSB0ZXh0KDAuODc1cmVtLCAnSUJNUGxleFNhbnMnLCAkYmxhY2syKTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgICAgIGJvcmRlcjogMC41cHggc29saWQgJGdyYXkyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogJGdyYXkyO1xuICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJztcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMnJlbTtcblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzcwcHgpIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEuNXJlbTtcblxuICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzBweCkge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1pdGVtLWdyb3VwIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgd2lkdGg6IDMyJTtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcblxuICAgICAgICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyogLndlbGNvbWVfdGV4dCB7XG4gICAgICAgICAgQGluY2x1ZGUgdGV4dCgxcmVtLCAnSUJNUGxleFNhbnMnLCAkYmxhY2syKTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG5cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzBweCkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50cnVzdC10ZXh0IHtcbiAgICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICAgIHdpZHRoOiA1MHZoO1xuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzcwcHgpIHtcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpIHtcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgQGluY2x1ZGUgYnV0dG9uKDQwdncsIDIuNXJlbSwgMS4xMjVyZW0sIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpLCAnSUJNUGxleFNhbnMnKTtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwcmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3MHB4KSB7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAycmVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfSovXG4gICAgICB9XG5cbiAgICAgIC8qLnNlY29uZC1zbGlkZSB7XG4gICAgICAgIEBpbmNsdWRlIGZsZXgoY29sdW1uLCBjZW50ZXIsIGZsZXgtZW5kKTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICBmb3JtIHtcbiAgICAgICAgICBAaW5jbHVkZSBmbGV4KGNvbHVtbiwgZmxleC1zdGFydCwgY2VudGVyKTtcbiAgICAgICAgICBoZWlnaHQ6IDgwJTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3MHB4KSB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIC0tc2hvdy1mdWxsLWhpZ2hsaWdodDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICAgICAgLS1taW4taGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEuNXJlbTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG5cbiAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzcwcHgpIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMXJlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgIC5uaWNrbmFtZS1pbnB1dCB7XG4gICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmRpdi1kYXRlLWlucHV0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RCREJEQjtcblxuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICB3aWR0aDogMS41cmVtO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcblxuICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzBweCkge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgICBjb2xvcjogJGdyYXk1MDA7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnO1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE4cHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3MHB4KSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW9uLXJhZGlvLWdyb3VwIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGZsZXgocm93LCBjZW50ZXIsIHNwYWNlLWJldHdlZW4sIHdyYXAsIHRydWUpO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRncmF5MztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xuICAgICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4NHB4KSB7XG4gICAgICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMC41cmVtO1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMHJlbTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdGV4dCgxcmVtKTtcblxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3MHB4KSB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlvbi1yYWRpbyB7XG4gICAgICAgICAgICAgIEBpbmNsdWRlIGZsZXgocm93LCBjZW50ZXIsIGNlbnRlciwgbm93cmFwLCBmYWxzZSk7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zZXhlLXJhZGlvLWl0ZW1zIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG5cbiAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cblxuICAgICAgICAgICNzZXhlLXRvb2x0aXAge1xuICAgICAgICAgICAgQGluY2x1ZGUgdGV4dCgwLjg3NXJlbSk7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRncmF5MztcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4ICMwMDAwMDA0MDtcblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzcwcHgpIHtcbiAgICAgICAgICAgICAgQGluY2x1ZGUgdGV4dCgwLjc1cmVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGV4dC10aW55IHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHRleHQoMC43NXJlbSwgJ0lCTVBsZXhTYW5zJywgcmVkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC5idXR0b25zIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICBAaW5jbHVkZSBidXR0b24oNDB2dywgMi41cmVtLCAxLjEyNXJlbSwgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSksICdJQk1QbGV4U2FucycpO1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwcmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzcwcHgpIHtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMnJlbTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9Ki9cbiAgICB9XG4gIH1cbn0iLCJAbWl4aW4gdGl0bGUoJGZvbnQtc2l6ZTogMnJlbSxcbiAgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnLFxuICAkY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpLFxuICAkZm9udC13ZWlnaHQ6IGJvbGQpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5cblxuQG1peGluIHNpbXBsZV9idXR0b24oJHdpZHRoOiAyNSUsICRoZWlnaHQ6IDIuNXJlbSwgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSkge1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG4gIC0tY29sb3I6ICRjb2xvcjtcbn1cblxuQG1peGluIGljb24oJHdpZHRoOiAxcmVtLCAkaGVpZ2h0OiAxcmVtKSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbn1cblxuQG1peGluIHRleHQoJGZvbnQtc2l6ZTogMC44NzVyZW0sXG4gICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJyxcbiAgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSxcbiAgJGZvbnQtd2VpZ2h0OiBub3JtYWwpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gdGV4dC1vdmVyZmxvdygpIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cblxuLy92ZXJpZmllZFxuXG5AbWl4aW4gZmxleCgkZGlyZWN0aW9uOiByb3csICRhbGlnbi1pdGVtczogY2VudGVyLCAkanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0LCAkd3JhcDogbm93cmFwLCAkaW5saW5lOiBmYWxzZSwgJHBvc2l0aW9uOiByZWxhdGl2ZSkge1xuICBwb3NpdGlvbjogJHBvc2l0aW9uO1xuICBhbGlnbi1pdGVtczogJGFsaWduLWl0ZW1zO1xuXG4gIEBpZiAkaW5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgfVxuXG4gIEBlbHNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG4gIGZsZXgtd3JhcDogJHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnktY29udGVudDtcbn1cblxuQG1peGluIGJ1dHRvbigkd2lkdGg6IDI1JSwgJGhlaWdodDogMi41cmVtLCAkZm9udC1zaXplOiAwLjg3NXJlbSwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnLCAkZm9udC13ZWlnaHQ6IDYwMCkge1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbiAgbWluLWhlaWdodDogJGhlaWdodDtcbn1cblxuQG1peGluIHdoaXRlVGl0bGUoJGZvbnQtc2l6ZTogMS43NXJlbSwgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIHdoaXRlU3VidGl0bGUoJGZvbnQtc2l6ZTogMXJlbSwgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIGJsYWNrVGl0bGUoJGZvbnQtc2l6ZTogMS43NXJlbSwgJGNvbG9yOiAkZ3JheTUwMCwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJywgKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbkBtaXhpbiBibGFja1N1YnRpdGxlKCRmb250LXNpemU6IDFyZW0sICRjb2xvcjogJGdyYXk1MDAsICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gbWVkaXVtVGV4dCgkZm9udC1zaXplOiAwLjc1cmVtLCAkY29sb3I6ICRncmF5NTAwLCAkZm9udC13ZWlnaHQ6IDUwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIHJlZ3VsYXJUZXh0KCRmb250LXNpemU6IDFyZW0sICRjb2xvcjogJGdyYXk2MDAsICRmb250LXdlaWdodDogNDAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gc2VtaUJvbGRUZXh0KCRmb250LXNpemU6IDJyZW0sICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKSwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiBib2xkVGV4dCgkZm9udC1zaXplOiAxLjEyNXJlbSwgJGNvbG9yOiAkZ3JheTYwMCwgJGZvbnQtd2VpZ2h0OiA3MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59Il19 */";

/***/ }),

/***/ 57040:
/*!****************************************************************************!*\
  !*** ./src/app/onboarding/morphology/morphology.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content id=\"content\" class=\"ion-padding\">\n  <ion-slides pager=\"true\" [options]=\"slidesOpts\" (ionSlideWillChange)=\"onSlidesChanged()\">\n    <ng-container class=\"swiper-wrapper\" *ngFor=\"let slide of slides; let index = index\">\n      <ion-slide>\n        <div class=\"slide ion-text-start\">\n          <div class=\"body-slide\" *ngIf=\"slide === 'Body'\">\n            <form class=\"form\" [formGroup]=\"bodyForm\" novalidate>\n              <p class=\"title\">\n                {{ 'ACCOUNT_CREATION.MORPHOLOGY.BODY_TITLE' | translate | uppercase }}\n              </p>\n              <p class=\"description\">\n                {{ 'ACCOUNT_CREATION.MORPHOLOGY.BODY_DESCRIPTION' | translate }}\n              </p>\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\"\n                  >{{ 'ACCOUNT_CREATION.MORPHOLOGY.SIZE' | translate\n                  }}<span style=\"color: red\">*</span></ion-label\n                >\n                <ion-input\n                  type=\"number\"\n                  placeholder=\"{{ 'ACCOUNT_CREATION.MORPHOLOGY.SIZE_INPUT' | translate }}\"\n                  formControlName=\"height\"\n                >\n                  <ion-icon src=\"assets/icon/onboarding/height.svg\" slot=\"start\"></ion-icon>\n                </ion-input>\n              </ion-item>\n\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\"\n                  >{{ 'ACCOUNT_CREATION.MORPHOLOGY.WEIGHT' | translate\n                  }}<span style=\"color: red\">*</span></ion-label\n                >\n                <ion-input\n                  type=\"number\"\n                  placeholder=\"{{ 'ACCOUNT_CREATION.MORPHOLOGY.WEIGHT_INPUT' | translate }}\"\n                  formControlName=\"weight\"\n                >\n                  <ion-icon src=\"assets/icon/onboarding/weight.svg\" slot=\"start\"></ion-icon>\n                </ion-input>\n              </ion-item>\n              <ion-item-group>\n                <ion-item lines=\"none\">\n                  <ion-input\n                    type=\"number\"\n                    placeholder=\"{{ 'ACCOUNT_CREATION.MORPHOLOGY.WEIGHT_MIN' | translate }}\"\n                    formControlName=\"weight_min\"\n                  >\n                  </ion-input>\n                </ion-item>\n                <ion-item lines=\"none\">\n                  <ion-input\n                    type=\"number\"\n                    placeholder=\"{{ 'ACCOUNT_CREATION.MORPHOLOGY.WEIGHT_MAX' | translate }}\"\n                    formControlName=\"weight_max\"\n                  >\n                  </ion-input>\n                </ion-item>\n              </ion-item-group>\n\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\"\n                  >{{ 'ACCOUNT_CREATION.MORPHOLOGY.CHEST' | translate\n                  }}<span style=\"color: red\">*</span></ion-label\n                >\n                <ion-input\n                  type=\"number\"\n                  placeholder=\"{{ 'ACCOUNT_CREATION.MORPHOLOGY.CHEST_INPUT' | translate }}\"\n                  formControlName=\"chest\"\n                >\n                  <ion-icon src=\"assets/icon/onboarding/chest.svg\" slot=\"start\"></ion-icon>\n                </ion-input>\n              </ion-item>\n              <!--<ion-item class=\"input\">\n                <ion-input type=\"text\" placeholder=\"{{'SHARED.FIRSTNAME' | translate}}*\" formControlName=\"first_name\">\n                  <ion-icon name=\"person-outline\" slot=\"start\"></ion-icon>\n                </ion-input>\n              </ion-item>\n              <ion-item class=\"input\">\n                <ion-input class=\"nickname-input\" type=\"text\" placeholder=\"{{'SHARED.PROFILENAME' | translate}}*\"\n                  formControlName=\"nickname\">\n                  <ion-icon src=\"assets/icon/icon_username.svg\" slot=\"start\" size=\"small\"></ion-icon>\n                  <ion-icon class=\"at-icon\" name=\"at-outline\" slot=\"start\" size=\"small\"></ion-icon>\n                </ion-input>\n              </ion-item>\n              <span class=\"form-error\"\n                *ngIf=\"bodyForm.get('nickname').hasError('pattern')\">{{'PROFILE.INVALID_CHARACTER' |\n                translate}}</span>\n              <div class=\"div-date-input\">\n                <ion-icon name=\"calendar-outline\" color=\"dark\" slot=\"start\"></ion-icon>\n                <input class=\"input-date\" readonly placeholder=\"{{'SHARED.BIRTHDATE' | translate}}*\"\n                  formControlName=\"birth_date\" angular-mydatepicker [options]=\"myDatePickerOptions\"\n                  #dp=\"angular-mydatepicker\" autocomplete=\"off\" [locale]=\"'fr'\" (click)=\"toggleCalendar()\" />\n              </div>\n              <ion-radio-group class=\"radio-group\" formControlName=\"sexe\">\n                <ion-item>\n                  <ion-label>{{'SHARED.SEXE' | translate}}* </ion-label>\n                  <ion-icon name=\"information-circle-outline\" slot=\"end\" (click)=\"onOpenTooltip()\"></ion-icon>\n                </ion-item>\n                <div class=\"sexe-radio-items\">\n                  <ion-item lines=\"none\" *ngFor=\"let gender of genders\">\n                    <ion-label>{{gender.name | translate}}</ion-label>\n                    <ion-radio mode=\"md\" slot=\"start\" value=\"{{gender.id}}\"></ion-radio>\n                  </ion-item>\n                </div>\n              </ion-radio-group>\n              <div id=\"sexe-tooltip\">{{ 'ACCOUNT_CREATION.SEXE_TOOLTIP' | translate}}</div>-->\n            </form>\n            <div class=\"buttons\">\n              <ion-button slot=\"start\" (click)=\"onPreviousButtonTouched()\">\n                <ion-icon name=\"arrow-back-outline\"></ion-icon>\n              </ion-button>\n              <ion-button (click)=\"onNextButtonTouched()\">{{\n                'SHARED.CONTINU' | translate\n              }}</ion-button>\n              <!--[disabled]=\"!bodyForm.valid\"-->\n            </div>\n          </div>\n          <div class=\"body-slide\" *ngIf=\"slide === 'Morpho'\">\n            <p class=\"title\">\n              {{ 'ACCOUNT_CREATION.MORPHOLOGY.MORPHO_TITLE' | translate | uppercase }}\n            </p>\n            <p class=\"description\">\n              {{ 'ACCOUNT_CREATION.MORPHOLOGY.MORPHO_DESCRIPTION' | translate }}\n            </p>\n            <div class=\"buttons\">\n              <ion-button slot=\"start\" (click)=\"onPreviousButtonTouched()\">\n                <ion-icon name=\"arrow-back-outline\"></ion-icon>\n              </ion-button>\n              <ion-button (click)=\"onNextButtonTouched()\">{{\n                'SHARED.CONTINU' | translate\n              }}</ion-button>\n              <!--[disabled]=\"!bodyForm.valid\"-->\n            </div>\n          </div>\n          <div class=\"body-slide\" *ngIf=\"slide === 'Sizes'\">\n            <p class=\"title\">\n              {{ 'ACCOUNT_CREATION.MORPHOLOGY.SIZE_TITLE' | translate | uppercase }}\n            </p>\n            <p class=\"description\">\n              {{ 'ACCOUNT_CREATION.MORPHOLOGY.SIZE_DESCRIPTION' | translate }}\n            </p>\n            <ion-segment (ionChange)=\"segmentChanged($event)\">\n              <ion-segment-button value=\"top\">\n                <ion-icon name=\"home\"></ion-icon>\n              </ion-segment-button>\n              <ion-segment-button value=\"pants\">\n                <ion-icon name=\"home\"></ion-icon>\n              </ion-segment-button>\n              <ion-segment-button value=\"shoes\">\n                <ion-icon name=\"home\"></ion-icon>\n              </ion-segment-button>\n            </ion-segment>\n            <div class=\"buttons\">\n              <ion-button slot=\"start\" (click)=\"onPreviousButtonTouched()\">\n                <ion-icon name=\"arrow-back-outline\"></ion-icon>\n              </ion-button>\n              <ion-button (click)=\"onNextButtonTouched()\">{{\n                'SHARED.CONTINU' | translate\n              }}</ion-button>\n              <!--[disabled]=\"!bodyForm.valid\"-->\n            </div>\n          </div>\n          <div class=\"beyond-slide\" *ngIf=\"slide === 'Congrats'\">\n            <img src=\"assets/icon/onboarding/congrats_morpho.svg\" />\n            <p class=\"title\">{{ 'ACCOUNT_CREATION.BEYOND' | translate }}</p>\n            <p class=\"text\">{{ 'ACCOUNT_CREATION.BEYOND_DESCRIPTION' | translate }}</p>\n            <div class=\"button-container\">\n              <ion-button\n                size=\"medium\"\n                shape=\"round\"\n                color=\"primary\"\n                expand=\"block\"\n                [routerLink]=\"['/onboarding/morphology']\"\n              >\n                <span style=\"color: black\">{{ 'SHARED.CONTINU' | translate }}</span>\n              </ion-button>\n              <ion-button\n                class=\"later-button\"\n                size=\"medium\"\n                shape=\"round\"\n                expand=\"block\"\n                [routerLink]=\"['/main']\"\n              >\n                <span style=\"color: var(--ion-color-primary)\">{{\n                  'SHARED.LATER' | translate\n                }}</span>\n              </ion-button>\n            </div>\n          </div>\n        </div>\n      </ion-slide>\n    </ng-container>\n  </ion-slides>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_onboarding_morphology_morphology_module_ts.js.map