"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_welcome-features_welcome-features_module_ts"],{

/***/ 12496:
/*!*********************************************************************!*\
  !*** ./src/app/welcome-features/welcome-features-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeFeaturesRoutingModule": () => (/* binding */ WelcomeFeaturesRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _welcome_features_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome-features.component */ 23359);




const routes = [
    {
        path: '',
        component: _welcome_features_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeFeaturesComponent,
    },
];
let WelcomeFeaturesRoutingModule = class WelcomeFeaturesRoutingModule {
};
WelcomeFeaturesRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WelcomeFeaturesRoutingModule);



/***/ }),

/***/ 23359:
/*!****************************************************************!*\
  !*** ./src/app/welcome-features/welcome-features.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeFeaturesComponent": () => (/* binding */ WelcomeFeaturesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _welcome_features_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome-features.component.html?ngResource */ 17873);
/* harmony import */ var _welcome_features_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome-features.component.scss?ngResource */ 54431);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ 63947);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.constants */ 2976);






let WelcomeFeaturesComponent = class WelcomeFeaturesComponent {
    constructor(spinner) {
        this.spinner = spinner;
        this.features = _app_constants__WEBPACK_IMPORTED_MODULE_2__.AuthenticationConstants.welcome_features;
    }
    ionViewDidEnter() {
        this.spinner.hide("appSpinner");
    }
};
WelcomeFeaturesComponent.ctorParameters = () => [
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__.NgxSpinnerService }
];
WelcomeFeaturesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-welcome-features',
        template: _welcome_features_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_welcome_features_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WelcomeFeaturesComponent);



/***/ }),

/***/ 13485:
/*!*************************************************************!*\
  !*** ./src/app/welcome-features/welcome-features.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeFeaturesModule": () => (/* binding */ WelcomeFeaturesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/shared/shared.module */ 8395);
/* harmony import */ var _welcome_features_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome-features.component */ 23359);
/* harmony import */ var _welcome_features_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome-features-routing.module */ 12496);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/angular */ 341);






let WelcomeFeaturesModule = class WelcomeFeaturesModule {
};
WelcomeFeaturesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_welcome_features_component__WEBPACK_IMPORTED_MODULE_1__.WelcomeFeaturesComponent],
        imports: [
            src_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _welcome_features_routing_module__WEBPACK_IMPORTED_MODULE_2__.WelcomeFeaturesRoutingModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_5__.SwiperModule
        ]
    })
], WelcomeFeaturesModule);



/***/ }),

/***/ 54431:
/*!*****************************************************************************!*\
  !*** ./src/app/welcome-features/welcome-features.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "/** Ionic CSS Variables **/\n:root {\n  --ion-color-white: #ffffff;\n  --ion-color-black: #000000;\n  /** primary color**/\n  --ion-color-primary: #ffde59;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #111111;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #ffeeae;\n  --ion-color-primary-tint: #ffde59;\n  /** secondary for text**/\n  --ion-color-secondary: #111111;\n  --ion-color-secondary-rgb: 17, 17, 17;\n  --ion-color-secondary-contrast: #ffde59;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0f0f0f;\n  --ion-color-secondary-tint: #292929;\n  /** tertiary used for input background and background icone**/\n  --ion-color-tertiary: #dbdbdb;\n  --ion-color-tertiary-rgb: 219, 219, 219;\n  --ion-color-tertiary-contrast: #000000;\n  --ion-color-tertiary-contrast-rgb: 0, 0, 0;\n  --ion-color-tertiary-shade: #c1c1c1;\n  --ion-color-tertiary-tint: #dfdfdf;\n  /** success **/\n  --ion-color-success: #01db72;\n  --ion-color-success-rgb: 1, 219, 114;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #01c164;\n  --ion-color-success-tint: #1adf80;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #ff1166;\n  --ion-color-danger-rgb: 255, 17, 102;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e00f5a;\n  --ion-color-danger-tint: #ff2976;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: rgba(255, 222, 89, 0.19);\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** Tab-bar **/\n  --ion-toolbar-background: white;\n  --text-font-style: \"IBMPlexSans\";\n  --title-font-style: \"IBMPlexSans\";\n}\n:root .spinner-bubbles {\n  color: var(--ion-color-primary);\n}\n:root ion-tab-button.tab-selected {\n  --color-selected: var(--ion-color-primary);\n}\n:root ion-segment {\n  --background: var(--ion-color-white);\n}\n:root ion-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --color-checked: black;\n  --indicator-transition: none;\n}\n:root ion-button {\n  text-transform: none;\n}\nion-content {\n  --background: var(--ion-color-secondary);\n}\nion-content .logo-container {\n  height: 4rem;\n  width: 100%;\n  text-align: center;\n}\nion-content .logo-container img {\n  height: 3rem;\n}\nion-content .card-container {\n  background: var(--ion-color-white);\n  height: calc(100% - 4rem);\n  position: relative;\n  align-items: normal;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: normal;\n  width: 100%;\n  border-radius: 1.5rem 1.5rem 0 0;\n}\nion-content .card-container swiper {\n  display: flex;\n  width: 100%;\n  flex: 1;\n}\nion-content .card-container swiper .slide-container {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  align-items: normal;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-end;\n  padding-bottom: 1.5rem;\n}\nion-content .card-container swiper .slide-container img {\n  height: auto;\n  max-height: 55%;\n  width: 78%;\n  align-self: center;\n}\nion-content .card-container swiper .slide-container .text-container {\n  margin-top: 1rem;\n  height: 9rem;\n}\nion-content .card-container swiper .slide-container .text-container .title {\n  font-size: 1.125rem;\n  font-family: \"IBMPlexSans\";\n  color: #111111;\n  font-weight: 700;\n  text-align: start;\n  margin-bottom: 0.5rem;\n  line-height: 1.375rem;\n}\nion-content .card-container swiper .slide-container .text-container .text {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: #111111;\n  font-weight: 400;\n  line-height: 1.375rem;\n  text-align: start;\n}\nion-content .card-container .buttons-container {\n  height: 14.375rem;\n  padding-top: 3rem;\n  padding-bottom: 2rem;\n  margin-bottom: var(--ion-safe-area-bottom, 0) !important;\n  display: flex;\n  flex-direction: column;\n}\nion-content .card-container .buttons-container ion-button {\n  --box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);\n}\nion-content .card-container .buttons-container .already-signup-text {\n  margin-top: 2rem;\n  margin-bottom: 1rem;\n  line-height: 1.375rem;\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: #111111;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwid2VsY29tZS1mZWF0dXJlcy5jb21wb25lbnQuc2NzcyIsIi4uLy4uL3RoZW1lL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLDBCQUFBO0FBb0JBO0VBQ0UsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHFDQUFBO0VBQ0EsdUNBQUE7RUFDQSxpREFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSw2REFBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsWUFBQTtFQUNBLDJDQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQU1BLGNBQUE7RUFtQkEsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0FDcERGO0FEMkJFO0VBQ0UsK0JBQUE7QUN6Qko7QUQ2QkU7RUFDRSwwQ0FBQTtBQzNCSjtBRDhCRTtFQUNFLG9DQUFBO0FDNUJKO0FEK0JFO0VBQ0UsOENBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FDN0JKO0FEZ0NFO0VBQ0Usb0JBQUE7QUM5Qko7QUFyRkE7RUFDRSx3Q0FBQTtBQXdGRjtBQXRGRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUF3Rko7QUF0Rkk7RUFDRSxZQUFBO0FBd0ZOO0FBcEZFO0VBQ0Usa0NBQUE7RUFDQSx5QkFBQTtFQ3lCRixrQkFEeUg7RUFFekgsbUJEekJ3QjtFQ2dDdEIsYUFBQTtFQUdGLHNCRG5DZ0I7RUNvQ2hCLGlCQWJzRjtFQWN0Rix1QkRyQ2dDO0VBQzlCLFdBQUE7RUFDQSxnQ0FBQTtBQTJGSjtBQXpGSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtBQTJGTjtBQXpGTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VDYU4sa0JBRHlIO0VBRXpILG1CRGI0QjtFQ29CMUIsYUFBQTtFQUdGLHNCRHZCb0I7RUN3QnBCLGlCQWJzRjtFQWN0Rix5QkR6Qm9DO0VBQzlCLHNCQUFBO0FBZ0dSO0FBOUZRO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFnR1Y7QUE3RlE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUErRlY7QUE3RlU7RUMwRVIsbUJEekU0QjtFQzBFNUIsMEJBRnVGO0VBR3ZGLGNGbEhRO0VFbUhSLGdCQUpvRTtFRHZFMUQsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FBa0daO0FBL0ZVO0VDcURSLGVEcEQrQjtFQ3FEL0IsMEJBRnNGO0VBR3RGLGNGcEdRO0VFcUdSLGdCQUptRTtFRGxEekQscUJBQUE7RUFDQSxpQkFBQTtBQW9HWjtBQTdGSTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHdEQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBK0ZOO0FBN0ZNO0VBQ0UsMkNBQUE7QUErRlI7QUE1Rk07RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUM0Qk4sZUQzQjJCO0VDNEIzQiwwQkFGc0Y7RUFHdEYsY0ZwR1E7RUVxR1IsZ0JBSm1FO0FEdUVyRSIsImZpbGUiOiJ3ZWxjb21lLWZlYXR1cmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOlxuLy8gaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvXG5cbi8qKiBJb25pYyBDU1MgVmFyaWFibGVzICoqL1xuXG4vLyBjb2xvcnNcbiRibGFjazI6ICM0MDQwM2Y7XG4kZ3JheTYwMDogIzExMTExMTsgLy91c2VkXG4kZ3JheTUwMDogIzI5MjkyOTsgLy91c2VkXG4kZ3JheTQwMDogIzU5NTk1OTsgLy91c2VkXG4kZ3JheTMwMDogIzg4ODg4ODsgLy91c2VkXG4kZ3JheTIwMDogI0I4QjhCODtcbiRncmF5MjogIzlkOWM5OTtcbiRncmF5MzogI2RiZGJkYjtcbiR5ZWxsb3cxMDA6ICNmZmZjZWY7XG4keWVsbG93MjAwOiAjZmZmNWNlO1xuJHllbGxvdzM6ICNmZGU4OTY7XG4keWVsbG93NDogI2ZjZWViNjtcbiR5ZWxsb3c1OiAjZmJmMmQ0O1xuJHllbGxvdzY6ICNGRkRFNTk7XG4kd2hpdGU4MDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuJGRhcms3NTogcmdiYSgwLCAwLCAwLCAwLjI1KTsgLy9idXR0b25zIHNoYWRvd1xuXG46cm9vdCB7XG4gIC0taW9uLWNvbG9yLXdoaXRlOiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1ibGFjazogIzAwMDAwMDtcbiAgLyoqIHByaW1hcnkgY29sb3IqKi9cbiAgLS1pb24tY29sb3ItcHJpbWFyeTogI2ZmZGU1OTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDU2LCAxMjgsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogIzExMTExMTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICNmZmVlYWU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogI2ZmZGU1OTtcblxuICAvKiogc2Vjb25kYXJ5IGZvciB0ZXh0KiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzExMTExMTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogMTcsIDE3LCAxNztcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZkZTU5O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICMwZjBmMGY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjMjkyOTI5O1xuXG4gIC8qKiB0ZXJ0aWFyeSB1c2VkIGZvciBpbnB1dCBiYWNrZ3JvdW5kIGFuZCBiYWNrZ3JvdW5kIGljb25lKiovXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjZGJkYmRiOyAvL3NhbWUgYXMgZ3JheTNcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAyMTksIDIxOSwgMjE5O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogI2MxYzFjMTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogI2RmZGZkZjtcblxuICAvKiogc3VjY2VzcyAqKi9cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzAxZGI3MjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDEsIDIxOSwgMTE0O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzAxYzE2NDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjMWFkZjgwO1xuXG4gIC8qKiB3YXJuaW5nICoqL1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZjNDA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAxOTYsIDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBhYzA4O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmNhMjI7XG5cbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZmYxMTY2O1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNTUsIDE3LCAxMDI7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZTAwZjVhO1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2ZmMjk3NjtcblxuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XG5cbiAgLyoqIG1lZGl1bSAqKi9cbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTI5NDljO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNDYsIDE0OCwgMTU2O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzgwODI4OTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICM5ZDlmYTY7XG5cbiAgLyoqIGxpZ2h0ICoqL1xuICAtLWlvbi1jb2xvci1saWdodDogcmdiYSgyNTUsIDIyMiwgODksIDAuMTkpO1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xuXG4gIC5zcGlubmVyLWJ1YmJsZXMge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cblxuICAvKiogVGFiLWJhciAqKi9cbiAgaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIHtcbiAgICAtLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cblxuICBpb24tc2VnbWVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICB9XG5cbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tY29sb3ItY2hlY2tlZDogYmxhY2s7XG4gICAgLS1pbmRpY2F0b3ItdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB9XG5cbiAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS10ZXh0LWZvbnQtc3R5bGU6ICdJQk1QbGV4U2Fucyc7XG4gIC0tdGl0bGUtZm9udC1zdHlsZTogJ0lCTVBsZXhTYW5zJztcbn1cblxuLy8gVmVyaWZpZWRcbiR3aWR0aC1zZDogMzAwcHg7IC8vZm9sZFxuJHdpZHRoLW1kOiAzODBweDsgLy9pcGhvbmUgU0VcbiR3aWR0aC1sZDogNDEycHg7IC8vaXBob25lIFhSXG4kd2lkdGgteGxkOiA3NjhweDsgLy9pcGFkIiwiQGltcG9ydCAnLi4vLi4vdGhlbWUvdmFyaWFibGVzLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MnO1xuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG5cbiAgLmxvZ28tY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDRyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogM3JlbTtcbiAgICB9XG4gIH1cblxuICAuY2FyZC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0cmVtKTtcbiAgICBAaW5jbHVkZSBmbGV4KGNvbHVtbiwgbm9ybWFsLCBub3JtYWwpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbSAxLjVyZW0gMCAwO1xuXG4gICAgc3dpcGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZsZXg6IDE7XG5cbiAgICAgIC5zbGlkZS1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBAaW5jbHVkZSBmbGV4KGNvbHVtbiwgbm9ybWFsLCBmbGV4LWVuZCk7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgbWF4LWhlaWdodDogNTUlO1xuICAgICAgICAgIHdpZHRoOiA3OCU7XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRleHQtY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICAgIGhlaWdodDogOXJlbTtcblxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBib2xkVGV4dCgxLjEyNXJlbSk7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM3NXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICBAaW5jbHVkZSByZWd1bGFyVGV4dCgxcmVtKTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM3NXJlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ1dHRvbnMtY29udGFpbmVyIHtcbiAgICAgIGhlaWdodDogMTQuMzc1cmVtO1xuICAgICAgcGFkZGluZy10b3A6IDNyZW07XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1zYWZlLWFyZWEtYm90dG9tLCAwKSAhaW1wb3J0YW50O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAtLWJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgICAgfVxuXG4gICAgICAuYWxyZWFkeS1zaWdudXAtdGV4dCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM3NXJlbTtcbiAgICAgICAgQGluY2x1ZGUgcmVndWxhclRleHQoMXJlbSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCJAbWl4aW4gdGl0bGUoJGZvbnQtc2l6ZTogMnJlbSxcbiAgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnLFxuICAkY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpLFxuICAkZm9udC13ZWlnaHQ6IGJvbGQpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5cblxuQG1peGluIHNpbXBsZV9idXR0b24oJHdpZHRoOiAyNSUsICRoZWlnaHQ6IDIuNXJlbSwgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSkge1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG4gIC0tY29sb3I6ICRjb2xvcjtcbn1cblxuQG1peGluIGljb24oJHdpZHRoOiAxcmVtLCAkaGVpZ2h0OiAxcmVtKSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbn1cblxuQG1peGluIHRleHQoJGZvbnQtc2l6ZTogMC44NzVyZW0sXG4gICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJyxcbiAgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSxcbiAgJGZvbnQtd2VpZ2h0OiBub3JtYWwpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gdGV4dC1vdmVyZmxvdygpIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cblxuLy92ZXJpZmllZFxuXG5AbWl4aW4gZmxleCgkZGlyZWN0aW9uOiByb3csICRhbGlnbi1pdGVtczogY2VudGVyLCAkanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0LCAkd3JhcDogbm93cmFwLCAkaW5saW5lOiBmYWxzZSwgJHBvc2l0aW9uOiByZWxhdGl2ZSkge1xuICBwb3NpdGlvbjogJHBvc2l0aW9uO1xuICBhbGlnbi1pdGVtczogJGFsaWduLWl0ZW1zO1xuXG4gIEBpZiAkaW5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgfVxuXG4gIEBlbHNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG4gIGZsZXgtd3JhcDogJHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnktY29udGVudDtcbn1cblxuQG1peGluIGJ1dHRvbigkd2lkdGg6IDI1JSwgJGhlaWdodDogMi41cmVtLCAkZm9udC1zaXplOiAwLjg3NXJlbSwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnLCAkZm9udC13ZWlnaHQ6IDYwMCkge1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbiAgbWluLWhlaWdodDogJGhlaWdodDtcbn1cblxuQG1peGluIHdoaXRlVGl0bGUoJGZvbnQtc2l6ZTogMS43NXJlbSwgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIHdoaXRlU3VidGl0bGUoJGZvbnQtc2l6ZTogMXJlbSwgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIGJsYWNrVGl0bGUoJGZvbnQtc2l6ZTogMS43NXJlbSwgJGNvbG9yOiAkZ3JheTUwMCwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJywgKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbkBtaXhpbiBibGFja1N1YnRpdGxlKCRmb250LXNpemU6IDFyZW0sICRjb2xvcjogJGdyYXk1MDAsICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gbWVkaXVtVGV4dCgkZm9udC1zaXplOiAwLjc1cmVtLCAkY29sb3I6ICRncmF5NTAwLCAkZm9udC13ZWlnaHQ6IDUwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIHJlZ3VsYXJUZXh0KCRmb250LXNpemU6IDFyZW0sICRjb2xvcjogJGdyYXk2MDAsICRmb250LXdlaWdodDogNDAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gc2VtaUJvbGRUZXh0KCRmb250LXNpemU6IDJyZW0sICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKSwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiBib2xkVGV4dCgkZm9udC1zaXplOiAxLjEyNXJlbSwgJGNvbG9yOiAkZ3JheTYwMCwgJGZvbnQtd2VpZ2h0OiA3MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59Il19 */";

/***/ }),

/***/ 17873:
/*!*****************************************************************************!*\
  !*** ./src/app/welcome-features/welcome-features.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"safe-area\">\n  <div class=\"logo-container\">\n    <img src=\"../../assets/logos/logo-yellow_text-white.svg\" />\n  </div>\n  <div class=\"card-container ion-padding-horizontal\">\n    <swiper [pagination]=\"true\" [slidesPerView]=\"1\" [loop]=\"false\">\n      <ng-template swiperSlide *ngFor=\"let feature of features; let index=index;\">\n        <div class=\"slide-container\">\n          <img [src]=\"feature.image_src\">\n          <div class=\"text-container\">\n            <p [attr.data-cy]=\"'title-'+index\" class=\"title ion-no-margin\">{{'HOME.TITLE_FEATURE_'+feature.translate_key\n              |\n              translate}}</p>\n            <p [attr.data-cy]=\"'text-'+index\" class=\"text ion-no-margin\">{{'HOME.TEXT_FEATURE_'+feature.translate_key |\n              translate}}</p>\n          </div>\n        </div>\n      </ng-template>\n    </swiper>\n    <div class=\"buttons-container\">\n      <ion-button shape=\"round\" expand=\"block\" [routerLink]=\"['/register-home']\" data-cy=\"register-button\">\n        <span>{{'HOME.SIGNUP' | translate }}</span>\n      </ion-button>\n      <p class=\"ion-no-margin already-signup-text\">{{'HOME.ALREADY_SIGNUP' | translate }}</p>\n      <ion-button color=\"white\" shape=\"round\" expand=\"block\" [routerLink]=\"['/login']\" data-cy=\"login-button\">\n        <span>{{'HOME.SIGNIN' | translate }}</span>\n      </ion-button>\n    </div>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_welcome-features_welcome-features_module_ts.js.map