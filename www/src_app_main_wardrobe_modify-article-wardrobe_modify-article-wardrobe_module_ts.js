"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_main_wardrobe_modify-article-wardrobe_modify-article-wardrobe_module_ts"],{

/***/ 97402:
/*!*************************************************************************************************!*\
  !*** ./src/app/main/wardrobe/modify-article-wardrobe/modify-article-wardrobe-routing.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModifyArticleWardrobeRoutingModule": () => (/* binding */ ModifyArticleWardrobeRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _modify_article_wardrobe_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modify-article-wardrobe.component */ 83665);




const routes = [
    {
        path: '',
        component: _modify_article_wardrobe_component__WEBPACK_IMPORTED_MODULE_0__.ModifyArticleWardrobeComponent,
    },
];
let ModifyArticleWardrobeRoutingModule = class ModifyArticleWardrobeRoutingModule {
};
ModifyArticleWardrobeRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ModifyArticleWardrobeRoutingModule);



/***/ }),

/***/ 83665:
/*!********************************************************************************************!*\
  !*** ./src/app/main/wardrobe/modify-article-wardrobe/modify-article-wardrobe.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModifyArticleWardrobeComponent": () => (/* binding */ ModifyArticleWardrobeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _modify_article_wardrobe_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modify-article-wardrobe.component.html?ngResource */ 76979);
/* harmony import */ var _modify_article_wardrobe_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modify-article-wardrobe.component.scss?ngResource */ 58755);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-spinner */ 63947);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var src_shared_components_brands_select_modal_brands_select_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/components/brands-select-modal/brands-select-modal.component */ 21415);
/* harmony import */ var src_shared_components_colors_select_modal_colors_select_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/components/colors-select-modal/colors-select-modal.component */ 1514);
/* harmony import */ var src_shared_components_modal_content_modal_content_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/components/modal-content/modal-content.page */ 97579);
/* harmony import */ var src_shared_components_sizes_select_modal_sizes_select_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/components/sizes-select-modal/sizes-select-modal.component */ 30201);
/* harmony import */ var src_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/shared/services/storage.service */ 45785);
/* harmony import */ var src_shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/shared/services/toaster.service */ 29238);
/* harmony import */ var src_shared_state_wardrobe_state_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/shared/state/wardrobe-state.service */ 40084);
/* harmony import */ var src_shared_validators_required_condition_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/shared/validators/required-condition.directive */ 45930);
/* harmony import */ var _image_crop_modal_image_crop_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../image-crop-modal/image-crop-modal.component */ 13255);





















let ModifyArticleWardrobeComponent = class ModifyArticleWardrobeComponent {
    constructor(fb, modalController, http, toasterService, storageService, wardrobeState, route, location, spinner) {
        this.fb = fb;
        this.modalController = modalController;
        this.http = http;
        this.toasterService = toasterService;
        this.storageService = storageService;
        this.wardrobeState = wardrobeState;
        this.route = route;
        this.location = location;
        this.spinner = spinner;
        this.photos = [];
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
        this.tabBar.style.display = 'none';
    }
    ionViewWillLeave() {
        this.tabBar.style.display = 'flex';
    }
    ngOnInit() {
        this.currentArticle = JSON.parse(this.route.snapshot.paramMap.get('article'));
        console.log(this.currentArticle);
        this.tabBar = document.getElementById('tab-bar');
        this.initData();
        this.initForm();
        //this.categoryIndex = this.route.snapshot.paramMap.get('categoryIndex');
    }
    initData() {
        this.colors = this.storageService.getJSONItemFromLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_3__.LocalStorageConstants.COLORS_AS_MAP); //TODO: remplace by colorsMap
        this.brands = this.storageService.getJSONItemFromLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_3__.LocalStorageConstants.BRANDS_AS_MAP);
        this.brandsMostUsed = this.storageService.getJSONItemFromLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_3__.LocalStorageConstants.MOST_USED_BRANDS);
        this.sizeGroups = this.storageService.getJSONItemFromLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_3__.LocalStorageConstants.SIZE_GROUPS_AS_MAP);
        this.categoriesMap = this.storageService.getJSONItemFromLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_3__.LocalStorageConstants.CATEGORIES_AS_MAP);
        this.fitAsMap = this.storageService.getJSONItemFromLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_3__.LocalStorageConstants.FITS_AS_MAP);
    }
    initForm() {
        var _a, _b;
        this.selectedColorsIds = this.currentArticle.color_ids.map(id => this.colors[id]);
        const colorsName = this.selectedColorsIds.map(color => color.fr_display);
        const colors = {
            colorsName,
            colorsIds: this.currentArticle.color_ids,
        };
        this.articleForm = this.fb.group({
            title: [this.currentArticle.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            price: [this.currentArticle.price, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern('^[0-9]*$')]],
            color: [colors, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            brand: [this.brands[this.currentArticle.brand_id], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            category: [this.categoriesMap[this.currentArticle.category_id], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            size: [
                ((_a = this.currentArticle) === null || _a === void 0 ? void 0 : _a.size_id) >= 0 ? this.sizeGroups[this.currentArticle.size_id] : '',
            ],
            second_hand: [this.currentArticle.second_hand, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            fit: [((_b = this.currentArticle) === null || _b === void 0 ? void 0 : _b.fit_id) >= 0 ? this.currentArticle.fit_id.toString() : ''],
        }, {
            validators: [(0,src_shared_validators_required_condition_directive__WEBPACK_IMPORTED_MODULE_11__.RequiredConditionValidator)('size'), (0,src_shared_validators_required_condition_directive__WEBPACK_IMPORTED_MODULE_11__.RequiredConditionValidator)('fit')],
        });
        this.currentArticle.images.forEach((image, index) => {
            this.photos[index] = image;
            /*this.photosbase64[index] = {
              order: index + 1,
              image_base64: plop
            */
        });
    }
    presentCategoriesModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_shared_components_modal_content_modal_content_page__WEBPACK_IMPORTED_MODULE_6__.ModalContentPage,
                componentProps: {
                    currentCategory: this.articleForm.controls['category'].value,
                },
            });
            modal.onDidDismiss().then(category => {
                var _a;
                if (((_a = category.data) === null || _a === void 0 ? void 0 : _a.categoryValue) && category.data) {
                    this.articleForm.controls['size'].reset();
                    this.selectedCategory = category.data.categoryValue;
                    this.articleForm.controls['category'].setValue(category.data.categoryValue, {
                        emitEvent: false,
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_shared_components_colors_select_modal_colors_select_modal_component__WEBPACK_IMPORTED_MODULE_5__.ColorsSelectModalComponent,
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
    presentSizeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_shared_components_sizes_select_modal_sizes_select_modal_component__WEBPACK_IMPORTED_MODULE_7__.SizesSelectModalComponent,
                componentProps: {
                    currentCategory: this.articleForm.controls['category'].value,
                    currentSize: this.articleForm.controls['size'].value,
                },
            });
            modal.onDidDismiss().then(size => {
                if (size.data) {
                    this.currentArticle.size_id = size.data.id;
                    this.articleForm.controls['size'].setValue(size.data);
                }
            });
            yield modal.present();
        });
    }
    presentBrandsModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_shared_components_brands_select_modal_brands_select_modal_component__WEBPACK_IMPORTED_MODULE_4__.BrandsSelectModalComponent,
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
    ionViewDidEnter() {
        this.spinner.hide('appSpinner');
    }
    addPhotoToGallery(index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            // Take a photo
            const capturedPhoto = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto({
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Uri,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Prompt,
                promptLabelPhoto: "Depuis votre galerie",
                promptLabelPicture: "Prendre une photo",
                quality: 100,
                height: 1100,
                width: 1000,
            }).then(photo => {
                this.readAsBase64(photo).then(base64 => {
                    console.log(this.calc_image_size(base64));
                    this.show(base64).then(result => {
                        console.log(this.calc_image_size(result));
                        if (result.includes('data:image/png;base64,')) {
                            this.photos[index] = {
                                order: index + 1,
                                image_base64: result,
                            };
                        }
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            const articlesInfos = this.articleForm.value;
            const colors = articlesInfos.color.colorsIds;
            const pictures = [];
            this.photos.forEach(image => {
                if (image.image_base64) {
                    const base64 = image.image_base64.replace('data:image/png;base64,', '');
                    image.image_base64 = base64;
                    pictures.push(image);
                }
                else {
                    pictures.push(image);
                }
            });
            const item = {
                images: pictures,
                brand_id: articlesInfos.brand.id,
                category_id: articlesInfos.category.id,
                price: articlesInfos.price,
                second_hand: articlesInfos.second_hand,
                title: articlesInfos.title,
                color_ids: colors,
                id: this.currentArticle.id,
            };
            if (articlesInfos.size) {
                item['size_id'] = Number(articlesInfos.size.id);
            }
            if (articlesInfos.fit) {
                item['fit_id'] = Number(articlesInfos.fit);
            }
            //todo: refacto
            const rightCategoryIndex = this.categoriesMap[articlesInfos.category.id].ancestry.split('.')[0];
            return (this.http
                .patch(`${src_app_app_constants__WEBPACK_IMPORTED_MODULE_3__.AppConstants.itemsUrl}/${this.currentArticle.id}`, item, { observe: 'response' })
                .subscribe((response) => {
                this.toasterService.presentSuccessToast(`MESSAGE.PROFILE.EDIT_${response.status}`);
                this.wardrobeState.updateArticleInCategory(response.body.data, rightCategoryIndex);
                this.wardrobeState.hasArticleModified(response.body.data);
                this.location.back();
            }),
                error => {
                    this.toasterService.presentErrorToast(error.status);
                    //Error callback
                    //this.loading = false;
                });
        });
    }
    findCategoryIndex(ancestors) {
        const plop = ancestors.filter(index => src_app_app_constants__WEBPACK_IMPORTED_MODULE_3__.WardRobeConstants.categoriesIndex.indexOf(index.toString()) !== -1)[0];
        return plop;
    }
    show(imageBase64) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
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
ModifyArticleWardrobeComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClient },
    { type: src_shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_9__.ToasterService },
    { type: src_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_8__.StorageService },
    { type: src_shared_state_wardrobe_state_service__WEBPACK_IMPORTED_MODULE_10__.WardrobeStateService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_18__.Location },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_19__.NgxSpinnerService }
];
ModifyArticleWardrobeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_20__.Component)({
        selector: 'app-modify-article-wardrobe',
        template: _modify_article_wardrobe_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_modify_article_wardrobe_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ModifyArticleWardrobeComponent);



/***/ }),

/***/ 66348:
/*!*****************************************************************************************!*\
  !*** ./src/app/main/wardrobe/modify-article-wardrobe/modify-article-wardrobe.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModifyArticleWardrobeModule": () => (/* binding */ ModifyArticleWardrobeModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-selectable */ 25073);
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/shared/shared.module */ 8395);
/* harmony import */ var _modify_article_wardrobe_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modify-article-wardrobe-routing.module */ 97402);
/* harmony import */ var _modify_article_wardrobe_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modify-article-wardrobe.component */ 83665);








let ModifyArticleWardrobeModule = class ModifyArticleWardrobeModule {
};
ModifyArticleWardrobeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            src_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _modify_article_wardrobe_routing_module__WEBPACK_IMPORTED_MODULE_1__.ModifyArticleWardrobeRoutingModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_6__.IonicSelectableModule,
        ],
        declarations: [_modify_article_wardrobe_component__WEBPACK_IMPORTED_MODULE_2__.ModifyArticleWardrobeComponent],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe],
    })
], ModifyArticleWardrobeModule);



/***/ }),

/***/ 58755:
/*!*********************************************************************************************************!*\
  !*** ./src/app/main/wardrobe/modify-article-wardrobe/modify-article-wardrobe.component.scss?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = "/** Ionic CSS Variables **/\n:root {\n  --ion-color-white: #ffffff;\n  --ion-color-black: #000000;\n  /** primary color**/\n  --ion-color-primary: #ffde59;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #111111;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #ffeeae;\n  --ion-color-primary-tint: #ffde59;\n  /** secondary for text**/\n  --ion-color-secondary: #111111;\n  --ion-color-secondary-rgb: 17, 17, 17;\n  --ion-color-secondary-contrast: #ffde59;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0f0f0f;\n  --ion-color-secondary-tint: #292929;\n  /** tertiary used for input background and background icone**/\n  --ion-color-tertiary: #dbdbdb;\n  --ion-color-tertiary-rgb: 219, 219, 219;\n  --ion-color-tertiary-contrast: #000000;\n  --ion-color-tertiary-contrast-rgb: 0, 0, 0;\n  --ion-color-tertiary-shade: #c1c1c1;\n  --ion-color-tertiary-tint: #dfdfdf;\n  /** success **/\n  --ion-color-success: #01db72;\n  --ion-color-success-rgb: 1, 219, 114;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #01c164;\n  --ion-color-success-tint: #1adf80;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #ff1166;\n  --ion-color-danger-rgb: 255, 17, 102;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e00f5a;\n  --ion-color-danger-tint: #ff2976;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: rgba(255, 222, 89, 0.19);\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** Tab-bar **/\n  --ion-toolbar-background: white;\n  --text-font-style: \"IBMPlexSans\";\n  --title-font-style: \"IBMPlexSans\";\n}\n:root .spinner-bubbles {\n  color: var(--ion-color-primary);\n}\n:root ion-tab-button.tab-selected {\n  --color-selected: var(--ion-color-primary);\n}\n:root ion-segment {\n  --background: var(--ion-color-white);\n}\n:root ion-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --color-checked: black;\n  --indicator-transition: none;\n}\n:root ion-button {\n  text-transform: none;\n}\n:host {\n  margin-top: var(--ion-safe-area-top, 0);\n}\nion-toolbar {\n  padding: 1rem;\n  --padding-start: 0;\n  --padding-end: 0;\n}\nion-toolbar ion-back-button {\n  --background: var(--ion-color-tertiary);\n  --border-radius: 0.625rem;\n  width: 2.5rem;\n  height: 2.5rem;\n  min-width: 40px;\n  --padding-end: 0;\n  --padding-start: 0;\n}\nion-toolbar ion-title {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: #292929;\n  font-weight: 600;\n  padding: 0;\n  display: flex;\n  text-align: center;\n  width: calc(100% - 0px);\n}\nion-content form {\n  padding: 0rem 1rem 3.5rem 1rem;\n}\nion-content form ion-item {\n  margin-bottom: 1rem;\n  --padding-start: 0;\n  height: 42px;\n  --min-height: 40px;\n}\nion-content form ion-item ion-input {\n  --placeholder-color: $gray500;\n  --placeholder-opacity: 0.5;\n  color: var(--ion-color-secondary);\n  font-size: 16px;\n  font-family: \"IBMPlexSans\";\n}\nion-content form ion-item ion-label {\n  margin-inline: 0;\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: normal;\n}\nion-content form ion-item .icon {\n  position: relative;\n  color: var(--icon-color, #999);\n  bottom: 0px;\n  height: 13px;\n  margin-right: 0px;\n  padding-right: 2px;\n}\nion-content form ion-item .price-input {\n  display: inline-flex;\n  align-items: center;\n  width: 100%;\n}\nion-content form ion-item ion-select {\n  width: 100%;\n  padding-right: 7px;\n}\nion-content form ion-radio-group {\n  flex-wrap: wrap;\n  border-bottom: 1px solid #dbdbdb;\n  margin-bottom: 1rem;\n  display: inline-flex;\n  width: 100%;\n  align-items: center;\n}\nion-content form ion-radio-group ion-item {\n  height: 2.5rem;\n  --inner-padding-end: 1rem;\n  margin-bottom: 0;\n}\n@media screen and (max-width: 370px) {\n  ion-content form ion-radio-group ion-item {\n    --inner-padding-end: 0.5rem;\n  }\n}\nion-content form ion-radio-group ion-radio {\n  position: relative;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-right: 0.25rem;\n  margin-left: 0;\n  height: 1rem;\n  width: 1rem;\n}\nion-content form ion-radio-group .fit-radio-buttons {\n  display: inline-flex;\n}\n@media screen and (max-width: 370px) {\n  ion-content form ion-radio-group .fit-radio-buttons {\n    display: flex;\n    flex-direction: column;\n    border-bottom: none;\n  }\n}\nion-content form .error {\n  color: red;\n}\nion-content form .pictures-container {\n  margin-top: 1rem;\n  width: 100%;\n  position: relative;\n  align-items: center;\n  display: inline-flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n}\nion-content form .pictures-container .picture-box {\n  position: relative;\n  align-items: center;\n  display: inline-flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 1rem;\n  width: calc(50vw - 1.5rem);\n  height: calc((50vw - 1.5rem) * 1.08);\n}\nion-content form .pictures-container .picture-box .sub-picture-box {\n  height: 90%;\n  width: 90%;\n  border-radius: 1rem;\n  position: relative;\n  align-items: center;\n  display: inline-flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  background: #dbdbdb;\n}\nion-content form .pictures-container .picture-box .sub-picture-box img {\n  height: 100%;\n  border-radius: 1rem;\n}\nion-content form .pictures-container .picture-box .sub-picture-box ion-icon {\n  width: 50%;\n  height: 50%;\n}\n.submit-button {\n  z-index: 1;\n  bottom: 0;\n  height: 2.5rem;\n  position: fixed;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  width: 100%;\n  margin-bottom: 0.5rem;\n}\n.submit-button ion-button {\n  height: 100%;\n  font-size: 1.125rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: bold;\n  --border-radius: 1rem;\n  width: 80%;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwibW9kaWZ5LWFydGljbGUtd2FyZHJvYmUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi90aGVtZS9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSwwQkFBQTtBQW9CQTtFQUNFLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsNkRBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFNQSxjQUFBO0VBbUJBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQ0FBQTtBQ3BERjtBRDJCRTtFQUNFLCtCQUFBO0FDekJKO0FENkJFO0VBQ0UsMENBQUE7QUMzQko7QUQ4QkU7RUFDRSxvQ0FBQTtBQzVCSjtBRCtCRTtFQUNFLDhDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQzdCSjtBRGdDRTtFQUNFLG9CQUFBO0FDOUJKO0FBckZBO0VBQ0UsdUNBQUE7QUF3RkY7QUFyRkE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQXdGRjtBQXRGRTtFQUNFLHVDQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBd0ZKO0FBckZFO0VDcUVBLGVEcEV5QjtFQ3FFekIsMEJBRndGO0VBR3hGLGNGckZRO0VFc0ZSLGdCQUpxRTtFRGxFbkUsVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBMEZKO0FBckZFO0VBQ0UsOEJBQUE7QUF3Rko7QUF0Rkk7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBd0ZOO0FBdEZNO0VBQ0UsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBd0ZSO0FBckZNO0VBQ0UsZ0JBQUE7RUN2Qk4sZUR3Qm9CO0VDdkJwQiwwQkR1QjBCO0VDdEIxQixpQ0RzQnlDO0VDckJ6QyxtQkRxQnFFO0FBMEZ2RTtBQXZGTTtFQUNFLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUF5RlI7QUF0Rk07RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQXdGUjtBQXJGTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQXVGUjtBQW5GSTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFxRk47QUFuRk07RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQXFGUjtBQW5GUTtFQUxGO0lBTUksMkJBQUE7RUFzRlI7QUFDRjtBQW5GTTtFQ2xESixrQkFEeUg7RUFFekgsbUJEa0R5QjtFQzNDdkIsYUFBQTtFQUdGLG1CRHdDb0I7RUN2Q3BCLGlCRHVDeUM7RUN0Q3pDLHVCRHNDaUM7RUFDM0IsYUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUEwRlI7QUF2Rk07RUFDRSxvQkFBQTtBQXlGUjtBQXZGUTtFQUhGO0lBSUksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7RUEwRlI7QUFDRjtBQXRGSTtFQUNFLFVBQUE7QUF3Rk47QUFyRkk7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUM3RUosa0JBRHlIO0VBRXpILG1CRDZFdUI7RUMxRXJCLG9CQUFBO0VBT0YsbUJEbUVrQjtFQ2xFbEIsaUJEa0U4QztFQ2pFOUMsOEJEaUUrQjtBQTRGakM7QUExRk07RUNoRkosa0JBRHlIO0VBRXpILG1CRGdGeUI7RUM3RXZCLG9CQUFBO0VBT0YsbUJEc0VvQjtFQ3JFcEIsaUJEcUV5QztFQ3BFekMsdUJEb0VpQztFQUMzQiwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtBQWlHUjtBQS9GUTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUMxRlIsa0JBRHlIO0VBRXpILG1CRDBGMkI7RUN2RnpCLG9CQUFBO0VBT0YsbUJEZ0ZzQjtFQy9FdEIsaUJEK0UyQztFQzlFM0MsdUJEOEVtQztFQUMzQixtQkFBQTtBQXNHVjtBQXBHVTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQXNHWjtBQW5HVTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBcUdaO0FBN0ZBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VDaEhBLGVEaUhrRDtFQ2hIbEQsbUJEZ0htQjtFQ3pHakIsYUFBQTtFQUdGLG1CRHNHYztFQ3JHZCxpQkRxR21DO0VDcEduQyx1QkRvRzJCO0VBQzNCLFdBQUE7RUFDQSxxQkFBQTtBQXFHRjtBQW5HRTtFQUNFLFlBQUE7RUM3SkYsbUJEOEppQjtFQzdKakIsMEJENkoyQjtFQzVKM0IsaUNENEowQztFQzNKMUMsaUJEMkpzRTtFQUNwRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUF3R0oiLCJmaWxlIjoibW9kaWZ5LWFydGljbGUtd2FyZHJvYmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cblxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG5cbi8vIGNvbG9yc1xuJGJsYWNrMjogIzQwNDAzZjtcbiRncmF5NjAwOiAjMTExMTExOyAvL3VzZWRcbiRncmF5NTAwOiAjMjkyOTI5OyAvL3VzZWRcbiRncmF5NDAwOiAjNTk1OTU5OyAvL3VzZWRcbiRncmF5MzAwOiAjODg4ODg4OyAvL3VzZWRcbiRncmF5MjAwOiAjQjhCOEI4O1xuJGdyYXkyOiAjOWQ5Yzk5O1xuJGdyYXkzOiAjZGJkYmRiO1xuJHllbGxvdzEwMDogI2ZmZmNlZjtcbiR5ZWxsb3cyMDA6ICNmZmY1Y2U7XG4keWVsbG93MzogI2ZkZTg5NjtcbiR5ZWxsb3c0OiAjZmNlZWI2O1xuJHllbGxvdzU6ICNmYmYyZDQ7XG4keWVsbG93NjogI0ZGREU1OTtcbiR3aGl0ZTgwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4kZGFyazc1OiByZ2JhKDAsIDAsIDAsIDAuMjUpOyAvL2J1dHRvbnMgc2hhZG93XG5cbjpyb290IHtcbiAgLS1pb24tY29sb3Itd2hpdGU6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWJsYWNrOiAjMDAwMDAwO1xuICAvKiogcHJpbWFyeSBjb2xvcioqL1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjZmZkZTU5O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNTYsIDEyOCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjMTExMTExO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogI2ZmZWVhZTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjZmZkZTU5O1xuXG4gIC8qKiBzZWNvbmRhcnkgZm9yIHRleHQqKi9cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjMTExMTExO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiAxNywgMTcsIDE3O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmRlNTk7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzBmMGYwZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICMyOTI5Mjk7XG5cbiAgLyoqIHRlcnRpYXJ5IHVzZWQgZm9yIGlucHV0IGJhY2tncm91bmQgYW5kIGJhY2tncm91bmQgaWNvbmUqKi9cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNkYmRiZGI7IC8vc2FtZSBhcyBncmF5M1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDIxOSwgMjE5LCAyMTk7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjYzFjMWMxO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjZGZkZmRmO1xuXG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMDFkYjcyO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogMSwgMjE5LCAxMTQ7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMDFjMTY0O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICMxYWRmODA7XG5cbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmM0MDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDE5NiwgOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGFjMDg7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmY2EyMjtcblxuICAvKiogZGFuZ2VyICoqL1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNmZjExNjY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI1NSwgMTcsIDEwMjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNlMDBmNWE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZmYyOTc2O1xuXG4gIC8qKiBkYXJrICoqL1xuICAtLWlvbi1jb2xvci1kYXJrOiAjMjIyNDI4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcblxuICAvKiogbWVkaXVtICoqL1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5Mjk0OWM7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE0NiwgMTQ4LCAxNTY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODA4Mjg5O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogIzlkOWZhNjtcblxuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiByZ2JhKDI1NSwgMjIyLCA4OSwgMC4xOSk7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjQ0LCAyNDUsIDI0ODtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNWY2Zjk7XG5cbiAgLnNwaW5uZXItYnViYmxlcyB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuXG4gIC8qKiBUYWItYmFyICoqL1xuICBpb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQge1xuICAgIC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuXG4gIGlvbi1zZWdtZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIH1cblxuICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLS1jb2xvci1jaGVja2VkOiBibGFjaztcbiAgICAtLWluZGljYXRvci10cmFuc2l0aW9uOiBub25lO1xuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIH1cblxuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLXRleHQtZm9udC1zdHlsZTogJ0lCTVBsZXhTYW5zJztcbiAgLS10aXRsZS1mb250LXN0eWxlOiAnSUJNUGxleFNhbnMnO1xufVxuXG4vLyBWZXJpZmllZFxuJHdpZHRoLXNkOiAzMDBweDsgLy9mb2xkXG4kd2lkdGgtbWQ6IDM4MHB4OyAvL2lwaG9uZSBTRVxuJHdpZHRoLWxkOiA0MTJweDsgLy9pcGhvbmUgWFJcbiR3aWR0aC14bGQ6IDc2OHB4OyAvL2lwYWQiLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi8uLi90aGVtZS92YXJpYWJsZXMuc2Nzcyc7XG5cbjpob3N0IHtcbiAgbWFyZ2luLXRvcDogdmFyKC0taW9uLXNhZmUtYXJlYS10b3AsIDApO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcblxuICBpb24tYmFjay1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xuICAgIHdpZHRoOiAyLjVyZW07XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgbWluLXdpZHRoOiA0MHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICB9XG5cbiAgaW9uLXRpdGxlIHtcbiAgICBAaW5jbHVkZSBibGFja1N1YnRpdGxlKDFyZW0pO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDBweCk7XG4gIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICBmb3JtIHtcbiAgICBwYWRkaW5nOiAwcmVtIDFyZW0gMy41cmVtIDFyZW07XG5cbiAgICBpb24taXRlbSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgLS1taW4taGVpZ2h0OiA0MHB4O1xuXG4gICAgICBpb24taW5wdXQge1xuICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAkZ3JheTUwMDtcbiAgICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJztcbiAgICAgIH1cblxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luLWlubGluZTogMDtcbiAgICAgICAgQGluY2x1ZGUgdGV4dCgxcmVtLCAnSUJNUGxleFNhbnMnLCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSwgbm9ybWFsKTtcbiAgICAgIH1cblxuICAgICAgLmljb24ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pY29uLWNvbG9yLCAjOTk5KTtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIGhlaWdodDogMTNweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcbiAgICAgIH1cblxuICAgICAgLnByaWNlLWlucHV0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICBpb24tc2VsZWN0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDdweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tcmFkaW8tZ3JvdXAge1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRncmF5MztcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzBweCkge1xuICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpb24tcmFkaW8ge1xuICAgICAgICBAaW5jbHVkZSBmbGV4KHJvdywgY2VudGVyLCBjZW50ZXIsIG5vd3JhcCwgZmFsc2UpO1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgfVxuXG4gICAgICAuZml0LXJhZGlvLWJ1dHRvbnMge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzBweCkge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmVycm9yIHtcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxuXG4gICAgLnBpY3R1cmVzLWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBAaW5jbHVkZSBmbGV4KHJvdywgY2VudGVyLCBzcGFjZS1iZXR3ZWVuLCBub3dyYXAsIHRydWUpO1xuXG4gICAgICAucGljdHVyZS1ib3gge1xuICAgICAgICBAaW5jbHVkZSBmbGV4KHJvdywgY2VudGVyLCBjZW50ZXIsIG5vd3JhcCwgdHJ1ZSk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICAgICAgd2lkdGg6IGNhbGMoNTB2dyAtIDEuNXJlbSk7XG4gICAgICAgIGhlaWdodDogY2FsYygoNTB2dyAtIDEuNXJlbSkgKiAxLjA4KTtcblxuICAgICAgICAuc3ViLXBpY3R1cmUtYm94IHtcbiAgICAgICAgICBoZWlnaHQ6IDkwJTtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgICAgICAgQGluY2x1ZGUgZmxleChyb3csIGNlbnRlciwgY2VudGVyLCBub3dyYXAsIHRydWUpO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkYmRiZGI7XG5cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgei1pbmRleDogMTtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgQGluY2x1ZGUgZmxleChyb3csIGNlbnRlciwgY2VudGVyLCBub3dyYXAsIGZhbHNlLCBmaXhlZCk7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIEBpbmNsdWRlIHRpdGxlKDEuMTI1cmVtLCAnSUJNUGxleFNhbnMnLCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSwgYm9sZCk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxufSIsIkBtaXhpbiB0aXRsZSgkZm9udC1zaXplOiAycmVtLFxuICAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycsXG4gICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSksXG4gICRmb250LXdlaWdodDogYm9sZCkge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cblxuXG5AbWl4aW4gc2ltcGxlX2J1dHRvbigkd2lkdGg6IDI1JSwgJGhlaWdodDogMi41cmVtLCAkY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpKSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbiAgLS1jb2xvcjogJGNvbG9yO1xufVxuXG5AbWl4aW4gaWNvbigkd2lkdGg6IDFyZW0sICRoZWlnaHQ6IDFyZW0pIHtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xufVxuXG5AbWl4aW4gdGV4dCgkZm9udC1zaXplOiAwLjg3NXJlbSxcbiAgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnLFxuICAkY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpLFxuICAkZm9udC13ZWlnaHQ6IG5vcm1hbCkge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiB0ZXh0LW92ZXJmbG93KCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuXG4vL3ZlcmlmaWVkXG5cbkBtaXhpbiBmbGV4KCRkaXJlY3Rpb246IHJvdywgJGFsaWduLWl0ZW1zOiBjZW50ZXIsICRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQsICR3cmFwOiBub3dyYXAsICRpbmxpbmU6IGZhbHNlLCAkcG9zaXRpb246IHJlbGF0aXZlKSB7XG4gIHBvc2l0aW9uOiAkcG9zaXRpb247XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ24taXRlbXM7XG5cbiAgQGlmICRpbmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB9XG5cbiAgQGVsc2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbiAgZmxleC13cmFwOiAkd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeS1jb250ZW50O1xufVxuXG5AbWl4aW4gYnV0dG9uKCR3aWR0aDogMjUlLCAkaGVpZ2h0OiAyLjVyZW0sICRmb250LXNpemU6IDAuODc1cmVtLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycsICRmb250LXdlaWdodDogNjAwKSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xuICBtaW4taGVpZ2h0OiAkaGVpZ2h0O1xufVxuXG5AbWl4aW4gd2hpdGVUaXRsZSgkZm9udC1zaXplOiAxLjc1cmVtLCAkY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSksICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gd2hpdGVTdWJ0aXRsZSgkZm9udC1zaXplOiAxcmVtLCAkY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSksICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gYmxhY2tUaXRsZSgkZm9udC1zaXplOiAxLjc1cmVtLCAkY29sb3I6ICRncmF5NTAwLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnLCApIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xuICBtYXJnaW46IDBweDtcbn1cblxuQG1peGluIGJsYWNrU3VidGl0bGUoJGZvbnQtc2l6ZTogMXJlbSwgJGNvbG9yOiAkZ3JheTUwMCwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiBtZWRpdW1UZXh0KCRmb250LXNpemU6IDAuNzVyZW0sICRjb2xvcjogJGdyYXk1MDAsICRmb250LXdlaWdodDogNTAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gcmVndWxhclRleHQoJGZvbnQtc2l6ZTogMXJlbSwgJGNvbG9yOiAkZ3JheTYwMCwgJGZvbnQtd2VpZ2h0OiA0MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiBzZW1pQm9sZFRleHQoJGZvbnQtc2l6ZTogMnJlbSwgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIGJvbGRUZXh0KCRmb250LXNpemU6IDEuMTI1cmVtLCAkY29sb3I6ICRncmF5NjAwLCAkZm9udC13ZWlnaHQ6IDcwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn0iXX0= */";

/***/ }),

/***/ 76979:
/*!*********************************************************************************************************!*\
  !*** ./src/app/main/wardrobe/modify-article-wardrobe/modify-article-wardrobe.component.html?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-toolbar mode=\"ios\">\n  <ion-buttons slot=\"start\">\n    <ion-back-button mode=\"md\" defaultHref=\"/main/wardrobe\"></ion-back-button>\n  </ion-buttons>\n  <ion-title>{{'WARDROBE.PIECES.EDIT_ARTICLE'| translate}}</ion-title>\n</ion-toolbar>\n<ion-content>\n  <form [formGroup]=\"articleForm\">\n    <ion-item data-cy=\"title-modifyarticle-field\" class=\"input\">\n      <ion-input formControlName=\"title\" placeholder=\"{{ 'WARDROBE.PIECES.FORM.TITLE' | translate }}*\" clearInput=\"true\" type=\"text\">\n      </ion-input>\n    </ion-item>\n    <ion-item data-cy=\"category-modifyarticle-field\" class=\"input\">\n      <ion-input readonly [required]=\"true\" (click)=\"presentCategoriesModal()\" placeholder=\"{{ 'WARDROBE.PIECES.FORM.CATEGORY' | translate }}*\"\n        value=\"{{ articleForm.controls['category'].value?.fr_display }}\">\n      </ion-input>\n      <ion-icon class=\"icon ion-align-self-center\" name=\"caret-down-outline\" size=\"small\" slot=\"end\"></ion-icon>\n    </ion-item>\n    <ion-item data-cy=\"brand-modifyarticle-field\" class=\"input\">\n      <ion-input readonly [required]=\"true\" (click)=\"presentBrandsModal()\" placeholder=\"{{ 'WARDROBE.PIECES.FORM.BRAND' | translate }}*\"\n        value=\"{{ articleForm.controls['brand'].value?.fr_display }}\">\n      </ion-input>\n      <ion-icon class=\"icon ion-align-self-center\" name=\"caret-down-outline\" size=\"small\" slot=\"end\"></ion-icon>\n    </ion-item>\n\n    <ion-item data-cy=\"color-modifyarticle-field\" class=\"input\">\n      <ion-input readonly [required]=\"true\" (click)=\"presentColorsModal()\" placeholder=\"{{ 'WARDROBE.PIECES.FORM.COLORS' | translate }}*\"\n        value=\"{{ articleForm.controls['color'].value?.colorsName }}\">\n      </ion-input>\n      <ion-icon class=\"icon ion-align-self-center\" name=\"caret-down-outline\" size=\"small\" slot=\"end\"></ion-icon>\n    </ion-item>\n\n    <ion-item data-cy=\"size-modifyarticle-field\" class=\"input\" *ngIf=\"categoriesMap[currentArticle.category_id]?.wardrobe_additional_fields?.size_id\">\n      <ion-input readonly (click)=\"presentSizeModal()\" placeholder=\"{{ 'WARDROBE.PIECES.FORM.SIZE' | translate }}*\" value=\"{{ articleForm.controls['size'].value?.fr_display }}\">\n      </ion-input>\n      <ion-icon class=\"icon ion-align-self-center\" name=\"caret-down-outline\" size=\"small\" slot=\"end\"></ion-icon>\n    </ion-item>\n    <ion-item data-cy=\"price-modifyarticle-field\">\n      <div class=\"price-input\">\n        <ion-input formControlName=\"price\" placeholder=\"{{ 'WARDROBE.PIECES.FORM.PRICE' | translate }}*\" clearInput=\"true\" type=\"number\">\n        </ion-input>\n        <ion-icon slot=\"end\" name=\"logo-euro\"></ion-icon>\n      </div>\n    </ion-item>\n    <ion-radio-group class=\"radio-group\" formControlName=\"second_hand\">\n      <ion-item lines=\"none\">\n        <ion-label class=\"ion-no-margin\">{{ 'WARDROBE.PIECES.FORM.STATE.TITLE' | translate }} :</ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label class=\"ion-no-margin\">{{ 'WARDROBE.PIECES.FORM.STATE.NEW' | translate }}</ion-label>\n        <ion-radio data-cy=\"stateneuf-modifyarticle-radiobutton\" mode=\"md\" slot=\"start\" [value]=\"false\"></ion-radio>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label class=\"ion-no-margin\">{{ 'WARDROBE.PIECES.FORM.STATE.ALREADY_USED' | translate }}</ion-label>\n        <ion-radio data-cy=\"stateshand-modifyarticle-radiobutton\" mode=\"md\" slot=\"start\" [value]=\"true\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n    <ion-radio-group class=\"radio-group\" formControlName=\"fit\" *ngIf=\"currentArticle?.fit_id >= 0\">\n      <ion-item lines=\"none\">\n        <ion-label class=\"ion-no-margin\">{{ 'WARDROBE.PIECES.FORM.FIT.TITLE' | translate }} :</ion-label>\n      </ion-item>\n      <div class=\"fit-radio-buttons\">\n        <ion-item lines=\"none\" *ngFor=\"let fit of fitAsMap | keyvalue\">\n          <ion-label class=\"ion-no-margin\">{{ fit.value.fr_display }}</ion-label>\n          <ion-radio id=\"modifyfit-{{ fit.value.id }}-radiobutton\" mode=\"md\" slot=\"start\" value=\"{{ fit.value.id }}\">\n          </ion-radio>\n        </ion-item>\n      </div>\n    </ion-radio-group>\n    <div class=\"pictures-container\">\n      <div class=\"picture-box\">\n        <div data-cy=\"input-picture-0\" class=\"sub-picture-box\" (click)=\"addPhotoToGallery(0)\">\n          <ion-icon *ngIf=\"!photos[0]?.s3_presigned_url && !photos[0]?.image_base64\" src=\"../../../assets/icon/add-camera.svg\"></ion-icon>\n          <cached-img [className]=\"'wardrobe-img'\" *ngIf=\"photos[0]?.s3_presigned_url\" [src]=\"photos[0]?.s3_presigned_url\"></cached-img>\n          <cached-img [className]=\"'wardrobe-img'\" *ngIf=\"photos[0]?.image_base64\" [src]=\"photos[0]?.image_base64\">\n          </cached-img>\n        </div>\n      </div>\n      <div class=\"picture-box\">\n        <div data-cy=\"input-picture-1\" class=\"sub-picture-box\" (click)=\"addPhotoToGallery(1)\">\n          <ion-icon *ngIf=\"!photos[1]?.s3_presigned_url && !photos[1]?.image_base64\" src=\"../../../assets/icon/add-camera.svg\"></ion-icon>\n          <cached-img [className]=\"'wardrobe-img'\" *ngIf=\"photos[1]?.s3_presigned_url\" [src]=\"photos[1]?.s3_presigned_url\"></cached-img>\n          <cached-img [className]=\"'wardrobe-img'\" *ngIf=\"photos[1]?.image_base64\" [src]=\"photos[1]?.image_base64\">\n          </cached-img>\n        </div>\n      </div>\n    </div>\n  </form>\n  <div class=\"submit-button\">\n    <ion-button data-cy=\"Submit-modifyarticle-button\" (click)=\"onSave()\" color=\"primary\" expand=\"block\" [disabled]=\"false\">\n      {{'SHARED.CONFIRM' | translate}}</ion-button>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_main_wardrobe_modify-article-wardrobe_modify-article-wardrobe_module_ts.js.map