import {View, TextInput, StyleProp} from 'react-native';
import React, {ReactNode, useEffect} from 'react';

import {AppText} from '../Text/AppText';

// Styles Import
import styles from './ButtonStyles';

export interface ButtonProps {
  containerStyle: StyleProp<any>;
  labelStyle: StyleProp<any>;
  contentStyle: StyleProp<any>;
  name: string;
  disabled: boolean;
  loading: boolean;
  renderIcon?: () => ReactNode;

}

const Input = (props: ButtonProps) => {
  const {containerStyle} = props;

  // const styleInputWithIcon: StyleProp<any> = {
  //   flexDirection: iconPlacement === 'RIGHT' ? 'row-reverse' : 'row',
  //   alignItems: 'center',
  // };

  // const styleInputWithError: StyleProp<any> = {
  //   borderColor: errorVisibility && errorMessage ? colors.error : colors.grey,
  // };

  // => {
  return (
    <View
      style={[
        styles.inputContainer,
        styleInputWithError,
        containerStyle,
      ]}></View>
  );
};

export {Input};
