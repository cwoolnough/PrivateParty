import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource(Platform.OS === 'android' ? "md-map" : "ios-map", 30),
        Icon.getImageSource(Platform.OS === 'android' ? "md-share-alt" : "ios-share", 30),
        Icon.getImageSource(Platform.OS === 'android' ? "md-create" : "ios-create", 30),
        Icon.getImageSource(Platform.OS === 'android' ? "md-wine" : "ios-wine", 30),
        Icon.getImageSource(Platform.OS === 'android' ? "md-menu" : "ios-menu", 30)   
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "private-party.FindPlaceScreen",
                    label: "Find Place",
                    title: "Find Place",
                    icon: sources[0],
                    navigatorButtons: {
                        leftButtons: [
                            {
                               icon: sources[4],
                               title: "Menu",
                               id: "sideDrawerToggle" 
                            }
                        ]
                    }
                },
                {
                    screen: "private-party.SharePlaceScreen",
                    label: "Share Place",
                    title: "Share Place",
                    icon: sources[1],
                    navigatorButtons: {
                        leftButtons: [
                            {
                               icon: sources[4],
                               title: "Menu",
                               id: "sideDrawerToggle"  
                            }
                        ]
                    }
                },
                {
                    screen: "private-party.CreatePartyScreen",
                    label: "Create Party",
                    title: "Create Your Party",
                    icon: sources[2],
                    navigatorButtons: {
                        leftButtons: [
                            {
                               icon: sources[4],
                               title: "Menu",
                               id: "sideDrawerToggle"  
                            }
                        ]
                    }
                },
                {
                    screen: "private-party.FindPartyScreen",
                    label: "Find Party",
                    title: "Find Party",
                    icon: sources[3],
                    navigatorButtons: {
                        leftButtons: [
                            {
                               icon: sources[4],
                               title: "Menu",
                               id: "sideDrawerToggle"  
                            }
                        ]
                    }
                }
            ],
            tabsStyle: {
                tabBarSelectedButtonColor: "blue"
            },
            drawer: {
                left: {
                    screen: "private-party.SideDrawer"
                }
            }
        });
    });  
};

export default startTabs;

