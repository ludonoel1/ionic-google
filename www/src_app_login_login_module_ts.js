"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 45393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRoutingModule": () => (/* binding */ LoginRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 66825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    },
    {
        path: 'forgotten-password',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_forgotten-password_forgotten-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./forgotten-password/forgotten-password.module */ 58203)).then(m => m.ForgottenPasswordModule),
    },
];
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginRoutingModule);



/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 45393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 66825);
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/shared.module */ 8395);





let LoginModule = class LoginModule {
};
LoginModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage],
        imports: [
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule,
            ...src_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule.MODULE_LIST,
        ]
    })
], LoginModule);



/***/ }),

/***/ 66825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 41729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 87047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 63947);
/* harmony import */ var src_shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/services/login.service */ 33130);
/* harmony import */ var src_shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/services/toaster.service */ 29238);
/* harmony import */ var src_shared_utils_function_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/utils/function.utils */ 44924);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.constants */ 2976);











let LoginPage = class LoginPage {
    constructor(spinner, formBuilder, loginService, router, toaster) {
        this.spinner = spinner;
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.router = router;
        this.toaster = toaster;
        this.isPasswordVisible = false;
        this.authProviders = _app_constants__WEBPACK_IMPORTED_MODULE_5__.AuthenticationConstants.externeAuthProviders;
    }
    ngOnInit() {
        this.initForm();
    }
    ionViewDidEnter() {
        (0,src_shared_utils_function_utils__WEBPACK_IMPORTED_MODULE_4__.setStyleStatusBar)("dark");
        this.spinner.hide('appSpinner');
    }
    initForm() {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
        });
    }
    onLoginWithEmail() {
        this.spinner.show("appSpinner");
        this.loginService.signInEmail(this.loginForm.value)
            .then(() => {
            this.router.navigateByUrl('/main', { replaceUrl: true });
        })
            .catch(error => {
            const errorKeyTrad = error.message.split('/')[1];
            if (errorKeyTrad == "network-request-failed") {
                this.hasNetworkError = true;
            }
            else {
                this.hasNetworkError = false;
                this.loginForm.setErrors({ invalid: errorKeyTrad });
            }
            this.spinner.hide("appSpinner");
        });
    }
    onLoginWithProvider(provider) {
        this.spinner.show("appSpinner");
        this.loginService.handleProvider(provider).then((result) => {
            this.router.navigateByUrl('/main', { replaceUrl: true });
        })
            .catch((error) => {
            var _a;
            this.spinner.hide("appSpinner");
            const errorKeyTrad = (_a = error.message.split('/')[1]) === null || _a === void 0 ? void 0 : _a.replace(').', '');
            this.toaster.presentErrorToast("ERROR.AUTHENTICATION." + errorKeyTrad, 1500);
            console.log(errorKeyTrad);
        });
    }
    onRedirectToRegister() {
        this.router.navigateByUrl('/register-home', { replaceUrl: true });
    }
};
LoginPage.ctorParameters = () => [
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__.ToasterService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 87047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/** Ionic CSS Variables **/\n:root {\n  --ion-color-white: #ffffff;\n  --ion-color-black: #000000;\n  /** primary color**/\n  --ion-color-primary: #ffde59;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #111111;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #ffeeae;\n  --ion-color-primary-tint: #ffde59;\n  /** secondary for text**/\n  --ion-color-secondary: #111111;\n  --ion-color-secondary-rgb: 17, 17, 17;\n  --ion-color-secondary-contrast: #ffde59;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0f0f0f;\n  --ion-color-secondary-tint: #292929;\n  /** tertiary used for input background and background icone**/\n  --ion-color-tertiary: #dbdbdb;\n  --ion-color-tertiary-rgb: 219, 219, 219;\n  --ion-color-tertiary-contrast: #000000;\n  --ion-color-tertiary-contrast-rgb: 0, 0, 0;\n  --ion-color-tertiary-shade: #c1c1c1;\n  --ion-color-tertiary-tint: #dfdfdf;\n  /** success **/\n  --ion-color-success: #01db72;\n  --ion-color-success-rgb: 1, 219, 114;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #01c164;\n  --ion-color-success-tint: #1adf80;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #ff1166;\n  --ion-color-danger-rgb: 255, 17, 102;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e00f5a;\n  --ion-color-danger-tint: #ff2976;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: rgba(255, 222, 89, 0.19);\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** Tab-bar **/\n  --ion-toolbar-background: white;\n  --text-font-style: \"IBMPlexSans\";\n  --title-font-style: \"IBMPlexSans\";\n}\n:root .spinner-bubbles {\n  color: var(--ion-color-primary);\n}\n:root ion-tab-button.tab-selected {\n  --color-selected: var(--ion-color-primary);\n}\n:root ion-segment {\n  --background: var(--ion-color-white);\n}\n:root ion-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --color-checked: black;\n  --indicator-transition: none;\n}\n:root ion-button {\n  text-transform: none;\n}\nion-content {\n  --background: var(--ion-color-secondary);\n}\nion-content .logo-container {\n  height: 4rem;\n  width: 100%;\n  text-align: center;\n}\nion-content .logo-container img {\n  height: 3rem;\n}\nion-content .card-container {\n  background: var(--ion-color-white);\n  height: calc(100% - 4rem);\n  position: relative;\n  align-items: normal;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: normal;\n  width: 100%;\n  border-radius: 1.5rem 1.5rem 0 0;\n}\nion-content .card-container .title-bar {\n  height: 5.75rem;\n  background: #fffcef;\n  border-radius: 1.5rem 1.5rem 0 0;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);\n  position: relative;\n  align-items: flex-start;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-end;\n}\nion-content .card-container .title-bar .title {\n  font-size: 1.75rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\nion-content .card-container .content {\n  margin-top: 1rem;\n}\nion-content .card-container .content .forgotten-password-text {\n  font-size: 0.625rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-black);\n  font-weight: 600;\n}\nion-content .card-container .content form ion-item ion-label {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: 400;\n}\nion-content .card-container .content form ion-item ion-icon {\n  margin-right: 1rem;\n  align-self: end;\n}\nion-content .card-container .content ion-icon {\n  align-self: center;\n}\nion-content .card-container .content .buttons-container {\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n  position: relative;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: center;\n}\nion-content .card-container .content .buttons-container ion-item {\n  display: flex;\n  align-items: center;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n  min-height: 2rem;\n  border-radius: 1.5rem;\n}\nion-content .card-container .content .buttons-container ion-item ion-icon {\n  margin-left: 8px;\n}\nion-content .card-container .content .buttons-container .register-email {\n  --background: var(--ion-color-primary);\n}\nion-content .card-container .content .buttons-container .text-or {\n  font-size: 0.875rem;\n  font-family: \"IBMPlexSans\";\n  color: #595959;\n  font-weight: 500;\n}\nion-content .card-container .content .buttons-container .register-google {\n  --background: #4285F4 ;\n}\nion-content .card-container .content .buttons-container .register-facebook {\n  --background: #3B5998;\n  margin-top: 1rem;\n}\nion-content .card-container .content .buttons-container .text-email {\n  font-size: 1.125rem;\n  font-family: \"IBMPlexSans\";\n  color: #111111;\n  font-weight: 600;\n}\nion-content .card-container .content .buttons-container .text-google {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-white);\n  font-weight: 500;\n}\nion-content .card-container .content .buttons-container .text-facebook {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-white);\n  font-weight: 500;\n}\nion-content .card-container .content .starting-text {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: #595959;\n  font-weight: 500;\n}\nion-content .card-container .content .starting-text .register-link {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: #111111;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwibG9naW4ucGFnZS5zY3NzIiwiLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsMEJBQUE7QUFvQkE7RUFDRSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLDZEQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsMENBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBTUEsY0FBQTtFQW1CQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7QUNwREY7QUQyQkU7RUFDRSwrQkFBQTtBQ3pCSjtBRDZCRTtFQUNFLDBDQUFBO0FDM0JKO0FEOEJFO0VBQ0Usb0NBQUE7QUM1Qko7QUQrQkU7RUFDRSw4Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUM3Qko7QURnQ0U7RUFDRSxvQkFBQTtBQzlCSjtBQXJGQTtFQUNFLHdDQUFBO0FBd0ZGO0FBdEZFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQXdGSjtBQXRGSTtFQUNFLFlBQUE7QUF3Rk47QUFwRkU7RUFDRSxrQ0FBQTtFQUNBLHlCQUFBO0VDeUJGLGtCQUR5SDtFQUV6SCxtQkR6QndCO0VDZ0N0QixhQUFBO0VBR0Ysc0JEbkNnQjtFQ29DaEIsaUJBYnNGO0VBY3RGLHVCRHJDZ0M7RUFDOUIsV0FBQTtFQUNBLGdDQUFBO0FBMkZKO0FBekZJO0VBQ0UsZUFBQTtFQUNBLG1CRFhNO0VDWU4sZ0NBQUE7RUFDQSx5Q0FBQTtFQ2dCSixrQkFEeUg7RUFFekgsdUJEaEIwQjtFQ3VCeEIsYUFBQTtFQUdGLHNCRDFCa0I7RUMyQmxCLGlCQWJzRjtFQWN0Rix5QkQ1QnNDO0FBZ0d4QztBQTlGTTtFQ2tGSixrQkRqRjRCO0VDa0Y1QiwwQkFGcUc7RUFHckcsaUNEbkZxQztFQ29GckMsZ0JBSmtGO0VEL0U1RSxtQkFBQTtBQW1HUjtBQS9GSTtFQUNFLGdCQUFBO0FBaUdOO0FBL0ZNO0VDeUVKLG1CRHhFNEI7RUN5RTVCLDBCQUZxRztFQUdyRyw2QkQxRXNDO0VDMkV0QyxnQkFKa0Y7QUQ2QnBGO0FBL0ZVO0VDNERSLGVEM0QrQjtFQzREL0IsMEJBRnNGO0VBR3RGLGlDRDdEcUM7RUM4RHJDLGdCQUptRTtBRDBDckU7QUFqR1U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFtR1o7QUE5Rk07RUFDRSxrQkFBQTtBQWdHUjtBQTdGTTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUNuQk4sa0JBRHlIO0VBRXpILG1CRG1CNEI7RUNaMUIsYUFBQTtFQUdGLHNCRFNvQjtFQ1JwQixpQkFic0Y7RUFjdEYsdUJET29DO0FBb0d0QztBQWxHUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQW9HVjtBQWxHVTtFQUNFLGdCQUFBO0FBb0daO0FBaEdRO0VBQ0Usc0NBQUE7QUFrR1Y7QUEvRlE7RUNnQk4sbUJEZjRCO0VDZ0I1QiwwQkFGd0Y7RUFHeEYsY0YzRlE7RUU0RlIsZ0JBSnFFO0FEc0Z2RTtBQWpHUTtFQUNFLHNCQUFBO0FBbUdWO0FBaEdRO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQWtHVjtBQS9GUTtFQ2lCTixtQkRoQjhCO0VDaUI5QiwwQkFGcUc7RUFHckcsY0YzR1E7RUU0R1IsZ0JBSmtGO0FEcUZwRjtBQWpHUTtFQ0ROLGVERTRCO0VDRDVCLDBCQUZ3RjtFQUd4Riw2QkFBQTtFQUNBLGdCQUpxRTtBRHlHdkU7QUFuR1E7RUNMTixlRE00QjtFQ0w1QiwwQkFGd0Y7RUFHeEYsNkJESWtDO0VDSGxDLGdCQUpxRTtBRCtHdkU7QUFwR007RUNWSixlRFcwQjtFQ1YxQiwwQkFGd0Y7RUFHeEYsY0YzRlE7RUU0RlIsZ0JBSnFFO0FEcUh2RTtBQXZHUTtFQ1FOLGVEUDBCO0VDUTFCLDBCQUZ1RjtFQUd2RixjRmxIUTtFRW1IUixnQkFKb0U7QURzR3RFIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cblxuLy8gY29sb3JzXG4kYmxhY2syOiAjNDA0MDNmO1xuJGdyYXk2MDA6ICMxMTExMTE7IC8vdXNlZFxuJGdyYXk1MDA6ICMyOTI5Mjk7IC8vdXNlZFxuJGdyYXk0MDA6ICM1OTU5NTk7IC8vdXNlZFxuJGdyYXkzMDA6ICM4ODg4ODg7IC8vdXNlZFxuJGdyYXkyMDA6ICNCOEI4Qjg7XG4kZ3JheTI6ICM5ZDljOTk7XG4kZ3JheTM6ICNkYmRiZGI7XG4keWVsbG93MTAwOiAjZmZmY2VmO1xuJHllbGxvdzIwMDogI2ZmZjVjZTtcbiR5ZWxsb3czOiAjZmRlODk2O1xuJHllbGxvdzQ6ICNmY2VlYjY7XG4keWVsbG93NTogI2ZiZjJkNDtcbiR5ZWxsb3c2OiAjRkZERTU5O1xuJHdoaXRlODA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiRkYXJrNzU6IHJnYmEoMCwgMCwgMCwgMC4yNSk7IC8vYnV0dG9ucyBzaGFkb3dcblxuOnJvb3Qge1xuICAtLWlvbi1jb2xvci13aGl0ZTogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItYmxhY2s6ICMwMDAwMDA7XG4gIC8qKiBwcmltYXJ5IGNvbG9yKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICNmZmRlNTk7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA1NiwgMTI4LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICMxMTExMTE7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjZmZlZWFlO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICNmZmRlNTk7XG5cbiAgLyoqIHNlY29uZGFyeSBmb3IgdGV4dCoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMxMTExMTE7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDE3LCAxNywgMTc7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZGU1OTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMGYwZjBmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzI5MjkyOTtcblxuICAvKiogdGVydGlhcnkgdXNlZCBmb3IgaW5wdXQgYmFja2dyb3VuZCBhbmQgYmFja2dyb3VuZCBpY29uZSoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2RiZGJkYjsgLy9zYW1lIGFzIGdyYXkzXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMjE5LCAyMTksIDIxOTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICNjMWMxYzE7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICNkZmRmZGY7XG5cbiAgLyoqIHN1Y2Nlc3MgKiovXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMwMWRiNzI7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiAxLCAyMTksIDExNDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMwMWMxNjQ7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzFhZGY4MDtcblxuICAvKiogd2FybmluZyAqKi9cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmYzQwOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMTk2LCA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYWMwODtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZjYTIyO1xuXG4gIC8qKiBkYW5nZXIgKiovXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ZmMTE2NjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjU1LCAxNywgMTAyO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2UwMGY1YTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmZjI5NzY7XG5cbiAgLyoqIGRhcmsgKiovXG4gIC0taW9uLWNvbG9yLWRhcms6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuXG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzkyOTQ5YztcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTQ2LCAxNDgsIDE1NjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4MDgyODk7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjOWQ5ZmE2O1xuXG4gIC8qKiBsaWdodCAqKi9cbiAgLS1pb24tY29sb3ItbGlnaHQ6IHJnYmEoMjU1LCAyMjIsIDg5LCAwLjE5KTtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcblxuICAuc3Bpbm5lci1idWJibGVzIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG5cbiAgLyoqIFRhYi1iYXIgKiovXG4gIGlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCB7XG4gICAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG5cbiAgaW9uLXNlZ21lbnQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgfVxuXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IGJsYWNrO1xuICAgIC0taW5kaWNhdG9yLXRyYW5zaXRpb246IG5vbmU7XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgfVxuXG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tdGV4dC1mb250LXN0eWxlOiAnSUJNUGxleFNhbnMnO1xuICAtLXRpdGxlLWZvbnQtc3R5bGU6ICdJQk1QbGV4U2Fucyc7XG59XG5cbi8vIFZlcmlmaWVkXG4kd2lkdGgtc2Q6IDMwMHB4OyAvL2ZvbGRcbiR3aWR0aC1tZDogMzgwcHg7IC8vaXBob25lIFNFXG4kd2lkdGgtbGQ6IDQxMnB4OyAvL2lwaG9uZSBYUlxuJHdpZHRoLXhsZDogNzY4cHg7IC8vaXBhZCIsIkBpbXBvcnQgJy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uL3RoZW1lL21peGlucy5zY3NzJztcblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuXG4gIC5sb2dvLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGltZyB7XG4gICAgICBoZWlnaHQ6IDNyZW07XG4gICAgfVxuICB9XG5cbiAgLmNhcmQtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNHJlbSk7XG4gICAgQGluY2x1ZGUgZmxleChjb2x1bW4sIG5vcm1hbCwgbm9ybWFsKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW0gMS41cmVtIDAgMDtcblxuICAgIC50aXRsZS1iYXIge1xuICAgICAgaGVpZ2h0OiA1Ljc1cmVtO1xuICAgICAgYmFja2dyb3VuZDogJHllbGxvdzEwMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbSAxLjVyZW0gMCAwO1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgICBAaW5jbHVkZSBmbGV4KGNvbHVtbiwgZmxleC1zdGFydCwgZmxleC1lbmQpO1xuXG4gICAgICAudGl0bGUge1xuICAgICAgICBAaW5jbHVkZSBzZW1pQm9sZFRleHQoMS43NXJlbSwgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XG5cbiAgICAgIC5mb3Jnb3R0ZW4tcGFzc3dvcmQtdGV4dCB7XG4gICAgICAgIEBpbmNsdWRlIHNlbWlCb2xkVGV4dCgwLjYyNXJlbSwgdmFyKC0taW9uLWNvbG9yLWJsYWNrKSlcbiAgICAgIH1cblxuICAgICAgZm9ybSB7XG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgQGluY2x1ZGUgcmVndWxhclRleHQoMXJlbSwgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogZW5kO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmJ1dHRvbnMtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgQGluY2x1ZGUgZmxleChjb2x1bW4sIGNlbnRlciwgY2VudGVyKTtcblxuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWluLWhlaWdodDogMnJlbTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG5cbiAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5yZWdpc3Rlci1lbWFpbCB7XG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dC1vciB7XG4gICAgICAgICAgQGluY2x1ZGUgbWVkaXVtVGV4dCgwLjg3NXJlbSwgJGdyYXk0MDApXG4gICAgICAgIH1cblxuICAgICAgICAucmVnaXN0ZXItZ29vZ2xlIHtcbiAgICAgICAgICAtLWJhY2tncm91bmQ6ICM0Mjg1RjRcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZWdpc3Rlci1mYWNlYm9vayB7XG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjM0I1OTk4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dC1lbWFpbCB7XG4gICAgICAgICAgQGluY2x1ZGUgc2VtaUJvbGRUZXh0KDEuMTI1cmVtLCAkZ3JheTYwMClcbiAgICAgICAgfVxuXG4gICAgICAgIC50ZXh0LWdvb2dsZSB7XG4gICAgICAgICAgQGluY2x1ZGUgbWVkaXVtVGV4dCgxcmVtLCB2YXIoLS1pb24tY29sb3Itd2hpdGUpKVxuICAgICAgICB9XG5cbiAgICAgICAgLnRleHQtZmFjZWJvb2sge1xuICAgICAgICAgIEBpbmNsdWRlIG1lZGl1bVRleHQoMXJlbSwgdmFyKC0taW9uLWNvbG9yLXdoaXRlKSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuc3RhcnRpbmctdGV4dCB7XG4gICAgICAgIEBpbmNsdWRlIG1lZGl1bVRleHQoMXJlbSwgJGdyYXk0MDApO1xuXG4gICAgICAgIC5yZWdpc3Rlci1saW5rIHtcbiAgICAgICAgICBAaW5jbHVkZSBib2xkVGV4dCgxcmVtLCAkZ3JheTYwMCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgfVxuXG4gIH1cbn0iLCJAbWl4aW4gdGl0bGUoJGZvbnQtc2l6ZTogMnJlbSxcbiAgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnLFxuICAkY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpLFxuICAkZm9udC13ZWlnaHQ6IGJvbGQpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5cblxuQG1peGluIHNpbXBsZV9idXR0b24oJHdpZHRoOiAyNSUsICRoZWlnaHQ6IDIuNXJlbSwgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSkge1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG4gIC0tY29sb3I6ICRjb2xvcjtcbn1cblxuQG1peGluIGljb24oJHdpZHRoOiAxcmVtLCAkaGVpZ2h0OiAxcmVtKSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbn1cblxuQG1peGluIHRleHQoJGZvbnQtc2l6ZTogMC44NzVyZW0sXG4gICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJyxcbiAgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSxcbiAgJGZvbnQtd2VpZ2h0OiBub3JtYWwpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gdGV4dC1vdmVyZmxvdygpIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cblxuLy92ZXJpZmllZFxuXG5AbWl4aW4gZmxleCgkZGlyZWN0aW9uOiByb3csICRhbGlnbi1pdGVtczogY2VudGVyLCAkanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0LCAkd3JhcDogbm93cmFwLCAkaW5saW5lOiBmYWxzZSwgJHBvc2l0aW9uOiByZWxhdGl2ZSkge1xuICBwb3NpdGlvbjogJHBvc2l0aW9uO1xuICBhbGlnbi1pdGVtczogJGFsaWduLWl0ZW1zO1xuXG4gIEBpZiAkaW5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgfVxuXG4gIEBlbHNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG4gIGZsZXgtd3JhcDogJHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnktY29udGVudDtcbn1cblxuQG1peGluIGJ1dHRvbigkd2lkdGg6IDI1JSwgJGhlaWdodDogMi41cmVtLCAkZm9udC1zaXplOiAwLjg3NXJlbSwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnLCAkZm9udC13ZWlnaHQ6IDYwMCkge1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbiAgbWluLWhlaWdodDogJGhlaWdodDtcbn1cblxuQG1peGluIHdoaXRlVGl0bGUoJGZvbnQtc2l6ZTogMS43NXJlbSwgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIHdoaXRlU3VidGl0bGUoJGZvbnQtc2l6ZTogMXJlbSwgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIGJsYWNrVGl0bGUoJGZvbnQtc2l6ZTogMS43NXJlbSwgJGNvbG9yOiAkZ3JheTUwMCwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJywgKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbkBtaXhpbiBibGFja1N1YnRpdGxlKCRmb250LXNpemU6IDFyZW0sICRjb2xvcjogJGdyYXk1MDAsICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gbWVkaXVtVGV4dCgkZm9udC1zaXplOiAwLjc1cmVtLCAkY29sb3I6ICRncmF5NTAwLCAkZm9udC13ZWlnaHQ6IDUwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIHJlZ3VsYXJUZXh0KCRmb250LXNpemU6IDFyZW0sICRjb2xvcjogJGdyYXk2MDAsICRmb250LXdlaWdodDogNDAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gc2VtaUJvbGRUZXh0KCRmb250LXNpemU6IDJyZW0sICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKSwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiBib2xkVGV4dCgkZm9udC1zaXplOiAxLjEyNXJlbSwgJGNvbG9yOiAkZ3JheTYwMCwgJGZvbnQtd2VpZ2h0OiA3MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59Il19 */";

/***/ }),

/***/ 41729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"safe-area\">\n  <div class=\"logo-container\">\n    <img src=\"../../assets/logos/logo-yellow_text-white.svg\" />\n  </div>\n  <div class=\"card-container\">\n    <div class=\"title-bar\">\n      <p class=\"ion-padding-horizontal ion-no-margin title\">{{'HOME.SIGNIN' | translate }}</p>\n    </div>\n    <div class=\"content ion-padding-horizontal\">\n      <form [formGroup]=\"loginForm\">\n        <ion-item lines=\"full\" class=\"ion-margin-bottom\">\n          <ion-icon src=\"assets/icon/mail.svg\" color=\"secondary\" slot=\"start\"></ion-icon>\n          <ion-label color=\"secondary\" position=\"floating\">{{'SHARED.EMAIL' | translate }} <span class=\"label-required\">*</span>\n          </ion-label>\n          <ion-input formControlName=\"email\" type=\"email\" placeholder=\"email@mail.com\"></ion-input>\n          <ion-note slot=\"error\" *ngIf=\"loginForm.get('email').touched && loginForm.get('email').errors?.required\" class=\"error-message\">\n            {{'ERROR.FORM.EMAIL_REQUIRED' | translate }}</ion-note>\n          <ion-note slot=\"error\" *ngIf=\"loginForm.get('email').touched && loginForm.get('email').errors?.email\" class=\"error-message\">\n            {{'ERROR.FORM.EMAIL_INVALID' | translate }}</ion-note>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-icon src=\"assets/icon/lock.svg\" color=\"secondary\" slot=\"start\"></ion-icon>\n          <ion-icon class=\"eye-icon\" [src]=\"isPasswordVisible ?  'assets/icon/eye-close.svg': 'assets/icon/eye-open.svg'\" slot=\"end\"\n            (click)=\"isPasswordVisible = !isPasswordVisible\">\n          </ion-icon>\n          <ion-label color=\"secondary\" position=\"floating\">{{'SHARED.PASSWORD' | translate }} <span class=\"label-required\">*</span>\n          </ion-label>\n          <ion-input formControlName=\"password\" [type]=\"isPasswordVisible ? 'text': 'password' \" placeholder=\"{{'SHARED.PASSWORD_PLACEHOLDER' | translate }}\"></ion-input>\n          <ion-note *ngIf=\"loginForm.get('password').touched && loginForm.get('password').errors?.required\" slot=\"error\">\n            {{'ERROR.FORM.PASSWORD_REQUIRED' | translate }}</ion-note>\n        </ion-item>\n        <p class=\"error-message ion-no-margin\" *ngIf=\"loginForm.errors?.invalid\">{{'ERROR.AUTHENTICATION.'+\n          loginForm.errors?.invalid\n          |\n          translate}}</p>\n        <p class=\"error-message ion-no-margin\" *ngIf=\"hasNetworkError\">{{'ERROR.AUTHENTICATION.network-request-failed'\n          |\n          translate}}</p>\n        <a class=\"forgotten-password-text\" [routerLink]=\"['forgotten-password']\">{{'SHARED.FORGOTTEN_PASSWORD' |\n          translate }}</a>\n      </form>\n      <div class=\"buttons-container\">\n        <ion-item class=\"register-email\" (click)=\"onLoginWithEmail()\" [disabled]=\"!loginForm.valid\">\n          <ion-icon class=\"ion-no-margin\" slot=\"start\" src=\"../../assets/icon/register/logo-email.svg\">\n          </ion-icon>\n          <ion-label class=\"ion-no-margin ion-text-center text-email\">{{'HOME.SIGNIN' |\n            translate}}</ion-label>\n        </ion-item>\n        <p class=\"ion-margin-vertical text-or\"> {{'HOME.OR' | translate }} </p>\n        <ion-item *ngFor=\"let provider of authProviders\" class=\"register-{{provider}}\" (click)=\"onLoginWithProvider(provider)\">\n          <ion-icon class=\"ion-no-margin\" slot=\"start\" src=\"../../assets/icon/register/logo-{{provider}}.svg\">\n          </ion-icon>\n          <ion-label class=\"ion-no-margin ion-text-center text-{{provider}}\">{{'HOME.SIGNIN_'+provider |\n            translate}}</ion-label>\n        </ion-item>\n      </div>\n      <p class=\"starting-text ion-text-center\">{{'HOME.STARTING' | translate}} <span class=\"register-link\" (click)=\"onRedirectToRegister()\">{{'HOME.SIGNUP' | translate}}</span></p>\n    </div>\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map