"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_main_personal-shopper_personal-shopper_module_ts"],{

/***/ 70669:
/*!*****************************************************************!*\
  !*** ./src/app/main/personal-shopper/card-wrapper.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardWrapperComponent": () => (/* binding */ CardWrapperComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _Users_ludovic_Documents_Epsilon_src_app_main_personal_shopper_card_wrapper_component_ts_css_ngResource_Users_ludovic_Documents_Epsilon_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIDpob3N0IHsKICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgICAgZGlzcGxheTogYmxvY2s7CiAgICAgIH0KICAgIA_3D_3D_Users_ludovic_Documents_Epsilon_src_app_main_personal_shopper_card_wrapper_component_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/main/personal-shopper/card-wrapper.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIDpob3N0IHsKICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgICAgZGlzcGxheTogYmxvY2s7CiAgICAgIH0KICAgIA%3D%3D!./src/app/main/personal-shopper/card-wrapper.component.ts */ 2791);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _swipeablecards_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../swipeablecards.directive */ 23497);




let CardWrapperComponent = class CardWrapperComponent {
    constructor() { }
    like() {
        if (this.cards.first) {
            this.cards.first.simulateSwipe(2);
        }
    }
    /*public fixCard(fixValue: boolean): void {
      this.cards.first.fixed = fixValue;
    }*/
    dislike() {
        if (this.cards.first) {
            this.cards.first.simulateSwipe(4);
        }
    }
};
CardWrapperComponent.ctorParameters = () => [];
CardWrapperComponent.propDecorators = {
    cards: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ContentChildren, args: [_swipeablecards_directive__WEBPACK_IMPORTED_MODULE_1__.SwipeableDirective,] }]
};
CardWrapperComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'sw-card-wrapper',
        template: ` <ng-content></ng-content>`,
        styles: [_Users_ludovic_Documents_Epsilon_src_app_main_personal_shopper_card_wrapper_component_ts_css_ngResource_Users_ludovic_Documents_Epsilon_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIDpob3N0IHsKICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgICAgZGlzcGxheTogYmxvY2s7CiAgICAgIH0KICAgIA_3D_3D_Users_ludovic_Documents_Epsilon_src_app_main_personal_shopper_card_wrapper_component_ts__WEBPACK_IMPORTED_MODULE_0__]
    })
], CardWrapperComponent);



/***/ }),

/***/ 38764:
/*!**************************************************************************!*\
  !*** ./src/app/main/personal-shopper/personal-shopper-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalShopperPageRoutingModule": () => (/* binding */ PersonalShopperPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _personal_shopper_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personal-shopper.page */ 94274);




const routes = [
    {
        path: '',
        component: _personal_shopper_page__WEBPACK_IMPORTED_MODULE_0__.PersonalShopperPage,
    },
];
let PersonalShopperPageRoutingModule = class PersonalShopperPageRoutingModule {
};
PersonalShopperPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PersonalShopperPageRoutingModule);



/***/ }),

/***/ 98612:
/*!******************************************************************!*\
  !*** ./src/app/main/personal-shopper/personal-shopper.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalShopperPageModule": () => (/* binding */ PersonalShopperPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ 5046);
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/shared/shared.module */ 8395);
/* harmony import */ var _swipeablecards_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../swipeablecards.directive */ 23497);
/* harmony import */ var _card_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-wrapper.component */ 70669);
/* harmony import */ var _personal_shopper_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./personal-shopper-routing.module */ 38764);
/* harmony import */ var _personal_shopper_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./personal-shopper.page */ 94274);








let PersonalShopperPageModule = class PersonalShopperPageModule {
};
PersonalShopperPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [src_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _personal_shopper_routing_module__WEBPACK_IMPORTED_MODULE_4__.PersonalShopperPageRoutingModule],
        providers: [_ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_0__.PhotoViewer],
        declarations: [_personal_shopper_page__WEBPACK_IMPORTED_MODULE_5__.PersonalShopperPage, _swipeablecards_directive__WEBPACK_IMPORTED_MODULE_2__.SwipeableDirective, _card_wrapper_component__WEBPACK_IMPORTED_MODULE_3__.CardWrapperComponent],
    })
], PersonalShopperPageModule);



/***/ }),

/***/ 94274:
/*!****************************************************************!*\
  !*** ./src/app/main/personal-shopper/personal-shopper.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalShopperPage": () => (/* binding */ PersonalShopperPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _personal_shopper_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personal-shopper.page.html?ngResource */ 55818);
/* harmony import */ var _personal_shopper_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personal-shopper.page.scss?ngResource */ 52013);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 63947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var src_shared_models_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/models/type */ 24528);
/* harmony import */ var src_shared_services_fcm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/services/fcm.service */ 53346);
/* harmony import */ var src_shared_services_personal_shopper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/services/personal-shopper.service */ 27264);
/* harmony import */ var src_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/services/storage.service */ 45785);
/* harmony import */ var src_shared_state_personal_shopper_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/state/personal-shopper-state.service */ 41021);
/* harmony import */ var _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor-community/firebase-analytics */ 67285);















let PersonalShopperPage = class PersonalShopperPage {
    constructor(spinner, personalShopperState, storageService, router, personalShopperService, fcmService) {
        this.spinner = spinner;
        this.personalShopperState = personalShopperState;
        this.storageService = storageService;
        this.router = router;
        this.personalShopperService = personalShopperService;
        this.fcmService = fcmService;
        this.results = [];
        this.articleImageIndex = 0;
        this.errorStatus = null;
        this.eventsChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
        this.isArticleDetailsExtended = false;
    }
    /*getDeliveredNotifications = async () => {
      const notificationList = await PushNotifications.getDeliveredNotifications();
      console.log('delivered notifications', notificationList.notifications);
    };*/
    ngOnInit() {
        this.tabBar = document.getElementById('tab-bar');
        //this.getDeliveredNotifications();
        this.personalShopperState.getAvailableProductsAsObservable().subscribe(products => {
            this.articleCards = products;
            this.articleImageIndex = 0;
        });
        this.spinner.hide('guardSpinner');
        this.currentIndex = this.articleCards.length - 1;
        console.log(this.currentIndex);
        this.brands = this.storageService.getJSONItemFromLocalStorage(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.LocalStorageConstants.BRANDS_AS_MAP);
        this.eventsChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(5000)).subscribe(result => {
            this.results = [];
            this.personalShopperService.sendEvent(result).catch(error => console.log(error));
        });
    }
    changeImageDisplayed(direction, index) {
        //this.spinner.show('spinner_image');
        const element = document.getElementById(`myImage${index}`);
        switch (direction) {
            case 'left':
                if (this.articleImageIndex > 0) {
                    this.articleImageIndex--;
                    element.src = this.articleCards[index].images[this.articleImageIndex];
                }
                break;
            case 'right':
                if (this.articleImageIndex < this.articleCards[index].images.length - 1) {
                    this.articleImageIndex++;
                    element.src = this.articleCards[index].images[this.articleImageIndex];
                }
                break;
        }
    }
    swiped(event, index) {
        console.log(this.articleCards[index].name + ' swiped ' + event + index);
        this.articleCards[index].visible = false;
        const actionEvent = {
            payload: {
                product_id: this.articleCards[index].id,
                version: 1,
                action: event === 2 ? src_shared_models_type__WEBPACK_IMPORTED_MODULE_3__.ActionEventType.LIKE : src_shared_models_type__WEBPACK_IMPORTED_MODULE_3__.ActionEventType.DISLIKE,
            },
        };
        this.results.push(actionEvent);
        this.eventsChange$.next(this.results);
        this.articleCards.splice(index, 1);
        this.currentIndex--;
        this.articleImageIndex = 0;
        if (this.articleCards.length === 1) {
            //todo: global observable ??
            this.personalShopperState
                .addNewProducts()
                .subscribe(() => this.articleCards = this.personalShopperState.getAvailableProducts());
        }
    }
    paned($event) {
        //if ($event === 1) { this.choiceIndicator= ActionEventType.LOVE }
        if ($event === 2) {
            this.choiceIndicator = src_shared_models_type__WEBPACK_IMPORTED_MODULE_3__.ActionEventType.LIKE;
        }
        //if ($event === 3) { this.choiceIndicator = ActionEventType.HATE}
        if ($event === 4) {
            this.choiceIndicator = src_shared_models_type__WEBPACK_IMPORTED_MODULE_3__.ActionEventType.DISLIKE;
        }
        if ($event === undefined) {
            this.choiceIndicator = null;
        }
    }
    ionViewWillEnter() {
        _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_8__.FirebaseAnalytics.setScreenName({
            screenName: "PersonalShopperScreen",
            nameOverride: "PersonalShopperScreen",
        });
        //this.spinner.show('spinner_image');
        /* console.log('enter');
        this.errorStatus = this.route.snapshot.paramMap.get("error");
        this.clotheIndexImg = 0;
        this.brands = this.storageService.getJSONItemFromLocalStorage(LocalStorageConstants.BRANDS_AS_MAP);*/
        //TODO/ change to observable
        //    this.cardsTinder = this.persoShopperState.getAvailableProducts();
        /*this.eventsChange$.pipe(debounceTime(5000)).subscribe((result) => {
          this.eventsList = []
          this.sendEvent({ events: result });
        });*/
    }
    extendArticleDetails(index) {
        this.articleCards[index].detailsVisible = !this.articleCards[index].detailsVisible;
        this.tabBar.style.display = this.articleCards[index].detailsVisible ? 'none' : 'flex';
        //document.getElementById('card-content').style.padding = '0 0 0 0 !important';
    }
    ionViewDidEnter() {
        this.spinner.hide('appSpinner');
    }
    doRefresh(event) {
        this.router.navigate(['/main/personal-shopper']).then(() => event.target.complete());
    }
    imageLoaded(index) {
        //this.spinner.hide('spinner_image');
    }
};
PersonalShopperPage.ctorParameters = () => [
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService },
    { type: src_shared_state_personal_shopper_state_service__WEBPACK_IMPORTED_MODULE_7__.PersonalShopperStateService },
    { type: src_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: src_shared_services_personal_shopper_service__WEBPACK_IMPORTED_MODULE_5__.PersonalShopperService },
    { type: src_shared_services_fcm_service__WEBPACK_IMPORTED_MODULE_4__.FcmService }
];
PersonalShopperPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-personal-shopper',
        template: _personal_shopper_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_personal_shopper_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PersonalShopperPage);



/***/ }),

/***/ 23497:
/*!**************************************************!*\
  !*** ./src/app/main/swipeablecards.directive.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwipeableDirective": () => (/* binding */ SwipeableDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


var Direction;
(function (Direction) {
    Direction[Direction["NONE"] = undefined] = "NONE";
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Right"] = 2] = "Right";
    Direction[Direction["Down"] = 3] = "Down";
    Direction[Direction["Left"] = 4] = "Left";
})(Direction || (Direction = {}));
let SwipeableDirective = class SwipeableDirective {
    constructor(el, renderer, changeDetector) {
        this.el = el;
        this.renderer = renderer;
        this.changeDetector = changeDetector;
        this.swipeAnimationDuration = 300;
        this.animationDuration = 0;
        this.isReleased = false;
        this.fixed = false;
        this.orientation = 'x';
        this.released = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.swiped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.paned = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.className = true;
        this.element = el.nativeElement;
        //
    }
    onPan(event) {
        if (this.allowSwipe) {
            this.handleSwipeChange(event);
        }
    }
    onPanEnd(event) {
        if (this.allowSwipe) {
            const direction = this.extractDirection(event);
            direction ? this.handleSwipeEnd(direction, this.animationDuration) : this.handleCancelSwipe(direction);
        }
    }
    get allowSwipe() {
        return !this.fixed && !this.isReleased;
    }
    ngAfterContentChecked() {
        //todo: too many events... maybe calculate height and width in tinder.component and give back through component
    }
    ngAfterViewInit() { }
    ngOnDestroy() {
        window.clearTimeout(this.timeoutId);
    }
    /*ngOnInit(): void {
      this.initializeOverlay();
    }
  
    private initializeOverlay(): void {
      this.overlay = document.createElement('div');
      this.overlay.className = 'swipe-card-overlay';
      this.renderer.appendChild(this.element, this.overlay);
    }*/
    translate({ x, y, rotate = 0, duration = 0 }) {
        const positionX = x && this.orientation.includes('x') ? x : 0;
        const positionY = y && this.orientation.includes('y') ? y : 0;
        this.renderer.setStyle(this.element, 'transition', `transform ${duration}ms ease`);
        this.renderer.setStyle(this.element, 'webkitTransform', `translate3d(${positionX}px, ${positionY}px, 0) rotate(${rotate}deg)`);
    }
    handleSwipeChange(event) {
        const direction = this.extractDirection(event);
        const opacity = (Math.abs(event.distance) * 0.5) / this.element.offsetWidth;
        //this.setBackgroundOverlay(direction, opacity);
        this.translate({
            x: event.deltaX,
            y: event.deltaY,
            rotate: (event.deltaX * 20) / this.element.clientWidth,
        });
        this.paned.emit(direction);
    }
    handleCancelSwipe(direction) {
        //this.resetBackgroundOverlay();
        this.translate({
            x: 0,
            y: 0,
            rotate: 0,
            duration: this.swipeAnimationDuration,
        });
        this.paned.emit(direction);
    }
    //private destroy(duration: number) {
    //this.resetElementStyles(duration);
    //this.resetBackgroundOverlay();
    //this.renderer.removeChild(this.element, this.overlay);
    //this.overlay = null;
    //}
    /* private setBackgroundOverlay(direction: number, opacity: number) {
      let color: string;
      switch(direction){
        case 1:
        color = '104,159,56'
        break;
        case 2 :
        color = '204,159,56'
        break;
        case 3 :
        color = '204,204,56'
        break;
        case 4 :
        color = '104,009,56'
        break;
      }
      this.renderer.setStyle(this.overlay, 'transition', 'opacity 0s ease');
      this.renderer.setStyle(this.overlay, 'background-color', `rgba(${color}, ${opacity.toString()})`);
    }*/
    /*private resetBackgroundOverlay(): void {
      this.renderer.setStyle(this.overlay, 'transition', `opacity ${this.animationDuration}ms ease`);
      this.renderer.setStyle(this.overlay, 'background-color', 'rgba(255,255,255,0)');
    }*/
    //private resetElementStyles(duration: number): void {
    //  this.renderer.setStyle(this.element, 'transition', `transform ${duration}s ease`);
    // this.renderer.setStyle(this.element, 'webkitTransform', 'translate3d(0, 0, 0) rotate(0deg)');
    // }
    extractDirection(event) {
        const element = document.getElementById('host');
        //const cs = getComputedStyle(element);
        this.width = element.clientWidth; //element.offsetWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
        this.height = element.clientHeight; //element.offsetHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
        this.releaseRadius = { x: this.width / 3, y: this.height / 3 };
        const conditionX = this.orientation.includes('x') && this.releaseRadius.x < Math.abs(event.deltaX || 0);
        const conditionY = this.orientation.includes('y') && this.releaseRadius.y < Math.abs(event.deltaY || 0);
        switch (this.orientation) {
            case 'y':
                if (conditionY) {
                    return event.deltaY > 0 ? Direction.Up : Direction.Down;
                }
                return Direction.NONE;
                break;
            case 'x':
                if (conditionX) {
                    return event.deltaX > 0 ? Direction.Right : Direction.Left;
                }
                return Direction.NONE;
                break;
            case 'xy':
                //todo improve
                if (conditionX && conditionY) {
                    return Direction.NONE;
                }
                else if (conditionX) {
                    return event.deltaX > 0 ? Direction.Right : Direction.Left;
                }
                else if (conditionY) {
                    return event.deltaY > 0 ? Direction.Down : Direction.Up;
                }
                break;
        }
    }
    /* private removeOverlay(direction: number): void {
      const {offsetHeight, offsetWidth, clientHeight, clientWidth} = this.element;
    const moveToY = direction === Direction.Up ? -1 : direction === Direction.Down ? 1 : 0;
    const moveToX = direction === Direction.Right ? 1 : direction === Direction.Left ? -1 : 0;
      const y = (offsetHeight + clientHeight) * moveToY;
      const x = (offsetWidth + clientWidth) * moveToX;
  
      this.setBackgroundOverlay(direction, 0.35);
      this.translate({
        x, y,
        rotate: (x * 20) / clientWidth,
        duration: 800
      });
    }*/
    handleSwipeEnd(direction, timeout) {
        //this.removeOverlay(direction);
        this.isReleased = true;
        const element = document.getElementById('host');
        const x = direction === Direction.Right ? element.clientWidth + 100 : -element.clientWidth - 100;
        const rotate = direction === Direction.Right ? 20 : -20;
        this.translate({ x, y: 5, rotate, duration: this.swipeAnimationDuration });
        this.timeoutId = window.setTimeout(() => {
            this.swiped.emit(direction);
            //this.released.emit();
        }, this.swipeAnimationDuration);
        this.paned.emit(undefined);
    }
    simulateSwipe(like) {
        this.handleSwipeEnd(like, this.swipeAnimationDuration);
    }
};
SwipeableDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }
];
SwipeableDirective.propDecorators = {
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['style.width.px',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['style.height.px',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    fixed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    orientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    released: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    swiped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    paned: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    className: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.swipe-card-heap',] }],
    onPan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['pan', ['$event'],] }],
    onPanEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['panend', ['$event'],] }]
};
SwipeableDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[swSwipeable]',
    })
], SwipeableDirective);



/***/ }),

/***/ 24528:
/*!***********************************!*\
  !*** ./src/shared/models/type.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionEventType": () => (/* binding */ ActionEventType)
/* harmony export */ });
var ActionEventType;
(function (ActionEventType) {
    ActionEventType["LIKE"] = "like";
    ActionEventType["DISLIKE"] = "dislike";
    ActionEventType["HATE"] = "hate";
    ActionEventType["LOVE"] = "add_to_wishlist";
})(ActionEventType || (ActionEventType = {}));


/***/ }),

/***/ 2791:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/main/personal-shopper/card-wrapper.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIDpob3N0IHsKICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgICAgZGlzcGxheTogYmxvY2s7CiAgICAgIH0KICAgIA%3D%3D!./src/app/main/personal-shopper/card-wrapper.component.ts ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n      :host {\n        position: relative;\n        display: block;\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtd3JhcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0Usa0JBQWtCO1FBQ2xCLGNBQWM7TUFDaEIiLCJmaWxlIjoiY2FyZC13cmFwcGVyLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgOmhvc3Qge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICJdfQ== */";

/***/ }),

/***/ 52013:
/*!*****************************************************************************!*\
  !*** ./src/app/main/personal-shopper/personal-shopper.page.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "/** Ionic CSS Variables **/\n:root {\n  --ion-color-white: #ffffff;\n  --ion-color-black: #000000;\n  /** primary color**/\n  --ion-color-primary: #ffde59;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #111111;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #ffeeae;\n  --ion-color-primary-tint: #ffde59;\n  /** secondary for text**/\n  --ion-color-secondary: #111111;\n  --ion-color-secondary-rgb: 17, 17, 17;\n  --ion-color-secondary-contrast: #ffde59;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0f0f0f;\n  --ion-color-secondary-tint: #292929;\n  /** tertiary used for input background and background icone**/\n  --ion-color-tertiary: #dbdbdb;\n  --ion-color-tertiary-rgb: 219, 219, 219;\n  --ion-color-tertiary-contrast: #000000;\n  --ion-color-tertiary-contrast-rgb: 0, 0, 0;\n  --ion-color-tertiary-shade: #c1c1c1;\n  --ion-color-tertiary-tint: #dfdfdf;\n  /** success **/\n  --ion-color-success: #01db72;\n  --ion-color-success-rgb: 1, 219, 114;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #01c164;\n  --ion-color-success-tint: #1adf80;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #ff1166;\n  --ion-color-danger-rgb: 255, 17, 102;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e00f5a;\n  --ion-color-danger-tint: #ff2976;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: rgba(255, 222, 89, 0.19);\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** Tab-bar **/\n  --ion-toolbar-background: white;\n  --text-font-style: \"IBMPlexSans\";\n  --title-font-style: \"IBMPlexSans\";\n}\n:root .spinner-bubbles {\n  color: var(--ion-color-primary);\n}\n:root ion-tab-button.tab-selected {\n  --color-selected: var(--ion-color-primary);\n}\n:root ion-segment {\n  --background: var(--ion-color-white);\n}\n:root ion-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --color-checked: black;\n  --indicator-transition: none;\n}\n:root ion-button {\n  text-transform: none;\n}\n:host {\n  margin-top: var(--ion-safe-area-top, 0);\n}\n.host {\n  height: calc(100% - 80px);\n  padding: 2rem 1rem 1rem 1rem;\n}\n@media screen and (max-width: 370px) {\n  .host {\n    height: calc(100% - 64px);\n  }\n}\n.host .cards-container {\n  height: calc(100% - 108px);\n  width: 100%;\n}\n.host .tinder--status {\n  position: absolute;\n  top: 25%;\n  z-index: 99;\n  width: calc(100% - 2rem);\n  height: 200px;\n  text-align: center;\n  pointer-events: none;\n}\n.host .tinder--status div {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n}\n.host .tinder--status div ion-icon {\n  height: 100%;\n  width: 100%;\n}\n.host .tinder--status svg {\n  transition: all 0.3s ease-in-out;\n  position: absolute;\n  width: 100px;\n  margin-left: -50px;\n}\n.host .tinder--status > div {\n  transition: all 0.3s ease-in-out;\n}\nsw-card-wrapper {\n  height: 100%;\n  display: block;\n  width: 100%;\n  border-radius: 20px;\n}\nsw-card-wrapper .card {\n  display: block;\n  width: 100%;\n  height: 100%;\n  border-radius: 20px;\n  overflow: hidden;\n  position: absolute;\n  background-color: white;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);\n}\nsw-card-wrapper .card .image-container {\n  width: 100%;\n  height: calc(100% - 84px);\n  position: relative;\n}\nsw-card-wrapper .card .image-container img {\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  object-fit: cover;\n}\nsw-card-wrapper .card .image-container .btn_left_click,\nsw-card-wrapper .card .image-container .btn_right_click {\n  height: 100%;\n  left: 0px;\n  width: 50%;\n  position: absolute;\n  background-color: Transparent;\n  outline: none;\n}\nsw-card-wrapper .card .image-container .btn_right_click {\n  left: 50%;\n}\nsw-card-wrapper .card .image-container .container {\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n  position: absolute;\n  bottom: 8px;\n  padding: 0 1rem 0 1rem;\n}\nsw-card-wrapper .card .image-container .container .bar {\n  display: inline-block;\n  background-color: rgba(255, 255, 255, 0.8);\n  overflow: hidden;\n  text-align: center;\n  border-radius: 1rem;\n  height: 6px;\n}\nsw-card-wrapper .card .image-container .container .progress_bar_1 {\n  width: 100%;\n}\nsw-card-wrapper .card .image-container .container .progress_bar_2 {\n  width: 48%;\n}\nsw-card-wrapper .card .image-container .container .progress_bar_3 {\n  width: 31%;\n}\nsw-card-wrapper .card .image-container .container .progress_bar_4 {\n  width: 23%;\n}\nsw-card-wrapper .card .image-container .container .progress_bar_5 {\n  width: 18%;\n}\nsw-card-wrapper .card .image-container .container .progress_bar_6 {\n  width: 14.5%;\n}\nsw-card-wrapper .card .card-content {\n  position: relative;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  height: 84px;\n  padding: 1rem 1rem 0.5rem 1rem;\n  width: 100%;\n}\nsw-card-wrapper .card .card-content .infos {\n  position: relative;\n  align-items: center;\n  display: inline-flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: normal;\n  width: 100%;\n  height: 1.25rem;\n}\nsw-card-wrapper .card .card-content .infos .brand {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: #292929;\n  font-weight: normal;\n  padding-left: 1rem;\n}\nsw-card-wrapper .card .card-content .infos .price {\n  font-size: 1rem;\n  font-family: \"IBMPlexSansMedium\";\n  color: var(--ion-color-secondary);\n  font-weight: normal;\n}\nsw-card-wrapper .card .card-content .sub-infos {\n  position: relative;\n  align-items: center;\n  display: inline-flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  width: 100%;\n  height: 2.5rem;\n}\nsw-card-wrapper .card .card-content .sub-infos .name {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: var(--ion-color-secondary);\n  font-weight: 600;\n  line-height: 20px;\n  height: 100%;\n  /* -webkit-line-clamp: 2; */\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\nsw-card-wrapper .card .card-content ion-icon {\n  height: 1.5rem;\n  width: 1.5rem;\n  color: #9d9c99;\n}\nsw-card-wrapper .card .card-content .details-container {\n  width: 100%;\n}\nsw-card-wrapper .card .card-content .details-container .group {\n  border-top: 0.5px solid #dbdbdb;\n}\nsw-card-wrapper .card .card-content .details-container .group .group-title {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: #292929;\n  font-weight: 600;\n}\nsw-card-wrapper .card .card-content .details-container .group .group-subtitle {\n  font-size: 14px;\n  font-family: \"IBMPlexSansMedium\";\n  color: var(--ion-color-secondary);\n  font-weight: normal;\n}\nsw-card-wrapper .card .card-content .details-container .group .group-value {\n  font-size: 14px;\n  font-family: \"IBMPlexSans\";\n  color: #292929;\n  font-weight: normal;\n}\nsw-card-wrapper .card .card-content .details-container .group:nth-last-child(2) {\n  margin-bottom: 64px;\n}\nsw-card-wrapper .card .card-content .details-container .button {\n  width: calc(100% - 4rem);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  bottom: 0.5rem;\n}\nsw-card-wrapper .card .card-content .details-container .button ion-button {\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n  width: 60%;\n  height: 40px;\n  --border-radius: 32px;\n}\nsw-card-wrapper .card .card-content .details-container .button ion-button ion-icon {\n  margin-right: 1rem;\n}\nsw-card-wrapper .visible {\n  display: block;\n}\nsw-card-wrapper .hidden {\n  display: none;\n}\n.button_box {\n  height: 108px;\n  width: 100%;\n  padding-top: 32px;\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n.button_box .choice-btn {\n  display: flex;\n  height: 100%;\n  width: 70%;\n  justify-content: space-evenly;\n}\n.button_box .choice-btn .large_button {\n  width: 56px;\n  height: 56px;\n  --border-radius: 50%;\n  --border-width: 0;\n  --box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n.button_box .disclaimer {\n  position: absolute;\n  right: 0;\n  top: 8px;\n  height: 2.5rem;\n  width: 2.5rem;\n}\n.button_box .disclaimer .cone_button {\n  height: 100%;\n  width: 100%;\n  --padding-start: 0;\n  --padding-end: 0;\n  --border-width: 0;\n  --box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n.button_box .button-container {\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  width: 112px;\n  height: 100%;\n}\n.button_box .button-container .small_button {\n  width: 48px;\n  height: 48px;\n  --border-radius: 50%;\n  --border-width: 0;\n  --padding-start: 14px;\n  --padding-end: 14px;\n  --box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);\n}\n.space {\n  width: 12px;\n}\ntext-cone {\n  font-size: 1rem;\n  font-family: \"IBMPlexSans\";\n  color: #111111;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwicGVyc29uYWwtc2hvcHBlci5wYWdlLnNjc3MiLCIuLi8uLi8uLi90aGVtZS9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSwwQkFBQTtBQW9CQTtFQUNFLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsNkRBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFNQSxjQUFBO0VBbUJBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFD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Q0Usb0JBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUEwRUo7QUF4RUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7QUEwRU47QUFyRUE7RUFDRSxXQUFBO0FBd0VGO0FBckVBO0VDOU1FLGVBRDZCO0VBRTdCLDBCQUZzRjtFQUd0RixjRnBHUTtFRXFHUixnQkFKbUU7QUQyUnJFIiwiZmlsZSI6InBlcnNvbmFsLXNob3BwZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOlxuLy8gaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvXG5cbi8qKiBJb25pYyBDU1MgVmFyaWFibGVzICoqL1xuXG4vLyBjb2xvcnNcbiRibGFjazI6ICM0MDQwM2Y7XG4kZ3JheTYwMDogIzExMTExMTsgLy91c2VkXG4kZ3JheTUwMDogIzI5MjkyOTsgLy91c2VkXG4kZ3JheTQwMDogIzU5NTk1OTsgLy91c2VkXG4kZ3JheTMwMDogIzg4ODg4ODsgLy91c2VkXG4kZ3JheTIwMDogI0I4QjhCODtcbiRncmF5MjogIzlkOWM5OTtcbiRncmF5MzogI2RiZGJkYjtcbiR5ZWxsb3cxMDA6ICNmZmZjZWY7XG4keWVsbG93MjAwOiAjZmZmNWNlO1xuJHllbGxvdzM6ICNmZGU4OTY7XG4keWVsbG93NDogI2ZjZWViNjtcbiR5ZWxsb3c1OiAjZmJmMmQ0O1xuJHllbGxvdzY6ICNGRkRFNTk7XG4kd2hpdGU4MDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuJGRhcms3NTogcmdiYSgwLCAwLCAwLCAwLjI1KTsgLy9idXR0b25zIHNoYWRvd1xuXG46cm9vdCB7XG4gIC0taW9uLWNvbG9yLXdoaXRlOiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1ibGFjazogIzAwMDAwMDtcbiAgLyoqIHByaW1hcnkgY29sb3IqKi9cbiAgLS1pb24tY29sb3ItcHJpbWFyeTogI2ZmZGU1OTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDU2LCAxMjgsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogIzExMTExMTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICNmZmVlYWU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogI2ZmZGU1OTtcblxuICAvKiogc2Vjb25kYXJ5IGZvciB0ZXh0KiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzExMTExMTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogMTcsIDE3LCAxNztcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZkZTU5O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICMwZjBmMGY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjMjkyOTI5O1xuXG4gIC8qKiB0ZXJ0aWFyeSB1c2VkIGZvciBpbnB1dCBiYWNrZ3JvdW5kIGFuZCBiYWNrZ3JvdW5kIGljb25lKiovXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjZGJkYmRiOyAvL3NhbWUgYXMgZ3JheTNcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAyMTksIDIxOSwgMjE5O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogI2MxYzFjMTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogI2RmZGZkZjtcblxuICAvKiogc3VjY2VzcyAqKi9cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzAxZGI3MjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDEsIDIxOSwgMTE0O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzAxYzE2NDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjMWFkZjgwO1xuXG4gIC8qKiB3YXJuaW5nICoqL1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZjNDA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAxOTYsIDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBhYzA4O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmNhMjI7XG5cbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZmYxMTY2O1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNTUsIDE3LCAxMDI7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZTAwZjVhO1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2ZmMjk3NjtcblxuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XG5cbiAgLyoqIG1lZGl1bSAqKi9cbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTI5NDljO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNDYsIDE0OCwgMTU2O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzgwODI4OTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICM5ZDlmYTY7XG5cbiAgLyoqIGxpZ2h0ICoqL1xuICAtLWlvbi1jb2xvci1saWdodDogcmdiYSgyNTUsIDIyMiwgODksIDAuMTkpO1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xuXG4gIC5zcGlubmVyLWJ1YmJsZXMge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cblxuICAvKiogVGFiLWJhciAqKi9cbiAgaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIHtcbiAgICAtLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cblxuICBpb24tc2VnbWVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICB9XG5cbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tY29sb3ItY2hlY2tlZDogYmxhY2s7XG4gICAgLS1pbmRpY2F0b3ItdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB9XG5cbiAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS10ZXh0LWZvbnQtc3R5bGU6ICdJQk1QbGV4U2Fucyc7XG4gIC0tdGl0bGUtZm9udC1zdHlsZTogJ0lCTVBsZXhTYW5zJztcbn1cblxuLy8gVmVyaWZpZWRcbiR3aWR0aC1zZDogMzAwcHg7IC8vZm9sZFxuJHdpZHRoLW1kOiAzODBweDsgLy9pcGhvbmUgU0VcbiR3aWR0aC1sZDogNDEycHg7IC8vaXBob25lIFhSXG4kd2lkdGgteGxkOiA3NjhweDsgLy9pcGFkIiwiQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvdmFyaWFibGVzLnNjc3MnO1xuXG46aG9zdCB7XG4gIG1hcmdpbi10b3A6IHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wLCAwKTtcbn1cblxuLmhvc3Qge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDgwcHgpO1xuICBwYWRkaW5nOiAycmVtIDFyZW0gMXJlbSAxcmVtO1xuXG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzcwcHgpIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHgpO1xuICB9XG5cbiAgLmNhcmRzLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDhweCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAudGluZGVyLS1zdGF0dXMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDI1JTtcbiAgICB6LWluZGV4OiA5OTtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMnJlbSk7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICBkaXYge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudGluZGVyLS1zdGF0dXMgc3ZnIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcbiAgfVxuXG4gIC50aW5kZXItLXN0YXR1cz5kaXYge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICB9XG59XG5cbnN3LWNhcmQtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICAvL3otaW5kZXg6IDU7XG4gIC8vYm94LXNoYWRvdzogMHB4IDRweCA0cHggJGRhcms3NTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcblxuICAuY2FyZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy9oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMCU7IC8vZml0LWNvbnRlbnQgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYigwIDAgMCAvIDUlKTtcblxuICAgIC5pbWFnZS1jb250YWluZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDg0cHgpO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgfVxuXG4gICAgICAuYnRuX2xlZnRfY2xpY2ssXG4gICAgICAuYnRuX3JpZ2h0X2NsaWNrIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogVHJhbnNwYXJlbnQ7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5idG5fcmlnaHRfY2xpY2sge1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICB9XG5cbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiA4cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbSAwIDFyZW07XG5cbiAgICAgICAgLmJhciB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTgwO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAvL1RPRE86IGZpbmQgc29tZXRoaW5nIG1vcmUgZHluYW1pY1xuICAgICAgICAucHJvZ3Jlc3NfYmFyXzEge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2dyZXNzX2Jhcl8yIHtcbiAgICAgICAgICB3aWR0aDogNDglO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2dyZXNzX2Jhcl8zIHtcbiAgICAgICAgICB3aWR0aDogMzElO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2dyZXNzX2Jhcl80IHtcbiAgICAgICAgICB3aWR0aDogMjMlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2dyZXNzX2Jhcl81IHtcbiAgICAgICAgICB3aWR0aDogMTglO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2dyZXNzX2Jhcl82IHtcbiAgICAgICAgICB3aWR0aDogMTQuNSU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FyZC1jb250ZW50IHtcbiAgICAgIEBpbmNsdWRlIGZsZXgoY29sdW1uLCBjZW50ZXIsIHNwYWNlLWJldHdlZW4sIG5vd3JhcCwgZmFsc2UsIHJlbGF0aXZlKTtcbiAgICAgIGhlaWdodDogODRweDsgLy9maXQtY29udGVudDtcbiAgICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAwLjVyZW0gMXJlbTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAuaW5mb3Mge1xuICAgICAgICBAaW5jbHVkZSBmbGV4KHJvdywgY2VudGVyLCBub3JtYWwsIG5vd3JhcCwgdHJ1ZSwgcmVsYXRpdmUpO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxLjI1cmVtO1xuXG4gICAgICAgIC5icmFuZCB7XG4gICAgICAgICAgQGluY2x1ZGUgdGl0bGUoMXJlbSwgJ0lCTVBsZXhTYW5zJywgJGdyYXk1MDAsIG5vcm1hbCk7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByaWNlIHtcbiAgICAgICAgICBAaW5jbHVkZSB0aXRsZSgxcmVtLCAnSUJNUGxleFNhbnNNZWRpdW0nLCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSwgbm9ybWFsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuc3ViLWluZm9zIHtcbiAgICAgICAgQGluY2x1ZGUgZmxleChyb3csIGNlbnRlciwgZmxleC1zdGFydCwgbm93cmFwLCB0cnVlLCByZWxhdGl2ZSk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcblxuICAgICAgICAubmFtZSB7XG4gICAgICAgICAgQGluY2x1ZGUgdGl0bGUoMXJlbSwgJ0lCTVBsZXhTYW5zJywgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSksIDYwMCk7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIC8qIC13ZWJraXQtbGluZS1jbGFtcDogMjsgKi9cbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgIHdpZHRoOiAxLjVyZW07XG4gICAgICAgIGNvbG9yOiAkZ3JheTI7XG4gICAgICB9XG5cbiAgICAgIC5kZXRhaWxzLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIC5ncm91cCB7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMC41cHggc29saWQgJGdyYXkzO1xuXG4gICAgICAgICAgLmdyb3VwLXRpdGxlIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHRleHQoMXJlbSwgJ0lCTVBsZXhTYW5zJywgJGdyYXk1MDAsIDYwMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmdyb3VwLXN1YnRpdGxlIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHRleHQoMTRweCwgJ0lCTVBsZXhTYW5zTWVkaXVtJywgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSksIG5vcm1hbCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmdyb3VwLXZhbHVlIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHRleHQoMTRweCwgJ0lCTVBsZXhTYW5zJywgJGdyYXk1MDAsIG5vcm1hbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmdyb3VwOm50aC1sYXN0LWNoaWxkKDIpIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2NHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDRyZW0pO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgYm90dG9tOiAwLjVyZW07XG5cbiAgICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMC41cmVtO1xuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMC41cmVtO1xuICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMzJweDtcblxuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnZpc2libGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4uYnV0dG9uX2JveCB7XG4gIGhlaWdodDogMTA4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAuY2hvaWNlLWJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcblxuICAgIC5sYXJnZV9idXR0b24ge1xuICAgICAgd2lkdGg6IDU2cHg7XG4gICAgICBoZWlnaHQ6IDU2cHg7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xuICAgICAgLS1ib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpOyAvLyRkYXJrNzU7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAgIH1cbiAgfVxuXG4gIC5kaXNjbGFpbWVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA4cHg7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgd2lkdGg6IDIuNXJlbTtcblxuICAgIC5jb25lX2J1dHRvbiB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgICAtLWJvcmRlci13aWR0aDogMDtcbiAgICAgIC0tYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTsgLy8kZGFyazc1O1xuICAgIH1cbiAgfVxuXG5cblxuICAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICB3aWR0aDogMTEycHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgLnNtYWxsX2J1dHRvbiB7XG4gICAgICB3aWR0aDogNDhweDtcbiAgICAgIGhlaWdodDogNDhweDtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgLS1ib3JkZXItd2lkdGg6IDA7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDE0cHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiAxNHB4O1xuICAgICAgLS1ib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTsgLy8kZGFyazc1O1xuICAgIH1cbiAgfVxufVxuXG4uc3BhY2Uge1xuICB3aWR0aDogMTJweDtcbn1cblxudGV4dC1jb25lIHtcbiAgQGluY2x1ZGUgcmVndWxhclRleHQoKVxufSIsIkBtaXhpbiB0aXRsZSgkZm9udC1zaXplOiAycmVtLFxuICAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycsXG4gICRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSksXG4gICRmb250LXdlaWdodDogYm9sZCkge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cblxuXG5AbWl4aW4gc2ltcGxlX2J1dHRvbigkd2lkdGg6IDI1JSwgJGhlaWdodDogMi41cmVtLCAkY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpKSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbiAgLS1jb2xvcjogJGNvbG9yO1xufVxuXG5AbWl4aW4gaWNvbigkd2lkdGg6IDFyZW0sICRoZWlnaHQ6IDFyZW0pIHtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xufVxuXG5AbWl4aW4gdGV4dCgkZm9udC1zaXplOiAwLjg3NXJlbSxcbiAgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnLFxuICAkY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpLFxuICAkZm9udC13ZWlnaHQ6IG5vcm1hbCkge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiB0ZXh0LW92ZXJmbG93KCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuXG4vL3ZlcmlmaWVkXG5cbkBtaXhpbiBmbGV4KCRkaXJlY3Rpb246IHJvdywgJGFsaWduLWl0ZW1zOiBjZW50ZXIsICRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQsICR3cmFwOiBub3dyYXAsICRpbmxpbmU6IGZhbHNlLCAkcG9zaXRpb246IHJlbGF0aXZlKSB7XG4gIHBvc2l0aW9uOiAkcG9zaXRpb247XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ24taXRlbXM7XG5cbiAgQGlmICRpbmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB9XG5cbiAgQGVsc2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbiAgZmxleC13cmFwOiAkd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeS1jb250ZW50O1xufVxuXG5AbWl4aW4gYnV0dG9uKCR3aWR0aDogMjUlLCAkaGVpZ2h0OiAyLjVyZW0sICRmb250LXNpemU6IDAuODc1cmVtLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycsICRmb250LXdlaWdodDogNjAwKSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xuICBtaW4taGVpZ2h0OiAkaGVpZ2h0O1xufVxuXG5AbWl4aW4gd2hpdGVUaXRsZSgkZm9udC1zaXplOiAxLjc1cmVtLCAkY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSksICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gd2hpdGVTdWJ0aXRsZSgkZm9udC1zaXplOiAxcmVtLCAkY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSksICRmb250LXdlaWdodDogNjAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gYmxhY2tUaXRsZSgkZm9udC1zaXplOiAxLjc1cmVtLCAkY29sb3I6ICRncmF5NTAwLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnLCApIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xuICBtYXJnaW46IDBweDtcbn1cblxuQG1peGluIGJsYWNrU3VidGl0bGUoJGZvbnQtc2l6ZTogMXJlbSwgJGNvbG9yOiAkZ3JheTUwMCwgJGZvbnQtd2VpZ2h0OiA2MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiBtZWRpdW1UZXh0KCRmb250LXNpemU6IDAuNzVyZW0sICRjb2xvcjogJGdyYXk1MDAsICRmb250LXdlaWdodDogNTAwLCAkZm9udC1mYW1pbHk6ICdJQk1QbGV4U2FucycpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xufVxuXG5AbWl4aW4gcmVndWxhclRleHQoJGZvbnQtc2l6ZTogMXJlbSwgJGNvbG9yOiAkZ3JheTYwMCwgJGZvbnQtd2VpZ2h0OiA0MDAsICRmb250LWZhbWlseTogJ0lCTVBsZXhTYW5zJykge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG59XG5cbkBtaXhpbiBzZW1pQm9sZFRleHQoJGZvbnQtc2l6ZTogMnJlbSwgJGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpLCAkZm9udC13ZWlnaHQ6IDYwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn1cblxuQG1peGluIGJvbGRUZXh0KCRmb250LXNpemU6IDEuMTI1cmVtLCAkY29sb3I6ICRncmF5NjAwLCAkZm9udC13ZWlnaHQ6IDcwMCwgJGZvbnQtZmFtaWx5OiAnSUJNUGxleFNhbnMnKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbn0iXX0= */";

/***/ }),

/***/ 55818:
/*!*****************************************************************************!*\
  !*** ./src/app/main/personal-shopper/personal-shopper.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"page\">\n  <div class=\"host\" *ngIf=\"errorStatus === null; else errorRequestSwipe\">\n    <div class=\"cards-container\" *ngIf=\"articleCards.length; else noCards\">\n      <div class=\"tinder--status\">\n        <div [style.opacity]=\"choiceIndicator === 'dislike' ? '1':'0'\">\n          <ion-icon color=\"danger\" name=\"close\"></ion-icon>\n        </div>\n        <div [style.opacity]=\"choiceIndicator === 'like' ? '1':'0'\">\n          <ion-icon color=\"primary\" slot=\"icon-only\" name=\"heart\"></ion-icon>\n        </div>\n        <!--<div [style.opacity]=\"choiceIndicator === 'add_to_wishlist' ? '1':'0'\">\n        <ion-icon color=\"danger\" src=\"assets/icon/shopping-cart-add.svg\"></ion-icon>\n      </div>\n      <div [style.opacity]=\"choiceIndicator === 'hate' ? '1':'0'\">\n        <ion-icon color=\"secondary\" name=\"bookmark-outline\"></ion-icon>\n      </div>-->\n      </div>\n      <sw-card-wrapper #cardWrapper id=\"host\">\n        <div class=\"card\" [ngStyle]=\"{ zIndex: articleCards.length - index}\" swSwipeable *ngFor=\"let article of articleCards, let index = index\" [class.visible]=\"article.visible\"\n          [class.hidden]=\"!article.visible\" [orientation]=\"'x'\" (swiped)=\"swiped($event, index)\" (paned)=\"paned($event)\">\n          <div class=\"image-container\">\n            <img #tinderCardImage id=\"myImage{{index}}\" (load)=\"imageLoaded(index)\" [src]=\"article.images[0]\" [alt]=\"article.name\" />\n            <ngx-spinner name=\"spinner_image\" bdColor=\"#ffffff\" size=\"small\" color=\"#ffde59\" type=\"ball-fussion\" [fullScreen]=\"false\"></ngx-spinner>\n            <button class=\"btn_left_click\" (click)=\"changeImageDisplayed('left', index)\"></button>\n            <button class=\"btn_right_click\" (click)=\"changeImageDisplayed('right', index)\"></button>\n            <div class=\"container\" *ngIf=\"articleCards.length -1 === index\">\n              <span class=\"bar progress_bar_{{article.images.length}}\" *ngFor=\"let image of article.images; index as id\"\n                [style.background-color]=\"id === articleImageIndex ? '#ffde59':'#e6e6e6'\">\n              </span>\n            </div>\n            <div class=\"container\" *ngIf=\"articleCards.length -1 !== index\">\n              <span class=\"bar progress_bar_{{article.images.length}}\" *ngFor=\"let image of article.images; index as id\"\n                [style.background-color]=\"id === articleImageIndex ? '#ffde59':'#e6e6e6'\">\n              </span>\n            </div>\n          </div>\n          <div class=\"card-content\" id=\"card-content\">\n\n            <div class=\"sub-infos\">\n              <span class=\"name\">{{article.name}}</span>\n            </div>\n            <div class=\"infos\">\n              <span class=\"price\">{{article.price}}</span>\n              <span class=\"brand\">{{brands[article.brand].fr_display}}</span>\n            </div>\n            <!--<ion-icon name=\"chevron-down-outline\" *ngIf=\"!article.detailsVisible\"\n              (click)=\"extendArticleDetails(index); cardWrapper.fixCard(article.detailsVisible)\"></ion-icon>\n            <ion-icon name=\"chevron-up-outline\" *ngIf=\"article.detailsVisible\"\n              (click)=\"extendArticleDetails(index); cardWrapper.fixCard(article.detailsVisible)\"></ion-icon>-->\n            <div *ngIf=\"article.detailsVisible\" class=\"details-container\">\n              <div class=\"group\">\n                <p class=\"group-title\">Taille</p>\n                <!--<ion-segment (ionChange)=\"segmentChanged($event)\" value=\"taille\">\n                <ion-segment-button id=\"Segment-{{ segmentTitle }}-menu\" value=\"{{ segmentTitle }}\"\n                  *ngFor=\"let segmentTitle of segmentsTitles\">\n                  <ion-label>{{ segmentTitle | translate }}</ion-label>\n                </ion-segment-button>\n              </ion-segment>-->\n              </div>\n              <div class=\"group\">\n                <p class=\"group-title\">Groupe 1</p>\n                <p>\n                  <span class=\"group-subtitle\">Forme du col : </span><span class=\"group-value\">Col rond</span>\n                </p>\n                <p>\n                  <span class=\"group-subtitle\">Niveau de transparence : </span><span class=\"group-value\">Aucune</span>\n                </p>\n                <p>\n                  <span class=\"group-subtitle\">Référence : </span><span class=\"group-value\">BA1200CE-A11</span>\n                </p>\n                <p>\n                  <span class=\"group-subtitle\">Couleurs : </span><span class=\"group-value\">Blanc, Bleu marine</span>\n                </p>\n              </div>\n              <div class=\"group\">\n                <p class=\"group-title\">Groupe 2</p>\n                <p>\n                  <span class=\"group-subtitle\">Composition : </span><span class=\"group-value\">100% Coton</span>\n                </p>\n                <p>\n                  <span class=\"group-subtitle\">Conseils d'entretien : </span><span class=\"group-value\">Lavage en machine\n                    à 40°C</span>\n                </p>\n              </div>\n              <div class=\"group\">\n                <p class=\"group-title\">Groupe 3</p>\n                <p>\n                  <span class=\"group-subtitle\">Coupe : </span><span class=\"group-value\">Regular</span>\n                </p>\n                <p>\n                  <span class=\"group-subtitle\">Longueur : </span><span class=\"group-value\">Normale</span>\n                </p>\n                <p>\n                  <span class=\"group-subtitle\">Longueur des manches : </span><span class=\"group-value\">Manches\n                    courtes</span>\n                </p>\n              </div>\n              <div class=\"button\">\n                <ion-button>\n                  <ion-icon slot=\"start\" color=\"danger\" src=\"assets/icon/shopping-cart-add.svg\"></ion-icon>\n                  Ajouter au panier\n                </ion-button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </sw-card-wrapper>\n      <div class=\"button_box\">\n        <div class=\"choice-btn\">\n          <ion-button (click)=\"cardWrapper.dislike()\" mode=\"ios\" class=\"large_button\" shape=\"round\" fill=\"outline\">\n            <ion-icon color=\"danger\" name=\"close\"></ion-icon>\n          </ion-button>\n          <ion-button (click)=\"cardWrapper.like()\" mode=\"ios\" class=\"large_button\" shape=\"round\" fill=\"outline\">\n            <ion-icon color=\"primary\" name=\"heart\"></ion-icon>\n          </ion-button>\n        </div>\n        <!--<div class=\"button-container\">\n        <ion-button class=\"small_button\" mode=\"ios\" shape=\"round\" fill=\"outline\">\n          <ion-icon color=\"secondary\" name=\"bookmark-outline\"></ion-icon>\n        </ion-button>\n        <ion-button color=\"primary\" class=\"small_button\" mode=\"ios\" shape=\"round\">\n          <ion-icon src=\"assets/icon/shopping-cart-add.svg\"></ion-icon>\n        </ion-button>\n      </div>-->\n        <div class=\"disclaimer\">\n          <ion-button id=\"click-trigger\" mode=\"ios\" color=\"white\" class=\"cone_button\" shape=\"round\">\n            <ion-icon color=\"primary\" src=\"../../../assets/icon/road-cone.svg\"></ion-icon>\n          </ion-button>\n        </div>\n      </div>\n    </div>\n    <ng-template #noCards>\n      <p class=\"noCards\">{{'ERROR.PERSONAL_SHOPPER.NO_MORE_CLOTHES' | translate}}</p>\n    </ng-template>\n  </div>\n  <ng-template #errorRequestSwipe>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content refreshingSpinner=\"bubbles\" refreshingText=\"Chargement...\">\n      </ion-refresher-content>\n    </ion-refresher>\n    <div class=\"error-container\">\n      {{'ERROR.PERSONAL_SHOPPER.NETWORK_ERROR' | translate}}\n    </div>\n  </ng-template>\n</ion-content>\n\n<ion-popover trigger=\"click-trigger\" [keepContentsMounted]=\"true\" triggerAction=\"click\" side=\"top\" alignment=\"end\" mode=\"md\">\n  <ng-template>\n    <ion-content class=\"text-cone ion-padding\">\n      {{'ERROR.PERSONAL_SHOPPER.FAKE_DATA' | translate}}\n    </ion-content>\n  </ng-template>\n</ion-popover>";

/***/ })

}]);
//# sourceMappingURL=src_app_main_personal-shopper_personal-shopper_module_ts.js.map