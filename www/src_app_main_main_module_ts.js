"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_main_main_module_ts"],{

/***/ 19853:
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageRoutingModule": () => (/* binding */ MainPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_shared_resolver_personal_shopper_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/shared/resolver/personal-shopper.resolver */ 93486);
/* harmony import */ var src_shared_resolver_reco_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/shared/resolver/reco.resolver */ 99941);
/* harmony import */ var src_shared_resolver_wardrobe_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/resolver/wardrobe.resolver */ 64428);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.page */ 64332);
/* harmony import */ var _angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/auth-guard */ 56566);
var MainPageRoutingModule_1;








const redirectUnauthorizedToHome = () => (0,_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_4__.redirectUnauthorizedTo)(['/home']);
let MainPageRoutingModule = MainPageRoutingModule_1 = class MainPageRoutingModule {
};
MainPageRoutingModule.routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_3__.MainPage,
        children: [
            {
                path: 'wardrobe',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_main_wardrobe_wardrobe_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./wardrobe/wardrobe.module */ 30337)).then(m => m.WardrobePageModule),
                canActivate: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToHome },
                resolve: [src_shared_resolver_wardrobe_resolver__WEBPACK_IMPORTED_MODULE_2__.WardrobeResolver, src_shared_resolver_reco_resolver__WEBPACK_IMPORTED_MODULE_1__.RecoResolver],
            },
            {
                path: 'personal-shopper',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_main_personal-shopper_personal-shopper_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./personal-shopper/personal-shopper.module */ 98612)).then(m => m.PersonalShopperPageModule),
                canActivate: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToHome },
                resolve: { PersonalShopperResolver: src_shared_resolver_personal_shopper_resolver__WEBPACK_IMPORTED_MODULE_0__.PersonalShopperResolver },
            },
            {
                path: 'personal-shopper/:error',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_main_personal-shopper_personal-shopper_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./personal-shopper/personal-shopper.module */ 98612)).then(m => m.PersonalShopperPageModule),
                canActivate: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToHome }
                //resolve: { PersonalShopperResolver, WardrobeResolver },
            },
            {
                path: 'profile',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_main_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 83602)).then(m => m.ProfilePageModule),
                canActivate: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToHome },
                resolve: [src_shared_resolver_wardrobe_resolver__WEBPACK_IMPORTED_MODULE_2__.WardrobeResolver],
            },
            {
                path: '',
                redirectTo: 'personal-shopper',
                pathMatch: 'full',
            },
        ],
    },
];
MainPageRoutingModule = MainPageRoutingModule_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(MainPageRoutingModule_1.routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    })
], MainPageRoutingModule);



/***/ }),

/***/ 65705:
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageModule": () => (/* binding */ MainPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_shared_components_common_filter_modal_common_filter_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/shared/components/common-filter-modal/common-filter-modal.component */ 65734);
/* harmony import */ var src_shared_components_filter_modal_filter_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/shared/components/filter-modal/filter-modal.component */ 79619);
/* harmony import */ var src_shared_components_search_filter_search_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/components/search-filter/search-filter.component */ 11877);
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/shared.module */ 8395);
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-routing.module */ 19853);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.page */ 64332);








let MainPageModule = class MainPageModule {
};
MainPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [src_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _main_routing_module__WEBPACK_IMPORTED_MODULE_4__.MainPageRoutingModule],
        declarations: [_main_page__WEBPACK_IMPORTED_MODULE_5__.MainPage, src_shared_components_filter_modal_filter_modal_component__WEBPACK_IMPORTED_MODULE_1__.FilterModalComponent, src_shared_components_common_filter_modal_common_filter_modal_component__WEBPACK_IMPORTED_MODULE_0__.CommonFilterModalComponent, src_shared_components_search_filter_search_filter_component__WEBPACK_IMPORTED_MODULE_2__.SearchFilterComponent],
    })
], MainPageModule);



/***/ }),

/***/ 64332:
/*!***********************************!*\
  !*** ./src/app/main/main.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPage": () => (/* binding */ MainPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _main_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.page.html?ngResource */ 98583);
/* harmony import */ var _main_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.page.scss?ngResource */ 54982);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/services/data.service */ 31043);
/* harmony import */ var src_shared_state_app_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/state/app.state.service */ 29245);
/* harmony import */ var src_shared_utils_function_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/utils/function.utils */ 44924);







let MainPage = class MainPage {
    constructor(appState, dataService) {
        this.appState = appState;
        this.dataService = dataService;
    }
    ngOnInit() {
        this.dataService.initUserInfos().then((userInfos) => this.user$ = this.appState.getUserInfos());
    }
    ionViewDidEnter() {
        (0,src_shared_utils_function_utils__WEBPACK_IMPORTED_MODULE_4__.setStyleStatusBar)("light");
    }
};
MainPage.ctorParameters = () => [
    { type: src_shared_state_app_state_service__WEBPACK_IMPORTED_MODULE_3__.AppStateService },
    { type: src_shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
MainPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-main',
        template: _main_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_main_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MainPage);



/***/ }),

/***/ 65734:
/*!************************************************************************************!*\
  !*** ./src/shared/components/common-filter-modal/common-filter-modal.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonFilterModalComponent": () => (/* binding */ CommonFilterModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _common_filter_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common-filter-modal.component.html?ngResource */ 89483);
/* harmony import */ var _common_filter_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-filter-modal.component.scss?ngResource */ 81362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);





let CommonFilterModalComponent = class CommonFilterModalComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() { }
    onValidateFilters() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            console.log('close');
            yield this.modalController.dismiss(this.data);
        });
    }
    onUncheckAll() {
        this.data.forEach(elem => (elem.checked = false));
    }
};
CommonFilterModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
CommonFilterModalComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
CommonFilterModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-common-filter-modal',
        template: _common_filter_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_common_filter_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CommonFilterModalComponent);



/***/ }),

/***/ 79619:
/*!**********************************************************************!*\
  !*** ./src/shared/components/filter-modal/filter-modal.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterModalComponent": () => (/* binding */ FilterModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _filter_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-modal.component.html?ngResource */ 95437);
/* harmony import */ var _filter_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-modal.component.scss?ngResource */ 74125);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let FilterModalComponent = class FilterModalComponent {
    // TODO: use ion-range like FormControl to add validation
    constructor() {
        this.womenFilters = [
            { name: 'Manteau & Vestes', checked: false },
            { name: 'Sweats & pulls', checked: false },
            { name: 'Blazers & costumes', checked: false },
            { name: 'Jupes - Robes', checked: false },
            { name: 'Shorts', checked: false },
            { name: 'T-shirt', checked: false },
            { name: 'Pantalons', checked: false },
        ];
        this.menFilters = [
            { name: 'Manteau & Vestes', checked: false },
            { name: 'Sweats & pulls', checked: false },
            { name: 'Blazers & costumes', checked: false },
            { name: 'Jeans', checked: false },
            { name: 'Shorts', checked: false },
            { name: 'T-shirt', checked: false },
            { name: 'Pantalons', checked: false },
        ];
        this.childrenFilters = [
            { name: 'Manteau & Vestes', checked: false },
            { name: 'Sweats & pulls', checked: false },
            { name: 'pyjamas', checked: false },
            { name: 'Jeans', checked: false },
            { name: 'Shorts', checked: false },
            { name: 'T-shirt', checked: false },
            { name: 'Pantalons', checked: false },
        ];
        this.basicFilters = ['Vetements', 'Chaussures', 'Sac', 'Accessoires'];
    }
    ngOnInit() {
        this.segment = 'femmes';
    }
    segmentChanged(ev) {
        console.log('segment changed', ev);
        this.segment = ev.detail.value;
    }
};
FilterModalComponent.ctorParameters = () => [];
FilterModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-filter-modal',
        template: _filter_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_filter_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FilterModalComponent);



/***/ }),

/***/ 11877:
/*!************************************************************************!*\
  !*** ./src/shared/components/search-filter/search-filter.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchFilterComponent": () => (/* binding */ SearchFilterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _search_filter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-filter.component.html?ngResource */ 88931);
/* harmony import */ var _search_filter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-filter.component.scss?ngResource */ 76755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _common_filter_modal_common_filter_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-filter-modal/common-filter-modal.component */ 65734);






let SearchFilterComponent = class SearchFilterComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.range = { lower: 50, upper: 350 };
    }
    ngOnInit() { }
    rangeChanged(event) {
        console.log(event);
        console.log(this.filters);
        this.range.lower = event.detail.value.lower;
        this.range.upper = event.detail.value.upper;
    }
    onOpenModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _common_filter_modal_common_filter_modal_component__WEBPACK_IMPORTED_MODULE_2__.CommonFilterModalComponent,
                cssClass: 'my-custom-modal-css',
                componentProps: {
                    data: this.filters,
                    backdropDismiss: false,
                },
            });
            modal.onDidDismiss().then(dataReturned => {
                //TODO state management
                if (dataReturned !== null && dataReturned.data !== undefined) {
                    this.dataReturned = dataReturned.data.filter(filter => filter.checked);
                    //alert('Modal Sent Data :'+ dataReturned);
                }
                else {
                    this.dataReturned = this.filters.filter(filter => filter.checked);
                }
            });
            return yield modal.present();
        });
    }
    onRemoveFilter(index) {
        console.log(index);
        this.dataReturned.splice(index, 1);
    }
};
SearchFilterComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
SearchFilterComponent.propDecorators = {
    filters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    basicFilters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
SearchFilterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-search-filter',
        template: _search_filter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_search_filter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SearchFilterComponent);



/***/ }),

/***/ 40867:
/*!**********************************************************!*\
  !*** ./src/shared/crud/personal-shopper-crud.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalShopperCRUDService": () => (/* binding */ PersonalShopperCRUDService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ 2976);




let PersonalShopperCRUDService = class PersonalShopperCRUDService {
    constructor(http) {
        this.http = http;
    }
    getProductsAsObservable(count = 5, filters) {
        const object = {
            count,
            filters,
        };
        return this.http.post(src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.productsUrl, object, { observe: 'response' });
    }
    sendEvent(events) {
        return this.http.post(src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.eventUrl, { events }).toPromise();
    }
};
PersonalShopperCRUDService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
PersonalShopperCRUDService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], PersonalShopperCRUDService);



/***/ }),

/***/ 93486:
/*!**********************************************************!*\
  !*** ./src/shared/resolver/personal-shopper.resolver.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalShopperResolver": () => (/* binding */ PersonalShopperResolver)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var _state_personal_shopper_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/personal-shopper-state.service */ 41021);





let PersonalShopperResolver = class PersonalShopperResolver {
    constructor(persoShopperState) {
        this.persoShopperState = persoShopperState;
    }
    resolve(route, state) {
        var _a;
        if ((_a = this.persoShopperState.getAvailableProducts()) === null || _a === void 0 ? void 0 : _a.length) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(true);
        }
        else {
            return this.persoShopperState.initStore().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1));
        }
    }
};
PersonalShopperResolver.ctorParameters = () => [
    { type: _state_personal_shopper_state_service__WEBPACK_IMPORTED_MODULE_0__.PersonalShopperStateService }
];
PersonalShopperResolver = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], PersonalShopperResolver);



/***/ }),

/***/ 99941:
/*!**********************************************!*\
  !*** ./src/shared/resolver/reco.resolver.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoResolver": () => (/* binding */ RecoResolver)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var _state_wardrobe_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/wardrobe-state.service */ 40084);




let RecoResolver = class RecoResolver {
    constructor(wardrobeStateServ) {
        this.wardrobeStateServ = wardrobeStateServ;
    }
    resolve(route, state) {
        if (this.wardrobeStateServ.getRecommendedStyles().value) {
            return true;
        }
        return this.wardrobeStateServ.initRecoStyles().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1));
    }
};
RecoResolver.ctorParameters = () => [
    { type: _state_wardrobe_state_service__WEBPACK_IMPORTED_MODULE_0__.WardrobeStateService }
];
RecoResolver = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], RecoResolver);



/***/ }),

/***/ 64428:
/*!**************************************************!*\
  !*** ./src/shared/resolver/wardrobe.resolver.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WardrobeResolver": () => (/* binding */ WardrobeResolver)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 83575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var _state_wardrobe_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/wardrobe-state.service */ 40084);
/* harmony import */ var _utils_function_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/function.utils */ 44924);







let WardrobeResolver = class WardrobeResolver {
    constructor(wardrobeStateServ) {
        this.wardrobeStateServ = wardrobeStateServ;
    }
    resolve(route, state) {
        if (this.isWardrobeAlreadyInit()) {
            return true;
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.zip)(this.wardrobeStateServ.initArticlesStore(src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.WardRobeConstants.categoriesIndex), this.wardrobeStateServ.initStylesStore()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(value => value[0] && value[1]));
    }
    isWardrobeAlreadyInit() {
        return !(0,_utils_function_utils__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(this.wardrobeStateServ.getAllStyles().value) && !(0,_utils_function_utils__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(this.wardrobeStateServ.extractArticlesByCategoryId(src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.WardrobeCategory.ACCESSORIES).value) && !(0,_utils_function_utils__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(this.wardrobeStateServ.extractArticlesByCategoryId(src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.WardrobeCategory.CLOTHES).value) && !(0,_utils_function_utils__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(this.wardrobeStateServ.extractArticlesByCategoryId(src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.WardrobeCategory.SHOES).value);
    }
};
WardrobeResolver.ctorParameters = () => [
    { type: _state_wardrobe_state_service__WEBPACK_IMPORTED_MODULE_1__.WardrobeStateService }
];
WardrobeResolver = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root',
    })
], WardrobeResolver);



/***/ }),

/***/ 27264:
/*!*********************************************************!*\
  !*** ./src/shared/services/personal-shopper.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalShopperService": () => (/* binding */ PersonalShopperService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _crud_personal_shopper_crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../crud/personal-shopper-crud.service */ 40867);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ 33130);





let PersonalShopperService = class PersonalShopperService {
    constructor(personalShopperCRUD, router, authServ) {
        this.personalShopperCRUD = personalShopperCRUD;
        this.router = router;
        this.authServ = authServ;
        this.products = [];
    }
    sendEvent(events) {
        return this.personalShopperCRUD.sendEvent(events);
    }
};
PersonalShopperService.ctorParameters = () => [
    { type: _crud_personal_shopper_crud_service__WEBPACK_IMPORTED_MODULE_0__.PersonalShopperCRUDService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService }
];
PersonalShopperService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], PersonalShopperService);



/***/ }),

/***/ 41021:
/*!************************************************************!*\
  !*** ./src/shared/state/personal-shopper-state.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalShopperStateService": () => (/* binding */ PersonalShopperStateService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _crud_personal_shopper_crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../crud/personal-shopper-crud.service */ 40867);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ 31043);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ 33130);
/* harmony import */ var _services_personal_shopper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/personal-shopper.service */ 27264);
/* harmony import */ var _app_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.state.service */ 29245);










let PersonalShopperStateService = class PersonalShopperStateService {
    constructor(persoShoppingServ, personalShopperCRUD, router, authServ, storage, appState) {
        this.persoShoppingServ = persoShoppingServ;
        this.personalShopperCRUD = personalShopperCRUD;
        this.router = router;
        this.authServ = authServ;
        this.storage = storage;
        this.appState = appState;
        this.availableProducts$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
    }
    getAvailableProducts() {
        return this.availableProducts$.value;
    }
    getAvailableProductsAsObservable() {
        return this.availableProducts$;
    }
    initStore() {
        const products = [];
        const filters = this.appState.getUserInfos().value.swipe_filter;
        return this.personalShopperCRUD.getProductsAsObservable(5, filters).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            response.body.data.forEach(product => {
                const imagesArray = [];
                product.images.forEach(image => {
                    imagesArray.push(image.s3_presigned_url);
                });
                products.push({
                    id: product.id,
                    visible: true,
                    detailsVisible: false,
                    name: product.description,
                    brand: product.brand_id,
                    price: `${product.price} €`,
                    like: 0,
                    view: 0,
                    images: imagesArray,
                });
            });
            this.availableProducts$.next(products);
            return true;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(err => {
            this.router.navigate(['/main/personal-shopper', err.status]);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(true);
        }));
    }
    addNewProducts() {
        const products = this.getAvailableProducts();
        const filters = this.appState.getUserInfos().value.swipe_filter ? this.appState.getUserInfos().value.swipe_filter : '';
        return this.personalShopperCRUD.getProductsAsObservable(5, filters).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            response.body.data.forEach(product => {
                const imagesArray = [];
                product.images.forEach(image => {
                    imagesArray.push(image.s3_presigned_url);
                });
                products.push({
                    id: product.id,
                    visible: true,
                    name: product.description,
                    brand: product.brand_id,
                    price: `${product.price} €`,
                    like: 0,
                    view: 0,
                    images: imagesArray,
                });
            });
            this.availableProducts$.next(products);
            return true;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(err => {
            this.router.navigate(['/main/personal-shopper', err.status]);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(true);
        }));
    }
    resetAvailableProducts() {
        this.availableProducts$.next(null);
    }
};
PersonalShopperStateService.ctorParameters = () => [
    { type: _services_personal_shopper_service__WEBPACK_IMPORTED_MODULE_3__.PersonalShopperService },
    { type: _crud_personal_shopper_crud_service__WEBPACK_IMPORTED_MODULE_0__.PersonalShopperCRUDService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService },
    { type: _app_state_service__WEBPACK_IMPORTED_MODULE_4__.AppStateService }
];
PersonalShopperStateService = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
        providedIn: 'root',
    })
], PersonalShopperStateService);



/***/ }),

/***/ 54982:
/*!************************************************!*\
  !*** ./src/app/main/main.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/** Ionic CSS Variables **/\n:root {\n  --ion-color-white: #ffffff;\n  --ion-color-black: #000000;\n  /** primary color**/\n  --ion-color-primary: #ffde59;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #111111;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #ffeeae;\n  --ion-color-primary-tint: #ffde59;\n  /** secondary for text**/\n  --ion-color-secondary: #111111;\n  --ion-color-secondary-rgb: 17, 17, 17;\n  --ion-color-secondary-contrast: #ffde59;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0f0f0f;\n  --ion-color-secondary-tint: #292929;\n  /** tertiary used for input background and background icone**/\n  --ion-color-tertiary: #dbdbdb;\n  --ion-color-tertiary-rgb: 219, 219, 219;\n  --ion-color-tertiary-contrast: #000000;\n  --ion-color-tertiary-contrast-rgb: 0, 0, 0;\n  --ion-color-tertiary-shade: #c1c1c1;\n  --ion-color-tertiary-tint: #dfdfdf;\n  /** success **/\n  --ion-color-success: #01db72;\n  --ion-color-success-rgb: 1, 219, 114;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #01c164;\n  --ion-color-success-tint: #1adf80;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #ff1166;\n  --ion-color-danger-rgb: 255, 17, 102;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e00f5a;\n  --ion-color-danger-tint: #ff2976;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: rgba(255, 222, 89, 0.19);\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** Tab-bar **/\n  --ion-toolbar-background: white;\n  --text-font-style: \"IBMPlexSans\";\n  --title-font-style: \"IBMPlexSans\";\n}\n:root .spinner-bubbles {\n  color: var(--ion-color-primary);\n}\n:root ion-tab-button.tab-selected {\n  --color-selected: var(--ion-color-primary);\n}\n:root ion-segment {\n  --background: var(--ion-color-white);\n}\n:root ion-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --color-checked: black;\n  --indicator-transition: none;\n}\n:root ion-button {\n  text-transform: none;\n}\nion-tab-bar {\n  position: absolute;\n  bottom: 1rem;\n  border: 0;\n  width: calc(100% - 2rem);\n  height: 4rem;\n  --background: var(--ion-color-secondary);\n  align-self: center;\n  border-radius: 5rem;\n  padding-bottom: 0px !important;\n}\nion-tab-bar cached-img {\n  height: 2rem;\n  width: 2rem;\n  border-radius: 50%;\n  border: 2px solid;\n}\n@media screen and (max-width: 300px) {\n  ion-tab-bar cached-img {\n    height: 22px;\n    width: 22px;\n  }\n}\nion-tab-bar ion-icon {\n  height: 3rem;\n  width: 3rem;\n}\n@media screen and (max-width: 300px) {\n  ion-tab-bar ion-icon {\n    height: 2rem;\n    width: 2rem;\n  }\n}\nion-tab-bar .profile-circle {\n  position: absolute;\n}\nion-tab-bar ion-tab-button {\n  min-width: 48px;\n}\nion-tab-bar ion-tab-button:first-child {\n  border-top-left-radius: 5rem;\n  border-bottom-left-radius: 5rem;\n}\nion-tab-bar ion-tab-button:last-child {\n  border-top-right-radius: 5rem;\n  border-bottom-right-radius: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwibWFpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsMEJBQUE7QUFvQkE7RUFDRSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLDZEQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsMENBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBTUEsY0FBQTtFQW1CQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7QUNwREY7QUQyQkU7RUFDRSwrQkFBQTtBQ3pCSjtBRDZCRTtFQUNFLDBDQUFBO0FDM0JKO0FEOEJFO0VBQ0Usb0NBQUE7QUM1Qko7QUQrQkU7RUFDRSw4Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUM3Qko7QURnQ0U7RUFDRSxvQkFBQTtBQzlCSjtBQXJGQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQXdGRjtBQXRGRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFFQSxpQkFBQTtBQXVGSjtBQXJGSTtFQVBGO0lBUUksWUFBQTtJQUNBLFdBQUE7RUF3Rko7QUFDRjtBQXJGRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBdUZKO0FBckZJO0VBSkY7SUFLSSxZQUFBO0lBQ0EsV0FBQTtFQXdGSjtBQUNGO0FBckZFO0VBQ0Usa0JBQUE7QUF1Rko7QUFwRkU7RUFDRSxlQUFBO0FBc0ZKO0FBbkZFO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtBQXFGSjtBQWxGRTtFQUNFLDZCQUFBO0VBQ0EsZ0NBQUE7QUFvRkoiLCJmaWxlIjoibWFpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cblxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG5cbi8vIGNvbG9yc1xuJGJsYWNrMjogIzQwNDAzZjtcbiRncmF5NjAwOiAjMTExMTExOyAvL3VzZWRcbiRncmF5NTAwOiAjMjkyOTI5OyAvL3VzZWRcbiRncmF5NDAwOiAjNTk1OTU5OyAvL3VzZWRcbiRncmF5MzAwOiAjODg4ODg4OyAvL3VzZWRcbiRncmF5MjAwOiAjQjhCOEI4O1xuJGdyYXkyOiAjOWQ5Yzk5O1xuJGdyYXkzOiAjZGJkYmRiO1xuJHllbGxvdzEwMDogI2ZmZmNlZjtcbiR5ZWxsb3cyMDA6ICNmZmY1Y2U7XG4keWVsbG93MzogI2ZkZTg5NjtcbiR5ZWxsb3c0OiAjZmNlZWI2O1xuJHllbGxvdzU6ICNmYmYyZDQ7XG4keWVsbG93NjogI0ZGREU1OTtcbiR3aGl0ZTgwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4kZGFyazc1OiByZ2JhKDAsIDAsIDAsIDAuMjUpOyAvL2J1dHRvbnMgc2hhZG93XG5cbjpyb290IHtcbiAgLS1pb24tY29sb3Itd2hpdGU6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWJsYWNrOiAjMDAwMDAwO1xuICAvKiogcHJpbWFyeSBjb2xvcioqL1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjZmZkZTU5O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNTYsIDEyOCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjMTExMTExO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogI2ZmZWVhZTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjZmZkZTU5O1xuXG4gIC8qKiBzZWNvbmRhcnkgZm9yIHRleHQqKi9cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjMTExMTExO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiAxNywgMTcsIDE3O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmRlNTk7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzBmMGYwZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICMyOTI5Mjk7XG5cbiAgLyoqIHRlcnRpYXJ5IHVzZWQgZm9yIGlucHV0IGJhY2tncm91bmQgYW5kIGJhY2tncm91bmQgaWNvbmUqKi9cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNkYmRiZGI7IC8vc2FtZSBhcyBncmF5M1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDIxOSwgMjE5LCAyMTk7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjYzFjMWMxO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjZGZkZmRmO1xuXG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMDFkYjcyO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogMSwgMjE5LCAxMTQ7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMDFjMTY0O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICMxYWRmODA7XG5cbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmM0MDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDE5NiwgOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGFjMDg7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmY2EyMjtcblxuICAvKiogZGFuZ2VyICoqL1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNmZjExNjY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI1NSwgMTcsIDEwMjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNlMDBmNWE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZmYyOTc2O1xuXG4gIC8qKiBkYXJrICoqL1xuICAtLWlvbi1jb2xvci1kYXJrOiAjMjIyNDI4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcblxuICAvKiogbWVkaXVtICoqL1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5Mjk0OWM7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE0NiwgMTQ4LCAxNTY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODA4Mjg5O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogIzlkOWZhNjtcblxuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiByZ2JhKDI1NSwgMjIyLCA4OSwgMC4xOSk7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjQ0LCAyNDUsIDI0ODtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNWY2Zjk7XG5cbiAgLnNwaW5uZXItYnViYmxlcyB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuXG4gIC8qKiBUYWItYmFyICoqL1xuICBpb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQge1xuICAgIC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuXG4gIGlvbi1zZWdtZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIH1cblxuICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLS1jb2xvci1jaGVja2VkOiBibGFjaztcbiAgICAtLWluZGljYXRvci10cmFuc2l0aW9uOiBub25lO1xuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIH1cblxuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLXRleHQtZm9udC1zdHlsZTogJ0lCTVBsZXhTYW5zJztcbiAgLS10aXRsZS1mb250LXN0eWxlOiAnSUJNUGxleFNhbnMnO1xufVxuXG4vLyBWZXJpZmllZFxuJHdpZHRoLXNkOiAzMDBweDsgLy9mb2xkXG4kd2lkdGgtbWQ6IDM4MHB4OyAvL2lwaG9uZSBTRVxuJHdpZHRoLWxkOiA0MTJweDsgLy9pcGhvbmUgWFJcbiR3aWR0aC14bGQ6IDc2OHB4OyAvL2lwYWQiLCJAaW1wb3J0ICcuLi8uLi90aGVtZS9taXhpbnMuc2Nzcyc7XG5AaW1wb3J0ICcuLi8uLi90aGVtZS92YXJpYWJsZXMuc2Nzcyc7XG5cbmlvbi10YWItYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDFyZW07XG4gIGJvcmRlcjogMDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDJyZW0pO1xuICBoZWlnaHQ6IDRyZW07XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuXG4gIGNhY2hlZC1pbWcge1xuICAgIGhlaWdodDogMnJlbTtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICBib3JkZXI6IDJweCBzb2xpZDtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICB3aWR0aDogMjJweDtcbiAgICB9XG4gIH1cblxuICBpb24taWNvbiB7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIHdpZHRoOiAzcmVtO1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcbiAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgIHdpZHRoOiAycmVtO1xuICAgIH1cbiAgfVxuXG4gIC5wcm9maWxlLWNpcmNsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG5cbiAgaW9uLXRhYi1idXR0b24ge1xuICAgIG1pbi13aWR0aDogNDhweDtcbiAgfVxuXG4gIGlvbi10YWItYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cmVtO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVyZW07XG4gIH1cblxuICBpb24tdGFiLWJ1dHRvbjpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXJlbTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXJlbTtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 81362:
/*!*************************************************************************************************!*\
  !*** ./src/shared/components/common-filter-modal/common-filter-modal.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = ".header {\n  display: flex;\n  height: 10%;\n  align-items: center;\n  width: 100%;\n  justify-content: center;\n}\n.header .title {\n  font-family: \"IBMPlexSans\";\n  font-size: 19px;\n  font-weight: bold;\n}\n.container {\n  height: 90%;\n}\n.item:first-child {\n  --background: rgba(17, 17, 17, 0.05);\n  border-radius: 16px 16px 0 0px;\n  margin-left: 16px;\n  margin-right: 16px;\n}\n.item {\n  --background: rgba(17, 17, 17, 0.05);\n  margin-left: 16px;\n  margin-right: 16px;\n}\n.item:last-child {\n  --background: rgba(17, 17, 17, 0.05);\n  border-radius: 0px 0px 16px 16px;\n  margin-left: 16px;\n  margin-right: 16px;\n}\nion-checkbox {\n  --size: 16px;\n}\nion-label {\n  font-family: \"IBMPlexSans\" !important;\n  font-size: 14px !important;\n  font-weight: bold;\n}\n.delete_text {\n  color: #111111;\n  font-family: \"IBMPlexSans\";\n  font-size: 14px;\n  margin-left: 16px;\n  margin-bottom: 16px;\n  text-decoration: underline;\n}\n.button {\n  color: black;\n  width: 94%;\n  align-self: center;\n  --border-radius: 16px;\n  height: 6%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi1maWx0ZXItbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFDRTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFHQTtFQUNFLFdBQUE7QUFBRjtBQUdBO0VBQ0Usb0NBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUdBO0VBQ0Usb0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUY7QUFHQTtFQUNFLG9DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUY7QUFHQTtFQUNFLFlBQUE7QUFBRjtBQUdBO0VBQ0UscUNBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FBQUY7QUFHQTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUFBRjtBQUdBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQUFGIiwiZmlsZSI6ImNvbW1vbi1maWx0ZXItbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAudGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuXG4uY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA5MCU7XG59XG5cbi5pdGVtOmZpcnN0LWNoaWxkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDE3LCAxNywgMTcsIDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4IDE2cHggMCAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi5pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDE3LCAxNywgMTcsIDAuMDUpO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuXG4uaXRlbTpsYXN0LWNoaWxkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDE3LCAxNywgMTcsIDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDE2cHggMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cblxuaW9uLWNoZWNrYm94IHtcbiAgLS1zaXplOiAxNnB4O1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJyAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kZWxldGVfdGV4dCB7XG4gIGNvbG9yOiAjMTExMTExO1xuICBmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5idXR0b24ge1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiA5NCU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNnB4O1xuICBoZWlnaHQ6IDYlO1xufSJdfQ== */";

/***/ }),

/***/ 74125:
/*!***********************************************************************************!*\
  !*** ./src/shared/components/filter-modal/filter-modal.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = ".header {\n  display: flex;\n  height: 8%;\n  align-items: center;\n  justify-content: center;\n}\n.header .title {\n  font-family: \"IBMPlexSans\";\n  font-size: 19px;\n  font-weight: bold;\n}\nion-segment {\n  background-color: white;\n  height: 48px;\n  min-height: 48px;\n}\nion-segment ion-segment-button {\n  text-transform: none;\n  --indicator-color: var(--ion-color-primary);\n  font-family: \"IBMPlexSans\";\n  font-size: 16px;\n  font-weight: bold;\n  --border-radius: 16px 16px 0px 0px;\n  --border-style: none;\n  border-bottom: 3px solid var(--ion-color-primary);\n  --background-checked: var(--ion-color-primary);\n  --color-checked: black;\n  --indicator-transition: none;\n  color: black;\n}\n.subpage {\n  height: calc(92% - 48px);\n}\n.delete_text {\n  color: #111111;\n  font-family: \"IBMPlexSans\";\n  font-size: 14px;\n  margin-left: 16px;\n  margin-bottom: 16px;\n  text-decoration: underline;\n}\n.button {\n  color: black;\n  width: 94%;\n  align-self: center;\n  --border-radius: 16px;\n  height: 6%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGO0FBQ0U7RUFDRSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNKO0FBR0E7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUFGO0FBRUU7RUFDRSxvQkFBQTtFQUNBLDJDQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsaURBQUE7RUFDQSw4Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FBQUo7QUFJQTtFQUVFLHdCQUFBO0FBRkY7QUFLQTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUFGRjtBQUtBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQUZGIiwiZmlsZSI6ImZpbHRlci1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDglO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAudGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuXG5pb24tc2VnbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XG5cbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAtLWluZGljYXRvci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE2cHggMTZweCAwcHggMHB4O1xuICAgIC0tYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IGJsYWNrO1xuICAgIC0taW5kaWNhdG9yLXRyYW5zaXRpb246IG5vbmU7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG59XG5cbi5zdWJwYWdlIHtcbiAgLy9UT0RPOiAzNXB4IHRvIGNoYW5nZVxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDglIC0gNDhweCk7XG59XG5cbi5kZWxldGVfdGV4dCB7XG4gIGNvbG9yOiAjMTExMTExO1xuICBmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5idXR0b24ge1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiA5NCU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNnB4O1xuICBoZWlnaHQ6IDYlO1xufSJdfQ== */";

/***/ }),

/***/ 76755:
/*!*************************************************************************************!*\
  !*** ./src/shared/components/search-filter/search-filter.component.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = ".price_range {\n  padding-left: 16px;\n  display: flex;\n  justify-content: space-between;\n  padding-right: 16px;\n  padding-top: 10px;\n}\n.price_range .price {\n  color: #111111;\n  font-weight: bold;\n  font-family: \"IBMPlexSans\";\n  font-size: 14px;\n}\n.price_range .ranging {\n  display: flex;\n  align-items: baseline;\n  width: 35%;\n  justify-content: space-around;\n  color: #c4c4c4;\n  font-family: \"IBMPlexSans\";\n  font-size: 12px;\n}\n.price_range .ranging .range {\n  color: #111111;\n  font-weight: bold;\n  font-family: \"IBMPlexSans\";\n  font-size: 14px;\n}\n.text {\n  color: #111111;\n  font-weight: bold;\n  font-family: \"IBMPlexSans\";\n  font-size: 14px;\n  margin-left: 16px;\n}\nion-range {\n  --bar-background: #111111;\n  --bar-height: 4px;\n  --knob-background: #c4c4c4;\n  --knob-size: 24px;\n}\nion-radio-group {\n  display: inline-flex;\n}\nion-radio-group ion-radio {\n  margin-right: 10px;\n  margin-left: 0px;\n}\n.filter_item {\n  --background: rgba(17, 17, 17, 0.05);\n  margin-left: 16px;\n  margin-right: 16px;\n}\n.filter_item:first-child {\n  --background: rgba(17, 17, 17, 0.05);\n  border-radius: 16px 16px 0 0px;\n  margin-left: 16px;\n  margin-right: 16px;\n}\n.filter_item:last-child {\n  --background: rgba(17, 17, 17, 0.05);\n  border-radius: 0px 0px 16px 16px;\n  margin-left: 16px;\n  margin-right: 16px;\n}\n.container_filters {\n  display: inline-flex;\n  padding-top: 10px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.items_filters {\n  color: #111111;\n  font-family: \"IBMPlexSans\";\n  font-size: 14px;\n  background-color: rgba(255, 222, 89, 0.19);\n  display: inline-flex;\n  align-items: center;\n  height: 29px;\n  border-radius: 8px;\n  margin-left: 16px;\n}\n.items_filters .item_text {\n  padding-left: 8px;\n}\n.items_filters ion-icon {\n  width: 30px;\n  height: 100%;\n}\nion-label {\n  font-family: \"IBMPlexSans\" !important;\n  font-size: 14px !important;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1maWx0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDRjtBQUFFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBRUo7QUFBRTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUFFSjtBQURJO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBR047QUFDQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRUY7QUFBQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FBR0Y7QUFEQTtFQUNFLG9CQUFBO0FBSUY7QUFIRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFLSjtBQUZBO0VBQ0Usb0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBS0Y7QUFIQTtFQUNFLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBTUY7QUFKQTtFQUNFLG9DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBT0Y7QUFKQTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtBQU9GO0FBTEE7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFRRjtBQVBFO0VBQ0UsaUJBQUE7QUFTSjtBQVBFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFTSjtBQU5BO0VBQ0UscUNBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FBU0YiLCJmaWxlIjoic2VhcmNoLWZpbHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmljZV9yYW5nZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgLnByaWNlIHtcbiAgICBjb2xvcjogIzExMTExMTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLnJhbmdpbmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgIHdpZHRoOiAzNSU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgY29sb3I6ICNjNGM0YzQ7XG4gICAgZm9udC1mYW1pbHk6ICdJQk1QbGV4U2Fucyc7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIC5yYW5nZSB7XG4gICAgICBjb2xvcjogIzExMTExMTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1mYW1pbHk6ICdJQk1QbGV4U2Fucyc7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICB9XG59XG4udGV4dCB7XG4gIGNvbG9yOiAjMTExMTExO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6ICdJQk1QbGV4U2Fucyc7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG5pb24tcmFuZ2Uge1xuICAtLWJhci1iYWNrZ3JvdW5kOiAjMTExMTExO1xuICAtLWJhci1oZWlnaHQ6IDRweDtcbiAgLS1rbm9iLWJhY2tncm91bmQ6ICNjNGM0YzQ7XG4gIC0ta25vYi1zaXplOiAyNHB4O1xufVxuaW9uLXJhZGlvLWdyb3VwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGlvbi1yYWRpbyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cbn1cbi5maWx0ZXJfaXRlbSB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgxNywgMTcsIDE3LCAwLjA1KTtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbi5maWx0ZXJfaXRlbTpmaXJzdC1jaGlsZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgxNywgMTcsIDE3LCAwLjA1KTtcbiAgYm9yZGVyLXJhZGl1czogMTZweCAxNnB4IDAgMHB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLmZpbHRlcl9pdGVtOmxhc3QtY2hpbGQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMTcsIDE3LCAxNywgMC4wNSk7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTZweCAxNnB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuXG4uY29udGFpbmVyX2ZpbHRlcnMge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA4cHg7XG59XG4uaXRlbXNfZmlsdGVycyB7XG4gIGNvbG9yOiAjMTExMTExO1xuICBmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjIyLCA4OSwgMC4xOSk7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDI5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIC5pdGVtX3RleHQge1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICB9XG4gIGlvbi1pY29uIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbmlvbi1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 98583:
/*!************************************************!*\
  !*** ./src/app/main/main.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs>\n  <ion-tab-bar id=\"tab-bar\" slot=\"bottom\">\n    <ion-tab-button tab=\"wardrobe\" data-cy=\"wardrobe-tab-button\">\n      <ion-icon src=\"assets/icon/hanger.svg\"></ion-icon>\n    </ion-tab-button>\n\n    <!--<ion-tab-button tab=\"search\" data-cy=\"search-tab-button\">\n      <ion-icon src=\"assets/icon/search-icon.svg\"></ion-icon>\n    </ion-tab-button>-->\n\n    <ion-tab-button tab=\"personal-shopper\" data-cy=\"personal-shopper-tab-button\">\n      <ion-icon src=\"assets/icon/logo-gray.svg\"></ion-icon>\n    </ion-tab-button>\n\n    <!--<ion-tab-button tab=\"notifications\" data-cy=\"notifications-tab-button\">\n      <ion-icon src=\"assets/icon/notifications.svg\"></ion-icon>\n    </ion-tab-button>-->\n\n    <ion-tab-button tab=\"profile\" data-cy=\"profile-tab-button\">\n      <!-- <img *ngIf=\"userAvatar\" [src]=\"userAvatar\" /> -->\n      <cached-img *ngIf=\"(user$ | async)?.avatar_s3_presigned_url as userAvatar\" [className]=\"'tab-button-img'\"\n        [src]=\"userAvatar\"></cached-img>\n      <ion-icon *ngIf=\"(user$ | async)?.avatar_s3_presigned_url as userAvatar\" class=\"profile-circle\"\n        src=\"assets/icon/circle-profile.svg\">\n      </ion-icon>\n      <ion-icon *ngIf=\"!(user$ | async)?.avatar_s3_presigned_url\" src=\"assets/icon/profile-icon.svg\"></ion-icon>\n\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>";

/***/ }),

/***/ 89483:
/*!*************************************************************************************************!*\
  !*** ./src/shared/components/common-filter-modal/common-filter-modal.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"header\">\n    <span class=\"title\">AJOUTER DES FILTRES A VOTRE RECHERCHE</span>\n  </div>\n  <div class=\"container\">\n    <ion-list>\n      <ion-item class=\"item\" *ngFor=\"let elmt of data\">\n        <ion-label>{{ elmt.name }}</ion-label>\n        <ion-checkbox\n          slot=\"end\"\n          [(ngModel)]=\"elmt.checked\"\n          mode=\"ios\"\n          checked=\"{{ elmt.checked }}\"\n        ></ion-checkbox>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n<div class=\"delete_text\" (click)=\"onUncheckAll()\">Supprimer tous les filtres</div>\n<ion-button class=\"button\" expand=\"block\" (click)=\"onValidateFilters()\">Valider</ion-button>\n";

/***/ }),

/***/ 95437:
/*!***********************************************************************************!*\
  !*** ./src/shared/components/filter-modal/filter-modal.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"header\">\n  <span class=\"title\">FILTRER</span>\n</div>\n<ion-segment value=\"femmes\" (ionChange)=\"segmentChanged($event)\">\n  <ion-segment-button value=\"femmes\">\n    <ion-label>Femmes</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"hommes\">\n    <ion-label>Hommes</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"enfants\">\n    <ion-label>Enfants</ion-label>\n  </ion-segment-button>\n</ion-segment>\n<ion-content>\n  <div class=\"subpage\" *ngIf=\"segment == 'femmes'\">\n    <app-search-filter [filters]=\"womenFilters\" [basicFilters]=\"basicFilters\"></app-search-filter>\n  </div>\n  <div class=\"subpage\" *ngIf=\"segment == 'hommes'\">\n    <app-search-filter [filters]=\"menFilters\" [basicFilters]=\"basicFilters\"></app-search-filter>\n  </div>\n  <div class=\"subpage\" *ngIf=\"segment == 'enfants'\">\n    <app-search-filter\n      [filters]=\"childrenFilters\"\n      [basicFilters]=\"basicFilters\"\n    ></app-search-filter>\n  </div>\n</ion-content>\n<div class=\"delete_text\">Supprimer tous les filtres</div>\n<ion-button class=\"button\" expand=\"block\">Filtrer la recherche</ion-button>\n";

/***/ }),

/***/ 88931:
/*!*************************************************************************************!*\
  !*** ./src/shared/components/search-filter/search-filter.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"price_range\">\n  <span class=\"price\">Prix</span>\n  <span class=\"ranging\">\n    <span>De</span><span class=\"range\">{{ range.lower }}€ </span><span> à </span\n    ><span class=\"range\">{{ range.upper }}€</span>\n  </span>\n</div>\n<ion-item lines=\"none\">\n  <ion-range\n    (ionChange)=\"rangeChanged($event)\"\n    dualKnobs=\"true\"\n    debounce=\"250\"\n    pin=\"false\"\n    min=\"0\"\n    max=\"2000\"\n    step=\"50\"\n    [(ngModel)]=\"range\"\n  >\n  </ion-range>\n</ion-item>\n<div class=\"text\">Afficher par</div>\n<ion-radio-group>\n  <ion-item lines=\"none\">\n    <ion-label>Recommandé</ion-label>\n    <ion-radio slot=\"start\" mode=\"md\" color=\"primary\" value=\"Recommandé\"></ion-radio>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label>Récent</ion-label>\n    <ion-radio slot=\"start\" mode=\"md\" color=\"primary\" value=\"Récent\"></ion-radio>\n  </ion-item>\n</ion-radio-group>\n<ion-list>\n  <ion-item\n    lines=\"none\"\n    (click)=\"onOpenModal()\"\n    class=\"filter_item\"\n    *ngFor=\"let item of basicFilters\"\n  >\n    <ion-label text-wrap>{{ item }}</ion-label>\n    <ion-icon color=\"secondary\" slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n  </ion-item>\n</ion-list>\n<div class=\"container_filters\" *ngIf=\"dataReturned\">\n  <ion-chip outline color=\"dark\" *ngFor=\"let item of dataReturned; let index = index\">\n    <ion-label>{{ item.name }}</ion-label>\n    <ion-icon name=\"close-circle\" (click)=\"onRemoveFilter(index)\"></ion-icon>\n  </ion-chip>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_main_main_module_ts.js.map