/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Colors} from '../../theme';
import styles from './Styles';

export interface Props {
  children?: any;
  transparentStatusBar?: boolean;
  statusBarColor?: any;
  safeAreaView?: boolean;
  safeAreaViewHeader?: boolean;
  conatinerStyle?: any;
  appHeaderColor?: any;
}

class Container extends React.Component<Props> {
  render() {
    const {
      children,
      transparentStatusBar,
      statusBarColor,
      safeAreaView,
      safeAreaViewHeader,
      conatinerStyle,
      appHeaderColor,
    } = this.props;
    const style: any = {
      flex: 0,
      alignItems: 'center',
      backgroundColor: appHeaderColor
        ? appHeaderColor
        : !transparentStatusBar
        ? statusBarColor || 'transparent'
        : 'transparent',
    };
    const safeViewcontainer: any = [
      styles.safeViewcontainer,
      {
        backgroundColor: Colors.white,
      },
      conatinerStyle,
    ];
    const container: any = [
      styles.container,
      {
        backgroundColor: Colors.white,
      },
    ];
    return (
      <>
        <StatusBar
          backgroundColor={
            (appHeaderColor && appHeaderColor) || statusBarColor || Colors.white
          }
          barStyle={'dark-content'}
          translucent
        />
        {safeAreaView !== false && <SafeAreaView style={style} />}
        {safeAreaView !== false && safeAreaViewHeader !== false && (
          <SafeAreaView style={safeViewcontainer}>{children}</SafeAreaView>
        )}
        {(safeAreaView === false || safeAreaViewHeader === false) && (
          <View
            style={[
              container,
              safeAreaViewHeader === false && styles.statusBarMarginTop,
            ]}>
            {children}
          </View>
        )}
        {safeAreaView === false && <SafeAreaView style={style} />}
      </>
    );
  }
}

function mapStateToProps({user}: any) {
  return {};
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
