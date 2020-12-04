import React, {Component} from 'react';
import {View, Text, Button, ScrollView } from 'react-native';


class DisplayCount extends Component{
    constructor() {
        super();
        this.state = {
            count: 0,
            endDisplayCount: 0,
            display: 0
        }
    }

    incrementCount = () => {
        const { count, endDisplayCount }  = this.state
        this.setState({
            count: count + 1
        })
    }

    displayCount = () => {
        const { count, endDisplayCount } = this.state
        this.setState({
            count: endDisplayCount
        })
    }
    reset = () => {
        const { count, endDisplayCount } = this.state
        this.setState({
            count: 0,
            endDisplayCount: count
        })
    }
    render()
    {
        const { count, endDisplayCount } = this.state
        return(
            <View>
                    <Text>{count}</Text>
                    <Button title='Arttir.../' onPress={() => this.incrementCount()} />
                    <Button title='Son Deger.../' onPress={() => this.displayCount()}></Button>
                    <Button title='Temizle.../' onPress={() => this.reset()}></Button>
            </View>
        )
    }
}

export default DisplayCount;
