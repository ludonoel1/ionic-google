"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["common"],{

/***/ 33130:
/*!**********************************************!*\
  !*** ./src/shared/services/login.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _utils_subscriber_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/subscriber-component */ 16391);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/filesystem */ 91662);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ 16818);
/* harmony import */ var _toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toaster.service */ 29238);
/* harmony import */ var _capacitor_firebase_authentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor-firebase/authentication */ 50331);










let LoginService = class LoginService extends _utils_subscriber_component__WEBPACK_IMPORTED_MODULE_0__.SubscriberComponent {
    constructor(angularFireAuth, router, toaster) {
        super();
        this.angularFireAuth = angularFireAuth;
        this.router = router;
        this.toaster = toaster;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    }
    signInEmail(credentials) {
        return _capacitor_firebase_authentication__WEBPACK_IMPORTED_MODULE_4__.FirebaseAuthentication.signInWithEmailAndPassword({ email: credentials.email, password: credentials.password })
            .then((userInfos) => {
            return userInfos;
        })
            .catch(err => {
            throw new Error(err.code);
        });
    }
    handleProvider(provider) {
        switch (provider) {
            case 'google':
                return _capacitor_firebase_authentication__WEBPACK_IMPORTED_MODULE_4__.FirebaseAuthentication.signInWithGoogle().then((result) => {
                    var _a;
                    const credential = firebase_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider.credential((_a = result.credential) === null || _a === void 0 ? void 0 : _a.idToken);
                    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithCredential)((0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(), credential);
                });
                break;
            case 'facebook':
                //return FirebaseAuthentication.signInWithFacebook() //this.signInWithProvider(new FacebookAuthProvider());
                break;
            //only case for register by email
            case "email":
                this.router.navigate(['/register/0']);
        }
    }
    registerUser(credentials) {
        return this.angularFireAuth
            .createUserWithEmailAndPassword(credentials.email, credentials.password)
            .then(res => {
            this.sendVerificationMail();
            return this.signInEmail(credentials).then(userCredentials => { return true; })
                .catch(error => { throw new Error(error.code); });
        })
            .catch(error => {
            throw new Error(error.code);
        });
    }
    sendVerificationMail() {
        return this.angularFireAuth.currentUser.then((user) => {
            return user.sendEmailVerification();
        });
    }
    passwordRecover(passwordResetEmail) {
        return this.angularFireAuth
            .sendPasswordResetEmail(passwordResetEmail);
    }
    /* Sign out */
    signOut() {
        return this.deleteCacheFolder().then(result => {
            console.log("cache cleared");
            return _capacitor_firebase_authentication__WEBPACK_IMPORTED_MODULE_4__.FirebaseAuthentication.signOut().then(() => {
                // 1. Sign out on the web layer
                const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();
                return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(auth);
            });
        }).catch(reason => {
            console.log("cache not cleared", reason);
            return _capacitor_firebase_authentication__WEBPACK_IMPORTED_MODULE_4__.FirebaseAuthentication.signOut().then(() => {
                // 1. Sign out on the web layer
                const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();
                return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(auth);
            });
        });
    }
    deleteCacheFolder() {
        return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.rmdir({
            directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.Cache,
            path: `CACHED-IMG`,
            recursive: true
        });
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuth },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _toaster_service__WEBPACK_IMPORTED_MODULE_3__.ToasterService }
];
LoginService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
        providedIn: 'root',
    })
], LoginService);



/***/ }),

/***/ 44924:
/*!********************************************!*\
  !*** ./src/shared/utils/function.utils.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNullOrUndefined": () => (/* binding */ isNullOrUndefined),
/* harmony export */   "setStyleStatusBar": () => (/* binding */ setStyleStatusBar)
/* harmony export */ });
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/status-bar */ 19326);

function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
function setStyleStatusBar(mode) {
    switch (mode) {
        case "light":
            //background black with white text
            _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_0__.StatusBar.setBackgroundColor({ color: "#ffffff" });
            _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_0__.StatusBar.setStyle({ style: _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_0__.Style.Light });
            break;
        case "dark":
            //background white with black text
            _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_0__.StatusBar.setBackgroundColor({ color: "#111111" });
            _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_0__.StatusBar.setStyle({ style: _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_0__.Style.Dark });
            break;
    }
}


/***/ }),

/***/ 45930:
/*!***************************************************************!*\
  !*** ./src/shared/validators/required-condition.directive.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequiredConditionValidator": () => (/* binding */ RequiredConditionValidator)
/* harmony export */ });
//TODO: Delete
function RequiredConditionValidator(controlName) {
    return (formGroup) => {
        var _a, _b;
        const categoryControl = formGroup.controls['category'];
        if (categoryControl.value) {
            switch (controlName) {
                case 'fit':
                    {
                        const isFitRequired = (_a = categoryControl.value.wardrobe_additional_fields) === null || _a === void 0 ? void 0 : _a.fit_id;
                        return isFitRequired && formGroup.controls[controlName].value === null
                            ? { required: { value: 'required' } }
                            : null;
                    }
                    break;
                case 'size':
                    {
                        const isSizeRequired = (_b = categoryControl.value.wardrobe_additional_fields) === null || _b === void 0 ? void 0 : _b.size_id;
                        return isSizeRequired && formGroup.controls[controlName].value === null
                            ? { required: { value: 'required' } }
                            : null;
                    }
                    break;
            }
        }
    };
}


/***/ }),

/***/ 29746:
/*!*********************************************************************************!*\
  !*** ./node_modules/@capacitor-firebase/authentication/dist/esm/definitions.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProviderId": () => (/* binding */ ProviderId)
/* harmony export */ });
/// <reference types="@capacitor/cli" />
var ProviderId;

(function (ProviderId) {
  ProviderId["APPLE"] = "apple.com";
  ProviderId["FACEBOOK"] = "facebook.com";
  ProviderId["GAME_CENTER"] = "gc.apple.com";
  ProviderId["GITHUB"] = "github.com";
  ProviderId["GOOGLE"] = "google.com";
  ProviderId["MICROSOFT"] = "microsoft.com";
  ProviderId["PLAY_GAMES"] = "playgames.google.com";
  ProviderId["TWITTER"] = "twitter.com";
  ProviderId["YAHOO"] = "yahoo.com";
  ProviderId["PASSWORD"] = "password";
  ProviderId["PHONE"] = "phone";
})(ProviderId || (ProviderId = {}));

/***/ }),

/***/ 50331:
/*!***************************************************************************!*\
  !*** ./node_modules/@capacitor-firebase/authentication/dist/esm/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseAuthentication": () => (/* binding */ FirebaseAuthentication),
/* harmony export */   "ProviderId": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.ProviderId)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 29746);

const FirebaseAuthentication = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('FirebaseAuthentication', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-firebase_authentication_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 18279)).then(m => new m.FirebaseAuthenticationWeb())
});



/***/ }),

/***/ 34830:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": () => (/* binding */ CameraDirection),
/* harmony export */   "CameraResultType": () => (/* binding */ CameraResultType),
/* harmony export */   "CameraSource": () => (/* binding */ CameraSource)
/* harmony export */ });
var CameraSource;

(function (CameraSource) {
  /**
   * Prompts the user to select either the photo album or take a photo.
   */
  CameraSource["Prompt"] = "PROMPT";
  /**
   * Take a new photo using the camera.
   */

  CameraSource["Camera"] = "CAMERA";
  /**
   * Pick an existing photo from the gallery or photo album.
   */

  CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));

var CameraDirection;

(function (CameraDirection) {
  CameraDirection["Rear"] = "REAR";
  CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));

var CameraResultType;

(function (CameraResultType) {
  CameraResultType["Uri"] = "uri";
  CameraResultType["Base64"] = "base64";
  CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));

/***/ }),

/***/ 4241:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Camera": () => (/* binding */ Camera),
/* harmony export */   "CameraDirection": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   "CameraResultType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType),
/* harmony export */   "CameraSource": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 34830);

const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 71327)).then(m => new m.CameraWeb())
});



/***/ }),

/***/ 70931:
/*!***********************************************************!*\
  !*** ./node_modules/@firebase/auth/dist/esm2017/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionCodeOperation": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   "ActionCodeURL": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.ad),
/* harmony export */   "AuthCredential": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.H),
/* harmony export */   "AuthErrorCodes": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   "EmailAuthCredential": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.I),
/* harmony export */   "EmailAuthProvider": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.M),
/* harmony export */   "FacebookAuthProvider": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.N),
/* harmony export */   "FactorId": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.F),
/* harmony export */   "GithubAuthProvider": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.T),
/* harmony export */   "GoogleAuthProvider": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.Q),
/* harmony export */   "OAuthCredential": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.J),
/* harmony export */   "OAuthProvider": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.U),
/* harmony export */   "OperationType": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.O),
/* harmony export */   "PhoneAuthCredential": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.K),
/* harmony export */   "PhoneAuthProvider": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.P),
/* harmony export */   "PhoneMultiFactorGenerator": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.m),
/* harmony export */   "ProviderId": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.o),
/* harmony export */   "RecaptchaVerifier": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.R),
/* harmony export */   "SAMLAuthProvider": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.V),
/* harmony export */   "SignInMethod": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.S),
/* harmony export */   "TwitterAuthProvider": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.W),
/* harmony export */   "applyActionCode": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.a2),
/* harmony export */   "beforeAuthStateChanged": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.t),
/* harmony export */   "browserLocalPersistence": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.b),
/* harmony export */   "browserPopupRedirectResolver": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.k),
/* harmony export */   "browserSessionPersistence": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.a),
/* harmony export */   "checkActionCode": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.a3),
/* harmony export */   "confirmPasswordReset": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.a1),
/* harmony export */   "connectAuthEmulator": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.G),
/* harmony export */   "createUserWithEmailAndPassword": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.a5),
/* harmony export */   "debugErrorMap": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.B),
/* harmony export */   "deleteUser": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.z),
/* harmony export */   "fetchSignInMethodsForEmail": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.aa),
/* harmony export */   "getAdditionalUserInfo": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.al),
/* harmony export */   "getAuth": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.n),
/* harmony export */   "getIdToken": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.ai),
/* harmony export */   "getIdTokenResult": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.aj),
/* harmony export */   "getMultiFactorResolver": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.an),
/* harmony export */   "getRedirectResult": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.j),
/* harmony export */   "inMemoryPersistence": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.L),
/* harmony export */   "indexedDBLocalPersistence": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.i),
/* harmony export */   "initializeAuth": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.E),
/* harmony export */   "isSignInWithEmailLink": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.a8),
/* harmony export */   "linkWithCredential": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "linkWithPhoneNumber": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.l),
/* harmony export */   "linkWithPopup": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.d),
/* harmony export */   "linkWithRedirect": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.g),
/* harmony export */   "multiFactor": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.ao),
/* harmony export */   "onAuthStateChanged": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.v),
/* harmony export */   "onIdTokenChanged": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   "parseActionCodeURL": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.ae),
/* harmony export */   "prodErrorMap": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.C),
/* harmony export */   "reauthenticateWithCredential": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__._),
/* harmony export */   "reauthenticateWithPhoneNumber": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.r),
/* harmony export */   "reauthenticateWithPopup": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.e),
/* harmony export */   "reauthenticateWithRedirect": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   "reload": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.am),
/* harmony export */   "sendEmailVerification": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.ab),
/* harmony export */   "sendPasswordResetEmail": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.a0),
/* harmony export */   "sendSignInLinkToEmail": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.a7),
/* harmony export */   "setPersistence": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.p),
/* harmony export */   "signInAnonymously": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.X),
/* harmony export */   "signInWithCredential": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.Y),
/* harmony export */   "signInWithCustomToken": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.$),
/* harmony export */   "signInWithEmailAndPassword": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.a6),
/* harmony export */   "signInWithEmailLink": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.a9),
/* harmony export */   "signInWithPhoneNumber": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "signInWithPopup": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.c),
/* harmony export */   "signInWithRedirect": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.f),
/* harmony export */   "signOut": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.y),
/* harmony export */   "unlink": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.ak),
/* harmony export */   "updateCurrentUser": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.x),
/* harmony export */   "updateEmail": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.ag),
/* harmony export */   "updatePassword": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.ah),
/* harmony export */   "updatePhoneNumber": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   "updateProfile": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.af),
/* harmony export */   "useDeviceLanguage": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.w),
/* harmony export */   "verifyBeforeUpdateEmail": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.ac),
/* harmony export */   "verifyPasswordResetCode": () => (/* reexport safe */ _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__.a4)
/* harmony export */ });
/* harmony import */ var _index_30f3030e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-30f3030e.js */ 3583);
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/util */ 17748);
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/app */ 98770);
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/logger */ 8118);
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase/component */ 44692);







/***/ }),

/***/ 72943:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-8251f533.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-8e692445.js */ 91559);
/* harmony import */ var _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-029a46f6.js */ 12815);
/* harmony import */ var _index_f8d8aa5a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-f8d8aa5a.js */ 69286);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;

  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }

    const target = document.elementFromPoint(x, y);

    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }

    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };

  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;

    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }

    const buttonToModify = currentTouchedButton;
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };

  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }

    const buttonToModify = currentTouchedButton;
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */

    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }

    currentTouchedButton = undefined;
  };

  return (0,_index_f8d8aa5a_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};



/***/ }),

/***/ 17481:
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/dir-e8b767a8.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ isRTL)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

/**
 * Returns `true` if the document or host element
 * has a `dir` set to `rtl`. The host value will always
 * take priority over the root document value.
 */
const isRTL = hostEl => {
  if (hostEl) {
    if (hostEl.dir !== '') {
      return hostEl.dir.toLowerCase() === 'rtl';
    }
  }

  return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === 'rtl';
};



/***/ }),

/***/ 55777:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/focus-visible-096cf6fd.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startFocusVisible": () => (/* binding */ startFocusVisible)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ION_FOCUSED = 'ion-focused';
const ION_FOCUSABLE = 'ion-focusable';
const FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Home', 'End'];

const startFocusVisible = rootEl => {
  let currentFocus = [];
  let keyboardMode = true;
  const ref = rootEl ? rootEl.shadowRoot : document;
  const root = rootEl ? rootEl : document.body;

  const setFocus = elements => {
    currentFocus.forEach(el => el.classList.remove(ION_FOCUSED));
    elements.forEach(el => el.classList.add(ION_FOCUSED));
    currentFocus = elements;
  };

  const pointerDown = () => {
    keyboardMode = false;
    setFocus([]);
  };

  const onKeydown = ev => {
    keyboardMode = FOCUS_KEYS.includes(ev.key);

    if (!keyboardMode) {
      setFocus([]);
    }
  };

  const onFocusin = ev => {
    if (keyboardMode && ev.composedPath !== undefined) {
      const toFocus = ev.composedPath().filter(el => {
        if (el.classList) {
          return el.classList.contains(ION_FOCUSABLE);
        }

        return false;
      });
      setFocus(toFocus);
    }
  };

  const onFocusout = () => {
    if (ref.activeElement === root) {
      setFocus([]);
    }
  };

  ref.addEventListener('keydown', onKeydown);
  ref.addEventListener('focusin', onFocusin);
  ref.addEventListener('focusout', onFocusout);
  ref.addEventListener('touchstart', pointerDown);
  ref.addEventListener('mousedown', pointerDown);

  const destroy = () => {
    ref.removeEventListener('keydown', onKeydown);
    ref.removeEventListener('focusin', onFocusin);
    ref.removeEventListener('focusout', onFocusout);
    ref.removeEventListener('touchstart', pointerDown);
    ref.removeEventListener('mousedown', pointerDown);
  };

  return {
    destroy,
    setFocus
  };
};



/***/ }),

/***/ 65921:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-073a0b65.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ CoreDelegate),
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var _Users_ludovic_Documents_Epsilon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 83918);
/* harmony import */ var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-3b390e48.js */ 29259);


/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


const attachComponent = /*#__PURE__*/function () {
  var _ref = (0,_Users_ludovic_Documents_Epsilon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (delegate, container, component, cssClasses, componentProps, inline) {
    var _a;

    if (delegate) {
      return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }

    if (!inline && typeof component !== 'string' && !(component instanceof HTMLElement)) {
      throw new Error('framework delegate is missing');
    }

    const el = typeof component === 'string' ? (_a = container.ownerDocument) === null || _a === void 0 ? void 0 : _a.createElement(component) : component;

    if (cssClasses) {
      cssClasses.forEach(c => el.classList.add(c));
    }

    if (componentProps) {
      Object.assign(el, componentProps);
    }

    container.appendChild(el);
    yield new Promise(resolve => (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
    return el;
  });

  return function attachComponent(_x, _x2, _x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  };
}();

const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }

    element.remove();
  }

  return Promise.resolve();
};

const CoreDelegate = () => {
  let BaseComponent;
  let Reference;

  const attachViewToDom = /*#__PURE__*/function () {
    var _ref2 = (0,_Users_ludovic_Documents_Epsilon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (parentElement, userComponent, userComponentProps = {}, cssClasses = []) {
      var _a, _b;

      BaseComponent = parentElement;
      /**
       * If passing in a component via the `component` props
       * we need to append it inside of our overlay component.
       */

      if (userComponent) {
        /**
         * If passing in the tag name, create
         * the element otherwise just get a reference
         * to the component.
         */
        const el = typeof userComponent === 'string' ? (_a = BaseComponent.ownerDocument) === null || _a === void 0 ? void 0 : _a.createElement(userComponent) : userComponent;
        /**
         * Add any css classes passed in
         * via the cssClasses prop on the overlay.
         */

        cssClasses.forEach(c => el.classList.add(c));
        /**
         * Add any props passed in
         * via the componentProps prop on the overlay.
         */

        Object.assign(el, userComponentProps);
        /**
         * Finally, append the component
         * inside of the overlay component.
         */

        BaseComponent.appendChild(el);
        yield new Promise(resolve => (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
      } else if (BaseComponent.children.length > 0) {
        const root = BaseComponent.children[0];

        if (!root.classList.contains('ion-delegate-host')) {
          /**
           * If the root element is not a delegate host, it means
           * that the overlay has not been presented yet and we need
           * to create the containing element with the specified classes.
           */
          const el = (_b = BaseComponent.ownerDocument) === null || _b === void 0 ? void 0 : _b.createElement('div'); // Add a class to track if the root element was created by the delegate.

          el.classList.add('ion-delegate-host');
          cssClasses.forEach(c => el.classList.add(c)); // Move each child from the original template to the new parent element.

          el.append(...BaseComponent.children); // Append the new parent element to the original parent element.

          BaseComponent.appendChild(el);
        }
      }
      /**
       * Get the root of the app and
       * add the overlay there.
       */


      const app = document.querySelector('ion-app') || document.body;
      /**
       * Create a placeholder comment so that
       * we can return this component to where
       * it was previously.
       */

      Reference = document.createComment('ionic teleport');
      BaseComponent.parentNode.insertBefore(Reference, BaseComponent);
      app.appendChild(BaseComponent);
      return BaseComponent;
    });

    return function attachViewToDom(_x7, _x8) {
      return _ref2.apply(this, arguments);
    };
  }();

  const removeViewFromDom = () => {
    /**
     * Return component to where it was previously in the DOM.
     */
    if (BaseComponent && Reference) {
      Reference.parentNode.insertBefore(BaseComponent, Reference);
      Reference.remove();
    }

    return Promise.resolve();
  };

  return {
    attachViewToDom,
    removeViewFromDom
  };
};



/***/ }),

/***/ 12815:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-029a46f6.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const HapticEngine = {
  getEngine() {
    var _a;

    const win = window;
    return win.TapticEngine || ((_a = win.Capacitor) === null || _a === void 0 ? void 0 : _a.isPluginAvailable('Haptics')) && win.Capacitor.Plugins.Haptics;
  },

  available() {
    var _a;

    const win = window;
    const engine = this.getEngine();

    if (!engine) {
      return false;
    }
    /**
     * Developers can manually import the
     * Haptics plugin in their app which will cause
     * getEngine to return the Haptics engine. However,
     * the Haptics engine will throw an error if
     * used in a web browser that does not support
     * the Vibrate API. This check avoids that error
     * if the browser does not support the Vibrate API.
     */


    if (((_a = win.Capacitor) === null || _a === void 0 ? void 0 : _a.getPlatform()) === 'web') {
      return typeof navigator !== 'undefined' && navigator.vibrate !== undefined;
    }

    return true;
  },

  isCordova() {
    return !!window.TapticEngine;
  },

  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },

  impact(options) {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({
      style
    });
  },

  notification(options) {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({
      style
    });
  },

  selection() {
    this.impact({
      style: 'light'
    });
  },

  selectionStart() {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionStart();
    } else {
      engine.gestureSelectionStart();
    }
  },

  selectionChanged() {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionChanged();
    } else {
      engine.gestureSelectionChanged();
    }
  },

  selectionEnd() {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionEnd();
    } else {
      engine.gestureSelectionEnd();
    }
  }

};
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */

const hapticAvailable = () => {
  return HapticEngine.available();
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */


const hapticSelection = () => {
  hapticAvailable() && HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */


const hapticSelectionStart = () => {
  hapticAvailable() && HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */


const hapticSelectionChanged = () => {
  hapticAvailable() && HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */


const hapticSelectionEnd = () => {
  hapticAvailable() && HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */


const hapticImpact = options => {
  hapticAvailable() && HapticEngine.impact(options);
};



/***/ }),

/***/ 2002:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-40bb69ee.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ arrowBackSharp),
/* harmony export */   "b": () => (/* binding */ closeCircle),
/* harmony export */   "c": () => (/* binding */ chevronBack),
/* harmony export */   "d": () => (/* binding */ closeSharp),
/* harmony export */   "e": () => (/* binding */ searchSharp),
/* harmony export */   "f": () => (/* binding */ checkmarkOutline),
/* harmony export */   "g": () => (/* binding */ ellipseOutline),
/* harmony export */   "h": () => (/* binding */ caretBackSharp),
/* harmony export */   "i": () => (/* binding */ arrowDown),
/* harmony export */   "j": () => (/* binding */ reorderThreeOutline),
/* harmony export */   "k": () => (/* binding */ reorderTwoSharp),
/* harmony export */   "l": () => (/* binding */ chevronDown),
/* harmony export */   "m": () => (/* binding */ chevronForwardOutline),
/* harmony export */   "n": () => (/* binding */ ellipsisHorizontal),
/* harmony export */   "o": () => (/* binding */ chevronForward),
/* harmony export */   "p": () => (/* binding */ caretUpSharp),
/* harmony export */   "q": () => (/* binding */ caretDownSharp),
/* harmony export */   "r": () => (/* binding */ removeOutline),
/* harmony export */   "s": () => (/* binding */ searchOutline),
/* harmony export */   "t": () => (/* binding */ close),
/* harmony export */   "u": () => (/* binding */ menuOutline),
/* harmony export */   "v": () => (/* binding */ menuSharp)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

/* Ionicons v6.0.3, ES Modules */
const arrowBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>";
const arrowDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>";
const caretBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>";
const caretDownSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>";
const caretUpSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>";
const checkmarkOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Checkmark</title><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
const chevronDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
const chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const chevronForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const close = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>";
const closeCircle = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>";
const closeSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>";
const ellipseOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipse</title><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const ellipsisHorizontal = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";
const menuOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const menuSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>";
const removeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Remove</title><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const reorderThreeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const reorderTwoSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>";
const searchOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const searchSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>";


/***/ }),

/***/ 33081:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-5d0c8232.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ ION_CONTENT_ELEMENT_SELECTOR),
/* harmony export */   "a": () => (/* binding */ findIonContent),
/* harmony export */   "b": () => (/* binding */ ION_CONTENT_CLASS_SELECTOR),
/* harmony export */   "c": () => (/* binding */ scrollByPoint),
/* harmony export */   "d": () => (/* binding */ disableContentScrollY),
/* harmony export */   "f": () => (/* binding */ findClosestIonContent),
/* harmony export */   "g": () => (/* binding */ getScrollElement),
/* harmony export */   "i": () => (/* binding */ isIonContent),
/* harmony export */   "p": () => (/* binding */ printIonContentErrorMsg),
/* harmony export */   "r": () => (/* binding */ resetContentScrollY),
/* harmony export */   "s": () => (/* binding */ scrollToTop)
/* harmony export */ });
/* harmony import */ var _Users_ludovic_Documents_Epsilon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 83918);
/* harmony import */ var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-3b390e48.js */ 29259);
/* harmony import */ var _index_c4b11676_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-c4b11676.js */ 99273);


/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


const ION_CONTENT_TAG_NAME = 'ION-CONTENT';
const ION_CONTENT_ELEMENT_SELECTOR = 'ion-content';
const ION_CONTENT_CLASS_SELECTOR = '.ion-content-scroll-host';
/**
 * Selector used for implementations reliant on `<ion-content>` for scroll event changes.
 *
 * Developers should use the `.ion-content-scroll-host` selector to target the element emitting
 * scroll events. With virtual scroll implementations this will be the host element for
 * the scroll viewport.
 */

const ION_CONTENT_SELECTOR = `${ION_CONTENT_ELEMENT_SELECTOR}, ${ION_CONTENT_CLASS_SELECTOR}`;

const isIonContent = el => el.tagName === ION_CONTENT_TAG_NAME;
/**
 * Waits for the element host fully initialize before
 * returning the inner scroll element.
 *
 * For `ion-content` the scroll target will be the result
 * of the `getScrollElement` function.
 *
 * For custom implementations it will be the element host
 * or a selector within the host, if supplied through `scrollTarget`.
 */


const getScrollElement = /*#__PURE__*/function () {
  var _ref = (0,_Users_ludovic_Documents_Epsilon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (el) {
    if (isIonContent(el)) {
      yield new Promise(resolve => (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
      return el.getScrollElement();
    }

    return el;
  });

  return function getScrollElement(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Queries the element matching the selector for IonContent.
 * See ION_CONTENT_SELECTOR for the selector used.
 */


const findIonContent = el => {
  /**
   * First we try to query the custom scroll host selector in cases where
   * the implementation is using an outer `ion-content` with an inner custom
   * scroll container.
   */
  const customContentHost = el.querySelector(ION_CONTENT_CLASS_SELECTOR);

  if (customContentHost) {
    return customContentHost;
  }

  return el.querySelector(ION_CONTENT_SELECTOR);
};
/**
 * Queries the closest element matching the selector for IonContent.
 */


const findClosestIonContent = el => {
  return el.closest(ION_CONTENT_SELECTOR);
};
/**
 * Scrolls to the top of the element. If an `ion-content` is found, it will scroll
 * using the public API `scrollToTop` with a duration.
 */


const scrollToTop = (el, durationMs) => {
  if (isIonContent(el)) {
    const content = el;
    return content.scrollToTop(durationMs);
  }

  return Promise.resolve(el.scrollTo({
    top: 0,
    left: 0,
    behavior: durationMs > 0 ? 'smooth' : 'auto'
  }));
};
/**
 * Scrolls by a specified X/Y distance in the component. If an `ion-content` is found, it will scroll
 * using the public API `scrollByPoint` with a duration.
 */


const scrollByPoint = (el, x, y, durationMs) => {
  if (isIonContent(el)) {
    const content = el;
    return content.scrollByPoint(x, y, durationMs);
  }

  return Promise.resolve(el.scrollBy({
    top: y,
    left: x,
    behavior: durationMs > 0 ? 'smooth' : 'auto'
  }));
};
/**
 * Prints an error informing developers that an implementation requires an element to be used
 * within either the `ion-content` selector or the `.ion-content-scroll-host` class.
 */


const printIonContentErrorMsg = el => {
  return (0,_index_c4b11676_js__WEBPACK_IMPORTED_MODULE_2__.a)(el, ION_CONTENT_ELEMENT_SELECTOR);
};
/**
 * Several components in Ionic need to prevent scrolling
 * during a gesture (card modal, range, item sliding, etc).
 * Use this utility to account for ion-content and custom content hosts.
 */


const disableContentScrollY = contentEl => {
  if (isIonContent(contentEl)) {
    const ionContent = contentEl;
    const initialScrollY = ionContent.scrollY;
    ionContent.scrollY = false;
    /**
     * This should be passed into resetContentScrollY
     * so that we can revert ion-content's scrollY to the
     * correct state. For example, if scrollY = false
     * initially, we do not want to enable scrolling
     * when we call resetContentScrollY.
     */

    return initialScrollY;
  } else {
    contentEl.style.setProperty('overflow', 'hidden');
    return true;
  }
};

const resetContentScrollY = (contentEl, initialScrollY) => {
  if (isIonContent(contentEl)) {
    contentEl.scrollY = initialScrollY;
  } else {
    contentEl.style.removeProperty('overflow');
  }
};



/***/ }),

/***/ 96524:
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-4d5544a0.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KEYBOARD_DID_CLOSE": () => (/* binding */ KEYBOARD_DID_CLOSE),
/* harmony export */   "KEYBOARD_DID_OPEN": () => (/* binding */ KEYBOARD_DID_OPEN),
/* harmony export */   "copyVisualViewport": () => (/* binding */ copyVisualViewport),
/* harmony export */   "keyboardDidClose": () => (/* binding */ keyboardDidClose),
/* harmony export */   "keyboardDidOpen": () => (/* binding */ keyboardDidOpen),
/* harmony export */   "keyboardDidResize": () => (/* binding */ keyboardDidResize),
/* harmony export */   "resetKeyboardAssist": () => (/* binding */ resetKeyboardAssist),
/* harmony export */   "setKeyboardClose": () => (/* binding */ setKeyboardClose),
/* harmony export */   "setKeyboardOpen": () => (/* binding */ setKeyboardOpen),
/* harmony export */   "startKeyboardAssist": () => (/* binding */ startKeyboardAssist),
/* harmony export */   "trackViewportChanges": () => (/* binding */ trackViewportChanges)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const KEYBOARD_DID_OPEN = 'ionKeyboardDidShow';
const KEYBOARD_DID_CLOSE = 'ionKeyboardDidHide';
const KEYBOARD_THRESHOLD = 150;
let previousVisualViewport = {};
let currentVisualViewport = {};
let keyboardOpen = false;
/**
 * This is only used for tests
 */

const resetKeyboardAssist = () => {
  previousVisualViewport = {};
  currentVisualViewport = {};
  keyboardOpen = false;
};

const startKeyboardAssist = win => {
  startNativeListeners(win);

  if (!win.visualViewport) {
    return;
  }

  currentVisualViewport = copyVisualViewport(win.visualViewport);

  win.visualViewport.onresize = () => {
    trackViewportChanges(win);

    if (keyboardDidOpen() || keyboardDidResize(win)) {
      setKeyboardOpen(win);
    } else if (keyboardDidClose(win)) {
      setKeyboardClose(win);
    }
  };
};
/**
 * Listen for events fired by native keyboard plugin
 * in Capacitor/Cordova so devs only need to listen
 * in one place.
 */


const startNativeListeners = win => {
  win.addEventListener('keyboardDidShow', ev => setKeyboardOpen(win, ev));
  win.addEventListener('keyboardDidHide', () => setKeyboardClose(win));
};

const setKeyboardOpen = (win, ev) => {
  fireKeyboardOpenEvent(win, ev);
  keyboardOpen = true;
};

const setKeyboardClose = win => {
  fireKeyboardCloseEvent(win);
  keyboardOpen = false;
};
/**
 * Returns `true` if the `keyboardOpen` flag is not
 * set, the previous visual viewport width equal the current
 * visual viewport width, and if the scaled difference
 * of the previous visual viewport height minus the current
 * visual viewport height is greater than KEYBOARD_THRESHOLD
 *
 * We need to be able to accommodate users who have zooming
 * enabled in their browser (or have zoomed in manually) which
 * is why we take into account the current visual viewport's
 * scale value.
 */


const keyboardDidOpen = () => {
  const scaledHeightDifference = (previousVisualViewport.height - currentVisualViewport.height) * currentVisualViewport.scale;
  return !keyboardOpen && previousVisualViewport.width === currentVisualViewport.width && scaledHeightDifference > KEYBOARD_THRESHOLD;
};
/**
 * Returns `true` if the keyboard is open,
 * but the keyboard did not close
 */


const keyboardDidResize = win => {
  return keyboardOpen && !keyboardDidClose(win);
};
/**
 * Determine if the keyboard was closed
 * Returns `true` if the `keyboardOpen` flag is set and
 * the current visual viewport height equals the
 * layout viewport height.
 */


const keyboardDidClose = win => {
  return keyboardOpen && currentVisualViewport.height === win.innerHeight;
};
/**
 * Dispatch a keyboard open event
 */


const fireKeyboardOpenEvent = (win, nativeEv) => {
  const keyboardHeight = nativeEv ? nativeEv.keyboardHeight : win.innerHeight - currentVisualViewport.height;
  const ev = new CustomEvent(KEYBOARD_DID_OPEN, {
    detail: {
      keyboardHeight
    }
  });
  win.dispatchEvent(ev);
};
/**
 * Dispatch a keyboard close event
 */


const fireKeyboardCloseEvent = win => {
  const ev = new CustomEvent(KEYBOARD_DID_CLOSE);
  win.dispatchEvent(ev);
};
/**
 * Given a window object, create a copy of
 * the current visual and layout viewport states
 * while also preserving the previous visual and
 * layout viewport states
 */


const trackViewportChanges = win => {
  previousVisualViewport = Object.assign({}, currentVisualViewport);
  currentVisualViewport = copyVisualViewport(win.visualViewport);
};
/**
 * Creates a deep copy of the visual viewport
 * at a given state
 */


const copyVisualViewport = visualViewport => {
  return {
    width: Math.round(visualViewport.width),
    height: Math.round(visualViewport.height),
    offsetTop: visualViewport.offsetTop,
    offsetLeft: visualViewport.offsetLeft,
    pageTop: visualViewport.pageTop,
    pageLeft: visualViewport.pageLeft,
    scale: visualViewport.scale
  };
};



/***/ }),

/***/ 23963:
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-controller-73af62b2.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createKeyboardController)
/* harmony export */ });
/* harmony import */ var _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-33ffec25.js */ 42286);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

/**
 * Creates a controller that tracks and reacts to opening or closing the keyboard.
 *
 * @internal
 * @param keyboardChangeCallback A function to call when the keyboard opens or closes.
 */

const createKeyboardController = keyboardChangeCallback => {
  let keyboardWillShowHandler;
  let keyboardWillHideHandler;
  let keyboardVisible;

  const init = () => {
    keyboardWillShowHandler = () => {
      keyboardVisible = true;
      if (keyboardChangeCallback) keyboardChangeCallback(true);
    };

    keyboardWillHideHandler = () => {
      keyboardVisible = false;
      if (keyboardChangeCallback) keyboardChangeCallback(false);
    };

    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.addEventListener('keyboardWillShow', keyboardWillShowHandler);
    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.addEventListener('keyboardWillHide', keyboardWillHideHandler);
  };

  const destroy = () => {
    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.removeEventListener('keyboardWillShow', keyboardWillShowHandler);
    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.removeEventListener('keyboardWillHide', keyboardWillHideHandler);
    keyboardWillShowHandler = keyboardWillHideHandler = undefined;
  };

  const isKeyboardVisible = () => keyboardVisible;

  init();
  return {
    init,
    destroy,
    isKeyboardVisible
  };
};



/***/ }),

/***/ 43844:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-5d6b6fe7.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const spinners = {
  bubbles: {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${dur * index / total - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          top: `${9 * Math.sin(angle)}px`,
          left: `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  circles: {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${dur * step - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          top: `${9 * Math.sin(angle)}px`,
          left: `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  circular: {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  crescent: {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  dots: {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          left: `${9 - 9 * index}px`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  lines: {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${360 / total * index + (index < total / 2 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 14,
        y2: 26,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${360 / total * index + (index < total / 2 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-sharp': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-sharp-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  }
};
const SPINNERS = spinners;


/***/ }),

/***/ 64114:
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/swipe-back-5351da01.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSwipeBackGesture": () => (/* binding */ createSwipeBackGesture)
/* harmony export */ });
/* harmony import */ var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-3b390e48.js */ 29259);
/* harmony import */ var _dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dir-e8b767a8.js */ 17481);
/* harmony import */ var _index_f8d8aa5a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-f8d8aa5a.js */ 69286);
/* harmony import */ var _gesture_controller_17060b7c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gesture-controller-17060b7c.js */ 56379);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */





const createSwipeBackGesture = (el, canStartHandler, onStartHandler, onMoveHandler, onEndHandler) => {
  const win = el.ownerDocument.defaultView;
  const rtl = (0,_dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_1__.i)(el);
  /**
   * Determine if a gesture is near the edge
   * of the screen. If true, then the swipe
   * to go back gesture should proceed.
   */

  const isAtEdge = detail => {
    const threshold = 50;
    const {
      startX
    } = detail;

    if (rtl) {
      return startX >= win.innerWidth - threshold;
    }

    return startX <= threshold;
  };

  const getDeltaX = detail => {
    return rtl ? -detail.deltaX : detail.deltaX;
  };

  const getVelocityX = detail => {
    return rtl ? -detail.velocityX : detail.velocityX;
  };

  const canStart = detail => {
    return isAtEdge(detail) && canStartHandler();
  };

  const onMove = detail => {
    // set the transition animation's progress
    const delta = getDeltaX(detail);
    const stepValue = delta / win.innerWidth;
    onMoveHandler(stepValue);
  };

  const onEnd = detail => {
    // the swipe back gesture has ended
    const delta = getDeltaX(detail);
    const width = win.innerWidth;
    const stepValue = delta / width;
    const velocity = getVelocityX(detail);
    const z = width / 2.0;
    const shouldComplete = velocity >= 0 && (velocity > 0.2 || delta > z);
    const missing = shouldComplete ? 1 - stepValue : stepValue;
    const missingDistance = missing * width;
    let realDur = 0;

    if (missingDistance > 5) {
      const dur = missingDistance / Math.abs(velocity);
      realDur = Math.min(dur, 540);
    }
    /**
     * TODO: stepValue can sometimes return negative values
     * or values greater than 1 which should not be possible.
     * Need to investigate more to find where the issue is.
     */


    onEndHandler(shouldComplete, stepValue <= 0 ? 0.01 : (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_0__.l)(0, stepValue, 0.9999), realDur);
  };

  return (0,_index_f8d8aa5a_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'goback-swipe',
    gesturePriority: 40,
    threshold: 10,
    canStart,
    onStart: onStartHandler,
    onMove,
    onEnd
  });
};



/***/ }),

/***/ 16818:
/*!**********************************************************!*\
  !*** ./node_modules/firebase/auth/dist/esm/index.esm.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionCodeOperation": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.ActionCodeOperation),
/* harmony export */   "ActionCodeURL": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.ActionCodeURL),
/* harmony export */   "AuthCredential": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.AuthCredential),
/* harmony export */   "AuthErrorCodes": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.AuthErrorCodes),
/* harmony export */   "EmailAuthCredential": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.EmailAuthCredential),
/* harmony export */   "EmailAuthProvider": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.EmailAuthProvider),
/* harmony export */   "FacebookAuthProvider": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.FacebookAuthProvider),
/* harmony export */   "FactorId": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.FactorId),
/* harmony export */   "GithubAuthProvider": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.GithubAuthProvider),
/* harmony export */   "GoogleAuthProvider": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.GoogleAuthProvider),
/* harmony export */   "OAuthCredential": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.OAuthCredential),
/* harmony export */   "OAuthProvider": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.OAuthProvider),
/* harmony export */   "OperationType": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.OperationType),
/* harmony export */   "PhoneAuthCredential": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.PhoneAuthCredential),
/* harmony export */   "PhoneAuthProvider": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.PhoneAuthProvider),
/* harmony export */   "PhoneMultiFactorGenerator": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.PhoneMultiFactorGenerator),
/* harmony export */   "ProviderId": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.ProviderId),
/* harmony export */   "RecaptchaVerifier": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.RecaptchaVerifier),
/* harmony export */   "SAMLAuthProvider": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.SAMLAuthProvider),
/* harmony export */   "SignInMethod": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.SignInMethod),
/* harmony export */   "TwitterAuthProvider": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.TwitterAuthProvider),
/* harmony export */   "applyActionCode": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.applyActionCode),
/* harmony export */   "beforeAuthStateChanged": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.beforeAuthStateChanged),
/* harmony export */   "browserLocalPersistence": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.browserLocalPersistence),
/* harmony export */   "browserPopupRedirectResolver": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.browserPopupRedirectResolver),
/* harmony export */   "browserSessionPersistence": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.browserSessionPersistence),
/* harmony export */   "checkActionCode": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.checkActionCode),
/* harmony export */   "confirmPasswordReset": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.confirmPasswordReset),
/* harmony export */   "connectAuthEmulator": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.connectAuthEmulator),
/* harmony export */   "createUserWithEmailAndPassword": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.createUserWithEmailAndPassword),
/* harmony export */   "debugErrorMap": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.debugErrorMap),
/* harmony export */   "deleteUser": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.deleteUser),
/* harmony export */   "fetchSignInMethodsForEmail": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.fetchSignInMethodsForEmail),
/* harmony export */   "getAdditionalUserInfo": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAdditionalUserInfo),
/* harmony export */   "getAuth": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth),
/* harmony export */   "getIdToken": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getIdToken),
/* harmony export */   "getIdTokenResult": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getIdTokenResult),
/* harmony export */   "getMultiFactorResolver": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getMultiFactorResolver),
/* harmony export */   "getRedirectResult": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getRedirectResult),
/* harmony export */   "inMemoryPersistence": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.inMemoryPersistence),
/* harmony export */   "indexedDBLocalPersistence": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.indexedDBLocalPersistence),
/* harmony export */   "initializeAuth": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.initializeAuth),
/* harmony export */   "isSignInWithEmailLink": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.isSignInWithEmailLink),
/* harmony export */   "linkWithCredential": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.linkWithCredential),
/* harmony export */   "linkWithPhoneNumber": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.linkWithPhoneNumber),
/* harmony export */   "linkWithPopup": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.linkWithPopup),
/* harmony export */   "linkWithRedirect": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.linkWithRedirect),
/* harmony export */   "multiFactor": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.multiFactor),
/* harmony export */   "onAuthStateChanged": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.onAuthStateChanged),
/* harmony export */   "onIdTokenChanged": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.onIdTokenChanged),
/* harmony export */   "parseActionCodeURL": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.parseActionCodeURL),
/* harmony export */   "prodErrorMap": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.prodErrorMap),
/* harmony export */   "reauthenticateWithCredential": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.reauthenticateWithCredential),
/* harmony export */   "reauthenticateWithPhoneNumber": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.reauthenticateWithPhoneNumber),
/* harmony export */   "reauthenticateWithPopup": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.reauthenticateWithPopup),
/* harmony export */   "reauthenticateWithRedirect": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.reauthenticateWithRedirect),
/* harmony export */   "reload": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.reload),
/* harmony export */   "sendEmailVerification": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.sendEmailVerification),
/* harmony export */   "sendPasswordResetEmail": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.sendPasswordResetEmail),
/* harmony export */   "sendSignInLinkToEmail": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.sendSignInLinkToEmail),
/* harmony export */   "setPersistence": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.setPersistence),
/* harmony export */   "signInAnonymously": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInAnonymously),
/* harmony export */   "signInWithCredential": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithCredential),
/* harmony export */   "signInWithCustomToken": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithCustomToken),
/* harmony export */   "signInWithEmailAndPassword": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithEmailAndPassword),
/* harmony export */   "signInWithEmailLink": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithEmailLink),
/* harmony export */   "signInWithPhoneNumber": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithPhoneNumber),
/* harmony export */   "signInWithPopup": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithPopup),
/* harmony export */   "signInWithRedirect": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithRedirect),
/* harmony export */   "signOut": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signOut),
/* harmony export */   "unlink": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.unlink),
/* harmony export */   "updateCurrentUser": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.updateCurrentUser),
/* harmony export */   "updateEmail": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.updateEmail),
/* harmony export */   "updatePassword": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.updatePassword),
/* harmony export */   "updatePhoneNumber": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.updatePhoneNumber),
/* harmony export */   "updateProfile": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.updateProfile),
/* harmony export */   "useDeviceLanguage": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.useDeviceLanguage),
/* harmony export */   "verifyBeforeUpdateEmail": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.verifyBeforeUpdateEmail),
/* harmony export */   "verifyPasswordResetCode": () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.verifyPasswordResetCode)
/* harmony export */ });
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/auth */ 70931);


/***/ })

}]);
//# sourceMappingURL=common.js.map