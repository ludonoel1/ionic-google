(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _shared_resolver_storage_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/resolver/storage.resolver */ 36043);
/* harmony import */ var _angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/auth-guard */ 56566);
/* harmony import */ var src_shared_guards_login_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/shared/guards/login.guard */ 79582);
var AppRoutingModule_1;






const redirectUnauthorizedToHome = () => (0,_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_2__.redirectUnauthorizedTo)(['/home']);
const redirectLoggedInToMain = () => (0,_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_2__.redirectLoggedInTo)(['/main']);
let AppRoutingModule = AppRoutingModule_1 = class AppRoutingModule {
};
AppRoutingModule.routes = [
    {
        path: 'main',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_firebase_auth_dist_esm2017_index-30f3030e_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_main_main_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./main/main.module */ 65705)).then(m => m.MainPageModule),
        canLoad: [src_shared_guards_login_guard__WEBPACK_IMPORTED_MODULE_1__.LoginGuard],
        resolve: { StorageResolver: _shared_resolver_storage_resolver__WEBPACK_IMPORTED_MODULE_0__.StorageResolver },
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_firebase_auth_dist_esm2017_index-30f3030e_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 80107)).then(m => m.LoginModule),
        canActivate: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToMain }
    },
    {
        path: 'register/:slide',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_firebase_auth_dist_esm2017_index-30f3030e_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_register_register_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./register/register.module */ 18723)).then(m => m.RegisterModule),
    },
    {
        path: 'register-home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_firebase_auth_dist_esm2017_index-30f3030e_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_register-home_register-home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./register-home/register-home.module */ 63608)).then(m => m.RegisterHomeModule),
        canActivate: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToMain }
    },
    {
        path: 'onboarding',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_onboarding_onboarding_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./onboarding/onboarding.module */ 33970)).then(m => m.OnBoardingModule),
        canActivate: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToHome },
    },
    {
        path: 'onboarding-beyond',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_onboarding-beyond_onboarding-beyond_page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./onboarding-beyond/onboarding-beyond.page.module */ 98431)).then(m => m.OnboardingBeyondPageModule),
        canActivate: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToHome },
    },
    {
        path: 'error',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_error_error_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./error/error.module */ 26419)).then(m => m.ErrorModule),
    },
    {
        path: 'recommendation-advice/:advices',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_mjs"), __webpack_require__.e("src_app_recommendation-advice_recommendation-advice_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./recommendation-advice/recommendation-advice.module */ 12330)).then(m => m.RecommendationAdviceModule),
        canActivate: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToHome },
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule),
        canActivate: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToMain }
    },
    {
        path: 'welcome-features',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_mjs"), __webpack_require__.e("src_app_welcome-features_welcome-features_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./welcome-features/welcome-features.module */ 13485)).then(m => m.WelcomeFeaturesModule),
        canActivate: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToMain }
    },
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full',
    },
];
AppRoutingModule = AppRoutingModule_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(AppRoutingModule_1.routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_5__.PreloadAllModules }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/filesystem */ 91662);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/splash-screen */ 82239);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/status-bar */ 19326);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var instabug_cordova__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! instabug-cordova */ 6870);
/* harmony import */ var instabug_cordova__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(instabug_cordova__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var instabug_cordova_www_BugReporting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! instabug-cordova/www/BugReporting */ 40774);
/* harmony import */ var instabug_cordova_www_BugReporting__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(instabug_cordova_www_BugReporting__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ 63947);
/* harmony import */ var src_shared_utils_subscriber_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/utils/subscriber-component */ 16391);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/device */ 4744);
/* harmony import */ var _hugotomazi_capacitor_navigation_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @hugotomazi/capacitor-navigation-bar */ 46944);
















let AppComponent = class AppComponent extends src_shared_utils_subscriber_component__WEBPACK_IMPORTED_MODULE_7__.SubscriberComponent {
    constructor(platform, router, navController, translateService, spinner) {
        super();
        this.platform = platform;
        this.router = router;
        this.navController = navController;
        this.translateService = translateService;
        this.spinner = spinner;
        this.createCacheFolder();
        this.initializeApp();
    }
    initializeApp() {
        if (this.platform.is("capacitor")) {
            instabug_cordova__WEBPACK_IMPORTED_MODULE_5__.Instabug.start('7a9dcfc8a4e862f02d034f9bbce4f217', [(instabug_cordova_www_BugReporting__WEBPACK_IMPORTED_MODULE_6___default().invocationEvents.button)], function () {
                console.log('Instabug initialized.');
            }, function (error) {
                console.log('Instabug could not be initialized - ' + error);
            });
        }
        //    StatusBar.setOverlaysWebView;
        this.platform.ready().then(() => {
            this.spinner.show('appSpinner');
            this.translateService.setDefaultLang('fr'); // fallback when key not found
            //this.translateService.use("fr")
            _capacitor_device__WEBPACK_IMPORTED_MODULE_8__.Device.getLanguageCode().then(lang => this.translateService.use(lang.value));
            setTimeout(() => {
                console.log("splashscreen hide");
                _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_3__.SplashScreen.hide();
                _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_4__.StatusBar.setBackgroundColor({ color: "#ffffff" });
                //StatusBar.hide({ animation: Animation.Fade });
                _hugotomazi_capacitor_navigation_bar__WEBPACK_IMPORTED_MODULE_9__.NavigationBar.hide();
            }, 1000);
            /*this.dataService.getUserData().then(userData => {
              if (userData) {
                this.appState.setUserInfos(userData)
                this.fcmService.initPush(userData)
                FirebaseAnalytics.setUserId({
                  userId: userData.id,
                });
              }
            })*/
            this.addSubscription(this.platform.backButton.subscribeWithPriority(0, () => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                if (this.router.url == '/onboarding' || this.router.url == '/onboarding-beyond') { }
                if (this.router.url == '/main/personal-shopper') {
                    navigator['app'].exitApp();
                }
                else {
                    this.navController.back();
                }
            })));
        });
    }
    // TODO use a service for cache
    createCacheFolder() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.mkdir({
                directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Cache,
                path: `CACHED-IMG`
            }).catch(error => {
                // Directory already exists
            });
        });
    }
    ngOnDestroy() {
        this.removeAllSubscriptions();
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_14__.NgxSpinnerService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 2976:
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppConstants": () => (/* binding */ AppConstants),
/* harmony export */   "AuthenticationConstants": () => (/* binding */ AuthenticationConstants),
/* harmony export */   "EventConstants": () => (/* binding */ EventConstants),
/* harmony export */   "LocalStorageConstants": () => (/* binding */ LocalStorageConstants),
/* harmony export */   "NotificationsConstants": () => (/* binding */ NotificationsConstants),
/* harmony export */   "ProfileConstants": () => (/* binding */ ProfileConstants),
/* harmony export */   "RoutesConstants": () => (/* binding */ RoutesConstants),
/* harmony export */   "WardRobeConstants": () => (/* binding */ WardRobeConstants),
/* harmony export */   "WardrobeCategory": () => (/* binding */ WardrobeCategory)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../environments/environment */ 92340);

class AppConstants {
}
AppConstants.app_name = `Younzee`;
AppConstants.deviceTokenUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.apiUrl}/api/v1/notification_profiles`;
AppConstants.registerUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.apiUrl}/api/v1/register`;
AppConstants.loginUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.apiUrl}/api/v1/login`;
AppConstants.shopperUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.apiUrl}/api/v1/shoppers`;
AppConstants.productsUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.apiUrl}/api/v1/personnal_shopper_products`;
AppConstants.eventUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.apiUrl}/api/v1/events`;
AppConstants.brandsUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.apiUrl}/api/v1/brands`;
AppConstants.brandsAsMapUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.apiUrl}/api/v1/brands/as_map`;
AppConstants.brandsMostUsedUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.apiUrl}/api/v1/brands?filter[most_used]=true`;
AppConstants.userInfosUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.apiUrl}/api/v1/auth0/user_info`;
AppConstants.resendEmailUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.apiUrl}/api/v1/auth0/resend_verification_email`;
AppConstants.colorsUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.apiUrl}/api/v1/colors`;
AppConstants.colorsUrlAsMap = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.apiUrl}/api/v1/colors/as_map`;
AppConstants.categoriesUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.apiUrl}/api/v1/categories/add_drop_down_view`;
AppConstants.categoriesUrlAsMap = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.apiUrl}/api/v1/categories/as_map`;
AppConstants.sizeGroupsUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.apiUrl}/api/v1/sizes/as_map`;
AppConstants.itemsByCategoriesUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.apiUrl}/api/v1/items?filter[category_id]=`;
AppConstants.itemsUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.apiUrl}/api/v1/items`;
AppConstants.styleUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.apiUrl}/api/v1/styles`;
AppConstants.fitsUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.apiUrl}/api/v1/fits/as_map`;
AppConstants.recommendedStylesUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.apiUrl}/api/v1/recommended_styles`;
AppConstants.eventVersion = 1;
AppConstants.AUTH_KEY_LOCALSTORAGE = `isAuthenticated`;
AppConstants.MEN = `Masculin`;
class RoutesConstants {
}
RoutesConstants.RECOMMENDATIONS = "main/wardrobe/style-reco";
RoutesConstants.RECOMMENDATION_ADVICES = "/recommendation-advice";
RoutesConstants.ADD_ARTICLE = "main/wardrobe/add-article";
class ProfileConstants {
}
ProfileConstants.bodyFormTitles = [`Taille (cm)`, `Poids (kg)`, `taille de poitrine (cm)`];
ProfileConstants.personalFormTitles = [
    `Prénom`,
    `Nom`,
    `Nom de profil`,
    `Pseudonyme`,
    `Sexe`,
    `Date de naissance`,
];
ProfileConstants.genders = [
    { id: 0, name: `SHARED.WOMAN` },
    { id: 1, name: `SHARED.MAN` },
    { id: 2, name: `SHARED.OTHER` },
];
ProfileConstants.swipeFiltersGenders = [
    { id: 0, name: `SHARED.WOMAN` },
    { id: 1, name: `SHARED.MAN` },
    { id: ``, name: `SHARED.BOTH` },
];
ProfileConstants.slideTitles = [`Welcome`, `Personal`, `Beyond`];
ProfileConstants.registerSlides = [`Mail`, `Password`, `BeforeAll`, `CreateProfile`, `ConfirmMail`];
ProfileConstants.morphologySlides = [`Body`, `Morpho`, `Sizes`, `Congrats`];
ProfileConstants.slidesOptions = {
    allowTouchMove: false,
    autoHeight: false,
};
class LocalStorageConstants {
}
LocalStorageConstants.DEVICE_TOKEN = `device-token`;
LocalStorageConstants.USER_INFOS = `userInfos`;
LocalStorageConstants.COLORS = `wardrobe-colors`;
LocalStorageConstants.COLORS_AS_MAP = `wardrobe-colors-as-map`;
LocalStorageConstants.BRANDS = `wardrobe-brands`;
LocalStorageConstants.BRANDS_AS_MAP = `wardrobe-brands-as-map`;
LocalStorageConstants.CATEGORIES = `wardrobe-categories`;
LocalStorageConstants.MOST_USED_BRANDS = `wardrobe-most-used-brands`;
LocalStorageConstants.SIZE_GROUPS = `wardrobe-size-groups`;
LocalStorageConstants.SIZE_GROUPS_AS_MAP = `wardrobe-size-groups-as-map`;
LocalStorageConstants.CATEGORIES_AS_MAP = `wardrobe-categories-as-map`;
LocalStorageConstants.FITS_AS_MAP = `wardrobe-fits-as-map`;
LocalStorageConstants.STORAGE_KEYS = [
    LocalStorageConstants.COLORS,
    LocalStorageConstants.COLORS_AS_MAP,
    LocalStorageConstants.BRANDS_AS_MAP,
    LocalStorageConstants.SIZE_GROUPS_AS_MAP,
    LocalStorageConstants.BRANDS,
    LocalStorageConstants.CATEGORIES,
    LocalStorageConstants.MOST_USED_BRANDS,
    LocalStorageConstants.CATEGORIES_AS_MAP,
    LocalStorageConstants.FITS_AS_MAP,
];
class EventConstants {
}
EventConstants.undoActions = {
    like: `unlike`,
    hate: `unhate`,
    add_to_wishlist: `remove_from_wishlist`,
    dislike: `undislike`,
};
EventConstants.panActionsEvents = {
    panup: `add_to_wishlist`,
    pandown: `hate`,
    panright: `like`,
    panleft: `dislike`,
};
class WardRobeConstants {
}
WardRobeConstants.categoriesIndex = [`FAM_01`, `FAM_02`, `FAM_03`];
WardRobeConstants.SEGMENTS_TITLES = [`WARDROBE.PIECES.TITLE`, `WARDROBE.STYLES.TITLE`];
WardRobeConstants.slidesOptions = {
    freeMode: true,
    slidesPerView: 2.2,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    breakpoints: {
        320: {
            slidesPerView: 3.25,
            spaceBetween: 0,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
    },
};
WardRobeConstants.MAX_CLOTHES_ITEMS = 6;
WardRobeConstants.MAX_ACCESSORY_ITEMS = 3;
WardRobeConstants.MAX_SHOES_ITEMS = 1;
WardRobeConstants.SLIDES_TITLES = [
    `ALL`,
    `FAM_01`,
    `FAM_02`,
    `FAM_03`,
];
var WardrobeCategory;
(function (WardrobeCategory) {
    WardrobeCategory["CLOTHES"] = "FAM_01";
    WardrobeCategory["SHOES"] = "FAM_02";
    WardrobeCategory["ACCESSORIES"] = "FAM_03";
})(WardrobeCategory || (WardrobeCategory = {}));
class NotificationsConstants {
}
NotificationsConstants.RECOMMENDATION_FAILED = "recommendation_failed";
NotificationsConstants.RECOMMENDATIONS = "recommendation";
class AuthenticationConstants {
}
AuthenticationConstants.authProviders = ["email", "google", "facebook"]; //"apple"
AuthenticationConstants.externeAuthProviders = ["google", "facebook"]; //"apple"
AuthenticationConstants.welcome_features = [
    {
        image_src: "../assets/images/numerize-wardrobe.svg",
        translate_key: "NUMERIZE",
    },
    {
        image_src: "../assets/images/style-creation.svg",
        translate_key: "CREATION",
    },
    {
        image_src: "../assets/images/customized-advice.svg",
        translate_key: "CUSTOMIZED",
    },
    {
        image_src: "../assets/images/sustainable.svg",
        translate_key: "SUSTAINABLE",
    }
];


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "MyHammerConfig": () => (/* binding */ MyHammerConfig)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ 5046);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ 75347);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ 15977);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ionic-selectable */ 25073);
/* harmony import */ var src_shared_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/interceptors/auth.interceptor */ 69995);
/* harmony import */ var src_shared_interceptors_errors_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/interceptors/errors.interceptor */ 36382);
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/shared.module */ 8395);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _main_wardrobe_image_crop_modal_image_crop_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/wardrobe/image-crop-modal/image-crop-modal.component */ 13255);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/compat */ 11879);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/storage-angular */ 47566);






















let MyHammerConfig = class MyHammerConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.HammerGestureConfig {
    constructor() {
        super(...arguments);
        this.overrides = {
            pan: { direction: hammerjs__WEBPACK_IMPORTED_MODULE_1__.DIRECTION_ALL },
        };
    }
};
MyHammerConfig = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
        providedIn: 'root',
    })
], MyHammerConfig);

function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__.TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent],
        entryComponents: [],
        imports: [
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_13__.IonicStorageModule.forRoot({
                name: "frontDatabase"
            }),
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_14__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__.env.firebaseConfig),
            _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__.AngularFireAuthModule,
            _main_wardrobe_image_crop_modal_image_crop_modal_component__WEBPACK_IMPORTED_MODULE_7__.ImageCropModalModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_17__.IonicSelectableModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.HammerModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule.forRoot({
                defaultLanguage: 'fr',
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClient],
                },
            }),
            _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonicModule.forRoot({
                rippleEffect: false,
                swipeBackEnabled: false
            }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
            src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonicRouteStrategy },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HTTP_INTERCEPTORS, useClass: src_shared_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_2__.AuthInterceptor, multi: true, deps: [_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__.AngularFireAuth] },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HTTP_INTERCEPTORS, useClass: src_shared_interceptors_errors_interceptor__WEBPACK_IMPORTED_MODULE_3__.ErrorInterceptor, multi: true },
            _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_0__.PhotoViewer,
            {
                provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.HAMMER_GESTURE_CONFIG,
                useClass: MyHammerConfig,
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 13255:
/*!******************************************************************************!*\
  !*** ./src/app/main/wardrobe/image-crop-modal/image-crop-modal.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageCropModalComponent": () => (/* binding */ ImageCropModalComponent),
/* harmony export */   "ImageCropModalModule": () => (/* binding */ ImageCropModalModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _image_crop_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-crop-modal.component.html?ngResource */ 2471);
/* harmony import */ var _image_crop_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-crop-modal.component.scss?ngResource */ 67326);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-image-cropper */ 67545);








let ImageCropModalComponent = class ImageCropModalComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.croppedImageBase64 = '';
        /**
         * Image to be cropped as a base64 string.
         * Should be passed in from the component calling this modal.
         */
        this.imageBase64 = '';
        this.aspectRatio = 1 / 1;
    }
    /*ionViewWillEnter() {
      StatusBar.setBackgroundColor({ color: '#FFDE59' })
    }
  
    ionViewWillLeave() {
      StatusBar.setBackgroundColor({ color: '#FFFFFF' })
    }*/
    ngOnInit() {
        //
        console.log('imageCropModal');
        console.log(this.imageBase64);
    }
    imageCropped(event) {
        this.croppedImageBase64 = event.base64;
    }
    dismissModal(croppedImageBase64) {
        this.modalController.dismiss({ croppedImageBase64 });
    }
};
ImageCropModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
ImageCropModalComponent.propDecorators = {
    imageBase64: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
ImageCropModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-image-crop-modal',
        template: _image_crop_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        styles: [_image_crop_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ImageCropModalComponent);

let ImageCropModalModule = class ImageCropModalModule {
};
ImageCropModalModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__.ImageCropperModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
        declarations: [ImageCropModalComponent],
    })
], ImageCropModalModule);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "env": () => (/* binding */ env)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const env = {
    production: false,
    auth0domain: 'younzee.eu.auth0.com',
    auth0ClientId: 'hVL8ls4rELCpZOr74RddCqkoJUAgRKNh',
    apiUrl: "https://apidev.younzee.com",
    ios_app_id: "com.younzee.appdev",
    android_app_id: "com.younzee.app.dev",
    firebaseConfig: {
        apiKey: "AIzaSyAy9JsFjQm0wuzxyW-XEFBCW5Kq8FnXWCA",
        authDomain: "younzee-dev.firebaseapp.com",
        databaseURL: "https://younzee-dev-default-rtdb.europe-west1.firebasedatabase.app", projectId: "younzee-dev",
        storageBucket: "younzee-dev.appspot.com",
        messagingSenderId: "472667180676",
        appId: "1:472667180676:web:be9adc451e83c1e8193cd1",
        measurementId: "G-05H8CTLES9"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 68150);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ 38763);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ 15977);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ 92340);






console.log(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.env);
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__.env.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.enableProdMode)();
}
// Call the element loader after the platform has been bootstrapped
(0,_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_0__.defineCustomElements)(window);
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_5__.platformBrowserDynamic)()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 96956:
/*!**********************************************************************************************!*\
  !*** ./src/shared/components/add-article-title-dialog/add-article-title-dialog.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddArticleTitleDialog": () => (/* binding */ AddArticleTitleDialog)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_article_title_dialog_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-article-title-dialog.component.html?ngResource */ 42588);
/* harmony import */ var _add_article_title_dialog_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-article-title-dialog.component.scss?ngResource */ 2719);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let AddArticleTitleDialog = class AddArticleTitleDialog {
    constructor(modal) {
        this.modal = modal;
    }
    ngOnInit() { }
    onCancel() {
        this.modal.dismiss();
    }
    onSubmitTitle() {
        this.modal.dismiss({ title: this.title, isRemember: this.isRememberChecked });
    }
};
AddArticleTitleDialog.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
AddArticleTitleDialog = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-add-article-title-dialog',
        template: _add_article_title_dialog_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_article_title_dialog_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddArticleTitleDialog);



/***/ }),

/***/ 88650:
/*!************************************************************************************!*\
  !*** ./src/shared/components/articles-card-modal/articles-card-modal.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticlesCardModalComponent": () => (/* binding */ ArticlesCardModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _articles_card_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articles-card-modal.component.html?ngResource */ 87409);
/* harmony import */ var _articles_card_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articles-card-modal.component.scss?ngResource */ 66068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var src_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/services/storage.service */ 45785);
/* harmony import */ var src_shared_state_wardrobe_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/state/wardrobe-state.service */ 40084);








let ArticlesCardModalComponent = class ArticlesCardModalComponent {
    constructor(wardrobeState, modal, storageService) {
        this.wardrobeState = wardrobeState;
        this.modal = modal;
        this.storageService = storageService;
        this.max_items = new Map([
            ['FAM_01', 6],
            ['FAM_02', 1],
            ['FAM_03', 3],
        ]);
    }
    ngOnInit() {
        this.articles$ = this.wardrobeState.extractArticlesByCategoryId(this.category);
        this.colors = this.storageService.getJSONItemFromLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.LocalStorageConstants.COLORS_AS_MAP);
        this.selectedArticles = [...this.currentArticles];
    }
    /*ionViewWillEnter() {
      StatusBar.setBackgroundColor({ color: '#FFDE59' })
    }
  
    ionViewWillLeave() {
      StatusBar.setBackgroundColor({ color: '#FFFFFF' })
    }*/
    onGoBack() {
        this.modal.dismiss();
    }
    onSelectArticle(index, article) {
        var _a;
        const htmlElement = document.getElementById('article-card-' + index);
        const articleIndex = (_a = this.selectedArticles) === null || _a === void 0 ? void 0 : _a.findIndex(elem => elem.id === article.id);
        if (articleIndex === -1 && this.selectedArticles.length !== this.max_items.get(this.category)) {
            htmlElement.style.borderWidth = '3px';
            this.selectedArticles.push(article);
        }
        else if (articleIndex !== -1) {
            htmlElement.style.borderWidth = '1px';
            this.selectedArticles.splice(articleIndex, 1);
        }
    }
    onConfirmModal() {
        this.modal.dismiss({ articles: this.selectedArticles, category: this.category });
    }
    getClass(article) {
        if (this.selectedArticles.length) {
            console.log(this.selectedArticles.includes(article));
            const articlesIds = this.selectedArticles.map(article => article.id);
            console.log(articlesIds.includes(article.id));
            return articlesIds.includes(article.id) ? 'selected-card' : '';
        }
    }
};
ArticlesCardModalComponent.ctorParameters = () => [
    { type: src_shared_state_wardrobe_state_service__WEBPACK_IMPORTED_MODULE_4__.WardrobeStateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: src_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService }
];
ArticlesCardModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-articles-card-modal',
        template: _articles_card_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_articles_card_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ArticlesCardModalComponent);



/***/ }),

/***/ 21415:
/*!************************************************************************************!*\
  !*** ./src/shared/components/brands-select-modal/brands-select-modal.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrandsSelectModalComponent": () => (/* binding */ BrandsSelectModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _brands_select_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brands-select-modal.component.html?ngResource */ 71492);
/* harmony import */ var _brands_select_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brands-select-modal.component.scss?ngResource */ 61666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var src_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/services/storage.service */ 45785);








let BrandsSelectModalComponent = class BrandsSelectModalComponent {
    constructor(storageService, modalController, http) {
        this.storageService = storageService;
        this.modalController = modalController;
        this.http = http;
    }
    /*ionViewWillEnter() {
      StatusBar.setBackgroundColor({ color: '#FFDE59' })
    }
  
    ionViewWillLeave() {
      StatusBar.setBackgroundColor({ color: '#FFFFFF' })
    }*/
    ngOnInit() {
        this.initBrands();
    }
    onConfirmChoice(item) {
        this.currentBrand = item;
        this.onSave();
    }
    goBack() {
        this.modalController.dismiss();
    }
    onSave() { }
    initBrands() {
        this.brands$ = this.storageService.getJSONItemFromLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.LocalStorageConstants.MOST_USED_BRANDS);
    }
    onChangeCheckbox(brand) {
        this.currentBrand = brand;
        this.modalController.dismiss(this.currentBrand);
    }
    onSearchChange(event) {
        const input = encodeURIComponent(event.detail.value);
        if (input) {
            this.http
                .get(`${src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.brandsUrl}/actions/search?partial_text=${input}&count=20`)
                .subscribe((result) => (this.brands$ = result.data));
        }
        else {
            this.initBrands();
        }
    }
};
BrandsSelectModalComponent.ctorParameters = () => [
    { type: src_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient }
];
BrandsSelectModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-brands-select-modal',
        template: _brands_select_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_brands_select_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BrandsSelectModalComponent);



/***/ }),

/***/ 57367:
/*!**********************************************************************!*\
  !*** ./src/shared/components/cached-image/cached-image.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CachedImageComponent": () => (/* binding */ CachedImageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _cached_image_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cached-image.component.html?ngResource */ 26654);
/* harmony import */ var _cached_image_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cached-image.component.scss?ngResource */ 36574);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/filesystem */ 91662);





// TODO use a service for cache
const CACHE_FOLDER = 'CACHED-IMG';
let CachedImageComponent = class CachedImageComponent {
    constructor() {
        this._src = '';
        this.className = "wardrobe-img";
        this.divClassName = "containerNoHeight";
    }
    set src(imageUrl) {
        // An imageUrl will look like this:
        // "https://s3.eu-west-3.amazonaws.com/younzee-wardrobe-items/78aa639f-2aea-44dc-87f1-cb2a7fa42858.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWL5DV2AFZE2RH7XA%2F20230106%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20230106T153230Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=67826e07440b29d8f624c0067742edb8ffe8b85d66b271c01910dbce370d23ca"
        if (this.isDataImage(imageUrl)) {
            this._src = imageUrl;
        }
        else {
            const imageName = imageUrl.split('/').pop().split('?')[0];
            // An imageName will look like this: '78aa639f-2aea-44dc-87f1-cb2a7fa42858.png'
            const fileType = imageName.split('.').pop();
            // TODO use a service for cache
            _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.readFile({
                directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Cache,
                path: `${CACHE_FOLDER}/${imageName}`
            }).then(readFile => {
                // set to SRC
                this._src = `data:image/${fileType};base64,${readFile.data}`;
            }).catch((e) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                // Write the file
                yield this.storeImage(imageUrl, imageName);
                // TODO use a service for cache
                _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.readFile({
                    directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Cache,
                    path: `${CACHE_FOLDER}/${imageName}`
                }).then(readFile => {
                    this._src = `data:image/${fileType};base64,${readFile.data}`;
                });
            }));
        }
    }
    storeImage(url, path) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const response = yield fetch(url);
            const blob = yield response.blob();
            // convert to a Blob
            //convert to base64 data, which the Filesystem plugin requires
            const base64Data = yield this.convertBlobToBase64(blob);
            // TODO use a service for cache
            const savedFile = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.writeFile({
                path: `${CACHE_FOLDER}/${path}`,
                data: base64Data,
                directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Cache
            });
            return savedFile;
        });
    }
    // helper function
    convertBlobToBase64(blob) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader;
            reader.onerror = reject;
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(blob);
            reader.onerror = error => reject(error);
        });
    }
    /* Detects if image url is from s3 or a data url */
    isDataImage(url) {
        return url.startsWith("data:image");
    }
};
CachedImageComponent.ctorParameters = () => [];
CachedImageComponent.propDecorators = {
    className: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    divClassName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
CachedImageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'cached-img',
        template: _cached_image_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cached_image_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CachedImageComponent);



/***/ }),

/***/ 1514:
/*!************************************************************************************!*\
  !*** ./src/shared/components/colors-select-modal/colors-select-modal.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorsSelectModalComponent": () => (/* binding */ ColorsSelectModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _colors_select_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors-select-modal.component.html?ngResource */ 248);
/* harmony import */ var _colors_select_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colors-select-modal.component.scss?ngResource */ 86307);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var src_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/services/storage.service */ 45785);







let ColorsSelectModalComponent = class ColorsSelectModalComponent {
    constructor(storageService, modalController) {
        this.storageService = storageService;
        this.modalController = modalController;
        this.selectedColors = [];
    }
    /*ionViewWillEnter() {
      StatusBar.setBackgroundColor({ color: '#FFDE59' })
    }
  
    ionViewWillLeave() {
      StatusBar.setBackgroundColor({ color: '#FFFFFF' })
    }*/
    ngOnInit() {
        this.selectedColors = this.currentCategory;
        this.selectedColorsIds = this.selectedColors.map(color => color.id);
        this.colors = this.storageService.getJSONItemFromLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.LocalStorageConstants.COLORS);
    }
    onChangeCheckbox(item) {
        if (this.selectedColors.find(color => color.id === item.id)) {
            this.selectedColors = this.selectedColors.filter(elem => elem.id !== item.id);
        }
        else {
            this.selectedColors.push(item);
        }
    }
    goBack() {
        this.modalController.dismiss();
    }
    onSave() {
        this.modalController.dismiss(this.selectedColors);
    }
};
ColorsSelectModalComponent.ctorParameters = () => [
    { type: src_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
ColorsSelectModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-colors-select-modal',
        template: _colors_select_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_colors_select_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ColorsSelectModalComponent);



/***/ }),

/***/ 18271:
/*!**********************************************************************************!*\
  !*** ./src/shared/components/edit-profile-modal/edit-profile-modal.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfileModalComponent": () => (/* binding */ EditProfileModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _edit_profile_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile-modal.component.html?ngResource */ 41036);
/* harmony import */ var _edit_profile_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile-modal.component.scss?ngResource */ 93173);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var src_shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/services/data.service */ 31043);
/* harmony import */ var src_shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/services/toaster.service */ 29238);
/* harmony import */ var src_shared_state_app_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/state/app.state.service */ 29245);
/* harmony import */ var src_shared_utils_date_formatter_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/utils/date-formatter.utils */ 23229);
/* harmony import */ var src_shared_validators_regex_validator_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/validators/regex-validator.directive */ 4463);














let EditProfileModalComponent = class EditProfileModalComponent {
    constructor(dataService, fb, modal, http, toasterService, appState) {
        this.dataService = dataService;
        this.fb = fb;
        this.modal = modal;
        this.http = http;
        this.toasterService = toasterService;
        this.appState = appState;
        this.hasInputChanged = false;
        this.isTooltipDisplayed = false;
        this.disabled = false;
        this.genders = src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.ProfileConstants.genders;
    }
    ngOnInit() {
        switch (this.data.key) {
            case 'date_of_birth':
                this.editForm = this.fb.group({
                    editInputCtrl: [this.data.value, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
                });
                this.editForm.valueChanges
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)())
                    .subscribe(newValue => {
                    this.hasInputChanged = newValue.editInputCtrl !== this.data.value;
                    if (!this.hasInputChanged) {
                        this.editForm.get('editInputCtrl').setErrors({ inputUnchanged: true });
                    }
                });
                break;
            case 'gender_id':
                this.editForm = this.fb.group({
                    gender_id: [this.data.value.toString(), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                });
                this.editForm.valueChanges
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)())
                    .subscribe(newValue => {
                    this.hasInputChanged = newValue.gender_id !== this.data.value.toString();
                });
                break;
            case 'last_name':
                this.editForm = this.fb.group({
                    editInputCtrl: [
                        this.data.value,
                        [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                            (0,src_shared_validators_regex_validator_directive__WEBPACK_IMPORTED_MODULE_7__.regexValidator)(/^[A-ZÀ-ÿ]/, "La première lettre doit être une majuscule"),
                            (0,src_shared_validators_regex_validator_directive__WEBPACK_IMPORTED_MODULE_7__.regexValidator)(/^[a-zA-ZÀ-ÿ-,_\/.' ]+$/, "Seulement les lettres et ces caractères sont accptés:  - _ / . ' ,"),
                        ]
                    ],
                });
                this.editForm.valueChanges
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)())
                    .subscribe(newValue => {
                    this.hasInputChanged = newValue.editInputCtrl !== this.data.value;
                    if (!this.hasInputChanged) {
                        this.editForm.get('editInputCtrl').setErrors({ inputUnchanged: true });
                    }
                });
                break;
            case 'first_name':
                this.editForm = this.fb.group({
                    editInputCtrl: [
                        this.data.value,
                        [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                            (0,src_shared_validators_regex_validator_directive__WEBPACK_IMPORTED_MODULE_7__.regexValidator)(/^[A-ZÀ-ÿ]/, "La première lettre doit être une majuscule"),
                            (0,src_shared_validators_regex_validator_directive__WEBPACK_IMPORTED_MODULE_7__.regexValidator)(/^[a-zA-ZÀ-ÿ-,_\/.' ]+$/, "Seulement les lettres et ces caractères sont accptés:  - _ / . ' ,"),
                        ]
                    ],
                });
                this.editForm.valueChanges
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)())
                    .subscribe(newValue => {
                    this.hasInputChanged = newValue.editInputCtrl !== this.data.value;
                    if (!this.hasInputChanged) {
                        this.editForm.get('editInputCtrl').setErrors({ inputUnchanged: true });
                    }
                });
                break;
            case 'nickname':
                this.editForm = this.fb.group({
                    editInputCtrl: [
                        this.data.value,
                        [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('^[a-z0-9-_]+$')],
                    ],
                });
                this.editForm.valueChanges
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)())
                    .subscribe(newValue => {
                    this.hasInputChanged = newValue.editInputCtrl !== this.data.value;
                    if (!this.hasInputChanged) {
                        this.editForm.get('editInputCtrl').setErrors({ inputUnchanged: true });
                    }
                });
                break;
            default:
                this.editForm = this.fb.group({ editInputCtrl: [this.data.value, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required] });
                this.editForm.valueChanges
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)())
                    .subscribe(newValue => {
                    this.hasInputChanged = newValue.editInputCtrl !== this.data.value;
                    if (!this.hasInputChanged) {
                        this.editForm.get('editInputCtrl').setErrors({ inputUnchanged: true });
                    }
                });
        }
    }
    onValidate() {
        const shopper = {};
        switch (this.data.key) {
            case 'date_of_birth':
                shopper[this.data.key] = this.editForm.controls['editInputCtrl'].value;
                break;
            case 'gender_id':
                shopper[this.data.key] = this.editForm.controls['gender_id'].value;
                break;
            default:
                shopper[this.data.key] = this.editForm.controls['editInputCtrl'].value.trim();
        }
        this.http
            .patch(`${src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.shopperUrl}/${this.data.userID}`, { shopper }, { observe: 'response' })
            .subscribe((response) => {
            this.dataService.updateKeyValue("user", response.body.data);
            this.appState.setUserInfos(response.body.data);
            this.toasterService.presentSuccessToast(`MESSAGE.PROFILE.EDIT_${response.status}`);
            this.onDismissModal(response.body.data);
        }),
            error => {
                console.log(error);
                this.toasterService.presentErrorToast('SHARED.ERROR');
            };
    }
    onDismissModal(updatedUser = null) {
        this.modal.dismiss(updatedUser);
    }
    extractUSFormattedDateModel(date) {
        return src_shared_utils_date_formatter_utils__WEBPACK_IMPORTED_MODULE_6__.DateFormatter.convertDate(date.singleDate.formatted, 'en');
    }
    ionViewWillDismiss() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    onOpenTooltip() {
        this.isTooltipDisplayed = !this.isTooltipDisplayed;
        if (this.isTooltipDisplayed) {
            document.getElementById('sexe-tooltip').style.visibility = 'visible';
        }
        else {
            document.getElementById('sexe-tooltip').style.visibility = 'hidden';
        }
    }
};
EditProfileModalComponent.ctorParameters = () => [
    { type: src_shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient },
    { type: src_shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__.ToasterService },
    { type: src_shared_state_app_state_service__WEBPACK_IMPORTED_MODULE_5__.AppStateService }
];
EditProfileModalComponent.propDecorators = {
    checkbutton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['checkButton',] }]
};
EditProfileModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-edit-profile-modal',
        template: _edit_profile_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_profile_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditProfileModalComponent);



/***/ }),

/***/ 97579:
/*!*******************************************************************!*\
  !*** ./src/shared/components/modal-content/modal-content.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalContentPage": () => (/* binding */ ModalContentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _modal_content_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-content.page.html?ngResource */ 67355);
/* harmony import */ var _modal_content_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-content.page.scss?ngResource */ 91251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var src_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/services/storage.service */ 45785);
var ModalContentPage_1;







let ModalContentPage = ModalContentPage_1 = class ModalContentPage {
    constructor(modalController, storageService, cdRef) {
        this.modalController = modalController;
        this.storageService = storageService;
        this.cdRef = cdRef;
        this.title = 'Catégorie';
        this.nextPage = ModalContentPage_1;
        this.indexes = [];
        this.ancestors = [];
    }
    /*ionViewWillEnter() {
      StatusBar.setBackgroundColor({ color: '#FFDE59' })
    }
  
    ionViewWillLeave() {
      StatusBar.setBackgroundColor({ color: '#FFFFFF' })
    }*/
    ngOnInit() {
        this.wardrobeCategories = this.storageService.getJSONItemFromLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.LocalStorageConstants.CATEGORIES);
        this.wardrobeCategoriesAsMap = this.storageService.getJSONItemFromLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.LocalStorageConstants.CATEGORIES_AS_MAP);
    }
    goForward(index) {
        if (this.wardrobeCategories[index].sub_categories.length) {
            this.indexes.push(this.wardrobeCategories);
            this.ancestors.push(this.wardrobeCategories[index].id);
            this.title = this.wardrobeCategories[index].fr_display;
            this.wardrobeCategories = this.wardrobeCategories[index].sub_categories.length
                ? this.wardrobeCategories[index].sub_categories
                : this.wardrobeCategories;
        }
    }
    goBack() {
        if (this.title === 'Catégorie') {
            this.modalController.dismiss();
        }
        else {
            this.title =
                this.indexes.length === 1
                    ? 'Catégorie'
                    : this.wardrobeCategoriesAsMap[this.ancestors[this.indexes.length - 2]].fr_display;
            this.wardrobeCategories = this.indexes[this.indexes.length - 1];
            this.indexes.pop();
            this.ancestors.pop();
        }
    }
    goRoot() {
        //this.nav.popToRoot();
    }
    onChangeCheckbox(item) {
        this.currentCategory = item;
        this.modalController.dismiss({
            categoryValue: this.currentCategory,
            indexes: this.indexes,
            ancestors: this.ancestors,
        });
        this.cdRef.detectChanges();
    }
};
ModalContentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: src_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef }
];
ModalContentPage = ModalContentPage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-modal-content',
        template: _modal_content_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_modal_content_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ModalContentPage);



/***/ }),

/***/ 30201:
/*!**********************************************************************************!*\
  !*** ./src/shared/components/sizes-select-modal/sizes-select-modal.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SizesSelectModalComponent": () => (/* binding */ SizesSelectModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _sizes_select_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sizes-select-modal.component.html?ngResource */ 37699);
/* harmony import */ var _sizes_select_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sizes-select-modal.component.scss?ngResource */ 27774);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let SizesSelectModalComponent = class SizesSelectModalComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() {
        var _a;
        this.sizes = (_a = this.currentCategory) === null || _a === void 0 ? void 0 : _a.wardrobe_additional_fields['size_id'].values;
    }
    onChangeCheckbox(item) {
        this.currentSize = item;
    }
    goBack() {
        this.modalController.dismiss();
    }
    onSave() {
        this.modalController.dismiss(this.currentSize);
    }
};
SizesSelectModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
SizesSelectModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-sizes-select-modal',
        template: _sizes_select_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sizes_select_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SizesSelectModalComponent);



/***/ }),

/***/ 16925:
/*!*************************************************!*\
  !*** ./src/shared/crud/shopper-crud.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopperCRUDService": () => (/* binding */ ShopperCRUDService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ 2976);





let ShopperCRUDService = class ShopperCRUDService {
    constructor(http, loadingController) {
        this.http = http;
        this.loadingController = loadingController;
    }
    getShopperInfos(firebaseId) {
        return this.http.get(`${src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.shopperUrl}/${firebaseId}`, {
            observe: 'response',
        });
    }
    //TODO: change type returned
    createShopper(shopper) {
        return this.http.post(src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.shopperUrl, { shopper }, { observe: 'response' });
    }
};
ShopperCRUDService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.LoadingController }
];
ShopperCRUDService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], ShopperCRUDService);



/***/ }),

/***/ 79582:
/*!******************************************!*\
  !*** ./src/shared/guards/login.guard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginGuard": () => (/* binding */ LoginGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor-community/firebase-analytics */ 67285);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 51353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _crud_shopper_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crud/shopper-crud.service */ 16925);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 31043);
/* harmony import */ var _services_fcm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/fcm.service */ 53346);
/* harmony import */ var _state_app_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/app.state.service */ 29245);











let LoginGuard = class LoginGuard {
    constructor(auth, router, shopperCrud, dataService, fcmService, appState) {
        this.auth = auth;
        this.router = router;
        this.shopperCrud = shopperCrud;
        this.dataService = dataService;
        this.fcmService = fcmService;
        this.appState = appState;
    }
    canLoad() {
        return this.auth.authState.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(state => {
            if (state) {
                _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.FirebaseAnalytics.setUserId({
                    userId: state.uid,
                });
                return this.shopperCrud.getShopperInfos(state.uid).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
                    if (state.emailVerified) {
                        this.dataService.setData("user", response.body.data);
                        this.appState.setUserInfos(response.body.data);
                        this.fcmService.initPush(response.body.data);
                        return true;
                    }
                    else {
                        this.router.navigate(['/register/4']);
                        return false;
                    }
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
                    console.log(error);
                    if (error.status === 404) {
                        this.router.navigate(['/register/2']);
                    }
                    if (error.status === 401) {
                        console.log("unauthorized");
                        this.router.navigate(['/home']);
                    }
                    if (error.status === 0) {
                        this.router.navigate(['/error']);
                    }
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(false);
                }));
            }
            else {
                this.router.navigate(['/home']);
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(false);
            }
        }));
    }
};
LoginGuard.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_9__.AngularFireAuth },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _crud_shopper_crud_service__WEBPACK_IMPORTED_MODULE_1__.ShopperCRUDService },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _services_fcm_service__WEBPACK_IMPORTED_MODULE_3__.FcmService },
    { type: _state_app_state_service__WEBPACK_IMPORTED_MODULE_4__.AppStateService }
];
LoginGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)({
        providedIn: 'root',
    })
], LoginGuard);



/***/ }),

/***/ 69995:
/*!*****************************************************!*\
  !*** ./src/shared/interceptors/auth.interceptor.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 51353);




let AuthInterceptor = class AuthInterceptor {
    constructor(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
    }
    intercept(request, next) {
        const isTranslateSetup = request.url === '../assets/i18n/fr.json';
        if (!request || !request.url || isTranslateSetup) {
            return next.handle(request);
        }
        return this.angularFireAuth.idToken.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.mergeMap)((token) => {
            if (token) {
                request = request.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
            }
            return next.handle(request);
        }));
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_1__.AngularFireAuth }
];
AuthInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], AuthInterceptor);



/***/ }),

/***/ 36382:
/*!*******************************************************!*\
  !*** ./src/shared/interceptors/errors.interceptor.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 53158);




let ErrorInterceptor = class ErrorInterceptor {
    constructor() { }
    intercept(request, next) {
        //const isTranslateSetup = request.url === "../assets/i18n/fr.json";
        /*this.loadingCtrl.getTop().then(hasLoading => {
          if (!hasLoading && !isTranslateSetup) {
            this.loadingCtrl.create({
              spinner: 'circular',
              translucent: true
            }).then(loading => loading.present());
          }
        });*/
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)((error) => {
            let errorMsg = '';
            if (error.error instanceof ErrorEvent) {
                console.log('this is client side error');
                errorMsg = `Error: ${error.error.message}`;
            }
            else {
                console.log('this is server side error');
                errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
            }
            if (error.status === 0) {
                //this.loginServ.logout()
            }
            console.log(errorMsg);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(error);
        }));
        /*.pipe(
          catchError() => {
            let error: string = err.message || err.statusText;
            // Handle http error code and translate
            /* if ([0, 400, 401, 403, 422, 500, 409, 451].indexOf(err.status) !== -1) {
               error = `HTTP.ERROR.${err.status}`;
               console.error(this.translate.instant(err.message));
             }
            err.message = error;
            //return throwError(err);
          }),
          finalize(() => {
            this.loadingCtrl.getTop().then(hasLoading => {
              if (hasLoading || !isTranslateSetup) {
                this.loadingCtrl.dismiss();
              }
            })
          }))*/
    }
};
ErrorInterceptor.ctorParameters = () => [];
ErrorInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], ErrorInterceptor);



/***/ }),

/***/ 36043:
/*!*************************************************!*\
  !*** ./src/shared/resolver/storage.resolver.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageResolver": () => (/* binding */ StorageResolver)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/storage.service */ 45785);
/* harmony import */ var _services_wardrobe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/wardrobe.service */ 89271);






let StorageResolver = class StorageResolver {
    constructor(wardrobeService, storageService) {
        this.wardrobeService = wardrobeService;
        this.storageService = storageService;
    }
    resolve(route, state) {
        console.log('storageresolver');
        //if (!this.hasAllDatasInStorage()) {
        //todo: refacto
        return this.wardrobeService.extractDataFromServer().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(value => value));
        /*} else {
          return of(true);
        }*/
    }
    //TODO: put in sessionstorage service
    hasAllDatasInStorage() {
        return (src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.LocalStorageConstants.STORAGE_KEYS.filter(element => this.storageService.getJSONItemFromLocalStorage(element)).length === src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.LocalStorageConstants.STORAGE_KEYS.length);
    }
};
StorageResolver.ctorParameters = () => [
    { type: _services_wardrobe_service__WEBPACK_IMPORTED_MODULE_2__.WardrobeService },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService }
];
StorageResolver = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root',
    })
], StorageResolver);



/***/ }),

/***/ 31043:
/*!*********************************************!*\
  !*** ./src/shared/services/data.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage-angular */ 80190);
/* harmony import */ var _state_app_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/app.state.service */ 29245);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 54363);





let DataService = class DataService {
    constructor(storage, appState) {
        this.storage = storage;
        this.appState = appState;
        this.init();
    }
    init() {
        this.storage.create().then((storage) => {
            console.log("Ionic storage has been created");
        });
    }
    getData(key) {
        return this.storage.get(key);
    }
    getUserData() {
        var _a;
        return (_a = this.storage) === null || _a === void 0 ? void 0 : _a.get("user");
    }
    addArrayData(key, item) {
        this.storage.get(key).then((storedData) => {
            let updatedData = storedData || [];
            updatedData.push(item);
            this.storage.set(key, updatedData);
        });
    }
    setData(key, item) {
        return this.storage.set(key, item);
    }
    updateKeyValue(key, item) {
        return this.storage.remove("user").then(() => this.storage.set(key, item));
    }
    removeIndex(key, index) {
        this.storage.get(key).then((storedData) => {
            storedData.splice(index, 1);
            this.storage.set(key, storedData);
        });
    }
    removeItem(key) {
        return this.storage.remove(key).catch((error) => console.log(error));
    }
    clear() {
        console.log("clear data storage");
        return this.storage.clear();
    }
    initUserInfos() {
        if (!this.appState.getUserInfos().getValue()) {
            return this.getUserData().then((userInfos) => { this.appState.setUserInfos(userInfos); return userInfos; });
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(this.appState.getUserInfos());
    }
};
DataService.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__.Storage },
    { type: _state_app_state_service__WEBPACK_IMPORTED_MODULE_0__.AppStateService }
];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], DataService);



/***/ }),

/***/ 53346:
/*!********************************************!*\
  !*** ./src/shared/services/fcm.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FcmService": () => (/* binding */ FcmService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/push-notifications */ 71704);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ 31043);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 51353);









let FcmService = class FcmService {
    constructor(http, router, dataService) {
        this.http = http;
        this.router = router;
        this.dataService = dataService;
    }
    initPush(shopperInfos) {
        this.http.get(`https://ipapi.co/json`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)((userLocation) => {
            const last_login_location = {
                latitude: userLocation.latitude,
                longitude: userLocation.longitude
            };
            return this.http.patch(`${src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.shopperUrl}/${shopperInfos.id}`, { shopper: { last_login_location } });
        })).subscribe();
        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Capacitor.getPlatform() !== 'web') {
            this.registerPush(shopperInfos);
        }
    }
    registerPush(shopperInfos) {
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.requestPermissions().then(permission => {
            console.log(permission);
            if (permission.receive === 'granted') {
                _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.register();
            }
            else {
                // If permission is not granted
            }
        });
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.addListener('registration', token => {
            console.log(token);
            this.dataService.getData(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.LocalStorageConstants.DEVICE_TOKEN).then(value => {
                if (token.value !== value) {
                    this.dataService.setData(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.LocalStorageConstants.DEVICE_TOKEN, token.value);
                    this.http.patch(`${src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.deviceTokenUrl}/${shopperInfos.id}`, { device_token: token.value }, { observe: 'response' }).subscribe(() => console.log("token updated"));
                }
            });
        });
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.addListener('registrationError', err => {
            console.log(err);
        });
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.addListener('pushNotificationReceived', notifications => {
            console.log(notifications);
        });
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.addListener('pushNotificationActionPerformed', notifications => {
            const data = notifications.notification.data;
            switch (data.notification_type) {
                case src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.NotificationsConstants.RECOMMENDATIONS:
                    this.router.navigate([src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.RoutesConstants.RECOMMENDATIONS]);
                    break;
                case src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.NotificationsConstants.RECOMMENDATION_FAILED:
                    this.router.navigate([src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.RoutesConstants.RECOMMENDATION_ADVICES, data.categories_to_add_list_string]);
                    break;
                default:
                    console.log(`Desole mais ce type n'est pas connu ${data.notification_type}.`);
            }
        });
    }
};
FcmService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_3__.DataService }
];
FcmService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
        providedIn: 'root',
    })
], FcmService);



/***/ }),

/***/ 45785:
/*!************************************************!*\
  !*** ./src/shared/services/storage.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let StorageService = class StorageService {
    constructor() { }
    getItemFromSessionStorage(item) {
        return JSON.parse(window.sessionStorage.getItem(item));
    }
    storeItemInSessionStorage(itemName, value) {
        window.sessionStorage.setItem(itemName, value);
    }
    getJSONItemFromLocalStorage(item) {
        console.log('item : ' + item);
        return JSON.parse(window.localStorage.getItem(item));
    }
    getItemFromLocalStorage(item) {
        console.log('item : ' + item);
        console.log('plop' + window.localStorage.getItem(item));
        return window.localStorage.getItem(item);
    }
    storeItemInLocalStorage(itemName, value) {
        window.localStorage.setItem(itemName, value);
    }
    storeObjectInLocalStorage(itemName, value) {
        window.localStorage.setItem(itemName, JSON.stringify(value));
    }
};
StorageService.ctorParameters = () => [];
StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root',
    })
], StorageService);



/***/ }),

/***/ 29238:
/*!************************************************!*\
  !*** ./src/shared/services/toaster.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToasterService": () => (/* binding */ ToasterService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 87514);




let ToasterService = class ToasterService {
    constructor(toastController, translate) {
        this.toastController = toastController;
        this.translate = translate;
    }
    presentSuccessToast(messageKey) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const message = this.translate.instant(messageKey);
            const toast = yield this.toastController.create({
                message,
                cssClass: 'successToaster',
                icon: 'checkmark-outline',
                duration: 500,
                position: 'top',
            });
            toast.present();
        });
    }
    presentErrorToast(messageKey, duration = 500) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const message = this.translate.instant(messageKey);
            const toast = yield this.toastController.create({
                message,
                cssClass: 'errorToaster',
                icon: 'close-outline',
                duration: duration,
                position: 'top',
            });
            toast.present();
        });
    }
};
ToasterService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService }
];
ToasterService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], ToasterService);



/***/ }),

/***/ 89271:
/*!*************************************************!*\
  !*** ./src/shared/services/wardrobe.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WardrobeService": () => (/* binding */ WardrobeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 83575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var _state_wardrobe_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/wardrobe-state.service */ 40084);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.service */ 45785);








let WardrobeService = class WardrobeService {
    constructor(http, storageService, wardrobeState) {
        this.http = http;
        this.storageService = storageService;
        this.wardrobeState = wardrobeState;
    }
    //TODO: Refacto : put in crud service
    getAllColors() {
        return this.http.get(src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.colorsUrl);
    }
    getAllColorsAsMap() {
        return this.http.get(src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.colorsUrlAsMap);
    }
    getAllCategories() {
        return this.http.get(src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.categoriesUrl);
    }
    getAllSizeGroups() {
        return this.http.get(src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.sizeGroupsUrl);
    }
    getAllFitsAsMap() {
        return this.http.get(src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.fitsUrl);
    }
    getAllBrands() {
        return this.http.get(src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.brandsUrl);
    }
    getMostUsedBrands() {
        return this.http.get(src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.brandsMostUsedUrl);
    }
    getBrandsAsMap() {
        return this.http.get(src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.brandsAsMapUrl);
    }
    getCategoriesAsMap() {
        return this.http.get(src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.categoriesUrlAsMap);
    }
    postNewStyle(style) {
        return this.http.post(src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.styleUrl, { style }, { observe: 'response' });
    }
    updateStyle(style) {
        return this.http.patch(`${src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.styleUrl}/${style.id}`, style, { observe: 'response' });
    }
    getAllStyles() {
        return this.http.get(`${src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.styleUrl}?include_nested_resources=true`);
    }
    addNewStyle(style) {
        this.wardrobeState.addNewStyle(style);
    }
    extractDataFromServer() {
        const colorsResponse = this.getAllColors();
        const colorsMapResponse = this.getAllColorsAsMap();
        const brandsMapResponse = this.getBrandsAsMap();
        const categoriesResponse = this.getAllCategories();
        const brandsResponse = this.getAllBrands();
        const sizeMapResponse = this.getAllSizeGroups();
        const categoriesMapResponse = this.getCategoriesAsMap();
        const mostUsedBrandsResponse = this.getMostUsedBrands();
        const fitsResponse = this.getAllFitsAsMap();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.zip)(colorsResponse, colorsMapResponse, brandsMapResponse, sizeMapResponse, brandsResponse, categoriesResponse, mostUsedBrandsResponse, categoriesMapResponse, fitsResponse).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(plip => {
            plip.forEach((element, index) => {
                this.storageService.storeItemInLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.LocalStorageConstants.STORAGE_KEYS[index], JSON.stringify(element.data));
            });
            return true;
        }));
    }
};
WardrobeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: _state_wardrobe_state_service__WEBPACK_IMPORTED_MODULE_1__.WardrobeStateService }
];
WardrobeService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root',
    })
], WardrobeService);



/***/ }),

/***/ 8395:
/*!*************************************!*\
  !*** ./src/shared/shared.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 63947);
/* harmony import */ var _components_add_article_title_dialog_add_article_title_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/add-article-title-dialog/add-article-title-dialog.component */ 96956);
/* harmony import */ var _components_articles_card_modal_articles_card_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/articles-card-modal/articles-card-modal.component */ 88650);
/* harmony import */ var _components_brands_select_modal_brands_select_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/brands-select-modal/brands-select-modal.component */ 21415);
/* harmony import */ var _components_cached_image_cached_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cached-image/cached-image.component */ 57367);
/* harmony import */ var _components_colors_select_modal_colors_select_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/colors-select-modal/colors-select-modal.component */ 1514);
/* harmony import */ var _components_edit_profile_modal_edit_profile_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/edit-profile-modal/edit-profile-modal.component */ 18271);
/* harmony import */ var _components_modal_content_modal_content_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/modal-content/modal-content.page */ 97579);
/* harmony import */ var _components_sizes_select_modal_sizes_select_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sizes-select-modal/sizes-select-modal.component */ 30201);
var SharedModule_1;















let SharedModule = SharedModule_1 = class SharedModule {
};
SharedModule.MODULE_LIST = [
    _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
    _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule,
    ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerModule,
    _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
    _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule,
];
SharedModule.COMPONENT_LIST = [
    _components_colors_select_modal_colors_select_modal_component__WEBPACK_IMPORTED_MODULE_4__.ColorsSelectModalComponent,
    _components_sizes_select_modal_sizes_select_modal_component__WEBPACK_IMPORTED_MODULE_7__.SizesSelectModalComponent,
    _components_brands_select_modal_brands_select_modal_component__WEBPACK_IMPORTED_MODULE_2__.BrandsSelectModalComponent,
    _components_edit_profile_modal_edit_profile_modal_component__WEBPACK_IMPORTED_MODULE_5__.EditProfileModalComponent,
    _components_articles_card_modal_articles_card_modal_component__WEBPACK_IMPORTED_MODULE_1__.ArticlesCardModalComponent,
    _components_add_article_title_dialog_add_article_title_dialog_component__WEBPACK_IMPORTED_MODULE_0__.AddArticleTitleDialog,
    _components_cached_image_cached_image_component__WEBPACK_IMPORTED_MODULE_3__.CachedImageComponent,
];
SharedModule = SharedModule_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgModule)({
        declarations: [_components_modal_content_modal_content_page__WEBPACK_IMPORTED_MODULE_6__.ModalContentPage, ...SharedModule_1.COMPONENT_LIST],
        imports: SharedModule_1.MODULE_LIST,
        exports: [...SharedModule_1.MODULE_LIST, ...SharedModule_1.COMPONENT_LIST, _components_modal_content_modal_content_page__WEBPACK_IMPORTED_MODULE_6__.ModalContentPage],
    })
], SharedModule);



/***/ }),

/***/ 29245:
/*!***********************************************!*\
  !*** ./src/shared/state/app.state.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppStateService": () => (/* binding */ AppStateService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);



let AppStateService = class AppStateService {
    constructor() {
        this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    }
    setUserInfos(user) {
        this.user$.next(user);
    }
    getUserInfosAsObservable() {
        return this.user$.asObservable();
    }
    getUserInfos() {
        return this.user$;
    }
};
AppStateService.ctorParameters = () => [];
AppStateService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], AppStateService);



/***/ }),

/***/ 40084:
/*!****************************************************!*\
  !*** ./src/shared/state/wardrobe-state.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WardrobeOperation": () => (/* binding */ WardrobeOperation),
/* harmony export */   "WardrobeStateService": () => (/* binding */ WardrobeStateService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 83575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 51353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 54107);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/storage.service */ 45785);







var WardrobeOperation;
(function (WardrobeOperation) {
    WardrobeOperation["Normal"] = "normal";
    WardrobeOperation["Edit"] = "edit";
})(WardrobeOperation || (WardrobeOperation = {}));
let WardrobeStateService = class WardrobeStateService {
    constructor(http, storageService) {
        this.http = http;
        this.storageService = storageService;
        //private wardrobeMap = new Map<string, BehaviorSubject<Map<string, IArticle>>>();
        this.allClothes$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.allShoes$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.allshoes = this.allShoes$.asObservable();
        this.allAccessories$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.allStyles$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.recoStyles = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.articleModifiedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.styleModifiedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.categoriesMap = this.storageService.getJSONItemFromLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.LocalStorageConstants.CATEGORIES_AS_MAP);
    }
    initArticlesStore(categoryIndexes) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(categoryIndexes)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(value => value))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(res => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.zip)((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(res), this.http.get(`${src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.itemsByCategoriesUrl}${res}&include_images=true&page[page_size]=1000`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((value) => {
            this.fillCategoryArticles(res, value.data);
            return true;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(err => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(false);
            //TODO: error this.router.navigate(error)
        })))))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.toArray)())
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(res => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(res[0][1] && res[1][1] && res[2][1]);
        }));
    }
    fillCategoryArticles(categoryId, articles) {
        switch (categoryId) {
            case src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.WardrobeCategory.CLOTHES:
                this.allClothes$.next(articles);
                break;
            case src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.WardrobeCategory.ACCESSORIES:
                this.allAccessories$.next(articles);
                break;
            case src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.WardrobeCategory.SHOES:
                this.allShoes$.next(articles);
        }
    }
    initStylesStore() {
        return this.http.get(`${src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.styleUrl}?include_nested_resources=true&page[page_size]=1000`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)((stylesData) => {
            this.allStyles$.next(stylesData.data);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(true);
        }));
    }
    initRecoStyles() {
        return this.http.get(src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.recommendedStylesUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((recommendedStyles) => {
            this.recoStyles.next(recommendedStyles.data);
            return true;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(error => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(false);
        }));
    }
    /* getArticlesFromCategoryAsObservable(
       categoryIndex: string
     ): BehaviorSubject<Map<string, IArticle>> {
       return this.wardrobeMap.get(categoryIndex);
     }
   
     getWardrobeCategoriesMap(): BehaviorSubject<Map<string, IArticle>>[] {
       return Array.from(this.wardrobeMap.values()); //return array of category maps
     }*/
    addArticleInCategory(newItem, categoryIndex) {
        const categoryArticles = this.extractArticlesByCategoryId(categoryIndex).value;
        categoryArticles.push(newItem);
        this.fillCategoryArticles(categoryIndex, categoryArticles);
    }
    updateArticleInCategory(newItem, categoryIndex) {
        const categoryArticles = this.extractArticlesByCategoryId(categoryIndex).value;
        const articleSelectedIndex = categoryArticles.map(article => article.id).indexOf(newItem.id);
        categoryArticles[articleSelectedIndex] = newItem;
        this.fillCategoryArticles(categoryIndex, categoryArticles);
    }
    getArticleByIdAndCategory(categoryIndex, id) {
        let articles;
        switch (categoryIndex) {
            case 'FAM_01':
                articles = this.allClothes$;
                break;
            case 'FAM_02':
                articles = this.allShoes$;
                break;
            case 'FAM_03':
                articles = this.allAccessories$;
                break;
        }
        return articles;
    }
    /*
    
      getRootArticleCategoryById(articleId: string): BehaviorSubject<any> {
        let category;
        this.wardrobeMap.forEach(_category => {
          if (_category.value.has(articleId)) {
            category = _category;
          }
        });
        return category;
      }
      /*
            removeArticleFromWardrobe(itemId: string, categoryIndex: string): void {
                let articles: IArticle[] = this.wardrobeMap.get(categoryIndex).value;
                let filteredArticles = articles.filter(item => item.id !== itemId);
                this.wardrobeMap.get(categoryIndex).next(filteredArticles);
            }*/
    deleteItems(body, categoryIndex) {
        let articles = this.extractArticlesByCategoryId(categoryIndex).value;
        body.forEach(id => articles = articles.filter((article => article.id !== id)));
        this.fillCategoryArticles(categoryIndex, articles);
    }
    deleteItemsInAll(body, articles) {
        body.forEach((deletedItemId) => {
            const selectedArticle = articles.filter(article => article.id === deletedItemId)[0];
            const ancestorCategory = this.categoriesMap[selectedArticle.category_id].ancestry.split('.')[0];
            this.deleteItems([selectedArticle.id], ancestorCategory);
        });
    }
    /*let articles: Map<string, IArticle> = this.wardrobeMap.get(categoryIndex).value;
      body.deleted_ids.forEach((id) => articles.delete(id))
      this.wardrobeMap.get(categoryIndex).next(articles);
  
      const result = {};
      result[WardRobeConstants.categoriesIndex[0]] = [];
      result[WardRobeConstants.categoriesIndex[1]] = [];
      result[WardRobeConstants.categoriesIndex[2]] = [];
      WardRobeConstants.categoriesIndex.forEach((categoryIndex) => {
          body.deleted_ids.forEach((id) => {
              const value = this.wardrobeMap.get(categoryIndex).value.findIndex((elem) => elem.id === id)
              if (value) {
                  result[categoryIndex] = id
              }
          })
      })
      Object.entries(result).forEach(([key, value]) => this.deleteItems(value, key))
  }*/
    extractArticlesByCategoryId(categoryId) {
        switch (categoryId) {
            case src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.WardrobeCategory.CLOTHES:
                return this.allClothes$;
                break;
            case src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.WardrobeCategory.ACCESSORIES:
                return this.allAccessories$;
                break;
            case src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.WardrobeCategory.SHOES:
                return this.allShoes$;
                break;
        }
    }
    getAllStyles() {
        return this.allStyles$;
    }
    getStyleById(id) {
        return this.allStyles$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(styles => styles.find(style => style.id === id)));
    }
    addNewStyle(style) {
        const currentStyles = this.allStyles$.value;
        const updatedStyles = [...currentStyles, style];
        this.allStyles$.next(updatedStyles);
    }
    updateStyle(style) {
        const styleIndex = this.allStyles$.value.findIndex(_style => _style.id === style.id);
        this.allStyles$.value[styleIndex] = style;
        this.allStyles$.next(this.allStyles$.value);
    }
    deleteStyles(body) {
        const currentStyles = this.allStyles$.value;
        const filteredArticles = currentStyles.filter(item => !body.deleted_ids.includes(item.id));
        this.allStyles$.next(filteredArticles);
    }
    hasArticleModified(article) {
        this.articleModifiedEvent.emit(article);
    }
    hasStyleModified(style) {
        this.styleModifiedEvent.emit(style);
    }
    resetStyles() {
        this.allStyles$.next(null);
    }
    getRecommendedStyles() {
        return this.recoStyles;
    }
    removeRecoStyleFromIndex(index) {
        this.getRecommendedStyles().value.splice(index, 1);
    }
};
WardrobeStateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService }
];
WardrobeStateService.propDecorators = {
    articleModifiedEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    styleModifiedEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
WardrobeStateService = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], WardrobeStateService);



/***/ }),

/***/ 23229:
/*!**************************************************!*\
  !*** ./src/shared/utils/date-formatter.utils.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateFormatter": () => (/* binding */ DateFormatter)
/* harmony export */ });
class DateFormatter {
    /* receive a date of format : "2022-04-15T22:54:00+02:00"
    to return date of format dd-mm-yyyy or yyyy-mm-dd*/
    static formatDate(date, locale) {
        const onlyDate = date.split('T')[0];
        if (locale === 'fr') {
            const dateElements = onlyDate.split('-');
            return `${dateElements[2]}-${dateElements[1]}-${dateElements[0]}`;
        }
        else {
            return onlyDate;
        }
    }
    //Convert french Date format dd/mm/yyyy to Locale format Date
    static convertDate(date, wantedLocale) {
        const splittedDate = date.split('-');
        if (wantedLocale === 'en') {
            return `${splittedDate[2]}-${splittedDate[1]}-${splittedDate[0]}`;
        }
        else {
            return date;
        }
    }
}


/***/ }),

/***/ 16391:
/*!**************************************************!*\
  !*** ./src/shared/utils/subscriber-component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscriberComponent": () => (/* binding */ SubscriberComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let SubscriberComponent = class SubscriberComponent {
    constructor() {
        this.subscriptions = [];
    }
    addSubscription(subscription) {
        this.subscriptions.push(subscription);
        return subscription;
    }
    ngOnDestroy() {
        this.removeAllSubscriptions();
    }
    removeAllSubscriptions() {
        this.subscriptions.forEach(s => s.unsubscribe());
        this.subscriptions = [];
    }
};
SubscriberComponent.ctorParameters = () => [];
SubscriberComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)()
], SubscriberComponent);



/***/ }),

/***/ 4463:
/*!************************************************************!*\
  !*** ./src/shared/validators/regex-validator.directive.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "regexValidator": () => (/* binding */ regexValidator)
/* harmony export */ });
function regexValidator(regex, error) {
    return (control) => {
        if (control.value && !control.value.match(regex)) {
            return {
                invalidPattern: error
            };
        }
        else {
            return null;
        }
    };
}


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		17950,
		"default-node_modules_ionic_core_dist_esm_data-cb72448c_js-node_modules_ionic_core_dist_esm_th-29e28e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"default-node_modules_ionic_core_dist_esm_data-cb72448c_js-node_modules_ionic_core_dist_esm_th-29e28e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 55899:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./pwa-action-sheet.entry.js": [
		45464,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-action-sheet_entry_js"
	],
	"./pwa-camera-modal-instance.entry.js": [
		68724,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal-instance_entry_js"
	],
	"./pwa-camera-modal.entry.js": [
		8145,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal_entry_js"
	],
	"./pwa-camera.entry.js": [
		30527,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera_entry_js"
	],
	"./pwa-toast.entry.js": [
		44389,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-toast_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 55899;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 67326:
/*!*******************************************************************************************!*\
  !*** ./src/app/main/wardrobe/image-crop-modal/image-crop-modal.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "/** Ionic CSS Variables **/\n:root {\n  --ion-color-white: #ffffff;\n  --ion-color-black: #000000;\n  /** primary color**/\n  --ion-color-primary: #ffde59;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #111111;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #ffeeae;\n  --ion-color-primary-tint: #ffde59;\n  /** secondary for text**/\n  --ion-color-secondary: #111111;\n  --ion-color-secondary-rgb: 17, 17, 17;\n  --ion-color-secondary-contrast: #ffde59;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0f0f0f;\n  --ion-color-secondary-tint: #292929;\n  /** tertiary used for input background and background icone**/\n  --ion-color-tertiary: #dbdbdb;\n  --ion-color-tertiary-rgb: 219, 219, 219;\n  --ion-color-tertiary-contrast: #000000;\n  --ion-color-tertiary-contrast-rgb: 0, 0, 0;\n  --ion-color-tertiary-shade: #c1c1c1;\n  --ion-color-tertiary-tint: #dfdfdf;\n  /** success **/\n  --ion-color-success: #01db72;\n  --ion-color-success-rgb: 1, 219, 114;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #01c164;\n  --ion-color-success-tint: #1adf80;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #ff1166;\n  --ion-color-danger-rgb: 255, 17, 102;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e00f5a;\n  --ion-color-danger-tint: #ff2976;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: rgba(255, 222, 89, 0.19);\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** Tab-bar **/\n  --ion-toolbar-background: white;\n  --text-font-style: \"IBMPlexSans\";\n  --title-font-style: \"IBMPlexSans\";\n}\n:root .spinner-bubbles {\n  color: var(--ion-color-primary);\n}\n:root ion-tab-button.tab-selected {\n  --color-selected: var(--ion-color-primary);\n}\n:root ion-segment {\n  --background: var(--ion-color-white);\n}\n:root ion-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --color-checked: black;\n  --indicator-transition: none;\n}\n:root ion-button {\n  text-transform: none;\n}\nion-toolbar ion-button {\n  height: 2.5rem;\n  width: 2.5rem;\n  min-width: 2.5rem;\n  --padding-start: none;\n  --padding-end: none;\n}\nion-toolbar ion-title {\n  width: 100%;\n  text-align: center;\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: 600;\n  padding-right: 0px;\n  padding-left: 0px;\n}\n.content {\n  height: calc(100% - 3.5rem);\n  max-height: 100%;\n  max-width: 100%;\n}\n.submit-button {\n  height: 2.5rem;\n  width: 100%;\n  margin-bottom: 0.5rem;\n  text-align: -webkit-center;\n}\n.submit-button ion-button {\n  --box-shadow: none;\n  height: 100%;\n  font-size: 1.125rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: bold;\n  --border-radius: 1rem;\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiaW1hZ2UtY3JvcC1tb2RhbC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3RoZW1lL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLDBCQUFBO0FBb0JBO0VBQ0UsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHFDQUFBO0VBQ0EsdUNBQUE7RUFDQSxpREFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSw2REFBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsWUFBQTtFQUNBLDJDQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQU1BLGNBQUE7RUFtQkEsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0FDcERGO0FEMkJFO0VBQ0UsK0JBQUE7QUN6Qko7QUQ2QkU7RUFDRSwwQ0FBQTtBQzNCSjtBRDhCRTtFQUNFLG9DQUFBO0FDNUJKO0FEK0JFO0VBQ0UsOENBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FDN0JKO0FEZ0NFO0VBQ0Usb0JBQUE7QUM5Qko7QUFwRkU7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQXVGSjtBQXBGRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQ1ZGLGVEV2lCO0VDVmpCLDBCRFV1QjtFQ1R2QixpQ0RTc0M7RUNSdEMsZ0JEUWtFO0VBQ2hFLGtCQUFBO0VBQ0EsaUJBQUE7QUF5Rko7QUFyRkE7RUFDRSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQXdGRjtBQXJGQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtBQXdGRjtBQXRGRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQy9CRixtQkRnQ2lCO0VDL0JqQiwwQkQrQjJCO0VDOUIzQixpQ0Q4QjBDO0VDN0IxQyxpQkQ2QnNFO0VBQ3BFLHFCQUFBO0VBQ0EsVUFBQTtBQTJGSiIsImZpbGUiOiJpbWFnZS1jcm9wLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOlxuLy8gaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvXG5cbi8qKiBJb25pYyBDU1MgVmFyaWFibGVzICoqL1xuXG4vLyBjb2xvcnNcbiRibGFjazI6ICM0MDQwM2Y7XG4kZ3JheTYwMDogIzExMTExMTsgLy91c2VkXG4kZ3JheTUwMDogIzI5MjkyOTsgLy91c2VkXG4kZ3JheTQwMDogIzU5NTk1OTsgLy91c2VkXG4kZ3JheTMwMDogIzg4ODg4ODsgLy91c2VkXG4kZ3JheTIwMDogI0I4QjhCODtcbiRncmF5MjogIzlkOWM5OTtcbiRncmF5MzogI2RiZGJkYjtcbiR5ZWxsb3cxMDA6ICNmZmZjZWY7XG4keWVsbG93MjAwOiAjZmZmNWNlO1xuJHllbGxvdzM6ICNmZGU4OTY7XG4keWVsbG93NDogI2ZjZWViNjtcbiR5ZWxsb3c1OiAjZmJmMmQ0O1xuJHllbGxvdzY6ICNGRkRFNTk7XG4kd2hpdGU4MDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuJGRhcms3NTogcmdiYSgwLCAwLCAwLCAwLjI1KTsgLy9idXR0b25zIHNoYWRvd1xuXG46cm9vdCB7XG4gIC0taW9uLWNvbG9yLXdoaXRlOiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1ibGFjazogIzAwMDAwMDtcbiAgLyoqIHByaW1hcnkgY29sb3IqKi9cbiAgLS1pb24tY29sb3ItcHJpbWFyeTogI2ZmZGU1OTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDU2LCAxMjgsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogIzExMTExMTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICNmZmVlYWU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogI2ZmZGU1OTtcblxuICAvKiogc2Vjb25kYXJ5IGZvciB0ZXh0KiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzExMTExMTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogMTcsIDE3LCAxNztcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZkZTU5O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICMwZjBmMGY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjMjkyOTI5O1xuXG4gIC8qKiB0ZXJ0aWFyeSB1c2VkIGZvciBpbnB1dCBiYWNrZ3JvdW5kIGFuZCBiYWNrZ3JvdW5kIGljb25lKiovXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjZGJkYmRiOyAvL3NhbWUgYXMgZ3JheTNcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAyMTksIDIxOSwgMjE5O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogI2MxYzFjMTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogI2RmZGZkZjtcblxuICAvKiogc3VjY2VzcyAqKi9cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzAxZGI3MjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDEsIDIxOSwgMTE0O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzAxYzE2NDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjMWFkZjgwO1xuXG4gIC8qKiB3YXJuaW5nICoqL1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZjNDA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAxOTYsIDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBhYzA4O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmNhMjI7XG5cbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZmYxMTY2O1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNTUsIDE3LCAxMDI7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZTAwZjVhO1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2ZmMjk3NjtcblxuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XG5cbiAgLyoqIG1lZGl1bSAqKi9cbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTI5NDljO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNDYsIDE0OCwgMTU2O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzgwODI4OTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICM5ZDlmYTY7XG5cbiAgLyoqIGxpZ2h0ICoqL1xuICAtLWlvbi1jb2xvci1saWdodDogcmdiYSgyNTUsIDIyMiwgODksIDAuMTkpO1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xuXG4gIC5zcGlubmVyLWJ1YmJsZXMge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cblxuICAvKiogVGFiLWJhciAqKi9cbiAgaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIHtcbiAgICAtLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cblxuICBpb24tc2VnbWVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICB9XG5cbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tY29sb3ItY2hlY2tlZDogYmxhY2s7XG4gICAgLS1pbmRpY2F0b3ItdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB9XG5cbiAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS10ZXh0LWZvbnQtc3R5bGU6ICdJQk1QbGV4U2Fucyc7XG4gIC0tdGl0bGUtZm9udC1zdHlsZTogJ0lCTVBsZXhTYW5zJztcbn1cblxuLy8gVmVyaWZpZWRcbiR3aWR0aC1zZDogMzAwcHg7IC8vZm9sZFxuJHdpZHRoLW1kOiAzODBweDsgLy9pcGhvbmUgU0VcbiR3aWR0aC1sZDogNDEycHg7IC8vaXBob25lIFhSXG4kd2lkdGgteGxkOiA3NjhweDsgLy9pcGFkIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vLi4vdGhlbWUvdmFyaWFibGVzLnNjc3MnO1xuXG5pb24tdG9vbGJhciB7XG4gIGlvbi1idXR0b24ge1xuICAgIGhlaWdodDogMi41cmVtO1xuICAgIHdpZHRoOiAyLjVyZW07XG4gICAgbWluLXdpZHRoOiAyLjVyZW07XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiBub25lO1xuICAgIC0tcGFkZGluZy1lbmQ6IG5vbmU7XG4gIH1cblxuICBpb24tdGl0bGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBAaW5jbHVkZSB0aXRsZSgxcmVtLCAnSUJNUGxleFNhbnMnLCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSwgNjAwKTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIH1cbn1cblxuLmNvbnRlbnQge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMuNXJlbSk7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLnN1Ym1pdC1idXR0b24ge1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBAaW5jbHVkZSB0aXRsZSgxLjEyNXJlbSwgJ0lCTVBsZXhTYW5zJywgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSksIGJvbGQpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4iLCJAbWl4aW4gdGl0bGUoJGZvbnQtc2l6ZTogMnJlbSxcbiAgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnLFxuICAkY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpLFxuICAkZm9udC13ZWlnaHQ6IGJvbGQpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5cblxuQG1peGluIHNpbXBsZV9idXR0b24oJHdpZHRoOiAyNSUsICRoZWlnaHQ6IDIuNXJlbSwgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSkge1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG4gIC0tY29sb3I6ICRjb2xvcjtcbn1cblxuQG1peGluIGljb24oJHdpZHRoOiAxcmVtLCAkaGVpZ2h0OiAxcmVtKSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbn1cblxuQG1peGluIHRleHQoJGZvbnQtc2l6ZTogMC44NzVyZW0sXG4gICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJyxcbiAgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSxcbiAgJGZvbnQtd2VpZ2h0OiBub3JtYWwpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gdGV4dC1vdmVyZmxvdygpIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cblxuLy92ZXJpZmllZFxuXG5AbWl4aW4gZmxleCgkZGlyZWN0aW9uOiByb3csICRhbGlnbi1pdGVtczogY2VudGVyLCAkanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0LCAkd3JhcDogbm93cmFwLCAkaW5saW5lOiBmYWxzZSwgJHBvc2l0aW9uOiByZWxhdGl2ZSkge1xuICBwb3NpdGlvbjogJHBvc2l0aW9uO1xuICBhbGlnbi1pdGVtczogJGFsaWduLWl0ZW1zO1xuXG4gIEBpZiAkaW5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgfVxuXG4gIEBlbHNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG4gIGZsZXgtd3JhcDogJHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnktY29udGVudDtcbn1cblxuQG1peGluIGJ1dHRvbigkd2lkdGg6IDI1JSwgJGhlaWdodDogMi41cmVtLCAkZm9udC1zaXplOiAwLjg3NXJlbSwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnLCAkZm9udC13ZWlnaHQ6IDYwMCkge1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbiAgbWluLWhlaWdodDogJGhlaWdodDtcbn1cblxuQG1peGluIHdoaXRlVGl0bGUoJGZvbnQtc2l6ZTogMS43NXJlbSwgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIHdoaXRlU3VidGl0bGUoJGZvbnQtc2l6ZTogMXJlbSwgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIGJsYWNrVGl0bGUoJGZvbnQtc2l6ZTogMS43NXJlbSwgJGNvbG9yOiAkZ3JheTUwMCwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJywgKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbkBtaXhpbiBibGFja1N1YnRpdGxlKCRmb250LXNpemU6IDFyZW0sICRjb2xvcjogJGdyYXk1MDAsICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gbWVkaXVtVGV4dCgkZm9udC1zaXplOiAwLjc1cmVtLCAkY29sb3I6ICRncmF5NTAwLCAkZm9udC13ZWlnaHQ6IDUwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIHJlZ3VsYXJUZXh0KCRmb250LXNpemU6IDFyZW0sICRjb2xvcjogJGdyYXk2MDAsICRmb250LXdlaWdodDogNDAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gc2VtaUJvbGRUZXh0KCRmb250LXNpemU6IDJyZW0sICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKSwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiBib2xkVGV4dCgkZm9udC1zaXplOiAxLjEyNXJlbSwgJGNvbG9yOiAkZ3JheTYwMCwgJGZvbnQtd2VpZ2h0OiA3MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59Il19 */";

/***/ }),

/***/ 2719:
/*!***********************************************************************************************************!*\
  !*** ./src/shared/components/add-article-title-dialog/add-article-title-dialog.component.scss?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "/** Ionic CSS Variables **/\n:root {\n  --ion-color-white: #ffffff;\n  --ion-color-black: #000000;\n  /** primary color**/\n  --ion-color-primary: #ffde59;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #111111;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #ffeeae;\n  --ion-color-primary-tint: #ffde59;\n  /** secondary for text**/\n  --ion-color-secondary: #111111;\n  --ion-color-secondary-rgb: 17, 17, 17;\n  --ion-color-secondary-contrast: #ffde59;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0f0f0f;\n  --ion-color-secondary-tint: #292929;\n  /** tertiary used for input background and background icone**/\n  --ion-color-tertiary: #dbdbdb;\n  --ion-color-tertiary-rgb: 219, 219, 219;\n  --ion-color-tertiary-contrast: #000000;\n  --ion-color-tertiary-contrast-rgb: 0, 0, 0;\n  --ion-color-tertiary-shade: #c1c1c1;\n  --ion-color-tertiary-tint: #dfdfdf;\n  /** success **/\n  --ion-color-success: #01db72;\n  --ion-color-success-rgb: 1, 219, 114;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #01c164;\n  --ion-color-success-tint: #1adf80;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #ff1166;\n  --ion-color-danger-rgb: 255, 17, 102;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e00f5a;\n  --ion-color-danger-tint: #ff2976;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: rgba(255, 222, 89, 0.19);\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** Tab-bar **/\n  --ion-toolbar-background: white;\n  --text-font-style: \"IBMPlexSans\";\n  --title-font-style: \"IBMPlexSans\";\n}\n:root .spinner-bubbles {\n  color: var(--ion-color-primary);\n}\n:root ion-tab-button.tab-selected {\n  --color-selected: var(--ion-color-primary);\n}\n:root ion-segment {\n  --background: var(--ion-color-white);\n}\n:root ion-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --color-checked: black;\n  --indicator-transition: none;\n}\n:root ion-button {\n  text-transform: none;\n}\nion-content {\n  --background: transparent;\n}\nion-content .modal-content {\n  position: relative;\n  top: calc(50% - 6.25rem);\n  width: calc(100% - 2rem);\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0 auto;\n  padding: 1rem;\n  background: var(--ion-color-white);\n  border-radius: 1rem;\n}\nion-content .modal-content .header {\n  font-size: 1.125rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: 600;\n  text-align: center;\n}\nion-content .modal-content ion-input {\n  margin: 1rem 0 1rem 0;\n  height: 2.5rem;\n  border: 1px solid #9d9c99;\n  border-radius: 6px;\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: normal;\n}\nion-content .modal-content ion-item {\n  --padding-start: 0;\n  --min-height: 0;\n  height: 1.3rem;\n}\nion-content .modal-content ion-item .item-native {\n  height: 1.3rem;\n}\nion-content .modal-content ion-item .item-bottom {\n  --inner-border-width: 0;\n}\nion-content .modal-content ion-item ion-label {\n  font-size: 12px;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: normal;\n  margin: 0;\n}\nion-content .modal-content ion-item ion-checkbox {\n  --border-color: var(--ion-color-primary);\n  --border-weight: 2px;\n  height: 1rem;\n  width: 1rem;\n  border-radius: 4px;\n  margin-inline-start: 0;\n  margin-inline-end: 8px;\n  margin: 0 0.5rem 0 0;\n}\nion-content .modal-content .buttons {\n  width: 100%;\n  display: inline-flex;\n  justify-content: space-between;\n  height: 2.5rem;\n  margin-top: 24px;\n}\nion-content .modal-content .buttons .cancel-button {\n  width: calc(50% - 12px);\n  --background: #fceeb6;\n  font-size: 18px;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: 600;\n  --border-radius: 1.25rem;\n  max-width: 150px;\n  height: 2.5rem;\n  margin: 0;\n}\nion-content .modal-content .buttons .confirm-button {\n  width: calc(50% - 12px);\n  --border-radius: 1.25rem;\n  font-size: 18px;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: 600;\n  max-width: 150px;\n  height: 2.5rem;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiYWRkLWFydGljbGUtdGl0bGUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsMEJBQUE7QUFvQkE7RUFDRSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLDZEQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsMENBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBTUEsY0FBQTtFQW1CQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7QUNwREY7QUQyQkU7RUFDRSwrQkFBQTtBQ3pCSjtBRDZCRTtFQUNFLDBDQUFBO0FDM0JKO0FEOEJFO0VBQ0Usb0NBQUE7QUM1Qko7QUQrQkU7RUFDRSw4Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUM3Qko7QURnQ0U7RUFDRSxvQkFBQTtBQzlCSjtBQXJGQTtFQUNFLHlCQUFBO0FBd0ZGO0FBdEZFO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQXdGSjtBQXRGSTtFQ1dGLG1CRFZrQjtFQ1dsQiwwQkRYNEI7RUNZNUIsaUNEWjJDO0VDYTNDLGdCRGJ1RTtFQUNuRSxrQkFBQTtBQTJGTjtBQXhGSTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUNFSixlRERrQjtFQ0VsQiwwQkFKYztFQUtkLGlDQUpRO0VBS1IsbUJBSmM7QUQ2RmhCO0FBMUZJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQTRGTjtBQTNGTTtFQUNFLGNBQUE7QUE2RlI7QUExRk07RUFDRSx1QkFBQTtBQTRGUjtBQXpGTTtFQ2RKLGVEZW9CO0VDZHBCLDBCQUpjO0VBS2QsaUNBSlE7RUFLUixtQkFKYztFRGlCUixTQUFBO0FBOEZSO0FBM0ZNO0VBQ0Usd0NBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUE2RlI7QUF6Rkk7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQTJGTjtBQXpGTTtFQUNFLHVCQUFBO0VBQ0EscUJBQUE7RUN4Q04sZUR5Q29CO0VDeENwQiwwQkR3QzBCO0VDdkMxQixpQ0R1Q3lDO0VDdEN6QyxnQkRzQ3FFO0VBQy9ELHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQThGUjtBQTNGTTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7RUNsRE4sZURtRG9CO0VDbERwQiwwQkRrRDBCO0VDakQxQixpQ0RpRHlDO0VDaER6QyxnQkRnRHFFO0VBQy9ELGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFnR1IiLCJmaWxlIjoiYWRkLWFydGljbGUtdGl0bGUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOlxuLy8gaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvXG5cbi8qKiBJb25pYyBDU1MgVmFyaWFibGVzICoqL1xuXG4vLyBjb2xvcnNcbiRibGFjazI6ICM0MDQwM2Y7XG4kZ3JheTYwMDogIzExMTExMTsgLy91c2VkXG4kZ3JheTUwMDogIzI5MjkyOTsgLy91c2VkXG4kZ3JheTQwMDogIzU5NTk1OTsgLy91c2VkXG4kZ3JheTMwMDogIzg4ODg4ODsgLy91c2VkXG4kZ3JheTIwMDogI0I4QjhCODtcbiRncmF5MjogIzlkOWM5OTtcbiRncmF5MzogI2RiZGJkYjtcbiR5ZWxsb3cxMDA6ICNmZmZjZWY7XG4keWVsbG93MjAwOiAjZmZmNWNlO1xuJHllbGxvdzM6ICNmZGU4OTY7XG4keWVsbG93NDogI2ZjZWViNjtcbiR5ZWxsb3c1OiAjZmJmMmQ0O1xuJHllbGxvdzY6ICNGRkRFNTk7XG4kd2hpdGU4MDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuJGRhcms3NTogcmdiYSgwLCAwLCAwLCAwLjI1KTsgLy9idXR0b25zIHNoYWRvd1xuXG46cm9vdCB7XG4gIC0taW9uLWNvbG9yLXdoaXRlOiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1ibGFjazogIzAwMDAwMDtcbiAgLyoqIHByaW1hcnkgY29sb3IqKi9cbiAgLS1pb24tY29sb3ItcHJpbWFyeTogI2ZmZGU1OTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDU2LCAxMjgsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogIzExMTExMTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICNmZmVlYWU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogI2ZmZGU1OTtcblxuICAvKiogc2Vjb25kYXJ5IGZvciB0ZXh0KiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzExMTExMTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogMTcsIDE3LCAxNztcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZkZTU5O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICMwZjBmMGY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjMjkyOTI5O1xuXG4gIC8qKiB0ZXJ0aWFyeSB1c2VkIGZvciBpbnB1dCBiYWNrZ3JvdW5kIGFuZCBiYWNrZ3JvdW5kIGljb25lKiovXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjZGJkYmRiOyAvL3NhbWUgYXMgZ3JheTNcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAyMTksIDIxOSwgMjE5O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogI2MxYzFjMTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogI2RmZGZkZjtcblxuICAvKiogc3VjY2VzcyAqKi9cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzAxZGI3MjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDEsIDIxOSwgMTE0O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzAxYzE2NDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjMWFkZjgwO1xuXG4gIC8qKiB3YXJuaW5nICoqL1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZjNDA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAxOTYsIDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBhYzA4O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmNhMjI7XG5cbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZmYxMTY2O1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNTUsIDE3LCAxMDI7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZTAwZjVhO1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2ZmMjk3NjtcblxuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XG5cbiAgLyoqIG1lZGl1bSAqKi9cbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTI5NDljO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNDYsIDE0OCwgMTU2O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzgwODI4OTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICM5ZDlmYTY7XG5cbiAgLyoqIGxpZ2h0ICoqL1xuICAtLWlvbi1jb2xvci1saWdodDogcmdiYSgyNTUsIDIyMiwgODksIDAuMTkpO1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xuXG4gIC5zcGlubmVyLWJ1YmJsZXMge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cblxuICAvKiogVGFiLWJhciAqKi9cbiAgaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIHtcbiAgICAtLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cblxuICBpb24tc2VnbWVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICB9XG5cbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tY29sb3ItY2hlY2tlZDogYmxhY2s7XG4gICAgLS1pbmRpY2F0b3ItdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB9XG5cbiAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS10ZXh0LWZvbnQtc3R5bGU6ICdJQk1QbGV4U2Fucyc7XG4gIC0tdGl0bGUtZm9udC1zdHlsZTogJ0lCTVBsZXhTYW5zJztcbn1cblxuLy8gVmVyaWZpZWRcbiR3aWR0aC1zZDogMzAwcHg7IC8vZm9sZFxuJHdpZHRoLW1kOiAzODBweDsgLy9pcGhvbmUgU0VcbiR3aWR0aC1sZDogNDEycHg7IC8vaXBob25lIFhSXG4kd2lkdGgteGxkOiA3NjhweDsgLy9pcGFkIiwiQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvdmFyaWFibGVzLnNjc3MnO1xuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgLm1vZGFsLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IGNhbGMoNTAlIC0gNi4yNXJlbSk7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDJyZW0pO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgIEBpbmNsdWRlIHRleHQoMS4xMjVyZW0sICdJQk1QbGV4U2FucycsIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpLCA2MDApO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIGlvbi1pbnB1dCB7XG4gICAgICBtYXJnaW46IDFyZW0gMCAxcmVtIDA7XG4gICAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRncmF5MjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIEBpbmNsdWRlIHRleHQoMXJlbSk7XG4gICAgfVxuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgLS1taW4taGVpZ2h0OiAwO1xuICAgICAgaGVpZ2h0OiAxLjNyZW07XG4gICAgICAuaXRlbS1uYXRpdmUge1xuICAgICAgICBoZWlnaHQ6IDEuM3JlbTtcbiAgICAgIH1cblxuICAgICAgLml0ZW0tYm90dG9tIHtcbiAgICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG4gICAgICB9XG5cbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIHRleHQoMTJweCk7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgaW9uLWNoZWNrYm94IHtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgLS1ib3JkZXItd2VpZ2h0OiAycHg7XG4gICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogMDtcbiAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDhweDtcbiAgICAgICAgbWFyZ2luOiAwIDAuNXJlbSAwIDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ1dHRvbnMge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgbWFyZ2luLXRvcDogMjRweDtcblxuICAgICAgLmNhbmNlbC1idXR0b24ge1xuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMnB4KTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmNlZWI2OyAvL3llbGxvdzRcbiAgICAgICAgQGluY2x1ZGUgdGV4dCgxOHB4LCAnSUJNUGxleFNhbnMnLCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSwgNjAwKTtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxLjI1cmVtO1xuICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICAuY29uZmlybS1idXR0b24ge1xuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMnB4KTtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxLjI1cmVtO1xuICAgICAgICBAaW5jbHVkZSB0ZXh0KDE4cHgsICdJQk1QbGV4U2FucycsIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpLCA2MDApO1xuICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQG1peGluIHRpdGxlKCRmb250LXNpemU6IDJyZW0sXG4gICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJyxcbiAgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSxcbiAgJGZvbnQtd2VpZ2h0OiBib2xkKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuXG5cbkBtaXhpbiBzaW1wbGVfYnV0dG9uKCR3aWR0aDogMjUlLCAkaGVpZ2h0OiAyLjVyZW0sICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkpIHtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xuICAtLWNvbG9yOiAkY29sb3I7XG59XG5cbkBtaXhpbiBpY29uKCR3aWR0aDogMXJlbSwgJGhlaWdodDogMXJlbSkge1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG59XG5cbkBtaXhpbiB0ZXh0KCRmb250LXNpemU6IDAuODc1cmVtLFxuICAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycsXG4gICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSksXG4gICRmb250LXdlaWdodDogbm9ybWFsKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIHRleHQtb3ZlcmZsb3coKSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5cbi8vdmVyaWZpZWRcblxuQG1peGluIGZsZXgoJGRpcmVjdGlvbjogcm93LCAkYWxpZ24taXRlbXM6IGNlbnRlciwgJGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCwgJHdyYXA6IG5vd3JhcCwgJGlubGluZTogZmFsc2UsICRwb3NpdGlvbjogcmVsYXRpdmUpIHtcbiAgcG9zaXRpb246ICRwb3NpdGlvbjtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbi1pdGVtcztcblxuICBAaWYgJGlubGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIH1cblxuICBAZWxzZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xuICBmbGV4LXdyYXA6ICR3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5LWNvbnRlbnQ7XG59XG5cbkBtaXhpbiBidXR0b24oJHdpZHRoOiAyNSUsICRoZWlnaHQ6IDIuNXJlbSwgJGZvbnQtc2l6ZTogMC44NzVyZW0sICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJywgJGZvbnQtd2VpZ2h0OiA2MDApIHtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG4gIG1pbi1oZWlnaHQ6ICRoZWlnaHQ7XG59XG5cbkBtaXhpbiB3aGl0ZVRpdGxlKCRmb250LXNpemU6IDEuNzVyZW0sICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKSwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiB3aGl0ZVN1YnRpdGxlKCRmb250LXNpemU6IDFyZW0sICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKSwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiBibGFja1RpdGxlKCRmb250LXNpemU6IDEuNzVyZW0sICRjb2xvcjogJGdyYXk1MDAsICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycsICkge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5AbWl4aW4gYmxhY2tTdWJ0aXRsZSgkZm9udC1zaXplOiAxcmVtLCAkY29sb3I6ICRncmF5NTAwLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIG1lZGl1bVRleHQoJGZvbnQtc2l6ZTogMC43NXJlbSwgJGNvbG9yOiAkZ3JheTUwMCwgJGZvbnQtd2VpZ2h0OiA1MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiByZWd1bGFyVGV4dCgkZm9udC1zaXplOiAxcmVtLCAkY29sb3I6ICRncmF5NjAwLCAkZm9udC13ZWlnaHQ6IDQwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIHNlbWlCb2xkVGV4dCgkZm9udC1zaXplOiAycmVtLCAkY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSksICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gYm9sZFRleHQoJGZvbnQtc2l6ZTogMS4xMjVyZW0sICRjb2xvcjogJGdyYXk2MDAsICRmb250LXdlaWdodDogNzAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufSJdfQ== */";

/***/ }),

/***/ 66068:
/*!*************************************************************************************************!*\
  !*** ./src/shared/components/articles-card-modal/articles-card-modal.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "/** Ionic CSS Variables **/\n:root {\n  --ion-color-white: #ffffff;\n  --ion-color-black: #000000;\n  /** primary color**/\n  --ion-color-primary: #ffde59;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #111111;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #ffeeae;\n  --ion-color-primary-tint: #ffde59;\n  /** secondary for text**/\n  --ion-color-secondary: #111111;\n  --ion-color-secondary-rgb: 17, 17, 17;\n  --ion-color-secondary-contrast: #ffde59;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0f0f0f;\n  --ion-color-secondary-tint: #292929;\n  /** tertiary used for input background and background icone**/\n  --ion-color-tertiary: #dbdbdb;\n  --ion-color-tertiary-rgb: 219, 219, 219;\n  --ion-color-tertiary-contrast: #000000;\n  --ion-color-tertiary-contrast-rgb: 0, 0, 0;\n  --ion-color-tertiary-shade: #c1c1c1;\n  --ion-color-tertiary-tint: #dfdfdf;\n  /** success **/\n  --ion-color-success: #01db72;\n  --ion-color-success-rgb: 1, 219, 114;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #01c164;\n  --ion-color-success-tint: #1adf80;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #ff1166;\n  --ion-color-danger-rgb: 255, 17, 102;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e00f5a;\n  --ion-color-danger-tint: #ff2976;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: rgba(255, 222, 89, 0.19);\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** Tab-bar **/\n  --ion-toolbar-background: white;\n  --text-font-style: \"IBMPlexSans\";\n  --title-font-style: \"IBMPlexSans\";\n}\n:root .spinner-bubbles {\n  color: var(--ion-color-primary);\n}\n:root ion-tab-button.tab-selected {\n  --color-selected: var(--ion-color-primary);\n}\n:root ion-segment {\n  --background: var(--ion-color-white);\n}\n:root ion-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --color-checked: black;\n  --indicator-transition: none;\n}\n:root ion-button {\n  text-transform: none;\n}\nion-toolbar ion-button {\n  --box-shadow: none;\n  width: 2.5rem;\n  height: 2.5rem;\n  min-width: 2.5rem;\n  --padding-start: none;\n  --padding-end: none;\n}\nion-toolbar ion-title {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: #292929;\n  font-weight: 600;\n  margin: 0px;\n  padding-right: 3rem;\n  padding-left: 3rem;\n  text-align: center;\n  width: 100%;\n}\n.search {\n  position: relative;\n  align-items: center;\n  display: inline-flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  width: 100%;\n  padding-top: 0.5rem;\n}\n.search ion-searchbar {\n  max-width: 92%;\n  --border-radius: 1rem;\n  height: 40px;\n}\n.search ion-button {\n  width: 35%;\n  height: 2.5rem;\n  font-family: var(--ion-color-white);\n  font-size: 0.75rem;\n  font-weight: 600;\n  min-height: 2.5rem;\n  max-width: 80px;\n  --box-shadow: none;\n  --border-radius: 1rem;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n}\n@media screen and (max-width: 300px) {\n  .search ion-button {\n    font-size: 0.625rem;\n  }\n}\n.search ion-button .filter_button {\n  position: relative;\n  align-items: center;\n  display: inline-flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  width: 100%;\n}\n.search ion-button .filter_button ion-icon {\n  width: 1rem;\n  height: 1rem;\n}\n.search ion-button .filter_button .text-button {\n  padding-right: 0.5rem;\n}\n.container {\n  position: relative;\n  align-items: center;\n  display: inline-flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0rem 1rem 0rem 1rem;\n  /*ion-icon{\n    height: 20px;\n    width: 20px;\n  }*/\n}\n.subtitle-container {\n  font-size: 0.875rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: normal;\n}\n.subtitle-container .category-name {\n  text-transform: lowercase;\n}\nion-card {\n  display: flex;\n  flex-direction: column;\n  background: rgba(255, 255, 255, 0.8);\n  float: left;\n  width: calc(50% - 0.5rem);\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0 0 1rem 0;\n  border-radius: 1rem;\n  border: 1px solid #fde896;\n}\nion-card img {\n  width: 100%;\n}\nion-card ion-card-content {\n  padding: 0.5rem;\n  /*.brand{\n    padding-top: 8px;\n    color: #111111;\n    font-weight: bold;\n    font-style: italic;\n    font-size: 13px;\n  }*/\n}\nion-card ion-card-content .card-container {\n  position: relative;\n  align-items: center;\n  display: inline-flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  width: 100%;\n}\nion-card ion-card-content .card-container .title {\n  font-size: 0.875rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: calc(100% - 1rem);\n}\nion-card ion-card-content .card-container .colors {\n  width: 1rem;\n  height: 1rem;\n  border-radius: 50%;\n}\nion-card ion-card-content .card-container .color {\n  height: 1rem;\n  width: 1rem;\n  border-radius: 50%;\n  border: 1px solid var(--ion-color-secondary);\n}\nion-card .bottom_buttons {\n  display: inline-flex;\n  padding-top: 15px;\n  width: 100%;\n  justify-content: space-between;\n}\nion-card .bottom_buttons .dressing_btn {\n  height: 40px;\n  width: 25%;\n}\nion-fab ion-icon {\n  color: var(--ion-color-white);\n}\nion-icon {\n  height: 30px;\n  width: 30px;\n}\n.selected-card {\n  border-width: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiYXJ0aWNsZXMtY2FyZC1tb2RhbC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL3RoZW1lL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLDBCQUFBO0FBb0JBO0VBQ0UsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHFDQUFBO0VBQ0EsdUNBQUE7RUFDQSxpREFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSw2REFBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsWUFBQTtFQUNBLDJDQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQU1BLGNBQUE7RUFtQkEsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0FDcERGO0FEMkJFO0VBQ0UsK0JBQUE7QUN6Qko7QUQ2QkU7RUFDRSwwQ0FBQTtBQzNCSjtBRDhCRTtFQUNFLG9DQUFBO0FDNUJKO0FEK0JFO0VBQ0UsOENBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FDN0JKO0FEZ0NFO0VBQ0Usb0JBQUE7QUM5Qko7QUFwRkU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBdUZKO0FBcEZFO0VDc0VBLGVEckVzQjtFQ3NFdEIsMEJBRndGO0VBR3hGLGNGN0VRO0VFOEVSLGdCQUpxRTtFQUtyRSxXQUFBO0VEeEVFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUEwRko7QUF0RkE7RUNxQkUsa0JBRHlIO0VBRXpILG1CRHJCbUI7RUN3QmpCLG9CQUFBO0VBT0YsbUJEL0JjO0VDZ0NkLGlCRGhDbUM7RUNpQ25DLHVCRGpDMkI7RUFDM0IsV0FBQTtFQUNBLG1CQUFBO0FBOEZGO0FBNUZFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQThGSjtBQTNGRTtFQzJCQSxVRDFCa0I7RUMyQmxCLGNEM0J1QjtFQzRCdkIsbUNENUJ3QztFQzZCeEMsa0JEN0IrQjtFQzhCL0IsZ0JBTDJHO0VBTTNHLGtCRC9CdUI7RUFDckIsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBa0dKO0FBaEdJO0VBUkY7SUFTSSxtQkFBQTtFQW1HSjtBQUNGO0FBakdJO0VDRkYsa0JBRHlIO0VBRXpILG1CREV1QjtFQ0NyQixvQkFBQTtFQU9GLG1CRFJrQjtFQ1NsQixpQkRUOEM7RUNVOUMsOEJEVitCO0VBQzNCLFdBQUE7QUF3R047QUF0R007RUM5QkosV0FEa0I7RUFFbEIsWUFGaUM7QUR5SW5DO0FBdEdNO0VBQ0UscUJBQUE7QUF3R1I7QUFsR0E7RUNqQkUsa0JBRHlIO0VBRXpILG1CRGlCbUI7RUNkakIsb0JBQUE7RUFPRixtQkRPYztFQ05kLGVETTBDO0VDTDFDLDhCREsyQjtFQUMzQixXQUFBO0VBQ0EsNEJBQUE7RUFDQTs7O0lBQUE7QUE2R0Y7QUF2R0E7RUMzQ0UsbUJENENjO0VDM0NkLDBCQUpjO0VBS2QsaUNBSlE7RUFLUixtQkFKYztBRDBKaEI7QUEzR0U7RUFDRSx5QkFBQTtBQTZHSjtBQXpHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9DRDdEUTtFQzhEUixXQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBNEdGO0FBMUdFO0VBQ0UsV0FBQTtBQTRHSjtBQXpHRTtFQUNFLGVBQUE7RUEyQkE7Ozs7OztJQUFBO0FBdUZKO0FBaEhJO0VDckRGLGtCQUR5SDtFQUV6SCxtQkRxRHVCO0VDbERyQixvQkFBQTtFQU9GLG1CRDJDa0I7RUMxQ2xCLGlCRDBDOEM7RUN6QzlDLDhCRHlDK0I7RUFDM0IsV0FBQTtBQXVITjtBQXJITTtFQ3pFSixtQkFKc0I7RUFLdEIsMEJBSmM7RUFLZCxpQ0FKUTtFQUtSLG1CQUpjO0VBUWQsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VEbUVNLDRCQUFBO0FBNEhSO0FBekhNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtBQTBIUjtBQXZITTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQXlIUjtBQTVHRTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUE4R0o7QUE1R0k7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQThHTjtBQXhHRTtFQUNFLDZCQUFBO0FBMkdKO0FBdkdBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUEwR0Y7QUF2R0E7RUFDRSxpQkFBQTtBQTBHRiIsImZpbGUiOiJhcnRpY2xlcy1jYXJkLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOlxuLy8gaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvXG5cbi8qKiBJb25pYyBDU1MgVmFyaWFibGVzICoqL1xuXG4vLyBjb2xvcnNcbiRibGFjazI6ICM0MDQwM2Y7XG4kZ3JheTYwMDogIzExMTExMTsgLy91c2VkXG4kZ3JheTUwMDogIzI5MjkyOTsgLy91c2VkXG4kZ3JheTQwMDogIzU5NTk1OTsgLy91c2VkXG4kZ3JheTMwMDogIzg4ODg4ODsgLy91c2VkXG4kZ3JheTIwMDogI0I4QjhCODtcbiRncmF5MjogIzlkOWM5OTtcbiRncmF5MzogI2RiZGJkYjtcbiR5ZWxsb3cxMDA6ICNmZmZjZWY7XG4keWVsbG93MjAwOiAjZmZmNWNlO1xuJHllbGxvdzM6ICNmZGU4OTY7XG4keWVsbG93NDogI2ZjZWViNjtcbiR5ZWxsb3c1OiAjZmJmMmQ0O1xuJHllbGxvdzY6ICNGRkRFNTk7XG4kd2hpdGU4MDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuJGRhcms3NTogcmdiYSgwLCAwLCAwLCAwLjI1KTsgLy9idXR0b25zIHNoYWRvd1xuXG46cm9vdCB7XG4gIC0taW9uLWNvbG9yLXdoaXRlOiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1ibGFjazogIzAwMDAwMDtcbiAgLyoqIHByaW1hcnkgY29sb3IqKi9cbiAgLS1pb24tY29sb3ItcHJpbWFyeTogI2ZmZGU1OTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDU2LCAxMjgsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogIzExMTExMTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICNmZmVlYWU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogI2ZmZGU1OTtcblxuICAvKiogc2Vjb25kYXJ5IGZvciB0ZXh0KiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzExMTExMTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogMTcsIDE3LCAxNztcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZkZTU5O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICMwZjBmMGY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjMjkyOTI5O1xuXG4gIC8qKiB0ZXJ0aWFyeSB1c2VkIGZvciBpbnB1dCBiYWNrZ3JvdW5kIGFuZCBiYWNrZ3JvdW5kIGljb25lKiovXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjZGJkYmRiOyAvL3NhbWUgYXMgZ3JheTNcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAyMTksIDIxOSwgMjE5O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogI2MxYzFjMTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogI2RmZGZkZjtcblxuICAvKiogc3VjY2VzcyAqKi9cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzAxZGI3MjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDEsIDIxOSwgMTE0O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzAxYzE2NDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjMWFkZjgwO1xuXG4gIC8qKiB3YXJuaW5nICoqL1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZjNDA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAxOTYsIDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBhYzA4O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmNhMjI7XG5cbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZmYxMTY2O1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNTUsIDE3LCAxMDI7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZTAwZjVhO1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2ZmMjk3NjtcblxuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XG5cbiAgLyoqIG1lZGl1bSAqKi9cbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTI5NDljO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNDYsIDE0OCwgMTU2O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzgwODI4OTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICM5ZDlmYTY7XG5cbiAgLyoqIGxpZ2h0ICoqL1xuICAtLWlvbi1jb2xvci1saWdodDogcmdiYSgyNTUsIDIyMiwgODksIDAuMTkpO1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xuXG4gIC5zcGlubmVyLWJ1YmJsZXMge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cblxuICAvKiogVGFiLWJhciAqKi9cbiAgaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIHtcbiAgICAtLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cblxuICBpb24tc2VnbWVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICB9XG5cbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tY29sb3ItY2hlY2tlZDogYmxhY2s7XG4gICAgLS1pbmRpY2F0b3ItdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB9XG5cbiAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS10ZXh0LWZvbnQtc3R5bGU6ICdJQk1QbGV4U2Fucyc7XG4gIC0tdGl0bGUtZm9udC1zdHlsZTogJ0lCTVBsZXhTYW5zJztcbn1cblxuLy8gVmVyaWZpZWRcbiR3aWR0aC1zZDogMzAwcHg7IC8vZm9sZFxuJHdpZHRoLW1kOiAzODBweDsgLy9pcGhvbmUgU0VcbiR3aWR0aC1sZDogNDEycHg7IC8vaXBob25lIFhSXG4kd2lkdGgteGxkOiA3NjhweDsgLy9pcGFkIiwiQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvdmFyaWFibGVzLnNjc3MnO1xuXG5pb24tdG9vbGJhciB7XG4gIGlvbi1idXR0b24ge1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICB3aWR0aDogMi41cmVtO1xuICAgIGhlaWdodDogMi41cmVtO1xuICAgIG1pbi13aWR0aDogMi41cmVtO1xuICAgIC0tcGFkZGluZy1zdGFydDogbm9uZTtcbiAgICAtLXBhZGRpbmctZW5kOiBub25lO1xuICB9XG5cbiAgaW9uLXRpdGxlIHtcbiAgICBAaW5jbHVkZSBibGFja1RpdGxlKDFyZW0pO1xuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uc2VhcmNoIHtcbiAgQGluY2x1ZGUgZmxleChyb3csIGNlbnRlciwgY2VudGVyLCBub3dyYXAsIHRydWUpO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcblxuICBpb24tc2VhcmNoYmFyIHtcbiAgICBtYXgtd2lkdGg6IDkyJTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgYnV0dG9uKDM1JSwgMi41cmVtLCAwLjc1cmVtLCB2YXIoLS1pb24tY29sb3Itd2hpdGUpKTtcbiAgICBtYXgtd2lkdGg6IDgwcHg7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDAuNXJlbTtcbiAgICAtLXBhZGRpbmctZW5kOiAwLjVyZW07XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xuICAgICAgZm9udC1zaXplOiAwLjYyNXJlbTtcbiAgICB9XG5cbiAgICAuZmlsdGVyX2J1dHRvbiB7XG4gICAgICBAaW5jbHVkZSBmbGV4KHJvdywgY2VudGVyLCBzcGFjZS1iZXR3ZWVuLCBub3dyYXAsIHRydWUpO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgQGluY2x1ZGUgaWNvbigpO1xuICAgICAgfVxuXG4gICAgICAudGV4dC1idXR0b24ge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5jb250YWluZXIge1xuICBAaW5jbHVkZSBmbGV4KHJvdywgY2VudGVyLCBzcGFjZS1iZXR3ZWVuLCB3cmFwLCB0cnVlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDByZW0gMXJlbSAwcmVtIDFyZW07XG4gIC8qaW9uLWljb257XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICB9Ki9cbn1cblxuLnN1YnRpdGxlLWNvbnRhaW5lciB7XG4gIEBpbmNsdWRlIHRleHQoMC44NzVyZW0pO1xuXG4gIC5jYXRlZ29yeS1uYW1lIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICB9XG59XG5cbmlvbi1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZDogJHdoaXRlODA7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogY2FsYyg1MCUgLSAwLjVyZW0pO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IDAgMCAxcmVtIDA7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICR5ZWxsb3czO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICBpb24tY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG5cbiAgICAuY2FyZC1jb250YWluZXIge1xuICAgICAgQGluY2x1ZGUgZmxleChyb3csIGNlbnRlciwgc3BhY2UtYmV0d2Vlbiwgbm93cmFwLCB0cnVlKTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAudGl0bGUge1xuICAgICAgICBAaW5jbHVkZSB0ZXh0KCk7XG4gICAgICAgIEBpbmNsdWRlIHRleHQtb3ZlcmZsb3coKTtcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxcmVtKTtcbiAgICAgIH1cblxuICAgICAgLmNvbG9ycyB7XG4gICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgIC8vYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCAtNDVkZWcsIGJsdWUsIGJsdWUgNDklLCB3aGl0ZSA0OSUsIHdoaXRlIDUxJSwgcmVkIDUxJSApO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB9XG5cbiAgICAgIC5jb2xvciB7XG4gICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyouYnJhbmR7XG4gICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgICAgY29sb3I6ICMxMTExMTE7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9Ki9cbiAgfVxuXG4gIC5ib3R0b21fYnV0dG9ucyB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgLmRyZXNzaW5nX2J0biB7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICB3aWR0aDogMjUlO1xuICAgIH1cbiAgfVxufVxuXG5pb24tZmFiIHtcbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICB9XG59XG5cbmlvbi1pY29uIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbn1cblxuLnNlbGVjdGVkLWNhcmQge1xuICBib3JkZXItd2lkdGg6IDNweDtcbn0iLCJAbWl4aW4gdGl0bGUoJGZvbnQtc2l6ZTogMnJlbSxcbiAgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnLFxuICAkY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpLFxuICAkZm9udC13ZWlnaHQ6IGJvbGQpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5cblxuQG1peGluIHNpbXBsZV9idXR0b24oJHdpZHRoOiAyNSUsICRoZWlnaHQ6IDIuNXJlbSwgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSkge1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG4gIC0tY29sb3I6ICRjb2xvcjtcbn1cblxuQG1peGluIGljb24oJHdpZHRoOiAxcmVtLCAkaGVpZ2h0OiAxcmVtKSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbn1cblxuQG1peGluIHRleHQoJGZvbnQtc2l6ZTogMC44NzVyZW0sXG4gICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJyxcbiAgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSxcbiAgJGZvbnQtd2VpZ2h0OiBub3JtYWwpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gdGV4dC1vdmVyZmxvdygpIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cblxuLy92ZXJpZmllZFxuXG5AbWl4aW4gZmxleCgkZGlyZWN0aW9uOiByb3csICRhbGlnbi1pdGVtczogY2VudGVyLCAkanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0LCAkd3JhcDogbm93cmFwLCAkaW5saW5lOiBmYWxzZSwgJHBvc2l0aW9uOiByZWxhdGl2ZSkge1xuICBwb3NpdGlvbjogJHBvc2l0aW9uO1xuICBhbGlnbi1pdGVtczogJGFsaWduLWl0ZW1zO1xuXG4gIEBpZiAkaW5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgfVxuXG4gIEBlbHNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG4gIGZsZXgtd3JhcDogJHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnktY29udGVudDtcbn1cblxuQG1peGluIGJ1dHRvbigkd2lkdGg6IDI1JSwgJGhlaWdodDogMi41cmVtLCAkZm9udC1zaXplOiAwLjg3NXJlbSwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnLCAkZm9udC13ZWlnaHQ6IDYwMCkge1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbiAgbWluLWhlaWdodDogJGhlaWdodDtcbn1cblxuQG1peGluIHdoaXRlVGl0bGUoJGZvbnQtc2l6ZTogMS43NXJlbSwgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIHdoaXRlU3VidGl0bGUoJGZvbnQtc2l6ZTogMXJlbSwgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIGJsYWNrVGl0bGUoJGZvbnQtc2l6ZTogMS43NXJlbSwgJGNvbG9yOiAkZ3JheTUwMCwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJywgKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbkBtaXhpbiBibGFja1N1YnRpdGxlKCRmb250LXNpemU6IDFyZW0sICRjb2xvcjogJGdyYXk1MDAsICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gbWVkaXVtVGV4dCgkZm9udC1zaXplOiAwLjc1cmVtLCAkY29sb3I6ICRncmF5NTAwLCAkZm9udC13ZWlnaHQ6IDUwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIHJlZ3VsYXJUZXh0KCRmb250LXNpemU6IDFyZW0sICRjb2xvcjogJGdyYXk2MDAsICRmb250LXdlaWdodDogNDAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gc2VtaUJvbGRUZXh0KCRmb250LXNpemU6IDJyZW0sICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKSwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiBib2xkVGV4dCgkZm9udC1zaXplOiAxLjEyNXJlbSwgJGNvbG9yOiAkZ3JheTYwMCwgJGZvbnQtd2VpZ2h0OiA3MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59Il19 */";

/***/ }),

/***/ 61666:
/*!*************************************************************************************************!*\
  !*** ./src/shared/components/brands-select-modal/brands-select-modal.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "/** Ionic CSS Variables **/\n:root {\n  --ion-color-white: #ffffff;\n  --ion-color-black: #000000;\n  /** primary color**/\n  --ion-color-primary: #ffde59;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #111111;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #ffeeae;\n  --ion-color-primary-tint: #ffde59;\n  /** secondary for text**/\n  --ion-color-secondary: #111111;\n  --ion-color-secondary-rgb: 17, 17, 17;\n  --ion-color-secondary-contrast: #ffde59;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0f0f0f;\n  --ion-color-secondary-tint: #292929;\n  /** tertiary used for input background and background icone**/\n  --ion-color-tertiary: #dbdbdb;\n  --ion-color-tertiary-rgb: 219, 219, 219;\n  --ion-color-tertiary-contrast: #000000;\n  --ion-color-tertiary-contrast-rgb: 0, 0, 0;\n  --ion-color-tertiary-shade: #c1c1c1;\n  --ion-color-tertiary-tint: #dfdfdf;\n  /** success **/\n  --ion-color-success: #01db72;\n  --ion-color-success-rgb: 1, 219, 114;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #01c164;\n  --ion-color-success-tint: #1adf80;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #ff1166;\n  --ion-color-danger-rgb: 255, 17, 102;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e00f5a;\n  --ion-color-danger-tint: #ff2976;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: rgba(255, 222, 89, 0.19);\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** Tab-bar **/\n  --ion-toolbar-background: white;\n  --text-font-style: \"IBMPlexSans\";\n  --title-font-style: \"IBMPlexSans\";\n}\n:root .spinner-bubbles {\n  color: var(--ion-color-primary);\n}\n:root ion-tab-button.tab-selected {\n  --color-selected: var(--ion-color-primary);\n}\n:root ion-segment {\n  --background: var(--ion-color-white);\n}\n:root ion-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --color-checked: black;\n  --indicator-transition: none;\n}\n:root ion-button {\n  text-transform: none;\n}\nion-header.header-md:after {\n  background: none;\n}\nion-header ion-toolbar ion-button {\n  --box-shadow: none;\n  width: 2.5rem;\n  height: 2.5rem;\n  min-width: 2.5rem;\n  --padding-start: none;\n  --padding-end: none;\n}\nion-header ion-toolbar ion-title {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: 600;\n  padding-right: 3rem;\n  padding-left: 3rem;\n  text-align: center;\n  width: 100%;\n}\nion-list {\n  padding: 0 16px;\n}\nion-list ion-item {\n  --inner-padding-end: 0;\n}\nion-list ion-item .checkbox-color {\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  border: solid 1px var(--ion-color-secondary);\n  margin-right: 1rem;\n}\nion-list ion-item ion-label {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: normal;\n}\nion-list ion-item ion-checkbox {\n  height: 1.5rem;\n  width: 1.5rem;\n}\n.submit-button {\n  bottom: 0;\n  height: 2.5rem;\n  position: fixed;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  width: 100%;\n  margin-bottom: 0.5rem;\n}\n.submit-button ion-button {\n  height: 100%;\n  font-size: 1.125rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: bold;\n  --border-radius: 1rem;\n  width: 80%;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.fixed-searchbar {\n  position: fixed;\n  width: 100%;\n  transition: 0.2s linear;\n  z-index: 1;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiYnJhbmRzLXNlbGVjdC1tb2RhbC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL3RoZW1lL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLDBCQUFBO0FBb0JBO0VBQ0UsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHFDQUFBO0VBQ0EsdUNBQUE7RUFDQSxpREFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSw2REFBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsWUFBQTtFQUNBLDJDQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQU1BLGNBQUE7RUFtQkEsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0FDcERGO0FEMkJFO0VBQ0UsK0JBQUE7QUN6Qko7QUQ2QkU7RUFDRSwwQ0FBQTtBQzNCSjtBRDhCRTtFQUNFLG9DQUFBO0FDNUJKO0FEK0JFO0VBQ0UsOENBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FDN0JKO0FEZ0NFO0VBQ0Usb0JBQUE7QUM5Qko7QUFwRkU7RUFDRSxnQkFBQTtBQXVGSjtBQW5GSTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFxRk47QUFsRkk7RUNkRixlRGVtQjtFQ2RuQiwwQkRjeUI7RUNiekIsaUNEYXdDO0VDWnhDLGdCRFlvRTtFQUNoRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBdUZOO0FBbEZBO0VBQ0UsZUFBQTtBQXFGRjtBQW5GRTtFQUNFLHNCQUFBO0FBcUZKO0FBbkZJO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7QUFxRk47QUFsRkk7RUNmRixlRGdCa0I7RUNmbEIsMEJEZXdCO0VDZHhCLGlDRGN1QztFQ2J2QyxtQkFKYztBRHdHaEI7QUFwRkk7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQXNGTjtBQWpGQTtFQUNFLFNBQUE7RUFDQSxjQUFBO0VDWkEsZURha0Q7RUNabEQsbUJEWW1CO0VDTGpCLGFBQUE7RUFHRixtQkRFYztFQ0RkLGlCRENtQztFQ0FuQyx1QkFBQTtFRENBLFdBQUE7RUFDQSxxQkFBQTtBQXlGRjtBQXZGRTtFQUNFLFlBQUE7RUN6REYsbUJEMERpQjtFQ3pEakIsMEJEeUQyQjtFQ3hEM0IsaUNEd0QwQztFQ3ZEMUMsaUJEdURzRTtFQUNwRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUE0Rko7QUF2RkE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7QUEwRkYiLCJmaWxlIjoiYnJhbmRzLXNlbGVjdC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cblxuLy8gY29sb3JzXG4kYmxhY2syOiAjNDA0MDNmO1xuJGdyYXk2MDA6ICMxMTExMTE7IC8vdXNlZFxuJGdyYXk1MDA6ICMyOTI5Mjk7IC8vdXNlZFxuJGdyYXk0MDA6ICM1OTU5NTk7IC8vdXNlZFxuJGdyYXkzMDA6ICM4ODg4ODg7IC8vdXNlZFxuJGdyYXkyMDA6ICNCOEI4Qjg7XG4kZ3JheTI6ICM5ZDljOTk7XG4kZ3JheTM6ICNkYmRiZGI7XG4keWVsbG93MTAwOiAjZmZmY2VmO1xuJHllbGxvdzIwMDogI2ZmZjVjZTtcbiR5ZWxsb3czOiAjZmRlODk2O1xuJHllbGxvdzQ6ICNmY2VlYjY7XG4keWVsbG93NTogI2ZiZjJkNDtcbiR5ZWxsb3c2OiAjRkZERTU5O1xuJHdoaXRlODA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiRkYXJrNzU6IHJnYmEoMCwgMCwgMCwgMC4yNSk7IC8vYnV0dG9ucyBzaGFkb3dcblxuOnJvb3Qge1xuICAtLWlvbi1jb2xvci13aGl0ZTogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItYmxhY2s6ICMwMDAwMDA7XG4gIC8qKiBwcmltYXJ5IGNvbG9yKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICNmZmRlNTk7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA1NiwgMTI4LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICMxMTExMTE7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjZmZlZWFlO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICNmZmRlNTk7XG5cbiAgLyoqIHNlY29uZGFyeSBmb3IgdGV4dCoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMxMTExMTE7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDE3LCAxNywgMTc7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZGU1OTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMGYwZjBmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzI5MjkyOTtcblxuICAvKiogdGVydGlhcnkgdXNlZCBmb3IgaW5wdXQgYmFja2dyb3VuZCBhbmQgYmFja2dyb3VuZCBpY29uZSoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2RiZGJkYjsgLy9zYW1lIGFzIGdyYXkzXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMjE5LCAyMTksIDIxOTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICNjMWMxYzE7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICNkZmRmZGY7XG5cbiAgLyoqIHN1Y2Nlc3MgKiovXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMwMWRiNzI7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiAxLCAyMTksIDExNDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMwMWMxNjQ7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzFhZGY4MDtcblxuICAvKiogd2FybmluZyAqKi9cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmYzQwOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMTk2LCA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYWMwODtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZjYTIyO1xuXG4gIC8qKiBkYW5nZXIgKiovXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ZmMTE2NjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjU1LCAxNywgMTAyO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2UwMGY1YTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmZjI5NzY7XG5cbiAgLyoqIGRhcmsgKiovXG4gIC0taW9uLWNvbG9yLWRhcms6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuXG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzkyOTQ5YztcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTQ2LCAxNDgsIDE1NjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4MDgyODk7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjOWQ5ZmE2O1xuXG4gIC8qKiBsaWdodCAqKi9cbiAgLS1pb24tY29sb3ItbGlnaHQ6IHJnYmEoMjU1LCAyMjIsIDg5LCAwLjE5KTtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcblxuICAuc3Bpbm5lci1idWJibGVzIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG5cbiAgLyoqIFRhYi1iYXIgKiovXG4gIGlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCB7XG4gICAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG5cbiAgaW9uLXNlZ21lbnQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgfVxuXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IGJsYWNrO1xuICAgIC0taW5kaWNhdG9yLXRyYW5zaXRpb246IG5vbmU7XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgfVxuXG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tdGV4dC1mb250LXN0eWxlOiAnSUJNUGxleFNhbnMnO1xuICAtLXRpdGxlLWZvbnQtc3R5bGU6ICdJQk1QbGV4U2Fucyc7XG59XG5cbi8vIFZlcmlmaWVkXG4kd2lkdGgtc2Q6IDMwMHB4OyAvL2ZvbGRcbiR3aWR0aC1tZDogMzgwcHg7IC8vaXBob25lIFNFXG4kd2lkdGgtbGQ6IDQxMnB4OyAvL2lwaG9uZSBYUlxuJHdpZHRoLXhsZDogNzY4cHg7IC8vaXBhZCIsIkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL21peGlucy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzJztcblxuaW9uLWhlYWRlciB7XG4gICYuaGVhZGVyLW1kOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICB9XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgICAgd2lkdGg6IDIuNXJlbTtcbiAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgbWluLXdpZHRoOiAyLjVyZW07XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IG5vbmU7XG4gICAgICAtLXBhZGRpbmctZW5kOiBub25lO1xuICAgIH1cblxuICAgIGlvbi10aXRsZSB7XG4gICAgICBAaW5jbHVkZSB0aXRsZSgxcmVtLCAnSUJNUGxleFNhbnMnLCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSwgNjAwKTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XG4gICAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAwIDE2cHg7XG5cbiAgaW9uLWl0ZW0ge1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG5cbiAgICAuY2hlY2tib3gtY29sb3Ige1xuICAgICAgd2lkdGg6IDEuNXJlbTtcbiAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgfVxuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIEBpbmNsdWRlIHRleHQoMXJlbSwgJ0lCTVBsZXhTYW5zJywgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkpO1xuICAgIH1cblxuICAgIGlvbi1jaGVja2JveCB7XG4gICAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICAgIHdpZHRoOiAxLjVyZW07XG4gICAgfVxuICB9XG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgQGluY2x1ZGUgZmxleChyb3csIGNlbnRlciwgY2VudGVyLCBub3dyYXAsIGZhbHNlLCBmaXhlZCk7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIEBpbmNsdWRlIHRpdGxlKDEuMTI1cmVtLCAnSUJNUGxleFNhbnMnLCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSwgYm9sZCk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxufVxuXG5cbi5maXhlZC1zZWFyY2hiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjJzIGxpbmVhcjtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwO1xufSIsIkBtaXhpbiB0aXRsZSgkZm9udC1zaXplOiAycmVtLFxuICAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycsXG4gICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSksXG4gICRmb250LXdlaWdodDogYm9sZCkge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cblxuXG5AbWl4aW4gc2ltcGxlX2J1dHRvbigkd2lkdGg6IDI1JSwgJGhlaWdodDogMi41cmVtLCAkY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpKSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbiAgLS1jb2xvcjogJGNvbG9yO1xufVxuXG5AbWl4aW4gaWNvbigkd2lkdGg6IDFyZW0sICRoZWlnaHQ6IDFyZW0pIHtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xufVxuXG5AbWl4aW4gdGV4dCgkZm9udC1zaXplOiAwLjg3NXJlbSxcbiAgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnLFxuICAkY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpLFxuICAkZm9udC13ZWlnaHQ6IG5vcm1hbCkge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiB0ZXh0LW92ZXJmbG93KCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuXG4vL3ZlcmlmaWVkXG5cbkBtaXhpbiBmbGV4KCRkaXJlY3Rpb246IHJvdywgJGFsaWduLWl0ZW1zOiBjZW50ZXIsICRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQsICR3cmFwOiBub3dyYXAsICRpbmxpbmU6IGZhbHNlLCAkcG9zaXRpb246IHJlbGF0aXZlKSB7XG4gIHBvc2l0aW9uOiAkcG9zaXRpb247XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ24taXRlbXM7XG5cbiAgQGlmICRpbmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB9XG5cbiAgQGVsc2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbiAgZmxleC13cmFwOiAkd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeS1jb250ZW50O1xufVxuXG5AbWl4aW4gYnV0dG9uKCR3aWR0aDogMjUlLCAkaGVpZ2h0OiAyLjVyZW0sICRmb250LXNpemU6IDAuODc1cmVtLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycsICRmb250LXdlaWdodDogNjAwKSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xuICBtaW4taGVpZ2h0OiAkaGVpZ2h0O1xufVxuXG5AbWl4aW4gd2hpdGVUaXRsZSgkZm9udC1zaXplOiAxLjc1cmVtLCAkY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSksICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gd2hpdGVTdWJ0aXRsZSgkZm9udC1zaXplOiAxcmVtLCAkY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSksICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gYmxhY2tUaXRsZSgkZm9udC1zaXplOiAxLjc1cmVtLCAkY29sb3I6ICRncmF5NTAwLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnLCApIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xuICBtYXJnaW46IDBweDtcbn1cblxuQG1peGluIGJsYWNrU3VidGl0bGUoJGZvbnQtc2l6ZTogMXJlbSwgJGNvbG9yOiAkZ3JheTUwMCwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiBtZWRpdW1UZXh0KCRmb250LXNpemU6IDAuNzVyZW0sICRjb2xvcjogJGdyYXk1MDAsICRmb250LXdlaWdodDogNTAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gcmVndWxhclRleHQoJGZvbnQtc2l6ZTogMXJlbSwgJGNvbG9yOiAkZ3JheTYwMCwgJGZvbnQtd2VpZ2h0OiA0MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiBzZW1pQm9sZFRleHQoJGZvbnQtc2l6ZTogMnJlbSwgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIGJvbGRUZXh0KCRmb250LXNpemU6IDEuMTI1cmVtLCAkY29sb3I6ICRncmF5NjAwLCAkZm9udC13ZWlnaHQ6IDcwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn0iXX0= */";

/***/ }),

/***/ 36574:
/*!***********************************************************************************!*\
  !*** ./src/shared/components/cached-image/cached-image.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".containerNoHeight {\n  display: flex;\n  justify-content: center;\n}\n\n.container {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.styles-container {\n  display: flex;\n  justify-content: center;\n}\n\n.noHeight {\n  display: flex;\n  justify-content: center;\n}\n\n.fitContentHeight {\n  display: flex;\n  justify-content: center;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.img {\n  max-height: 100%;\n  border-radius: 0.5rem;\n  height: 100%;\n}\n\n.wardrobe-img {\n  max-height: 100%;\n  border-radius: 0.5rem !important;\n}\n\n.tab-button-img {\n  border-radius: 50%;\n}\n\n.profile-avatar {\n  border-radius: 50%;\n  height: 100%;\n  max-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhY2hlZC1pbWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7QUFBRjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLGdDQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFERiIsImZpbGUiOiJjYWNoZWQtaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyTm9IZWlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cblxuLnN0eWxlcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm5vSGVpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5maXRDb250ZW50SGVpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG5cblxuLmltZyB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ud2FyZHJvYmUtaW1nIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi50YWItYnV0dG9uLWltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJVxufVxuXG4ucHJvZmlsZS1hdmF0YXIge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn0iXX0= */";

/***/ }),

/***/ 86307:
/*!*************************************************************************************************!*\
  !*** ./src/shared/components/colors-select-modal/colors-select-modal.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "/** Ionic CSS Variables **/\n:root {\n  --ion-color-white: #ffffff;\n  --ion-color-black: #000000;\n  /** primary color**/\n  --ion-color-primary: #ffde59;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #111111;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #ffeeae;\n  --ion-color-primary-tint: #ffde59;\n  /** secondary for text**/\n  --ion-color-secondary: #111111;\n  --ion-color-secondary-rgb: 17, 17, 17;\n  --ion-color-secondary-contrast: #ffde59;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0f0f0f;\n  --ion-color-secondary-tint: #292929;\n  /** tertiary used for input background and background icone**/\n  --ion-color-tertiary: #dbdbdb;\n  --ion-color-tertiary-rgb: 219, 219, 219;\n  --ion-color-tertiary-contrast: #000000;\n  --ion-color-tertiary-contrast-rgb: 0, 0, 0;\n  --ion-color-tertiary-shade: #c1c1c1;\n  --ion-color-tertiary-tint: #dfdfdf;\n  /** success **/\n  --ion-color-success: #01db72;\n  --ion-color-success-rgb: 1, 219, 114;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #01c164;\n  --ion-color-success-tint: #1adf80;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #ff1166;\n  --ion-color-danger-rgb: 255, 17, 102;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e00f5a;\n  --ion-color-danger-tint: #ff2976;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: rgba(255, 222, 89, 0.19);\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** Tab-bar **/\n  --ion-toolbar-background: white;\n  --text-font-style: \"IBMPlexSans\";\n  --title-font-style: \"IBMPlexSans\";\n}\n:root .spinner-bubbles {\n  color: var(--ion-color-primary);\n}\n:root ion-tab-button.tab-selected {\n  --color-selected: var(--ion-color-primary);\n}\n:root ion-segment {\n  --background: var(--ion-color-white);\n}\n:root ion-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --color-checked: black;\n  --indicator-transition: none;\n}\n:root ion-button {\n  text-transform: none;\n}\nion-toolbar ion-button {\n  --box-shadow: none;\n  width: 2.5rem;\n  height: 2.5rem;\n  min-width: 2.5rem;\n  --padding-start: none;\n  --padding-end: none;\n}\nion-toolbar ion-title {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: 600;\n  padding-right: 3rem;\n  padding-left: 3rem;\n  text-align: center;\n  width: 100%;\n}\n.colors-warning {\n  font-size: 0.875rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-black);\n  font-weight: normal;\n  padding: 1rem;\n}\nion-list {\n  padding-bottom: 3.5rem;\n}\nion-list ion-item .checkbox-color {\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  border: solid 1px var(--ion-color-secondary);\n  margin-right: 1rem;\n}\nion-list ion-item ion-label {\n  margin: 0;\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: normal;\n}\nion-list ion-item ion-checkbox {\n  height: 1.5rem;\n  width: 1.5rem;\n}\n.submit-button {\n  bottom: 34px;\n  height: 2.5rem;\n  position: fixed;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  width: 100%;\n  margin-bottom: 0.5rem;\n  position: fixed;\n}\n.submit-button ion-button {\n  height: 100%;\n  font-size: 1.125rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: bold;\n  --border-radius: 1rem;\n  width: 80%;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiY29sb3JzLXNlbGVjdC1tb2RhbC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL3RoZW1lL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLDBCQUFBO0FBb0JBO0VBQ0UsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHFDQUFBO0VBQ0EsdUNBQUE7RUFDQSxpREFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSw2REFBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsWUFBQTtFQUNBLDJDQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQU1BLGNBQUE7RUFtQkEsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0FDcERGO0FEMkJFO0VBQ0UsK0JBQUE7QUN6Qko7QUQ2QkU7RUFDRSwwQ0FBQTtBQzNCSjtBRDhCRTtFQUNFLG9DQUFBO0FDNUJKO0FEK0JFO0VBQ0UsOENBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FDN0JKO0FEZ0NFO0VBQ0Usb0JBQUE7QUM5Qko7QUFwRkU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBdUZKO0FBcEZFO0VDVEEsZURVaUI7RUNUakIsMEJEU3VCO0VDUnZCLGlDRFFzQztFQ1B0QyxnQkRPa0U7RUFDaEUsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQXlGSjtBQXJGQTtFQ0tFLG1CREpjO0VDS2QsMEJETHdCO0VDTXhCLDZCRE51QztFQ092QyxtQkRQK0Q7RUFDL0QsYUFBQTtBQTJGRjtBQXhGQTtFQUNFLHNCQUFBO0FBMkZGO0FBeEZJO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7QUEwRk47QUF2Rkk7RUFDRSxTQUFBO0VDYkosZURja0I7RUNibEIsMEJEYXdCO0VDWnhCLGlDRFl1QztFQ1h2QyxtQkFKYztBRDJHaEI7QUF6Rkk7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQTJGTjtBQXRGQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VDVkEsZURXa0Q7RUNWbEQsbUJEVW1CO0VDSGpCLGFBQUE7RUFHRixtQkFBQTtFQUNBLGlCRERtQztFQ0VuQyx1QkRGMkI7RUFDM0IsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQThGRjtBQTVGRTtFQUNFLFlBQUE7RUN4REYsbUJEeURpQjtFQ3hEakIsMEJEd0QyQjtFQ3ZEM0IsaUNEdUQwQztFQ3REMUMsaUJEc0RzRTtFQUNwRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFpR0oiLCJmaWxlIjoiY29sb3JzLXNlbGVjdC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cblxuLy8gY29sb3JzXG4kYmxhY2syOiAjNDA0MDNmO1xuJGdyYXk2MDA6ICMxMTExMTE7IC8vdXNlZFxuJGdyYXk1MDA6ICMyOTI5Mjk7IC8vdXNlZFxuJGdyYXk0MDA6ICM1OTU5NTk7IC8vdXNlZFxuJGdyYXkzMDA6ICM4ODg4ODg7IC8vdXNlZFxuJGdyYXkyMDA6ICNCOEI4Qjg7XG4kZ3JheTI6ICM5ZDljOTk7XG4kZ3JheTM6ICNkYmRiZGI7XG4keWVsbG93MTAwOiAjZmZmY2VmO1xuJHllbGxvdzIwMDogI2ZmZjVjZTtcbiR5ZWxsb3czOiAjZmRlODk2O1xuJHllbGxvdzQ6ICNmY2VlYjY7XG4keWVsbG93NTogI2ZiZjJkNDtcbiR5ZWxsb3c2OiAjRkZERTU5O1xuJHdoaXRlODA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiRkYXJrNzU6IHJnYmEoMCwgMCwgMCwgMC4yNSk7IC8vYnV0dG9ucyBzaGFkb3dcblxuOnJvb3Qge1xuICAtLWlvbi1jb2xvci13aGl0ZTogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItYmxhY2s6ICMwMDAwMDA7XG4gIC8qKiBwcmltYXJ5IGNvbG9yKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICNmZmRlNTk7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA1NiwgMTI4LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICMxMTExMTE7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjZmZlZWFlO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICNmZmRlNTk7XG5cbiAgLyoqIHNlY29uZGFyeSBmb3IgdGV4dCoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMxMTExMTE7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDE3LCAxNywgMTc7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZGU1OTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMGYwZjBmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzI5MjkyOTtcblxuICAvKiogdGVydGlhcnkgdXNlZCBmb3IgaW5wdXQgYmFja2dyb3VuZCBhbmQgYmFja2dyb3VuZCBpY29uZSoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2RiZGJkYjsgLy9zYW1lIGFzIGdyYXkzXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMjE5LCAyMTksIDIxOTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICNjMWMxYzE7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICNkZmRmZGY7XG5cbiAgLyoqIHN1Y2Nlc3MgKiovXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMwMWRiNzI7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiAxLCAyMTksIDExNDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMwMWMxNjQ7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzFhZGY4MDtcblxuICAvKiogd2FybmluZyAqKi9cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmYzQwOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMTk2LCA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYWMwODtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZjYTIyO1xuXG4gIC8qKiBkYW5nZXIgKiovXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ZmMTE2NjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjU1LCAxNywgMTAyO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2UwMGY1YTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmZjI5NzY7XG5cbiAgLyoqIGRhcmsgKiovXG4gIC0taW9uLWNvbG9yLWRhcms6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuXG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzkyOTQ5YztcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTQ2LCAxNDgsIDE1NjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4MDgyODk7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjOWQ5ZmE2O1xuXG4gIC8qKiBsaWdodCAqKi9cbiAgLS1pb24tY29sb3ItbGlnaHQ6IHJnYmEoMjU1LCAyMjIsIDg5LCAwLjE5KTtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcblxuICAuc3Bpbm5lci1idWJibGVzIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG5cbiAgLyoqIFRhYi1iYXIgKiovXG4gIGlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCB7XG4gICAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG5cbiAgaW9uLXNlZ21lbnQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgfVxuXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IGJsYWNrO1xuICAgIC0taW5kaWNhdG9yLXRyYW5zaXRpb246IG5vbmU7XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgfVxuXG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tdGV4dC1mb250LXN0eWxlOiAnSUJNUGxleFNhbnMnO1xuICAtLXRpdGxlLWZvbnQtc3R5bGU6ICdJQk1QbGV4U2Fucyc7XG59XG5cbi8vIFZlcmlmaWVkXG4kd2lkdGgtc2Q6IDMwMHB4OyAvL2ZvbGRcbiR3aWR0aC1tZDogMzgwcHg7IC8vaXBob25lIFNFXG4kd2lkdGgtbGQ6IDQxMnB4OyAvL2lwaG9uZSBYUlxuJHdpZHRoLXhsZDogNzY4cHg7IC8vaXBhZCIsIkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL21peGlucy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzJztcblxuaW9uLXRvb2xiYXIge1xuICBpb24tYnV0dG9uIHtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgd2lkdGg6IDIuNXJlbTtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICBtaW4td2lkdGg6IDIuNXJlbTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IG5vbmU7XG4gICAgLS1wYWRkaW5nLWVuZDogbm9uZTtcbiAgfVxuXG4gIGlvbi10aXRsZSB7XG4gICAgQGluY2x1ZGUgdGl0bGUoMXJlbSwgJ0lCTVBsZXhTYW5zJywgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSksIDYwMCk7XG4gICAgcGFkZGluZy1yaWdodDogM3JlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5jb2xvcnMtd2FybmluZyB7XG4gIEBpbmNsdWRlIHRleHQoMC44NzVyZW0sICdJQk1QbGV4U2FucycsIHZhcigtLWlvbi1jb2xvci1ibGFjayksIG5vcm1hbCk7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbmlvbi1saXN0IHtcbiAgcGFkZGluZy1ib3R0b206IDMuNXJlbTtcblxuICBpb24taXRlbSB7XG4gICAgLmNoZWNrYm94LWNvbG9yIHtcbiAgICAgIHdpZHRoOiAxLjVyZW07XG4gICAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIH1cblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBAaW5jbHVkZSB0ZXh0KDFyZW0sICdJQk1QbGV4U2FucycsIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpKTtcbiAgICB9XG5cbiAgICBpb24tY2hlY2tib3gge1xuICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICB3aWR0aDogMS41cmVtO1xuICAgIH1cbiAgfVxufVxuXG4uc3VibWl0LWJ1dHRvbiB7XG4gIGJvdHRvbTogMzRweDtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIEBpbmNsdWRlIGZsZXgocm93LCBjZW50ZXIsIGNlbnRlciwgbm93cmFwLCBmYWxzZSwgZml4ZWQpO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBwb3NpdGlvbjogZml4ZWQ7XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIEBpbmNsdWRlIHRpdGxlKDEuMTI1cmVtLCAnSUJNUGxleFNhbnMnLCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSwgYm9sZCk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxufSIsIkBtaXhpbiB0aXRsZSgkZm9udC1zaXplOiAycmVtLFxuICAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycsXG4gICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSksXG4gICRmb250LXdlaWdodDogYm9sZCkge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cblxuXG5AbWl4aW4gc2ltcGxlX2J1dHRvbigkd2lkdGg6IDI1JSwgJGhlaWdodDogMi41cmVtLCAkY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpKSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbiAgLS1jb2xvcjogJGNvbG9yO1xufVxuXG5AbWl4aW4gaWNvbigkd2lkdGg6IDFyZW0sICRoZWlnaHQ6IDFyZW0pIHtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xufVxuXG5AbWl4aW4gdGV4dCgkZm9udC1zaXplOiAwLjg3NXJlbSxcbiAgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnLFxuICAkY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpLFxuICAkZm9udC13ZWlnaHQ6IG5vcm1hbCkge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiB0ZXh0LW92ZXJmbG93KCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuXG4vL3ZlcmlmaWVkXG5cbkBtaXhpbiBmbGV4KCRkaXJlY3Rpb246IHJvdywgJGFsaWduLWl0ZW1zOiBjZW50ZXIsICRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQsICR3cmFwOiBub3dyYXAsICRpbmxpbmU6IGZhbHNlLCAkcG9zaXRpb246IHJlbGF0aXZlKSB7XG4gIHBvc2l0aW9uOiAkcG9zaXRpb247XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ24taXRlbXM7XG5cbiAgQGlmICRpbmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB9XG5cbiAgQGVsc2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbiAgZmxleC13cmFwOiAkd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeS1jb250ZW50O1xufVxuXG5AbWl4aW4gYnV0dG9uKCR3aWR0aDogMjUlLCAkaGVpZ2h0OiAyLjVyZW0sICRmb250LXNpemU6IDAuODc1cmVtLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycsICRmb250LXdlaWdodDogNjAwKSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xuICBtaW4taGVpZ2h0OiAkaGVpZ2h0O1xufVxuXG5AbWl4aW4gd2hpdGVUaXRsZSgkZm9udC1zaXplOiAxLjc1cmVtLCAkY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSksICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gd2hpdGVTdWJ0aXRsZSgkZm9udC1zaXplOiAxcmVtLCAkY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSksICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gYmxhY2tUaXRsZSgkZm9udC1zaXplOiAxLjc1cmVtLCAkY29sb3I6ICRncmF5NTAwLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnLCApIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xuICBtYXJnaW46IDBweDtcbn1cblxuQG1peGluIGJsYWNrU3VidGl0bGUoJGZvbnQtc2l6ZTogMXJlbSwgJGNvbG9yOiAkZ3JheTUwMCwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiBtZWRpdW1UZXh0KCRmb250LXNpemU6IDAuNzVyZW0sICRjb2xvcjogJGdyYXk1MDAsICRmb250LXdlaWdodDogNTAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gcmVndWxhclRleHQoJGZvbnQtc2l6ZTogMXJlbSwgJGNvbG9yOiAkZ3JheTYwMCwgJGZvbnQtd2VpZ2h0OiA0MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiBzZW1pQm9sZFRleHQoJGZvbnQtc2l6ZTogMnJlbSwgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIGJvbGRUZXh0KCRmb250LXNpemU6IDEuMTI1cmVtLCAkY29sb3I6ICRncmF5NjAwLCAkZm9udC13ZWlnaHQ6IDcwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn0iXX0= */";

/***/ }),

/***/ 93173:
/*!***********************************************************************************************!*\
  !*** ./src/shared/components/edit-profile-modal/edit-profile-modal.component.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "/** Ionic CSS Variables **/\n:root {\n  --ion-color-white: #ffffff;\n  --ion-color-black: #000000;\n  /** primary color**/\n  --ion-color-primary: #ffde59;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #111111;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #ffeeae;\n  --ion-color-primary-tint: #ffde59;\n  /** secondary for text**/\n  --ion-color-secondary: #111111;\n  --ion-color-secondary-rgb: 17, 17, 17;\n  --ion-color-secondary-contrast: #ffde59;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0f0f0f;\n  --ion-color-secondary-tint: #292929;\n  /** tertiary used for input background and background icone**/\n  --ion-color-tertiary: #dbdbdb;\n  --ion-color-tertiary-rgb: 219, 219, 219;\n  --ion-color-tertiary-contrast: #000000;\n  --ion-color-tertiary-contrast-rgb: 0, 0, 0;\n  --ion-color-tertiary-shade: #c1c1c1;\n  --ion-color-tertiary-tint: #dfdfdf;\n  /** success **/\n  --ion-color-success: #01db72;\n  --ion-color-success-rgb: 1, 219, 114;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #01c164;\n  --ion-color-success-tint: #1adf80;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #ff1166;\n  --ion-color-danger-rgb: 255, 17, 102;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e00f5a;\n  --ion-color-danger-tint: #ff2976;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: rgba(255, 222, 89, 0.19);\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** Tab-bar **/\n  --ion-toolbar-background: white;\n  --text-font-style: \"IBMPlexSans\";\n  --title-font-style: \"IBMPlexSans\";\n}\n:root .spinner-bubbles {\n  color: var(--ion-color-primary);\n}\n:root ion-tab-button.tab-selected {\n  --color-selected: var(--ion-color-primary);\n}\n:root ion-segment {\n  --background: var(--ion-color-white);\n}\n:root ion-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --color-checked: black;\n  --indicator-transition: none;\n}\n:root ion-button {\n  text-transform: none;\n}\nion-header {\n  min-height: 3rem;\n  height: 3rem;\n}\nion-header ion-toolbar {\n  height: 100%;\n  padding: 0rem 1rem 0rem 1rem;\n  display: inline-flex;\n  align-items: center;\n}\nion-header ion-toolbar ion-button {\n  --box-shadow: none;\n  width: -moz-fit-content;\n  width: fit-content;\n  --padding-start: none;\n  --padding-end: none;\n  font-size: 14px;\n  font-family: \"IBMPlexSansMedium\";\n  z-index: 1;\n}\nion-header ion-toolbar .cancel-button {\n  font-size: 0.875rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: 400;\n}\nion-header ion-toolbar .save-button {\n  font-size: 0.875rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-danger);\n  font-weight: 500;\n}\nion-header ion-toolbar .save-button-invalid {\n  color: #9d9c99;\n  opacity: 1;\n}\nion-header ion-toolbar ion-title {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-black);\n  font-weight: 600;\n}\nion-header::after {\n  background-image: none;\n  height: 0;\n}\nion-content form {\n  padding: 1rem 1rem 0 1rem;\n}\nion-content form .form-item ion-item {\n  --padding-start: 0;\n  width: 100%;\n}\nion-content form .form-item ion-item ion-input {\n  --placeholder-color: $gray300;\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: #111111;\n  font-weight: 400;\n}\nion-content form .form-item ion-item ion-input .at-icon {\n  margin: 0px 0px 0px 0;\n  height: 1rem;\n  width: 1rem;\n  align-self: center;\n  padding: 8px 0 0px 0;\n}\nion-content form .form-item ion-item ion-input input {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  align-self: center;\n}\nion-content form .form-item ion-item .gender-label {\n  display: inline-flex;\n  align-items: center;\n  margin-bottom: 4px;\n}\nion-content form .form-item ion-item .gender-label ion-icon {\n  margin: 0px 0px 0px 4px;\n  height: 1rem;\n  width: 1rem;\n  align-self: center;\n}\nion-content form .form-item ion-item .radio-group {\n  display: inline-flex;\n  width: 100%;\n  justify-content: space-between;\n}\nion-content form .form-item ion-item .radio-group ion-item {\n  height: 35px;\n  display: inline-flex;\n  align-items: center;\n}\nion-content form .form-item ion-item .radio-group ion-item ion-label {\n  margin: 0;\n  font-size: 0.875rem;\n  font-family: \"IBMPlexSans\";\n  color: #111111;\n  font-weight: 400;\n}\nion-content form .form-item ion-item .radio-group ion-item ion-radio {\n  margin: 0 8px 0 0;\n}\nion-content form .form-item #sexe-tooltip {\n  font-size: 0.875rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: normal;\n  visibility: hidden;\n  text-align: justify;\n  border-radius: 1rem;\n  padding: 0.5rem;\n  position: relative;\n  background: #dbdbdb;\n}\n@media screen and (max-width: 370px) {\n  ion-content form .form-item #sexe-tooltip {\n    font-size: 0.75rem;\n    font-family: \"IBMPlexSans\";\n    color: var(--ion-color-secondary);\n    font-weight: normal;\n  }\n}\nion-content form .form-item .input-group {\n  display: inline-flex;\n  height: 40px;\n  align-items: center;\n  width: 100%;\n}\nion-content form .form-item .input-group ion-button {\n  --background: #dbdbdb;\n  --box-shadow: none;\n  height: 40px;\n  margin: 0px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n}\nion-content form .form-item .input-group ion-button ion-icon {\n  height: 1rem;\n  width: 1rem;\n}\nion-content form .form-item .spinner {\n  width: 40px;\n  position: relative;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiZWRpdC1wcm9maWxlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsMEJBQUE7QUFvQkE7RUFDRSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLDZEQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsMENBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBTUEsY0FBQTtFQW1CQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7QUNwREY7QUQyQkU7RUFDRSwrQkFBQTtBQ3pCSjtBRDZCRTtFQUNFLDBDQUFBO0FDM0JKO0FEOEJFO0VBQ0Usb0NBQUE7QUM1Qko7QUQrQkU7RUFDRSw4Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUM3Qko7QURnQ0U7RUFDRSxvQkFBQTtBQzlCSjtBQXJGQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQXdGRjtBQXRGRTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUF3Rko7QUF0Rkk7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtBQXdGTjtBQXJGSTtFQ2tGRixtQkRqRnlCO0VDa0Z6QiwwQkFGc0Y7RUFHdEYsaUNEbkZtQztFQ29GbkMsZ0JBSm1FO0FEVXJFO0FBdkZJO0VDdUVGLG1CRHRFd0I7RUN1RXhCLDBCQUZ3RjtFQUd4Riw4QkR4RWtDO0VDeUVsQyxnQkFKcUU7QUR1QnZFO0FBekZJO0VBQ0UsY0RwQkU7RUNxQkYsVUFBQTtBQTJGTjtBQXhGSTtFQ3VERixlRHREMkI7RUN1RDNCLDBCQUZ3RjtFQUd4Riw2QkR4RGlDO0VDeURqQyxnQkFKcUU7QUR3Q3ZFO0FBeEZBO0VBQ0Usc0JBQUE7RUFDQSxTQUFBO0FBMkZGO0FBdkZFO0VBQ0UseUJBQUE7QUEwRko7QUF2Rk07RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUF5RlI7QUF2RlE7RUFDRSw2QkFBQTtFQ2dEUixlQUQ2QjtFQUU3QiwwQkFGc0Y7RUFHdEYsY0ZwR1E7RUVxR1IsZ0JBSm1FO0FEOENyRTtBQTFGVTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBNEZaO0FBekZVO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBMkZaO0FBdkZRO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBeUZWO0FBdkZVO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBeUZaO0FBckZRO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUF1RlY7QUFyRlU7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQXVGWjtBQXJGWTtFQUNFLFNBQUE7RUNNWixtQkRMaUM7RUNNakMsMEJBRnNGO0VBR3RGLGNGcEdRO0VFcUdSLGdCQUptRTtBRHNGckU7QUF2Rlk7RUFDRSxpQkFBQTtBQXlGZDtBQW5GTTtFQ25GSixtQkRvRm9CO0VDbkZwQiwwQkFKYztFQUtkLGlDQUpRO0VBS1IsbUJBSmM7RURzRlIsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJEeEdBO0FDZ01SO0FBdEZRO0VBVEY7SUNuRkosa0JENkZzQjtJQzVGdEIsMEJBSmM7SUFLZCxpQ0FKUTtJQUtSLG1CQUpjO0VEMExkO0FBQ0Y7QUF6Rk07RUFDRSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUEyRlI7QUF6RlE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBMkZWO0FBekZVO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUEyRlo7QUFwRk07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBc0ZSIiwiZmlsZSI6ImVkaXQtcHJvZmlsZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cblxuLy8gY29sb3JzXG4kYmxhY2syOiAjNDA0MDNmO1xuJGdyYXk2MDA6ICMxMTExMTE7IC8vdXNlZFxuJGdyYXk1MDA6ICMyOTI5Mjk7IC8vdXNlZFxuJGdyYXk0MDA6ICM1OTU5NTk7IC8vdXNlZFxuJGdyYXkzMDA6ICM4ODg4ODg7IC8vdXNlZFxuJGdyYXkyMDA6ICNCOEI4Qjg7XG4kZ3JheTI6ICM5ZDljOTk7XG4kZ3JheTM6ICNkYmRiZGI7XG4keWVsbG93MTAwOiAjZmZmY2VmO1xuJHllbGxvdzIwMDogI2ZmZjVjZTtcbiR5ZWxsb3czOiAjZmRlODk2O1xuJHllbGxvdzQ6ICNmY2VlYjY7XG4keWVsbG93NTogI2ZiZjJkNDtcbiR5ZWxsb3c2OiAjRkZERTU5O1xuJHdoaXRlODA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiRkYXJrNzU6IHJnYmEoMCwgMCwgMCwgMC4yNSk7IC8vYnV0dG9ucyBzaGFkb3dcblxuOnJvb3Qge1xuICAtLWlvbi1jb2xvci13aGl0ZTogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItYmxhY2s6ICMwMDAwMDA7XG4gIC8qKiBwcmltYXJ5IGNvbG9yKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICNmZmRlNTk7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA1NiwgMTI4LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICMxMTExMTE7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjZmZlZWFlO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICNmZmRlNTk7XG5cbiAgLyoqIHNlY29uZGFyeSBmb3IgdGV4dCoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMxMTExMTE7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDE3LCAxNywgMTc7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZGU1OTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMGYwZjBmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzI5MjkyOTtcblxuICAvKiogdGVydGlhcnkgdXNlZCBmb3IgaW5wdXQgYmFja2dyb3VuZCBhbmQgYmFja2dyb3VuZCBpY29uZSoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2RiZGJkYjsgLy9zYW1lIGFzIGdyYXkzXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMjE5LCAyMTksIDIxOTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICNjMWMxYzE7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICNkZmRmZGY7XG5cbiAgLyoqIHN1Y2Nlc3MgKiovXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMwMWRiNzI7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiAxLCAyMTksIDExNDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMwMWMxNjQ7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzFhZGY4MDtcblxuICAvKiogd2FybmluZyAqKi9cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmYzQwOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMTk2LCA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYWMwODtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZjYTIyO1xuXG4gIC8qKiBkYW5nZXIgKiovXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ZmMTE2NjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjU1LCAxNywgMTAyO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2UwMGY1YTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmZjI5NzY7XG5cbiAgLyoqIGRhcmsgKiovXG4gIC0taW9uLWNvbG9yLWRhcms6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuXG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzkyOTQ5YztcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTQ2LCAxNDgsIDE1NjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4MDgyODk7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjOWQ5ZmE2O1xuXG4gIC8qKiBsaWdodCAqKi9cbiAgLS1pb24tY29sb3ItbGlnaHQ6IHJnYmEoMjU1LCAyMjIsIDg5LCAwLjE5KTtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcblxuICAuc3Bpbm5lci1idWJibGVzIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG5cbiAgLyoqIFRhYi1iYXIgKiovXG4gIGlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCB7XG4gICAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG5cbiAgaW9uLXNlZ21lbnQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgfVxuXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IGJsYWNrO1xuICAgIC0taW5kaWNhdG9yLXRyYW5zaXRpb246IG5vbmU7XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgfVxuXG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tdGV4dC1mb250LXN0eWxlOiAnSUJNUGxleFNhbnMnO1xuICAtLXRpdGxlLWZvbnQtc3R5bGU6ICdJQk1QbGV4U2Fucyc7XG59XG5cbi8vIFZlcmlmaWVkXG4kd2lkdGgtc2Q6IDMwMHB4OyAvL2ZvbGRcbiR3aWR0aC1tZDogMzgwcHg7IC8vaXBob25lIFNFXG4kd2lkdGgtbGQ6IDQxMnB4OyAvL2lwaG9uZSBYUlxuJHdpZHRoLXhsZDogNzY4cHg7IC8vaXBhZCIsIkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL21peGlucy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzJztcblxuaW9uLWhlYWRlciB7XG4gIG1pbi1oZWlnaHQ6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcblxuICBpb24tdG9vbGJhciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDByZW0gMXJlbSAwcmVtIDFyZW07XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiBub25lO1xuICAgICAgLS1wYWRkaW5nLWVuZDogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnNNZWRpdW0nO1xuICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICAuY2FuY2VsLWJ1dHRvbiB7XG4gICAgICBAaW5jbHVkZSByZWd1bGFyVGV4dCgwLjg3NXJlbSwgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkpO1xuICAgIH1cblxuICAgIC5zYXZlLWJ1dHRvbiB7XG4gICAgICBAaW5jbHVkZSBtZWRpdW1UZXh0KDAuODc1cmVtLCB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSk7XG4gICAgfVxuXG4gICAgLnNhdmUtYnV0dG9uLWludmFsaWQge1xuICAgICAgY29sb3I6ICRncmF5MjtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgaW9uLXRpdGxlIHtcbiAgICAgIEBpbmNsdWRlIGJsYWNrU3VidGl0bGUoMXJlbSwgdmFyKC0taW9uLWNvbG9yLWJsYWNrKSk7XG4gICAgfVxuICB9XG59XG5cbmlvbi1oZWFkZXI6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgaGVpZ2h0OiAwO1xufVxuXG5pb24tY29udGVudCB7XG4gIGZvcm0ge1xuICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAwIDFyZW07XG5cbiAgICAuZm9ybS1pdGVtIHtcbiAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICBpb24taW5wdXQge1xuICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICRncmF5MzAwO1xuICAgICAgICAgIEBpbmNsdWRlIHJlZ3VsYXJUZXh0KCk7XG5cbiAgICAgICAgICAuYXQtaWNvbiB7XG4gICAgICAgICAgICBtYXJnaW46IDBweCAwcHggMHB4IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICB3aWR0aDogMXJlbTtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAwIDBweCAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5nZW5kZXItbGFiZWwge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuXG4gICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCA0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICB3aWR0aDogMXJlbTtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmFkaW8tZ3JvdXAge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICBAaW5jbHVkZSByZWd1bGFyVGV4dCgwLjg3NXJlbSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlvbi1yYWRpbyB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCA4cHggMCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAjc2V4ZS10b29sdGlwIHtcbiAgICAgICAgQGluY2x1ZGUgdGV4dCgwLjg3NXJlbSk7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJhY2tncm91bmQ6ICRncmF5MztcblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzBweCkge1xuICAgICAgICAgIEBpbmNsdWRlIHRleHQoMC43NXJlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmlucHV0LWdyb3VwIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZGJkYmRiOyAvL2dyYXkzXG4gICAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gICAgICAgICAgLS1wYWRkaW5nLWVuZDogMTJweDtcblxuICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG5cblxuICAgICAgLnNwaW5uZXIge1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiQG1peGluIHRpdGxlKCRmb250LXNpemU6IDJyZW0sXG4gICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJyxcbiAgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSxcbiAgJGZvbnQtd2VpZ2h0OiBib2xkKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuXG5cbkBtaXhpbiBzaW1wbGVfYnV0dG9uKCR3aWR0aDogMjUlLCAkaGVpZ2h0OiAyLjVyZW0sICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkpIHtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xuICAtLWNvbG9yOiAkY29sb3I7XG59XG5cbkBtaXhpbiBpY29uKCR3aWR0aDogMXJlbSwgJGhlaWdodDogMXJlbSkge1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG59XG5cbkBtaXhpbiB0ZXh0KCRmb250LXNpemU6IDAuODc1cmVtLFxuICAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycsXG4gICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSksXG4gICRmb250LXdlaWdodDogbm9ybWFsKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIHRleHQtb3ZlcmZsb3coKSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5cbi8vdmVyaWZpZWRcblxuQG1peGluIGZsZXgoJGRpcmVjdGlvbjogcm93LCAkYWxpZ24taXRlbXM6IGNlbnRlciwgJGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCwgJHdyYXA6IG5vd3JhcCwgJGlubGluZTogZmFsc2UsICRwb3NpdGlvbjogcmVsYXRpdmUpIHtcbiAgcG9zaXRpb246ICRwb3NpdGlvbjtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbi1pdGVtcztcblxuICBAaWYgJGlubGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIH1cblxuICBAZWxzZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xuICBmbGV4LXdyYXA6ICR3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5LWNvbnRlbnQ7XG59XG5cbkBtaXhpbiBidXR0b24oJHdpZHRoOiAyNSUsICRoZWlnaHQ6IDIuNXJlbSwgJGZvbnQtc2l6ZTogMC44NzVyZW0sICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJywgJGZvbnQtd2VpZ2h0OiA2MDApIHtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG4gIG1pbi1oZWlnaHQ6ICRoZWlnaHQ7XG59XG5cbkBtaXhpbiB3aGl0ZVRpdGxlKCRmb250LXNpemU6IDEuNzVyZW0sICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKSwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiB3aGl0ZVN1YnRpdGxlKCRmb250LXNpemU6IDFyZW0sICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKSwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiBibGFja1RpdGxlKCRmb250LXNpemU6IDEuNzVyZW0sICRjb2xvcjogJGdyYXk1MDAsICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycsICkge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5AbWl4aW4gYmxhY2tTdWJ0aXRsZSgkZm9udC1zaXplOiAxcmVtLCAkY29sb3I6ICRncmF5NTAwLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIG1lZGl1bVRleHQoJGZvbnQtc2l6ZTogMC43NXJlbSwgJGNvbG9yOiAkZ3JheTUwMCwgJGZvbnQtd2VpZ2h0OiA1MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiByZWd1bGFyVGV4dCgkZm9udC1zaXplOiAxcmVtLCAkY29sb3I6ICRncmF5NjAwLCAkZm9udC13ZWlnaHQ6IDQwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIHNlbWlCb2xkVGV4dCgkZm9udC1zaXplOiAycmVtLCAkY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSksICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gYm9sZFRleHQoJGZvbnQtc2l6ZTogMS4xMjVyZW0sICRjb2xvcjogJGdyYXk2MDAsICRmb250LXdlaWdodDogNzAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufSJdfQ== */";

/***/ }),

/***/ 91251:
/*!********************************************************************************!*\
  !*** ./src/shared/components/modal-content/modal-content.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "/** Ionic CSS Variables **/\n:root {\n  --ion-color-white: #ffffff;\n  --ion-color-black: #000000;\n  /** primary color**/\n  --ion-color-primary: #ffde59;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #111111;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #ffeeae;\n  --ion-color-primary-tint: #ffde59;\n  /** secondary for text**/\n  --ion-color-secondary: #111111;\n  --ion-color-secondary-rgb: 17, 17, 17;\n  --ion-color-secondary-contrast: #ffde59;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0f0f0f;\n  --ion-color-secondary-tint: #292929;\n  /** tertiary used for input background and background icone**/\n  --ion-color-tertiary: #dbdbdb;\n  --ion-color-tertiary-rgb: 219, 219, 219;\n  --ion-color-tertiary-contrast: #000000;\n  --ion-color-tertiary-contrast-rgb: 0, 0, 0;\n  --ion-color-tertiary-shade: #c1c1c1;\n  --ion-color-tertiary-tint: #dfdfdf;\n  /** success **/\n  --ion-color-success: #01db72;\n  --ion-color-success-rgb: 1, 219, 114;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #01c164;\n  --ion-color-success-tint: #1adf80;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #ff1166;\n  --ion-color-danger-rgb: 255, 17, 102;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e00f5a;\n  --ion-color-danger-tint: #ff2976;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: rgba(255, 222, 89, 0.19);\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** Tab-bar **/\n  --ion-toolbar-background: white;\n  --text-font-style: \"IBMPlexSans\";\n  --title-font-style: \"IBMPlexSans\";\n}\n:root .spinner-bubbles {\n  color: var(--ion-color-primary);\n}\n:root ion-tab-button.tab-selected {\n  --color-selected: var(--ion-color-primary);\n}\n:root ion-segment {\n  --background: var(--ion-color-white);\n}\n:root ion-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --color-checked: black;\n  --indicator-transition: none;\n}\n:root ion-button {\n  text-transform: none;\n}\nion-toolbar ion-button {\n  --box-shadow: none;\n  width: 2.5rem;\n  height: 2.5rem;\n  min-width: 2.5rem;\n  --padding-start: none;\n  --padding-end: none;\n}\nion-toolbar ion-title {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: 600;\n  padding-right: 3rem;\n  padding-left: 3rem;\n  text-align: center;\n  width: 100%;\n}\nion-list {\n  padding: 0 16px;\n}\nion-list ion-item {\n  height: 48px;\n}\nion-list ion-item ion-label {\n  margin: 0px;\n  font-family: \"IBMPlexSans\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwibW9kYWwtY29udGVudC5wYWdlLnNjc3MiLCIuLi8uLi8uLi90aGVtZS9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSwwQkFBQTtBQW9CQTtFQUNFLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsNkRBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFNQSxjQUFBO0VBbUJBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQ0FBQTtBQ3BERjtBRDJCRTtFQUNFLCtCQUFBO0FDekJKO0FENkJFO0VBQ0UsMENBQUE7QUMzQko7QUQ4QkU7RUFDRSxvQ0FBQTtBQzVCSjtBRCtCRTtFQUNFLDhDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQzdCSjtBRGdDRTtFQUNFLG9CQUFBO0FDOUJKO0FBcEZFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQXVGSjtBQXBGRTtFQ1RBLGVEVWlCO0VDVGpCLDBCRFN1QjtFQ1J2QixpQ0RRc0M7RUNQdEMsZ0JET2tFO0VBQ2hFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUF5Rko7QUFyRkE7RUFDRSxlQUFBO0FBd0ZGO0FBdEZFO0VBQ0UsWUFBQTtBQXdGSjtBQXRGSTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtBQXdGTiIsImZpbGUiOiJtb2RhbC1jb250ZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cblxuLy8gY29sb3JzXG4kYmxhY2syOiAjNDA0MDNmO1xuJGdyYXk2MDA6ICMxMTExMTE7IC8vdXNlZFxuJGdyYXk1MDA6ICMyOTI5Mjk7IC8vdXNlZFxuJGdyYXk0MDA6ICM1OTU5NTk7IC8vdXNlZFxuJGdyYXkzMDA6ICM4ODg4ODg7IC8vdXNlZFxuJGdyYXkyMDA6ICNCOEI4Qjg7XG4kZ3JheTI6ICM5ZDljOTk7XG4kZ3JheTM6ICNkYmRiZGI7XG4keWVsbG93MTAwOiAjZmZmY2VmO1xuJHllbGxvdzIwMDogI2ZmZjVjZTtcbiR5ZWxsb3czOiAjZmRlODk2O1xuJHllbGxvdzQ6ICNmY2VlYjY7XG4keWVsbG93NTogI2ZiZjJkNDtcbiR5ZWxsb3c2OiAjRkZERTU5O1xuJHdoaXRlODA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiRkYXJrNzU6IHJnYmEoMCwgMCwgMCwgMC4yNSk7IC8vYnV0dG9ucyBzaGFkb3dcblxuOnJvb3Qge1xuICAtLWlvbi1jb2xvci13aGl0ZTogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItYmxhY2s6ICMwMDAwMDA7XG4gIC8qKiBwcmltYXJ5IGNvbG9yKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICNmZmRlNTk7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA1NiwgMTI4LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICMxMTExMTE7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjZmZlZWFlO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICNmZmRlNTk7XG5cbiAgLyoqIHNlY29uZGFyeSBmb3IgdGV4dCoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMxMTExMTE7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDE3LCAxNywgMTc7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZGU1OTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMGYwZjBmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzI5MjkyOTtcblxuICAvKiogdGVydGlhcnkgdXNlZCBmb3IgaW5wdXQgYmFja2dyb3VuZCBhbmQgYmFja2dyb3VuZCBpY29uZSoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2RiZGJkYjsgLy9zYW1lIGFzIGdyYXkzXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMjE5LCAyMTksIDIxOTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICNjMWMxYzE7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICNkZmRmZGY7XG5cbiAgLyoqIHN1Y2Nlc3MgKiovXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMwMWRiNzI7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiAxLCAyMTksIDExNDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMwMWMxNjQ7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzFhZGY4MDtcblxuICAvKiogd2FybmluZyAqKi9cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmYzQwOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMTk2LCA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYWMwODtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZjYTIyO1xuXG4gIC8qKiBkYW5nZXIgKiovXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ZmMTE2NjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjU1LCAxNywgMTAyO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2UwMGY1YTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmZjI5NzY7XG5cbiAgLyoqIGRhcmsgKiovXG4gIC0taW9uLWNvbG9yLWRhcms6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuXG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzkyOTQ5YztcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTQ2LCAxNDgsIDE1NjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4MDgyODk7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjOWQ5ZmE2O1xuXG4gIC8qKiBsaWdodCAqKi9cbiAgLS1pb24tY29sb3ItbGlnaHQ6IHJnYmEoMjU1LCAyMjIsIDg5LCAwLjE5KTtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcblxuICAuc3Bpbm5lci1idWJibGVzIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG5cbiAgLyoqIFRhYi1iYXIgKiovXG4gIGlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCB7XG4gICAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG5cbiAgaW9uLXNlZ21lbnQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgfVxuXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IGJsYWNrO1xuICAgIC0taW5kaWNhdG9yLXRyYW5zaXRpb246IG5vbmU7XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgfVxuXG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tdGV4dC1mb250LXN0eWxlOiAnSUJNUGxleFNhbnMnO1xuICAtLXRpdGxlLWZvbnQtc3R5bGU6ICdJQk1QbGV4U2Fucyc7XG59XG5cbi8vIFZlcmlmaWVkXG4kd2lkdGgtc2Q6IDMwMHB4OyAvL2ZvbGRcbiR3aWR0aC1tZDogMzgwcHg7IC8vaXBob25lIFNFXG4kd2lkdGgtbGQ6IDQxMnB4OyAvL2lwaG9uZSBYUlxuJHdpZHRoLXhsZDogNzY4cHg7IC8vaXBhZCIsIkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL21peGlucy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzJztcblxuaW9uLXRvb2xiYXIge1xuICBpb24tYnV0dG9uIHtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgd2lkdGg6IDIuNXJlbTtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICBtaW4td2lkdGg6IDIuNXJlbTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IG5vbmU7XG4gICAgLS1wYWRkaW5nLWVuZDogbm9uZTtcbiAgfVxuXG4gIGlvbi10aXRsZSB7XG4gICAgQGluY2x1ZGUgdGl0bGUoMXJlbSwgJ0lCTVBsZXhTYW5zJywgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSksIDYwMCk7XG4gICAgcGFkZGluZy1yaWdodDogM3JlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbmlvbi1saXN0IHtcbiAgcGFkZGluZzogMCAxNnB4O1xuXG4gIGlvbi1pdGVtIHtcbiAgICBoZWlnaHQ6IDQ4cHg7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJztcbiAgICB9XG4gIH1cbn0iLCJAbWl4aW4gdGl0bGUoJGZvbnQtc2l6ZTogMnJlbSxcbiAgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnLFxuICAkY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpLFxuICAkZm9udC13ZWlnaHQ6IGJvbGQpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5cblxuQG1peGluIHNpbXBsZV9idXR0b24oJHdpZHRoOiAyNSUsICRoZWlnaHQ6IDIuNXJlbSwgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSkge1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG4gIC0tY29sb3I6ICRjb2xvcjtcbn1cblxuQG1peGluIGljb24oJHdpZHRoOiAxcmVtLCAkaGVpZ2h0OiAxcmVtKSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbn1cblxuQG1peGluIHRleHQoJGZvbnQtc2l6ZTogMC44NzVyZW0sXG4gICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJyxcbiAgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSxcbiAgJGZvbnQtd2VpZ2h0OiBub3JtYWwpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gdGV4dC1vdmVyZmxvdygpIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cblxuLy92ZXJpZmllZFxuXG5AbWl4aW4gZmxleCgkZGlyZWN0aW9uOiByb3csICRhbGlnbi1pdGVtczogY2VudGVyLCAkanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0LCAkd3JhcDogbm93cmFwLCAkaW5saW5lOiBmYWxzZSwgJHBvc2l0aW9uOiByZWxhdGl2ZSkge1xuICBwb3NpdGlvbjogJHBvc2l0aW9uO1xuICBhbGlnbi1pdGVtczogJGFsaWduLWl0ZW1zO1xuXG4gIEBpZiAkaW5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgfVxuXG4gIEBlbHNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG4gIGZsZXgtd3JhcDogJHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnktY29udGVudDtcbn1cblxuQG1peGluIGJ1dHRvbigkd2lkdGg6IDI1JSwgJGhlaWdodDogMi41cmVtLCAkZm9udC1zaXplOiAwLjg3NXJlbSwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnLCAkZm9udC13ZWlnaHQ6IDYwMCkge1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbiAgbWluLWhlaWdodDogJGhlaWdodDtcbn1cblxuQG1peGluIHdoaXRlVGl0bGUoJGZvbnQtc2l6ZTogMS43NXJlbSwgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIHdoaXRlU3VidGl0bGUoJGZvbnQtc2l6ZTogMXJlbSwgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIGJsYWNrVGl0bGUoJGZvbnQtc2l6ZTogMS43NXJlbSwgJGNvbG9yOiAkZ3JheTUwMCwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJywgKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbkBtaXhpbiBibGFja1N1YnRpdGxlKCRmb250LXNpemU6IDFyZW0sICRjb2xvcjogJGdyYXk1MDAsICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gbWVkaXVtVGV4dCgkZm9udC1zaXplOiAwLjc1cmVtLCAkY29sb3I6ICRncmF5NTAwLCAkZm9udC13ZWlnaHQ6IDUwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIHJlZ3VsYXJUZXh0KCRmb250LXNpemU6IDFyZW0sICRjb2xvcjogJGdyYXk2MDAsICRmb250LXdlaWdodDogNDAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gc2VtaUJvbGRUZXh0KCRmb250LXNpemU6IDJyZW0sICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKSwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiBib2xkVGV4dCgkZm9udC1zaXplOiAxLjEyNXJlbSwgJGNvbG9yOiAkZ3JheTYwMCwgJGZvbnQtd2VpZ2h0OiA3MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59Il19 */";

/***/ }),

/***/ 27774:
/*!***********************************************************************************************!*\
  !*** ./src/shared/components/sizes-select-modal/sizes-select-modal.component.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "/** Ionic CSS Variables **/\n:root {\n  --ion-color-white: #ffffff;\n  --ion-color-black: #000000;\n  /** primary color**/\n  --ion-color-primary: #ffde59;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #111111;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #ffeeae;\n  --ion-color-primary-tint: #ffde59;\n  /** secondary for text**/\n  --ion-color-secondary: #111111;\n  --ion-color-secondary-rgb: 17, 17, 17;\n  --ion-color-secondary-contrast: #ffde59;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0f0f0f;\n  --ion-color-secondary-tint: #292929;\n  /** tertiary used for input background and background icone**/\n  --ion-color-tertiary: #dbdbdb;\n  --ion-color-tertiary-rgb: 219, 219, 219;\n  --ion-color-tertiary-contrast: #000000;\n  --ion-color-tertiary-contrast-rgb: 0, 0, 0;\n  --ion-color-tertiary-shade: #c1c1c1;\n  --ion-color-tertiary-tint: #dfdfdf;\n  /** success **/\n  --ion-color-success: #01db72;\n  --ion-color-success-rgb: 1, 219, 114;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #01c164;\n  --ion-color-success-tint: #1adf80;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #ff1166;\n  --ion-color-danger-rgb: 255, 17, 102;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e00f5a;\n  --ion-color-danger-tint: #ff2976;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: rgba(255, 222, 89, 0.19);\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** Tab-bar **/\n  --ion-toolbar-background: white;\n  --text-font-style: \"IBMPlexSans\";\n  --title-font-style: \"IBMPlexSans\";\n}\n:root .spinner-bubbles {\n  color: var(--ion-color-primary);\n}\n:root ion-tab-button.tab-selected {\n  --color-selected: var(--ion-color-primary);\n}\n:root ion-segment {\n  --background: var(--ion-color-white);\n}\n:root ion-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --color-checked: black;\n  --indicator-transition: none;\n}\n:root ion-button {\n  text-transform: none;\n}\nion-toolbar ion-button {\n  --box-shadow: none;\n  width: 2.5rem;\n  height: 2.5rem;\n  min-width: 2.5rem;\n  --padding-start: none;\n  --padding-end: none;\n}\nion-toolbar ion-title {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: 600;\n  padding-right: 3rem;\n  padding-left: 3rem;\n  text-align: center;\n  width: 100%;\n}\n.colors-warning {\n  font-size: 0.875rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-black);\n  font-weight: normal;\n  padding: 1rem;\n}\nion-list {\n  padding-bottom: 3.5rem;\n}\nion-list ion-item .checkbox-color {\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  border: solid 1px var(--ion-color-secondary);\n  margin-right: 1rem;\n}\nion-list ion-item ion-label {\n  margin: 0;\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: normal;\n}\nion-list ion-item ion-checkbox {\n  height: 1.5rem;\n  width: 1.5rem;\n}\n.submit-button {\n  bottom: 34px;\n  height: 2.5rem;\n  position: fixed;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  width: 100%;\n  margin-bottom: 0.5rem;\n  position: fixed;\n}\n.submit-button ion-button {\n  height: 100%;\n  font-size: 1.125rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: bold;\n  --border-radius: 1rem;\n  width: 80%;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwic2l6ZXMtc2VsZWN0LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsMEJBQUE7QUFvQkE7RUFDRSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLDZEQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsMENBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBTUEsY0FBQTtFQW1CQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7QUNwREY7QUQyQkU7RUFDRSwrQkFBQTtBQ3pCSjtBRDZCRTtFQUNFLDBDQUFBO0FDM0JKO0FEOEJFO0VBQ0Usb0NBQUE7QUM1Qko7QUQrQkU7RUFDRSw4Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUM3Qko7QURnQ0U7RUFDRSxvQkFBQTtBQzlCSjtBQXBGRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUF1Rko7QUFwRkU7RUNUQSxlRFVpQjtFQ1RqQiwwQkRTdUI7RUNSdkIsaUNEUXNDO0VDUHRDLGdCRE9rRTtFQUNoRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBeUZKO0FBckZBO0VDS0UsbUJESmM7RUNLZCwwQkRMd0I7RUNNeEIsNkJETnVDO0VDT3ZDLG1CRFArRDtFQUMvRCxhQUFBO0FBMkZGO0FBeEZBO0VBQ0Usc0JBQUE7QUEyRkY7QUF4Rkk7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtBQTBGTjtBQXZGSTtFQUNFLFNBQUE7RUNiSixlRGNrQjtFQ2JsQiwwQkRhd0I7RUNaeEIsaUNEWXVDO0VDWHZDLG1CQUpjO0FEMkdoQjtBQXpGSTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FBMkZOO0FBdEZBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUNWQSxlRFdrRDtFQ1ZsRCxtQkRVbUI7RUNIakIsYUFBQTtFQUdGLG1CQUFBO0VBQ0EsaUJERG1DO0VDRW5DLHVCREYyQjtFQUMzQixXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBOEZGO0FBNUZFO0VBQ0UsWUFBQTtFQ3hERixtQkR5RGlCO0VDeERqQiwwQkR3RDJCO0VDdkQzQixpQ0R1RDBDO0VDdEQxQyxpQkRzRHNFO0VBQ3BFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQWlHSiIsImZpbGUiOiJzaXplcy1zZWxlY3QtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cblxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG5cbi8vIGNvbG9yc1xuJGJsYWNrMjogIzQwNDAzZjtcbiRncmF5NjAwOiAjMTExMTExOyAvL3VzZWRcbiRncmF5NTAwOiAjMjkyOTI5OyAvL3VzZWRcbiRncmF5NDAwOiAjNTk1OTU5OyAvL3VzZWRcbiRncmF5MzAwOiAjODg4ODg4OyAvL3VzZWRcbiRncmF5MjAwOiAjQjhCOEI4O1xuJGdyYXkyOiAjOWQ5Yzk5O1xuJGdyYXkzOiAjZGJkYmRiO1xuJHllbGxvdzEwMDogI2ZmZmNlZjtcbiR5ZWxsb3cyMDA6ICNmZmY1Y2U7XG4keWVsbG93MzogI2ZkZTg5NjtcbiR5ZWxsb3c0OiAjZmNlZWI2O1xuJHllbGxvdzU6ICNmYmYyZDQ7XG4keWVsbG93NjogI0ZGREU1OTtcbiR3aGl0ZTgwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4kZGFyazc1OiByZ2JhKDAsIDAsIDAsIDAuMjUpOyAvL2J1dHRvbnMgc2hhZG93XG5cbjpyb290IHtcbiAgLS1pb24tY29sb3Itd2hpdGU6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWJsYWNrOiAjMDAwMDAwO1xuICAvKiogcHJpbWFyeSBjb2xvcioqL1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjZmZkZTU5O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNTYsIDEyOCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjMTExMTExO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogI2ZmZWVhZTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjZmZkZTU5O1xuXG4gIC8qKiBzZWNvbmRhcnkgZm9yIHRleHQqKi9cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjMTExMTExO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiAxNywgMTcsIDE3O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmRlNTk7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzBmMGYwZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICMyOTI5Mjk7XG5cbiAgLyoqIHRlcnRpYXJ5IHVzZWQgZm9yIGlucHV0IGJhY2tncm91bmQgYW5kIGJhY2tncm91bmQgaWNvbmUqKi9cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNkYmRiZGI7IC8vc2FtZSBhcyBncmF5M1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDIxOSwgMjE5LCAyMTk7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjYzFjMWMxO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjZGZkZmRmO1xuXG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMDFkYjcyO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogMSwgMjE5LCAxMTQ7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMDFjMTY0O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICMxYWRmODA7XG5cbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmM0MDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDE5NiwgOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGFjMDg7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmY2EyMjtcblxuICAvKiogZGFuZ2VyICoqL1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNmZjExNjY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI1NSwgMTcsIDEwMjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNlMDBmNWE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZmYyOTc2O1xuXG4gIC8qKiBkYXJrICoqL1xuICAtLWlvbi1jb2xvci1kYXJrOiAjMjIyNDI4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcblxuICAvKiogbWVkaXVtICoqL1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5Mjk0OWM7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE0NiwgMTQ4LCAxNTY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODA4Mjg5O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogIzlkOWZhNjtcblxuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiByZ2JhKDI1NSwgMjIyLCA4OSwgMC4xOSk7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjQ0LCAyNDUsIDI0ODtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNWY2Zjk7XG5cbiAgLnNwaW5uZXItYnViYmxlcyB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuXG4gIC8qKiBUYWItYmFyICoqL1xuICBpb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQge1xuICAgIC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuXG4gIGlvbi1zZWdtZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIH1cblxuICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLS1jb2xvci1jaGVja2VkOiBibGFjaztcbiAgICAtLWluZGljYXRvci10cmFuc2l0aW9uOiBub25lO1xuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIH1cblxuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLXRleHQtZm9udC1zdHlsZTogJ0lCTVBsZXhTYW5zJztcbiAgLS10aXRsZS1mb250LXN0eWxlOiAnSUJNUGxleFNhbnMnO1xufVxuXG4vLyBWZXJpZmllZFxuJHdpZHRoLXNkOiAzMDBweDsgLy9mb2xkXG4kd2lkdGgtbWQ6IDM4MHB4OyAvL2lwaG9uZSBTRVxuJHdpZHRoLWxkOiA0MTJweDsgLy9pcGhvbmUgWFJcbiR3aWR0aC14bGQ6IDc2OHB4OyAvL2lwYWQiLCJAaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi90aGVtZS92YXJpYWJsZXMuc2Nzcyc7XG5cbmlvbi10b29sYmFyIHtcbiAgaW9uLWJ1dHRvbiB7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIHdpZHRoOiAyLjVyZW07XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgbWluLXdpZHRoOiAyLjVyZW07XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiBub25lO1xuICAgIC0tcGFkZGluZy1lbmQ6IG5vbmU7XG4gIH1cblxuICBpb24tdGl0bGUge1xuICAgIEBpbmNsdWRlIHRpdGxlKDFyZW0sICdJQk1QbGV4U2FucycsIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpLCA2MDApO1xuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uY29sb3JzLXdhcm5pbmcge1xuICBAaW5jbHVkZSB0ZXh0KDAuODc1cmVtLCAnSUJNUGxleFNhbnMnLCB2YXIoLS1pb24tY29sb3ItYmxhY2spLCBub3JtYWwpO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG5pb24tbGlzdCB7XG4gIHBhZGRpbmctYm90dG9tOiAzLjVyZW07XG5cbiAgaW9uLWl0ZW0ge1xuICAgIC5jaGVja2JveC1jb2xvciB7XG4gICAgICB3aWR0aDogMS41cmVtO1xuICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICB9XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgQGluY2x1ZGUgdGV4dCgxcmVtLCAnSUJNUGxleFNhbnMnLCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSk7XG4gICAgfVxuXG4gICAgaW9uLWNoZWNrYm94IHtcbiAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgd2lkdGg6IDEuNXJlbTtcbiAgICB9XG4gIH1cbn1cblxuLnN1Ym1pdC1idXR0b24ge1xuICBib3R0b206IDM0cHg7XG4gIGhlaWdodDogMi41cmVtO1xuICBAaW5jbHVkZSBmbGV4KHJvdywgY2VudGVyLCBjZW50ZXIsIG5vd3JhcCwgZmFsc2UsIGZpeGVkKTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgcG9zaXRpb246IGZpeGVkO1xuXG4gIGlvbi1idXR0b24ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBAaW5jbHVkZSB0aXRsZSgxLjEyNXJlbSwgJ0lCTVBsZXhTYW5zJywgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSksIGJvbGQpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbn0iLCJAbWl4aW4gdGl0bGUoJGZvbnQtc2l6ZTogMnJlbSxcbiAgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnLFxuICAkY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpLFxuICAkZm9udC13ZWlnaHQ6IGJvbGQpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5cblxuQG1peGluIHNpbXBsZV9idXR0b24oJHdpZHRoOiAyNSUsICRoZWlnaHQ6IDIuNXJlbSwgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSkge1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG4gIC0tY29sb3I6ICRjb2xvcjtcbn1cblxuQG1peGluIGljb24oJHdpZHRoOiAxcmVtLCAkaGVpZ2h0OiAxcmVtKSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbn1cblxuQG1peGluIHRleHQoJGZvbnQtc2l6ZTogMC44NzVyZW0sXG4gICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJyxcbiAgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSxcbiAgJGZvbnQtd2VpZ2h0OiBub3JtYWwpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gdGV4dC1vdmVyZmxvdygpIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cblxuLy92ZXJpZmllZFxuXG5AbWl4aW4gZmxleCgkZGlyZWN0aW9uOiByb3csICRhbGlnbi1pdGVtczogY2VudGVyLCAkanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0LCAkd3JhcDogbm93cmFwLCAkaW5saW5lOiBmYWxzZSwgJHBvc2l0aW9uOiByZWxhdGl2ZSkge1xuICBwb3NpdGlvbjogJHBvc2l0aW9uO1xuICBhbGlnbi1pdGVtczogJGFsaWduLWl0ZW1zO1xuXG4gIEBpZiAkaW5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgfVxuXG4gIEBlbHNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG4gIGZsZXgtd3JhcDogJHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnktY29udGVudDtcbn1cblxuQG1peGluIGJ1dHRvbigkd2lkdGg6IDI1JSwgJGhlaWdodDogMi41cmVtLCAkZm9udC1zaXplOiAwLjg3NXJlbSwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnLCAkZm9udC13ZWlnaHQ6IDYwMCkge1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbiAgbWluLWhlaWdodDogJGhlaWdodDtcbn1cblxuQG1peGluIHdoaXRlVGl0bGUoJGZvbnQtc2l6ZTogMS43NXJlbSwgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIHdoaXRlU3VidGl0bGUoJGZvbnQtc2l6ZTogMXJlbSwgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIGJsYWNrVGl0bGUoJGZvbnQtc2l6ZTogMS43NXJlbSwgJGNvbG9yOiAkZ3JheTUwMCwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJywgKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbkBtaXhpbiBibGFja1N1YnRpdGxlKCRmb250LXNpemU6IDFyZW0sICRjb2xvcjogJGdyYXk1MDAsICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gbWVkaXVtVGV4dCgkZm9udC1zaXplOiAwLjc1cmVtLCAkY29sb3I6ICRncmF5NTAwLCAkZm9udC13ZWlnaHQ6IDUwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIHJlZ3VsYXJUZXh0KCRmb250LXNpemU6IDFyZW0sICRjb2xvcjogJGdyYXk2MDAsICRmb250LXdlaWdodDogNDAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gc2VtaUJvbGRUZXh0KCRmb250LXNpemU6IDJyZW0sICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKSwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiBib2xkVGV4dCgkZm9udC1zaXplOiAxLjEyNXJlbSwgJGNvbG9yOiAkZ3JheTYwMCwgJGZvbnQtd2VpZ2h0OiA3MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59Il19 */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n  <ngx-spinner name=\"appSpinner\" bdColor=\"rgba(0, 0, 0, 0.5)\" size=\"medium\" color=\"#ffde59\" type=\"ball-clip-rotate\">\n  </ngx-spinner>\n</ion-app>";

/***/ }),

/***/ 2471:
/*!*******************************************************************************************!*\
  !*** ./src/app/main/wardrobe/image-crop-modal/image-crop-modal.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismissModal()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{'WARDROBE.CROP_IMG' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"content\">\n    <image-cropper [imageBase64]=\"imageBase64\" [cropperMinHeight]=\"192\" [cropperMinWidth]=\"178\" [hideResizeSquares]=\"false\" [aspectRatio]=\"aspectRatio\" format=\"png\"\n      (imageCropped)=\"imageCropped($event)\">\n    </image-cropper>\n  </div>\n  <div class=\"submit-button\">\n    <ion-button data-cy=\"validate-crop-image-button\" [disabled]=\"!imageBase64\" (click)=\"dismissModal(croppedImageBase64)\" color=\"primary\" expand=\"block\">\n      {{'SHARED.FINISH' | translate}}</ion-button>\n  </div>\n</ion-content>";

/***/ }),

/***/ 42588:
/*!***********************************************************************************************************!*\
  !*** ./src/shared/components/add-article-title-dialog/add-article-title-dialog.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <div class=\"modal-content\">\n    <div class=\"header\">Ajouter à votre garde robe</div>\n    <ion-input\n      data-cy=\"Titlearticle-input\"\n      clearInput\n      inputmode=\"text\"\n      minlenght=\"1\"\n      placeholder=\"Titre\"\n      required=\"true\"\n      [(ngModel)]=\"title\"\n    >\n    </ion-input>\n    <ion-item lines=\"none\">\n      <ion-label>Ajouter un autre vêtement similaire</ion-label>\n      <ion-checkbox\n        data-cy=\"SameArticle-addarticle-checkbox\"\n        slot=\"start\"\n        [(ngModel)]=\"isRememberChecked\"\n      ></ion-checkbox>\n    </ion-item>\n    <div class=\"buttons\">\n      <ion-button class=\"cancel-button\" color=\"$yellow4\" (click)=\"onCancel()\">Annuler</ion-button>\n      <ion-button\n        data-cy=\"confirm-addarticle-button\"\n        class=\"confirm-button\"\n        (click)=\"onSubmitTitle()\"\n        >Confirmer</ion-button\n      >\n    </div>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 87409:
/*!*************************************************************************************************!*\
  !*** ./src/shared/components/articles-card-modal/articles-card-modal.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>{{ 'WARDROBE.CATEGORIES.' + category | translate }}</ion-title>\n    <ion-button slot=\"start\" (click)=\"onGoBack()\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n<!--<div class=\"search\">\n  <ion-searchbar placeholder=\"{{ 'SHARED.SEARCH_ARTICLE' | translate }}\"> </ion-searchbar>\n  <ion-button class=\"connect-button\" color=\"dark\">\n    <span class=\"filter_button\">\n      <span class=\"text-button\">{{ 'SHARED.FILTRES' | translate }}</span>\n      <ion-icon src=\"assets/icon/buttons/square.svg\" slot=\"end\"></ion-icon>\n    </span>\n  </ion-button>\n</div>-->\n<ion-content>\n  <div class=\"container\" *ngIf=\"articles$ | async as articles\">\n    <ng-container *ngIf=\"articles.length; else noData\">\n      <p class=\"subtitle-container\">\n        Veuillez sélectionner {{ max_items.get(this.category) }}\n        <span class=\"category-name\">article(s)</span> au maximum\n      </p>\n      <ion-card id=\"article-card-{{ index }}\" class=\"item\" [ngClass]=\"getClass(article)\"\n        *ngFor=\"let article of articles; let index = index\" (click)=\"onSelectArticle(index, article)\">\n        <cached-img class=\"article-img\" *ngIf=\"article.images[0]\"\n          [src]=\"article.images[0].s3_presigned_url\"></cached-img>\n        <ngx-spinner name=\"{{ index }}\" bdColor=\"#ffffff\" size=\"small\" color=\"#ffde59\" type=\"ball-fussion\"\n          [fullScreen]=\"false\"></ngx-spinner>\n        <ion-card-content>\n          <div class=\"card-container\">\n            <p class=\"title\">{{ article.title }}</p>\n            <div class=\"colors\" *ngIf=\"article.color_ids.length === 1\"\n              [style.background]=\"colors[article.color_ids[0]].rgb\"></div>\n            <div class=\"colors\" *ngIf=\"article.color_ids.length === 2\" [style.background]=\"\n                'linear-gradient(-45deg,' +\n                colors[article.color_ids[0]].rgb +\n                ', ' +\n                colors[article.color_ids[0]].rgb +\n                ' 49%, white 49%, white 51%, ' +\n                colors[article.color_ids[1]].rgb +\n                ' 51%)'\n              \"></div>\n            <img class=\"color\" *ngIf=\"article.color_ids.length > 2\" src=\"assets/colors/color-multicolor.png\" />\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </ng-container>\n    <ng-template #noData>\n      <p>{{ 'SHARED.CATEGORY_NO_DATA' | translate }}</p>\n    </ng-template>\n  </div>\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\" (click)=\"onConfirmModal()\">\n    <ion-fab-button data-cy=\"confirm_select-style-button\" color=\"primary\">\n      <ion-icon name=\"checkmark-sharp\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";

/***/ }),

/***/ 71492:
/*!*************************************************************************************************!*\
  !*** ./src/shared/components/brands-select-modal/brands-select-modal.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>{{ 'WARDROBE.PIECES.FORM.BRAND' | translate }}</ion-title>\n    <ion-button slot=\"start\" (click)=\"goBack()\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n\n  <ion-searchbar\n  type=\"text\"\n  debounce=\"500\"\n  placeholder=\"{{ 'SHARED.SEARCH_BRAND' | translate }}\"\n  (ionChange)=\"onSearchChange($event)\" \n></ion-searchbar>\n</ion-header>\n\n<ion-content>\n  <!--<ais-instantsearch [config]=\"config\">\n    <ais-search-box></ais-search-box>\n    <ais-hits>\n      <ng-template let-hits=\"hits\">\n        <ion-radio-group class=\"ais-Hits-list\" [(ngModel)]=\"currentBrand\" *ngFor=\"let hit of hits\"\n          class=\"ais-Hits-item\">\n          <ion-item lines=\"none\">\n            <ion-label>{{hit.fr_display}}</ion-label>\n            <ion-radio slot=\"end\" value=\"{{hit.id}}\" (click)=\"onConfirmChoice(hit)\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </ng-template>\n    </ais-hits>\n  </ais-instantsearch>-->\n \n  <ion-list *ngIf=\"brands$.length; else noBrands\">\n    <ion-item id=\"brand-{{ brand.id }}-checkbox\" *ngFor=\"let brand of brands$; let idx = index\">\n      <ion-label text-wrap>{{ brand.fr_display }}</ion-label>\n      <ion-checkbox\n        [checked]=\"currentBrand?.id === brand.id\"\n        mode=\"ios\"\n        slot=\"end\"\n        value=\"brand.id\"\n        (click)=\"onChangeCheckbox(brand)\"\n      >\n      </ion-checkbox>\n    </ion-item>\n  </ion-list>\n  <ng-template #noBrands>\n    {{ 'SHARED.NO_BRAND_FOUND' | translate }}\n  </ng-template>\n</ion-content>\n";

/***/ }),

/***/ 26654:
/*!***********************************************************************************!*\
  !*** ./src/shared/components/cached-image/cached-image.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<img [src]=\"_src\" *ngIf=\"_src != ''\" [ngClass]=\"className\">";

/***/ }),

/***/ 248:
/*!*************************************************************************************************!*\
  !*** ./src/shared/components/colors-select-modal/colors-select-modal.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>{{ 'WARDROBE.PIECES.FORM.COLORS' | translate }}</ion-title>\n    <ion-button data-cy=\"goback-colormodal-button\" slot=\"start\" (click)=\"goBack()\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n<div class=\"colors-warning\">\n  Au-delà de 2 couleurs selectionnées l’affichage indiquera multicolore\n</div>\n\n<ion-content>\n  <ion-list class=\"ion-padding-horizontal\">\n    <ion-item id=\"color-{{ color.id }}-checkbox\" lines=\"none\" *ngFor=\"let color of colors; let idx = index\">\n      <div *ngIf=\"color.id !== 28; else multicolorImg\" class=\"checkbox-color\" [style.background]=\"color.rgb\"></div>\n      <ng-template #multicolorImg>\n        <ion-img class=\"checkbox-color\" src=\"../../../assets/colors/color-multicolor.png\"></ion-img>\n      </ng-template>\n      <ion-label text-wrap>{{ color.fr_display }}</ion-label>\n      <ion-checkbox [checked]=\"selectedColorsIds?.includes(color.id)\" mode=\"ios\" slot=\"end\" value=\"item.id\"\n        (ionChange)=\"onChangeCheckbox(color)\">\n      </ion-checkbox>\n    </ion-item>\n  </ion-list>\n  <div class=\"submit-button\">\n    <ion-button id=\"colors_sub-button\" (click)=\"onSave()\" color=\"primary\" expand=\"block\">Terminer</ion-button>\n  </div>\n</ion-content>";

/***/ }),

/***/ 41036:
/*!***********************************************************************************************!*\
  !*** ./src/shared/components/edit-profile-modal/edit-profile-modal.component.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"safe-area\">\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-button data-cy=\"canceledit-profile-button\" class=\"cancel-button\" slot=\"start\" (click)=\"onDismissModal()\">\n      {{ 'SHARED.CANCEL' | translate }}\n    </ion-button>\n    <ion-title>{{ data.title | translate }}</ion-title>\n    <ion-button data-cy=\"saveedit-profile-button\" class=\"save-button\" slot=\"end\" (click)=\"onValidate()\"\n      [disabled]=\"!editForm.valid || !hasInputChanged\"\n      [ngClass]=\"(!editForm.valid || !hasInputChanged) ? 'save-button-invalid' : 'save-button'\">\n      {{ 'SHARED.SAVE' | translate }}\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]=\"editForm\">\n    <div class=\"form-item\">\n      <ion-item data-cy=\"typeedit-profile-field\"\n        *ngIf=\"data.key === 'last_name' || data.key === 'first_name' || data.key === 'profile_name'\">\n        <ion-label position=\"floating\">{{ data.title | translate }} <span class=\"label-required\">*</span></ion-label>\n        <ion-input formControlName=\"editInputCtrl\" clearInput placeholder=\"{{ data.title | translate }}*\">\n        </ion-input>\n        <ion-note slot=\"error\" *ngIf=\"editForm.get('editInputCtrl').errors?.inputUnchanged\" class=\"error-message\">\n          {{'ERROR.INPUT_UNCHANGED' | translate }}</ion-note>\n        <ion-note slot=\"error\" *ngIf=\"editForm.get('editInputCtrl').errors?.required\" class=\"error-message\">\n          {{'SHARED.FIELD_REQUIRED' | translate }}</ion-note>\n        <ion-note slot=\"error\" class=\"error-message\" *ngIf=\"editForm.get('editInputCtrl')?.hasError('pattern')\">\n          {{ 'PROFILE.INVALID_CHARACTER' | translate }}\n        </ion-note>\n        <ion-note slot=\"error\" class=\"error-message\" *ngIf=\"editForm.get('editInputCtrl')?.hasError('invalidMessage')\">\n          {{editForm.get('editInputCtrl')?.errors.invalidMessage}}\n        </ion-note>\n      </ion-item>\n      <ion-item data-cy=\"typeedit-pseudoprofile-field\" *ngIf=\"data.key === 'nickname'\">\n        <ion-label position=\"floating\">{{ data.title | translate }} <span class=\"label-required\">*</span></ion-label>\n        <ion-input formControlName=\"editInputCtrl\" clearInput placeholder=\"{{ data.title | translate }}*\">\n          <ion-icon class=\"at-icon\" name=\"at-outline\" slot=\"start\" size=\"small\"></ion-icon>\n        </ion-input>\n        <ion-note slot=\"error\" *ngIf=\"editForm.get('editInputCtrl').errors?.inputUnchanged\" class=\"error-message\">\n          {{'ERROR.INPUT_UNCHANGED' | translate }}</ion-note>\n        <ion-note slot=\"error\" *ngIf=\"editForm.get('editInputCtrl').errors?.required\" class=\"error-message\">\n          {{'SHARED.FIELD_REQUIRED' | translate }}</ion-note>\n        <ion-note slot=\"error\" class=\"error-message\" *ngIf=\"editForm.get('editInputCtrl')?.hasError('pattern')\">\n          {{ 'PROFILE.INVALID_CHARACTER' | translate }}\n        </ion-note>\n      </ion-item>\n      <div data-cy=\"typeedit-dateprofile-field\" class=\"input-group\" *ngIf=\"data.key === 'date_of_birth'\">\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">{{ 'SHARED.BIRTHDATE' | translate }}<span class=\"label-required\">*</span>\n          </ion-label>\n          <ion-input formControlName=\"editInputCtrl\" type=\"date\" placeholder=\"{{ 'SHARED.BIRTHDATE' | translate }}\"\n            max=\"2500-12-31\">\n          </ion-input>\n          <ion-note slot=\"error\"\n            *ngIf=\"editForm.get('editInputCtrl').touched && editForm.get('editInputCtrl').errors?.required\"\n            class=\"error-message\">\n            Veuillez entrer votre date de naissance</ion-note>\n          <ion-note slot=\"error\" *ngIf=\"editForm.get('editInputCtrl').errors?.inputUnchanged\" class=\"error-message\">\n            {{'ERROR.INPUT_UNCHANGED' | translate }}</ion-note>\n        </ion-item>\n      </div>\n      <ion-item lines=\"full\" *ngIf=\"data.key === 'gender_id'\">\n        <ion-label class=\"gender-label\" position=\"stacked\">Genre <span class=\"label-required\"> *</span>\n          <ion-icon name=\"information-circle-outline\" id=\"gender-advice-modal\" slot=\"end\" (click)=\"onOpenTooltip()\">\n          </ion-icon>\n        </ion-label>\n        <ion-radio-group class=\"radio-group\" formControlName=\"gender_id\">\n          <ion-item lines=\"none\" *ngFor=\"let gender of genders\">\n            <ion-label>{{ gender.name | translate }}</ion-label>\n            <ion-radio color=\"primary\" mode=\"md\" slot=\"start\" value=\"{{ gender.id }}\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </ion-item>\n      <div id=\"sexe-tooltip\">{{ 'ACCOUNT_CREATION.SEXE_TOOLTIP' | translate }}</div>\n      <!-- <div class=\"spinner\">\n  <ngx-spinner bdColor=\"rgba(255,255,255,0)\" size=\"small\" color=\"#000000\" type=\"ball-fussion\"\n    [fullScreen]=\"false\">\n  </ngx-spinner>\n</div>-->\n    </div>\n  </form>\n  <div class=\"bottom\"></div>\n</ion-content>";

/***/ }),

/***/ 67355:
/*!********************************************************************************!*\
  !*** ./src/shared/components/modal-content/modal-content.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>{{title}}</ion-title>\n    <ion-button data-cy=\"goback-categories-button\" slot=\"start\" (click)=\"goBack()\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <!--<ion-item lines=\"none\">\n      <ion-label><strong>Tout</strong></ion-label>\n      <ion-checkbox slot=\"start\"></ion-checkbox>\n    </ion-item>-->\n\n    <ion-item\n      id=\"category-{{item.id}}-button\"\n      lines=\"none\"\n      (click)=\"goForward(idx)\"\n      *ngFor=\"let item of wardrobeCategories; let idx = index\"\n    >\n      <ion-label text-wrap>{{item.fr_display}}</ion-label>\n      <ion-icon\n        *ngIf=\"item.sub_categories.length\"\n        color=\"secondary\"\n        slot=\"end\"\n        name=\"chevron-forward-outline\"\n      >\n      </ion-icon>\n      <ion-checkbox\n        id=\"category-{{item.id}}-checkbox\"\n        mode=\"ios\"\n        *ngIf=\"item.sub_categories.length === 0\"\n        slot=\"end\"\n        value=\"item.id\"\n        [checked]=\"item.id === this.currentCategory?.id\"\n        (ionChange)=\"onChangeCheckbox(item)\"\n      >\n      </ion-checkbox>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

/***/ }),

/***/ 37699:
/*!***********************************************************************************************!*\
  !*** ./src/shared/components/sizes-select-modal/sizes-select-modal.component.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>{{ 'WARDROBE.PIECES.FORM.SIZE' | translate }}</ion-title>\n    <ion-button data-cy=\"goback-colormodal-button\" slot=\"start\" (click)=\"goBack()\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class=\"ion-padding-horizontal\">\n    <ion-item id=\"size-{{ size.id }}-checkbox\" lines=\"none\" *ngFor=\"let size of sizes; let idx = index\"\n      (click)=\"currentSize = size\">\n      <ion-label text-wrap>{{ size.fr_display }}</ion-label>\n      <ion-checkbox [checked]=\"currentSize.id === size.id\" mode=\"ios\" slot=\"end\" value=\"size.id\">\n      </ion-checkbox>\n    </ion-item>\n  </ion-list>\n  <div class=\"submit-button\">\n    <ion-button id=\"colors_sub-button\" (click)=\"onSave()\" color=\"primary\" expand=\"block\">Terminer</ion-button>\n  </div>\n</ion-content>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map