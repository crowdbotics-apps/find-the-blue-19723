import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings93005Navigator from '../features/Settings93005/navigator';
import UserProfile92998Navigator from '../features/UserProfile92998/navigator';
import Settings92997Navigator from '../features/Settings92997/navigator';
import Settings92995Navigator from '../features/Settings92995/navigator';
import SignIn292993Navigator from '../features/SignIn292993/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings93005: { screen: Settings93005Navigator },
UserProfile92998: { screen: UserProfile92998Navigator },
Settings92997: { screen: Settings92997Navigator },
Settings92995: { screen: Settings92995Navigator },
SignIn292993: { screen: SignIn292993Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
