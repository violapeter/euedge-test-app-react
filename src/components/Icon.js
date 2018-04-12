import React, { Component } from 'react'
import icons from '../icons'

const Icon = props =>
  <svg
    width={props.size || '24px'}
    height={props.size || '24px'}
    viewBox='0 0 24 24'
    className='Icon'
    {...props}>
    <path d={icons[props.icon]} />
  </svg>

export default Icon