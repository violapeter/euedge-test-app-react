import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import SortableTable from './SortableTable'
import Header from './Header'
import Dialog from './Dialog'
import css from './App.css'

class App extends Component {
  componentDidMount () {
    this.props.actions.loadPersons()
  }

  render () {
    const { persons, isEditorOpened } = this.props
    const { openEditor, closeEditor } = this.props.actions

    return (
      <div className='App'>
        <Header onOpenEditor={() => openEditor()} />
        <SortableTable persons={persons} />
        <Dialog
          onClose={() => closeEditor()}
          opened={isEditorOpened}
          title='Add person'
          primary='Add'
          secondary='Cancel' />
      </div>
    )
  }
}

export default connect(
  (state) => ({ ...state }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(App)
