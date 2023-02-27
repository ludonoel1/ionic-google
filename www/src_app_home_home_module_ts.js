"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 52003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    },
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/shared/shared.module */ 8395);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 52003);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page */ 62267);





let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            src_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_2__.HomePage],
    })
], HomePageModule);



/***/ }),

/***/ 62267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 91670);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ 63947);
/* harmony import */ var src_shared_utils_function_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/utils/function.utils */ 44924);






let HomePage = class HomePage {
    constructor(spinner) {
        this.spinner = spinner;
    }
    ionViewDidEnter() {
        (0,src_shared_utils_function_utils__WEBPACK_IMPORTED_MODULE_2__.setStyleStatusBar)("dark");
        this.spinner.hide('appSpinner');
    }
};
HomePage.ctorParameters = () => [
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__.NgxSpinnerService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/** Ionic CSS Variables **/\n:root {\n  --ion-color-white: #ffffff;\n  --ion-color-black: #000000;\n  /** primary color**/\n  --ion-color-primary: #ffde59;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #111111;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #ffeeae;\n  --ion-color-primary-tint: #ffde59;\n  /** secondary for text**/\n  --ion-color-secondary: #111111;\n  --ion-color-secondary-rgb: 17, 17, 17;\n  --ion-color-secondary-contrast: #ffde59;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0f0f0f;\n  --ion-color-secondary-tint: #292929;\n  /** tertiary used for input background and background icone**/\n  --ion-color-tertiary: #dbdbdb;\n  --ion-color-tertiary-rgb: 219, 219, 219;\n  --ion-color-tertiary-contrast: #000000;\n  --ion-color-tertiary-contrast-rgb: 0, 0, 0;\n  --ion-color-tertiary-shade: #c1c1c1;\n  --ion-color-tertiary-tint: #dfdfdf;\n  /** success **/\n  --ion-color-success: #01db72;\n  --ion-color-success-rgb: 1, 219, 114;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #01c164;\n  --ion-color-success-tint: #1adf80;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #ff1166;\n  --ion-color-danger-rgb: 255, 17, 102;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e00f5a;\n  --ion-color-danger-tint: #ff2976;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: rgba(255, 222, 89, 0.19);\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** Tab-bar **/\n  --ion-toolbar-background: white;\n  --text-font-style: \"IBMPlexSans\";\n  --title-font-style: \"IBMPlexSans\";\n}\n:root .spinner-bubbles {\n  color: var(--ion-color-primary);\n}\n:root ion-tab-button.tab-selected {\n  --color-selected: var(--ion-color-primary);\n}\n:root ion-segment {\n  --background: var(--ion-color-white);\n}\n:root ion-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --color-checked: black;\n  --indicator-transition: none;\n}\n:root ion-button {\n  text-transform: none;\n}\nion-content {\n  --background: var(--ion-color-secondary);\n}\nion-content .title {\n  margin-top: 3rem;\n  margin-bottom: 1rem;\n  font-size: 2rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-white);\n  font-weight: 700;\n}\nion-content .subtitle {\n  font-size: 1.25rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-white);\n  font-weight: 600;\n}\nion-content .text-yellow {\n  color: var(--ion-color-primary);\n}\nion-content .text {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-white);\n  font-weight: 600;\n  line-height: 28px;\n  margin-top: 8.25rem;\n  margin-bottom: 2.25rem;\n}\nion-content ion-button {\n  width: 100%;\n  height: 2.5rem;\n  font-family: \"IBMPlexSans\";\n  font-size: 1.125rem;\n  font-weight: 600;\n  min-height: 2.5rem;\n}\nion-content .logo-footer {\n  height: 3rem;\n  position: absolute !important;\n  bottom: var(--ion-safe-area-bottom, 0) !important;\n  width: calc(100% - 2rem);\n  position: relative;\n  align-items: flex-end;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n}\nion-content .logo-footer img {\n  height: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiaG9tZS5wYWdlLnNjc3MiLCIuLi8uLi90aGVtZS9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSwwQkFBQTtBQW9CQTtFQUNFLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsNkRBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFNQSxjQUFBO0VBbUJBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQ0FBQTtBQ3BERjtBRDJCRTtFQUNFLCtCQUFBO0FDekJKO0FENkJFO0VBQ0UsMENBQUE7QUMzQko7QUQ4QkU7RUFDRSxvQ0FBQTtBQzVCSjtBRCtCRTtFQUNFLDhDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQzdCSjtBRGdDRTtFQUNFLG9CQUFBO0FDOUJKO0FBckZBO0VBQ0Usd0NBQUE7QUF3RkY7QUF0RkU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VDK0dGLGVEOUdvQjtFQytHcEIsMEJBRnVGO0VBR3ZGLDZCRGhIMEI7RUNpSDFCLGdCQUpvRTtBRGxCdEU7QUF4RkU7RUNvR0Esa0JEbkd3QjtFQ29HeEIsMEJBRnFHO0VBR3JHLDZCQUg0QztFQUk1QyxnQkFKa0Y7QURMcEY7QUExRkU7RUFDRSwrQkFBQTtBQTRGSjtBQXpGRTtFQzRGQSxlRDNGd0I7RUM0RnhCLDBCQUZxRztFQUdyRyw2QkFINEM7RUFJNUMsZ0JBSmtGO0VEekZoRixpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUE4Rko7QUEzRkU7RUNpQ0EsV0RoQ2tCO0VDaUNsQixjRGpDd0I7RUNrQ3hCLDBCQUg4RTtFQUk5RSxtQkRuQ2dDO0VDb0NoQyxnQkFMMkc7RUFNM0csa0JEckN3QjtBQWtHMUI7QUE5RkU7RUFDRSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxpREFBQTtFQUNBLHdCQUFBO0VDT0Ysa0JBRHlIO0VBRXpILHFCRFBxQjtFQ2NuQixhQUFBO0VBR0YsbUJEakJnQjtFQ2tCaEIsaUJBYnNGO0VBY3RGLHVCRG5CK0I7QUFxR2pDO0FBbkdJO0VBQ0UsWUFBQTtBQXFHTiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cblxuLy8gY29sb3JzXG4kYmxhY2syOiAjNDA0MDNmO1xuJGdyYXk2MDA6ICMxMTExMTE7IC8vdXNlZFxuJGdyYXk1MDA6ICMyOTI5Mjk7IC8vdXNlZFxuJGdyYXk0MDA6ICM1OTU5NTk7IC8vdXNlZFxuJGdyYXkzMDA6ICM4ODg4ODg7IC8vdXNlZFxuJGdyYXkyMDA6ICNCOEI4Qjg7XG4kZ3JheTI6ICM5ZDljOTk7XG4kZ3JheTM6ICNkYmRiZGI7XG4keWVsbG93MTAwOiAjZmZmY2VmO1xuJHllbGxvdzIwMDogI2ZmZjVjZTtcbiR5ZWxsb3czOiAjZmRlODk2O1xuJHllbGxvdzQ6ICNmY2VlYjY7XG4keWVsbG93NTogI2ZiZjJkNDtcbiR5ZWxsb3c2OiAjRkZERTU5O1xuJHdoaXRlODA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiRkYXJrNzU6IHJnYmEoMCwgMCwgMCwgMC4yNSk7IC8vYnV0dG9ucyBzaGFkb3dcblxuOnJvb3Qge1xuICAtLWlvbi1jb2xvci13aGl0ZTogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItYmxhY2s6ICMwMDAwMDA7XG4gIC8qKiBwcmltYXJ5IGNvbG9yKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICNmZmRlNTk7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA1NiwgMTI4LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICMxMTExMTE7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjZmZlZWFlO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICNmZmRlNTk7XG5cbiAgLyoqIHNlY29uZGFyeSBmb3IgdGV4dCoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMxMTExMTE7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDE3LCAxNywgMTc7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZGU1OTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMGYwZjBmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzI5MjkyOTtcblxuICAvKiogdGVydGlhcnkgdXNlZCBmb3IgaW5wdXQgYmFja2dyb3VuZCBhbmQgYmFja2dyb3VuZCBpY29uZSoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2RiZGJkYjsgLy9zYW1lIGFzIGdyYXkzXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMjE5LCAyMTksIDIxOTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICNjMWMxYzE7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICNkZmRmZGY7XG5cbiAgLyoqIHN1Y2Nlc3MgKiovXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMwMWRiNzI7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiAxLCAyMTksIDExNDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMwMWMxNjQ7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzFhZGY4MDtcblxuICAvKiogd2FybmluZyAqKi9cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmYzQwOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMTk2LCA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYWMwODtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZjYTIyO1xuXG4gIC8qKiBkYW5nZXIgKiovXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ZmMTE2NjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjU1LCAxNywgMTAyO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2UwMGY1YTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmZjI5NzY7XG5cbiAgLyoqIGRhcmsgKiovXG4gIC0taW9uLWNvbG9yLWRhcms6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuXG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzkyOTQ5YztcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTQ2LCAxNDgsIDE1NjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4MDgyODk7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjOWQ5ZmE2O1xuXG4gIC8qKiBsaWdodCAqKi9cbiAgLS1pb24tY29sb3ItbGlnaHQ6IHJnYmEoMjU1LCAyMjIsIDg5LCAwLjE5KTtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcblxuICAuc3Bpbm5lci1idWJibGVzIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG5cbiAgLyoqIFRhYi1iYXIgKiovXG4gIGlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCB7XG4gICAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG5cbiAgaW9uLXNlZ21lbnQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgfVxuXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IGJsYWNrO1xuICAgIC0taW5kaWNhdG9yLXRyYW5zaXRpb246IG5vbmU7XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgfVxuXG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tdGV4dC1mb250LXN0eWxlOiAnSUJNUGxleFNhbnMnO1xuICAtLXRpdGxlLWZvbnQtc3R5bGU6ICdJQk1QbGV4U2Fucyc7XG59XG5cbi8vIFZlcmlmaWVkXG4kd2lkdGgtc2Q6IDMwMHB4OyAvL2ZvbGRcbiR3aWR0aC1tZDogMzgwcHg7IC8vaXBob25lIFNFXG4kd2lkdGgtbGQ6IDQxMnB4OyAvL2lwaG9uZSBYUlxuJHdpZHRoLXhsZDogNzY4cHg7IC8vaXBhZCIsIkBpbXBvcnQgJy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uL3RoZW1lL21peGlucy5zY3NzJztcblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuXG4gIC50aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIEBpbmNsdWRlIGJvbGRUZXh0KDJyZW0sIHZhcigtLWlvbi1jb2xvci13aGl0ZSkpO1xuICB9XG5cbiAgLnN1YnRpdGxlIHtcbiAgICBAaW5jbHVkZSBzZW1pQm9sZFRleHQoMS4yNXJlbSk7XG4gIH1cblxuICAudGV4dC15ZWxsb3cge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSlcbiAgfVxuXG4gIC50ZXh0IHtcbiAgICBAaW5jbHVkZSBzZW1pQm9sZFRleHQoMXJlbSk7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgbWFyZ2luLXRvcDogOC4yNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjI1cmVtO1xuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgYnV0dG9uKDEwMCUsIDIuNXJlbSwgMS4xMjVyZW0pO1xuICB9XG5cblxuICAubG9nby1mb290ZXIge1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICBib3R0b206IHZhcigtLWlvbi1zYWZlLWFyZWEtYm90dG9tLCAwKSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcbiAgICBAaW5jbHVkZSBmbGV4KHJvdywgZmxleC1lbmQsIGNlbnRlcik7XG5cbiAgICBpbWcge1xuICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgIH1cbiAgfVxufSIsIkBtaXhpbiB0aXRsZSgkZm9udC1zaXplOiAycmVtLFxuICAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycsXG4gICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSksXG4gICRmb250LXdlaWdodDogYm9sZCkge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cblxuXG5AbWl4aW4gc2ltcGxlX2J1dHRvbigkd2lkdGg6IDI1JSwgJGhlaWdodDogMi41cmVtLCAkY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpKSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbiAgLS1jb2xvcjogJGNvbG9yO1xufVxuXG5AbWl4aW4gaWNvbigkd2lkdGg6IDFyZW0sICRoZWlnaHQ6IDFyZW0pIHtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xufVxuXG5AbWl4aW4gdGV4dCgkZm9udC1zaXplOiAwLjg3NXJlbSxcbiAgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnLFxuICAkY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpLFxuICAkZm9udC13ZWlnaHQ6IG5vcm1hbCkge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiB0ZXh0LW92ZXJmbG93KCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuXG4vL3ZlcmlmaWVkXG5cbkBtaXhpbiBmbGV4KCRkaXJlY3Rpb246IHJvdywgJGFsaWduLWl0ZW1zOiBjZW50ZXIsICRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQsICR3cmFwOiBub3dyYXAsICRpbmxpbmU6IGZhbHNlLCAkcG9zaXRpb246IHJlbGF0aXZlKSB7XG4gIHBvc2l0aW9uOiAkcG9zaXRpb247XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ24taXRlbXM7XG5cbiAgQGlmICRpbmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB9XG5cbiAgQGVsc2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbiAgZmxleC13cmFwOiAkd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeS1jb250ZW50O1xufVxuXG5AbWl4aW4gYnV0dG9uKCR3aWR0aDogMjUlLCAkaGVpZ2h0OiAyLjVyZW0sICRmb250LXNpemU6IDAuODc1cmVtLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycsICRmb250LXdlaWdodDogNjAwKSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xuICBtaW4taGVpZ2h0OiAkaGVpZ2h0O1xufVxuXG5AbWl4aW4gd2hpdGVUaXRsZSgkZm9udC1zaXplOiAxLjc1cmVtLCAkY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSksICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gd2hpdGVTdWJ0aXRsZSgkZm9udC1zaXplOiAxcmVtLCAkY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSksICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gYmxhY2tUaXRsZSgkZm9udC1zaXplOiAxLjc1cmVtLCAkY29sb3I6ICRncmF5NTAwLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnLCApIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xuICBtYXJnaW46IDBweDtcbn1cblxuQG1peGluIGJsYWNrU3VidGl0bGUoJGZvbnQtc2l6ZTogMXJlbSwgJGNvbG9yOiAkZ3JheTUwMCwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiBtZWRpdW1UZXh0KCRmb250LXNpemU6IDAuNzVyZW0sICRjb2xvcjogJGdyYXk1MDAsICRmb250LXdlaWdodDogNTAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gcmVndWxhclRleHQoJGZvbnQtc2l6ZTogMXJlbSwgJGNvbG9yOiAkZ3JheTYwMCwgJGZvbnQtd2VpZ2h0OiA0MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiBzZW1pQm9sZFRleHQoJGZvbnQtc2l6ZTogMnJlbSwgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIGJvbGRUZXh0KCRmb250LXNpemU6IDEuMTI1cmVtLCAkY29sb3I6ICRncmF5NjAwLCAkZm9udC13ZWlnaHQ6IDcwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn0iXX0= */";

/***/ }),

/***/ 91670:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"safe-area ion-padding-horizontal\">\n  <p class=\"title ion-no-margin\">{{'HOME.WELCOME' | translate }} <span class=\"text-yellow\">{{'SHARED.APP_NAME' |\n      translate}}</span></p>\n  <p class=\"subtitle ion-no-margin\">{{'HOME.YOUR' | translate }} <span class=\"text-yellow\">{{'SHARED.PERSONAL_SHOPPER' |\n      translate}} </span><br>{{'HOME.FINGERTIPS' | translate }}</p>\n  <p class=\"text ion-no-margin\">{{'HOME.WARDROBE_CONTROL' | translate}},<br>\n    <span class=\"text-yellow\">{{'HOME.FUTURE_MODE' | translate}}</span>\n  </p>\n  <ion-button shape=\"round\" expand=\"block\" [routerLink]=\"['/welcome-features']\" data-cy=\"start-app-button\">\n    <span>{{'HOME.START' | translate }}</span>\n  </ion-button>\n  <div class=\"logo-footer\">\n    <img src=\"../../assets/logos/logo-yellow_text-white.svg\" />\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map