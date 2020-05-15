import React from 'react'
import './searchInputBox.scss'
const SearchInputBox = ({ inputType, placeholder, name, classNameValue }) => {
    return (<div className="form-group has-search">
        <span className="fa fa-search form-control-feedback"></span>
        <input type={inputType} className={`form-control ${classNameValue}`} placeholder={placeholder} name={name}></input>
    </div>)
}
export default SearchInputBox;





