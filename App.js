/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

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

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Home">
            This app's bottoms tabs should react to light/dark mode change and
            update in real-time.
          </Section>
          <View style={{marginBottom: 40}} />
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
