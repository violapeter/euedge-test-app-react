import React, { Component } from 'react'
import PersonRow from './PersonRow'
import TableHead from './TableHead'
import * as sortTypes from '../sortTypes'
import css from './PersonsTable.css'

const sortBy = (persons, sortType, sortOrder) => {
  const sorted = persons.sort((personA, personB) => {
    const a = personA[sortType]
    const b = personB[sortType]

    switch (typeof a) {
      case 'string':
        const x = a.toLowerCase()
        const y = b.toLowerCase()
        return x < y ? -1 : x > y ? 1 : 0
      case 'number':
        return a - b
      case 'boolean':
        return (a === b) ? 0 : b ? -1 : 1
    }
  })
  return sorted[sortOrder === sortTypes.DESC ? 'reverse' : 'map'](x => x)
}

const PersonsTable = props =>
  <table className='Table'>
    <TableHead {...props} />
    <tbody>
      {props.persons ? sortBy(props.persons, props.sortBy, props.sortOrder).map((row, id) =>
        <PersonRow onDelete={id => props.onPersonDelete(id)} key={id} id={id} {...row} />) : null}
    </tbody>
  </table>

export default PersonsTable
