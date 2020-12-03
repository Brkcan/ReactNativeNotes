import React, {useState} from 'react'
import {Text, View, Button, StyleSheet} from 'react-native'



const Greeting = props => {
    const [isOlder, setOlder] = useState(true)

    const isButton = () => {
        setOlder(!isOlder)
    }
    return (
        <View>
            <Text>Merhaba ben {props.name}. Ben {isOlder ? "yasliyim" : "gencim"}</Text>
            <Button title="Durum" onPress={() => setOlder(!isOlder)}></Button>
        </View>
    )
}


const GreetingComponenet = () => {
    return (
        <Greeting name="Burak"></Greeting>
    )
}

const styles = StyleSheet.create({

    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
});
export {GreetingComponenet}
