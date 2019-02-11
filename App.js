import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';

import CreatePartyScreen from './src/screens/CreateParty/CreateParty';
import FindPartyScreen from './src/screens/FindParty/FindParty';
import PartyDetailScreen from './src/screens/PartyDetail/PartyDetail';

import SideDrawerScreen from './src/screens/SideDrawer/SideDrawer';

import configureStore from './src/store/configureStore';

const store = configureStore();

// Register Screens
Navigation.registerComponent("private-party.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("private-party.SharePlaceScreen", () => SharePlaceScreen, store, Provider);
Navigation.registerComponent("private-party.FindPlaceScreen", () => FindPlaceScreen, store, Provider);
Navigation.registerComponent("private-party.PlaceDetailScreen", () => PlaceDetailScreen, store, Provider);

Navigation.registerComponent("private-party.CreatePartyScreen", () => CreatePartyScreen, store, Provider);
Navigation.registerComponent("private-party.FindPartyScreen", () => FindPartyScreen, store, Provider);
Navigation.registerComponent("private-party.PartyDetailScreen", () => PartyDetailScreen, store, Provider);

Navigation.registerComponent("private-party.SideDrawer", () => SideDrawerScreen, store, Provider);

// Start a App
export default () => Navigation.startSingleScreenApp({
  screen: {
    screen: "private-party.AuthScreen",
    title: "Login"
  }
});