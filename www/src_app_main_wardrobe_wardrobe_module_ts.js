"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_main_wardrobe_wardrobe_module_ts"],{

/***/ 15354:
/*!**********************************************************!*\
  !*** ./src/app/main/wardrobe/wardrobe-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WardrobeRoutingModule": () => (/* binding */ WardrobeRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _wardrobe_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wardrobe.component */ 84943);




const routes = [
    {
        path: '',
        component: _wardrobe_component__WEBPACK_IMPORTED_MODULE_0__.WardrobeComponent,
    },
    {
        path: 'add-article',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_main_wardrobe_add-article-wardrobe_add-article-wardrobe_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./add-article-wardrobe/add-article-wardrobe.module */ 6500)).then(m => m.AddArticleWardrobeModule),
    },
    {
        path: 'modify-article/:article',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_main_wardrobe_modify-article-wardrobe_modify-article-wardrobe_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modify-article-wardrobe/modify-article-wardrobe.module */ 66348)).then(m => m.ModifyArticleWardrobeModule),
    },
    {
        path: 'article-details/:id/:categoryId',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_main_wardrobe_article-details_article-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./article-details/article-details.module */ 35751)).then(m => m.ArticleDetailsModule),
    },
    {
        path: 'add-style',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_main_wardrobe_add-style_add-style_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./add-style/add-style.module */ 24223)).then(m => m.AddStyleModule),
    },
    {
        path: 'style-details/:style',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_main_wardrobe_style-details_style-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./style-details/style-details.module */ 63033)).then(m => m.StyleDetailsModule),
    },
    {
        path: 'modify-style/:style',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_main_wardrobe_modify-style_modify-style_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modify-style/modify-style.module */ 11210)).then(m => m.ModifyStyleModule),
    },
    {
        path: 'style-reco',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_main_wardrobe_style-reco_style-reco_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./style-reco/style-reco.module */ 1208)).then(m => m.StyleRecoModule),
    },
];
let WardrobeRoutingModule = class WardrobeRoutingModule {
};
WardrobeRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WardrobeRoutingModule);



/***/ }),

/***/ 84943:
/*!*****************************************************!*\
  !*** ./src/app/main/wardrobe/wardrobe.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WardrobeComponent": () => (/* binding */ WardrobeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _wardrobe_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wardrobe.component.html?ngResource */ 45958);
/* harmony import */ var _wardrobe_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wardrobe.component.scss?ngResource */ 18842);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ 63947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var src_shared_components_wardrobe_filters_wardrobe_filters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/components/wardrobe-filters/wardrobe-filters.component */ 27729);
/* harmony import */ var src_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/services/storage.service */ 45785);
/* harmony import */ var src_shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/services/toaster.service */ 29238);
/* harmony import */ var src_shared_state_wardrobe_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/state/wardrobe-state.service */ 40084);
/* harmony import */ var src_shared_utils_subscriber_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/utils/subscriber-component */ 16391);
/* harmony import */ var _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor-community/firebase-analytics */ 67285);
















let WardrobeComponent = class WardrobeComponent extends src_shared_utils_subscriber_component__WEBPACK_IMPORTED_MODULE_7__.SubscriberComponent {
    constructor(modalController, alert, router, http, popoverController, storageService, wardrobeState, cd, spinner, toaster, actionSheetController) {
        super();
        this.modalController = modalController;
        this.alert = alert;
        this.router = router;
        this.http = http;
        this.popoverController = popoverController;
        this.storageService = storageService;
        this.wardrobeState = wardrobeState;
        this.cd = cd;
        this.spinner = spinner;
        this.toaster = toaster;
        this.actionSheetController = actionSheetController;
        this.segmentsTitles = src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.WardRobeConstants.SEGMENTS_TITLES;
        this.slidesOptions = src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.WardRobeConstants.slidesOptions;
        this.slidesTitles = src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.WardRobeConstants.SLIDES_TITLES;
        this.activeCategory = 0;
        this.currentSegment = this.segmentsTitles[0];
        this.wardrobeMode = src_shared_state_wardrobe_state_service__WEBPACK_IMPORTED_MODULE_6__.WardrobeOperation.Normal;
        this.articles$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Observable(null);
        this.allArticles = null;
        this.cardsToDelete = [];
    }
    ngOnInit() {
        setTimeout(() => {
            this.isImageLoading = true;
        }, 0);
        /*this.platform.backButton.subscribe(() => {
          if (this.wardrobeState.getCurrentState().value === WardrobeOperation.Edit) {
            this.wardrobeState.changeWardrobeState(WardrobeOperation.Normal);
          };
        })*/
        this.styles$ = this.wardrobeState.getAllStyles();
        this.categoriesAsMap = this.storageService.getJSONItemFromLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.LocalStorageConstants.CATEGORIES_AS_MAP);
        this.brandsAsMap = this.storageService.getJSONItemFromLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.LocalStorageConstants.BRANDS_AS_MAP);
        this.genderIndexes = src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.WardRobeConstants.categoriesIndex;
        //this.colors = this.storageService.getJSONItemFromLocalStorage(LocalStorageConstants.COLORS);
        this.colors = this.storageService.getJSONItemFromLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.LocalStorageConstants.COLORS_AS_MAP);
        //const subcri = this.wardrobeState.getCurrentState().subscribe((value) => this.wardrobeMode = value);
        this.recoStyles$ = this.wardrobeState.getRecommendedStyles();
        this.subscription =
            (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([this.wardrobeState.extractArticlesByCategoryId(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.WardrobeCategory.CLOTHES),
                this.wardrobeState.extractArticlesByCategoryId(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.WardrobeCategory.SHOES),
                this.wardrobeState.extractArticlesByCategoryId(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.WardrobeCategory.ACCESSORIES)]).subscribe((categoryValues) => {
                console.log("plop" + categoryValues);
                this.allArticles = categoryValues.reduce((acc, val) => acc.concat([...val]), []);
                console.log(this.allArticles);
            });
        this.cd.detectChanges();
        //TODO: Change to get ALL articles from wardrobe
    }
    ionViewDidEnter() {
        this.spinner.hide('appSpinner');
        console.log('fini');
        _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_8__.FirebaseAnalytics.setScreenName({
            screenName: "WardrobeScreen",
            nameOverride: "WardrobeScreen",
        });
        //this.spinner.show('index');
    }
    segmentChanged(ev) {
        _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_8__.FirebaseAnalytics.logEvent({
            name: "wardrobe_segment_changed",
            params: {
                segment: ev.detail.value
            },
        });
        this.currentSegment = ev.detail.value;
        this.cardsToDelete = [];
        this.wardrobeMode = src_shared_state_wardrobe_state_service__WEBPACK_IMPORTED_MODULE_6__.WardrobeOperation.Normal;
        //TODO: when style and TOUS seront pret
        this.cd.detectChanges();
    }
    /*  test(index: number) {
        this.spinner.hide(index.toString());
      }*/
    onOpenFilterModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_shared_components_wardrobe_filters_wardrobe_filters_component__WEBPACK_IMPORTED_MODULE_3__.WardrobeFiltersComponent,
                //cssClass: 'my-custom-modal-css2',
                breakpoints: [0, 0.2, 0.5, 0.75, 1],
                initialBreakpoint: 0.5,
            });
            return yield modal.present();
        });
    }
    onSelectCategory(category, index) {
        //TODO: change yhen TOUS is ready
        this.cardsToDelete = [];
        this.activeCategory = index;
        if (index === 0) {
            //this.articles$ = this.allArticles;
        }
        else {
            this.articles$ = this.wardrobeState.extractArticlesByCategoryId(category).asObservable();
        }
    }
    /*
    modal.onDidDismiss().then((category) => {
      if (category.data?.categoryValue && category.data) {
        this.articleForm.controls['size'].reset();
        this.selectedCategory = category.data.categoryValue;
        this.articleForm.controls['category'].setValue(category.data.categoryValue);
        this.categoryAncestors = category.data.ancestors;
      } else if (category.data) {
        //reset controls category
        this.articleForm.controls['size'].reset();
        this.selectedCategory = category.data.categoryValue;
        this.articleForm.controls['category'].reset();
      }
    });
    await modal.present();
  }*/
    onGoAddPage(currentSegment) {
        if (this.wardrobeMode === 'normal') {
            currentSegment === this.segmentsTitles[0]
                ? this.router.navigate(['/main/wardrobe/add-article'])
                : this.router.navigate(['/main/wardrobe/add-style']);
        }
        if (this.wardrobeMode === 'edit' && this.cardsToDelete.length) {
            const type = currentSegment === this.segmentsTitles[0] ? 'vêtement(s)' : 'style(s)';
            this.handleButtonClick(type);
        }
    }
    loadMoreStyles(loadMore = false, event) {
        if (loadMore) {
            this.pageOffset += 1;
        }
        //if(event) { event.target.complete()}
        setTimeout(() => {
            console.log('Done');
            event.target.complete();
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            /*if (data.length === 1000) {
              event.target.disabled = true;
            }*/
        }, 500);
    }
    onGoStyleReco() {
        this.router.navigate(['/main/wardrobe/style-reco']);
    }
    handleButtonClick(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: `Ces ${type} seront supprimés de votre garde robe Younzee`,
                //cssClass: 'alert-delete-button',
                buttons: [
                    {
                        text: `Supprimer ${this.cardsToDelete.length} ${type}`,
                        role: 'destructive',
                        id: 'modalselect-deletearticle-button',
                        handler: () => {
                            console.log('Confirm Okay');
                            if (this.currentSegment === src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.WardRobeConstants.SEGMENTS_TITLES[0]) {
                                const item_ids = this.cardsToDelete.map(item => item.id); //nedd refacto array of ids
                                this.http
                                    .post(`${src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.itemsUrl}/bulk_delete`, { item_ids }, { observe: 'response' })
                                    .subscribe(result => {
                                    this.activeCategory === 0
                                        //TODO: ENZO => remove deletedid and receive just array
                                        ? this.wardrobeState.deleteItemsInAll(result.body.deleted_ids, this.cardsToDelete)
                                        : this.wardrobeState.deleteItems(result.body.deleted_ids, this.genderIndexes[this.activeCategory - 1]);
                                    this.cardsToDelete = [];
                                    this.wardrobeMode = src_shared_state_wardrobe_state_service__WEBPACK_IMPORTED_MODULE_6__.WardrobeOperation.Normal;
                                    this.toaster.presentSuccessToast('MESSAGE.WARDROBE_ITEMS.DELETE');
                                }),
                                    error => {
                                        console.log(error);
                                        this.toaster.presentErrorToast('MESSAGE.WARDROBE_ITEMS.422');
                                    };
                            }
                            else {
                                const style_ids = this.cardsToDelete.map(style => style.id); //need refacto array of ids
                                this.http
                                    .post(`${src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.styleUrl}/bulk_delete`, { style_ids }, { observe: 'response' })
                                    .subscribe(result => {
                                    this.wardrobeState.deleteStyles(result.body);
                                    this.cardsToDelete = [];
                                    this.wardrobeMode = src_shared_state_wardrobe_state_service__WEBPACK_IMPORTED_MODULE_6__.WardrobeOperation.Normal;
                                    this.toaster.presentSuccessToast('MESSAGE.WARDROBE_ITEMS.DELETE');
                                }),
                                    error => {
                                        console.log(error);
                                        this.toaster.presentErrorToast('MESSAGE.WARDROBE_ITEMS.422');
                                    };
                            }
                        },
                    },
                    {
                        text: 'Annuler',
                        id: 'modalselect-canceldeletearticle-button',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        },
                    },
                ],
            });
            yield actionSheet.present();
        });
    }
    /*const alert = await this.alert.create({
      message: `Ces ${type} seront supprimés de votre garde robe Younzee`,
      buttons: [
        {
          text: `Supprimer ${this.cardsToDelete.length} ${type}`,
          cssClass: 'alert-delete-button',
          handler: () => {
            console.log('Confirm Okay');
            if (this.currentSegment === WardRobeConstants.SEGMENTS_TITLES[0]) {
              const item_ids = this.cardsToDelete.map((item) => item.id); //nedd refacto array of ids
              this.http.post(`${AppConstants.itemsUrl}/bulk_delete`, { item_ids }, { observe: 'response' }).subscribe((result) => {
                this.activeCategory === 0 ? this.wardrobeState.deleteItemsInAll(result.body) : this.wardrobeState.deleteItems(result.body, this.genderIndexes[this.activeCategory - 1]);
                this.cardsToDelete = [];
                this.wardrobeMode = WardrobeOperation.Normal;
              }),
                (error) => {
                  console.log(error)
                }
            } else {
              const style_ids = this.cardsToDelete.map((style) => style.id); //need refacto array of ids
              this.http.post(`${AppConstants.styleUrl}/bulk_delete`, { style_ids }, { observe: 'response' }).subscribe((result) => {
                this.wardrobeState.deleteStyles(result.body);
                this.cardsToDelete = [];
                this.wardrobeMode = WardrobeOperation.Normal;
              }),
                (error) => {
                  console.log(error)
                }
            }
          }
        },
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'alert-cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }
      ],
      backdropDismiss: false,
    });
  
    await alert.present();*/
    /*async onOpenNewArticleModal() {
      const modal = await this.modalController.create({
        component: AddArticleModalComponent,
        cssClass: 'my-custom-modal-css',
        backdropDismiss: false,
      });
      modal.onDidDismiss().then((productAdded) => {
        if (productAdded?.data) {
          this.articles.push(productAdded.data);
        }
      });
      return await modal.present();
    }*/
    onSeeDetails(article, index) {
        if (this.wardrobeMode === src_shared_state_wardrobe_state_service__WEBPACK_IMPORTED_MODULE_6__.WardrobeOperation.Normal) {
            this.router.navigate(['/main/wardrobe/article-details', article.id, article.category_id]);
        }
        else {
            const htmlElement = document.getElementById('card-' + index);
            const articleIndex = this.cardsToDelete.findIndex(elem => elem.id === article.id);
            if (articleIndex === -1) {
                //htmlElement.style.borderWidth = '3px';
                this.cardsToDelete.push(article);
            }
            else if (articleIndex !== -1) {
                //htmlElement.style.borderWidth = '1px';
                this.cardsToDelete.splice(articleIndex, 1);
            }
        }
    }
    onSeeStyleDetails(style, index) {
        if (this.wardrobeMode === src_shared_state_wardrobe_state_service__WEBPACK_IMPORTED_MODULE_6__.WardrobeOperation.Normal) {
            //go to see details style
            this.router.navigate(['/main/wardrobe/style-details', JSON.stringify(style)]);
        }
        else {
            const htmlElement = document.getElementById('card-' + index);
            const articleIndex = this.cardsToDelete.findIndex(elem => elem.id === style.id);
            if (articleIndex === -1) {
                //htmlElement.style.borderWidth = '3px';
                this.cardsToDelete.push(style);
            }
            else if (articleIndex !== -1) {
                //htmlElement.style.borderWidth = '1px';
                this.cardsToDelete.splice(articleIndex, 1);
            }
        }
    }
    ionViewWillLeave() {
        this.subscription.unsubscribe;
    }
    onChangeWardrobeMode() {
        this.wardrobeMode =
            this.wardrobeMode === src_shared_state_wardrobe_state_service__WEBPACK_IMPORTED_MODULE_6__.WardrobeOperation.Normal
                ? src_shared_state_wardrobe_state_service__WEBPACK_IMPORTED_MODULE_6__.WardrobeOperation.Edit
                : src_shared_state_wardrobe_state_service__WEBPACK_IMPORTED_MODULE_6__.WardrobeOperation.Normal;
        if (this.wardrobeMode === src_shared_state_wardrobe_state_service__WEBPACK_IMPORTED_MODULE_6__.WardrobeOperation.Normal) {
            this.cardsToDelete = [];
        }
    }
    isDeletingArticle(articleId) {
        return this.cardsToDelete.filter(elem => elem.id === articleId).length;
    }
};
WardrobeComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.PopoverController },
    { type: src_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService },
    { type: src_shared_state_wardrobe_state_service__WEBPACK_IMPORTED_MODULE_6__.WardrobeStateService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ChangeDetectorRef },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerService },
    { type: src_shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__.ToasterService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ActionSheetController }
];
WardrobeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-wardrobe',
        template: _wardrobe_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_wardrobe_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WardrobeComponent);



/***/ }),

/***/ 30337:
/*!**************************************************!*\
  !*** ./src/app/main/wardrobe/wardrobe.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WardrobePageModule": () => (/* binding */ WardrobePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-image-cropper */ 67545);
/* harmony import */ var src_shared_components_wardrobe_filters_wardrobe_filters_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/shared/components/wardrobe-filters/wardrobe-filters.module */ 70275);
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/shared/shared.module */ 8395);
/* harmony import */ var _wardrobe_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wardrobe-routing.module */ 15354);
/* harmony import */ var _wardrobe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wardrobe.component */ 84943);








let WardrobePageModule = class WardrobePageModule {
};
WardrobePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            src_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _wardrobe_routing_module__WEBPACK_IMPORTED_MODULE_2__.WardrobeRoutingModule,
            src_shared_components_wardrobe_filters_wardrobe_filters_module__WEBPACK_IMPORTED_MODULE_0__.WardrobeFiltersModule,
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__.ImageCropperModule,
        ],
        declarations: [_wardrobe_component__WEBPACK_IMPORTED_MODULE_3__.WardrobeComponent],
    })
], WardrobePageModule);



/***/ }),

/***/ 27729:
/*!******************************************************************************!*\
  !*** ./src/shared/components/wardrobe-filters/wardrobe-filters.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WardrobeFiltersComponent": () => (/* binding */ WardrobeFiltersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _wardrobe_filters_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wardrobe-filters.component.html?ngResource */ 23952);
/* harmony import */ var _wardrobe_filters_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wardrobe-filters.component.scss?ngResource */ 68842);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 21339);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var src_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/services/storage.service */ 45785);









let WardrobeFiltersComponent = class WardrobeFiltersComponent {
    constructor(storageService, fb) {
        this.storageService = storageService;
        this.fb = fb;
        this.range = { lower: 0, upper: 2000 };
    }
    ngOnInit() {
        this.colors = this.storageService.getJSONItemFromLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.LocalStorageConstants.COLORS_AS_MAP);
        this.brandsMostUsed = this.storageService.getJSONItemFromLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.LocalStorageConstants.MOST_USED_BRANDS);
        this.brands = this.storageService.getJSONItemFromLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.LocalStorageConstants.BRANDS);
        this.formGroup = this.fb.group({
            priceRange: [{ lower: 0, upper: 2000 }],
            color: [''],
            state: [''],
            brand: [''],
        });
    }
    rangeChanged(event) {
        this.range.lower = event.detail.value.lower;
        this.range.upper = event.detail.value.upper;
    }
    onLoadColors(colors) {
        setTimeout(function () {
            return new Promise((resolve, reject) => {
                const radios = Array.from(document.getElementsByClassName('alert-checkbox-label'));
                resolve(radios);
            }).then(function (radios) {
                return new Promise((resolve, reject) => {
                    radios.forEach((radio, index) => {
                        radio.style.display = 'inline-flex';
                        radio.style.justifyContent = 'space-between';
                        radio.style.alignItems = 'center';
                        radio.innerHTML = radio.innerHTML.concat('<div style="width: 30px;height:30px;background:' +
                            colors[index].rgb +
                            ';border-radius: 50%;"></div>');
                    });
                });
            });
        }, 150);
    }
    getBrandsAsync(timeout = 250) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable(observer => {
            observer.next(this.brands);
            observer.complete();
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.delay)(100));
    }
    filterBrands(brands, text) {
        return brands.filter(brand => brand.fr_display.toLowerCase().indexOf(text) !== -1);
    }
    searchBrands(event) {
        const text = event.text.trim().toLowerCase();
        event.component.startSearch();
        if (!text) {
            event.component.items = this.brandsMostUsed;
            event.component.endSearch();
            return;
        }
        this.getBrandsAsync().subscribe(allBrands => {
            event.component.items = this.filterBrands(allBrands, text);
            event.component.endSearch();
        });
    }
    onClear(event) {
        event.component.clear();
    }
    onResetForm() {
        this.formGroup.reset({ priceRange: { lower: 0, upper: 2000 } });
    }
};
WardrobeFiltersComponent.ctorParameters = () => [
    { type: src_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder }
];
WardrobeFiltersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-wardrobe-filters',
        template: _wardrobe_filters_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_wardrobe_filters_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WardrobeFiltersComponent);



/***/ }),

/***/ 70275:
/*!***************************************************************************!*\
  !*** ./src/shared/components/wardrobe-filters/wardrobe-filters.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WardrobeFiltersModule": () => (/* binding */ WardrobeFiltersModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-selectable */ 25073);
/* harmony import */ var _wardrobe_filters_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wardrobe-filters.component */ 27729);







let WardrobeFiltersModule = class WardrobeFiltersModule {
};
WardrobeFiltersModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_5__.IonicSelectableModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule.forRoot({}),
        ],
        declarations: [_wardrobe_filters_component__WEBPACK_IMPORTED_MODULE_0__.WardrobeFiltersComponent],
    })
], WardrobeFiltersModule);



/***/ }),

/***/ 21339:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/delay.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "delay": () => (/* binding */ delay)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 96936);
/* harmony import */ var _delayWhen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delayWhen */ 5716);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/timer */ 78947);



function delay(due, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  const duration = (0,_observable_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(due, scheduler);
  return (0,_delayWhen__WEBPACK_IMPORTED_MODULE_2__.delayWhen)(() => duration);
}

/***/ }),

/***/ 5716:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/delayWhen.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "delayWhen": () => (/* binding */ delayWhen)
/* harmony export */ });
/* harmony import */ var _observable_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/concat */ 54240);
/* harmony import */ var _take__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./take */ 59295);
/* harmony import */ var _ignoreElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ignoreElements */ 90023);
/* harmony import */ var _mapTo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapTo */ 73);
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mergeMap */ 51353);





function delayWhen(delayDurationSelector, subscriptionDelay) {
  if (subscriptionDelay) {
    return source => (0,_observable_concat__WEBPACK_IMPORTED_MODULE_0__.concat)(subscriptionDelay.pipe((0,_take__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,_ignoreElements__WEBPACK_IMPORTED_MODULE_2__.ignoreElements)()), source.pipe(delayWhen(delayDurationSelector)));
  }

  return (0,_mergeMap__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((value, index) => delayDurationSelector(value, index).pipe((0,_take__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,_mapTo__WEBPACK_IMPORTED_MODULE_4__.mapTo)(value)));
}

/***/ }),

/***/ 90023:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/ignoreElements.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ignoreElements": () => (/* binding */ ignoreElements)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 41944);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 93945);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/noop */ 99635);



function ignoreElements() {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, _util_noop__WEBPACK_IMPORTED_MODULE_2__.noop));
  });
}

/***/ }),

/***/ 18842:
/*!******************************************************************!*\
  !*** ./src/app/main/wardrobe/wardrobe.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "/** Ionic CSS Variables **/\n:root {\n  --ion-color-white: #ffffff;\n  --ion-color-black: #000000;\n  /** primary color**/\n  --ion-color-primary: #ffde59;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #111111;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #ffeeae;\n  --ion-color-primary-tint: #ffde59;\n  /** secondary for text**/\n  --ion-color-secondary: #111111;\n  --ion-color-secondary-rgb: 17, 17, 17;\n  --ion-color-secondary-contrast: #ffde59;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0f0f0f;\n  --ion-color-secondary-tint: #292929;\n  /** tertiary used for input background and background icone**/\n  --ion-color-tertiary: #dbdbdb;\n  --ion-color-tertiary-rgb: 219, 219, 219;\n  --ion-color-tertiary-contrast: #000000;\n  --ion-color-tertiary-contrast-rgb: 0, 0, 0;\n  --ion-color-tertiary-shade: #c1c1c1;\n  --ion-color-tertiary-tint: #dfdfdf;\n  /** success **/\n  --ion-color-success: #01db72;\n  --ion-color-success-rgb: 1, 219, 114;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #01c164;\n  --ion-color-success-tint: #1adf80;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #ff1166;\n  --ion-color-danger-rgb: 255, 17, 102;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e00f5a;\n  --ion-color-danger-tint: #ff2976;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: rgba(255, 222, 89, 0.19);\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** Tab-bar **/\n  --ion-toolbar-background: white;\n  --text-font-style: \"IBMPlexSans\";\n  --title-font-style: \"IBMPlexSans\";\n}\n:root .spinner-bubbles {\n  color: var(--ion-color-primary);\n}\n:root ion-tab-button.tab-selected {\n  --color-selected: var(--ion-color-primary);\n}\n:root ion-segment {\n  --background: var(--ion-color-white);\n}\n:root ion-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --color-checked: black;\n  --indicator-transition: none;\n}\n:root ion-button {\n  text-transform: none;\n}\n.header {\n  margin-top: var(--ion-safe-area-top, 0);\n  height: 2.5rem;\n  padding: 0rem 0rem 0rem 1rem;\n  position: relative;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n}\n.header .title {\n  font-size: 1.5rem;\n  font-family: \"IBMPlexSans\";\n  color: #111111;\n  font-weight: 700;\n}\n.search {\n  position: relative;\n  align-items: center;\n  display: inline-flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  width: 100%;\n  padding-top: 0.5rem;\n}\n.search ion-searchbar {\n  max-width: 92%;\n  --border-radius: 1rem;\n  height: 40px;\n}\n.search ion-button {\n  width: 35%;\n  height: 2.5rem;\n  font-family: var(--ion-color-white);\n  font-size: 0.75rem;\n  font-weight: 600;\n  min-height: 2.5rem;\n  max-width: 80px;\n  --box-shadow: none;\n  --border-radius: 1rem;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n}\n@media screen and (max-width: 300px) {\n  .search ion-button {\n    font-size: 0.625rem;\n  }\n}\n.search ion-button .filter_button {\n  position: relative;\n  align-items: center;\n  display: inline-flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  width: 100%;\n}\n.search ion-button .filter_button ion-icon {\n  width: 1rem;\n  height: 1rem;\n}\n.search ion-button .filter_button .text-button {\n  padding-right: 0.5rem;\n}\nion-segment {\n  margin-top: 1rem;\n  min-height: 40px;\n  height: 40px;\n  background-color: white;\n  align-items: center;\n  border-radius: 0px;\n  border-bottom: 2px solid var(--ion-color-primary);\n}\nion-segment ion-segment-button {\n  font-size: 1.125rem;\n  font-family: \"IBMPlexSans\";\n  color: #111111;\n  font-weight: 700;\n  text-transform: none;\n  margin: 0;\n  height: 100%;\n  min-height: 40px;\n  min-width: 50%;\n  align-items: center;\n  --indicator-color: var(--ion-color-primary);\n  --border-radius: 16px 16px 0 0;\n  --border-style: none;\n  --border-color: none;\n  --indicator-box-shadow: 0;\n}\nion-segment ion-segment-button ion-label {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: #111111;\n  font-weight: 700;\n}\nion-fab {\n  bottom: 6rem;\n}\n@media screen and (max-width: 370px) {\n  ion-fab {\n    bottom: 5rem;\n  }\n}\nion-fab ion-fab-button {\n  --ion-color-contrast: var(--ion-color-white) !important;\n}\n@media screen and (max-width: 370px) {\n  ion-fab ion-fab-button {\n    height: 40px;\n    width: 40px;\n  }\n  ion-fab ion-fab-button ion-icon {\n    height: 20px;\n    width: 20px;\n  }\n}\nion-fab ion-badge {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\nion-slides .slide-button {\n  font-size: 0.875rem;\n  font-family: \"IBMPlexSans\";\n  color: #888888;\n  font-weight: 700;\n}\nion-slides .active-category {\n  border-bottom: 2px solid #111111;\n  color: #111111;\n}\n.selection-button {\n  font-size: 0.875rem;\n  font-family: \"IBMPlexSans\";\n  color: #111111;\n  font-weight: 600;\n  margin-top: 8px;\n  margin-right: 1rem;\n  margin-bottom: 0.5rem;\n  text-align: right;\n}\n.cancel-button {\n  margin-bottom: 0.5rem;\n  margin-top: 8px;\n  margin-right: 1rem;\n  font-size: 0.875rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-danger);\n  font-weight: 600;\n  text-align: right;\n}\nion-content .sub-container {\n  padding: 0rem 1rem 0rem 1rem;\n}\nion-content .sub-container .container {\n  position: relative;\n  align-items: center;\n  display: inline-flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  width: 100%;\n  /*ion-icon{\n    height: 20px;\n    width: 20px;\n  }*/\n}\nion-content .style-picture-container {\n  display: grid;\n  height: calc(1.1 * (50vw - 1.5rem));\n  grid-gap: 0.25rem;\n  overflow: scroll;\n}\nion-content .style-picture-container .style-img-0 {\n  grid-area: 1/1;\n}\nion-content .style-picture-container .style-img-1 {\n  grid-area: 1/2;\n}\nion-content .style-picture-container .style-img-2 {\n  grid-area: 2/1;\n}\nion-content .style-picture-container .style-img-3 {\n  grid-area: 2/2;\n}\nion-content .style-picture-container .style-img-4 {\n  grid-area: 1/3;\n}\nion-content .style-picture-container cached-img {\n  height: -moz-fit-content;\n  height: fit-content;\n}\nion-content .bottom {\n  height: 9rem;\n}\n@media screen and (max-width: 300px) {\n  ion-content .bottom {\n    height: 7.5rem;\n  }\n}\nion-card {\n  display: flex;\n  flex-direction: column;\n  background: rgba(255, 255, 255, 0.8);\n  float: left;\n  width: calc(50% - 0.5rem);\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0 0 1rem 0;\n  border-radius: 1rem;\n  border: 1px solid #fde896;\n}\nion-card img {\n  width: 100%;\n}\nion-card ion-card-content {\n  padding: 0.5rem 1rem 0.5rem 0.5rem;\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n  /*.brand{\n    padding-top: 8px;\n    color: #111111;\n    font-weight: bold;\n    font-style: italic;\n    font-size: 13px;\n  }*/\n}\nion-card ion-card-content .style-card-container {\n  position: relative;\n  align-items: flex-start;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  width: 80%;\n}\nion-card ion-card-content .style-card-container .title-style {\n  font-size: 0.75rem;\n  font-family: \"IBMPlexSans\";\n  color: #111111;\n  font-weight: 500;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n}\nion-card ion-card-content .style-card-container .subtitle-style {\n  font-size: 0.75rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: normal;\n  width: 100%;\n}\n@media screen and (max-width: 300px) {\n  ion-card ion-card-content .style-card-container .subtitle-style {\n    font-size: 10px;\n  }\n}\nion-card ion-card-content .logo-icon {\n  width: 1.25rem;\n  height: 1.25rem;\n}\nion-card ion-card-content .card-container {\n  position: relative;\n  align-items: center;\n  display: inline-flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  width: 100%;\n}\nion-card ion-card-content .card-container .title {\n  font-size: 0.75rem;\n  font-family: \"IBMPlexSans\";\n  color: #111111;\n  font-weight: 500;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: calc(100% - 0.5rem);\n}\nion-card ion-card-content .card-container .colors {\n  width: 1rem;\n  height: 1rem;\n  border-radius: 50%;\n  border: 1px solid #111111;\n}\nion-card ion-card-content .card-container .color {\n  height: 1rem;\n  width: 1rem;\n  border-radius: 50%;\n  border: 1px solid var(--ion-color-secondary);\n}\nion-card .bottom_buttons {\n  display: inline-flex;\n  padding-top: 15px;\n  width: 100%;\n  justify-content: space-between;\n}\nion-card .bottom_buttons .dressing_btn {\n  height: 40px;\n  width: 25%;\n}\nion-icon {\n  height: 30px;\n  width: 30px;\n}\n.delete_btn {\n  position: absolute;\n  right: 0px;\n}\n.card-selected {\n  border-width: 3px;\n}\n.card-unselected {\n  border-width: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwid2FyZHJvYmUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi90aGVtZS9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSwwQkFBQTtBQW9CQTtFQUNFLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsNkRBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFNQSxjQUFBO0VBbUJBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxp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b0JBQUE7RUFPRixtQkRnTWtCO0VDL0xsQixpQkQrTDhDO0VDOUw5Qyw4QkQ4TCtCO0VBQzNCLFdBQUE7QUEySE47QUF6SE07RUN2Skosa0JEd0owQjtFQ3ZKMUIsMEJBRndGO0VBR3hGLGNGN0ZRO0VFOEZSLGdCQUpxRTtFQS9EckUsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VEd05NLDBCQUFBO0FBZ0lSO0FBN0hNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBK0hSO0FBNUhNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FBOEhSO0FBakhFO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQW1ISjtBQWpISTtFQUNFLFlBQUE7RUFDQSxVQUFBO0FBbUhOO0FBOUdBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFpSEY7QUE5R0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFpSEY7QUE5R0E7RUFDRSxpQkFBQTtBQWlIRjtBQTlHQTtFQUNFLGlCQUFBO0FBaUhGIiwiZmlsZSI6IndhcmRyb2JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOlxuLy8gaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvXG5cbi8qKiBJb25pYyBDU1MgVmFyaWFibGVzICoqL1xuXG4vLyBjb2xvcnNcbiRibGFjazI6ICM0MDQwM2Y7XG4kZ3JheTYwMDogIzExMTExMTsgLy91c2VkXG4kZ3JheTUwMDogIzI5MjkyOTsgLy91c2VkXG4kZ3JheTQwMDogIzU5NTk1OTsgLy91c2VkXG4kZ3JheTMwMDogIzg4ODg4ODsgLy91c2VkXG4kZ3JheTIwMDogI0I4QjhCODtcbiRncmF5MjogIzlkOWM5OTtcbiRncmF5MzogI2RiZGJkYjtcbiR5ZWxsb3cxMDA6ICNmZmZjZWY7XG4keWVsbG93MjAwOiAjZmZmNWNlO1xuJHllbGxvdzM6ICNmZGU4OTY7XG4keWVsbG93NDogI2ZjZWViNjtcbiR5ZWxsb3c1OiAjZmJmMmQ0O1xuJHllbGxvdzY6ICNGRkRFNTk7XG4kd2hpdGU4MDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuJGRhcms3NTogcmdiYSgwLCAwLCAwLCAwLjI1KTsgLy9idXR0b25zIHNoYWRvd1xuXG46cm9vdCB7XG4gIC0taW9uLWNvbG9yLXdoaXRlOiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1ibGFjazogIzAwMDAwMDtcbiAgLyoqIHByaW1hcnkgY29sb3IqKi9cbiAgLS1pb24tY29sb3ItcHJpbWFyeTogI2ZmZGU1OTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDU2LCAxMjgsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogIzExMTExMTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICNmZmVlYWU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogI2ZmZGU1OTtcblxuICAvKiogc2Vjb25kYXJ5IGZvciB0ZXh0KiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzExMTExMTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogMTcsIDE3LCAxNztcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZkZTU5O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICMwZjBmMGY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjMjkyOTI5O1xuXG4gIC8qKiB0ZXJ0aWFyeSB1c2VkIGZvciBpbnB1dCBiYWNrZ3JvdW5kIGFuZCBiYWNrZ3JvdW5kIGljb25lKiovXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjZGJkYmRiOyAvL3NhbWUgYXMgZ3JheTNcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAyMTksIDIxOSwgMjE5O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogI2MxYzFjMTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogI2RmZGZkZjtcblxuICAvKiogc3VjY2VzcyAqKi9cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzAxZGI3MjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDEsIDIxOSwgMTE0O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzAxYzE2NDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjMWFkZjgwO1xuXG4gIC8qKiB3YXJuaW5nICoqL1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZjNDA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAxOTYsIDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBhYzA4O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmNhMjI7XG5cbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZmYxMTY2O1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNTUsIDE3LCAxMDI7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZTAwZjVhO1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2ZmMjk3NjtcblxuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XG5cbiAgLyoqIG1lZGl1bSAqKi9cbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTI5NDljO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNDYsIDE0OCwgMTU2O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzgwODI4OTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICM5ZDlmYTY7XG5cbiAgLyoqIGxpZ2h0ICoqL1xuICAtLWlvbi1jb2xvci1saWdodDogcmdiYSgyNTUsIDIyMiwgODksIDAuMTkpO1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xuXG4gIC5zcGlubmVyLWJ1YmJsZXMge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cblxuICAvKiogVGFiLWJhciAqKi9cbiAgaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIHtcbiAgICAtLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cblxuICBpb24tc2VnbWVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICB9XG5cbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tY29sb3ItY2hlY2tlZDogYmxhY2s7XG4gICAgLS1pbmRpY2F0b3ItdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB9XG5cbiAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS10ZXh0LWZvbnQtc3R5bGU6ICdJQk1QbGV4U2Fucyc7XG4gIC0tdGl0bGUtZm9udC1zdHlsZTogJ0lCTVBsZXhTYW5zJztcbn1cblxuLy8gVmVyaWZpZWRcbiR3aWR0aC1zZDogMzAwcHg7IC8vZm9sZFxuJHdpZHRoLW1kOiAzODBweDsgLy9pcGhvbmUgU0VcbiR3aWR0aC1sZDogNDEycHg7IC8vaXBob25lIFhSXG4kd2lkdGgteGxkOiA3NjhweDsgLy9pcGFkIiwiQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvdmFyaWFibGVzLnNjc3MnO1xuXG4uaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogdmFyKC0taW9uLXNhZmUtYXJlYS10b3AsIDApO1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgLy9tYXJnaW4tdG9wOiBlbnYoLS1pb24tc2FmZS1hcmVhLXRvcCkgIWltcG9ydGFudDtcbiAgLy8gbWFyZ2luLXRvcDogY29uc3RhbnQoLS1pb24tc2FmZS1hcmVhLXRvcCkgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHJlbSAwcmVtIDByZW0gMXJlbTtcbiAgQGluY2x1ZGUgZmxleChyb3csIGNlbnRlciwgc3BhY2UtYmV0d2Vlbik7XG5cbiAgLnRpdGxlIHtcbiAgICBAaW5jbHVkZSBib2xkVGV4dCgxLjVyZW0sICRncmF5NjAwKTtcbiAgfVxufVxuXG4uc2VhcmNoIHtcbiAgQGluY2x1ZGUgZmxleChyb3csIGNlbnRlciwgY2VudGVyLCBub3dyYXAsIHRydWUpO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcblxuICBpb24tc2VhcmNoYmFyIHtcbiAgICBtYXgtd2lkdGg6IDkyJTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgYnV0dG9uKDM1JSwgMi41cmVtLCAwLjc1cmVtLCB2YXIoLS1pb24tY29sb3Itd2hpdGUpKTtcbiAgICBtYXgtd2lkdGg6IDgwcHg7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDAuNXJlbTtcbiAgICAtLXBhZGRpbmctZW5kOiAwLjVyZW07XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xuICAgICAgZm9udC1zaXplOiAwLjYyNXJlbTtcbiAgICB9XG5cbiAgICAuZmlsdGVyX2J1dHRvbiB7XG4gICAgICBAaW5jbHVkZSBmbGV4KHJvdywgY2VudGVyLCBzcGFjZS1iZXR3ZWVuLCBub3dyYXAsIHRydWUpO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgQGluY2x1ZGUgaWNvbigpO1xuICAgICAgfVxuXG4gICAgICAudGV4dC1idXR0b24ge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmlvbi1zZWdtZW50IHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgYm9sZFRleHQoKTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgbWluLXdpZHRoOiA1MCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtLWluZGljYXRvci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTZweCAxNnB4IDAgMDtcbiAgICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbiAgICAtLWJvcmRlci1jb2xvcjogbm9uZTtcbiAgICAtLWluZGljYXRvci1ib3gtc2hhZG93OiAwO1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIEBpbmNsdWRlIGJvbGRUZXh0KDFyZW0pO1xuICAgIH1cbiAgfVxufVxuXG5pb24tZmFiIHtcbiAgYm90dG9tOiA2cmVtOyAvLyAxcmVtIHBhZGRpbmcgKyAzcmVtIG9mIGhlaWdodFxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3MHB4KSB7XG4gICAgYm90dG9tOiA1cmVtO1xuICB9XG5cbiAgaW9uLWZhYi1idXR0b24ge1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3Itd2hpdGUpICFpbXBvcnRhbnQ7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzBweCkge1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgd2lkdGg6IDQwcHg7XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpb24tYmFkZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbn1cblxuaW9uLXNsaWRlcyB7XG4gIC5zbGlkZS1idXR0b24ge1xuICAgIEBpbmNsdWRlIGJvbGRUZXh0KDAuODc1cmVtLCAkZ3JheTMwMCk7XG4gIH1cblxuICAuYWN0aXZlLWNhdGVnb3J5IHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGdyYXk2MDA7XG4gICAgY29sb3I6ICRncmF5NjAwO1xuICB9XG59XG5cbi8vcmVncm91cGUgaW50byBzcGFuXG4uc2VsZWN0aW9uLWJ1dHRvbiB7XG4gIEBpbmNsdWRlIGJsYWNrU3VidGl0bGUoMC44NzVyZW0sICRncmF5NjAwKTtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5jYW5jZWwtYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgQGluY2x1ZGUgdGV4dCgwLjg3NXJlbSwgJ0lCTVBsZXhTYW5zJywgdmFyKC0taW9uLWNvbG9yLWRhbmdlciksIDYwMCk7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5pb24tY29udGVudCB7XG4gIC8vLS1wYWRkaW5nLXRvcDogMXJlbTtcblxuICAuc3ViLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMHJlbSAxcmVtIDByZW0gMXJlbTtcblxuICAgIC5jb250YWluZXIge1xuICAgICAgQGluY2x1ZGUgZmxleChyb3csIGNlbnRlciwgc3BhY2UtYmV0d2Vlbiwgd3JhcCwgdHJ1ZSk7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC8qaW9uLWljb257XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICB9Ki9cbiAgICB9XG4gIH1cblxuICAuc3R5bGUtcGljdHVyZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgaGVpZ2h0OiBjYWxjKDEuMSAqICg1MHZ3IC0gMS41cmVtKSk7XG4gICAgZ3JpZC1nYXA6IDAuMjVyZW07XG4gICAgLy9ncmlkLWF1dG8tcm93czogbWlubWF4KGNhbGMoMzMuMyUgLSAwLjVyZW0pLCAxMDAlKTtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuXG4gICAgLnN0eWxlLWltZy0wIHtcbiAgICAgIGdyaWQtYXJlYTogMS8xO1xuICAgIH1cblxuICAgIC5zdHlsZS1pbWctMSB7XG4gICAgICBncmlkLWFyZWE6IDEvMjtcbiAgICB9XG5cbiAgICAuc3R5bGUtaW1nLTIge1xuICAgICAgZ3JpZC1hcmVhOiAyLzE7XG4gICAgfVxuXG4gICAgLnN0eWxlLWltZy0zIHtcbiAgICAgIGdyaWQtYXJlYTogMi8yO1xuICAgIH1cblxuICAgIC5zdHlsZS1pbWctNCB7XG4gICAgICBncmlkLWFyZWE6IDEvMztcbiAgICB9XG5cbiAgICBjYWNoZWQtaW1nIHtcbiAgICAgIGhlaWdodDogZml0LWNvbnRlbnRcbiAgICB9XG4gIH1cblxuICAuYm90dG9tIHtcbiAgICBoZWlnaHQ6IDlyZW07XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xuICAgICAgaGVpZ2h0OiA3LjVyZW07XG4gICAgfVxuICB9XG59XG5cbmlvbi1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZDogJHdoaXRlODA7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogY2FsYyg1MCUgLSAwLjVyZW0pO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IDAgMCAxcmVtIDA7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICR5ZWxsb3czO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICBpb24tY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbSAwLjVyZW0gMC41cmVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLnN0eWxlLWNhcmQtY29udGFpbmVyIHtcbiAgICAgIEBpbmNsdWRlIGZsZXgoY29sdW1uLCBmbGV4LXN0YXJ0LCBzcGFjZS1iZXR3ZWVuLCBub3dyYXAsIGZhbHNlKTtcbiAgICAgIHdpZHRoOiA4MCU7XG5cbiAgICAgIC50aXRsZS1zdHlsZSB7XG4gICAgICAgIEBpbmNsdWRlIG1lZGl1bVRleHQoMC43NXJlbSwgJGdyYXk2MDApO1xuICAgICAgICBAaW5jbHVkZSB0ZXh0LW92ZXJmbG93KCk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAuc3VidGl0bGUtc3R5bGUge1xuICAgICAgICBAaW5jbHVkZSB0ZXh0KCRmb250LXNpemU6IDAuNzVyZW0sXG4gICAgICAgICAgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnLFxuICAgICAgICAgICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSksXG4gICAgICAgICAgJGZvbnQtd2VpZ2h0OiBub3JtYWwpO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5sb2dvLWljb24ge1xuICAgICAgd2lkdGg6IDEuMjVyZW07XG4gICAgICBoZWlnaHQ6IDEuMjVyZW07XG4gICAgfVxuXG4gICAgLmNhcmQtY29udGFpbmVyIHtcbiAgICAgIEBpbmNsdWRlIGZsZXgocm93LCBjZW50ZXIsIHNwYWNlLWJldHdlZW4sIG5vd3JhcCwgdHJ1ZSk7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgQGluY2x1ZGUgbWVkaXVtVGV4dCgwLjc1cmVtLCAkZ3JheTYwMCk7XG4gICAgICAgIEBpbmNsdWRlIHRleHQtb3ZlcmZsb3coKTtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDAuNXJlbSk7XG4gICAgICB9XG5cbiAgICAgIC5jb2xvcnMge1xuICAgICAgICB3aWR0aDogMXJlbTtcbiAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMTExMTE7XG4gICAgICB9XG5cbiAgICAgIC5jb2xvciB7XG4gICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyouYnJhbmR7XG4gICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgICAgY29sb3I6ICMxMTExMTE7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9Ki9cbiAgfVxuXG4gIC5ib3R0b21fYnV0dG9ucyB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgLmRyZXNzaW5nX2J0biB7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICB3aWR0aDogMjUlO1xuICAgIH1cbiAgfVxufVxuXG5pb24taWNvbiB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG59XG5cbi5kZWxldGVfYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xufVxuXG4uY2FyZC1zZWxlY3RlZCB7XG4gIGJvcmRlci13aWR0aDogM3B4O1xufVxuXG4uY2FyZC11bnNlbGVjdGVkIHtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG59IiwiQG1peGluIHRpdGxlKCRmb250LXNpemU6IDJyZW0sXG4gICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJyxcbiAgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSxcbiAgJGZvbnQtd2VpZ2h0OiBib2xkKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuXG5cbkBtaXhpbiBzaW1wbGVfYnV0dG9uKCR3aWR0aDogMjUlLCAkaGVpZ2h0OiAyLjVyZW0sICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkpIHtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xuICAtLWNvbG9yOiAkY29sb3I7XG59XG5cbkBtaXhpbiBpY29uKCR3aWR0aDogMXJlbSwgJGhlaWdodDogMXJlbSkge1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG59XG5cbkBtaXhpbiB0ZXh0KCRmb250LXNpemU6IDAuODc1cmVtLFxuICAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycsXG4gICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSksXG4gICRmb250LXdlaWdodDogbm9ybWFsKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIHRleHQtb3ZlcmZsb3coKSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5cbi8vdmVyaWZpZWRcblxuQG1peGluIGZsZXgoJGRpcmVjdGlvbjogcm93LCAkYWxpZ24taXRlbXM6IGNlbnRlciwgJGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCwgJHdyYXA6IG5vd3JhcCwgJGlubGluZTogZmFsc2UsICRwb3NpdGlvbjogcmVsYXRpdmUpIHtcbiAgcG9zaXRpb246ICRwb3NpdGlvbjtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbi1pdGVtcztcblxuICBAaWYgJGlubGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIH1cblxuICBAZWxzZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xuICBmbGV4LXdyYXA6ICR3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5LWNvbnRlbnQ7XG59XG5cbkBtaXhpbiBidXR0b24oJHdpZHRoOiAyNSUsICRoZWlnaHQ6IDIuNXJlbSwgJGZvbnQtc2l6ZTogMC44NzVyZW0sICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJywgJGZvbnQtd2VpZ2h0OiA2MDApIHtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG4gIG1pbi1oZWlnaHQ6ICRoZWlnaHQ7XG59XG5cbkBtaXhpbiB3aGl0ZVRpdGxlKCRmb250LXNpemU6IDEuNzVyZW0sICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKSwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiB3aGl0ZVN1YnRpdGxlKCRmb250LXNpemU6IDFyZW0sICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKSwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiBibGFja1RpdGxlKCRmb250LXNpemU6IDEuNzVyZW0sICRjb2xvcjogJGdyYXk1MDAsICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycsICkge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5AbWl4aW4gYmxhY2tTdWJ0aXRsZSgkZm9udC1zaXplOiAxcmVtLCAkY29sb3I6ICRncmF5NTAwLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIG1lZGl1bVRleHQoJGZvbnQtc2l6ZTogMC43NXJlbSwgJGNvbG9yOiAkZ3JheTUwMCwgJGZvbnQtd2VpZ2h0OiA1MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiByZWd1bGFyVGV4dCgkZm9udC1zaXplOiAxcmVtLCAkY29sb3I6ICRncmF5NjAwLCAkZm9udC13ZWlnaHQ6IDQwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIHNlbWlCb2xkVGV4dCgkZm9udC1zaXplOiAycmVtLCAkY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSksICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gYm9sZFRleHQoJGZvbnQtc2l6ZTogMS4xMjVyZW0sICRjb2xvcjogJGdyYXk2MDAsICRmb250LXdlaWdodDogNzAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufSJdfQ== */";

/***/ }),

/***/ 68842:
/*!*******************************************************************************************!*\
  !*** ./src/shared/components/wardrobe-filters/wardrobe-filters.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = ".header {\n  display: flex;\n  height: 10%;\n  align-items: center;\n  width: 100%;\n  justify-content: center;\n}\n.header .title {\n  font-family: \"IBMPlexSans\";\n  font-size: 19px;\n  font-weight: bold;\n}\nion-content .price_range {\n  padding-left: 16px;\n  display: flex;\n  justify-content: space-between;\n  padding-right: 16px;\n  padding-top: 10px;\n}\nion-content .price_range .price {\n  color: #111111;\n  font-weight: bold;\n  font-family: \"IBMPlexSans\";\n  font-size: 14px;\n}\nion-content .price_range .ranging {\n  display: flex;\n  align-items: baseline;\n  width: 35%;\n  justify-content: space-around;\n  color: #c4c4c4;\n  font-family: \"IBMPlexSans\";\n  font-size: 12px;\n}\nion-content .price_range .ranging .range {\n  color: #111111;\n  font-weight: bold;\n  font-family: \"IBMPlexSans\";\n  font-size: 14px;\n}\nion-content ion-list {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: var(--ion-color-tertiary);\n  border-radius: 16px;\n  margin-bottom: 1rem;\n}\nion-content .control-item {\n  --background: var(--ion-color-tertiary);\n  margin-bottom: 1rem;\n  width: 100%;\n  border-radius: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhcmRyb2JlLWZpbHRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFDRTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQURKO0FBR0k7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUFETjtBQUlJO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQUZOO0FBSU07RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUFGUjtBQU9FO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFMSjtBQVFFO0VBQ0UsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQU5KIiwiZmlsZSI6IndhcmRyb2JlLWZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAudGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuXG5pb24tY29udGVudCB7XG4gIC5wcmljZV9yYW5nZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG5cbiAgICAucHJpY2Uge1xuICAgICAgY29sb3I6ICMxMTExMTE7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC5yYW5naW5nIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICB3aWR0aDogMzUlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICBjb2xvcjogI2M0YzRjNDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgICAucmFuZ2Uge1xuICAgICAgICBjb2xvcjogIzExMTExMTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW9uLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG5cbiAgLmNvbnRyb2wtaXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 45958:
/*!******************************************************************!*\
  !*** ./src/app/main/wardrobe/wardrobe.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"header safe-area\">\n  <span class=\"title\">{{ 'WARDROBE.TITLE' | translate }}</span>\n  <div class=\"header-button\">\n    <!--<ion-icon src=\"assets/icon/cart.svg\"></ion-icon>-->\n  </div>\n</div>\n<!--\n<div class=\"search\">\n  <ion-searchbar placeholder=\"{{'SHARED.SEARCH_ARTICLE'| translate}}\">\n  </ion-searchbar>\n  <ion-button class=\"connect-button\" color=\"dark\" (click)=\"onOpenFilterModal()\">\n    <span class=\"filter_button\">\n      <span class=\"text-button\">{{'SHARED.FILTRES'| translate}}</span>\n      <ion-icon src=\"assets/icon/buttons/square.svg\" slot=\"end\"></ion-icon>\n    </span>\n  </ion-button>\n</div>-->\n<ion-segment (ionChange)=\"segmentChanged($event)\" value=\"{{ segmentsTitles[0] }}\">\n  <ion-segment-button id=\"Segment-{{ segmentTitle }}-menu\" value=\"{{ segmentTitle }}\" *ngFor=\"let segmentTitle of segmentsTitles\">\n    <ion-label class=\"ion-no-margin\">{{ segmentTitle | translate }}</ion-label>\n  </ion-segment-button>\n</ion-segment>\n<ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\" (click)=\"onGoAddPage(currentSegment)\">\n  <ion-fab-button id=\"add-article-button\" *ngIf=\"wardrobeMode === 'normal'\" color=\"primary\">\n    <ion-icon name=\"add\" color=\"secondary\"></ion-icon>\n  </ion-fab-button>\n  <ion-fab-button id=\"add-article-button\" *ngIf=\"wardrobeMode === 'edit'\" color=\"danger\">\n    <ion-icon name=\"trash-outline\" color=\"secondary\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n<div>\n  <ion-slides *ngIf=\"currentSegment === segmentsTitles[0]\" [options]=\"slidesOptions\">\n    <ion-slide *ngFor=\"let category of slidesTitles; let i = index\">\n      <ion-button id=\"Segment-{{ category }}-menu\" class=\"slide-button\" [class.active-category]=\"activeCategory === i\" fill=\"clear\" (click)=\"onSelectCategory(category, i)\">{{\n        'WARDROBE.CATEGORIES.'+ category | translate }}\n      </ion-button>\n    </ion-slide>\n  </ion-slides>\n</div>\n<p data-cy=\"Selection-cancel-wardrobe-button\" class=\"cancel-button\" (click)=\"onChangeWardrobeMode()\" *ngIf=\"wardrobeMode === 'edit'\">\n  {{'SHARED.CANCEL' | translate}}\n</p>\n<p data-cy=\"Selection-wardrobe-button\" class=\"selection-button\" (click)=\"onChangeWardrobeMode()\" *ngIf=\"wardrobeMode === 'normal'\">\n  {{'WARDROBE.SELECT' | translate}}\n</p>\n<ion-content>\n  <div class=\"sub-container\" *ngIf=\"currentSegment === segmentsTitles[0]; else myStylesContainer\">\n    <div class=\"container\" *ngIf=\"activeCategory === 0\">\n      <ion-card class=\"item\" [ngClass]=\"isDeletingArticle(article.id) ? 'card-selected' : 'card-unselected'\" id=\"card-{{ index }}\"\n        *ngFor=\"let article of allArticles; let index = index\" (click)=\"onSeeDetails(article, index)\">\n        <cached-img class=\"article-img\" [className]=\"'wardrobe-img'\" *ngIf=\"article.images[0]\" [src]=\"article.images[0].s3_presigned_url\">\n        </cached-img>\n        <!--<ngx-spinner name=\"{{ index }}\" bdColor=\"#ffffff\" size=\"small\" color=\"#ffde59\" type=\"ball-fussion\"\n          [showSpinner]=\"isImageLoading\" [fullScreen]=\"false\"></ngx-spinner>-->\n        <ion-card-content>\n          <div class=\"card-container\">\n            <p class=\"title\">{{ article.title }}</p>\n            <div class=\"colors\" *ngIf=\"article.color_ids.length === 1\" [style.background]=\"colors[article.color_ids[0]].rgb\"></div>\n            <div class=\"colors\" *ngIf=\"article.color_ids.length === 2\" [style.background]=\"\n                'linear-gradient(-45deg,' +\n                colors[article.color_ids[0]].rgb +\n                ', ' +\n                colors[article.color_ids[0]].rgb +\n                ' 49%, white 49%, white 51%, ' +\n                colors[article.color_ids[1]].rgb +\n                ' 51%)'\n              \"></div>\n            <img class=\"color\" *ngIf=\"article.color_ids.length > 2\" src=\"assets/colors/color-multicolor.png\" />\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <div class=\"container\" *ngIf=\"activeCategory != 0\">\n      <ion-card class=\"item\" [ngClass]=\"isDeletingArticle(article.id) ? 'card-selected' : 'card-unselected'\" id=\"card-{{ index }}\"\n        *ngFor=\"let article of articles$ | async; let index = index\" (click)=\"onSeeDetails(article, index)\">\n        <cached-img [className]=\"'wardrobe-img'\" class=\"article-img\" *ngIf=\"article.images[0]\" [src]=\"article.images[0].s3_presigned_url\">\n        </cached-img>\n        <ion-card-content>\n          <div class=\"card-container\">\n            <p class=\"title\">{{ article.title }}</p>\n            <div class=\"colors\" *ngIf=\"article.color_ids.length === 1\" [style.background]=\"colors[article.color_ids[0]].rgb\"></div>\n            <div class=\"colors\" *ngIf=\"article.color_ids.length === 2\" [style.background]=\"\n                'linear-gradient(-45deg,' +\n                colors[article.color_ids[0]].rgb +\n                ', ' +\n                colors[article.color_ids[0]].rgb +\n                ' 49%, white 49%, white 51%, ' +\n                colors[article.color_ids[1]].rgb +\n                ' 51%)'\n              \"></div>\n            <img class=\"color\" *ngIf=\"article.color_ids.length > 2\" src=\"assets/colors/color-multicolor.png\" />\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n  <ng-template #myStylesContainer>\n    <ion-fab horizontal=\"start\" vertical=\"bottom\" slot=\"fixed\" (click)=\"onGoStyleReco()\">\n      <ion-fab-button color=\"primary\">\n        <ion-icon src=\"assets/icon/wardrobe_calendar.svg\"></ion-icon>\n      </ion-fab-button>\n      <ion-badge color=\"secondary\" *ngIf=\"recoStyles$ | async as recoStyles\">{{\n        recoStyles.length\n        }}</ion-badge>\n    </ion-fab>\n    <div class=\"sub-container\">\n      <div class=\"container\">\n        <ion-card id=\"card-{{ index }}\" class=\"style-card\" [ngClass]=\"isDeletingArticle(style.id) ? 'card-selected' : 'card-unselected'\"\n          *ngFor=\"let style of styles$ | async; let index = index\" (click)=\"onSeeStyleDetails(style, index)\">\n          <div class=\"style-picture-container\">\n            <cached-img [className]=\"'wardrobe-img'\" class=\"style-img-{{ id }}\" *ngFor=\"let item of style.items; let id = index\" [src]=\"item.images[0].s3_presigned_url\">\n            </cached-img>\n          </div>\n          <ion-card-content>\n            <div class=\"style-card-container\">\n              <p class=\"title-style\">{{ style.title }}</p>\n              <p class=\"subtitle-style\">{{ style.items.length }} pièces</p>\n            </div>\n            <ion-icon *ngIf=\"!style.customer_generated\" class=\"logo-icon\" src=\"assets/icon/logo-black.svg\"></ion-icon>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </div>\n    <!-- <ion-infinite-scroll (ionInfinite)=\"loadMoreStyles(true, $event)\">\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"charger plus de styles\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>-->\n  </ng-template>\n  <div class=\"bottom\"></div>\n</ion-content>";

/***/ }),

/***/ 23952:
/*!*******************************************************************************************!*\
  !*** ./src/shared/components/wardrobe-filters/wardrobe-filters.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"header\">\n  <span class=\"title\">FILTRER VOTRE RECHERCHE</span>\n</div>\n<ion-content>\n  <form [formGroup]=\"formGroup\">\n    <ion-list>\n      <ion-label class=\"price\">Prix</ion-label>\n      <ion-item lines=\"none\" class=\"control-item\">\n        <ion-range\n          formControlName=\"priceRange\"\n          (ionChange)=\"rangeChanged($event)\"\n          dualKnobs=\"true\"\n          debounce=\"250\"\n          pin=\"false\"\n          min=\"0\"\n          max=\"2000\"\n          step=\"50\"\n        >\n          <ion-label slot=\"start\">{{ range.lower }}</ion-label>\n          <ion-label slot=\"end\">{{ range.upper }}</ion-label>\n        </ion-range>\n      </ion-item>\n    </ion-list>\n\n    <ion-item lines=\"none\" class=\"control-item\">\n      <ion-label>Couleur</ion-label>\n      <ion-select\n        multiple=\"true\"\n        (click)=\"onLoadColors(colors)\"\n        formControlName=\"color\"\n        placeholder=\"Couleur de l'article\"\n      >\n        <ion-select-option *ngFor=\"let color of colors\" value=\"{{ color.id }}\"\n          >{{ color.fr_display }}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item lines=\"none\" class=\"control-item\">\n      <ion-label>Etat de l'article</ion-label>\n      <ion-select multiple=\"false\" placeholder=\"Etat de l'article\" formControlName=\"state\">\n        <ion-select-option value=\"all\">Tout</ion-select-option>\n        <ion-select-option value=\"new\">Neuf</ion-select-option>\n        <ion-select-option value=\"second_hand\">Seconde Main</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item lines=\"none\" class=\"control-item\">\n      <ion-label>Marque</ion-label>\n      <ionic-selectable\n        groupColor=\"secondary\"\n        searchPlaceholder=\"Veuillez entrer votre marque\"\n        formControlName=\"brand\"\n        itemValueField=\"id\"\n        itemTextField=\"fr_display\"\n        [items]=\"brandsMostUsed\"\n        [canClear]=\"true\"\n        [canSearch]=\"true\"\n        (onSearch)=\"searchBrands($event)\"\n        clearButtonText=\"Annuler la saisie\"\n      >\n        <ng-template ionicSelectableSearchFailTemplate>\n          <div padding>Aucune marque trouvé</div>\n        </ng-template>\n      </ionic-selectable>\n    </ion-item>\n  </form>\n  <div class=\"delete_text\" (click)=\"onResetForm()\">Supprimer tous les filtres</div>\n  <ion-button class=\"button\" expand=\"block\">Filtrer</ion-button>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_main_wardrobe_wardrobe_module_ts.js.map