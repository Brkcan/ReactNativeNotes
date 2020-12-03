import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Alert,
    Image,
} from 'react-native';
import {GreetingComponenet} from './src/State/Greeting';
import Counter from './src/Algoritmalar/Counter';

class AppState extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <GreetingComponenet></GreetingComponenet>
                <Counter minus="Azalt" plus="Arttir" reset="reset"></Counter>
                <Text>Burak</Text>
                <Text>Can</Text>
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

export default AppState;
