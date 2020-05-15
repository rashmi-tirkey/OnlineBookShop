import React, { Component } from 'react'

import Header from './../../2Molecules/Header/header'
import "./home.scss"
import bookdata from '../../../Constant/booklist.json'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    loginForm = (id01) => {
        console.log("vikash");
    }
    render() {
        return (
            <div className="home-page-wrapper">
                <div className="header-container">
                    <Header />
                </div>

                <h3>This is Book List</h3>
                <div style={{ display: "flex", flexWrap: "wrap", textAlign: "center" }}>
                    {
                        bookdata.map((data, index) => {
                            if(index<5)
                            return (
                                <div style={{ padding: "10px", margin: "10px", width: "29%" }} key={index}>
                                    <div>
                                        <img src={data.thumbnailUrl}></img>
                                    </div>
                                    <div>
                                        {data.title}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
