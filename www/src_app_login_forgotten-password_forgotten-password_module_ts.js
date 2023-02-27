"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_forgotten-password_forgotten-password_module_ts"],{

/***/ 91338:
/*!**************************************************************************!*\
  !*** ./src/app/login/forgotten-password/forgotten-password.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgottenPasswordComponent": () => (/* binding */ ForgottenPasswordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _forgotten_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotten-password.component.html?ngResource */ 88605);
/* harmony import */ var _forgotten_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotten-password.component.scss?ngResource */ 49823);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ 63947);
/* harmony import */ var src_shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/services/login.service */ 33130);







let ForgottenPasswordComponent = class ForgottenPasswordComponent {
    constructor(loginService, spinner) {
        this.loginService = loginService;
        this.spinner = spinner;
        this.isModalOpen = false;
    }
    ngOnInit() {
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]);
    }
    onReinitializeEmail() {
        const email = this.email.value;
        this.loginService.passwordRecover(email).then(() => {
            this.isModalOpen = true;
        })
            .catch((error) => {
            if (error.code.split('/')[1] === "user-not-found") {
                this.isModalOpen = true;
            }
            else {
                this.email.setErrors({ invalid: error.code.split('/')[1] });
            }
        });
    }
    ionViewDidEnter() {
        this.spinner.hide('appSpinner');
    }
};
ForgottenPasswordComponent.ctorParameters = () => [
    { type: src_shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerService }
];
ForgottenPasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-forgotten-password',
        template: _forgotten_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forgotten_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgottenPasswordComponent);



/***/ }),

/***/ 58203:
/*!***********************************************************************!*\
  !*** ./src/app/login/forgotten-password/forgotten-password.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgottenPasswordModule": () => (/* binding */ ForgottenPasswordModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _forgotten_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotten-password.component */ 91338);








const routes = [
    {
        path: '',
        component: _forgotten_password_component__WEBPACK_IMPORTED_MODULE_0__.ForgottenPasswordComponent
    },
];
let ForgottenPasswordModule = class ForgottenPasswordModule {
};
ForgottenPasswordModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_forgotten_password_component__WEBPACK_IMPORTED_MODULE_0__.ForgottenPasswordComponent],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes),
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            //SharedModule
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgottenPasswordModule);



/***/ }),

/***/ 49823:
/*!***************************************************************************************!*\
  !*** ./src/app/login/forgotten-password/forgotten-password.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "/** Ionic CSS Variables **/\n:root {\n  --ion-color-white: #ffffff;\n  --ion-color-black: #000000;\n  /** primary color**/\n  --ion-color-primary: #ffde59;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #111111;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #ffeeae;\n  --ion-color-primary-tint: #ffde59;\n  /** secondary for text**/\n  --ion-color-secondary: #111111;\n  --ion-color-secondary-rgb: 17, 17, 17;\n  --ion-color-secondary-contrast: #ffde59;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0f0f0f;\n  --ion-color-secondary-tint: #292929;\n  /** tertiary used for input background and background icone**/\n  --ion-color-tertiary: #dbdbdb;\n  --ion-color-tertiary-rgb: 219, 219, 219;\n  --ion-color-tertiary-contrast: #000000;\n  --ion-color-tertiary-contrast-rgb: 0, 0, 0;\n  --ion-color-tertiary-shade: #c1c1c1;\n  --ion-color-tertiary-tint: #dfdfdf;\n  /** success **/\n  --ion-color-success: #01db72;\n  --ion-color-success-rgb: 1, 219, 114;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #01c164;\n  --ion-color-success-tint: #1adf80;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #ff1166;\n  --ion-color-danger-rgb: 255, 17, 102;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e00f5a;\n  --ion-color-danger-tint: #ff2976;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: rgba(255, 222, 89, 0.19);\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** Tab-bar **/\n  --ion-toolbar-background: white;\n  --text-font-style: \"IBMPlexSans\";\n  --title-font-style: \"IBMPlexSans\";\n}\n:root .spinner-bubbles {\n  color: var(--ion-color-primary);\n}\n:root ion-tab-button.tab-selected {\n  --color-selected: var(--ion-color-primary);\n}\n:root ion-segment {\n  --background: var(--ion-color-white);\n}\n:root ion-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --color-checked: black;\n  --indicator-transition: none;\n}\n:root ion-button {\n  text-transform: none;\n}\n:host {\n  padding: 8px 16px 0 16px;\n  height: 100%;\n  width: 100%;\n}\n:host ion-title {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: #111111;\n  font-weight: 600;\n  margin: 0px;\n  text-align: center;\n}\n:host ion-content {\n  --padding-top: 24px;\n}\n:host ion-content .subtitle {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: #111111;\n  font-weight: 700;\n}\n:host ion-content .text-container {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: #292929;\n  font-weight: 400;\n}\n:host ion-content ion-item ion-label {\n  font-size: 0.875rem;\n  font-family: \"IBMPlexSans\";\n  color: #111111;\n  font-weight: 400;\n}\n:host ion-content ion-item ion-icon {\n  align-self: end;\n  margin-right: 16px;\n  height: 1.5rem;\n  width: 1.5rem;\n}\n:host ion-content ion-item ion-input {\n  --placeholder-color: $gray300;\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: #111111;\n  font-weight: 400;\n}\n:host ion-content ion-item ion-note {\n  margin-left: calc(1.5rem + 16px);\n}\n:host ion-content .buttons-container {\n  margin: 15rem 0 0 0;\n  text-align: right;\n}\n:host ion-content .buttons-container ion-button {\n  width: 60%;\n  height: 2.5rem;\n  font-family: \"IBMPlexSans\";\n  font-size: 1.125rem;\n  font-weight: 600;\n  min-height: 2.5rem;\n}\nion-footer {\n  background: var(--ion-color-white);\n}\nion-modal .modal-container {\n  height: 100%;\n}\nion-modal .modal-container ion-header {\n  height: 6.75rem;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\nion-modal .modal-container ion-header ion-toolbar {\n  padding: 16px;\n  height: 100%;\n  --background: #fffcef;\n  display: flex;\n  align-items: flex-end;\n}\nion-modal .modal-container ion-header ion-toolbar ion-title {\n  font-size: 1.75rem;\n  font-family: \"IBMPlexSans\";\n  color: #111111;\n  font-weight: 600;\n  margin: 0px;\n  text-align: left;\n}\nion-modal .modal-container .img-container {\n  width: 100%;\n  height: 8rem;\n  text-align: center;\n  margin-top: 3.75rem;\n  margin-bottom: 1.5rem;\n}\nion-modal .modal-container .img-container img {\n  height: 100%;\n}\nion-modal .modal-container .text {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: #292929;\n  font-weight: 400;\n}\nion-modal .modal-container .buttons-container {\n  margin: 8rem 0 0 0;\n  text-align: right;\n}\nion-modal .modal-container .buttons-container ion-button {\n  width: 60%;\n  height: 2.5rem;\n  font-family: \"IBMPlexSans\";\n  font-size: 1.125rem;\n  font-weight: 600;\n  min-height: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiZm9yZ290dGVuLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsMEJBQUE7QUFvQkE7RUFDRSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLDZEQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsMENBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBTUEsY0FBQTtFQW1CQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7QUNwREY7QUQyQkU7RUFDRSwrQkFBQTtBQ3pCSjtBRDZCRTtFQUNFLDBDQUFBO0FDM0JKO0FEOEJFO0VBQ0Usb0NBQUE7QUM1Qko7QUQrQkU7RUFDRSw4Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUM3Qko7QURnQ0U7RUFDRSxvQkFBQTtBQzlCSjtBQXJGQTtFQUNFLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUF3RkY7QUF0RkU7RUMyRUEsZUQxRXNCO0VDMkV0QiwwQkFGd0Y7RUFHeEYsY0Y5RVE7RUUrRVIsZ0JBSnFFO0VBS3JFLFdBQUE7RUQ3RUUsa0JBQUE7QUE0Rko7QUF6RkU7RUFDRSxtQkFBQTtBQTJGSjtBQXpGSTtFQzJFRixlRDFFMkI7RUMyRTNCLDBCQUZ3RjtFQUd4RixjRnRGUTtFRXVGUixnQkQ3RTJDO0FBOEY3QztBQTNGSTtFQ3FGRixlRHBGeUI7RUNxRnpCLDBCQUZzRjtFQUd0RixjRm5HUTtFRW9HUixnQkFKbUU7QURhckU7QUEzRk07RUMrRUosbUJEOUUyQjtFQytFM0IsMEJBRnNGO0VBR3RGLGNGcEdRO0VFcUdSLGdCQUptRTtBRG1CckU7QUE3Rk07RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQStGUjtBQTVGTTtFQUNFLDZCQUFBO0VDbUVOLGVBRDZCO0VBRTdCLDBCQUZzRjtFQUd0RixjRnBHUTtFRXFHUixnQkFKbUU7QURnQ3JFO0FBOUZNO0VBQ0UsZ0NBQUE7QUFnR1I7QUEzRkk7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FBNkZOO0FBM0ZNO0VDUUosVURQc0I7RUNRdEIsY0RSMkI7RUNTM0IsMEJBSDhFO0VBSTlFLG1CRFZtQztFQ1duQyxnQkFMMkc7RUFNM0csa0JEWjJCO0FBa0c3QjtBQTVGQTtFQUNFLGtDQUFBO0FBK0ZGO0FBekZFO0VBQ0UsWUFBQTtBQTRGSjtBQTFGSTtFQUNFLGVBQUE7RUFDQSwyQ0FBQTtBQTRGTjtBQTFGTTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUE0RlI7QUExRlE7RUNHTixrQkRGNEI7RUNHNUIsMEJBRndGO0VBR3hGLGNGOUVRO0VFK0VSLGdCQUpxRTtFQUtyRSxXQUFBO0VETFEsZ0JBQUE7QUFnR1Y7QUEzRkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQTZGTjtBQTNGTTtFQUNFLFlBQUE7QUE2RlI7QUF6Rkk7RUNNRixlREx5QjtFQ016QiwwQkFGc0Y7RUFHdEYsY0ZuR1E7RUVvR1IsZ0JBSm1FO0FEMEZyRTtBQTNGSTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUE2Rk47QUEzRk07RUMvQ0osVURnRHNCO0VDL0N0QixjRCtDMkI7RUM5QzNCLDBCQUg4RTtFQUk5RSxtQkQ2Q21DO0VDNUNuQyxnQkFMMkc7RUFNM0csa0JEMkMyQjtBQWtHN0IiLCJmaWxlIjoiZm9yZ290dGVuLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOlxuLy8gaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvXG5cbi8qKiBJb25pYyBDU1MgVmFyaWFibGVzICoqL1xuXG4vLyBjb2xvcnNcbiRibGFjazI6ICM0MDQwM2Y7XG4kZ3JheTYwMDogIzExMTExMTsgLy91c2VkXG4kZ3JheTUwMDogIzI5MjkyOTsgLy91c2VkXG4kZ3JheTQwMDogIzU5NTk1OTsgLy91c2VkXG4kZ3JheTMwMDogIzg4ODg4ODsgLy91c2VkXG4kZ3JheTIwMDogI0I4QjhCODtcbiRncmF5MjogIzlkOWM5OTtcbiRncmF5MzogI2RiZGJkYjtcbiR5ZWxsb3cxMDA6ICNmZmZjZWY7XG4keWVsbG93MjAwOiAjZmZmNWNlO1xuJHllbGxvdzM6ICNmZGU4OTY7XG4keWVsbG93NDogI2ZjZWViNjtcbiR5ZWxsb3c1OiAjZmJmMmQ0O1xuJHllbGxvdzY6ICNGRkRFNTk7XG4kd2hpdGU4MDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuJGRhcms3NTogcmdiYSgwLCAwLCAwLCAwLjI1KTsgLy9idXR0b25zIHNoYWRvd1xuXG46cm9vdCB7XG4gIC0taW9uLWNvbG9yLXdoaXRlOiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1ibGFjazogIzAwMDAwMDtcbiAgLyoqIHByaW1hcnkgY29sb3IqKi9cbiAgLS1pb24tY29sb3ItcHJpbWFyeTogI2ZmZGU1OTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDU2LCAxMjgsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogIzExMTExMTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICNmZmVlYWU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogI2ZmZGU1OTtcblxuICAvKiogc2Vjb25kYXJ5IGZvciB0ZXh0KiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzExMTExMTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogMTcsIDE3LCAxNztcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZkZTU5O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICMwZjBmMGY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjMjkyOTI5O1xuXG4gIC8qKiB0ZXJ0aWFyeSB1c2VkIGZvciBpbnB1dCBiYWNrZ3JvdW5kIGFuZCBiYWNrZ3JvdW5kIGljb25lKiovXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjZGJkYmRiOyAvL3NhbWUgYXMgZ3JheTNcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAyMTksIDIxOSwgMjE5O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogI2MxYzFjMTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogI2RmZGZkZjtcblxuICAvKiogc3VjY2VzcyAqKi9cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzAxZGI3MjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDEsIDIxOSwgMTE0O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzAxYzE2NDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjMWFkZjgwO1xuXG4gIC8qKiB3YXJuaW5nICoqL1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZjNDA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAxOTYsIDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBhYzA4O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmNhMjI7XG5cbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZmYxMTY2O1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNTUsIDE3LCAxMDI7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZTAwZjVhO1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2ZmMjk3NjtcblxuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XG5cbiAgLyoqIG1lZGl1bSAqKi9cbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTI5NDljO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNDYsIDE0OCwgMTU2O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzgwODI4OTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICM5ZDlmYTY7XG5cbiAgLyoqIGxpZ2h0ICoqL1xuICAtLWlvbi1jb2xvci1saWdodDogcmdiYSgyNTUsIDIyMiwgODksIDAuMTkpO1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xuXG4gIC5zcGlubmVyLWJ1YmJsZXMge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cblxuICAvKiogVGFiLWJhciAqKi9cbiAgaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIHtcbiAgICAtLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cblxuICBpb24tc2VnbWVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICB9XG5cbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tY29sb3ItY2hlY2tlZDogYmxhY2s7XG4gICAgLS1pbmRpY2F0b3ItdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB9XG5cbiAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS10ZXh0LWZvbnQtc3R5bGU6ICdJQk1QbGV4U2Fucyc7XG4gIC0tdGl0bGUtZm9udC1zdHlsZTogJ0lCTVBsZXhTYW5zJztcbn1cblxuLy8gVmVyaWZpZWRcbiR3aWR0aC1zZDogMzAwcHg7IC8vZm9sZFxuJHdpZHRoLW1kOiAzODBweDsgLy9pcGhvbmUgU0VcbiR3aWR0aC1sZDogNDEycHg7IC8vaXBob25lIFhSXG4kd2lkdGgteGxkOiA3NjhweDsgLy9pcGFkIiwiQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvdmFyaWFibGVzLnNjc3MnO1xuXG46aG9zdCB7XG4gIHBhZGRpbmc6IDhweCAxNnB4IDAgMTZweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcblxuICBpb24tdGl0bGUge1xuICAgIEBpbmNsdWRlIGJsYWNrVGl0bGUoMXJlbSwgJGdyYXk2MDApO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIGlvbi1jb250ZW50IHtcbiAgICAtLXBhZGRpbmctdG9wOiAyNHB4O1xuXG4gICAgLnN1YnRpdGxlIHtcbiAgICAgIEBpbmNsdWRlIGJsYWNrU3VidGl0bGUoMXJlbSwgJGdyYXk2MDAsIDcwMClcbiAgICB9XG5cbiAgICAudGV4dC1jb250YWluZXIge1xuICAgICAgQGluY2x1ZGUgcmVndWxhclRleHQoMXJlbSwgJGdyYXk1MDApO1xuICAgIH1cblxuICAgIGlvbi1pdGVtIHtcblxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgcmVndWxhclRleHQoMC44NzVyZW0pXG4gICAgICB9XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgYWxpZ24tc2VsZjogZW5kO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgICB3aWR0aDogMS41cmVtO1xuICAgICAgfVxuXG4gICAgICBpb24taW5wdXQge1xuICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAkZ3JheTMwMDtcbiAgICAgICAgQGluY2x1ZGUgcmVndWxhclRleHQoKVxuICAgICAgfVxuXG4gICAgICBpb24tbm90ZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDEuNXJlbSArIDE2cHgpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgLmJ1dHRvbnMtY29udGFpbmVyIHtcbiAgICAgIG1hcmdpbjogMTVyZW0gMCAwIDA7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcblxuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIEBpbmNsdWRlIGJ1dHRvbig2MCUsIDIuNXJlbSwgMS4xMjVyZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5pb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbn1cblxuaW9uLW1vZGFsIHtcbiAgLy8tLWhlaWdodDogODAlO1xuXG4gIC5tb2RhbC1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIGlvbi1oZWFkZXIge1xuICAgICAgaGVpZ2h0OiA2Ljc1cmVtO1xuICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcblxuICAgICAgaW9uLXRvb2xiYXIge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmNlZjsgLy95ZWxsb3cxMDBcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXG4gICAgICAgIGlvbi10aXRsZSB7XG4gICAgICAgICAgQGluY2x1ZGUgYmxhY2tUaXRsZSgxLjc1cmVtLCAkZ3JheTYwMCk7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5pbWctY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA4cmVtO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLXRvcDogMy43NXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcblxuICAgICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlXG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRleHQge1xuICAgICAgQGluY2x1ZGUgcmVndWxhclRleHQoMXJlbSwgJGdyYXk1MDApO1xuICAgIH1cblxuICAgIC5idXR0b25zLWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW46IDhyZW0gMCAwIDA7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcblxuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIEBpbmNsdWRlIGJ1dHRvbig2MCUsIDIuNXJlbSwgMS4xMjVyZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSIsIkBtaXhpbiB0aXRsZSgkZm9udC1zaXplOiAycmVtLFxuICAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycsXG4gICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSksXG4gICRmb250LXdlaWdodDogYm9sZCkge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cblxuXG5AbWl4aW4gc2ltcGxlX2J1dHRvbigkd2lkdGg6IDI1JSwgJGhlaWdodDogMi41cmVtLCAkY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpKSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbiAgLS1jb2xvcjogJGNvbG9yO1xufVxuXG5AbWl4aW4gaWNvbigkd2lkdGg6IDFyZW0sICRoZWlnaHQ6IDFyZW0pIHtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xufVxuXG5AbWl4aW4gdGV4dCgkZm9udC1zaXplOiAwLjg3NXJlbSxcbiAgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnLFxuICAkY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpLFxuICAkZm9udC13ZWlnaHQ6IG5vcm1hbCkge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiB0ZXh0LW92ZXJmbG93KCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuXG4vL3ZlcmlmaWVkXG5cbkBtaXhpbiBmbGV4KCRkaXJlY3Rpb246IHJvdywgJGFsaWduLWl0ZW1zOiBjZW50ZXIsICRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQsICR3cmFwOiBub3dyYXAsICRpbmxpbmU6IGZhbHNlLCAkcG9zaXRpb246IHJlbGF0aXZlKSB7XG4gIHBvc2l0aW9uOiAkcG9zaXRpb247XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ24taXRlbXM7XG5cbiAgQGlmICRpbmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB9XG5cbiAgQGVsc2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbiAgZmxleC13cmFwOiAkd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeS1jb250ZW50O1xufVxuXG5AbWl4aW4gYnV0dG9uKCR3aWR0aDogMjUlLCAkaGVpZ2h0OiAyLjVyZW0sICRmb250LXNpemU6IDAuODc1cmVtLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycsICRmb250LXdlaWdodDogNjAwKSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xuICBtaW4taGVpZ2h0OiAkaGVpZ2h0O1xufVxuXG5AbWl4aW4gd2hpdGVUaXRsZSgkZm9udC1zaXplOiAxLjc1cmVtLCAkY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSksICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gd2hpdGVTdWJ0aXRsZSgkZm9udC1zaXplOiAxcmVtLCAkY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSksICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gYmxhY2tUaXRsZSgkZm9udC1zaXplOiAxLjc1cmVtLCAkY29sb3I6ICRncmF5NTAwLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnLCApIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xuICBtYXJnaW46IDBweDtcbn1cblxuQG1peGluIGJsYWNrU3VidGl0bGUoJGZvbnQtc2l6ZTogMXJlbSwgJGNvbG9yOiAkZ3JheTUwMCwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiBtZWRpdW1UZXh0KCRmb250LXNpemU6IDAuNzVyZW0sICRjb2xvcjogJGdyYXk1MDAsICRmb250LXdlaWdodDogNTAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gcmVndWxhclRleHQoJGZvbnQtc2l6ZTogMXJlbSwgJGNvbG9yOiAkZ3JheTYwMCwgJGZvbnQtd2VpZ2h0OiA0MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiBzZW1pQm9sZFRleHQoJGZvbnQtc2l6ZTogMnJlbSwgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIGJvbGRUZXh0KCRmb250LXNpemU6IDEuMTI1cmVtLCAkY29sb3I6ICRncmF5NjAwLCAkZm9udC13ZWlnaHQ6IDcwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn0iXX0= */";

/***/ }),

/***/ 88605:
/*!***************************************************************************************!*\
  !*** ./src/app/login/forgotten-password/forgotten-password.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header collapse=\"fade\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\" icon=\"chevron-back-outline\" defaultHref=\"/login\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'FORGOTTEN_PASSWORD.TITLE' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <p class=\"subtitle ion-no-margin\">{{'SHARED.FORGOTTEN_PASSWORD' | translate }}</p>\n  <p class=\"text-container ion-padding-vertical ion-no-margin\">\n    {{'FORGOTTEN_PASSWORD.INPUT_ADVICE' | translate}}<br />\n  </p>\n  <ion-item>\n    <ion-icon src=\"assets/icon/mail.svg\" color=\"secondary\" slot=\"start\"></ion-icon>\n    <ion-label position=\"floating\">{{'SHARED.EMAIL' | translate }} <span class=\"label-required\">*</span></ion-label>\n    <ion-input [formControl]=\"email\" type=\"email\" placeholder=\"email@mail.com\"></ion-input>\n    <ion-note slot=\"error\" *ngIf=\"email.touched && email.errors?.required\" class=\"error-message\">\n      {{'ERROR.FORM.EMAIL_REQUIRED' | translate }}</ion-note>\n    <ion-note slot=\"error\" *ngIf=\"email.touched && email.errors?.email\" class=\"error-message\">\n      {{'ERROR.FORM.EMAIL_INVALID' | translate }}</ion-note>\n  </ion-item>\n  <p class=\"error-message ion-no-margin\" *ngIf=\"email.errors?.invalid\">{{'ERROR.AUTHENTICATION.'+\n    email.errors?.invalid | translate}}</p>\n  <div class=\"buttons-container\">\n    <ion-button color=\"primary\" [disabled]=\"!email.valid\" (click)=\"onReinitializeEmail()\" shape=\"round\">\n      {{'FORGOTTEN_PASSWORD.REINIT' | translate}}\n    </ion-button>\n  </div>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n</ion-footer>\n<ion-modal [isOpen]=\"isModalOpen\" (ionModalWillDismiss)=\"isModalOpen = false\">\n  <ng-template>\n    <div class=\"modal-container\">\n      <ion-header>\n        <ion-toolbar>\n          <ion-title>{{'SHARED.FORGOTTEN_PASSWORD' | translate }}</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content class=\"ion-padding-horizontal\">\n        <div class=\"img-container\">\n          <img src=\"assets/images/forgotten-password-img.svg\" />\n        </div>\n        <p class=\"text\">{{'FORGOTTEN_PASSWORD.EMAIL_SENT' | translate}}</p>\n        <div class=\"buttons-container\">\n          <ion-button color=\"primary\" (click)=\"isModalOpen = false\" shape=\"round\">\n            {{'SHARED.CLOSE' | translate}}\n          </ion-button>\n        </div>\n      </ion-content>\n    </div>\n  </ng-template>\n</ion-modal>";

/***/ })

}]);
//# sourceMappingURL=src_app_login_forgotten-password_forgotten-password_module_ts.js.map