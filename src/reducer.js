import * as actionTypes from './actionTypes'

const initialState = {
  isEditorOpened: false,
  persons: []
}

const personsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_PERSONS:
      return state
    case actionTypes.RECEIVE_PERSONS:
      return { ...state, persons: action.persons }
    case actionTypes.ERROR_PERSONS:
      return state
    case actionTypes.OPEN_EDITOR:
      return { ...state, isEditorOpened: true }
    case actionTypes.CLOSE_EDITOR:
      return { ...state, isEditorOpened: false }
    default:
      return state
  }
}

export default personsReducer
