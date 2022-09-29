import {View, TextInput, StyleProp, TextInputProps} from 'react-native';
import React, {FC, ReactNode} from 'react';
import AppText from '../Text/AppText';

// Styles Import
import styles from './InputStyles';

export type InputProps = {
  value?: string;
  onChangeText: (text: string) => void;
  style?: StyleProp<any>;
  editable?: boolean;
  label?: string;
  labelStyle?: StyleProp<any>;
  containerStyle?: StyleProp<any>;
  hideLabel?: boolean;
  props?: TextInputProps;
  autoFocus?: boolean;
  assistiveText?: string;
  assistiveTextStyle?: StyleProp<any>;
  //   renderIcon?: () => {};
};

const Input: FC<InputProps> = ({
  value,
  onChangeText,
  editable,
  label,
  containerStyle,
  labelStyle,
  hideLabel,
  props,
  autoFocus = true,
  assistiveText,
  assistiveTextStyle,
  //   renderIcon,
}) => {
  return (
    <View style={[styles.inputContainer, containerStyle]}>
      {hideLabel ? null : (
        <AppText textStyle={[styles.label, labelStyle]}>{label}</AppText>
      )}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        editable={editable}
        style={styles.input}
        cursorColor={styles.cursor.color}
        autoFocus={autoFocus}
        {...props}
      />
      {/* {renderIcon ? renderIcon() : null} */}
      {assistiveText ? (
        <AppText textStyle={[styles.assistiveText, assistiveTextStyle]}>
          {assistiveText}
        </AppText>
      ) : null}
    </View>
  );
};

export default Input;
