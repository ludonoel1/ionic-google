"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_main_wardrobe_style-reco_style-reco_module_ts"],{

/***/ 45941:
/*!***********************************************************************!*\
  !*** ./src/app/main/wardrobe/style-reco/style-reco-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleRecoRoutingModule": () => (/* binding */ StyleRecoRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _style_reco_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style-reco.component */ 25979);




const routes = [
    {
        path: '',
        component: _style_reco_component__WEBPACK_IMPORTED_MODULE_0__.StyleRecoComponent,
    },
];
let StyleRecoRoutingModule = class StyleRecoRoutingModule {
};
StyleRecoRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StyleRecoRoutingModule);



/***/ }),

/***/ 25979:
/*!******************************************************************!*\
  !*** ./src/app/main/wardrobe/style-reco/style-reco.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleRecoComponent": () => (/* binding */ StyleRecoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _style_reco_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style-reco.component.html?ngResource */ 32622);
/* harmony import */ var _style_reco_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-reco.component.scss?ngResource */ 56730);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 63947);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var src_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/services/storage.service */ 45785);
/* harmony import */ var src_shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/services/toaster.service */ 29238);
/* harmony import */ var src_shared_state_wardrobe_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/state/wardrobe-state.service */ 40084);
/* harmony import */ var _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor-community/firebase-analytics */ 67285);














let StyleRecoComponent = class StyleRecoComponent {
    constructor(route, wardrobeState, storageService, alert, http, toaster, location, router, spinner) {
        this.route = route;
        this.wardrobeState = wardrobeState;
        this.storageService = storageService;
        this.alert = alert;
        this.http = http;
        this.toaster = toaster;
        this.location = location;
        this.router = router;
        this.spinner = spinner;
        this.currency = 'EUR'; //TODO: modify with local
        this.locale = 'fr';
        this.currentImageIndex = 0;
        this.styleImages = new Map([
            ['FAM_01', []],
            ['FAM_02', []],
            ['FAM_03', []],
        ]);
        this.slidesOpts = {
            allowTouchMove: false,
            autoHeight: false,
        };
    }
    ionViewWillEnter() {
        _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_6__.FirebaseAnalytics.setScreenName({
            screenName: "RecoStyleScreen",
            nameOverride: "RecoStyleScreen",
        });
        this.tabBar.style.display = 'none';
        _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_6__.FirebaseAnalytics.logEvent({
            name: "reco_style_entered",
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
        var _a;
        this.tabBar = document.getElementById('tab-bar');
        //add subscription
        //this.wardrobeState.getRecommendedStyles().asObservable().subscribe(styles => this.currentStyles = styles);
        this.currentStyles = this.wardrobeState.getRecommendedStyles().value;
        /*this.currentStyles = [
        {
          items: [
              {
                  category_id: "SHIRT_01",
                  images: [
                      {
                          id: "e7d494e6-3436-4880-80b4-f5157f66c37e",
                          order: 1,
                          s3_presigned_url: "https://s3.eu-west-3.amazonaws.com/younzee-wardrobe-items/e7d494e6-3436-4880-80b4-f5157f66c37e.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWL5DV2AFZE2RH7XA%2F20220811%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20220811T132406Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=51153c3c45ee3b155b54086f34ccc68aa49d1f2e8d1f7089190fd5f3bdd1839a"
                      }
                  ],
              },
              {
                  category_id: "SHIRT_01",
                  images: [
                      {
                          id: "31acdaf5-a1e1-4292-b89d-78326d208fb4",
                          order: 1,
                          s3_presigned_url: "https://s3.eu-west-3.amazonaws.com/younzee-wardrobe-items/31acdaf5-a1e1-4292-b89d-78326d208fb4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWL5DV2AFZE2RH7XA%2F20220811%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20220811T132406Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=ddfd6789d111f96122e1d0bc7d1bdeb31c234f4569fb323e4451b1ce23b9306c"
                      },
                      {
                          id: "ddd69de6-43f3-4836-b159-0cb2ff4c5651",
                          order: 2,
                          s3_presigned_url: "https://s3.eu-west-3.amazonaws.com/younzee-wardrobe-items/ddd69de6-43f3-4836-b159-0cb2ff4c5651.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWL5DV2AFZE2RH7XA%2F20220811%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20220811T132406Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=3febd93f440974cb143e12761d15bc14fc5f939f6671954206c8f2d156b37bd1"
                      }
                  ],
              },
              {
                  category_id: "SHIRT_01",
                  images: [
                      {
                          id: "8f0c4bab-53cd-4b94-a823-5488364a6e8f",
                          order: 1,
                          s3_presigned_url: "https://s3.eu-west-3.amazonaws.com/younzee-wardrobe-items/8f0c4bab-53cd-4b94-a823-5488364a6e8f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWL5DV2AFZE2RH7XA%2F20220811%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20220811T132406Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=6471400be97dfb175361356500847c76f5aa93055fe44cdd3679d71ee34f673b"
                      }
                  ],
              },
              {
                  category_id: "SHIRT_01",
                  images: [
                      {
                          id: "25f5bdfa-7858-4b26-b427-9701dd88251f",
                          order: 1,
                          s3_presigned_url: "https://s3.eu-west-3.amazonaws.com/younzee-wardrobe-items/25f5bdfa-7858-4b26-b427-9701dd88251f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWL5DV2AFZE2RH7XA%2F20220811%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20220811T132406Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=7621d563b50c4a3f26e32c533fd92f550b2487e734c3ebbfacb52f3ddfb86f7e"
                      }
                  ],
              },
              {
                  category_id: "SHIRT_01",
                  images: [
                      {
                          id: "3102787e-d2e5-49ab-a644-5c16440af9c1",
                          order: 1,
                          s3_presigned_url: "https://s3.eu-west-3.amazonaws.com/younzee-wardrobe-items/3102787e-d2e5-49ab-a644-5c16440af9c1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWL5DV2AFZE2RH7XA%2F20220811%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20220811T132406Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=6bc38de0cfbb01178b303a095e58b6238bc91cd3530d8f06ccda2ed3eeb438e9"
                      }
                  ],
              },
              {
                  category_id: "CHAU_04",
                  images: [
                      {
                          id: "8b4ea5cf-115c-4d09-981f-ed38fa962070",
                          order: 1,
                          s3_presigned_url: "https://s3.eu-west-3.amazonaws.com/younzee-wardrobe-items/8b4ea5cf-115c-4d09-981f-ed38fa962070.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWL5DV2AFZE2RH7XA%2F20220811%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20220811T132406Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=8f2f4d2c2e95689fcaaa00c62716c840204b0c02df8a0c218a19f01817b15371"
                      },
                      {
                          id: "162fb5fc-773f-4dbb-8387-89f289b62b6d",
                          order: 2,
                          s3_presigned_url: "https://s3.eu-west-3.amazonaws.com/younzee-wardrobe-items/162fb5fc-773f-4dbb-8387-89f289b62b6d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWL5DV2AFZE2RH7XA%2F20220811%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20220811T132406Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=074f6a2e7a8aab853cc5c8fa6705d6ad39effb90b2d6e1297515ef44e51cea71"
                      }
                  ],
              },
              {
                  category_id: "ACC_05",
                  images: [
                      {
                          id: "9158c510-8864-41ba-b12a-f3a2c4731f0e",
                          order: 1,
                          s3_presigned_url: "https://s3.eu-west-3.amazonaws.com/younzee-wardrobe-items/9158c510-8864-41ba-b12a-f3a2c4731f0e.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWL5DV2AFZE2RH7XA%2F20220811%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20220811T132406Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=37bab84eed416525a29b3d3f349499e6206c30968ce300ca403f18ec0c3aec3a"
                      }
                  ],
              },
              {
                  category_id: "ACC_05",
                  images: [
                      {
                          id: "792c0b03-0efb-4822-a08d-23b0a6345bee",
                          order: 1,
                          s3_presigned_url: "https://s3.eu-west-3.amazonaws.com/younzee-wardrobe-items/792c0b03-0efb-4822-a08d-23b0a6345bee.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWL5DV2AFZE2RH7XA%2F20220811%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20220811T132406Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=159ca12455595b6bb7f9219860c9273f7d4589305d52980341fdc61bf68f703e"
                      },
                      {
                          id: "ffacd76b-bbc9-4d03-99a8-c7d2bf3bbff0",
                          order: 2,
                          s3_presigned_url: "https://s3.eu-west-3.amazonaws.com/younzee-wardrobe-items/ffacd76b-bbc9-4d03-99a8-c7d2bf3bbff0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWL5DV2AFZE2RH7XA%2F20220811%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20220811T132406Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=8511de38c5a7ef13f4d32d316fa93223c1ba5cf8b43969fabb0d108e30be5b8a"
                      }
                  ],
              }
          ],
          season_id: 0,
          title: "style6-3-1",
          updated_at: "2022-07-14T13:44:55",
          user_id: "auth0|6171947d25f203006807f1e5",
          wear_at_night: false,
          weather_id: 3,
          temperature: "57°C"
      },{
          id: "3fdce1a5-92a3-4a83-aa6c-7b1bc45af2c5",
        inserted_at: "2022-07-08T14:25:08",
        items: [
          {
            category_id: "CHAU_04",
            images: [
                {
                    id: "c77cf44b-fcf2-47b9-869d-50229eb257c1",
                    order: 1,
                    s3_presigned_url: "https://s3.eu-west-3.amazonaws.com/younzee-wardrobe-items/c77cf44b-fcf2-47b9-869d-50229eb257c1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWL5DV2AFZE2RH7XA%2F20220811%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20220811T132406Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=448f84729472283ac98eb49af6bc913468e1ca0518f0f468da2bba74e7d7ac8f"
                },
                {
                    id: "d4694ec5-828f-4ddc-a922-438f8e94542b",
                    order: 2,
                    s3_presigned_url: "https://s3.eu-west-3.amazonaws.com/younzee-wardrobe-items/d4694ec5-828f-4ddc-a922-438f8e94542b.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWL5DV2AFZE2RH7XA%2F20220811%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20220811T132406Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=df8a7191695cc1f790ec73b96bb6b13db6074ae4aa117b851631772cf8be0e29"
                }
            ],
        },
          {category_id: "SHIRT_01",
          images: [
            {id: "31acdaf5-a1e1-4292-b89d-78326d208fb4",
            order: 1,
            s3_presigned_url: "https://s3.eu-west-3.amazonaws.com/younzee-wardrobe-items/31acdaf5-a1e1-4292-b89d-78326d208fb4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWL5DV2AFZE2RH7XA%2F20220811%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20220811T130137Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=ef8ff27bbfb00f55455f6c0a469ee11377f4efb6d7d24e9104187c6d816bafbe"
            },{
            id: "ddd69de6-43f3-4836-b159-0cb2ff4c5651",
            order: 2,
            s3_presigned_url: "https://s3.eu-west-3.amazonaws.com/younzee-wardrobe-items/ddd69de6-43f3-4836-b159-0cb2ff4c5651.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWL5DV2AFZE2RH7XA%2F20220811%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20220811T130137Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=c6e6bd8b43b0224cc4490e5737948b39ef907cb2441b84a41deb78ab5a436eb6",}
            ],
          },
          {category_id: "CPLAT_02",
          images: [
            {
              id: "5944d639-e7b2-443d-8a47-ab0e4dfdecdf",
              order: 1,
              s3_presigned_url: "https://s3.eu-west-3.amazonaws.com/younzee-wardrobe-items/5944d639-e7b2-443d-8a47-ab0e4dfdecdf.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWL5DV2AFZE2RH7XA%2F20220811%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20220811T130137Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=7716b7e937ac54109e46e97bafffacba8ef7c5a3696ca333afb0b85269880a41"
          },
          {
              id: "1f698176-040e-44a9-9f1a-fc9944509d4b",
              order: 2,
              s3_presigned_url: "https://s3.eu-west-3.amazonaws.com/younzee-wardrobe-items/1f698176-040e-44a9-9f1a-fc9944509d4b.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWL5DV2AFZE2RH7XA%2F20220811%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20220811T130137Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=5a80286f05c462355cbe64b90cbd77da434557581035bbc1556a1031deff947f"
          }],
          }
        ],
        record_type: "style",
        season_id: 0,
        tags: [{name: "test"}],
        title: "style 1",
        updated_at: "2022-07-08T14:25:08",
        user_id: "auth0|6171947d25f203006807f1e5",
        wear_at_night: true,
        weather_id: 0,
        temperature: '37°C'
        }];*/
        this.brandsMap = this.storageService.getJSONItemFromLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.LocalStorageConstants.BRANDS_AS_MAP);
        this.sizesMap = this.storageService.getJSONItemFromLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.LocalStorageConstants.SIZE_GROUPS_AS_MAP);
        this.categoriesMap = this.storageService.getJSONItemFromLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.LocalStorageConstants.CATEGORIES_AS_MAP);
        this.colors = this.storageService.getJSONItemFromLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.LocalStorageConstants.COLORS_AS_MAP);
        this.fitsMap = this.storageService.getJSONItemFromLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.LocalStorageConstants.FITS_AS_MAP);
        (_a = this.currentStyles[0]) === null || _a === void 0 ? void 0 : _a.items.forEach(item => {
            const category = this.categoriesMap[item.category_id].ancestry.split('.')[0];
            const images = this.styleImages.get(category);
            images.push(item.images[0]);
            this.styleImages.set(category, images);
        });
    }
    onValidateReco() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.sendValidation(true, this.currentStyles[0]);
            /*this.styleImages.set("FAM_01", [])
            this.styleImages.set("FAM_02", [])
            this.styleImages.set("FAM_03", [])
            this.currentStyles[0].items.forEach((item) => {
              const category = this.categoriesMap[item.category_id].ancestry.split('.')[0];
              const images = this.styleImages.get(category)
              images.push(item.images[0])
              this.styleImages.set(category, images)
            })*/
        });
    }
    onRemoveReco() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.sendValidation(false, this.currentStyles[0]);
        });
    }
    sendValidation(isLike, style) {
        let body = {};
        if (isLike) {
            body = {
                last_seen_at: new Date(),
                user_liked_count: style.user_liked_count + 1,
            };
        }
        else {
            body = {
                last_seen_at: new Date(),
                disliked_at: new Date(),
            };
        }
        //send dislike or like
        this.http
            .patch(`${src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.styleUrl}/${style.id}`, body, { observe: 'response' })
            .subscribe((response) => {
            var _a;
            //SUCCESS
            if (isLike) {
                //enlever le style de l'etat
                this.wardrobeState.removeRecoStyleFromIndex(0);
                // l'ajouter ou non a la garde robe
                this.wardrobeState.addNewStyle(style);
                //toaster succes
                this.toaster.presentSuccessToast(`MESSAGE.WARDROBE_ITEMS.STYLE_201`);
            }
            else {
                //enlever le style de l'etat
                this.wardrobeState.removeRecoStyleFromIndex(0);
                //toaster succes error
                this.toaster.presentErrorToast(`MESSAGE.WARDROBE_ITEMS.STYLE_DISLIKE_201`);
            }
            this.styleImages.set('FAM_01', []);
            this.styleImages.set('FAM_02', []);
            this.styleImages.set('FAM_03', []);
            (_a = this.currentStyles[0]) === null || _a === void 0 ? void 0 : _a.items.forEach(item => {
                const category = this.categoriesMap[item.category_id].ancestry.split('.')[0];
                const images = this.styleImages.get(category);
                images.push(item.images[0]);
                this.styleImages.set(category, images);
            });
        }),
            error => {
                console.log(error);
                this.toaster.presentErrorToast('SHARED.ERROR');
            };
        // ERREUR
        // ne rien faire
        // toqster erreur
        /*this.appState.setUserInfos(response.body.data)
          this.toasterService.presentSuccessToast(`MESSAGE.PROFILE.EDIT_${response.status}`);
        }), (error) => {
          console.log(error);
          this.toasterService.presentErrorToast('SHARED.ERROR');
        }*/
    }
};
StyleRecoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: src_shared_state_wardrobe_state_service__WEBPACK_IMPORTED_MODULE_5__.WardrobeStateService },
    { type: src_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient },
    { type: src_shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__.ToasterService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerService }
];
StyleRecoComponent.propDecorators = {
    ionSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonSlides, { static: false },] }]
};
StyleRecoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-style-reco',
        template: _style_reco_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_style_reco_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StyleRecoComponent);



/***/ }),

/***/ 1208:
/*!***************************************************************!*\
  !*** ./src/app/main/wardrobe/style-reco/style-reco.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleRecoModule": () => (/* binding */ StyleRecoModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/shared/shared.module */ 8395);
/* harmony import */ var _style_reco_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-reco-routing.module */ 45941);
/* harmony import */ var _style_reco_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style-reco.component */ 25979);





let StyleRecoModule = class StyleRecoModule {
};
StyleRecoModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [src_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _style_reco_routing_module__WEBPACK_IMPORTED_MODULE_1__.StyleRecoRoutingModule],
        declarations: [_style_reco_component__WEBPACK_IMPORTED_MODULE_2__.StyleRecoComponent],
        providers: [],
    })
], StyleRecoModule);



/***/ }),

/***/ 56730:
/*!*******************************************************************************!*\
  !*** ./src/app/main/wardrobe/style-reco/style-reco.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "/** Ionic CSS Variables **/\n:root {\n  --ion-color-white: #ffffff;\n  --ion-color-black: #000000;\n  /** primary color**/\n  --ion-color-primary: #ffde59;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #111111;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #ffeeae;\n  --ion-color-primary-tint: #ffde59;\n  /** secondary for text**/\n  --ion-color-secondary: #111111;\n  --ion-color-secondary-rgb: 17, 17, 17;\n  --ion-color-secondary-contrast: #ffde59;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0f0f0f;\n  --ion-color-secondary-tint: #292929;\n  /** tertiary used for input background and background icone**/\n  --ion-color-tertiary: #dbdbdb;\n  --ion-color-tertiary-rgb: 219, 219, 219;\n  --ion-color-tertiary-contrast: #000000;\n  --ion-color-tertiary-contrast-rgb: 0, 0, 0;\n  --ion-color-tertiary-shade: #c1c1c1;\n  --ion-color-tertiary-tint: #dfdfdf;\n  /** success **/\n  --ion-color-success: #01db72;\n  --ion-color-success-rgb: 1, 219, 114;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #01c164;\n  --ion-color-success-tint: #1adf80;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #ff1166;\n  --ion-color-danger-rgb: 255, 17, 102;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e00f5a;\n  --ion-color-danger-tint: #ff2976;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: rgba(255, 222, 89, 0.19);\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** Tab-bar **/\n  --ion-toolbar-background: white;\n  --text-font-style: \"IBMPlexSans\";\n  --title-font-style: \"IBMPlexSans\";\n}\n:root .spinner-bubbles {\n  color: var(--ion-color-primary);\n}\n:root ion-tab-button.tab-selected {\n  --color-selected: var(--ion-color-primary);\n}\n:root ion-segment {\n  --background: var(--ion-color-white);\n}\n:root ion-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --color-checked: black;\n  --indicator-transition: none;\n}\n:root ion-button {\n  text-transform: none;\n}\n:host {\n  margin-top: var(--ion-safe-area-top, 0);\n}\nion-content ion-toolbar {\n  --min-height: 46px;\n  padding: 0.5rem 1rem 0.5rem 1rem;\n}\nion-content ion-toolbar ion-back-button {\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n  margin: 0px;\n  min-width: 2.5rem;\n  width: 2.5rem;\n  height: 2.5rem;\n}\n@media screen and (max-width: 370px) {\n  ion-content ion-toolbar ion-back-button {\n    width: 2rem;\n    height: 2rem;\n    min-width: 2rem;\n  }\n}\nion-content ion-toolbar ion-title {\n  font-size: 1.25rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-black);\n  font-weight: 600;\n  padding: 0;\n  text-align: center;\n}\n@media screen and (max-width: 370px) {\n  ion-content ion-toolbar ion-title {\n    font-size: 1rem;\n  }\n}\nion-content .host-container {\n  height: calc(100% - 62px);\n}\nion-content .host-container ion-slides {\n  height: calc(100% - 87px);\n  width: 100%;\n}\nion-content .host-container ion-slides ion-slide {\n  height: 100%;\n  width: 100%;\n  align-items: flex-start;\n  text-align: left;\n}\nion-content .host-container ion-slides ion-slide ion-card {\n  height: calc(100% - 5px);\n  width: 100%;\n  margin: 0;\n  border-radius: 1.25rem;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\nion-content .host-container ion-slides ion-slide ion-card .details-container {\n  padding: 0rem 1rem 0rem 1rem;\n  width: 100%;\n  height: calc(100% - 88px);\n}\nion-content .host-container ion-slides ion-slide ion-card .details-container .category-content {\n  height: 100%;\n}\nion-content .host-container ion-slides ion-slide ion-card .details-container .category-content .category-title {\n  padding: 0.5rem 0 0.5rem 0;\n  margin: 0;\n  height: 34px;\n  font-size: 0.875rem;\n  font-family: \"IBMPlexSansBold\";\n  color: var(--ion-color-secondary);\n  font-weight: normal;\n}\nion-content .host-container ion-slides ion-slide ion-card .details-container .category-content .clothes-picture-container,\nion-content .host-container ion-slides ion-slide ion-card .details-container .category-content .accesories-picture-container {\n  max-height: calc(50% - 34px);\n  width: 100%;\n  display: grid;\n  grid-gap: 0.25rem;\n  place-items: center;\n  grid-auto-rows: minmax(calc(34.3% - 0.5rem), 100%);\n}\nion-content .host-container ion-slides ion-slide ion-card .details-container .category-content .clothes-picture-container cached-img,\nion-content .host-container ion-slides ion-slide ion-card .details-container .category-content .accesories-picture-container cached-img {\n  max-height: 100%;\n  height: auto;\n  border-radius: 0.5rem;\n  width: 100%;\n  max-width: 100%;\n}\nion-content .host-container ion-slides ion-slide ion-card .details-container .category-content .clothes-picture-container img,\nion-content .host-container ion-slides ion-slide ion-card .details-container .category-content .accesories-picture-container img {\n  max-height: 100%;\n  border-radius: 0.5rem;\n}\nion-content .host-container ion-slides ion-slide ion-card .details-container .category-content .clothes-picture-container .clothe-0,\nion-content .host-container ion-slides ion-slide ion-card .details-container .category-content .accesories-picture-container .clothe-0 {\n  grid-area: 1/1;\n}\nion-content .host-container ion-slides ion-slide ion-card .details-container .category-content .clothes-picture-container .clothe-1,\nion-content .host-container ion-slides ion-slide ion-card .details-container .category-content .accesories-picture-container .clothe-1 {\n  grid-area: 1/2;\n}\nion-content .host-container ion-slides ion-slide ion-card .details-container .category-content .clothes-picture-container .clothe-2,\nion-content .host-container ion-slides ion-slide ion-card .details-container .category-content .accesories-picture-container .clothe-2 {\n  grid-area: 1/3;\n}\nion-content .host-container ion-slides ion-slide ion-card .details-container .category-content .accesories-picture-container {\n  max-height: calc(100% - 34px);\n}\nion-content .host-container ion-slides ion-slide ion-card .details-container .category-content .shoes-content,\nion-content .host-container ion-slides ion-slide ion-card .details-container .category-content .accesories-content {\n  height: 25%;\n}\nion-content .host-container ion-slides ion-slide ion-card .details-container .category-content .shoes-content .shoes-picture-container,\nion-content .host-container ion-slides ion-slide ion-card .details-container .category-content .accesories-content .shoes-picture-container {\n  height: calc(100% - 34px);\n  width: 100%;\n  text-align: center;\n}\nion-content .host-container ion-slides ion-slide ion-card .details-container .category-content .shoes-content .shoes-picture-container cached-img,\nion-content .host-container ion-slides ion-slide ion-card .details-container .category-content .accesories-content .shoes-picture-container cached-img {\n  max-height: 100%;\n  height: 100%;\n  border-radius: 0.5rem;\n  width: 100%;\n}\nion-content .host-container ion-slides ion-slide ion-card .details-container .category-content .shoes-content .shoes-picture-container img,\nion-content .host-container ion-slides ion-slide ion-card .details-container .category-content .accesories-content .shoes-picture-container img {\n  max-height: 100%;\n  border-radius: 0.5rem;\n}\nion-content .host-container ion-slides ion-slide ion-card ion-card-content {\n  height: 88px;\n  padding: 0.5rem 1rem 0.5rem 1rem;\n  border-top: 1px solid #dbdbdb;\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n}\nion-content .host-container ion-slides ion-slide ion-card ion-card-content .style-infos {\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  width: calc(100% - 2.5rem);\n}\nion-content .host-container ion-slides ion-slide ion-card ion-card-content .style-infos .style-title {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: 600;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\nion-content .host-container ion-slides ion-slide ion-card ion-card-content .style-infos .weather-moon {\n  display: flex;\n  align-items: center;\n}\nion-content .host-container ion-slides ion-slide ion-card ion-card-content .style-infos .weather-moon .moon-container {\n  height: 2.5rem;\n  width: 2.5rem;\n  background-color: #fbf2d4;\n  border-radius: 1.25rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media screen and (max-width: 370px) {\n  ion-content .host-container ion-slides ion-slide ion-card ion-card-content .style-infos .weather-moon .moon-container {\n    width: 2rem;\n    height: 2rem;\n  }\n}\nion-content .host-container ion-slides ion-slide ion-card ion-card-content .style-infos .weather-moon .moon-container ion-icon {\n  height: 1.5rem;\n  width: 1.5rem;\n}\nion-content .host-container ion-slides ion-slide ion-card ion-card-content .style-infos .weather-moon .moon-text {\n  padding-left: 0.5rem;\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: #292929;\n  font-weight: normal;\n}\nion-content .host-container ion-slides ion-slide ion-card ion-card-content .weather-container {\n  position: relative;\n  align-items: center;\n  display: inline-flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  width: 2.5rem;\n  height: 2.5rem;\n}\n@media screen and (max-width: 370px) {\n  ion-content .host-container ion-slides ion-slide ion-card ion-card-content .weather-container {\n    height: 2rem;\n  }\n}\nion-content .host-container ion-slides ion-slide ion-card ion-card-content .weather-container .weather-content {\n  height: 100%;\n  width: auto;\n  display: inline-flex;\n}\nion-content .host-container ion-slides ion-slide ion-card ion-card-content .weather-container .weather-content .weather {\n  position: relative;\n  align-items: center;\n  display: inline-flex;\n  flex-direction: inline;\n  flex-wrap: nowrap;\n  justify-content: center;\n  height: 100%;\n  width: 2.5rem;\n  background-color: #fbf2d4;\n  border-radius: 1.25rem;\n}\n@media screen and (max-width: 370px) {\n  ion-content .host-container ion-slides ion-slide ion-card ion-card-content .weather-container .weather-content .weather {\n    width: 2rem;\n  }\n}\nion-content .host-container ion-slides ion-slide ion-card ion-card-content .weather-container .weather-content .weather ion-icon {\n  height: 1.5rem;\n  width: 1.5rem;\n}\nion-content .host-container ion-slides ion-slide ion-card ion-card-content .weather-container .weather-content .weather-moon {\n  margin-left: 0.5rem;\n}\nion-content .host-container ion-slides ion-slide ion-card ion-card-content .weather-container .weather-content .weather-moon .moon-text {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: #292929;\n  font-weight: normal;\n}\nion-content .host-container ion-slides ion-slide ion-card ion-card-content .weather-container .temperature {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\nion-content .host-container ion-slides ion-slide ion-card ion-card-content .weather-container .temperature p {\n  margin: 0 1rem 0 1rem;\n  font-size: 1.25rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-black);\n  font-weight: bold;\n}\n@media screen and (max-width: 370px) {\n  ion-content .host-container ion-slides ion-slide ion-card ion-card-content .weather-container .temperature p {\n    font-size: 1rem;\n  }\n}\nion-content .host-container .bottom-buttons {\n  height: 87px;\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly;\n  align-items: center;\n  /*ion-icon{\n            height: 54px;\n            width: 54px;\n            @media screen and (max-width: 370px) {\n                height: 1.5rem;\n                width: 1.5rem;\n            }\n        }*/\n}\nion-content .host-container .bottom-buttons ion-button {\n  --padding-start: 4px;\n  --padding-end: 4px;\n  box-shadow: 0px 4.5px 4.5px rgba(0, 0, 0, 0.25);\n  height: 56px;\n  width: 56px;\n  border-radius: 50%;\n  --border-radius: 50%;\n}\n@media screen and (max-width: 370px) {\n  ion-content .host-container .bottom-buttons ion-button {\n    height: 2.5rem;\n    width: 2.5rem;\n  }\n}\nion-content .host-container .bottom-buttons .paginator {\n  position: relative;\n  align-items: center;\n  display: inline-flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  background-color: var(--ion-color-primary);\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  font-size: 12px;\n  font-family: \"IBMPlexSansMedium\";\n  color: var(--ion-color-black);\n  font-weight: normal;\n}\nion-content .empty-reco-container {\n  height: calc(100% - 62px);\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 1rem 0 1rem;\n}\nion-content .empty-reco-container img {\n  max-height: 25%;\n}\nion-content .empty-reco-container p {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: #292929;\n  font-weight: normal;\n}\n.clothe-count-1 {\n  height: 100% !important;\n}\n.clothe-count-4 {\n  height: 100% !important;\n}\n.clothe-count-5 {\n  height: 100% !important;\n}\n.clothe-count-6 {\n  height: 100% !important;\n}\n.accessory-count-1 {\n  height: 100% !important;\n}\n.accessory-count-2 {\n  height: 100% !important;\n}\n.accessory-count-3 {\n  height: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwic3R5bGUtcmVjby5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3RoZW1lL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLDBCQUFBO0FBb0JBO0VBQ0UsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHFDQUFBO0VBQ0EsdUNBQUE7RUFDQSxpREFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSw2REFBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsWUFBQTtFQUNBLDJDQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQU1BLGNBQUE7RUFtQkEsK0JBQUE7RUFDQSxnQ0FB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ekMsdUJEc05pQztFQUMzQiwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUN2UE4sZUR3UG9CO0VDdlBwQixnQ0R1UDBCO0VDdFAxQiw2QkRzUCtDO0VDclAvQyxtQkRxUHVFO0FBZ0h6RTtBQWxHRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBb0dKO0FBbEdJO0VBQ0UsZUFBQTtBQW9HTjtBQWpHSTtFQ2xSRixlRG1Sa0I7RUNsUmxCLDBCRGtSd0I7RUNqUnhCLGNGckJRO0VFc0JSLG1CQUpjO0FEMFhoQjtBQWpHQTtFQUNFLHVCQUFBO0FBb0dGO0FBN0ZBO0VBQ0UsdUJBQUE7QUFnR0Y7QUE3RkE7RUFDRSx1QkFBQTtBQWdHRjtBQTdGQTtFQUNFLHVCQUFBO0FBZ0dGO0FBN0ZBO0VBQ0UsdUJBQUE7QUFnR0Y7QUE3RkE7RUFDRSx1QkFBQTtBQWdHRjtBQTdGQTtFQUNFLHVCQUFBO0FBZ0dGIiwiZmlsZSI6InN0eWxlLXJlY28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cblxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG5cbi8vIGNvbG9yc1xuJGJsYWNrMjogIzQwNDAzZjtcbiRncmF5NjAwOiAjMTExMTExOyAvL3VzZWRcbiRncmF5NTAwOiAjMjkyOTI5OyAvL3VzZWRcbiRncmF5NDAwOiAjNTk1OTU5OyAvL3VzZWRcbiRncmF5MzAwOiAjODg4ODg4OyAvL3VzZWRcbiRncmF5MjAwOiAjQjhCOEI4O1xuJGdyYXkyOiAjOWQ5Yzk5O1xuJGdyYXkzOiAjZGJkYmRiO1xuJHllbGxvdzEwMDogI2ZmZmNlZjtcbiR5ZWxsb3cyMDA6ICNmZmY1Y2U7XG4keWVsbG93MzogI2ZkZTg5NjtcbiR5ZWxsb3c0OiAjZmNlZWI2O1xuJHllbGxvdzU6ICNmYmYyZDQ7XG4keWVsbG93NjogI0ZGREU1OTtcbiR3aGl0ZTgwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4kZGFyazc1OiByZ2JhKDAsIDAsIDAsIDAuMjUpOyAvL2J1dHRvbnMgc2hhZG93XG5cbjpyb290IHtcbiAgLS1pb24tY29sb3Itd2hpdGU6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWJsYWNrOiAjMDAwMDAwO1xuICAvKiogcHJpbWFyeSBjb2xvcioqL1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjZmZkZTU5O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNTYsIDEyOCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjMTExMTExO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogI2ZmZWVhZTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjZmZkZTU5O1xuXG4gIC8qKiBzZWNvbmRhcnkgZm9yIHRleHQqKi9cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjMTExMTExO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiAxNywgMTcsIDE3O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmRlNTk7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzBmMGYwZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICMyOTI5Mjk7XG5cbiAgLyoqIHRlcnRpYXJ5IHVzZWQgZm9yIGlucHV0IGJhY2tncm91bmQgYW5kIGJhY2tncm91bmQgaWNvbmUqKi9cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNkYmRiZGI7IC8vc2FtZSBhcyBncmF5M1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDIxOSwgMjE5LCAyMTk7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjYzFjMWMxO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjZGZkZmRmO1xuXG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMDFkYjcyO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogMSwgMjE5LCAxMTQ7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMDFjMTY0O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICMxYWRmODA7XG5cbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmM0MDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDE5NiwgOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGFjMDg7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmY2EyMjtcblxuICAvKiogZGFuZ2VyICoqL1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNmZjExNjY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI1NSwgMTcsIDEwMjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNlMDBmNWE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZmYyOTc2O1xuXG4gIC8qKiBkYXJrICoqL1xuICAtLWlvbi1jb2xvci1kYXJrOiAjMjIyNDI4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcblxuICAvKiogbWVkaXVtICoqL1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5Mjk0OWM7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE0NiwgMTQ4LCAxNTY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODA4Mjg5O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogIzlkOWZhNjtcblxuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiByZ2JhKDI1NSwgMjIyLCA4OSwgMC4xOSk7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjQ0LCAyNDUsIDI0ODtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNWY2Zjk7XG5cbiAgLnNwaW5uZXItYnViYmxlcyB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuXG4gIC8qKiBUYWItYmFyICoqL1xuICBpb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQge1xuICAgIC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuXG4gIGlvbi1zZWdtZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIH1cblxuICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLS1jb2xvci1jaGVja2VkOiBibGFjaztcbiAgICAtLWluZGljYXRvci10cmFuc2l0aW9uOiBub25lO1xuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIH1cblxuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLXRleHQtZm9udC1zdHlsZTogJ0lCTVBsZXhTYW5zJztcbiAgLS10aXRsZS1mb250LXN0eWxlOiAnSUJNUGxleFNhbnMnO1xufVxuXG4vLyBWZXJpZmllZFxuJHdpZHRoLXNkOiAzMDBweDsgLy9mb2xkXG4kd2lkdGgtbWQ6IDM4MHB4OyAvL2lwaG9uZSBTRVxuJHdpZHRoLWxkOiA0MTJweDsgLy9pcGhvbmUgWFJcbiR3aWR0aC14bGQ6IDc2OHB4OyAvL2lwYWQiLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi8uLi90aGVtZS92YXJpYWJsZXMuc2Nzcyc7XG5cbjpob3N0IHtcbiAgbWFyZ2luLXRvcDogdmFyKC0taW9uLXNhZmUtYXJlYS10b3AsIDApO1xufVxuXG5pb24tY29udGVudCB7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLW1pbi1oZWlnaHQ6IDQ2cHg7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW0gMC41cmVtIDFyZW07XG5cbiAgICBpb24tYmFjay1idXR0b24ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjVyZW07XG4gICAgICAtLXBhZGRpbmctZW5kOiAwLjVyZW07XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIG1pbi13aWR0aDogMi41cmVtO1xuICAgICAgd2lkdGg6IDIuNXJlbTtcbiAgICAgIGhlaWdodDogMi41cmVtO1xuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzBweCkge1xuICAgICAgICB3aWR0aDogMnJlbTtcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICBtaW4td2lkdGg6IDJyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW9uLXRpdGxlIHtcbiAgICAgIEBpbmNsdWRlIHRleHQoMS4yNXJlbSwgJ0lCTVBsZXhTYW5zJywgdmFyKC0taW9uLWNvbG9yLWJsYWNrKSwgNjAwKTtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3MHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuaG9zdC1jb250YWluZXIge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjJweCk7XG5cbiAgICBpb24tc2xpZGVzIHtcbiAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gODdweCk7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgaW9uLXNsaWRlIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNXB4KTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAkZGFyazc1O1xuXG4gICAgICAgICAgLmRldGFpbHMtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDByZW0gMXJlbSAwcmVtIDFyZW07XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gODhweCk7XG5cbiAgICAgICAgICAgIC5jYXRlZ29yeS1jb250ZW50IHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgICAgICAgIC5jYXRlZ29yeS10aXRsZSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDAgMC41cmVtIDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzRweDtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0ZXh0KDAuODc1cmVtLCAnSUJNUGxleFNhbnNCb2xkJyk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY2xvdGhlcy1waWN0dXJlLWNvbnRhaW5lcixcbiAgICAgICAgICAgICAgLmFjY2Vzb3JpZXMtcGljdHVyZS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoNTAlIC0gMzRweCk7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICBncmlkLWdhcDogMC4yNXJlbTtcbiAgICAgICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoY2FsYygzNC4zJSAtIDAuNXJlbSksIDEwMCUpO1xuXG4gICAgICAgICAgICAgICAgY2FjaGVkLWltZyB7XG4gICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmNsb3RoZS0wIHtcbiAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogMS8xO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5jbG90aGUtMSB7XG4gICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IDEvMjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuY2xvdGhlLTIge1xuICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiAxLzM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmFjY2Vzb3JpZXMtcGljdHVyZS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDM0cHgpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnNob2VzLWNvbnRlbnQsXG4gICAgICAgICAgICAgIC5hY2Nlc29yaWVzLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjUlO1xuXG4gICAgICAgICAgICAgICAgLnNob2VzLXBpY3R1cmUtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzRweCk7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgICAgY2FjaGVkLWltZyB7XG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgICAgICAgaGVpZ2h0OiA4OHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW0gMC41cmVtIDFyZW07XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGdyYXkzO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgICAuc3R5bGUtaW5mb3Mge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyLjVyZW0pO1xuXG4gICAgICAgICAgICAgIC5zdHlsZS10aXRsZSB7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdGV4dCgxcmVtLCAnSUJNUGxleFNhbnMnLCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSwgNjAwKTtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0ZXh0LW92ZXJmbG93KCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAud2VhdGhlci1tb29uIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICAubW9vbi1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMi41cmVtO1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZjJkNDtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEuMjVyZW07XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzBweCkge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5tb29uLXRleHQge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0ZXh0KDFyZW0sICdJQk1QbGV4U2FucycsICRncmF5NTAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLndlYXRoZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgQGluY2x1ZGUgZmxleChyb3csIGNlbnRlciwgZmxleC1zdGFydCwgbm93cmFwLCB0cnVlLCByZWxhdGl2ZSk7XG4gICAgICAgICAgICAgIHdpZHRoOiAyLjVyZW07XG4gICAgICAgICAgICAgIGhlaWdodDogMi41cmVtO1xuXG4gICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3MHB4KSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLndlYXRoZXItY29udGVudCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXG4gICAgICAgICAgICAgICAgLndlYXRoZXIge1xuICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgZmxleChpbmxpbmUsIGNlbnRlciwgY2VudGVyLCBub3dyYXAsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDIuNXJlbTtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR5ZWxsb3c1O1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcblxuICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzcwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDJyZW07XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLndlYXRoZXItbW9vbiB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuXG4gICAgICAgICAgICAgICAgICAubW9vbi10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdGV4dCgxcmVtLCAnSUJNUGxleFNhbnMnLCAkZ3JheTUwMCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnRlbXBlcmF0dXJlIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMXJlbSAwIDFyZW07XG4gICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0ZXh0KDEuMjVyZW0sICdJQk1QbGV4U2FucycsIHZhcigtLWlvbi1jb2xvci1ibGFjayksIGJvbGQpO1xuXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzBweCkge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJvdHRvbS1idXR0b25zIHtcbiAgICAgIGhlaWdodDogODdweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAgICAgICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0LjVweCA0LjVweCAkZGFyazc1O1xuICAgICAgICBoZWlnaHQ6IDU2cHg7XG4gICAgICAgIHdpZHRoOiA1NnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3MHB4KSB7XG4gICAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgICAgd2lkdGg6IDIuNXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucGFnaW5hdG9yIHtcbiAgICAgICAgQGluY2x1ZGUgZmxleChyb3csIGNlbnRlciwgY2VudGVyLCBub3dyYXAsIHRydWUpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgQGluY2x1ZGUgdGV4dCgxMnB4LCAnSUJNUGxleFNhbnNNZWRpdW0nLCB2YXIoLS1pb24tY29sb3ItYmxhY2spLCBub3JtYWwpO1xuICAgICAgfVxuXG4gICAgICAvKmlvbi1pY29ue1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTRweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTRweDtcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzBweCkge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9Ki9cbiAgICB9XG4gIH1cblxuICAuZW1wdHktcmVjby1jb250YWluZXIge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjJweCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAxcmVtIDAgMXJlbTtcblxuICAgIGltZyB7XG4gICAgICBtYXgtaGVpZ2h0OiAyNSVcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIEBpbmNsdWRlIHRleHQoMXJlbSwgJ0lCTVBsZXhTYW5zJywgJGdyYXk1MDApO1xuICAgIH1cbiAgfVxufVxuXG4uY2xvdGhlLWNvdW50LTEge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudFxufVxuXG4uY2xvdGhlLWNvdW50LTIge31cblxuLmNsb3RoZS1jb3VudC0zIHt9XG5cbi5jbG90aGUtY291bnQtNCB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50XG59XG5cbi5jbG90aGUtY291bnQtNSB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50XG59XG5cbi5jbG90aGUtY291bnQtNiB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50XG59XG5cbi5hY2Nlc3NvcnktY291bnQtMSB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50XG59XG5cbi5hY2Nlc3NvcnktY291bnQtMiB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50XG59XG5cbi5hY2Nlc3NvcnktY291bnQtMyB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50XG59IiwiQG1peGluIHRpdGxlKCRmb250LXNpemU6IDJyZW0sXG4gICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJyxcbiAgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSxcbiAgJGZvbnQtd2VpZ2h0OiBib2xkKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuXG5cbkBtaXhpbiBzaW1wbGVfYnV0dG9uKCR3aWR0aDogMjUlLCAkaGVpZ2h0OiAyLjVyZW0sICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkpIHtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xuICAtLWNvbG9yOiAkY29sb3I7XG59XG5cbkBtaXhpbiBpY29uKCR3aWR0aDogMXJlbSwgJGhlaWdodDogMXJlbSkge1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG59XG5cbkBtaXhpbiB0ZXh0KCRmb250LXNpemU6IDAuODc1cmVtLFxuICAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycsXG4gICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSksXG4gICRmb250LXdlaWdodDogbm9ybWFsKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIHRleHQtb3ZlcmZsb3coKSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5cbi8vdmVyaWZpZWRcblxuQG1peGluIGZsZXgoJGRpcmVjdGlvbjogcm93LCAkYWxpZ24taXRlbXM6IGNlbnRlciwgJGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCwgJHdyYXA6IG5vd3JhcCwgJGlubGluZTogZmFsc2UsICRwb3NpdGlvbjogcmVsYXRpdmUpIHtcbiAgcG9zaXRpb246ICRwb3NpdGlvbjtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbi1pdGVtcztcblxuICBAaWYgJGlubGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIH1cblxuICBAZWxzZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xuICBmbGV4LXdyYXA6ICR3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5LWNvbnRlbnQ7XG59XG5cbkBtaXhpbiBidXR0b24oJHdpZHRoOiAyNSUsICRoZWlnaHQ6IDIuNXJlbSwgJGZvbnQtc2l6ZTogMC44NzVyZW0sICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJywgJGZvbnQtd2VpZ2h0OiA2MDApIHtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG4gIG1pbi1oZWlnaHQ6ICRoZWlnaHQ7XG59XG5cbkBtaXhpbiB3aGl0ZVRpdGxlKCRmb250LXNpemU6IDEuNzVyZW0sICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKSwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiB3aGl0ZVN1YnRpdGxlKCRmb250LXNpemU6IDFyZW0sICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKSwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiBibGFja1RpdGxlKCRmb250LXNpemU6IDEuNzVyZW0sICRjb2xvcjogJGdyYXk1MDAsICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycsICkge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5AbWl4aW4gYmxhY2tTdWJ0aXRsZSgkZm9udC1zaXplOiAxcmVtLCAkY29sb3I6ICRncmF5NTAwLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIG1lZGl1bVRleHQoJGZvbnQtc2l6ZTogMC43NXJlbSwgJGNvbG9yOiAkZ3JheTUwMCwgJGZvbnQtd2VpZ2h0OiA1MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiByZWd1bGFyVGV4dCgkZm9udC1zaXplOiAxcmVtLCAkY29sb3I6ICRncmF5NjAwLCAkZm9udC13ZWlnaHQ6IDQwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIHNlbWlCb2xkVGV4dCgkZm9udC1zaXplOiAycmVtLCAkY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSksICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gYm9sZFRleHQoJGZvbnQtc2l6ZTogMS4xMjVyZW0sICRjb2xvcjogJGdyYXk2MDAsICRmb250LXdlaWdodDogNzAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufSJdfQ== */";

/***/ }),

/***/ 32622:
/*!*******************************************************************************!*\
  !*** ./src/app/main/wardrobe/style-reco/style-reco.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\" defaultHref=\"/main/wardrobe\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'RECOMMENDATIONS.RECO_TODAY' | translate}}</ion-title>\n  </ion-toolbar>\n  <div class=\"host-container\" *ngIf=\"currentStyles.length !== 0; else noAvailableReco\">\n    <ion-slides [options]=\"slidesOpts\">\n      <ion-slide *ngFor=\"let currentStyle of currentStyles\">\n        <ion-card>\n          <div class=\"details-container\">\n            <div class=\"category-content\" *ngIf=\"styleImages.get('FAM_01').length > 0\">\n              <p class=\"category-title\">{{'WARDROBE.CATEGORIES.FAM_01' | translate}}</p>\n              <div class=\"clothes-picture-container\">\n                <cached-img class=\"clothe-{{ id }} clothe-count-{{styleImages.get('FAM_01').length}}\" *ngFor=\"let image of styleImages.get('FAM_01'); let id = index\"\n                  [src]=\"image.s3_presigned_url\"></cached-img>\n              </div>\n              <div class=\"accesories-content\" *ngIf=\"styleImages.get('FAM_03').length > 0\">\n                <p class=\"category-title\">{{'WARDROBE.CATEGORIES.FAM_03' | translate}}</p>\n                <div class=\"accesories-picture-container\">\n                  <cached-img class=\"clothe-{{ id }} accessory-count-{{styleImages.get('FAM_03').length}}\" *ngFor=\"let image of styleImages.get('FAM_03'); let id = index\"\n                    [src]=\"image.s3_presigned_url\"></cached-img>\n                </div>\n              </div>\n              <div class=\"shoes-content\" *ngIf=\"styleImages.get('FAM_02').length > 0\">\n                <p class=\"category-title\">{{'WARDROBE.CATEGORIES.FAM_02' | translate}}</p>\n                <div class=\"shoes-picture-container\">\n                  <cached-img *ngFor=\"let image of styleImages.get('FAM_02')\" [src]=\"image.s3_presigned_url\"></cached-img>\n                </div>\n              </div>\n            </div>\n          </div>\n          <ion-card-content>\n            <div class=\"style-infos\">\n              <p class=\"style-title\">{{ currentStyle.title }}</p>\n              <div class=\"weather weather-moon\" *ngIf=\"currentStyle.wear_at_night\">\n                <div class=\"moon-container\">\n                  <ion-icon src=\"../../../assets/icon/moon.svg\"></ion-icon>\n                </div>\n                <span class=\"moon-text\"> {{'WARDROBE.STYLES.FORM.WEATHER.NIGHT' | translate}}</span>\n              </div>\n            </div>\n            <div class=\"weather-container\">\n              <div class=\"weather-content\">\n                <div class=\"weather\">\n                  <ion-icon *ngIf=\"currentStyle.weather_id === 0\" src=\"../../../assets/icon/sunny.svg\"></ion-icon>\n                  <ion-icon *ngIf=\"currentStyle.weather_id === 1\" src=\"../../../assets/icon/cloudy.svg\"></ion-icon>\n                  <ion-icon *ngIf=\"currentStyle.weather_id === 2\" src=\"../../../assets/icon/overcast.svg\"></ion-icon>\n                  <ion-icon *ngIf=\"currentStyle.weather_id === 3\" src=\"../../../assets/icon/rainy.svg\"></ion-icon>\n                  <ion-icon *ngIf=\"currentStyle.weather_id === 4\" src=\"../../../assets/icon/snow.svg\"></ion-icon>\n                </div>\n              </div>\n              <!--<div class=\"temperature\">\n                <p>{{currentStyle.temperature}}</p>\n              </div>-->\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n    <div class=\"bottom-buttons\">\n      <ion-button color=\"white\" (click)=\"onRemoveReco()\" mode=\"ios\">\n        <ion-icon color=\"danger\" slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n      </ion-button>\n      <div class=\"paginator\">\n        <sup>1</sup>/<sub>{{ currentStyles.length }}</sub>\n      </div>\n      <ion-button color=\"white\" (click)=\"onValidateReco()\" mode=\"ios\">\n        <ion-icon color=\"primary\" slot=\"icon-only\" name=\"heart\"></ion-icon>\n      </ion-button>\n    </div>\n  </div>\n  <ng-template #noAvailableReco>\n    <div class=\"empty-reco-container\">\n      <img src=\"../../../assets/images/no_recommendation_styles.svg\" />\n      <p>{{'RECOMMENDATIONS.NO_RECO' | translate}}</p>\n    </div>\n  </ng-template>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_main_wardrobe_style-reco_style-reco_module_ts.js.map