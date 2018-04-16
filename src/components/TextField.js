import React, { Component } from 'react'
import css from './TextField.css'

const TextField = props =>
  <fieldset className='FieldSet'>
    <label htmlFor={props.id}>{props.label}</label>
    <input onChange={e => props.onChange(e.target.value)} id={props.id} type={props.type} className='TextInput' />
  </fieldset>

export default TextField
