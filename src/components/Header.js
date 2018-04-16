import React, { Component } from 'react'
import Button from './Button'
import css from './Header.css'

const Header = props =>
  <div className='Header'>
    <h1>Persons</h1>
    <Button level='primary' icon='add' onClick={props.onOpenEditor}>
      Add person
    </Button>
  </div>

export default Header
