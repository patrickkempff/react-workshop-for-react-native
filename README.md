# react-native-workshop

Oefeningen React Native Workshop

## Getting started

```bash
$ git clone https://github.com/patrickkempff/react-workshop.git
$ cd react-native-workshop
$ yarn install
$ react-native run-ios
$ react-native run-android
```

Oefeningen:

- 01 - Components - [Broncode](https://github.com/patrickkempff/react-workshop-for-react-native/blob/master/oefeningen/01/index.js)
- 02 - Props - [Broncode](https://github.com/patrickkempff/react-workshop-for-react-native/blob/master/oefeningen/02/index.js)
- 03 - Styles - [Broncode](https://github.com/patrickkempff/react-workshop-for-react-native/blob/master/oefeningen/03/index.js)

## License

MIT

_Many thanks to Matt Zabriskie for his excellent work_

# Requirements

## Xcode 8+

Follow the download instructions on https://developer.apple.com/download/

Install the latest version of the Xcode commandline tools with the following command:

```
xcode-select --install
```
You need to agree to the Xcode/iOS license agreements:
```
xcodebuild -license
```

#### Troubleshooting “not currently available” error
Getting an error message that says “Can’t install the software because it is not currently available from the Software Update server”? Well you’re in luck, because that error message probably indicates you already have Xcode installed on the Mac.

From OS X 10.9 onward, if Xcode is already installed in OS X then Command Line Tools becomes installed as well (you can check this by trying to run gcc or make from the terminal).

## Android Studio

Download and install android studio from https://developer.android.com/studio/index.html

Go to Tools -> Android -> SDK Manager
On the Tab "SDK Platforms" install the following SDKs:
- Android 4.1/4.2/4.3/4.4, 5.0, 6.0. 7.0 & 8.0

More information: ['https://developer.android.com/studio/run/managing-avds.html'](https://developer.android.com/studio/run/managing-avds.html)

On the "SDK Tools tab" install the following tools:
- NDK
- Support Library (all sub-items)

## Homebrew

Follow the installation instructions on https://brew.sh/

## Watchman

To install watchman execute the following command in the terminal:
```
brew install watchman
```

More information about watchman can be found here: https://facebook.github.io/watchman/

## Java (JDK)
The android part of the app is for the most part written in java. To make sure everything compiles like it should be, we need to install the JDK (version 8, 9 is not supported yet). This installs the JDK, a superset of the Java Runtime Environment.

```
brew tap caskroom/cask
brew cask install java
```

## nvm with node v6 or higher

nvm stands for Node Version Manager, a simple bash script to manage multiple active node.js versions. Run the following command to install [nvm](https://github.com/creationix/nvm):
```
brew install nvm
```
When the installation is completed, install the node version arcording to the .nvmrc file:
```
nvm install && nvm use
```
To see which version is the current lts or stable please take a look at: https://nodejs.org/en/

## yarn
yarn is the main dependency manager we use in this project. There are 2 ways to install yarn:

#### with homebrew
The recommend way to install yarn is through the Homebrew package manager. Because we use nvm , you should exclude installing Node.js so that nvm’s version of Node.js is used.

```
brew install yarn --without-node
```


#### with npm (not recommend)
Note: Installation of Yarn via npm is generally not recommended. When installing Yarn with Node-based package managers, the package is not signed, and the only integrity check performed is a basic SHA1 hash, which is a security risk when installing system-wide apps.

```
npm install --global yarn
```

For these reasons, it is highly recommended that you install Yarn through the installation method best suited to your operating system.

## CocoaPods

 See http://guides.cocoapods.org/using/getting-started.html#installation for installation instructions

## React Native CLI

Congrats! At this stage we have installed all dependencies for react-native! Now it is time
to install the react-native cli:

```
npm install -g react-native-cli
```

The -g flags makes sure react-native-cli is installed globally so you can use it from anywhere.
