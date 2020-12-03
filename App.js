import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Greeting from './src/BasicElements/Greeting';
import GreetingFunction from './src/BasicElements/GreetingFunction';
import {CityComponent} from './src/BasicElements/NameComponent';
import RandomValuesGenetarator from './src/BasicElements/RandomValuesGenetarator';

class App extends React.Component {

  render() {
    return (
    <View style={styles.container}>
      <Text>Burak</Text>
      <Greeting></Greeting>
      <GreetingFunction></GreetingFunction>
      <CityComponent></CityComponent>
      <Text>Random Sensors</Text>
      <RandomValuesGenetarator></RandomValuesGenetarator>
      <Text>Burak Can</Text>
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

export default App;
