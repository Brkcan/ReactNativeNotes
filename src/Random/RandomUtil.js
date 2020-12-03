import React, {Component} from 'react'

const RandomUtil = (min, max) => {
        return parseInt(Math.random() * (max - min) + min)
    }

export default RandomUtil
