import {
  View,
  StyleProp,
  TouchableOpacity,
  GestureResponderEvent,
  ActivityIndicator,
} from 'react-native';
import React, {ReactNode, useEffect} from 'react';

import {AppText} from '../Text/AppText';

// Styles Import
import styles from './ButtonStyles';
import {colors} from '../../../constants/colors';
import {Generic} from '../../../constants/enums/Generic';
import {ButtonEnums} from './ButtonEnums';

export interface ButtonProps {
  containerStyle?: StyleProp<any>;
  labelStyle?: StyleProp<any>;
  contentStyle?: StyleProp<any>;
  name: string;
  disabled?: boolean;
  loading?: boolean;
  renderIcon?: () => ReactNode;
  type?: string;
  errorVisibility?: boolean;
  iconPlacement?: 'LEFT' | 'RIGHT';
  onPress?: (event: GestureResponderEvent) => void;
}

const Button = (props: ButtonProps) => {
  const {
    containerStyle,
    labelStyle,
    contentStyle,
    loading,
    name,
    disabled,
    type,
    renderIcon,
    errorVisibility,
    iconPlacement = 'RIGHT',
    onPress,
  } = props;

  const styleButtonWithIcon: StyleProp<any> = {
    flexDirection: iconPlacement === 'RIGHT' ? 'row-reverse' : 'row',
    alignItems: 'center',
  };

  const styleButtonWithError: StyleProp<any> = {
    borderColor: errorVisibility ? colors.error : colors.grey,
  };

  const styleButtonWhenDisabled: StyleProp<any> = {
    backgroundColor: disabled ? colors.disabled : colors.primary,
  };

  const styleButtonLabelWhenDisabled: StyleProp<any> = {
    color: disabled ? colors.white : colors.primary,
  };

  const styleButtonLabelWhenIconIsPresent: StyleProp<any> = {
    marginLeft: renderIcon ? 15 : 2,
  };

  const calculateButtonWithBasedOnType = () => {
    // if(type == )
  };

  // => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.containerStyle,
        styleButtonWhenDisabled,
        styleButtonWithError,
        containerStyle,
      ]}
      onPress={onPress}>
      <View style={[styles.contentStyle, styleButtonWithIcon, contentStyle]}>
        {renderIcon ? renderIcon() : null}
        {loading ? (
          <ActivityIndicator size={Generic.SMALL} color={colors.grey} />
        ) : (
          <AppText
            numberOfLines={1}
            textStyle={[
              styles.labelStyle,
              styleButtonLabelWhenIconIsPresent,
              styleButtonLabelWhenDisabled,
              labelStyle,
            ]}>
            {name}
          </AppText>
        )}
      </View>
    </TouchableOpacity>
  );
};

export {Button};
