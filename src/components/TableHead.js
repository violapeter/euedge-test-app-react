import React, { Component } from 'react'
import css from './TableHead.css'

const TableHead = () =>
  <thead className='TableHead'>
    <tr>
      <th>
        <div>Name</div>
        <div>(Job title)</div>
      </th>
      <th className='TableHead__age'>Age</th>
      <th>NickName</th>
      <th>Employee</th>
      <th />
    </tr>
  </thead>

export default TableHead
