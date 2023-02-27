# Ionic Angular + Capacitor + Auth0 Sample
### Development guide

1- Install dependencies:
```
npm install 
```

2- Build the sample:
```
npm run build
```

3- Launch on web browser:
```
ionic serve / npm start
```

4- Add platform android (ou) ios:
```
npx cap add android (ou) ios
```

5- Run on android emulator:
```
npx cap run android (ou) ios
```

### Run Cypress
 -  ionic serve
 -  npm run cypress:open

 ### Generate keystore to sign apk
 -  keytool -genkeypair -alias alias -keyalg RSA -keysize 2048 -validity 9125 -keystore younzee_keystore.jks
 -  keytool -export -rfc -alias upload -file upload_certificate.pem -keystore keystore.jks 

 ## swipe library
 https://github.com/AlexPodobed/angular-swipe-cards/blob/master/projects/ng-swipe-card-lib/src/lib/swipeable.directive.ts

 ## launch app angular (browser)
 - npm run start => mode dev
 - npm run start:prod => mode prod

 ## build android app 
 - npm run launch:android:dev and open android to bundle signed apk
 - npm run launch:android:prod and open android to bundle signed apk

 ## Custom Splashscreen Doc
 - https://www.raywenderlich.com/32555180-splash-screen-tutorial-for-android

 ## Global style ionic
 - https://ionicframework.com/docs/theming/advanced