import React, { Component } from 'react'
import css from './Button.css'
import Icon from './Icon'

const Button = props =>
  <button className={`Button Button__${props.type}`} {...props}>
    {props.icon
      ? <Icon size={16} icon={props.icon} />
      : null}
    {props.children}
  </button>

export default Button