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

import React, {useRef} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';

import {observable} from '@legendapp/state';
// import {Input} from './src/components/Common/Input/Input';
// import Entypo from 'react-native-vector-icons/Entypo';
// import {InputEnums} from './src/components/Common/Input/InputEnums';
import {Form} from './src/components/Form/Form';
import {FormField} from './src/components/Form/FormField/FormField';
// import colors from './src/constants/colors';

// Supporting Imports
import * as Yup from 'yup';

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
const inputState = observable({input: '' as string});
const setInputState = (text: string) => inputState.input.set(text);

const App = () => {
  const renders = ++useRef(0).current;

  // setInterval(() => {
  //   state.settings.count + 1;
  // }, 1000);
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
  });
  const handleSubmit = () => {};

  return (
    <SafeAreaView style={{backgroundColor: '#f8f8f8', flex: 1}}>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={{color: '#000'}}>renders:{renders}</Text>
        <View style={{marginTop: 20, marginBottom: 20}}>
          <Form
            initialValues={{email: ''}}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize={true}>
            <FormField name="email" label="Email" showErrorMessage={false} />
          </Form>
        </View>
        <Button
          title="Get Value"
          onPress={() => console.log('Value Input', inputState.get())}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
