import React, {Component} from 'react'
import Checkbox from './Checkbox'
import Icon from './Icon'
import css from './PersonRow.css'

const PersonRow = props =>
  <tr className='Person'>
    <td>
      <div className='Person__name'>{props.name}</div>
      <div className='Person__job'>{props.job
        ? props.job
        : (<div className='Person__not-provided'>/not provided/</div>)}</div>
    </td>
    <td className='Person__age'>{props.age}</td>
    <td>{props.nick}</td>
    <td className='Person__employee'>
      <Checkbox checked={props.employee} id={`employee-${props.id}`} readOnly />
    </td>
    <td className='Person__actions'>
      <button onClick={() => props.onDelete(props.id)} className='Person__delete'><Icon icon='delete' /></button>
    </td>
  </tr>

export default PersonRow
