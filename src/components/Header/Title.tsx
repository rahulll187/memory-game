import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import styles from './Styles';

export interface Props {
  style?: any;
  textstyle?: any;
  children?: any;
  appTextColor?: any;
}

class HeaderTitle extends React.PureComponent<Props> {
  render() {
    const {style, textstyle, children, appTextColor} = this.props;
    return (
      <View style={[styles.title, style]}>
        <Text
          style={[
            styles.titleTxt,
            textstyle,
            appTextColor && {color: appTextColor},
          ]}>
          {children}
        </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderTitle);
