// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const env = {
  production: false,
  apiUrl: "https://apidev",
  ios_app_id: "com.appdev",
  android_app_id: "com.app.dev",
  firebaseConfig: {
    apiKey: "apiKey",
    authDomain: "authDomain",
    databaseURL: "https:",
    projectId: "app-dev",
    storageBucket: "app-dev.appspot.com",
    messagingSenderId: "senderid",
    appId: "appid",
    measurementId: "G-mesure"
  }
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
