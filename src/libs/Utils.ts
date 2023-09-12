import {Dimensions, Platform} from 'react-native';
import Snackbar from 'react-native-snackbar';
import {showMessage} from 'react-native-flash-message';
import styles from './UtilsStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
const {height, width} = Dimensions.get('window');

/**
 * Check device
 */
export const isIphoneX = () => {
  return (
    // This has to be iOS duh
    Platform.OS === 'ios' &&
    // Accounting for the height in either orientation
    (height >= 812 || width >= 812)
  );
};

export const randomString = (
  length: any = 6,
  chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
) => {
  var result = '';
  for (var i = length; i > 0; --i)
    // eslint-disable-next-line curly
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};

export const snackbar = (message: string, length?: number) => {
  return Snackbar.show({
    text: message || 'Something went wrong',
    duration: length || 2000,
  });
};

export const showToast = (
  title = 'Error!',
  message: string,
  type: any = 'error',
) => {
  showMessage({
    message: title,
    description: message,
    type,
    textStyle: styles.textStyle,
    backgroundColor:
      type == 'error'
        ? '#D7443E'
        : type == 'warning'
        ? '#F5A623'
        : type == 'success'
        ? '#2D8A4E'
        : '#0A4EAF',
    icon: {
      icon: type === 'error' ? '#D7443E' : type,
      position: 'left',
      style: styles.view,
    },
    duration: 2000,
  });
};

export const showSuccessToast = (message: string) => {
  showToast('Hurray', message, 'success');
};

export const showErrorToast = (message: string) => {
  showToast('Hold On', message, 'error');
};

export const showWarningToast = (message: string, title = 'Warning!') => {
  showToast(title, message, 'warning');
};

export const getUserData = async () => {
  const data: any = await AsyncStorage.getItem('loginData');
  let params = JSON.parse(data);
  return params;
};
