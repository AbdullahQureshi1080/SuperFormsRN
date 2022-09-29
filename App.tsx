/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useRef, useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';

import {observable} from '@legendapp/state';
import Input from './src/components/Common/Input/Input';

// // Create an observable object
// const state = observable({settings: {theme: 'dark', count: 0}});

// // Just get and set
// state.settings.theme.get() === 'dark';
// state.settings.theme.set('light');

// // observe re-runs when accessed observables change
// observe(() => {
//   console.log(state.settings.theme.get());
// });

// Input State
// const inputState = observable({input: ''});
// const setInputState = (text: string) => inputState.input.set(text);

const App = () => {
  const [input, setInput] = useState<string>('');
  const renders = ++useRef(0).current;

  // setInterval(() => {
  //   state.settings.count + 1;
  // }, 1000);

  return (
    <SafeAreaView style={{backgroundColor: '#f8f8f8', flex: 1}}>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={{color: '#000'}}>renders:{renders}</Text>
          <Input
            label={'Email'}
            value={input}
            onChangeText={setInput}
            props={{multiline: true}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
