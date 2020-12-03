import React, {Component} from 'react';
import {View, Text} from 'react-native';

class MyComponent extends Component {

    constructor() {
        super();
        this.state = {
            count: 0,
        }
    }

    incrementCount = () =>
    {
        const { count } = this.state
        this.setState({
            count: count + 1
        })
    }
    reset = () =>
    {
        const { count } = this.state
        this.setState({
            count: 0
        })
    }
    render ()
    {
        const { count } = this.state
        const { message } = this.props

        return (
            <View>
                <Text onPress={() => this.reset()}>
                    { message }. Sayaci Sifirla.../
                </Text>
                <Text onPress={() => this.incrementCount()}>
                    Count.../: {count}
                </Text>
            </View>
        )
    }
}


export default MyComponent;
