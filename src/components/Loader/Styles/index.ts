import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../../../theme';
export default EStyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.6)'
  },
  darkContainer: {
    backgroundColor: 'rgba(22,32,42, 0.85)'
  },
  loader: {
    height: 90,
    width: 90
  },
  transparent: {
    // backgroundColor: 'transparent'
  },
  horizontal: {
    flexDirection: 'row'
  },
  horizontalTxt: {
    paddingTop: 0
  }
});
