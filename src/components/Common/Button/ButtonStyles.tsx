import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';
import {font} from '../../../constants/font';

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontFamily: font.MEDIUM,
    color: colors.text,
    marginHorizontal: 2,
  },
  inputContainer: {
    marginHorizontal: 20,

    borderWidth: 0.6,
    borderRadius: 8,
    borderColor: '#929AAB',
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
