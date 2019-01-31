import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';
import SideDrawerScreen from './src/screens/SideDrawer/SideDrawer';
import configureStore from './src/store/configureStore';

const store = configureStore();

// Register Screens
Navigation.registerComponent("private-party.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("private-party.SharePlaceScreen", () => SharePlaceScreen, store, Provider);
Navigation.registerComponent("private-party.FindPlaceScreen", () => FindPlaceScreen, store, Provider);
Navigation.registerComponent("private-party.PlaceDetailScreen", () => PlaceDetailScreen, store, Provider);
Navigation.registerComponent("private-party.SideDrawer", () => SideDrawerScreen);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "private-party.AuthScreen",
    title: "Login"
  }
});