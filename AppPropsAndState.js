import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Alert,
    Image,
} from 'react-native';
import MyComponent from './src/StateAndPropsDetails/MyComponent';
import YourComponent from './src/StateAndPropsDetails/YourComponent';
import {TheirComponent} from './src/StateAndPropsDetails/TheirComponent';
import DisplayCount from './src/StateAndPropsDetails/DisplayCount';

class AppPropsAndState extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <MyComponent message="1"></MyComponent>
                <MyComponent message="2"></MyComponent>
                <YourComponent message="Deger"></YourComponent>

                <Text>Their Component.../</Text>
                <TheirComponent message='count' order='4'></TheirComponent>

                <Text></Text>
                <Text></Text>
                <Text>.........////////////////</Text>

                <DisplayCount></DisplayCount>
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

export default AppPropsAndState;
