import React, { Component } from 'react'
import css from './TableHead.css'
import * as sortTypes from '../sortTypes'

const SortableThead = props => {
  const getClassNames = () => [
    props.sortBy === props.sortType ? 'is-sorted' : '',
    props.align ? `TableHead--${props.align}` : '',
    props.sortOrder === sortTypes.ASC ? 'is-ascending' : 'is-descending'
  ].join(' ')

  return (<th
    onClick={() => props.sortPersons(props.sortType)}
    className={getClassNames()}>
    {props.children}
  </th>)
}

const TableHead = props =>
  <thead className='TableHead'>
    <tr>
      <SortableThead {...props} sortType={sortTypes.NAME}>Name (Job title)</SortableThead>
      <SortableThead {...props} align='right' sortType={sortTypes.AGE}>Age</SortableThead>
      <SortableThead {...props} sortType={sortTypes.NICK}>Nickname</SortableThead>
      <SortableThead {...props} sortType={sortTypes.EMPLOYEE}>Employee</SortableThead>
      <th />
    </tr>
  </thead>

export default TableHead
