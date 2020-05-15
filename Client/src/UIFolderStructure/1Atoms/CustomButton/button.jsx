import React from 'react';
import './button.scss';

const CustomButton = ({text,classNameValue,onclickFuntion})=> <button className={`button-atom ${classNameValue}`} onClick={onclickFuntion}>{text}</button>
export default CustomButton;
