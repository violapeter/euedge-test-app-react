import React, { Component } from 'react'
import Checkbox from './Checkbox'
import css from './EditorForm.css'
import TextField from './TextField'

const EditorForm = () =>
  <form className='EditorForm'>
    <TextField label='Name' id='name' type='text' />
    <TextField label='Job title' id='job' type='text' />
    <TextField label='Age' id='age' type='number' />
    <TextField label='Nickname' id='nickname' type='text' />
    <fieldset className='FieldSet'>
      <Checkbox label='Employee' id='addEmployee' />
    </fieldset>
  </form>

export default EditorForm
