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
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
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

const App = ({componentId = '1'}) => {
  const onPress = () => {
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
            <Text>Press me</Text>
          </TouchableOpacity>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
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
    backgroundColor: 'green',
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
