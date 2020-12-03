import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Alert,
    Image,
} from 'react-native';
import {Greeting} from './src/Props/Greeting';

class App extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Greeting name='Burak' place="Ankara'da"/>
                <Button title="Tamam../" onPress={() => Alert.alert("Tamam.../")} />
                <Image source={{uri: "https://i.ytimg.com/vi/YzrAHP0TovY/maxresdefault.jpg "}}
                            style={{width: 200, height: 300}}/>
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
