import React, { Component } from 'react'
import PersonRow from './PersonRow'
import TableHead from './TableHead'
import css from './SortableTable.css'

export default class SortableTable extends Component {
  orderBy () {

  }

  render () {
    const { persons } = this.props

    return (<table className='Table'>
      <TableHead />
      <tbody>
        {persons ? persons.sort().map((row, id) => <PersonRow key={id} {...row} />) : null}
      </tbody>
    </table>)
  }
}
