import React, {Component} from 'react';
import {View, Text} from 'react-native';

class TheirComponent extends Component {

    constructor() {
        super();
        this.state = {
            count: 0,
        }
    }
    incrementCounter = () => {
        const { count } = this.state
        this.setState({
            count: count + 1,
        })
    }
    reset = () => {
        const { count } = this.state
        this.setState({
            count: 0
        })
    }

    render()
    {
        const { message, order } = this.props
        const { count } = this.state
        return(
            <View>
                <Text onPress={() => this.reset()}>
                    {order}.{message.toUpperCase()}:
                </Text>
                <CounterComponent text={message} incrementCount={() => this.incrementCounter()}
                                    count={count}>
                </CounterComponent>
            </View>
        )
    }
}

class CounterComponent extends Component{

    render ()
    {
        const { count, incrementCount, text } = this.props
        return(
            <View>
                <Text onPress={incrementCount}>
                    {text}: {count}
                </Text>
            </View>
        )
    }
}

export {TheirComponent}
