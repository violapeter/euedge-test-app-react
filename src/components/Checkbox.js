import React, { Component, Fragment } from 'react'
import css from './Checkbox.css'

const Checkbox = props =>
  <Fragment>
    <input onChange={props.onChange} className='Checkbox' type='checkbox' {...props} id={props.id} />
    <label htmlFor={props.id}>{props.label}</label>
  </Fragment>

export default Checkbox
