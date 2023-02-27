"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_main_wardrobe_article-details_article-details_module_ts"],{

/***/ 4109:
/*!*********************************************************************************!*\
  !*** ./src/app/main/wardrobe/article-details/article-details-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleDetailsRoutingModule": () => (/* binding */ ArticleDetailsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _article_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-details.component */ 63773);




const routes = [
    {
        path: '',
        component: _article_details_component__WEBPACK_IMPORTED_MODULE_0__.ArticleDetailsComponent,
    },
];
let ArticleDetailsRoutingModule = class ArticleDetailsRoutingModule {
};
ArticleDetailsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ArticleDetailsRoutingModule);



/***/ }),

/***/ 63773:
/*!****************************************************************************!*\
  !*** ./src/app/main/wardrobe/article-details/article-details.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleDetailsComponent": () => (/* binding */ ArticleDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _article_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-details.component.html?ngResource */ 88256);
/* harmony import */ var _article_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-details.component.scss?ngResource */ 52850);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 63947);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var src_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/services/storage.service */ 45785);
/* harmony import */ var src_shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/services/toaster.service */ 29238);
/* harmony import */ var src_shared_state_wardrobe_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/state/wardrobe-state.service */ 40084);













let ArticleDetailsComponent = class ArticleDetailsComponent {
    constructor(route, wardrobeState, storageService, cd, alert, http, toaster, location, router, spinner) {
        this.route = route;
        this.wardrobeState = wardrobeState;
        this.storageService = storageService;
        this.cd = cd;
        this.alert = alert;
        this.http = http;
        this.toaster = toaster;
        this.location = location;
        this.router = router;
        this.spinner = spinner;
        this.currency = 'EUR'; //TODO: modify with local
        this.locale = 'fr';
        this.currentImageIndex = 0;
        this.slidesOptions = {
            allowSlideNext: false,
            allowSlidePrev: false,
        };
    }
    ngOnInit() {
        this.brandsMap = this.storageService.getJSONItemFromLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.LocalStorageConstants.BRANDS_AS_MAP);
        this.sizesMap = this.storageService.getJSONItemFromLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.LocalStorageConstants.SIZE_GROUPS_AS_MAP);
        this.categoriesMap = this.storageService.getJSONItemFromLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.LocalStorageConstants.CATEGORIES_AS_MAP);
        this.colors = this.storageService.getJSONItemFromLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.LocalStorageConstants.COLORS_AS_MAP);
        this.fitsMap = this.storageService.getJSONItemFromLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.LocalStorageConstants.FITS_AS_MAP);
        const ancestorCategory = this.categoriesMap[this.route.snapshot.paramMap.get('categoryId')].ancestry.split('.')[0];
        this.wardrobeState.getArticleByIdAndCategory(ancestorCategory, this.route.snapshot.paramMap.get('id')).asObservable().subscribe((articles) => {
            this.currentArticle = articles.find(article => article.id === this.route.snapshot.paramMap.get('id'));
            this.slidesOptions.allowSlideNext = this.currentArticle.images.length > 1;
            this.slidesOptions.allowSlidePrev = this.currentArticle.images.length > 1;
        });
    }
    /*swipeElementImage(enter: string, index: number) {
      let element = (<HTMLImageElement>document.getElementById(`articleImg`));
      switch (enter) {
        case 'left':
          if (this.currentImageIndex > 0) {
            this.currentImageIndex--;
            element.src = this.currentArticle.images[this.currentImageIndex].s3_presigned_url;
          }
          break;
        case 'right':
          if (this.currentImageIndex < this.currentArticle.images.length - 1) {
            this.currentImageIndex++;
            element.src = this.currentArticle.images[this.currentImageIndex].s3_presigned_url;
          }
          break;
      }
      this.cd.detectChanges();
    }
  
    deleteArticle() {
  
    }*/
    ionViewDidEnter() {
        this.spinner.hide('appSpinner');
    }
    onDisplayAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                message: `${this.currentArticle.title} sera supprimé de votre garde robe Younzee`,
                buttons: [
                    {
                        text: 'Supprimer',
                        id: 'modal-deletearticle-button',
                        cssClass: 'alert-delete-button',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.http
                                .post(`${src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.itemsUrl}/bulk_delete`, { item_ids: [this.currentArticle.id] }, { observe: 'response' })
                                .subscribe(result => {
                                this.wardrobeState.deleteItemsInAll(result.body.deleted_ids, [this.currentArticle]);
                                this.toaster.presentSuccessToast(`MESSAGE.WARDROBE_ITEMS.DELETE`);
                                this.location.back();
                            }),
                                error => {
                                    console.log(error);
                                };
                        },
                    },
                    {
                        text: 'Annuler',
                        role: 'cancel',
                        id: 'modal-canceldeletearticle-button',
                        cssClass: 'alert-cancel-button',
                        handler: blah => {
                            console.log('Confirm Cancel: blah');
                        },
                    },
                ],
                backdropDismiss: false,
            });
            yield alert.present();
        });
    }
    onModifyArticle() {
        this.router.navigate(['main/wardrobe/modify-article', JSON.stringify(this.currentArticle)]);
    }
};
ArticleDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: src_shared_state_wardrobe_state_service__WEBPACK_IMPORTED_MODULE_5__.WardrobeStateService },
    { type: src_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient },
    { type: src_shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__.ToasterService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerService }
];
ArticleDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-article-details',
        template: _article_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_article_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ArticleDetailsComponent);



/***/ }),

/***/ 35751:
/*!*************************************************************************!*\
  !*** ./src/app/main/wardrobe/article-details/article-details.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleDetailsModule": () => (/* binding */ ArticleDetailsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/shared/shared.module */ 8395);
/* harmony import */ var _article_details_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-details-routing.module */ 4109);
/* harmony import */ var _article_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article-details.component */ 63773);








let ArticleDetailsModule = class ArticleDetailsModule {
};
ArticleDetailsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _article_details_routing_module__WEBPACK_IMPORTED_MODULE_1__.ArticleDetailsRoutingModule,
        ],
        declarations: [_article_details_component__WEBPACK_IMPORTED_MODULE_2__.ArticleDetailsComponent],
        providers: [],
    })
], ArticleDetailsModule);



/***/ }),

/***/ 52850:
/*!*****************************************************************************************!*\
  !*** ./src/app/main/wardrobe/article-details/article-details.component.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "/** Ionic CSS Variables **/\n:root {\n  --ion-color-white: #ffffff;\n  --ion-color-black: #000000;\n  /** primary color**/\n  --ion-color-primary: #ffde59;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #111111;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #ffeeae;\n  --ion-color-primary-tint: #ffde59;\n  /** secondary for text**/\n  --ion-color-secondary: #111111;\n  --ion-color-secondary-rgb: 17, 17, 17;\n  --ion-color-secondary-contrast: #ffde59;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0f0f0f;\n  --ion-color-secondary-tint: #292929;\n  /** tertiary used for input background and background icone**/\n  --ion-color-tertiary: #dbdbdb;\n  --ion-color-tertiary-rgb: 219, 219, 219;\n  --ion-color-tertiary-contrast: #000000;\n  --ion-color-tertiary-contrast-rgb: 0, 0, 0;\n  --ion-color-tertiary-shade: #c1c1c1;\n  --ion-color-tertiary-tint: #dfdfdf;\n  /** success **/\n  --ion-color-success: #01db72;\n  --ion-color-success-rgb: 1, 219, 114;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #01c164;\n  --ion-color-success-tint: #1adf80;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #ff1166;\n  --ion-color-danger-rgb: 255, 17, 102;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e00f5a;\n  --ion-color-danger-tint: #ff2976;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: rgba(255, 222, 89, 0.19);\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** Tab-bar **/\n  --ion-toolbar-background: white;\n  --text-font-style: \"IBMPlexSans\";\n  --title-font-style: \"IBMPlexSans\";\n}\n:root .spinner-bubbles {\n  color: var(--ion-color-primary);\n}\n:root ion-tab-button.tab-selected {\n  --color-selected: var(--ion-color-primary);\n}\n:root ion-segment {\n  --background: var(--ion-color-white);\n}\n:root ion-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --color-checked: black;\n  --indicator-transition: none;\n}\n:root ion-button {\n  text-transform: none;\n}\n:host {\n  margin-top: var(--ion-safe-area-top, 0);\n}\nion-content .article-img {\n  width: 100%;\n  height: 110vw;\n  /*button {\n    height: 110vw;\n    width: 50%;\n    position: absolute;\n    background-color: Transparent;\n    outline: none;\n\n    .btn_left_click {\n      left: 0px;\n    }\n\n    .btn_right_click {\n      right: 0px;\n    }\n  }\n  .container {\n    display: flex;\n    width: 100%;\n    justify-content: space-around;\n    position: absolute;\n    top: calc(110vw - 0.5rem);\n\n    .bar {\n      display: inline-block;\n      overflow: hidden;\n      text-align: center;\n      border-radius: 12px;\n      height: 4px;\n    }\n\n    //TODO: find something more dynamic\n    .progress_bar_1 {\n      width: 100%\n    }\n\n    .progress_bar_2 {\n      width: 48%\n    }\n\n  }*/\n}\nion-content .article-img ion-slides {\n  height: 100%;\n  width: 100%;\n}\nion-content .article-img ion-slides ion-slide {\n  width: 100%;\n  height: 100%;\n}\nion-content .article-img #articleImg {\n  width: 100%;\n  height: 100%;\n}\nion-content ion-item {\n  min-height: 50px;\n  height: 50px;\n}\nion-content ion-toolbar {\n  --ion-toolbar-background: transparent;\n  position: fixed;\n  top: 0;\n  padding: 1rem;\n  --padding-start: 0;\n  --padding-end: 0;\n}\nion-content ion-toolbar ion-buttons {\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 0.625rem;\n  width: 2.5rem;\n  height: 2.5rem;\n}\nion-content ion-toolbar ion-back-button,\nion-content ion-toolbar .edit-button {\n  --padding-start: 0px;\n  --padding-end: 0;\n  margin: 0px;\n  min-width: 2.5rem;\n  width: 2.5rem;\n  height: 2.5rem;\n}\nion-content ion-toolbar ion-back-button ion-icon,\nion-content ion-toolbar .edit-button ion-icon {\n  width: 1.5rem;\n  height: 1.5rem;\n}\nion-content .details-container {\n  padding: 1rem;\n  position: absolute;\n  height: calc(100% - 110vw + 0.6rem);\n  border-radius: 0.625rem;\n  background-color: white;\n  bottom: 0;\n  z-index: 1;\n  width: 100%;\n}\nion-content .details-container .title {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: 700;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\nion-content .details-container .details-content .first-ion-item {\n  margin-top: 16px;\n}\nion-content .details-container .details-content ion-item {\n  --inner-border-width: 0.5px 0px 0.5px 0px;\n  margin-top: 0.5rem;\n  --padding-start: 0;\n  height: 50px;\n  min-height: 40px;\n}\nion-content .details-container .details-content ion-item ion-label {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-black);\n  font-weight: 400;\n}\nion-content .details-container .details-content ion-item ion-text {\n  font-size: 0.875rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: 700;\n}\nion-content .details-container .details-content .two-item-line {\n  position: relative;\n  align-items: center;\n  display: inline-flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  width: 100%;\n}\nion-content .details-container .details-content .two-item-line ion-item {\n  width: 50%;\n  height: 50px;\n  min-height: 40px;\n}\nion-content .details-container .details-content .two-item-line ion-item .colors,\nion-content .details-container .details-content .two-item-line ion-item img {\n  width: 1rem;\n  height: 1rem;\n  border-radius: 50%;\n  border: 1px solid #111111;\n}\nion-content .details-container .details-content .two-item-line .vertical-bar {\n  border-right: 1px solid #dbdbdb;\n  height: 50%;\n  margin-right: 0.25rem;\n  margin-left: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiYXJ0aWNsZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsMEJBQUE7QUFvQkE7RUFDRSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLDZEQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsMENBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBTUEsY0FBQTtFQW1CQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7QUNwREY7QUQyQkU7RUFDRSwrQkFBQTtBQ3pCSjtBRDZCRTtFQUNFLDBDQUFBO0FDM0JKO0FEOEJFO0VBQ0Usb0NBQUE7QUM1Qko7QUQrQkU7RUFDRSw4Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUM3Qko7QURnQ0U7RUFDRSxvQkFBQTtBQzlCSjtBQXJGQTtFQUNFLHVDQUFBO0FBd0ZGO0FBcEZFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFrQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBO0FBNkdKO0FBN0hJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUErSE47QUE3SE07RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQStIUjtBQTFISTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBNEhOO0FBL0VFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBaUZKO0FBOUVFO0VBQ0UscUNBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBZ0ZKO0FBOUVJO0VBQ0Usb0NBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBZ0ZOO0FBM0VJOztFQUVFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQTZFTjtBQTNFTTs7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQThFUjtBQXpFRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQTJFSjtBQXpFSTtFQ0NGLGVBQUE7RUFDQSwwQkFGdUY7RUFHdkYsaUNERjRCO0VDRzVCLGdCQUpvRTtFREVoRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUE4RU47QUExRU07RUFDRSxnQkFBQTtBQTRFUjtBQXpFTTtFQUNFLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQTJFUjtBQXpFUTtFQ2hDTixlRGlDNkI7RUNoQzdCLDBCQUZzRjtFQUd0Riw2QkQrQm1DO0VDOUJuQyxnQkFKbUU7QURnSHJFO0FBM0VRO0VDdEJOLG1CRHVCMEI7RUN0QjFCLDBCQUZ1RjtFQUd2RixpQ0RxQm9DO0VDcEJwQyxnQkFKb0U7QUR3R3RFO0FBNUVNO0VDdkdKLGtCQUR5SDtFQUV6SCxtQkR1R3lCO0VDcEd2QixvQkFBQTtFQU9GLG1CRDZGb0I7RUM1RnBCLGlCRDRGZ0Q7RUMzRmhELDhCRDJGaUM7RUFDM0IsV0FBQTtBQW1GUjtBQWpGUTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFtRlY7QUFqRlU7O0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBbUZaO0FBL0VRO0VBQ0UsK0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQWlGViIsImZpbGUiOiJhcnRpY2xlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cblxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG5cbi8vIGNvbG9yc1xuJGJsYWNrMjogIzQwNDAzZjtcbiRncmF5NjAwOiAjMTExMTExOyAvL3VzZWRcbiRncmF5NTAwOiAjMjkyOTI5OyAvL3VzZWRcbiRncmF5NDAwOiAjNTk1OTU5OyAvL3VzZWRcbiRncmF5MzAwOiAjODg4ODg4OyAvL3VzZWRcbiRncmF5MjAwOiAjQjhCOEI4O1xuJGdyYXkyOiAjOWQ5Yzk5O1xuJGdyYXkzOiAjZGJkYmRiO1xuJHllbGxvdzEwMDogI2ZmZmNlZjtcbiR5ZWxsb3cyMDA6ICNmZmY1Y2U7XG4keWVsbG93MzogI2ZkZTg5NjtcbiR5ZWxsb3c0OiAjZmNlZWI2O1xuJHllbGxvdzU6ICNmYmYyZDQ7XG4keWVsbG93NjogI0ZGREU1OTtcbiR3aGl0ZTgwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4kZGFyazc1OiByZ2JhKDAsIDAsIDAsIDAuMjUpOyAvL2J1dHRvbnMgc2hhZG93XG5cbjpyb290IHtcbiAgLS1pb24tY29sb3Itd2hpdGU6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWJsYWNrOiAjMDAwMDAwO1xuICAvKiogcHJpbWFyeSBjb2xvcioqL1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjZmZkZTU5O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNTYsIDEyOCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjMTExMTExO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogI2ZmZWVhZTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjZmZkZTU5O1xuXG4gIC8qKiBzZWNvbmRhcnkgZm9yIHRleHQqKi9cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjMTExMTExO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiAxNywgMTcsIDE3O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmRlNTk7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzBmMGYwZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICMyOTI5Mjk7XG5cbiAgLyoqIHRlcnRpYXJ5IHVzZWQgZm9yIGlucHV0IGJhY2tncm91bmQgYW5kIGJhY2tncm91bmQgaWNvbmUqKi9cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNkYmRiZGI7IC8vc2FtZSBhcyBncmF5M1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDIxOSwgMjE5LCAyMTk7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjYzFjMWMxO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjZGZkZmRmO1xuXG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMDFkYjcyO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogMSwgMjE5LCAxMTQ7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMDFjMTY0O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICMxYWRmODA7XG5cbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmM0MDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDE5NiwgOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGFjMDg7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmY2EyMjtcblxuICAvKiogZGFuZ2VyICoqL1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNmZjExNjY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI1NSwgMTcsIDEwMjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNlMDBmNWE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZmYyOTc2O1xuXG4gIC8qKiBkYXJrICoqL1xuICAtLWlvbi1jb2xvci1kYXJrOiAjMjIyNDI4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcblxuICAvKiogbWVkaXVtICoqL1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5Mjk0OWM7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE0NiwgMTQ4LCAxNTY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODA4Mjg5O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogIzlkOWZhNjtcblxuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiByZ2JhKDI1NSwgMjIyLCA4OSwgMC4xOSk7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjQ0LCAyNDUsIDI0ODtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNWY2Zjk7XG5cbiAgLnNwaW5uZXItYnViYmxlcyB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuXG4gIC8qKiBUYWItYmFyICoqL1xuICBpb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQge1xuICAgIC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuXG4gIGlvbi1zZWdtZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIH1cblxuICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLS1jb2xvci1jaGVja2VkOiBibGFjaztcbiAgICAtLWluZGljYXRvci10cmFuc2l0aW9uOiBub25lO1xuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIH1cblxuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLXRleHQtZm9udC1zdHlsZTogJ0lCTVBsZXhTYW5zJztcbiAgLS10aXRsZS1mb250LXN0eWxlOiAnSUJNUGxleFNhbnMnO1xufVxuXG4vLyBWZXJpZmllZFxuJHdpZHRoLXNkOiAzMDBweDsgLy9mb2xkXG4kd2lkdGgtbWQ6IDM4MHB4OyAvL2lwaG9uZSBTRVxuJHdpZHRoLWxkOiA0MTJweDsgLy9pcGhvbmUgWFJcbiR3aWR0aC14bGQ6IDc2OHB4OyAvL2lwYWQiLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi8uLi90aGVtZS92YXJpYWJsZXMuc2Nzcyc7XG5cbjpob3N0IHtcbiAgbWFyZ2luLXRvcDogdmFyKC0taW9uLXNhZmUtYXJlYS10b3AsIDApO1xufVxuXG5pb24tY29udGVudCB7XG4gIC5hcnRpY2xlLWltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMTB2dztcblxuICAgIGlvbi1zbGlkZXMge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIGlvbi1zbGlkZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAjYXJ0aWNsZUltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAvKmJ1dHRvbiB7XG4gICAgICBoZWlnaHQ6IDExMHZ3O1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IFRyYW5zcGFyZW50O1xuICAgICAgb3V0bGluZTogbm9uZTtcblxuICAgICAgLmJ0bl9sZWZ0X2NsaWNrIHtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgfVxuXG4gICAgICAuYnRuX3JpZ2h0X2NsaWNrIHtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogY2FsYygxMTB2dyAtIDAuNXJlbSk7XG5cbiAgICAgIC5iYXIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICB9XG5cbiAgICAgIC8vVE9ETzogZmluZCBzb21ldGhpbmcgbW9yZSBkeW5hbWljXG4gICAgICAucHJvZ3Jlc3NfYmFyXzEge1xuICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgfVxuXG4gICAgICAucHJvZ3Jlc3NfYmFyXzIge1xuICAgICAgICB3aWR0aDogNDglXG4gICAgICB9XG5cbiAgICB9Ki9cbiAgfVxuXG4gIGlvbi1pdGVtIHtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxuXG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgLS1wYWRkaW5nLWVuZDogMDtcblxuICAgIGlvbi1idXR0b25zIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XG4gICAgICB3aWR0aDogMi41cmVtO1xuICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgfVxuXG5cblxuICAgIGlvbi1iYWNrLWJ1dHRvbixcbiAgICAuZWRpdC1idXR0b24ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBtaW4td2lkdGg6IDIuNXJlbTtcbiAgICAgIHdpZHRoOiAyLjVyZW07XG4gICAgICBoZWlnaHQ6IDIuNXJlbTtcblxuICAgICAgaW9uLWljb24ge1xuICAgICAgICB3aWR0aDogMS41cmVtO1xuICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZGV0YWlscy1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTEwdncgKyAwLjZyZW0pO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLnRpdGxlIHtcbiAgICAgIEBpbmNsdWRlIGJvbGRUZXh0KDFyZW0sIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpKTtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxuXG4gICAgLmRldGFpbHMtY29udGVudCB7XG4gICAgICAuZmlyc3QtaW9uLWl0ZW0ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICBpb24taXRlbSB7XG4gICAgICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwLjVweCAwcHggMC41cHggMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgQGluY2x1ZGUgcmVndWxhclRleHQoMXJlbSwgdmFyKC0taW9uLWNvbG9yLWJsYWNrKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tdGV4dCB7XG4gICAgICAgICAgQGluY2x1ZGUgYm9sZFRleHQoMC44NzVyZW0sIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAudHdvLWl0ZW0tbGluZSB7XG4gICAgICAgIEBpbmNsdWRlIGZsZXgocm93LCBjZW50ZXIsIHNwYWNlLWJldHdlZW4sIG5vd3JhcCwgdHJ1ZSk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuXG4gICAgICAgICAgLmNvbG9ycyxcbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMTExMTExO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC52ZXJ0aWNhbC1iYXIge1xuICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRncmF5MztcbiAgICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCJAbWl4aW4gdGl0bGUoJGZvbnQtc2l6ZTogMnJlbSxcbiAgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnLFxuICAkY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpLFxuICAkZm9udC13ZWlnaHQ6IGJvbGQpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5cblxuQG1peGluIHNpbXBsZV9idXR0b24oJHdpZHRoOiAyNSUsICRoZWlnaHQ6IDIuNXJlbSwgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSkge1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG4gIC0tY29sb3I6ICRjb2xvcjtcbn1cblxuQG1peGluIGljb24oJHdpZHRoOiAxcmVtLCAkaGVpZ2h0OiAxcmVtKSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbn1cblxuQG1peGluIHRleHQoJGZvbnQtc2l6ZTogMC44NzVyZW0sXG4gICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJyxcbiAgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSxcbiAgJGZvbnQtd2VpZ2h0OiBub3JtYWwpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gdGV4dC1vdmVyZmxvdygpIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cblxuLy92ZXJpZmllZFxuXG5AbWl4aW4gZmxleCgkZGlyZWN0aW9uOiByb3csICRhbGlnbi1pdGVtczogY2VudGVyLCAkanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0LCAkd3JhcDogbm93cmFwLCAkaW5saW5lOiBmYWxzZSwgJHBvc2l0aW9uOiByZWxhdGl2ZSkge1xuICBwb3NpdGlvbjogJHBvc2l0aW9uO1xuICBhbGlnbi1pdGVtczogJGFsaWduLWl0ZW1zO1xuXG4gIEBpZiAkaW5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgfVxuXG4gIEBlbHNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG4gIGZsZXgtd3JhcDogJHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnktY29udGVudDtcbn1cblxuQG1peGluIGJ1dHRvbigkd2lkdGg6IDI1JSwgJGhlaWdodDogMi41cmVtLCAkZm9udC1zaXplOiAwLjg3NXJlbSwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnLCAkZm9udC13ZWlnaHQ6IDYwMCkge1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbiAgbWluLWhlaWdodDogJGhlaWdodDtcbn1cblxuQG1peGluIHdoaXRlVGl0bGUoJGZvbnQtc2l6ZTogMS43NXJlbSwgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIHdoaXRlU3VidGl0bGUoJGZvbnQtc2l6ZTogMXJlbSwgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIGJsYWNrVGl0bGUoJGZvbnQtc2l6ZTogMS43NXJlbSwgJGNvbG9yOiAkZ3JheTUwMCwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJywgKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbkBtaXhpbiBibGFja1N1YnRpdGxlKCRmb250LXNpemU6IDFyZW0sICRjb2xvcjogJGdyYXk1MDAsICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gbWVkaXVtVGV4dCgkZm9udC1zaXplOiAwLjc1cmVtLCAkY29sb3I6ICRncmF5NTAwLCAkZm9udC13ZWlnaHQ6IDUwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIHJlZ3VsYXJUZXh0KCRmb250LXNpemU6IDFyZW0sICRjb2xvcjogJGdyYXk2MDAsICRmb250LXdlaWdodDogNDAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gc2VtaUJvbGRUZXh0KCRmb250LXNpemU6IDJyZW0sICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKSwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiBib2xkVGV4dCgkZm9udC1zaXplOiAxLjEyNXJlbSwgJGNvbG9yOiAkZ3JheTYwMCwgJGZvbnQtd2VpZ2h0OiA3MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59Il19 */";

/***/ }),

/***/ 88256:
/*!*****************************************************************************************!*\
  !*** ./src/app/main/wardrobe/article-details/article-details.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"article-img\">\n    <ion-slides pager=\"true\" [options]=\"slidesOptions\">\n      <ion-slide *ngFor=\"let img of currentArticle.images\">\n        <cached-img id=\"articleImg\" [divClassName]=\"'container'\" [src]=\"img.s3_presigned_url\"></cached-img>\n      </ion-slide>\n    </ion-slides>\n    <!-- <button class=\"btn_left_click\" (click)=\"swipeElementImage('left', i)\"></button>\n    <button class=\"btn_right_click\" (click)=\"swipeElementImage('right', i)\"></button>-->\n    <!--<div class=\"container\">\n      <span class=\"bar progress_bar_{{currentArticle.images.length}}\"\n        *ngFor=\"let image of currentArticle.images; index as id\"\n        [style.background-color]=\"id === currentImageIndex ? '#ffde59':'#e6e6e6'\">\n      </span>\n    </div>-->\n  </div>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button data-cy=\"goback-articledetail-button\" mode=\"md\" defaultHref=\"/main/wardrobe\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button data-cy=\"edit-articledetail-button\" class=\"edit-button\" color=\"tertiary\" id=\"trigger-button\">\n        <ion-icon slot=\"icon-only\" src=\"assets/icon/buttons/edit-button.svg\"></ion-icon>\n      </ion-button>\n      <ion-popover class=\"safe-area popover-details-article\" [dismissOnSelect]=\"true\" arrow=\"false\" side=\"bottom\" alignment=\"end\" trigger=\"trigger-button\">\n        <ng-template>\n          <ion-content>\n            <ion-item data-cy=\"modify-articledetail-button\" [button]=\"true\" [detail]=\"false\" (click)=\"onModifyArticle()\">\n              <ion-label class=\"ion-no-margin\">{{'SHARED.MODIFY' | translate}}</ion-label>\n            </ion-item>\n            <ion-item data-cy=\"delete-articledetail-button\" [button]=\"true\" lines=\"none\" [detail]=\"false\" (click)=\"onDisplayAlert()\">\n              <ion-label class=\"delete-label ion-no-margin\">{{'SHARED.DELETE' | translate}}</ion-label>\n            </ion-item>\n          </ion-content>\n        </ng-template>\n      </ion-popover>\n    </ion-buttons>\n  </ion-toolbar>\n  <div class=\"details-container\">\n    <div class=\"title\">{{ currentArticle.title }}</div>\n    <div class=\"details-content\">\n      <ion-item class=\"first-ion-item\" lines=\"inset\">\n        <ion-label class=\"ion-no-margin\">\n          {{ 'WARDROBE.PIECES.FORM.BRAND' | translate }}\n        </ion-label>\n        <ion-text>{{ brandsMap[currentArticle.brand_id].fr_display }}</ion-text>\n      </ion-item>\n      <ion-item lines=\"inset\">\n        <ion-label class=\"ion-no-margin\">\n          {{ 'WARDROBE.PIECES.FORM.CATEGORY' | translate }}\n        </ion-label>\n        <ion-text>{{ categoriesMap[currentArticle.category_id].fr_display }}</ion-text>\n      </ion-item>\n      <div class=\"two-item-line\">\n        <ion-item lines=\"inset\">\n          <ion-label class=\"ion-no-margin\">\n            {{ 'WARDROBE.PIECES.FORM.STATE.TITLE' | translate }}\n          </ion-label>\n          <ion-text *ngIf=\"currentArticle.second_hand === true; else new\">{{ 'WARDROBE.PIECES.FORM.STATE.ALREADY_USED' |\n            translate }}\n          </ion-text>\n          <ng-template #new>\n            <ion-text>{{ 'WARDROBE.PIECES.FORM.STATE.NEW' | translate }}</ion-text>\n          </ng-template>\n        </ion-item>\n\n\n        <ion-item lines=\"inset\">\n          <div class=\"vertical-bar\"></div>\n          <ion-label class=\"ion-no-margin\">\n            {{ 'WARDROBE.PIECES.FORM.PRICE' | translate }}\n          </ion-label>\n          <ion-text>{{\n            currentArticle.price | currency: currency:'symbol':'1.0-0':locale\n            }}</ion-text>\n        </ion-item>\n      </div>\n      <div class=\"two-item-line\">\n        <ion-item lines=\"inset\">\n          <ion-label class=\"ion-no-margin\">\n            {{ 'WARDROBE.PIECES.FORM.COLORS' | translate }}\n          </ion-label>\n          <div class=\"colors\" *ngIf=\"currentArticle.color_ids.length === 1\" [style.background]=\"colors[currentArticle.color_ids[0]].rgb\"></div>\n          <div class=\"colors\" *ngIf=\"currentArticle.color_ids.length === 2\" [style.background]=\"\n              'linear-gradient(-45deg,' +\n              colors[currentArticle.color_ids[0]].rgb +\n              ', ' +\n              colors[currentArticle.color_ids[0]].rgb +\n              ' 49%, white 49%, white 51%, ' +\n              colors[currentArticle.color_ids[1]].rgb +\n              ' 51%)'\n            \"></div>\n          <img class=\"color\" *ngIf=\"currentArticle.color_ids.length > 2\" src=\"assets/colors/color-multicolor.png\" />\n        </ion-item>\n        <ion-item lines=\"inset\">\n          <div class=\"vertical-bar\"></div>\n          <ion-label class=\"ion-no-margin\">\n            {{ 'WARDROBE.PIECES.FORM.SIZE' | translate }}\n          </ion-label>\n          <ion-text *ngIf=\"currentArticle?.size_id; else NA\">{{ sizesMap[currentArticle.size_id].fr_display }}\n          </ion-text>\n        </ion-item>\n      </div>\n      <div class=\"two-item-line\">\n\n        <!--<ion-item class=\"left-item\" lines=\"inset\">\n  <ion-label class=\"ion-no-margin\">\n    {{ 'WARDROBE.PIECES.FORM.MATERIAL' | translate }}\n  </ion-label>\n  <ion-text>NONE</ion-text>\n</ion-item>-->\n\n        <ion-item lines=\"inset\" *ngIf=\"currentArticle?.fit_id >= 0\">\n          <div class=\"vertical-bar\"></div>\n          <ion-label class=\"ion-no-margin\">\n            {{ 'WARDROBE.PIECES.FORM.FIT.SUBTITLE' | translate }}\n          </ion-label>\n          <ion-text>{{ fitsMap[currentArticle.fit_id].fr_display }} </ion-text>\n          <!--<ng-template #noValue>\n            <ion-text>{{ 'WARDROBE.PIECES.FORM.FIT.NA' | translate }}</ion-text>\n          </ng-template>-->\n        </ion-item>\n      </div>\n    </div>\n    <div class=\"bottom\"></div>\n  </div>\n</ion-content>\n<ng-template #NA>\n  <ion-text>N/A</ion-text>\n</ng-template>";

/***/ })

}]);
//# sourceMappingURL=src_app_main_wardrobe_article-details_article-details_module_ts.js.map