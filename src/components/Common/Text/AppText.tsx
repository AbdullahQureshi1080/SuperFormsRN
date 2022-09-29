// React Imports
import {Text, StyleProp} from 'react-native';
import React, {FC, ReactNode} from 'react';

// Styles Import
import styles from './AppTextStyles';

export type TextProps = {
  children?: ReactNode;
  textStyle?: StyleProp<any>;
};

const AppText: FC<TextProps> = ({children, textStyle}) => {
  return <Text style={[styles.text, textStyle]}>{children}</Text>;
};

export default AppText;
