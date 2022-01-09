# ToberQuizz

[Free](https://www.gnu.org/philosophy/free-sw.html) challenges that will put your imagination in check.

<a href="https://toberquizz.com" alt="Link to the application" target="_blank">
<img src="https://github.com/Tobertet/ToberQuizz/blob/main/fastlane/metadata/android/en-US/images/featureGraphic.png?raw=true" alt="Screenshot" width="800"> </a>

<a alt="Link to F-Droid" href="https://f-droid.org/packages/com.robertmengual.toberquizz/" target="_blank"><img src="https://fdroid.gitlab.io/artwork/badge/get-it-on.png" alt="F-Droid store logo" height="75"></a>

<a alt="Link to Play Store" href="https://play.google.com/store/apps/details?id=com.robertmengual.toberquizz" target="_blank"><img src="https://tobertet.github.io/open-pros-cons/assets/google-play-badge.png" height="75"></a>

[Web application](https://toberquizz.com)

[Download it from F-droid](https://f-droid.org/packages/com.robertmengual.toberquizz/)

[Download it from Play Store](https://play.google.com/store/apps/details?id=com.robertmengual.toberquizz)

## Project Setup

The project has been developed using NodeJS v14 so we encourage you to do the same. If you use [nvm](https://github.com/nvm-sh/nvm), you can simply run `nvm use` in the root of the project and it will automatically set that version for you.

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

## Available Scripts

In the project directory, you can run:

### `yarn`

Installs all the dependencies.

### `yarn serve`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test:coverage`

Shows the test coverage for the unit tests.

### `yarn build`

Builds the _web app_ for production to the `dist` folder.\
It correctly bundles Vue in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\

### `yarn lint`

Runs eslint and prettier on all the files in the /src folder. This linter has been configured to be extended with rules for jest, prettier and cypress.

### `yarn cypress:open`

Opens up the cypress UI for running the e2e test suite.

## Contributing

You can contribute in many ways in this project. Any challenge submission for any country is more than welcome.

Another way is simply by downloading the app from FDroid or Play Store. Will you be able to solve all them all?
