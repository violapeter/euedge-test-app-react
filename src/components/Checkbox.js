import React, { Component, Fragment } from 'react'

const Checkbox = props =>
  <Fragment>
    <input type='checkbox' {...props} id={props.id} />
    <label htmlFor={props.id}>{props.label}</label>
  </Fragment>

export default Checkbox