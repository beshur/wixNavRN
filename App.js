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
  const isDarkMode = useColorScheme() === 'dark';
  const prevDarkMode = useRef(isDarkMode);

  const onPress = () => {
    console.log('onPress red bottomTabs');
    Navigation.mergeOptions(componentId, {
      bottomTabs: {
        backgroundColor: 'red',
      },
    });
  };
  useEffect(() => {
    if (isDarkMode !== prevDarkMode.current) {
      prevDarkMode.current = isDarkMode;
      console.log(
        'should change bottom tabs background color; dark mode: %s',
        isDarkMode,
      );
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
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Home">
            This app's bottoms tabs should react to light/dark mode change and
            update in real-time. However it only happens after complete app
            reload.
          </Section>
          <View style={{marginBottom: 40}} />
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
