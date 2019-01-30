import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';

// Register Screens
Navigation.registerComponent("private-party.AuthScreen", () => AuthScreen);
Navigation.registerComponent("private-party.SharePlaceScreen", () => SharePlaceScreen);
Navigation.registerComponent("private-party.FindPlaceScreen", () => FindPlaceScreen);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "private-party.AuthScreen",
    title: "Login"
  }
});