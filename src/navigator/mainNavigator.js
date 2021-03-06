import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen44121142Navigator from '../features/BlankScreen44121142/navigator';
import ArticleList121097Navigator from '../features/ArticleList121097/navigator';
import ArticleList121096Navigator from '../features/ArticleList121096/navigator';
import ArticleList121095Navigator from '../features/ArticleList121095/navigator';
import BlankScreen15121094Navigator from '../features/BlankScreen15121094/navigator';
import UserProfile121069Navigator from '../features/UserProfile121069/navigator';
import Tutorial121068Navigator from '../features/Tutorial121068/navigator';
import NotificationList121040Navigator from '../features/NotificationList121040/navigator';
import Settings121039Navigator from '../features/Settings121039/navigator';
import Settings121031Navigator from '../features/Settings121031/navigator';
import UserProfile121029Navigator from '../features/UserProfile121029/navigator';
import ArticleList120991Navigator from '../features/ArticleList120991/navigator';
import ArticleList120990Navigator from '../features/ArticleList120990/navigator';
import ArticleList120989Navigator from '../features/ArticleList120989/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen44121142: { screen: BlankScreen44121142Navigator },
ArticleList121097: { screen: ArticleList121097Navigator },
ArticleList121096: { screen: ArticleList121096Navigator },
ArticleList121095: { screen: ArticleList121095Navigator },
BlankScreen15121094: { screen: BlankScreen15121094Navigator },
UserProfile121069: { screen: UserProfile121069Navigator },
Tutorial121068: { screen: Tutorial121068Navigator },
NotificationList121040: { screen: NotificationList121040Navigator },
Settings121039: { screen: Settings121039Navigator },
Settings121031: { screen: Settings121031Navigator },
UserProfile121029: { screen: UserProfile121029Navigator },
ArticleList120991: { screen: ArticleList120991Navigator },
ArticleList120990: { screen: ArticleList120990Navigator },
ArticleList120989: { screen: ArticleList120989Navigator },

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
