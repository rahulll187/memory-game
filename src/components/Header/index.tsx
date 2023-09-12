/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import styles from './Styles';
import HeaderLeft from './Left';
import HeaderRight from './Right';
import HeaderTitle from './Title';
import {Images} from './../../theme';

export interface Props {
  style?: any;
  children?: any;
  transparent?: boolean;
  title?: string;
  titleStyle?: any;
  hasBackBtn?: boolean;
  onBackPress?: any;
  navigation?: any;
  leftBtnImg?: any;
  leftBtnPress?: any;
  rightBtnImg?: any;
  rightBtnPress?: any;
  disableBottomBorder?: any;
  backBtnTxt?: string;
  rightBtnTxt?: any;
  appHeaderColor?: any;
  appTextColor?: any;
  textstyle?: any;
  hasLeftLogo?: boolean;
  clearShadow?: boolean;
  location?: boolean;
}

class Header extends React.PureComponent<Props> {
  static TITLE = HeaderTitle;

  static LEFT = HeaderLeft;

  static RIGHT = HeaderRight;

  render() {
    const {
      style,
      children,
      transparent,
      hasBackBtn,
      navigation,
      title,
      titleStyle,
      onBackPress,
      leftBtnImg,
      leftBtnPress,
      rightBtnImg,
      rightBtnPress,
      backBtnTxt,
      rightBtnTxt,
      appHeaderColor,
      appTextColor,
      textstyle,
      hasLeftLogo,
      clearShadow,
      location,
    } = this.props;
    return (
      <View
        style={[
          styles.header,
          !clearShadow && styles.headerShadow,
          transparent && styles.transparent,
          style,
          appHeaderColor && {backgroundColor: appHeaderColor},
        ]}>
        {hasLeftLogo && (
          <HeaderLeft>
            <TouchableOpacity
              style={styles.appLogo}
              onPress={() => {
                if (onBackPress) {
                  onBackPress();
                } else if (navigation) {
                  navigation.goBack(null);
                }
              }}>
              <Image
                source={Images.rightArrow}
                style={[
                  styles.backBtnImg,
                  appTextColor && {tintColor: appTextColor},
                ]}
              />
            </TouchableOpacity>
          </HeaderLeft>
        )}
        {leftBtnImg && (
          <HeaderLeft>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => {
                if (leftBtnPress) {
                  leftBtnPress();
                }
              }}>
              {leftBtnImg}
            </TouchableOpacity>
          </HeaderLeft>
        )}
        {location && (
          <HeaderLeft>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => {
                if (leftBtnPress) {
                  leftBtnPress();
                }
              }}>
              <Image style={styles.cartImg} source={Images.location} />
              <Text style={styles.pinCode}>{'12345'}</Text>
            </TouchableOpacity>
            <Text style={styles.addTxt}>
              {'Inner Circle, Connaught Place, New Delhi'}
            </Text>
          </HeaderLeft>
        )}
        {rightBtnImg && (
          <HeaderRight>
            <TouchableOpacity
              style={styles.rightBtn}
              onPress={() => {
                if (rightBtnPress) {
                  rightBtnPress();
                }
              }}>
              <Image style={styles.cartImg} source={Images.cart} />
            </TouchableOpacity>
          </HeaderRight>
        )}
        {rightBtnTxt && (
          <HeaderRight>
            <TouchableOpacity
              style={styles.rightBtn}
              onPress={() => {
                if (rightBtnPress) {
                  rightBtnPress();
                }
              }}>
              <Text
                style={[
                  styles.backBtnTxt,
                  appTextColor && {color: appTextColor},
                ]}>
                {rightBtnTxt}
              </Text>
              {/* <Image source={Images.backWhite} style={[styles.backImg,styles.nextBtn]} /> */}
            </TouchableOpacity>
          </HeaderRight>
        )}
        {title && (
          <HeaderTitle style={titleStyle} textstyle={textstyle}>
            {title}
          </HeaderTitle>
        )}
        {children}
      </View>
    );
  }
}

function mapStateToProps({user}: any) {
  return {};
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
