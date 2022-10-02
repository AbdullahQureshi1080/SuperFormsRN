import {StyleSheet} from 'react-native';
import font from '../../../constants/font';

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontFamily: font.MEDIUM,
    color: '#474A56',
  },
  inputContainer: {
    // width: '100%',
    // backgroundColor: '#D3D5FD',
    marginHorizontal: 20,
    // paddingVertical: 0,
    borderWidth: 0.6,
    borderRadius: 8,
    borderColor: '#929AAB',
    paddingHorizontal: 10,
    paddingVertical: 2,
    // flexDirection: 'row',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    marginHorizontal: 5,
    fontSize: 16,
    fontFamily: font.REGULAR,
    color: '#474A56',
    width: '95%',
    // backgroundColor: 'red',
    // borderWidth: 0.6,
    // borderRadius: 8,
    // borderColor: '#929AAB',
    // paddingHorizontal: 10,
  },
  cursor: {
    color: '#929AAB',
  },
  assistiveText: {
    fontSize: 12,
    fontFamily: font.REGULAR,
    color: '#929AAB',
  },
});

export default styles;
