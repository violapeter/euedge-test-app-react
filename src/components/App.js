import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import PersonsTable from './PersonsTable'
import EditorForm from './EditorForm'
import Header from './Header'
import DataDump from './DataDump'
import Dialog from './Dialog'
import css from './App.css'

class App extends Component {
  componentDidMount () {
    this.props.actions.loadPersons()
  }

  render () {
    const { persons, isEditorOpened, isDeleterOpened, sortBy, sortOrder } = this.props
    const { openEditor, closeEditor, openDeleter, closeDeleter, sortPersons } = this.props.actions

    return (
      <div className='App'>
        <Header onOpenEditor={() => openEditor()} />
        <PersonsTable
          persons={persons}
          sortPersons={sortType => sortPersons(sortType)}
          sortBy={sortBy}
          sortOrder={sortOrder}
          onPersonDelete={id => openDeleter(id)} />
        <Dialog
          onClose={() => closeEditor()}
          opened={isEditorOpened}
          title='Add person'
          primary='Add'
          secondary='Cancel'>
          <EditorForm />
        </Dialog>
        <Dialog
          onClose={() => closeDeleter()}
          opened={isDeleterOpened}
          title='Are you sure you want to delete it?'
          primary='Yes'
          secondary='Cancel' />
        <DataDump obj={persons} />
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
