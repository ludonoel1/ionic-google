import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import localeFr from '@angular/common/locales/fr';
import { Component, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FirebaseAnalytics } from '@capacitor-community/firebase-analytics';
import { AppState } from '@capacitor/app';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { SplashScreen } from '@capacitor/splash-screen';
import { Animation, StatusBar, Style } from '@capacitor/status-bar';
import { NavController, Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Instabug } from 'instabug-cordova';
import BugReporting from 'instabug-cordova/www/BugReporting';
import { NgxSpinnerService } from 'ngx-spinner';
import { Device } from '@capacitor/device';
import { NavigationBar } from '@hugotomazi/capacitor-navigation-bar';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private readonly translateService: TranslateService,
    private spinner: NgxSpinnerService,

  ) {
    this.createCacheFolder();
    this.initializeApp();
  }

  initializeApp() {
    if (this.platform.is("capacitor")) {
      Instabug.start(
        'plop',
        [BugReporting.invocationEvents.button],
        function () {
          console.log('Instabug initialized.');
        },
        function (error) {
          console.log('Instabug could not be initialized - ' + error);
        }
      );
    }
    //    StatusBar.setOverlaysWebView;
    this.platform.ready().then(() => {
      this.spinner.show('appSpinner');
      this.translateService.setDefaultLang('fr'); // fallback when key not found
      //this.translateService.use("fr")
      //Device.getLanguageCode().then(lang => this.translateService.use(lang.value))
      setTimeout(() => {
        console.log("splashscreen hide")
        SplashScreen.hide();
        StatusBar.setBackgroundColor({ color: "#ffffff" })
        //StatusBar.hide({ animation: Animation.Fade });
        NavigationBar.hide()
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
    });
  }

  // TODO use a service for cache
  async createCacheFolder() {
    await Filesystem.mkdir({
      directory: Directory.Cache,
      path: `CACHED-IMG`
    }).catch(error => {
      // Directory already exists
    })
  }

}
