import React, {Component} from 'react';
import {View, Text} from 'react-native';

class YourComponent extends Component {

    constructor(props) {
        super();
        this.state = {
            count: 0,
        }
    }

    incrementCount()
    {
        const { count } = this.state
        this.setState({
            count: count + 1
        })
    }
    render ()
    {
        const { count } = this.state
        const { message } = this.props
        return (
            <View>
                <Text onPress={() => this.incrementCount()}>
                    { message.toUpperCase() }: { count } 
                </Text>
            </View>
        )
    }
}


export default YourComponent;
