import {Platform} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import {Colors} from '../../../theme';
import colors from '../../../theme/Colors';

export default EStyleSheet.create({
  header: {
    width: '100%',
    height: '50rem',
    flexDirection: 'row',
    backgroundColor: Colors.white,
    alignItems: 'center',
    position: 'absolute',
    zIndex: 99999,
  },
  headerShadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 5,
  },
  transparent: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
      },
      android: {
        elevation: null,
      },
    }),
  },
  left: {
    // flexDirection: 'row',
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    // width: '15%',
    height: '100%',
    position: 'absolute',
    left: 0,
    paddingTop: Platform.OS === 'ios' ? 18 : 16,
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // width: '15%',
    height: '100%',
    position: 'absolute',
    right: 0,
  },
  title: {
    paddingHorizontal: '10rem',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '70%',
    height: '100%',
    left: '15%',
  },
  titleTxt: {
    fontSize: '17rem',
    fontFamily: 'OpenSans-Semibold',
    color: Colors.black,
    // fontWeight: '600',
    // top: '5rem',
    '@media android': {
      top: 0,
    },
  },
  backBtnTxt: {
    fontSize: '17rem',
    color: Colors.black,
    fontWeight: '500',
    left: '1rem',
  },
  backBtn: {
    height: '50%',
    paddingTop: Platform.OS === 'ios' ? 0 : 0,
    alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row',
    width: 100,
    // backgroundColor: 'red',
    marginLeft: '10rem',
  },
  addTxt: {
    marginLeft: '40rem',
    fontSize: '12rem',
    fontFamily: 'OpenSans-Semibold',
    color: Colors.primaryTxt,
  },
  backImg: {
    height: '18rem',
    width: '10rem',
  },
  rightBtn: {
    height: '100%',
    marginRight: '10rem',
    paddingTop: Platform.OS === 'ios' ? 0 : 0,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinCode: {
    fontSize: 14,
    fontFamily: 'OpenSans-Semibold',
    color: colors.black,
    marginLeft: '10rem',
  },
  headerTxt: {
    fontSize: '18rem',
  },
  nextBtn: {
    transform: [{rotateY: '180deg'}],
  },
  appLogo: {
    width: '60rem',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '10rem',
  },
  cartImg: {
    height: 20,
    width: 20,
  },
  backBtnImg: {
    width: 26,
    height: 20,
    transform: [{rotate: '180deg'}],
  },
});
