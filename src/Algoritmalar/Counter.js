import React, {useState} from 'react'
import {Text, View, Button} from 'react-native'

const Counter = (props) => {
    let [counter, setCounter] = useState(0)
    return (
        <View>
            <Text>Counter</Text>
            <Button title={props.minus} onPress={() => setCounter(counter= counter - 1 )}></Button>
            <Button title={props.plus} onPress={() => setCounter(counter= counter + 1 )}></Button>
            <Text>{counter}</Text>

            <Text>Reset</Text>
            <Button title={props.reset} onPress={() => setCounter(counter = 0)}></Button>

        </View>
    )
}

export default Counter

