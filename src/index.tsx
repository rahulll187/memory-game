/**
 * Root Component
 */

import React from 'react';
import {
  View,
  StatusBar,
  Dimensions,
  // Text,
  // TextInput,
  LogBox,
} from 'react-native';
import {Provider} from 'react-redux';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import EStyleSheet from 'react-native-extended-stylesheet';
import {NavigationContainer} from '@react-navigation/native';
import store from './redux/store';
import AppNavigation from './navigation/AppNavigation';
import {navigationRef, isReadyRef} from './navigation/ReduxNavigation';
import Styles from './theme/AppStyles';

LogBox.ignoreAllLogs();

const {width} = Dimensions.get('window');

EStyleSheet.build({$rem: width / 375});

// Disable font scaling
// Text.defaultProps = Text.defaultProps || {};
// Text.defaultProps.allowFontScaling = false;

// TextInput.defaultProps = TextInput.defaultProps || {};
// TextInput.defaultProps.allowFontScaling = false;

const Root = () => (
  <View style={Styles.rootContainer}>
    <StatusBar
      translucent
      barStyle="dark-content"
      backgroundColor="transparent"
    />
    <Provider store={store}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          // @ts-ignore
          isReadyRef.current = true;
        }}>
        <AppNavigation />
      </NavigationContainer>
    </Provider>
  </View>
);

export default gestureHandlerRootHOC(Root);
