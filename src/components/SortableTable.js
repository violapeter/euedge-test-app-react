import React, { Component } from 'react'
import data from '../../persons.json'
import PersonRow from './PersonRow'
import TableHead from './TableHead'
import css from './SortableTable.css'

export default class SortableTable extends Component {
  orderBy () {

  }

  render () {
    //const { data } = this.props

    return (<table className='Table'>
      <TableHead />
      <tbody>
        {data.sort().map((row, id) => <PersonRow key={id} {...row} />)}
      </tbody>
    </table>)
  }
}