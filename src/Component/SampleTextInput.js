import React, {Component} from 'react';
import {TextInput, Button, View, Text} from 'react-native';
import {exists,save} from './LoginRepository';

class SampleTextInput extends Component {
    constructor(email, password) {
        super();
        this._email = email
        this._password = password
    }
    get email () {return this._email}
    get password () {return this._password}

    state = {
        email: '',
        password: '',
    }

    handleEmail = (text) => {
        this.setState({
            email: text
        })
    }
    handlePassword = text => {
        this.setState({
            password: text
        })
    }

    Register = (email, password) => {
        if(save(email, password))
             alert(`Kayit Basarili >>>> Email= ${email}, Password= ${password}`)
        else
            alert (`KAYIT BASARISIZ >>>>>>`)
    }

    Login = (email, password) => {
        if(exists(email, password))
            alert(`Giris basarili >>>> Email= ${email}, Password= ${password}`)
        else
            alert(`Giris basarisiz!!!!! >>>> `)

    }


    render () {
        return (
            <View>
                <Text>Class Component Example .../</Text>
                <TextInput style={{height: 40, width:300, borderColor: 'blue', borderWidth: 1}}
                onChangeText={this.handleEmail} placeholder='Email giriniz.../'></TextInput>
                <TextInput style={{height: 40, width:300, borderColor: 'blue', borderWidth: 1}}
                           onChangeText={this.handlePassword} placeholder='Sifre giriniz.../'></TextInput>

                <Button title='Kayit Ol.../'
                        onPress={() => this.Register(this.state.email, this.state.password)}>
                </Button>
                <Button title='GIRIS YAP.../'
                        onPress={() => this.Login(this.state.email, this.state.password)}>
                </Button>
            </View>
        )
    }
}

export {SampleTextInput}
