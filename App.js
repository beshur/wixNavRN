/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Appearance,
} from 'react-native';

import {Navigation} from 'react-native-navigation';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = ({componentId}) => {
  const onPress = () => {
    console.log('onPress red bottomTabs');
    Navigation.mergeOptions(
      componentId,
      Object.assign(
        {},
        {
          topBar: {
            scrollEdgeAppearance: {
              noBorder: true,
            },
          },
          bottomTabs: {
            backgroundColor: 'red',
          },
        },
      ),
    );
  };

  const isDarkMode = useColorScheme() === 'dark';
  const prevDarkMode = useRef(isDarkMode);

  useEffect(() => {
    if (isDarkMode !== prevDarkMode.current) {
      prevDarkMode.current = isDarkMode;
      Navigation.mergeOptions(componentId, {
        bottomTabs: {
          backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        },
      });
    }
  });

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <TouchableOpacity onPress={onPress}>
            <Text
              style={{
                backgroundColor: '#784343',
                color: 'white',
                padding: 20,
                fontSize: 16,
              }}>
              Tap to turn bottom tabs red
            </Text>
          </TouchableOpacity>
          <Section title="Home text"></Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

App.options = () => ({
  bottomTabs: {
    visible: true,
    backgroundColor:
      Appearance.getColorScheme() === 'dark' ? Colors.darker : Colors.lighter,
    id: 'BOTTOM_TABS_LAYOUT',
    children: [
      {
        stack: {
          id: 'HOME_TAB',
          children: [
            {
              component: {
                id: 'HOME_SCREEN',
                name: 'HomeScreen',
              },
            },
          ],
          options: {
            bottomTab: {
              icon: require('./home.png'),
              text: 'Home',
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
              text: 'Profile',
            },
          },
        },
      },
    ],
  },
});

export default App;
