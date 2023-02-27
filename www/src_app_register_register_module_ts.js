"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_register_register_module_ts"],{

/***/ 81880:
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 98135);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 18723:
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterModule": () => (/* binding */ RegisterModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 81880);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 98135);
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/shared.module */ 8395);





let RegisterModule = class RegisterModule {
};
RegisterModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            ...src_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule.MODULE_LIST,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterModule);



/***/ }),

/***/ 98135:
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page.html?ngResource */ 84754);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 36219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ 63947);
/* harmony import */ var src_shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/services/login.service */ 33130);
/* harmony import */ var src_shared_utils_subscriber_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/utils/subscriber-component */ 16391);
/* harmony import */ var src_shared_validators_password_requirement_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/validators/password-requirement.directive */ 74334);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/compat/app */ 51181);
/* harmony import */ var src_shared_crud_shopper_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/crud/shopper-crud.service */ 16925);
/* harmony import */ var src_shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/shared/services/toaster.service */ 29238);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var src_shared_validators_regex_validator_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/shared/validators/regex-validator.directive */ 4463);
/* harmony import */ var src_shared_utils_function_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/shared/utils/function.utils */ 44924);



















let RegisterPage = class RegisterPage extends src_shared_utils_subscriber_component__WEBPACK_IMPORTED_MODULE_3__.SubscriberComponent {
    constructor(loginService, router, spinner, shopperCrud, angularFireAuth, toasterService, route) {
        super();
        this.loginService = loginService;
        this.router = router;
        this.spinner = spinner;
        this.shopperCrud = shopperCrud;
        this.angularFireAuth = angularFireAuth;
        this.toasterService = toasterService;
        this.route = route;
        this.slides = src_app_app_constants__WEBPACK_IMPORTED_MODULE_5__.ProfileConstants.registerSlides;
        this.currentSlide = this.slides[0];
        this.registrationProgress = 0.2;
        this.slidesOpts = src_app_app_constants__WEBPACK_IMPORTED_MODULE_5__.ProfileConstants.slidesOptions;
        this.isPasswordVisible = false;
        this.index = 0;
        this.genders = src_app_app_constants__WEBPACK_IMPORTED_MODULE_5__.ProfileConstants.genders;
    }
    get firstName() {
        return this.personalForm.get('firstName');
    }
    get lastName() {
        return this.personalForm.get('lastName');
    }
    get nickname() {
        return this.personalForm.get('nickname');
    }
    get sexe() {
        return this.personalForm.get('sexe');
    }
    get birthDate() {
        return this.personalForm.get('birth_date');
    }
    ngOnInit() {
        this.initCredentialForm();
        this.initUserForm();
    }
    ngAfterViewInit() {
        const id = Number(this.route.snapshot.paramMap.get('slide'));
        this.angularFireAuth.currentUser.then(_user => this.currentEmail = _user === null || _user === void 0 ? void 0 : _user.email);
        if (id) {
            this.ionSlides.slideTo(id);
            this.registrationProgress = this.registrationProgress * (id + 1);
        }
        if (id === 4) {
            this.initRefresh();
        }
    }
    ionViewDidEnter() {
        (0,src_shared_utils_function_utils__WEBPACK_IMPORTED_MODULE_10__.setStyleStatusBar)("light");
        this.spinner.hide('appSpinner');
    }
    initCredentialForm() {
        this.emailCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.email]);
        this.passwordCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required,
            (0,src_shared_validators_password_requirement_directive__WEBPACK_IMPORTED_MODULE_4__.patternValidator)(/\d/, { hasNumber: true }),
            // 3. check whether the entered password has upper case letter
            (0,src_shared_validators_password_requirement_directive__WEBPACK_IMPORTED_MODULE_4__.patternValidator)(/[A-Z]/, { hasCapitalCase: true }),
            // 4. check whether the entered password has a lower-case letter
            (0,src_shared_validators_password_requirement_directive__WEBPACK_IMPORTED_MODULE_4__.patternValidator)(/[a-z]/, { hasSmallCase: true }),
            // 5. check whether the entered password has a special character
            (0,src_shared_validators_password_requirement_directive__WEBPACK_IMPORTED_MODULE_4__.patternValidator)(/[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/, { hasSpecialCharacters: true }),
            // 6. Has a minimum length of 8 characters
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(8),
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(25)
        ]));
    }
    initRefresh() {
        this.refreshUserInterval = setInterval(() => {
            this.angularFireAuth.currentUser.then(_user => {
                _user.reload().then(() => {
                    console.log("reload");
                    if (_user.emailVerified) {
                        this.router.navigateByUrl('/onboarding-beyond', { replaceUrl: true });
                        clearInterval(this.refreshUserInterval);
                    }
                });
            });
        }, 2500);
    }
    initUserForm() {
        this.personalForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroup({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required,
                (0,src_shared_validators_regex_validator_directive__WEBPACK_IMPORTED_MODULE_9__.regexValidator)(/^[A-ZÀ-ÿ]/, "FIRST_LETTER_UPPERCASE"),
                (0,src_shared_validators_regex_validator_directive__WEBPACK_IMPORTED_MODULE_9__.regexValidator)(/^[a-zA-ZÀ-ÿ-,_\/.' ]+$/, "FIRSTNAME_VALID_CHARS"),
            ]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required,
                (0,src_shared_validators_regex_validator_directive__WEBPACK_IMPORTED_MODULE_9__.regexValidator)(/^[A-ZÀ-ÿ]/, "FIRST_LETTER_UPPERCASE"),
                (0,src_shared_validators_regex_validator_directive__WEBPACK_IMPORTED_MODULE_9__.regexValidator)(/^[a-zA-ZÀ-ÿ-,_\/.' ]+$/, "FIRSTNAME_VALID_CHARS"),
            ]),
            nickname: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern('^[a-z0-9-_]+$')]),
            birth_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
            sexe: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('0', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
        });
    }
    onPreviousButtonTouched() {
        if (this.currentSlide === this.slides[0]) {
            this.router.navigateByUrl('/register-home', { replaceUrl: true });
        }
        else {
            this.ionSlides.slidePrev();
            this.updateProgress(false);
        }
    }
    onVerifyAvailableEmail() {
        firebase_compat_app__WEBPACK_IMPORTED_MODULE_6__["default"].auth().fetchSignInMethodsForEmail(this.emailCtrl.value).then(result => {
            if (result.length) {
                this.emailCtrl.setErrors({ invalid: "email-already-in-use" });
            }
            else {
                this.ionSlides.slideNext();
                this.updateProgress(true);
            }
        });
    }
    onSlidesChanged() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.index = yield this.ionSlides.getActiveIndex();
            this.currentSlide = this.slides[this.index];
        });
    }
    onRegister() {
        const credentials = {
            email: this.emailCtrl.value,
            password: this.passwordCtrl.value,
        };
        this.loginService.registerUser(credentials).then(() => {
            this.router.navigateByUrl('/register/2', { replaceUrl: true });
            this.currentEmail = credentials.email;
        }).catch(error => {
            this.passwordCtrl.setErrors({ invalid: error.message.split('/')[1] });
        });
    }
    updateProgress(isUp) {
        this.registrationProgress += isUp ? 0.2 : -0.2;
    }
    onGoToNextSlide() {
        this.ionSlides.slideNext();
        this.updateProgress(true);
    }
    onCreateShopper() {
        if (this.personalForm.valid) {
            const profile_name = `${this.firstName.value} ${this.lastName.value}`;
            this.angularFireAuth.currentUser.then((user) => {
                const shopper = {
                    firebase_id: user.uid,
                    first_name: this.firstName.value,
                    last_name: this.lastName.value,
                    email: user.email,
                    date_of_birth: this.birthDate.value,
                    gender_id: Number(this.sexe.value),
                    nickname: this.nickname.value,
                    profile_name,
                    swipe_filter: { gender_id: Number(this.sexe.value) },
                };
                this.spinner.show('appSpinner').then(() => {
                    this.shopperCrud.createShopper(shopper).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1)).subscribe({
                        next: (response) => {
                            this.spinner.hide('appSpinner');
                            this.router.navigateByUrl('/register/4', { replaceUrl: true });
                            this.currentEmail = user.email;
                        },
                        error: error => {
                            this.spinner.hide('appSpinner');
                            this.toasterService.presentErrorToast(`MESSAGE.PROFILE.${error.status}`);
                        },
                    });
                });
            });
        }
    }
    onSendVerifyEmail() {
        this.loginService.sendVerificationMail();
    }
    onLogout() {
        this.loginService.signOut().then(() => {
            clearInterval(this.refreshUserInterval);
            this.router.navigateByUrl('/home', { replaceUrl: true });
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: src_shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerService },
    { type: src_shared_crud_shopper_crud_service__WEBPACK_IMPORTED_MODULE_7__.ShopperCRUDService },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_16__.AngularFireAuth },
    { type: src_shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_8__.ToasterService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute }
];
RegisterPage.propDecorators = {
    ionSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonSlides, { static: false },] }],
    datetime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonDatetime,] }]
};
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-register',
        template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



/***/ }),

/***/ 74334:
/*!*****************************************************************!*\
  !*** ./src/shared/validators/password-requirement.directive.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "patternValidator": () => (/* binding */ patternValidator)
/* harmony export */ });
function patternValidator(regex, error) {
    return (control) => {
        if (!control.value) {
            // if control is empty return no error
            return null;
        }
        // test the value of the control against the regexp supplied
        const valid = regex.test(control.value);
        // if true, return no error (no error), else return error passed in the second parameter
        return valid ? null : error;
    };
}


/***/ }),

/***/ 36219:
/*!********************************************************!*\
  !*** ./src/app/register/register.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/** Ionic CSS Variables **/\n:root {\n  --ion-color-white: #ffffff;\n  --ion-color-black: #000000;\n  /** primary color**/\n  --ion-color-primary: #ffde59;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #111111;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #ffeeae;\n  --ion-color-primary-tint: #ffde59;\n  /** secondary for text**/\n  --ion-color-secondary: #111111;\n  --ion-color-secondary-rgb: 17, 17, 17;\n  --ion-color-secondary-contrast: #ffde59;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0f0f0f;\n  --ion-color-secondary-tint: #292929;\n  /** tertiary used for input background and background icone**/\n  --ion-color-tertiary: #dbdbdb;\n  --ion-color-tertiary-rgb: 219, 219, 219;\n  --ion-color-tertiary-contrast: #000000;\n  --ion-color-tertiary-contrast-rgb: 0, 0, 0;\n  --ion-color-tertiary-shade: #c1c1c1;\n  --ion-color-tertiary-tint: #dfdfdf;\n  /** success **/\n  --ion-color-success: #01db72;\n  --ion-color-success-rgb: 1, 219, 114;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #01c164;\n  --ion-color-success-tint: #1adf80;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #ff1166;\n  --ion-color-danger-rgb: 255, 17, 102;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e00f5a;\n  --ion-color-danger-tint: #ff2976;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: rgba(255, 222, 89, 0.19);\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** Tab-bar **/\n  --ion-toolbar-background: white;\n  --text-font-style: \"IBMPlexSans\";\n  --title-font-style: \"IBMPlexSans\";\n}\n:root .spinner-bubbles {\n  color: var(--ion-color-primary);\n}\n:root ion-tab-button.tab-selected {\n  --color-selected: var(--ion-color-primary);\n}\n:root ion-segment {\n  --background: var(--ion-color-white);\n}\n:root ion-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --color-checked: black;\n  --indicator-transition: none;\n}\n:root ion-button {\n  text-transform: none;\n}\nion-header ion-toolbar ion-buttons {\n  height: 2.5rem;\n  width: 2.5rem;\n  justify-content: center;\n}\nion-header ion-toolbar ion-title {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: #111111;\n  font-weight: 600;\n}\nion-header ion-progress-bar {\n  --background: #B8B8B8;\n  --progress-background: var(--ion-color-secondary);\n}\nion-content ion-slides {\n  height: 100%;\n}\nion-content ion-slides .slide {\n  height: 100%;\n  width: 100%;\n}\nion-content ion-slides .slide .slide-container {\n  position: relative;\n  align-items: flex-start;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-end;\n  height: 100%;\n  width: 100%;\n  justify-content: start;\n}\nion-content ion-slides .slide .slide-container img {\n  align-self: center;\n  width: 70%;\n  max-height: 50%;\n}\nion-content ion-slides .slide .slide-container .title {\n  font-size: 1.125rem;\n  font-family: \"IBMPlexSans\";\n  color: #111111;\n  font-weight: 700;\n}\nion-content ion-slides .slide .slide-container .subtitle {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: #292929;\n  font-weight: 400;\n}\nion-content ion-slides .slide .slide-container .form {\n  width: 100%;\n}\nion-content ion-slides .slide .slide-container .form .email-advice {\n  background-color: #fff5ce;\n  padding: 0.5rem;\n  width: 100%;\n  height: 2.5rem;\n  line-height: 1.5rem;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-family: \"IBMPlexSans\";\n  color: #292929;\n  font-weight: 500;\n}\nion-content ion-slides .slide .slide-container .form ion-item {\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-bottom: 16px;\n}\nion-content ion-slides .slide .slide-container .form ion-item ion-label {\n  font-size: 0.875rem;\n  font-family: \"IBMPlexSans\";\n  color: #111111;\n  font-weight: 400;\n}\nion-content ion-slides .slide .slide-container .form ion-item .gender-label {\n  display: inline-flex;\n  align-items: center;\n  margin-bottom: 4px;\n}\nion-content ion-slides .slide .slide-container .form ion-item .gender-label ion-icon {\n  margin: 0px 0px 0px 4px;\n  height: 1rem;\n  width: 1rem;\n  align-self: center;\n}\nion-content ion-slides .slide .slide-container .form ion-item ion-icon {\n  align-self: end;\n  height: 1.5rem;\n  width: 1.5rem;\n}\nion-content ion-slides .slide .slide-container .form ion-item ion-input {\n  --placeholder-color: $gray300;\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: #111111;\n  font-weight: 400;\n}\nion-content ion-slides .slide .slide-container .form ion-item ion-input .at-icon {\n  margin: 0px 0px 0px 0;\n  height: 1rem;\n  width: 1rem;\n  align-self: center;\n  padding: 8px 0 0px 0;\n}\nion-content ion-slides .slide .slide-container .form ion-item ion-input input {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  align-self: center;\n}\nion-content ion-slides .slide .slide-container .form ion-item .eye-icon {\n  margin-right: 0;\n}\nion-content ion-slides .slide .slide-container .form .radio-group {\n  display: inline-flex;\n  width: 100%;\n  justify-content: space-between;\n}\nion-content ion-slides .slide .slide-container .form .radio-group ion-item {\n  height: 35px;\n  display: inline-flex;\n  align-items: center;\n}\nion-content ion-slides .slide .slide-container .form .radio-group ion-item ion-label {\n  margin: 0;\n}\nion-content ion-slides .slide .slide-container .form .radio-group ion-item ion-radio {\n  margin: 0 8px 0 0;\n}\nion-content ion-slides .slide .slide-container .next-button {\n  margin-top: 2rem;\n}\nion-content ion-slides .slide .slide-container .password-errors {\n  background-color: #fff5ce;\n  padding: 10px;\n  width: 100%;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n}\nion-content ion-slides .slide .slide-container .password-errors .password-error-title {\n  font-size: 0.875rem;\n  font-family: \"IBMPlexSans\";\n  color: #292929;\n  font-weight: 500;\n}\nion-content ion-slides .slide .slide-container .password-errors .password-error-subtitle {\n  font-size: 0.75rem;\n  font-family: \"IBMPlexSans\";\n  color: #292929;\n  font-weight: 500;\n  margin-bottom: 8px;\n}\nion-content ion-slides .slide .slide-container .password-errors ion-text {\n  display: flex;\n  align-items: center;\n  color: #595959;\n}\nion-content ion-slides .slide .slide-container .password-errors ion-text ion-icon {\n  margin-right: 8px;\n}\nion-content ion-slides .slide .slide-container .buttons-container {\n  width: 100%;\n  height: 100px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-start;\n}\nion-content ion-slides .slide .slide-container .buttons-container ion-button {\n  margin: 0px;\n  width: 100%;\n  height: 2.5rem;\n  font-family: \"IBMPlexSans\";\n  font-size: 1.125rem;\n  font-weight: 600;\n  min-height: 2.5rem;\n}\nion-content ion-slides .slide .slide-container .buttons-container .mail-no-receive {\n  font-size: 0.75rem;\n  font-family: \"IBMPlexSans\";\n  color: #595959;\n  font-weight: 400;\n  margin-bottom: 14px;\n}\nion-content ion-slides .slide .slide-container .mail-address {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: #292929;\n  font-weight: 600;\n}\nion-content ion-slides .slide .slide-container .footer-text {\n  font-size: 0.75rem;\n  font-family: \"IBMPlexSans\";\n  color: #595959;\n  font-weight: 400;\n  margin-bottom: 0;\n}\nion-content ion-slides .slide .slide-container .footer-text .link-text {\n  font-size: 0.75rem;\n  font-family: \"IBMPlexSans\";\n  color: #292929;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwicmVnaXN0ZXIucGFnZS5zY3NzIiwiLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsMEJBQUE7QUFvQkE7RUFDRSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLDZEQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsMENBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBTUEsY0FBQTtFQW1CQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7QUNwREY7QUQyQkU7RUFDRSwrQkFBQTtBQ3pCSjtBRDZCRTtFQUNFLDBDQUFBO0FDM0JKO0FEOEJFO0VBQ0Usb0NBQUE7QUM1Qko7QUQrQkU7RUFDRSw4Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUM3Qko7QURnQ0U7RUFDRSxvQkFBQTtBQzlCSjtBQW5GSTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFzRk47QUFuRkk7RUNxR0YsZURwRzBCO0VDcUcxQiwwQkFGcUc7RUFHckcsY0YzR1E7RUU0R1IsZ0JBSmtGO0FEWHBGO0FBcEZFO0VBQ0UscUJBQUE7RUFDQSxpREFBQTtBQXNGSjtBQS9FRTtFQUNFLFlBQUE7QUFrRko7QUFoRkk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQWtGTjtBQWhGTTtFQ1dKLGtCQUR5SDtFQUV6SCx1QkRYNEI7RUNrQjFCLGFBQUE7RUFHRixzQkRyQm9CO0VDc0JwQixpQkFic0Y7RUFjdEYseUJEdkJ3QztFQUNsQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBdUZSO0FBckZRO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQXVGVjtBQW5GUTtFQzBFTixtQkR6RTBCO0VDMEUxQiwwQkFGdUY7RUFHdkYsY0ZsSFE7RUVtSFIsZ0JBSm9FO0FEZ0J0RTtBQXJGUTtFQ3dETixlRHZENkI7RUN3RDdCLDBCQUZzRjtFQUd0RixjRm5HUTtFRW9HUixnQkFKbUU7QURvQ3JFO0FBdkZRO0VBQ0UsV0FBQTtBQXlGVjtBQXZGVTtFQUNFLHlCRDFDQTtFQzJDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VDb0NWLG1CRG5DOEI7RUNvQzlCLDBCQUZ3RjtFQUd4RixjRjVGUTtFRTZGUixnQkFKcUU7QUQwRHZFO0FBekZVO0VBQ0Usd0JBQUE7RUFBQSxtQkFBQTtFQUNBLG1CQUFBO0FBMkZaO0FBekZZO0VDbUNWLG1CRGxDaUM7RUNtQ2pDLDBCQUZzRjtFQUd0RixjRnBHUTtFRXFHUixnQkFKbUU7QUQ2RHJFO0FBM0ZZO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBNkZkO0FBM0ZjO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBNkZoQjtBQXpGWTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQTJGZDtBQXhGWTtFQUNFLDZCQUFBO0VDV1osZURWaUM7RUNXakMsMEJBRnNGO0VBR3RGLGNGcEdRO0VFcUdSLGdCQUptRTtBRG9GckU7QUEzRmM7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQTZGaEI7QUExRmM7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUE0RmhCO0FBdkZZO0VBQ0UsZUFBQTtBQXlGZDtBQW5GVTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FBcUZaO0FBbkZZO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFxRmQ7QUFuRmM7RUFDRSxTQUFBO0FBcUZoQjtBQWxGYztFQUNFLGlCQUFBO0FBb0ZoQjtBQTdFUTtFQUNFLGdCQUFBO0FBK0VWO0FBNUVRO0VBQ0UseUJEcElFO0VDcUlGLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUE4RVY7QUE1RVU7RUN4RFIsbUJEeUQ4QjtFQ3hEOUIsMEJBRndGO0VBR3hGLGNGNUZRO0VFNkZSLGdCQUpxRTtBRDJJdkU7QUE5RVU7RUM1RFIsa0JENkQ4QjtFQzVEOUIsMEJBRndGO0VBR3hGLGNGNUZRO0VFNkZSLGdCQUpxRTtFRCtEM0Qsa0JBQUE7QUFtRlo7QUFoRlU7RUFLRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjRGpLRjtBQytPVjtBQXBGWTtFQUNFLGlCQUFBO0FBc0ZkO0FBN0VRO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FBK0VWO0FBN0VVO0VBQ0UsV0FBQTtFQzNIVixXRDRIMEI7RUMzSDFCLGNEMkhnQztFQzFIaEMsMEJBSDhFO0VBSTlFLG1CRHlId0M7RUN4SHhDLGdCQUwyRztFQU0zRyxrQkR1SGdDO0FBb0ZsQztBQWpGVTtFQ2xGUixrQkRtRitCO0VDbEYvQiwwQkFGc0Y7RUFHdEYsY0ZsR1E7RUVtR1IsZ0JBSm1FO0VEcUZ6RCxtQkFBQTtBQXNGWjtBQWxGUTtFQ3RHTixlRHVHK0I7RUN0Ry9CLDBCQUZ3RjtFQUd4RixjRnJGUTtFRXNGUixnQkFKcUU7QUQrTHZFO0FBcEZRO0VDNUZOLGtCRDZGNkI7RUM1RjdCLDBCQUZzRjtFQUd0RixjRmxHUTtFRW1HUixnQkFKbUU7RUQrRjNELGdCQUFBO0FBeUZWO0FBdkZVO0VDdkdSLGtCQUQ0QjtFQUU1QiwwQkFGd0Y7RUFHeEYsY0Y1RlE7RUU2RlIsZ0JBSnFFO0FEcU12RSIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cblxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG5cbi8vIGNvbG9yc1xuJGJsYWNrMjogIzQwNDAzZjtcbiRncmF5NjAwOiAjMTExMTExOyAvL3VzZWRcbiRncmF5NTAwOiAjMjkyOTI5OyAvL3VzZWRcbiRncmF5NDAwOiAjNTk1OTU5OyAvL3VzZWRcbiRncmF5MzAwOiAjODg4ODg4OyAvL3VzZWRcbiRncmF5MjAwOiAjQjhCOEI4O1xuJGdyYXkyOiAjOWQ5Yzk5O1xuJGdyYXkzOiAjZGJkYmRiO1xuJHllbGxvdzEwMDogI2ZmZmNlZjtcbiR5ZWxsb3cyMDA6ICNmZmY1Y2U7XG4keWVsbG93MzogI2ZkZTg5NjtcbiR5ZWxsb3c0OiAjZmNlZWI2O1xuJHllbGxvdzU6ICNmYmYyZDQ7XG4keWVsbG93NjogI0ZGREU1OTtcbiR3aGl0ZTgwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4kZGFyazc1OiByZ2JhKDAsIDAsIDAsIDAuMjUpOyAvL2J1dHRvbnMgc2hhZG93XG5cbjpyb290IHtcbiAgLS1pb24tY29sb3Itd2hpdGU6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWJsYWNrOiAjMDAwMDAwO1xuICAvKiogcHJpbWFyeSBjb2xvcioqL1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjZmZkZTU5O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNTYsIDEyOCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjMTExMTExO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogI2ZmZWVhZTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjZmZkZTU5O1xuXG4gIC8qKiBzZWNvbmRhcnkgZm9yIHRleHQqKi9cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjMTExMTExO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiAxNywgMTcsIDE3O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmRlNTk7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzBmMGYwZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICMyOTI5Mjk7XG5cbiAgLyoqIHRlcnRpYXJ5IHVzZWQgZm9yIGlucHV0IGJhY2tncm91bmQgYW5kIGJhY2tncm91bmQgaWNvbmUqKi9cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNkYmRiZGI7IC8vc2FtZSBhcyBncmF5M1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDIxOSwgMjE5LCAyMTk7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjYzFjMWMxO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjZGZkZmRmO1xuXG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMDFkYjcyO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogMSwgMjE5LCAxMTQ7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMDFjMTY0O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICMxYWRmODA7XG5cbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmM0MDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDE5NiwgOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGFjMDg7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmY2EyMjtcblxuICAvKiogZGFuZ2VyICoqL1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNmZjExNjY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI1NSwgMTcsIDEwMjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNlMDBmNWE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZmYyOTc2O1xuXG4gIC8qKiBkYXJrICoqL1xuICAtLWlvbi1jb2xvci1kYXJrOiAjMjIyNDI4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcblxuICAvKiogbWVkaXVtICoqL1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5Mjk0OWM7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE0NiwgMTQ4LCAxNTY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODA4Mjg5O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogIzlkOWZhNjtcblxuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiByZ2JhKDI1NSwgMjIyLCA4OSwgMC4xOSk7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjQ0LCAyNDUsIDI0ODtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNWY2Zjk7XG5cbiAgLnNwaW5uZXItYnViYmxlcyB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuXG4gIC8qKiBUYWItYmFyICoqL1xuICBpb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQge1xuICAgIC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuXG4gIGlvbi1zZWdtZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIH1cblxuICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLS1jb2xvci1jaGVja2VkOiBibGFjaztcbiAgICAtLWluZGljYXRvci10cmFuc2l0aW9uOiBub25lO1xuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIH1cblxuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLXRleHQtZm9udC1zdHlsZTogJ0lCTVBsZXhTYW5zJztcbiAgLS10aXRsZS1mb250LXN0eWxlOiAnSUJNUGxleFNhbnMnO1xufVxuXG4vLyBWZXJpZmllZFxuJHdpZHRoLXNkOiAzMDBweDsgLy9mb2xkXG4kd2lkdGgtbWQ6IDM4MHB4OyAvL2lwaG9uZSBTRVxuJHdpZHRoLWxkOiA0MTJweDsgLy9pcGhvbmUgWFJcbiR3aWR0aC14bGQ6IDc2OHB4OyAvL2lwYWQiLCJAaW1wb3J0ICcuLi8uLi90aGVtZS92YXJpYWJsZXMuc2Nzcyc7XG5AaW1wb3J0ICcuLi8uLi90aGVtZS9taXhpbnMuc2Nzcyc7XG5cbmlvbi1oZWFkZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgaW9uLWJ1dHRvbnMge1xuICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICB3aWR0aDogMi41cmVtO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgaW9uLXRpdGxlIHtcbiAgICAgIEBpbmNsdWRlIHNlbWlCb2xkVGV4dCgxcmVtLCAkZ3JheTYwMCk7XG4gICAgfVxuICB9XG5cbiAgaW9uLXByb2dyZXNzLWJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjQjhCOEI4O1xuICAgIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG5cbiAgfVxuXG59XG5cbmlvbi1jb250ZW50IHtcbiAgaW9uLXNsaWRlcyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgLnNsaWRlIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAuc2xpZGUtY29udGFpbmVyIHtcbiAgICAgICAgQGluY2x1ZGUgZmxleChjb2x1bW4sIGZsZXgtc3RhcnQsIGZsZXgtZW5kKTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDUwJTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBAaW5jbHVkZSBib2xkVGV4dCgxLjEyNXJlbSwgJGdyYXk2MDApO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICBAaW5jbHVkZSByZWd1bGFyVGV4dCgxcmVtLCAkZ3JheTUwMCk7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAuZW1haWwtYWR2aWNlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR5ZWxsb3cyMDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIEBpbmNsdWRlIG1lZGl1bVRleHQoMC44NzVyZW0sICRncmF5NTAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgQGluY2x1ZGUgcmVndWxhclRleHQoMC44NzVyZW0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZ2VuZGVyLWxhYmVsIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcblxuICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCA0cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgIGFsaWduLXNlbGY6IGVuZDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgICAgIHdpZHRoOiAxLjVyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICRncmF5MzAwO1xuICAgICAgICAgICAgICBAaW5jbHVkZSByZWd1bGFyVGV4dCgxcmVtKTtcblxuICAgICAgICAgICAgICAuYXQtaWNvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMXJlbTtcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDAgMHB4IDA7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDhweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5leWUtaWNvbiB7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgLnJhZGlvLWdyb3VwIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlvbi1yYWRpbyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDhweCAwIDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC5uZXh0LWJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYXNzd29yZC1lcnJvcnMge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR5ZWxsb3cyMDA7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgLnBhc3N3b3JkLWVycm9yLXRpdGxlIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIG1lZGl1bVRleHQoMC44NzVyZW0sICRncmF5NTAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucGFzc3dvcmQtZXJyb3Itc3VidGl0bGUge1xuICAgICAgICAgICAgQGluY2x1ZGUgbWVkaXVtVGV4dCgwLjc1cmVtLCAkZ3JheTUwMCk7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW9uLXRleHQge1xuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogJGdyYXk0MDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbnMtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gICAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIEBpbmNsdWRlIGJ1dHRvbigxMDAlLCAyLjVyZW0sIDEuMTI1cmVtKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWFpbC1uby1yZWNlaXZlIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHJlZ3VsYXJUZXh0KDAuNzVyZW0sICRncmF5NDAwKTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm1haWwtYWRkcmVzcyB7XG4gICAgICAgICAgQGluY2x1ZGUgYmxhY2tTdWJ0aXRsZSgxcmVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb290ZXItdGV4dCB7XG4gICAgICAgICAgQGluY2x1ZGUgcmVndWxhclRleHQoMC43NXJlbSwgJGdyYXk0MDApO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICAgICAgICAubGluay10ZXh0IHtcbiAgICAgICAgICAgIEBpbmNsdWRlIG1lZGl1bVRleHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxufSIsIkBtaXhpbiB0aXRsZSgkZm9udC1zaXplOiAycmVtLFxuICAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycsXG4gICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSksXG4gICRmb250LXdlaWdodDogYm9sZCkge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cblxuXG5AbWl4aW4gc2ltcGxlX2J1dHRvbigkd2lkdGg6IDI1JSwgJGhlaWdodDogMi41cmVtLCAkY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpKSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbiAgLS1jb2xvcjogJGNvbG9yO1xufVxuXG5AbWl4aW4gaWNvbigkd2lkdGg6IDFyZW0sICRoZWlnaHQ6IDFyZW0pIHtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xufVxuXG5AbWl4aW4gdGV4dCgkZm9udC1zaXplOiAwLjg3NXJlbSxcbiAgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnLFxuICAkY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpLFxuICAkZm9udC13ZWlnaHQ6IG5vcm1hbCkge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiB0ZXh0LW92ZXJmbG93KCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuXG4vL3ZlcmlmaWVkXG5cbkBtaXhpbiBmbGV4KCRkaXJlY3Rpb246IHJvdywgJGFsaWduLWl0ZW1zOiBjZW50ZXIsICRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQsICR3cmFwOiBub3dyYXAsICRpbmxpbmU6IGZhbHNlLCAkcG9zaXRpb246IHJlbGF0aXZlKSB7XG4gIHBvc2l0aW9uOiAkcG9zaXRpb247XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ24taXRlbXM7XG5cbiAgQGlmICRpbmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB9XG5cbiAgQGVsc2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbiAgZmxleC13cmFwOiAkd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeS1jb250ZW50O1xufVxuXG5AbWl4aW4gYnV0dG9uKCR3aWR0aDogMjUlLCAkaGVpZ2h0OiAyLjVyZW0sICRmb250LXNpemU6IDAuODc1cmVtLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycsICRmb250LXdlaWdodDogNjAwKSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xuICBtaW4taGVpZ2h0OiAkaGVpZ2h0O1xufVxuXG5AbWl4aW4gd2hpdGVUaXRsZSgkZm9udC1zaXplOiAxLjc1cmVtLCAkY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSksICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gd2hpdGVTdWJ0aXRsZSgkZm9udC1zaXplOiAxcmVtLCAkY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSksICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gYmxhY2tUaXRsZSgkZm9udC1zaXplOiAxLjc1cmVtLCAkY29sb3I6ICRncmF5NTAwLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnLCApIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xuICBtYXJnaW46IDBweDtcbn1cblxuQG1peGluIGJsYWNrU3VidGl0bGUoJGZvbnQtc2l6ZTogMXJlbSwgJGNvbG9yOiAkZ3JheTUwMCwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiBtZWRpdW1UZXh0KCRmb250LXNpemU6IDAuNzVyZW0sICRjb2xvcjogJGdyYXk1MDAsICRmb250LXdlaWdodDogNTAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gcmVndWxhclRleHQoJGZvbnQtc2l6ZTogMXJlbSwgJGNvbG9yOiAkZ3JheTYwMCwgJGZvbnQtd2VpZ2h0OiA0MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiBzZW1pQm9sZFRleHQoJGZvbnQtc2l6ZTogMnJlbSwgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIGJvbGRUZXh0KCRmb250LXNpemU6IDEuMTI1cmVtLCAkY29sb3I6ICRncmF5NjAwLCAkZm9udC13ZWlnaHQ6IDcwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn0iXX0= */";

/***/ }),

/***/ 84754:
/*!********************************************************!*\
  !*** ./src/app/register/register.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header collapse=\"fade\">\n  <ion-toolbar>\n    <ion-buttons *ngIf=\"index===0 || index===1 || index===3\" slot=\"start\" mode=\"md\" (click)=\"onPreviousButtonTouched()\">\n      <ion-icon icon=\"chevron-back-outline\"></ion-icon>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">{{'REGISTER.STEP' | translate}} {{ index+1 }}/{{ slides.length }}</ion-title>\n  </ion-toolbar>\n  <ion-progress-bar [value]=\"registrationProgress\" [mode]=\"ios\"></ion-progress-bar>\n</ion-header>\n\n<ion-content id=\"content\" class=\"ion-padding\">\n  <ion-slides pager=\"false\" [options]=\"slidesOpts\" (ionSlideWillChange)=\"onSlidesChanged()\">\n    <ng-container class=\"swiper-wrapper\" *ngFor=\"let slide of slides; let index = index\">\n      <ion-slide>\n        <div class=\"slide ion-text-start\">\n          <div class=\"slide-container\" *ngIf=\"slide === 'Mail'\">\n            <p class=\"title ion-no-margin\" [attr.data-cy]=\"'title-'+ index\">{{'REGISTER.ENTER_EMAIL' | translate}}</p>\n            <p class=\"subtitle\" [attr.data-cy]=\"'subtitle-'+ index\">{{'REGISTER.EMAIL_DESCRIPTION' | translate}} </p>\n            <div class=\"form\">\n              <ion-item lines=\"full\">\n                <ion-label position=\"floating\">{{'SHARED.EMAIL' | translate }} <span class=\"label-required\">*</span>\n                </ion-label>\n                <ion-icon src=\"assets/icon/mail.svg\" slot=\"start\"></ion-icon>\n                <ion-input data-cy=\"email-input\" [formControl]=\"emailCtrl\" type=\"email\" placeholder=\"email@mail.com\">\n                </ion-input>\n                <ion-icon slot=\"end\" name=\"alert-circle-outline\" color=\"danger\" *ngIf=\"emailCtrl.touched && emailCtrl.errors\">\n                </ion-icon>\n\n                <ion-note *ngIf=\"emailCtrl.touched && emailCtrl.errors?.required\" slot=\"error\">\n                  {{'ERROR.FORM.EMAIL_REQUIRED' | translate}}</ion-note>\n                <ion-note *ngIf=\"emailCtrl.touched && emailCtrl.errors?.email\" slot=\"error\">\n                  {{'ERROR.FORM.FORMAT_INVALID' | translate}}</ion-note>\n\n                <ion-note *ngIf=\"emailCtrl.touched && emailCtrl.errors?.invalid\" slot=\"error\">\n                  {{ 'ERROR.AUTHENTICATION.'+\n                  emailCtrl.errors?.invalid | translate}}</ion-note>\n\n              </ion-item>\n              <p class=\"ion-no-margin email-advice\">\n                {{'MESSAGE.FORM.CONFIRMATION_EMAIL' | translate}}</p>\n            </div>\n            <ion-button class=\"next-button\" data-cy=\"email-confirm-btn\" (click)=\"onVerifyAvailableEmail();\" [disabled]=\"emailCtrl.invalid\" shape=\"round\">\n              {{ 'SHARED.CONTINU' | translate }}\n            </ion-button>\n          </div>\n          <div class=\"slide-container\" *ngIf=\"slide === 'Password'\">\n            <p class=\"title ion-no-margin\">{{'REGISTER.CHOOSE_YOUR_PASSWORD' | translate}}</p>\n            <p class=\"subtitle ion-margin-vertical\"> {{'REGISTER.RESPECT_PASSWORD_PATTERN' | translate}} </p>\n            <div class=\"form\">\n              <ion-item lines=\"full\">\n                <ion-icon src=\"assets/icon/lock.svg\" slot=\"start\"></ion-icon>\n                <ion-icon class=\"eye-icon\" [src]=\"isPasswordVisible ?  'assets/icon/eye-close.svg': 'assets/icon/eye-open.svg'\" slot=\"end\"\n                  (click)=\"isPasswordVisible = !isPasswordVisible\">\n                </ion-icon>\n                <ion-label position=\"floating\">{{'SHARED.PASSWORD' | translate }} <span class=\"label-required\">*</span>\n                </ion-label>\n                <ion-input data-cy=\"password-input\" [formControl]=\"passwordCtrl\" [type]=\"isPasswordVisible ? 'text': 'password' \"\n                  placeholder=\"{{'SHARED.PASSWORD_PLACEHOLDER' | translate }}\">\n                </ion-input>\n                <ion-icon slot=\"end\" name=\"alert-circle-outline\" color=\"danger\" *ngIf=\"passwordCtrl.touched && passwordCtrl.errors\">\n                </ion-icon>\n\n                <ion-note *ngIf=\"passwordCtrl.touched && passwordCtrl.errors?.required\" slot=\"error\">\n                  {{'ERROR.FORM.PASSWORD_REQUIRED' | translate}}</ion-note>\n              </ion-item>\n              <p class=\"error-message ion-no-margin\" *ngIf=\"passwordCtrl.errors?.invalid\">{{'ERROR.AUTHENTICATION.'+\n                passwordCtrl.errors?.invalid | translate}}</p>\n            </div>\n            <div class=\"password-errors\"\n              *ngIf=\"passwordCtrl.hasError('hasNumber') || passwordCtrl.hasError('hasSpecialCharacters') || passwordCtrl.hasError('hasCapitalCase') || passwordCtrl.hasError('minlength') || passwordCtrl.hasError('maxlength')\">\n              <ion-text class=\"password-error-title\">\n                {{'ERROR.FORM.HELP_PASSWORD' | translate}}\n              </ion-text>\n              <ion-text class=\"password-error-subtitle\">\n                {{ 'ERROR.FORM.HELP_PASSWORD_CHARACTER' | translate }}\n              </ion-text>\n              <ion-text class=\"error-message\" *ngIf=\"passwordCtrl.hasError('hasNumber')\">\n                <ion-icon color=\"danger\" name=\"close-outline\"></ion-icon>{{'REGISTER.AT_LEAST_ONE' | translate}}<span class=\"bolder\">&nbsp;{{ 'REGISTER.NUMBER' |\n                  translate}}</span>\n              </ion-text>\n              <ion-text class=\"error-message\" *ngIf=\"passwordCtrl.hasError('hasSpecialCharacters')\">\n                <ion-icon color=\"danger\" name=\"close-outline\"></ion-icon>{{'REGISTER.AT_LEAST_ONE' |\n                translate}}<span class=\"bolder\">&nbsp;{{'REGISTER.SPECIAL_CHARACTER' | translate}}</span>\n              </ion-text>\n              <ion-text class=\"error-message\" *ngIf=\"passwordCtrl.hasError('hasCapitalCase')\">\n                <ion-icon color=\"danger\" name=\"close-outline\"></ion-icon>{{'REGISTER.AT_LEAST_ONE_LETTER' |\n                translate}}<span class=\"bolder\">&nbsp;{{'REGISTER.UPPERCASE' | translate}}</span>\n              </ion-text>\n              <ion-text class=\"error-message\" *ngIf=\"passwordCtrl.hasError('hasSmallCase')\">\n                <ion-icon color=\"danger\" name=\"close-outline\"></ion-icon>{{'REGISTER.AT_LEAST_ONE_LETTER' |\n                translate}} <span class=\"bolder\">&nbsp;{{'REGISTER.LOWERCASE' | translate}}</span>\n              </ion-text>\n              <ion-text class=\"error-message\" *ngIf=\"passwordCtrl.hasError('minlength')\">\n                <ion-icon color=\"danger\" name=\"close-outline\"></ion-icon>{{'REGISTER.EIGHT_CHARS' | translate}} <span class=\"bolder\">&nbsp;{{'REGISTER.CHARS' | translate}}</span>\n              </ion-text>\n              <ion-text class=\"error-message\" *ngIf=\"passwordCtrl.hasError('maxlength')\">\n                <ion-icon color=\"danger\" name=\"close-outline\" color=\"danger\"></ion-icon>\n                {{'REGISTER.MAX_CHAR' | translate}} <span class=\"bolder\">&nbsp;{{'REGISTER.CHARS' | translate}}</span>\n              </ion-text>\n            </div>\n\n            <ion-button class=\"next-button\" data-cy=\"signup-btn\" (click)=\"onRegister()\" [disabled]=\"passwordCtrl.invalid\" shape=\"round\">\n              {{ 'SHARED.CONTINU' | translate }}\n            </ion-button>\n          </div>\n\n          <div class=\"slide-container\" *ngIf=\"slide === 'BeforeAll'\">\n            <p class=\"title ion-no-margin\">{{ 'ACCOUNT_CREATION.TITLE' | translate }}</p>\n            <p class=\"subtitle\">{{ 'ACCOUNT_CREATION.SUB_TITLE' | translate }}</p>\n            <img src=\"assets/onboarding-background/welcome-page.svg\" />\n            <p class=\"subtitle\">{{ 'ACCOUNT_CREATION.TRUST' | translate }}</p>\n\n            <p class=\"footer-text\">{{'REGISTER.ACCEPT_RULES' | translate}} <a href=\"https://www.younzee.com/mentions-legales\" class=\"link-text\">{{'REGISTER.GENERAL_CONDITIONS' |\n                translate}}</a> {{'REGISTER.OUR' |\n              translate}}\n              <a href=\"https://www.younzee.com/mentions-legales\" class=\"link-text\">{{'REGISTER.CONFIDENTIALITY' | translate}}</a>\n            </p>\n            <div class=\"buttons-container\">\n              <ion-button data-cy=\"signup-btn\" (click)=\"onGoToNextSlide()\" shape=\"round\">\n                {{ 'SHARED.CONTINU' | translate }}\n              </ion-button>\n            </div>\n          </div>\n\n          <div class=\"slide-container\" *ngIf=\"slide === 'CreateProfile'\">\n            <form class=\"form\" [formGroup]=\"personalForm\">\n              <p class=\"title ion-no-margin\">{{ 'ACCOUNT_CREATION.CREATE_PROFIL' | translate }}</p>\n              <ion-item lines=\"full\">\n                <ion-icon src=\"assets/icon/user.svg\" color=\"secondary\" slot=\"start\"></ion-icon>\n                <ion-label position=\"floating\">{{ 'SHARED.FIRSTNAME' | translate }}<span class=\"label-required\">*</span>\n                </ion-label>\n                <ion-input formControlName=\"firstName\" type=\"text\" placeholder=\"Mon {{ 'SHARED.FIRSTNAME' | translate }}\"></ion-input>\n                <ion-icon slot=\"end\" name=\"alert-circle-outline\" color=\"danger\" *ngIf=\"personalForm.get('firstName').touched && personalForm.get('firstName').errors\">\n                </ion-icon>\n                <ion-note slot=\"error\" *ngIf=\"personalForm.get('firstName').touched && personalForm.get('firstName').errors?.required\" class=\"error-message\">\n                  {{'ERROR.FORM.FIRSTNAME_REQUIRED' | translate }}</ion-note>\n                <ion-note slot=\"error\" *ngIf=\"personalForm.get('firstName').touched && personalForm.get('firstName').hasError('invalidPattern')\"\n                  class=\"error-message nickname-error\">\n                  {{'ERROR.FORM.'+firstName.errors.invalidPattern | translate}}</ion-note>\n              </ion-item>\n              <ion-item lines=\"full\">\n                <ion-icon src=\"assets/icon/user.svg\" color=\"secondary\" slot=\"start\"></ion-icon>\n                <ion-label position=\"floating\">{{ 'SHARED.NAME' | translate }} <span class=\"label-required\">*</span>\n                </ion-label>\n                <ion-input formControlName=\"lastName\" type=\"text\" placeholder=\"Mon {{ 'SHARED.NAME' | translate }}\">\n                </ion-input>\n                <ion-icon slot=\"end\" name=\"alert-circle-outline\" color=\"danger\" *ngIf=\"personalForm.get('lastName').touched && personalForm.get('lastName').errors\">\n                </ion-icon>\n                <ion-note slot=\"error\" *ngIf=\"personalForm.get('lastName').touched && personalForm.get('lastName').hasError('invalidPattern')\" class=\"error-message\">\n                  {{'ERROR.FORM.'+lastName.errors.invalidPattern| translate}}</ion-note>\n\n                <ion-note slot=\"error\" *ngIf=\"personalForm.get('lastName').touched && personalForm.get('lastName').errors?.required\" class=\"error-message\">\n                  {{'ERROR.FORM.LASTNAME_REQUIRED' | translate }}</ion-note>\n              </ion-item>\n              <ion-item lines=\"full\">\n                <ion-icon src=\"assets/logos/logo_black.svg\" color=\"secondary\" slot=\"start\"></ion-icon>\n                <ion-label position=\"floating\">{{ 'SHARED.PROFILENAME' | translate }}<span class=\"label-required\">*</span></ion-label>\n                <ion-input formControlName=\"nickname\" type=\"text\" placeholder=\"{{ 'SHARED.PROFILENAME' | translate }}\">\n                  <ion-icon class=\"at-icon\" name=\"at-outline\" slot=\"start\" size=\"small\"></ion-icon>\n                </ion-input>\n                <ion-icon slot=\"end\" name=\"alert-circle-outline\" color=\"danger\"\n                  *ngIf=\"personalForm.get('nickname').touched && (personalForm.get('nickname').errors?.pattern || personalForm.get('nickname').errors?.required)\">\n                </ion-icon>\n\n                <ion-note slot=\"error\" *ngIf=\"personalForm.get('nickname').touched && personalForm.get('nickname').errors?.required\" class=\"error-message\">\n                  {{'ERROR.FORM.NICKNAME_REQUIRED' | translate }}</ion-note>\n                <ion-note slot=\"error\" *ngIf=\"personalForm.get('nickname').touched && personalForm.get('nickname').hasError('pattern')\" class=\"error-message nickname-error\">\n                  {{'ERROR.FORM.INVALID_NICKNAME_CHARACTER' | translate}}</ion-note>\n              </ion-item>\n              <ion-item lines=\"full\">\n                <ion-icon src=\"assets/icon/calendar.svg\" color=\"secondary\" slot=\"start\"></ion-icon>\n                <ion-label position=\"floating\">{{ 'SHARED.BIRTHDATE' | translate }}<span class=\"label-required\">*</span>\n                </ion-label>\n                <ion-input formControlName=\"birth_date\" type=\"date\" placeholder=\"{{ 'SHARED.BIRTHDATE' | translate }}\">\n                </ion-input>\n                <ion-icon slot=\"end\" name=\"alert-circle-outline\" color=\"danger\" *ngIf=\"personalForm.get('birth_date').touched && personalForm.get('birth_date').errors\">\n                </ion-icon>\n                <ion-note slot=\"error\" *ngIf=\"personalForm.get('birth_date').touched && personalForm.get('birth_date').errors?.required\" class=\"error-message\">\n                  {{'ERROR.FORM.BIRTHDATE_REQUIRED' | translate}}</ion-note>\n              </ion-item>\n\n              <ion-item lines=\"full\">\n                <ion-label class=\"gender-label\" position=\"stacked\">{{'SHARED.GENDER' | translate }}<span class=\"label-required\"> *</span>\n                  <ion-icon name=\"information-circle-outline\" id=\"gender-advice-modal\" slot=\"end\"></ion-icon>\n                </ion-label>\n                <ion-radio-group class=\"radio-group\" formControlName=\"sexe\" value=\"0\">\n                  <ion-item lines=\"none\" *ngFor=\"let gender of genders\">\n                    <ion-label>{{ gender.name | translate }}</ion-label>\n                    <ion-radio color=\"primary\" mode=\"md\" slot=\"start\" value=\"{{ gender.id }}\"></ion-radio>\n                  </ion-item>\n                </ion-radio-group>\n              </ion-item>\n            </form>\n\n            <ion-modal trigger=\"gender-advice-modal\" [initialBreakpoint]=\"0.35\" [breakpoints]=\"[0.15, 0.35]\">\n              <ng-template>\n                <ion-content class=\"ion-padding\">\n                  <p>{{ 'ACCOUNT_CREATION.SEXE_TOOLTIP' | translate }}</p>\n                </ion-content>\n              </ng-template>\n            </ion-modal>\n\n            <div class=\"buttons-container\">\n              <ion-button data-cy=\"signup-btn\" (click)=\"onCreateShopper()\" [disabled]=\"personalForm.invalid\" shape=\"round\">\n                {{ 'SHARED.CONTINU' | translate }}\n              </ion-button>\n            </div>\n          </div>\n\n\n          <div class=\"slide-container\" *ngIf=\"slide === 'ConfirmMail'\">\n            <p class=\"title ion-no-margin\">{{'EMAIL_VERIFICATION.CONFIRM_EMAIL' | translate}}</p>\n            <div class=\"text-container ion-padding-vertical\">\n              <p class=\"subtitle\">\n                {{'EMAIL_VERIFICATION.NOT_VERIFIED' | translate}} <br><span class=\"mail-address\">{{currentEmail}}</span>\n              </p>\n            </div>\n            <img src=\"../../../assets/onboarding-background/verify-email-img.svg\" />\n            <div class=\"ion-margin-vertical buttons-container\">\n              <p class=\"mail-no-receive ion-no-margin\">{{'EMAIL_VERIFICATION.NOT_RECEIVED' | translate}}</p>\n              <ion-button color=\"secondary\" fill=\"outline\" (click)=\"onSendVerifyEmail()\" shape=\"round\">\n                {{'EMAIL_VERIFICATION.SEND_BACK' | translate}}\n              </ion-button>\n              <ion-button color=\"danger\" expand=\"block\" fill=\"clear\" (click)=\"onLogout()\" shape=\"round\">\n                {{'SHARED.CANCEL' | translate}}\n              </ion-button>\n            </div>\n\n          </div>\n\n        </div>\n      </ion-slide>\n    </ng-container>\n  </ion-slides>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_register_register_module_ts.js.map