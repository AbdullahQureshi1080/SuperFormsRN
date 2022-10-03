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
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';

// import {observable} from '@legendapp/state';

import {Form, FormField, Button, SubmitButton} from '@Components';

// Supporting Imports
import * as Yup from 'yup';

import Entypo from 'react-native-vector-icons/Entypo';
import {ButtonEnums} from './src/components/Common/Button/ButtonEnums';
// import {ButtonEnums} from './src/components/Common/Button/ButtonEnums';

// // Input State
// const inputState = observable({input: '' as string});
// const setInputState = (text: string) => inputState.input.set(text);

const App = () => {
  const renders = ++useRef(0).current;

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email().label('Email'),
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
            <FormField name="email" label="Email" showErrorMessage={true} />
            <SubmitButton name="Login" />
          </Form>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
