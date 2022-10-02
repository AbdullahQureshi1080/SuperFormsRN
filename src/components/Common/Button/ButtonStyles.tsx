import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';
import {font} from '../../../constants/font';

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 16,
    fontFamily: font.MEDIUM,
    color: colors.text,
    marginHorizontal: 2,
    width: `85%`,
    // backgroundColor: 'red',
    textAlign: 'center',
  },
  containerStyle: {
    borderRadius: 8,
    // borderWidth: 0.6,
    marginHorizontal: 20,
    backgroundColor: colors.primary,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 16,
    fontFamily: font.REGULAR,
    color: colors.text,
    width: '95%',
  },
  cursor: {
    color: colors.grey,
  },
  assistiveText: {
    fontSize: 12,
    fontFamily: font.REGULAR,
    color: colors.grey,
  },
  errorText: {
    fontSize: 12,
    fontFamily: font.REGULAR,
    color: colors.error,
  },
});

export default styles;
