import React, {Component} from 'react'
import {Text} from 'react-native'
import RandomUtil from '../Random/RandomUtil';

const name = ['Burak', 'Can', 'Superman', 'Batman']

class RandomValuesGenetarator extends Component {
    constructor(name, value)
    {
        super();
        this._name = name
        this._value = value
    }
    get name () {return this._name}
    set name (value) {this._name = value}

    get value () {return this._value}
    set value (value) {this._value = value}

    RandomName = () => {
        return name[(RandomUtil(0, name.length))]
    }
    RandomValue = () => {
        return RandomUtil(0, 100)
    }
    render () {
        let rand = this.RandomValue()
        let names = this.RandomName()
        let rvg = new RandomValuesGenetarator(names, rand)
        return (
            <Text>{rvg.name} sensorunden {rvg.value} birim olculmustur.../</Text>
        )
    }
}


export default RandomValuesGenetarator
