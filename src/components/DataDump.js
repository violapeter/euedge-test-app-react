import React, {Component, Fragment} from 'react'
import JSONPretty from 'react-json-pretty'
import css from './DataDump.css'

const DataDump = props => (
  <Fragment>
    <h2>Data dump</h2>
    <JSONPretty className='DataDump' json={props.obj} />
  </Fragment>
)

export default DataDump
