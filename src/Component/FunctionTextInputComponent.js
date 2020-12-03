import React, {useState} from 'react';
import {TextInput, Text, View, Button} from 'react-native';

const FunctionTextInputComponent = props => {
    const title = 'KAYIT OL.../'
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const buttonTitle = () => { return title }
    const  handleEmail = (text) =>  {setEmail(text)}
    const handlePassword = (text) => {setPassword(text)}
    const login = (email, password) => {return alert(`email= ${email} - password= ${password}`)}
    return (
        <View>
            <Text>Function Component</Text>
            <TextInput style={{height: 40, width:300, borderColor: 'blue', borderWidth: 1}}
            onChangeText={handleEmail}/>

            <TextInput style={{height: 40, width:300, borderColor: 'blue', borderWidth: 1}}
            onChangeText={handlePassword}/>

            <Button title={buttonTitle()} onPress={() => login(email, password)}></Button>
        </View>
            )
}
export {FunctionTextInputComponent}
