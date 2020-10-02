import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList120991Navigator from '../features/ArticleList120991/navigator';
import ArticleList120990Navigator from '../features/ArticleList120990/navigator';
import ArticleList120989Navigator from '../features/ArticleList120989/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
