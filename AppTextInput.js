import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {SampleTextInput} from './src/Component/SampleTextInput';
import {FunctionTextInputComponent} from './src/Component/FunctionTextInputComponent';

class AppTextInput extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <SampleTextInput></SampleTextInput>
        <FunctionTextInputComponent></FunctionTextInputComponent>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default AppTextInput;
