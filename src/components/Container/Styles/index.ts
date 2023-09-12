/* eslint-disable indent */
import EStyleSheet from 'react-native-extended-stylesheet';
import {StatusBar} from 'react-native';
import {Colors} from '../../../theme';
import {isIphoneX} from '../../../libs/Utils';
import {Platform} from 'react-native';

const styles = EStyleSheet.create({
  safeViewcontainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white,
    '@media android': {
      marginTop: StatusBar.currentHeight,
    },
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  statusBarMarginTop: {
    marginTop: StatusBar.currentHeight,
  },
  statusBar: {
    height:
      (isIphoneX() && 47.8) ||
      (Platform.OS === 'ios' && 20) ||
      StatusBar.currentHeight,
  },
});

export default styles;
