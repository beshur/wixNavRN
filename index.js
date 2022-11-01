/**
 * @format
 */

import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import App from './App';
import {name as appName} from './app.json';
import Profile from './src/screens/Profile';

Navigation.registerComponent(appName, () => App);
Navigation.registerComponent('ProfileScreen', () => Profile);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      background: {
        color: {
          light: 'white',
          dark: 'black',
        },
      },
    },
    layout: {
      componentBackgroundColor: {
        light: 'white',
        dark: 'black',
      },
    },
    ...(Platform.OS === 'android'
      ? {
          bottomTabs: {
            backgroundColor: {
              light: 'white',
              dark: 'black',
            },
          },
          navigationBar: {
            backgroundColor: {
              light: 'white',
              dark: 'black',
            },
          },
        }
      : {}),
  });

  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: appName,
            },
          },
        ],
      },
      bottomTabs: {
        id: 'BOTTOM_TABS_LAYOUT',
        children: [
          {
            stack: {
              id: 'HOME_TAB',
              children: [
                {
                  component: {
                    id: appName,
                    name: appName,
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require('./home.png'),
                },
              },
            },
          },
          {
            stack: {
              id: 'PROFILE_TAB',
              children: [
                {
                  component: {
                    id: 'PROFILE_SCREEN',
                    name: 'ProfileScreen',
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require('./profile.png'),
                },
              },
            },
          },
        ],
      },
    },
  });
});
