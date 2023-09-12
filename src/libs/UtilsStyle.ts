import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../theme/Colors';

const styles = EStyleSheet.create({
  textStyle: {
    fontSize: '14rem',
    fontFamily: 'OpenSans-Semibold',
    color: colors.white,
    // marginTop: '16.5rem',
  },
  view: {
    // marginTop: '40rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
