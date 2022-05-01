# ToberQuizz

[Free](https://www.gnu.org/philosophy/free-sw.html) challenges that will put your imagination in check.

<a href="https://toberquizz.com" alt="Link to the application" target="_blank">
<img src="https://github.com/Tobertet/ToberQuizz/blob/main/fastlane/metadata/android/en-US/images/featureGraphic.png?raw=true" alt="Screenshot" width="800"> </a>

<a alt="Link to F-Droid" href="https://f-droid.org/packages/com.robertmengual.toberquizz/" target="_blank"><img src="https://fdroid.gitlab.io/artwork/badge/get-it-on.png" alt="F-Droid store logo" height="75"></a>

<a alt="Link to Play Store" href="https://play.google.com/store/apps/details?id=com.robertmengual.toberquizz" target="_blank"><img src="https://tobertet.github.io/open-pros-cons/assets/google-play-badge.png" height="75"></a>

[Web application](https://toberquizz.com)

[Download it from F-droid](https://f-droid.org/packages/com.robertmengual.toberquizz/)

[Download it from Play Store](https://play.google.com/store/apps/details?id=com.robertmengual.toberquizz)

## Contributing

### Proposing a new challenge

Would you like to create content either for a specific country or internationally? Just open a new Issue of type **New challenge proposal** and follow the steps in the wiki page [Proposing a new challenge](https://github.com/Tobertet/ToberQuizz/wiki/Proposing-a-new-challenge).

### Donating

If you really enjoyed the application and want to support me, you can also [buy me a coffee](https://ko-fi.com/robertmengual). I would be eternally grateful :)

## Project Setup

The project has been developed using NodeJS v16 so we encourage you to do the same. If you use [nvm](https://github.com/nvm-sh/nvm), you can simply run `nvm use` in the root of the project and it will automatically set that version for you.

The package manager we use is [yarn](https://classic.yarnpkg.com/lang/en/docs/install).

In case you want to build an Android or iOS app you need to install [Android Studio](https://developer.android.com/studio) and [Xcode](https://apps.apple.com/es/app/xcode/id497799835?mt=12) as well.

## Bundling the application

### Web

Run the command `yarn build` and the web application will be available under the `dist` directory.

### Android

_Requires Android Studio._

Run the command `npx cap sync android` after building the web resources and the android project will be available under the `android` directory.

If you only want to run the app, you can run the command `npx cap run android` and the app will be run in your pluged device or in a simulator.

### iOS

_Requires Xcode and a Mac machine._

Run the command `npx cap build ios` after building the web resources and the ios project will be available under the `ios` directory.

If you only want to run the app, you can run the command `npx cap run ios` and the app will be run in your pluged device or in a simulator.
