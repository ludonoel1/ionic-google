"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_onboarding-beyond_onboarding-beyond_page_module_ts"],{

/***/ 22673:
/*!***********************************************************************!*\
  !*** ./src/app/onboarding-beyond/onboarding-beyond-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnboardingBeyondPageRoutingModule": () => (/* binding */ OnboardingBeyondPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _onboarding_beyond_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onboarding-beyond.page */ 69367);




const routes = [
    {
        path: '',
        component: _onboarding_beyond_page__WEBPACK_IMPORTED_MODULE_0__.OnboardingBeyondPage,
    },
];
let OnboardingBeyondPageRoutingModule = class OnboardingBeyondPageRoutingModule {
};
OnboardingBeyondPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OnboardingBeyondPageRoutingModule);



/***/ }),

/***/ 98431:
/*!********************************************************************!*\
  !*** ./src/app/onboarding-beyond/onboarding-beyond.page.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnboardingBeyondPageModule": () => (/* binding */ OnboardingBeyondPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/shared/shared.module */ 8395);
/* harmony import */ var _onboarding_beyond_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboarding-beyond-routing.module */ 22673);
/* harmony import */ var _onboarding_beyond_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onboarding-beyond.page */ 69367);





let OnboardingBeyondPageModule = class OnboardingBeyondPageModule {
};
OnboardingBeyondPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_onboarding_beyond_page__WEBPACK_IMPORTED_MODULE_2__.OnboardingBeyondPage],
        imports: [src_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _onboarding_beyond_routing_module__WEBPACK_IMPORTED_MODULE_1__.OnboardingBeyondPageRoutingModule],
    })
], OnboardingBeyondPageModule);



/***/ }),

/***/ 69367:
/*!*************************************************************!*\
  !*** ./src/app/onboarding-beyond/onboarding-beyond.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnboardingBeyondPage": () => (/* binding */ OnboardingBeyondPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _onboarding_beyond_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onboarding-beyond.page.html?ngResource */ 76418);
/* harmony import */ var _onboarding_beyond_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboarding-beyond.page.scss?ngResource */ 93647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_shared_utils_function_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/utils/function.utils */ 44924);






let OnboardingBeyondPage = class OnboardingBeyondPage {
    constructor(router) {
        this.router = router;
    }
    ionViewDidEnter() {
        (0,src_shared_utils_function_utils__WEBPACK_IMPORTED_MODULE_2__.setStyleStatusBar)("dark");
    }
    onRedirectToMain() {
        this.router.navigateByUrl('/main', { replaceUrl: true });
    }
};
OnboardingBeyondPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
OnboardingBeyondPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-onboarding-beyond.page',
        template: _onboarding_beyond_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_onboarding_beyond_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OnboardingBeyondPage);



/***/ }),

/***/ 93647:
/*!**************************************************************************!*\
  !*** ./src/app/onboarding-beyond/onboarding-beyond.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "/** Ionic CSS Variables **/\n:root {\n  --ion-color-white: #ffffff;\n  --ion-color-black: #000000;\n  /** primary color**/\n  --ion-color-primary: #ffde59;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #111111;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #ffeeae;\n  --ion-color-primary-tint: #ffde59;\n  /** secondary for text**/\n  --ion-color-secondary: #111111;\n  --ion-color-secondary-rgb: 17, 17, 17;\n  --ion-color-secondary-contrast: #ffde59;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0f0f0f;\n  --ion-color-secondary-tint: #292929;\n  /** tertiary used for input background and background icone**/\n  --ion-color-tertiary: #dbdbdb;\n  --ion-color-tertiary-rgb: 219, 219, 219;\n  --ion-color-tertiary-contrast: #000000;\n  --ion-color-tertiary-contrast-rgb: 0, 0, 0;\n  --ion-color-tertiary-shade: #c1c1c1;\n  --ion-color-tertiary-tint: #dfdfdf;\n  /** success **/\n  --ion-color-success: #01db72;\n  --ion-color-success-rgb: 1, 219, 114;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #01c164;\n  --ion-color-success-tint: #1adf80;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #ff1166;\n  --ion-color-danger-rgb: 255, 17, 102;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e00f5a;\n  --ion-color-danger-tint: #ff2976;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: rgba(255, 222, 89, 0.19);\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** Tab-bar **/\n  --ion-toolbar-background: white;\n  --text-font-style: \"IBMPlexSans\";\n  --title-font-style: \"IBMPlexSans\";\n}\n:root .spinner-bubbles {\n  color: var(--ion-color-primary);\n}\n:root ion-tab-button.tab-selected {\n  --color-selected: var(--ion-color-primary);\n}\n:root ion-segment {\n  --background: var(--ion-color-white);\n}\n:root ion-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --color-checked: black;\n  --indicator-transition: none;\n}\n:root ion-button {\n  text-transform: none;\n}\nion-content {\n  --background: var(--ion-color-secondary);\n  --padding-top: 8px;\n  --padding-bottom: 0px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\nion-content .header {\n  height: 3rem;\n  text-align: center;\n}\nion-content .animation-container {\n  margin-top: 7rem;\n  height: 10rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\nion-content .animation-container .title {\n  font-size: 2rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-white);\n  font-weight: 700;\n}\nion-content .beyond-text-container {\n  margin-top: 4rem;\n  margin-bottom: 2.5rem;\n}\nion-content .beyond-text-container .title {\n  font-size: 1.5rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-white);\n  font-weight: 600;\n}\nion-content .beyond-text-container .subtitle {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-white);\n  font-weight: 400;\n}\nion-content .beyond-text-container .subtitle .text-yellow {\n  color: var(--ion-color-primary);\n}\nion-content .buttons-container {\n  width: 100%;\n  height: 104px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\nion-content .buttons-container ion-button {\n  width: 100%;\n  height: 2.5rem;\n  font-family: \"IBMPlexSans\";\n  font-size: 1.125rem;\n  font-weight: 600;\n  min-height: 2.5rem;\n  margin: 0px;\n}\nion-content .buttons-container .black-button {\n  --background: var(--ion-color-secondary);\n  color: var(--ion-color-primary);\n}\n.wrapper {\n  height: 7rem;\n  width: 7rem;\n}\n.checkmark__circle {\n  stroke-dasharray: 166;\n  stroke-dashoffset: 166;\n  stroke-width: 3;\n  stroke-miterlimit: 10;\n  stroke: #ffde59;\n  fill: #111111;\n  animation: stroke 1s cubic-bezier(0.65, 0, 0.45, 1) forwards;\n}\n.checkmark {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  display: block;\n  stroke-width: 3;\n  stroke: #ffde59;\n  stroke-miterlimit: 10;\n  animation: fill 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both;\n}\n.checkmark__check {\n  transform-origin: 50% 50%;\n  stroke-dasharray: 48;\n  stroke-dashoffset: 48;\n  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;\n}\n@keyframes stroke {\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwib25ib2FyZGluZy1iZXlvbmQucGFnZS5zY3NzIiwiLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsMEJBQUE7QUFvQkE7RUFDRSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLDZEQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsMENBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBTUEsY0FBQTtFQW1CQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7QUNwREY7QUQyQkU7RUFDRSwrQkFBQTtBQ3pCSjtBRDZCRTtFQUNFLDBDQUFBO0FDM0JKO0FEOEJFO0VBQ0Usb0NBQUE7QUM1Qko7QUQrQkU7RUFDRSw4Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUM3Qko7QURnQ0U7RUFDRSxvQkFBQTtBQzlCSjtBQXJGQTtFQUNFLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUF3RkY7QUF0RkU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUF3Rko7QUFyRkU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBdUZKO0FBckZJO0VDOENGLGVEN0N3QjtFQzhDeEIsMEJBRnNHO0VBR3RHLDZCRC9DOEI7RUNnRDlCLGdCRGhEc0Q7QUEwRnhEO0FBdEZFO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBQXdGSjtBQXRGSTtFQ3FDRixpQkRwQ3dCO0VDcUN4QiwwQkFGc0c7RUFHdEcsNkJBSDZDO0VBSTdDLGdCQUptRjtBRHdEckY7QUF4Rkk7RUNxRUYsZURwRXlCO0VDcUV6QiwwQkFGc0Y7RUFHdEYsNkJEdEUrQjtFQ3VFL0IsZ0JBSm1FO0FEMEJyRTtBQTNGTTtFQUNFLCtCQUFBO0FBNkZSO0FBeEZFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBMEZKO0FBeEZJO0VDT0YsV0ROb0I7RUNPcEIsY0RQMEI7RUNRMUIsMEJBSDhFO0VBSTlFLG1CRFRrQztFQ1VsQyxnQkFMMkc7RUFNM0csa0JEWDBCO0VBQ3RCLFdBQUE7QUErRk47QUE1Rkk7RUFDRSx3Q0FBQTtFQUNBLCtCQUFBO0FBOEZOO0FBekZBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUE0RkY7QUF6RkE7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSw0REFBQTtBQTRGRjtBQXpGQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdGQUFBO0FBNEZGO0FBekZBO0VBQ0UseUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUVBQUE7QUE0RkY7QUF6RkE7RUFDRTtJQUNFLG9CQUFBO0VBNEZGO0FBQ0YiLCJmaWxlIjoib25ib2FyZGluZy1iZXlvbmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOlxuLy8gaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvXG5cbi8qKiBJb25pYyBDU1MgVmFyaWFibGVzICoqL1xuXG4vLyBjb2xvcnNcbiRibGFjazI6ICM0MDQwM2Y7XG4kZ3JheTYwMDogIzExMTExMTsgLy91c2VkXG4kZ3JheTUwMDogIzI5MjkyOTsgLy91c2VkXG4kZ3JheTQwMDogIzU5NTk1OTsgLy91c2VkXG4kZ3JheTMwMDogIzg4ODg4ODsgLy91c2VkXG4kZ3JheTIwMDogI0I4QjhCODtcbiRncmF5MjogIzlkOWM5OTtcbiRncmF5MzogI2RiZGJkYjtcbiR5ZWxsb3cxMDA6ICNmZmZjZWY7XG4keWVsbG93MjAwOiAjZmZmNWNlO1xuJHllbGxvdzM6ICNmZGU4OTY7XG4keWVsbG93NDogI2ZjZWViNjtcbiR5ZWxsb3c1OiAjZmJmMmQ0O1xuJHllbGxvdzY6ICNGRkRFNTk7XG4kd2hpdGU4MDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuJGRhcms3NTogcmdiYSgwLCAwLCAwLCAwLjI1KTsgLy9idXR0b25zIHNoYWRvd1xuXG46cm9vdCB7XG4gIC0taW9uLWNvbG9yLXdoaXRlOiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1ibGFjazogIzAwMDAwMDtcbiAgLyoqIHByaW1hcnkgY29sb3IqKi9cbiAgLS1pb24tY29sb3ItcHJpbWFyeTogI2ZmZGU1OTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDU2LCAxMjgsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogIzExMTExMTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICNmZmVlYWU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogI2ZmZGU1OTtcblxuICAvKiogc2Vjb25kYXJ5IGZvciB0ZXh0KiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzExMTExMTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogMTcsIDE3LCAxNztcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZkZTU5O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICMwZjBmMGY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjMjkyOTI5O1xuXG4gIC8qKiB0ZXJ0aWFyeSB1c2VkIGZvciBpbnB1dCBiYWNrZ3JvdW5kIGFuZCBiYWNrZ3JvdW5kIGljb25lKiovXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjZGJkYmRiOyAvL3NhbWUgYXMgZ3JheTNcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAyMTksIDIxOSwgMjE5O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogI2MxYzFjMTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogI2RmZGZkZjtcblxuICAvKiogc3VjY2VzcyAqKi9cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzAxZGI3MjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDEsIDIxOSwgMTE0O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzAxYzE2NDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjMWFkZjgwO1xuXG4gIC8qKiB3YXJuaW5nICoqL1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZjNDA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAxOTYsIDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBhYzA4O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmNhMjI7XG5cbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZmYxMTY2O1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNTUsIDE3LCAxMDI7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZTAwZjVhO1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2ZmMjk3NjtcblxuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XG5cbiAgLyoqIG1lZGl1bSAqKi9cbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTI5NDljO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNDYsIDE0OCwgMTU2O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzgwODI4OTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICM5ZDlmYTY7XG5cbiAgLyoqIGxpZ2h0ICoqL1xuICAtLWlvbi1jb2xvci1saWdodDogcmdiYSgyNTUsIDIyMiwgODksIDAuMTkpO1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xuXG4gIC5zcGlubmVyLWJ1YmJsZXMge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cblxuICAvKiogVGFiLWJhciAqKi9cbiAgaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIHtcbiAgICAtLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cblxuICBpb24tc2VnbWVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICB9XG5cbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tY29sb3ItY2hlY2tlZDogYmxhY2s7XG4gICAgLS1pbmRpY2F0b3ItdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB9XG5cbiAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS10ZXh0LWZvbnQtc3R5bGU6ICdJQk1QbGV4U2Fucyc7XG4gIC0tdGl0bGUtZm9udC1zdHlsZTogJ0lCTVBsZXhTYW5zJztcbn1cblxuLy8gVmVyaWZpZWRcbiR3aWR0aC1zZDogMzAwcHg7IC8vZm9sZFxuJHdpZHRoLW1kOiAzODBweDsgLy9pcGhvbmUgU0VcbiR3aWR0aC1sZDogNDEycHg7IC8vaXBob25lIFhSXG4kd2lkdGgteGxkOiA3NjhweDsgLy9pcGFkIiwiQGltcG9ydCAnLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vdGhlbWUvdmFyaWFibGVzLnNjc3MnO1xuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tcGFkZGluZy10b3A6IDhweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG5cbiAgLmhlYWRlciB7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5hbmltYXRpb24tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA3cmVtO1xuICAgIGhlaWdodDogMTByZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgLnRpdGxlIHtcbiAgICAgIEBpbmNsdWRlIHdoaXRlVGl0bGUoMnJlbSwgdmFyKC0taW9uLWNvbG9yLXdoaXRlKSwgNzAwKTtcbiAgICB9XG4gIH1cblxuICAuYmV5b25kLXRleHQtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcblxuICAgIC50aXRsZSB7XG4gICAgICBAaW5jbHVkZSB3aGl0ZVRpdGxlKDEuNXJlbSk7XG4gICAgfVxuXG4gICAgLnN1YnRpdGxlIHtcbiAgICAgIEBpbmNsdWRlIHJlZ3VsYXJUZXh0KDFyZW0sIHZhcigtLWlvbi1jb2xvci13aGl0ZSkpO1xuXG4gICAgICAudGV4dC15ZWxsb3cge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmJ1dHRvbnMtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgQGluY2x1ZGUgYnV0dG9uKDEwMCUsIDIuNXJlbSwgMS4xMjVyZW0pO1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuXG4gICAgLmJsYWNrLWJ1dHRvbiB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB9XG4gIH1cbn1cblxuLndyYXBwZXIge1xuICBoZWlnaHQ6IDdyZW07XG4gIHdpZHRoOiA3cmVtO1xufVxuXG4uY2hlY2ttYXJrX19jaXJjbGUge1xuICBzdHJva2UtZGFzaGFycmF5OiAxNjY7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAxNjY7XG4gIHN0cm9rZS13aWR0aDogMztcbiAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwO1xuICBzdHJva2U6ICNmZmRlNTk7XG4gIGZpbGw6ICMxMTExMTE7XG4gIGFuaW1hdGlvbjogc3Ryb2tlIDFzIGN1YmljLWJlemllcigwLjY1LCAwLCAwLjQ1LCAxKSBmb3J3YXJkc1xufVxuXG4uY2hlY2ttYXJrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgc3Ryb2tlLXdpZHRoOiAzO1xuICBzdHJva2U6ICNmZmRlNTk7XG4gIHN0cm9rZS1taXRlcmxpbWl0OiAxMDtcbiAgYW5pbWF0aW9uOiBmaWxsIC40cyBlYXNlLWluLW91dCAuNHMgZm9yd2FyZHMsIHNjYWxlIC4zcyBlYXNlLWluLW91dCAuOXMgYm90aFxufVxuXG4uY2hlY2ttYXJrX19jaGVjayB7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDQ4O1xuICBzdHJva2UtZGFzaG9mZnNldDogNDg7XG4gIGFuaW1hdGlvbjogc3Ryb2tlIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjUsIDAsIDAuNDUsIDEpIDAuOHMgZm9yd2FyZHNcbn1cblxuQGtleWZyYW1lcyBzdHJva2Uge1xuICAxMDAlIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMFxuICB9XG59IiwiQG1peGluIHRpdGxlKCRmb250LXNpemU6IDJyZW0sXG4gICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJyxcbiAgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSxcbiAgJGZvbnQtd2VpZ2h0OiBib2xkKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuXG5cbkBtaXhpbiBzaW1wbGVfYnV0dG9uKCR3aWR0aDogMjUlLCAkaGVpZ2h0OiAyLjVyZW0sICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkpIHtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xuICAtLWNvbG9yOiAkY29sb3I7XG59XG5cbkBtaXhpbiBpY29uKCR3aWR0aDogMXJlbSwgJGhlaWdodDogMXJlbSkge1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG59XG5cbkBtaXhpbiB0ZXh0KCRmb250LXNpemU6IDAuODc1cmVtLFxuICAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycsXG4gICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSksXG4gICRmb250LXdlaWdodDogbm9ybWFsKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIHRleHQtb3ZlcmZsb3coKSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5cbi8vdmVyaWZpZWRcblxuQG1peGluIGZsZXgoJGRpcmVjdGlvbjogcm93LCAkYWxpZ24taXRlbXM6IGNlbnRlciwgJGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCwgJHdyYXA6IG5vd3JhcCwgJGlubGluZTogZmFsc2UsICRwb3NpdGlvbjogcmVsYXRpdmUpIHtcbiAgcG9zaXRpb246ICRwb3NpdGlvbjtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbi1pdGVtcztcblxuICBAaWYgJGlubGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIH1cblxuICBAZWxzZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xuICBmbGV4LXdyYXA6ICR3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5LWNvbnRlbnQ7XG59XG5cbkBtaXhpbiBidXR0b24oJHdpZHRoOiAyNSUsICRoZWlnaHQ6IDIuNXJlbSwgJGZvbnQtc2l6ZTogMC44NzVyZW0sICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJywgJGZvbnQtd2VpZ2h0OiA2MDApIHtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG4gIG1pbi1oZWlnaHQ6ICRoZWlnaHQ7XG59XG5cbkBtaXhpbiB3aGl0ZVRpdGxlKCRmb250LXNpemU6IDEuNzVyZW0sICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKSwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiB3aGl0ZVN1YnRpdGxlKCRmb250LXNpemU6IDFyZW0sICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKSwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiBibGFja1RpdGxlKCRmb250LXNpemU6IDEuNzVyZW0sICRjb2xvcjogJGdyYXk1MDAsICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycsICkge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5AbWl4aW4gYmxhY2tTdWJ0aXRsZSgkZm9udC1zaXplOiAxcmVtLCAkY29sb3I6ICRncmF5NTAwLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIG1lZGl1bVRleHQoJGZvbnQtc2l6ZTogMC43NXJlbSwgJGNvbG9yOiAkZ3JheTUwMCwgJGZvbnQtd2VpZ2h0OiA1MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiByZWd1bGFyVGV4dCgkZm9udC1zaXplOiAxcmVtLCAkY29sb3I6ICRncmF5NjAwLCAkZm9udC13ZWlnaHQ6IDQwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIHNlbWlCb2xkVGV4dCgkZm9udC1zaXplOiAycmVtLCAkY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSksICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gYm9sZFRleHQoJGZvbnQtc2l6ZTogMS4xMjVyZW0sICRjb2xvcjogJGdyYXk2MDAsICRmb250LXdlaWdodDogNzAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufSJdfQ== */";

/***/ }),

/***/ 76418:
/*!**************************************************************************!*\
  !*** ./src/app/onboarding-beyond/onboarding-beyond.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"safe-area\">\n  <div class=\"header\">\n    <img src=\"../../assets/logos/logo-yellow_text-white.svg\" />\n  </div>\n  <div class=\"animation-container\">\n    <div class=\"wrapper\">\n      <svg class=\"checkmark\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 52 52\">\n        <circle class=\"checkmark__circle\" cx=\"26\" cy=\"26\" r=\"25\" fill=\"none\" />\n        <path class=\"checkmark__check\" fill=\"none\" d=\"M14.1 27.2l7.1 7.2 16.7-16.8\" />\n      </svg>\n    </div>\n    <p class=\"title ion-no-margin\">{{'SHARED.CONGRATS' | translate }}</p>\n  </div>\n  <!--<div class=\"beyond-text-container\">\n    <p class=\"title\">Pour aller plus loin</p>\n    <p class=\"subtitle\">Nous vous invitons à compléter vos informations pour une expérience toujours plus <span\n        class=\"text-yellow\">personnalisée et pertinente !</span></p>\n  </div>-->\n\n  <div class=\"buttons-container\">\n    <ion-button shape=\"round\" expand=\"block\" (click)=\"onRedirectToMain()\">\n      <span>{{'SHARED.CONTINU' | translate }}</span>\n    </ion-button>\n    <!--<ion-button shape=\"round\" expand=\"block\" [routerLink]=\"['/onboarding/morphology']\">\n      <span>Continuer</span>\n    </ion-button>-->\n    <!--<ion-button class=\"black-button\" shape=\"round\" expand=\"block\" [routerLink]=\"['/main']\">\n      <span>Plus tard</span>\n    </ion-button>-->\n  </div>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_onboarding-beyond_onboarding-beyond_page_module_ts.js.map