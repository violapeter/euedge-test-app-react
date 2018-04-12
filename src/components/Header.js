import React, { Component } from 'react'
import css from './Header.css'
import Button from './Button'
import Icon from './Icon'

const Header = () =>
  <div className='Header'>
    <h1>Persons</h1>
    <Button type='primary' icon='add'>
      Add person
    </Button>
  </div>

export default Header