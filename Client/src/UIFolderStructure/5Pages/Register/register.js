import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <div className="parent-wrapper">
                <div className="heading-wrapper">
                    <div className="first-div dice" >
                        <h2>Login</h2>
                       <span><p>Get access to your <br/>
                       orders, Wishlist and <br/>
                       Recommendations</p></span>
                    </div>
                    <div className="second-div dice">
                        <div className="username user-input">
                            <input type="text" name="fname" placeholder="Enetr EmailId" onchange=""/>
                        </div>
                        <div className="password user-input">
                            <input type="password" name="name" placeholder="Enter Password" onkeypress=""/>
                        </div>
                        <button type="button" className="btn">Login</button>
                        
                    </div>
                    
                </div>
         </div>
        )
    }
}
