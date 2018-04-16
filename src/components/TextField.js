import React, { Component } from 'react'
import css from './TextField.css'

const TextField = props =>
  <fieldset className='FieldSet'>
    <label htmlFor={props.id}>{props.label}</label>
    <input id={props.id} type={props.type} className='TextInput' />
  </fieldset>

export default TextField
