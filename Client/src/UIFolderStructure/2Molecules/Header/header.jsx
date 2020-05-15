import React, { Component } from 'react'

import SearchInputBox from '../../1Atoms/SearchInputBox/searchInputBox.jsx'
import CustomButton from '../../1Atoms/CustomButton/button.jsx'

import './header.scss';

export default class Header extends Component {
    render() {
        return (
            <div className="header-wrapper">
                <div className="row header-container">
                    <div className="col-xs-12 mobile">
                        <div className="col-xs-4 title">
                            <font className="header"><i className="fad fa-books" aria-hidden="true"></i>BOOK STORE</font>
                        </div>
                        <div className="col-xs-4 col-xs-offset-4 cart">
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            <span className="login-text">Login</span>
                        </div>
                        <div className="col-xs-12 header-mobile-search">
                            <SearchInputBox inputType="text" placeholder="Search for produts brands, and more" classNameValue="input-box" name="search" />
                        </div>
                    </div>
                    <div className="col-lg-12 desktop">
                        <div className="col-lg-7 left">
                            <div className="col-lg-3">
                                <font className="header"><i className="fad fa-books" aria-hidden="true"></i>BOOK STORE</font>
                            </div>
                            <div className="col-lg-9">
                                <SearchInputBox inputType="text" placeholder="Search for produts brands, and more" classNameValue="input-box" name="search" />
                            </div>
                        </div>
                        <div className="col-lg-5 right">
                            <CustomButton text="Login" classNameValue="login" />
                            <font className="arr more" >More &#9663;</font>
                            <font><i className="fa fa-shopping-cart" aria-hidden="true"></i>Cart</font>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
