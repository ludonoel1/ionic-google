import { CapacitorConfig } from '@capacitor/cli';

let config: CapacitorConfig;
const baseConfig: CapacitorConfig = {
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#ffde59",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#000000",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: true,
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
    FirebaseAuthentication: {
      skipNativeAuth: false,
      providers: ["google.com", "facebook.com"]
    }
  },
};

switch (process.env.ENV) {
  case 'dev':
    switch (process.env.PLATFORM) {
      case 'ios':
        config = {
          ...baseConfig,
          appName: 'Name Dev',
          appId: 'com.appdev',
          ios: {
            scheme: 'App Dev',
          },
        };
        break;
      default:
        config = {
          ...baseConfig,
          appName: 'Name Dev',
          appId: 'com.app.dev',
          android: {
            flavor: 'dev',
          },
        };
    }
    break;
  default:
    config = {
      ...baseConfig,
      appName: 'Name',
      appId: 'com.app',
      android: {
        flavor: 'prod',
      },
    };
    break;
}

export default config;