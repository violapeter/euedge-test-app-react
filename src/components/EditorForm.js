import React, { Component } from 'react'
import Checkbox from './Checkbox'
import TextField from './TextField'
import css from './EditorForm.css'
import Button from './Button'

export default class EditorForm extends Component {
  constructor () {
    super()

    this.state = {
      name: '',
      job: '',
      age: '',
      nickname: '',
      employee: false
    }
  }

  render () {
    const { cancelEdit, onSubmit } = this.props

    return (<form className='EditorForm'>
      <TextField onChange={name => this.setState({ name })} label='Name' id='name' type='text' />
      <TextField onChange={job => this.setState({ job })} label='Job title' id='job' type='text' />
      <TextField onChange={age => this.setState({ age })} label='Age' id='age' type='number' />
      <TextField onChange={nickname => this.setState({ nickname })} label='Nickname' id='nickname' type='text' />
      <fieldset className='FieldSet'>
        <Checkbox onChange={e => this.setState({ employee: e.target.checked })} label='Employee' id='addEmployee' />
      </fieldset>

      <div className='FormActions'>
        <Button onClick={cancelEdit} type='button' level='secondary'>Cancel</Button>
        <Button onClick={() => onSubmit(this.state)} type='button' level='primary'>Add</Button>
      </div>
    </form>)
  }
}
