import React, { Component } from 'react'

import {AboutPageConstant} from './../../../Constant/about';

export default class About extends Component {
    render() {
        return (
            <div>
                <h1>{AboutPageConstant.name}</h1>
            </div>
        )
    }
}
