import React from 'react'
import {Text} from 'react-native'

const CityComponent = () => {
    let name = `Burak`
    let surname = `Can`

    return (
        <Text>
            {name} isimli, {surname} ailesinden olan... /
        </Text>
    )
}

export {CityComponent}
