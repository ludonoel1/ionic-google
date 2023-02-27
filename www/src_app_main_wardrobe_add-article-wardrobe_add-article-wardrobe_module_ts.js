"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_main_wardrobe_add-article-wardrobe_add-article-wardrobe_module_ts"],{

/***/ 23122:
/*!*******************************************************************************************!*\
  !*** ./src/app/main/wardrobe/add-article-wardrobe/add-article-wardrobe-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddArticleWardrobeRoutingModule": () => (/* binding */ AddArticleWardrobeRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _add_article_wardrobe_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-article-wardrobe.component */ 74256);




const routes = [
    {
        path: '',
        component: _add_article_wardrobe_component__WEBPACK_IMPORTED_MODULE_0__.AddArticleWardrobeComponent,
    },
];
let AddArticleWardrobeRoutingModule = class AddArticleWardrobeRoutingModule {
};
AddArticleWardrobeRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddArticleWardrobeRoutingModule);



/***/ }),

/***/ 74256:
/*!**************************************************************************************!*\
  !*** ./src/app/main/wardrobe/add-article-wardrobe/add-article-wardrobe.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddArticleWardrobeComponent": () => (/* binding */ AddArticleWardrobeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_article_wardrobe_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-article-wardrobe.component.html?ngResource */ 94370);
/* harmony import */ var _add_article_wardrobe_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-article-wardrobe.component.scss?ngResource */ 96719);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var src_shared_components_add_article_title_dialog_add_article_title_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/components/add-article-title-dialog/add-article-title-dialog.component */ 96956);
/* harmony import */ var src_shared_components_brands_select_modal_brands_select_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/components/brands-select-modal/brands-select-modal.component */ 21415);
/* harmony import */ var src_shared_components_colors_select_modal_colors_select_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/components/colors-select-modal/colors-select-modal.component */ 1514);
/* harmony import */ var src_shared_components_modal_content_modal_content_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/components/modal-content/modal-content.page */ 97579);
/* harmony import */ var src_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/shared/services/storage.service */ 45785);
/* harmony import */ var src_shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/shared/services/toaster.service */ 29238);
/* harmony import */ var src_shared_state_wardrobe_state_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/shared/state/wardrobe-state.service */ 40084);
/* harmony import */ var src_shared_validators_required_condition_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/shared/validators/required-condition.directive */ 45930);
/* harmony import */ var _image_crop_modal_image_crop_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../image-crop-modal/image-crop-modal.component */ 13255);
/* harmony import */ var _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @capacitor-community/firebase-analytics */ 67285);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-spinner */ 63947);





















let AddArticleWardrobeComponent = class AddArticleWardrobeComponent {
    constructor(fb, modalController, http, toasterService, storageService, wardrobeState, location, spinner) {
        this.fb = fb;
        this.modalController = modalController;
        this.http = http;
        this.toasterService = toasterService;
        this.storageService = storageService;
        this.wardrobeState = wardrobeState;
        this.location = location;
        this.spinner = spinner;
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
        this.photosbase64 = [];
        this.selectedCategory = null;
        this.selectedColorsIds = [];
        this.categoryAncestors = [];
        this.convertBlobToBase64 = (blob) => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onerror = reject;
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(blob);
        });
    }
    ionViewWillEnter() {
        _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_13__.FirebaseAnalytics.setScreenName({
            screenName: "AddArticleScreen",
            nameOverride: "AddArticleScreen",
        });
        this.tabBar.style.display = 'none';
        _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_13__.FirebaseAnalytics.logEvent({
            name: "add_article_started",
            params: {},
        });
    }
    ionViewDidEnter() {
        this.spinner.hide('appSpinner');
    }
    ionViewWillLeave() {
        this.tabBar.style.display = 'flex';
    }
    ngOnInit() {
        this.tabBar = document.getElementById('tab-bar');
        this.initData();
        this.initForm();
        //this.categoryIndex = this.route.snapshot.paramMap.get('categoryIndex');
        this.articleForm.controls['category'].valueChanges.subscribe(newValue => {
            var _a, _b;
            ((_a = newValue === null || newValue === void 0 ? void 0 : newValue.wardrobe_additional_fields) === null || _a === void 0 ? void 0 : _a.fit_id)
                ? this.initControlValidators('fit')
                : this.resetControl('fit', '');
            ((_b = newValue.wardrobe_additional_fields) === null || _b === void 0 ? void 0 : _b.size_id)
                ? this.initControlValidators('size')
                : this.resetControl('size', '');
        });
    }
    initData() {
        this.colors = this.storageService.getJSONItemFromLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_3__.LocalStorageConstants.COLORS); //TODO: remplace by colorsMap
        this.brands = this.storageService.getJSONItemFromLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_3__.LocalStorageConstants.BRANDS);
        this.brandsMostUsed = this.storageService.getJSONItemFromLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_3__.LocalStorageConstants.MOST_USED_BRANDS);
        this.sizeGroups = this.storageService.getJSONItemFromLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_3__.LocalStorageConstants.SIZE_GROUPS);
    }
    resetControl(control, value) {
        this.articleForm.controls[control].reset(value);
        this.articleForm.controls[control].removeValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required);
        this.articleForm.controls[control].updateValueAndValidity();
    }
    initControlValidators(control) {
        this.articleForm.controls[control].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required);
    }
    initForm() {
        this.articleForm = this.fb.group({
            //title: ['', [Validators.required, Validators.maxLength(32)]],
            brand: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
            price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern('^[0-9]*$')]],
            color: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
            size: [''],
            second_hand: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
            fit: [''],
        }, {
            validators: [(0,src_shared_validators_required_condition_directive__WEBPACK_IMPORTED_MODULE_11__.RequiredConditionValidator)('size'), (0,src_shared_validators_required_condition_directive__WEBPACK_IMPORTED_MODULE_11__.RequiredConditionValidator)('fit')],
        });
    }
    presentCategoriesModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_shared_components_modal_content_modal_content_page__WEBPACK_IMPORTED_MODULE_7__.ModalContentPage,
                componentProps: {
                    currentCategory: this.selectedCategory,
                },
            });
            modal.onDidDismiss().then(category => {
                var _a;
                if (((_a = category.data) === null || _a === void 0 ? void 0 : _a.categoryValue) && category.data) {
                    this.articleForm.controls['size'].reset();
                    this.selectedCategory = category.data.categoryValue;
                    this.articleForm.controls['category'].setValue(category.data.categoryValue, {
                        emitEvent: true,
                    });
                    this.categoryAncestors = category.data.ancestors;
                }
                else if (category.data) {
                    //reset controls category
                    this.articleForm.controls['size'].reset();
                    this.selectedCategory = category.data.categoryValue;
                    this.articleForm.controls['category'].reset();
                }
            });
            yield modal.present();
        });
    }
    presentColorsModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_shared_components_colors_select_modal_colors_select_modal_component__WEBPACK_IMPORTED_MODULE_6__.ColorsSelectModalComponent,
                componentProps: {
                    currentCategory: this.selectedColorsIds,
                },
            });
            modal.onDidDismiss().then(category => {
                if (category.data) {
                    const colorsIds = category.data.map(color => color.id);
                    this.selectedColorsIds = category.data;
                    const colorsName = category.data.map(color => color.fr_display);
                    this.articleForm.controls['color'].setValue({
                        colorsName,
                        colorsIds,
                    });
                }
            });
            yield modal.present();
        });
    }
    presentBrandsModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_shared_components_brands_select_modal_brands_select_modal_component__WEBPACK_IMPORTED_MODULE_5__.BrandsSelectModalComponent,
                componentProps: {
                    currentBrand: this.articleForm.get('brand').value,
                },
            });
            modal.onDidDismiss().then(brand => {
                if (brand.data) {
                    const value = brand.data;
                    this.articleForm.patchValue({
                        brand: value,
                    }, {
                        onlySelf: false,
                        emitEvent: false,
                    });
                }
            });
            yield modal.present();
        });
    }
    addPhotoToGallery(index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            // Take a photo
            const capturedPhoto = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto({
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Uri,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Prompt,
                promptLabelPhoto: "Depuis votre galerie",
                promptLabelPicture: "Prendre une photo",
                quality: 100,
                allowEditing: false,
                height: 1100,
                width: 1000,
            }).then(photo => {
                this.readAsBase64(photo).then(base64 => {
                    console.log(this.calc_image_size(base64));
                    this.show(base64).then(result => {
                        console.log(this.calc_image_size(result));
                        if (result.includes('data:image/png;base64,')) {
                            const plop = result.replace('data:image/png;base64,', '');
                            this.photosbase64[index] = {
                                order: index + 1,
                                image_base64: plop,
                            };
                        }
                        this.photos[index] = {
                            filepath: 'soon...',
                            webviewPath: result,
                        };
                    });
                });
            });
            //const plop = plip.replace('data:image/png;base64,', '');
            /* this.photosbase64[index] = {
               order: index + 1,
               image_base64: plop
             };
             this.photos[index] = {
               filepath: "soon...",
               webviewPath: capturedPhoto.webPath
             };*/
        });
    }
    calc_image_size(image) {
        let y = 1;
        if (image.endsWith('==')) {
            y = 2;
        }
        const x_size = image.length * (3 / 4) - y;
        return Math.round(x_size / 1024);
    }
    readAsBase64(photo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
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
    onSave() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const articlesInfos = this.articleForm.value;
            const titleDialog = yield this.modalController.create({
                component: src_shared_components_add_article_title_dialog_add_article_title_dialog_component__WEBPACK_IMPORTED_MODULE_4__.AddArticleTitleDialog,
                componentProps: {
                    title: `${articlesInfos.category.fr_display} ${articlesInfos.brand.fr_display} ${articlesInfos.color.colorsName}`,
                    article: articlesInfos,
                },
                cssClass: 'article-title-modal',
            });
            titleDialog.onDidDismiss().then(titleModal => {
                var _a;
                if ((_a = titleModal.data) === null || _a === void 0 ? void 0 : _a.title) {
                    const articlesInfos = this.articleForm.value;
                    const colors = articlesInfos.color.colorsIds;
                    const item = {
                        images: this.photosbase64,
                        brand_id: articlesInfos.brand.id,
                        category_id: articlesInfos.category.id,
                        price: articlesInfos.price,
                        second_hand: articlesInfos.second_hand,
                        size_id: articlesInfos.size ? Number(articlesInfos.size) : null,
                        title: titleModal.data.title,
                        color_ids: colors,
                        fit_id: articlesInfos.fit,
                    };
                    this.spinner.show("appSpinner");
                    return this.http.post(src_app_app_constants__WEBPACK_IMPORTED_MODULE_3__.AppConstants.itemsUrl, { item }, { observe: 'response' }).subscribe((response) => {
                        _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_13__.FirebaseAnalytics.logEvent({
                            name: "add_article_finished",
                            params: {},
                        });
                        this.toasterService.presentSuccessToast(`MESSAGE.WARDROBE_ITEMS.${response.status}`);
                        const rightCategoryIndex = this.findCategoryIndex(this.categoryAncestors);
                        this.wardrobeState.addArticleInCategory(response.body.data, rightCategoryIndex);
                        if (!titleModal.data.isRemember) {
                            this.articleForm.reset();
                            this.selectedColorsIds = [];
                            this.photosbase64 = [];
                            this.selectedCategory = null;
                            this.location.back();
                        }
                        else {
                            this.articleForm.controls['color'].reset();
                            this.selectedColorsIds = [];
                            this.articleForm.controls['brand'].reset();
                            this.articleForm.controls['price'].reset();
                            this.photosbase64 = [];
                        }
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
                        this.spinner.hide("appSpinner");
                    }, error => {
                        this.toasterService.presentErrorToast(`MESSAGE.WARDROBE_ITEMS.${error.status}`);
                        this.spinner.hide("appSpinner");
                    });
                }
            });
            yield titleDialog.present();
        });
    }
    findCategoryIndex(ancestors) {
        const plop = ancestors.filter(index => src_app_app_constants__WEBPACK_IMPORTED_MODULE_3__.WardRobeConstants.categoriesIndex.indexOf(index.toString()) !== -1)[0];
        return plop;
    }
    show(imageBase64) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _image_crop_modal_image_crop_modal_component__WEBPACK_IMPORTED_MODULE_12__.ImageCropModalComponent,
                backdropDismiss: false,
                componentProps: {
                    imageBase64,
                    aspectRatio: 1 / 1.1,
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
AddArticleWardrobeComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClient },
    { type: src_shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_9__.ToasterService },
    { type: src_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_8__.StorageService },
    { type: src_shared_state_wardrobe_state_service__WEBPACK_IMPORTED_MODULE_10__.WardrobeStateService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_18__.Location },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_19__.NgxSpinnerService }
];
AddArticleWardrobeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_20__.Component)({
        selector: 'app-add-article-wardrobe',
        template: _add_article_wardrobe_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_article_wardrobe_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddArticleWardrobeComponent);



/***/ }),

/***/ 6500:
/*!***********************************************************************************!*\
  !*** ./src/app/main/wardrobe/add-article-wardrobe/add-article-wardrobe.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddArticleWardrobeModule": () => (/* binding */ AddArticleWardrobeModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-selectable */ 25073);
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/shared/shared.module */ 8395);
/* harmony import */ var _add_article_wardrobe_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-article-wardrobe-routing.module */ 23122);
/* harmony import */ var _add_article_wardrobe_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-article-wardrobe.component */ 74256);








let AddArticleWardrobeModule = class AddArticleWardrobeModule {
};
AddArticleWardrobeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            src_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _add_article_wardrobe_routing_module__WEBPACK_IMPORTED_MODULE_1__.AddArticleWardrobeRoutingModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_6__.IonicSelectableModule,
        ],
        declarations: [_add_article_wardrobe_component__WEBPACK_IMPORTED_MODULE_2__.AddArticleWardrobeComponent],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe],
    })
], AddArticleWardrobeModule);



/***/ }),

/***/ 96719:
/*!***************************************************************************************************!*\
  !*** ./src/app/main/wardrobe/add-article-wardrobe/add-article-wardrobe.component.scss?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = "/** Ionic CSS Variables **/\n:root {\n  --ion-color-white: #ffffff;\n  --ion-color-black: #000000;\n  /** primary color**/\n  --ion-color-primary: #ffde59;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #111111;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #ffeeae;\n  --ion-color-primary-tint: #ffde59;\n  /** secondary for text**/\n  --ion-color-secondary: #111111;\n  --ion-color-secondary-rgb: 17, 17, 17;\n  --ion-color-secondary-contrast: #ffde59;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0f0f0f;\n  --ion-color-secondary-tint: #292929;\n  /** tertiary used for input background and background icone**/\n  --ion-color-tertiary: #dbdbdb;\n  --ion-color-tertiary-rgb: 219, 219, 219;\n  --ion-color-tertiary-contrast: #000000;\n  --ion-color-tertiary-contrast-rgb: 0, 0, 0;\n  --ion-color-tertiary-shade: #c1c1c1;\n  --ion-color-tertiary-tint: #dfdfdf;\n  /** success **/\n  --ion-color-success: #01db72;\n  --ion-color-success-rgb: 1, 219, 114;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #01c164;\n  --ion-color-success-tint: #1adf80;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #ff1166;\n  --ion-color-danger-rgb: 255, 17, 102;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e00f5a;\n  --ion-color-danger-tint: #ff2976;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: rgba(255, 222, 89, 0.19);\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** Tab-bar **/\n  --ion-toolbar-background: white;\n  --text-font-style: \"IBMPlexSans\";\n  --title-font-style: \"IBMPlexSans\";\n}\n:root .spinner-bubbles {\n  color: var(--ion-color-primary);\n}\n:root ion-tab-button.tab-selected {\n  --color-selected: var(--ion-color-primary);\n}\n:root ion-segment {\n  --background: var(--ion-color-white);\n}\n:root ion-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --color-checked: black;\n  --indicator-transition: none;\n}\n:root ion-button {\n  text-transform: none;\n}\n:host {\n  margin-top: var(--ion-safe-area-top, 0);\n}\nion-content ion-toolbar {\n  padding: 1rem;\n  --padding-start: 0;\n  --padding-end: 0;\n}\nion-content ion-toolbar ion-back-button {\n  --border-radius: 0.625rem;\n  width: 2.5rem;\n  height: 2.5rem;\n  min-width: 40px;\n  --padding-end: 0;\n  --padding-start: 0;\n}\nion-content ion-toolbar ion-title {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: #292929;\n  font-weight: 600;\n  padding: 0;\n  display: flex;\n  text-align: center;\n  width: 100%;\n}\nion-content form {\n  padding: 0rem 1rem 3.5rem 1rem;\n}\nion-content form ion-item {\n  margin-bottom: 1rem;\n  --padding-start: 0;\n}\nion-content form ion-item ion-input {\n  --placeholder-color: $gray500;\n  --placeholder-opacity: 0.5;\n  color: var(--ion-color-secondary);\n  font-size: 16px;\n  font-family: \"IBMPlexSans\";\n}\nion-content form ion-item ion-label {\n  margin-inline: 0;\n  margin: 0;\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: normal;\n}\nion-content form ion-item .chevron-icon {\n  font-size: 12px;\n  opacity: 1;\n}\nion-content form ion-item .price-input {\n  display: inline-flex;\n  align-items: center;\n  width: 100%;\n}\nion-content form ion-item ion-select {\n  width: 100%;\n  margin: 0 10px 0 0;\n}\nion-content form ion-item ion-select::part(icon) {\n  content: url('chevron-down.svg');\n  width: 12px;\n  opacity: 1;\n}\nion-content form ion-radio-group {\n  flex-wrap: wrap;\n  border-bottom: 1px solid #dbdbdb;\n  margin-bottom: 1rem;\n  display: inline-flex;\n  width: 100%;\n  align-items: center;\n}\nion-content form ion-radio-group ion-item {\n  height: 2.5rem;\n  --inner-padding-end: 1rem;\n  margin-bottom: 0;\n}\n@media screen and (max-width: 370px) {\n  ion-content form ion-radio-group ion-item {\n    --inner-padding-end: 0.5rem;\n  }\n}\nion-content form ion-radio-group ion-radio {\n  position: relative;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-right: 0.25rem;\n  margin-left: 0;\n  height: 1rem;\n  width: 1rem;\n}\nion-content form ion-radio-group .fit-radio-buttons {\n  display: inline-flex;\n}\n@media screen and (max-width: 370px) {\n  ion-content form ion-radio-group .fit-radio-buttons {\n    display: flex;\n    flex-direction: column;\n    border-bottom: none;\n  }\n}\nion-content form .error {\n  color: red;\n}\nion-content form .pictures-container {\n  margin-top: 1rem;\n  width: 100%;\n  position: relative;\n  align-items: center;\n  display: inline-flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n}\nion-content form .pictures-container .picture-box {\n  position: relative;\n  align-items: center;\n  display: inline-flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 1rem;\n  width: calc(50vw - 1.5rem);\n  height: calc((50vw - 1.5rem) * 1.08);\n}\nion-content form .pictures-container .picture-box .sub-picture-box {\n  height: 90%;\n  width: 90%;\n  border-radius: 1rem;\n  position: relative;\n  align-items: center;\n  display: inline-flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  background: #dbdbdb;\n}\nion-content form .pictures-container .picture-box .sub-picture-box img {\n  height: 100%;\n  border-radius: 1rem;\n}\nion-content form .pictures-container .picture-box .sub-picture-box ion-icon {\n  width: 50%;\n  height: 50%;\n}\n.submit-button {\n  z-index: 1;\n  bottom: 34px;\n  height: 2.5rem;\n  position: fixed;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  width: 100%;\n  margin-bottom: 0.5rem;\n}\n.submit-button ion-button {\n  height: 100%;\n  --box-shadow: none;\n  font-size: 1.125rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: 600;\n  --border-radius: 1.25rem;\n  width: 80%;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiYWRkLWFydGljbGUtd2FyZHJvYmUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi90aGVtZS9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSwwQkFBQTtBQW9CQTtFQUNFLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsNkRBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFNQSxjQUFBO0VBbUJBLCtCQUFB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RTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQ2hLRixtQkRpS2lCO0VDaEtqQiwwQkRnSzJCO0VDL0ozQixpQ0QrSjBDO0VDOUoxQyxnQkQ4SnNFO0VBQ3BFLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQW9HSiIsImZpbGUiOiJhZGQtYXJ0aWNsZS13YXJkcm9iZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cblxuLy8gY29sb3JzXG4kYmxhY2syOiAjNDA0MDNmO1xuJGdyYXk2MDA6ICMxMTExMTE7IC8vdXNlZFxuJGdyYXk1MDA6ICMyOTI5Mjk7IC8vdXNlZFxuJGdyYXk0MDA6ICM1OTU5NTk7IC8vdXNlZFxuJGdyYXkzMDA6ICM4ODg4ODg7IC8vdXNlZFxuJGdyYXkyMDA6ICNCOEI4Qjg7XG4kZ3JheTI6ICM5ZDljOTk7XG4kZ3JheTM6ICNkYmRiZGI7XG4keWVsbG93MTAwOiAjZmZmY2VmO1xuJHllbGxvdzIwMDogI2ZmZjVjZTtcbiR5ZWxsb3czOiAjZmRlODk2O1xuJHllbGxvdzQ6ICNmY2VlYjY7XG4keWVsbG93NTogI2ZiZjJkNDtcbiR5ZWxsb3c2OiAjRkZERTU5O1xuJHdoaXRlODA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiRkYXJrNzU6IHJnYmEoMCwgMCwgMCwgMC4yNSk7IC8vYnV0dG9ucyBzaGFkb3dcblxuOnJvb3Qge1xuICAtLWlvbi1jb2xvci13aGl0ZTogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItYmxhY2s6ICMwMDAwMDA7XG4gIC8qKiBwcmltYXJ5IGNvbG9yKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICNmZmRlNTk7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA1NiwgMTI4LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICMxMTExMTE7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjZmZlZWFlO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICNmZmRlNTk7XG5cbiAgLyoqIHNlY29uZGFyeSBmb3IgdGV4dCoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMxMTExMTE7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDE3LCAxNywgMTc7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZGU1OTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMGYwZjBmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzI5MjkyOTtcblxuICAvKiogdGVydGlhcnkgdXNlZCBmb3IgaW5wdXQgYmFja2dyb3VuZCBhbmQgYmFja2dyb3VuZCBpY29uZSoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2RiZGJkYjsgLy9zYW1lIGFzIGdyYXkzXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMjE5LCAyMTksIDIxOTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICNjMWMxYzE7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICNkZmRmZGY7XG5cbiAgLyoqIHN1Y2Nlc3MgKiovXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMwMWRiNzI7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiAxLCAyMTksIDExNDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMwMWMxNjQ7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzFhZGY4MDtcblxuICAvKiogd2FybmluZyAqKi9cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmYzQwOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMTk2LCA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYWMwODtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZjYTIyO1xuXG4gIC8qKiBkYW5nZXIgKiovXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ZmMTE2NjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjU1LCAxNywgMTAyO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2UwMGY1YTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmZjI5NzY7XG5cbiAgLyoqIGRhcmsgKiovXG4gIC0taW9uLWNvbG9yLWRhcms6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuXG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzkyOTQ5YztcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTQ2LCAxNDgsIDE1NjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4MDgyODk7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjOWQ5ZmE2O1xuXG4gIC8qKiBsaWdodCAqKi9cbiAgLS1pb24tY29sb3ItbGlnaHQ6IHJnYmEoMjU1LCAyMjIsIDg5LCAwLjE5KTtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcblxuICAuc3Bpbm5lci1idWJibGVzIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG5cbiAgLyoqIFRhYi1iYXIgKiovXG4gIGlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCB7XG4gICAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG5cbiAgaW9uLXNlZ21lbnQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgfVxuXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IGJsYWNrO1xuICAgIC0taW5kaWNhdG9yLXRyYW5zaXRpb246IG5vbmU7XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgfVxuXG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tdGV4dC1mb250LXN0eWxlOiAnSUJNUGxleFNhbnMnO1xuICAtLXRpdGxlLWZvbnQtc3R5bGU6ICdJQk1QbGV4U2Fucyc7XG59XG5cbi8vIFZlcmlmaWVkXG4kd2lkdGgtc2Q6IDMwMHB4OyAvL2ZvbGRcbiR3aWR0aC1tZDogMzgwcHg7IC8vaXBob25lIFNFXG4kd2lkdGgtbGQ6IDQxMnB4OyAvL2lwaG9uZSBYUlxuJHdpZHRoLXhsZDogNzY4cHg7IC8vaXBhZCIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3RoZW1lL21peGlucy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzJztcblxuOmhvc3Qge1xuICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tc2FmZS1hcmVhLXRvcCwgMCk7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7XG5cbiAgICBpb24tYmFjay1idXR0b24ge1xuICAgICAgLy8tLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xuICAgICAgd2lkdGg6IDIuNXJlbTtcbiAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgbWluLXdpZHRoOiA0MHB4O1xuICAgICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICB9XG5cbiAgICBpb24tdGl0bGUge1xuXG4gICAgICBAaW5jbHVkZSBibGFja1N1YnRpdGxlKDFyZW0pO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuICBmb3JtIHtcbiAgICBwYWRkaW5nOiAwcmVtIDFyZW0gMy41cmVtIDFyZW07XG5cbiAgICBpb24taXRlbSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuXG4gICAgICBpb24taW5wdXQge1xuICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAkZ3JheTUwMDtcbiAgICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJztcbiAgICAgIH1cblxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luLWlubGluZTogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBAaW5jbHVkZSB0ZXh0KDFyZW0sICdJQk1QbGV4U2FucycsIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpLCBub3JtYWwpO1xuICAgICAgfVxuXG4gICAgICAuY2hldnJvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuXG4gICAgICAucHJpY2UtaW5wdXQge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIGlvbi1zZWxlY3Qge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwIDEwcHggMCAwO1xuICAgICAgfVxuXG4gICAgICBpb24tc2VsZWN0OjpwYXJ0KGljb24pIHtcbiAgICAgICAgY29udGVudDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaWNvbi9jaGV2cm9uLWRvd24uc3ZnJyk7XG4gICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1yYWRpby1ncm91cCB7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGdyYXkzO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBpb24taXRlbSB7XG4gICAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAxcmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3MHB4KSB7XG4gICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMC41cmVtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlvbi1yYWRpbyB7XG4gICAgICAgIEBpbmNsdWRlIGZsZXgocm93LCBjZW50ZXIsIGNlbnRlciwgbm93cmFwLCBmYWxzZSk7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICB9XG5cbiAgICAgIC5maXQtcmFkaW8tYnV0dG9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3MHB4KSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZXJyb3Ige1xuICAgICAgY29sb3I6IHJlZDtcbiAgICB9XG5cbiAgICAucGljdHVyZXMtY29udGFpbmVyIHtcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIEBpbmNsdWRlIGZsZXgocm93LCBjZW50ZXIsIHNwYWNlLWJldHdlZW4sIG5vd3JhcCwgdHJ1ZSk7XG5cbiAgICAgIC5waWN0dXJlLWJveCB7XG4gICAgICAgIEBpbmNsdWRlIGZsZXgocm93LCBjZW50ZXIsIGNlbnRlciwgbm93cmFwLCB0cnVlKTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgICAgICB3aWR0aDogY2FsYyg1MHZ3IC0gMS41cmVtKTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKCg1MHZ3IC0gMS41cmVtKSAqIDEuMDgpO1xuXG4gICAgICAgIC5zdWItcGljdHVyZS1ib3gge1xuICAgICAgICAgIGhlaWdodDogOTAlO1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICAgICAgICBAaW5jbHVkZSBmbGV4KHJvdywgY2VudGVyLCBjZW50ZXIsIG5vd3JhcCwgdHJ1ZSk7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2RiZGJkYjtcblxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnN1Ym1pdC1idXR0b24ge1xuICB6LWluZGV4OiAxO1xuICBib3R0b206IDM0cHg7XG4gIGhlaWdodDogMi41cmVtO1xuICBAaW5jbHVkZSBmbGV4KHJvdywgY2VudGVyLCBjZW50ZXIsIG5vd3JhcCwgZmFsc2UsIGZpeGVkKTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcblxuICBpb24tYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIEBpbmNsdWRlIHRpdGxlKDEuMTI1cmVtLCAnSUJNUGxleFNhbnMnLCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSwgNjAwKTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEuMjVyZW07XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG59IiwiQG1peGluIHRpdGxlKCRmb250LXNpemU6IDJyZW0sXG4gICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJyxcbiAgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSxcbiAgJGZvbnQtd2VpZ2h0OiBib2xkKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuXG5cbkBtaXhpbiBzaW1wbGVfYnV0dG9uKCR3aWR0aDogMjUlLCAkaGVpZ2h0OiAyLjVyZW0sICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkpIHtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xuICAtLWNvbG9yOiAkY29sb3I7XG59XG5cbkBtaXhpbiBpY29uKCR3aWR0aDogMXJlbSwgJGhlaWdodDogMXJlbSkge1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG59XG5cbkBtaXhpbiB0ZXh0KCRmb250LXNpemU6IDAuODc1cmVtLFxuICAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycsXG4gICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSksXG4gICRmb250LXdlaWdodDogbm9ybWFsKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIHRleHQtb3ZlcmZsb3coKSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5cbi8vdmVyaWZpZWRcblxuQG1peGluIGZsZXgoJGRpcmVjdGlvbjogcm93LCAkYWxpZ24taXRlbXM6IGNlbnRlciwgJGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCwgJHdyYXA6IG5vd3JhcCwgJGlubGluZTogZmFsc2UsICRwb3NpdGlvbjogcmVsYXRpdmUpIHtcbiAgcG9zaXRpb246ICRwb3NpdGlvbjtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbi1pdGVtcztcblxuICBAaWYgJGlubGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIH1cblxuICBAZWxzZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xuICBmbGV4LXdyYXA6ICR3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5LWNvbnRlbnQ7XG59XG5cbkBtaXhpbiBidXR0b24oJHdpZHRoOiAyNSUsICRoZWlnaHQ6IDIuNXJlbSwgJGZvbnQtc2l6ZTogMC44NzVyZW0sICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJywgJGZvbnQtd2VpZ2h0OiA2MDApIHtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG4gIG1pbi1oZWlnaHQ6ICRoZWlnaHQ7XG59XG5cbkBtaXhpbiB3aGl0ZVRpdGxlKCRmb250LXNpemU6IDEuNzVyZW0sICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKSwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiB3aGl0ZVN1YnRpdGxlKCRmb250LXNpemU6IDFyZW0sICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKSwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiBibGFja1RpdGxlKCRmb250LXNpemU6IDEuNzVyZW0sICRjb2xvcjogJGdyYXk1MDAsICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycsICkge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5AbWl4aW4gYmxhY2tTdWJ0aXRsZSgkZm9udC1zaXplOiAxcmVtLCAkY29sb3I6ICRncmF5NTAwLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIG1lZGl1bVRleHQoJGZvbnQtc2l6ZTogMC43NXJlbSwgJGNvbG9yOiAkZ3JheTUwMCwgJGZvbnQtd2VpZ2h0OiA1MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiByZWd1bGFyVGV4dCgkZm9udC1zaXplOiAxcmVtLCAkY29sb3I6ICRncmF5NjAwLCAkZm9udC13ZWlnaHQ6IDQwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIHNlbWlCb2xkVGV4dCgkZm9udC1zaXplOiAycmVtLCAkY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSksICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gYm9sZFRleHQoJGZvbnQtc2l6ZTogMS4xMjVyZW0sICRjb2xvcjogJGdyYXk2MDAsICRmb250LXdlaWdodDogNzAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufSJdfQ== */";

/***/ }),

/***/ 94370:
/*!***************************************************************************************************!*\
  !*** ./src/app/main/wardrobe/add-article-wardrobe/add-article-wardrobe.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button data-cy=\"goback-addarticle-button\" mode=\"md\" defaultHref=\"/main/wardrobe\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'WARDROBE.PIECES.ADD_ARTICLE' | translate }}</ion-title>\n  </ion-toolbar>\n  <form [formGroup]=\"articleForm\">\n    <ion-item id=\"Category_Field\" class=\"input\">\n      <ion-input readonly (click)=\"presentCategoriesModal()\" placeholder=\"{{ 'WARDROBE.PIECES.FORM.CATEGORY' | translate }}*\"\n        value=\"{{ articleForm.controls['category'].value?.fr_display }}\">\n      </ion-input>\n      <ion-icon class=\"chevron-icon ion-align-self-center\" src=\"../../../../assets/icon/chevron-down.svg\" slot=\"end\">\n      </ion-icon>\n    </ion-item>\n    <ion-item id=\"Brands_Field\" class=\"input\">\n      <ion-input readonly [required]=\"true\" (click)=\"presentBrandsModal()\" placeholder=\"{{ 'WARDROBE.PIECES.FORM.BRAND' | translate }}*\"\n        value=\"{{ articleForm.controls['brand'].value?.fr_display }}\">\n      </ion-input>\n      <ion-icon class=\"chevron-icon ion-align-self-center\" src=\"../../../../assets/icon/chevron-down.svg\" slot=\"end\">\n      </ion-icon>\n    </ion-item>\n\n    <ion-item id=\"Colors_Field\" class=\"input\">\n      <ion-input readonly [required]=\"true\" (click)=\"presentColorsModal()\" placeholder=\"{{ 'WARDROBE.PIECES.FORM.COLORS' | translate }}*\"\n        value=\"{{ articleForm.controls['color'].value?.colorsName }}\">\n      </ion-input>\n      <ion-icon class=\"chevron-icon ion-align-self-center\" src=\"../../../../assets/icon/chevron-down.svg\" slot=\"end\">\n      </ion-icon>\n    </ion-item>\n    <ion-item id=\"Size_Field\" *ngIf=\"selectedCategory?.wardrobe_additional_fields.size_id\">\n      <ion-select mode=\"md\" interface=\"popover\" formControlName=\"size\" cancelText=\"Annuler\" placeholder=\"{{ 'WARDROBE.PIECES.FORM.SIZE' | translate }}*\">\n        <ion-select-option id=\"size-{{ size.id }}-button\" *ngFor=\"let size of selectedCategory?.wardrobe_additional_fields.size_id.values\" value=\"{{ size.id }}\">\n          {{ size.fr_display }}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <div class=\"price-input\">\n        <ion-input formControlName=\"price\" data-cy=\"Price_Field\" placeholder=\"{{ 'WARDROBE.PIECES.FORM.PRICE' | translate }}*\" clearInput=\"true\" type=\"number\">\n        </ion-input>\n        <ion-icon slot=\"end\" name=\"logo-euro\"></ion-icon>\n      </div>\n    </ion-item>\n    <ion-radio-group class=\"radio-group\" formControlName=\"second_hand\">\n      <ion-item lines=\"none\">\n        <ion-label>{{ 'WARDROBE.PIECES.FORM.STATE.TITLE' | translate }} :</ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label>{{ 'WARDROBE.PIECES.FORM.STATE.NEW' | translate }}</ion-label>\n        <ion-radio id=\"Neuf_Radio\" mode=\"md\" slot=\"start\" [value]=\"false\"></ion-radio>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label>{{ 'WARDROBE.PIECES.FORM.STATE.ALREADY_USED' | translate }}</ion-label>\n        <ion-radio id=\"Secondhand_Radio\" mode=\"md\" slot=\"start\" [value]=\"true\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n    <ion-radio-group class=\"radio-group\" formControlName=\"fit\" *ngIf=\"selectedCategory?.wardrobe_additional_fields.fit_id\">\n      <ion-item lines=\"none\">\n        <ion-label>{{ 'WARDROBE.PIECES.FORM.FIT.TITLE' | translate }} :</ion-label>\n      </ion-item>\n      <div class=\"fit-radio-buttons\">\n        <ion-item lines=\"none\" *ngFor=\"let fit of selectedCategory?.wardrobe_additional_fields.fit_id.values\">\n          <ion-label>{{ fit.fr_display }}</ion-label>\n          <ion-radio id=\"fit-{{ fit.id }}-radiobutton\" mode=\"md\" slot=\"start\" value=\"{{ fit.id }}\"></ion-radio>\n        </ion-item>\n      </div>\n    </ion-radio-group>\n    <div class=\"pictures-container\">\n      <div class=\"picture-box\" *ngFor=\"let photo of photos; index as position\">\n        <div class=\"sub-picture-box\" attr.data-cy=\"input-picture-{{ position }}\" (click)=\"addPhotoToGallery(position)\">\n          <ion-icon *ngIf=\"photo.webviewPath === ''\" src=\"../../../assets/icon/add-camera.svg\"></ion-icon>\n          <img *ngIf=\"photo.webviewPath !== ''\" [src]=\"photo.webviewPath\" />\n        </div>\n      </div>\n    </div>\n  </form>\n  <div class=\"submit-button\">\n    <ion-button data-cy=\"Submit-addarticle-button\" (click)=\"onSave()\" color=\"primary\" expand=\"block\" [disabled]=\"!(articleForm.valid && photosbase64.length)\">{{ 'SHARED.ADD' |\n      translate }}</ion-button>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_main_wardrobe_add-article-wardrobe_add-article-wardrobe_module_ts.js.map