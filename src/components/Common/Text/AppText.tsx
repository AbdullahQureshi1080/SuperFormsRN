// React Imports
import {Text, StyleProp} from 'react-native';
import React, {ReactNode} from 'react';

// Styles Import
import styles from './AppTextStyles';

export type TextProps = {
  children?: ReactNode;
  textStyle?: StyleProp<any>;
};

const AppText = (props: TextProps) => {
  const {children, textStyle} = props;
  return <Text style={[styles.text, textStyle]}>{children}</Text>;
};

export {AppText};
