import * as actionTypes from './actionTypes'
import * as sortTypes from './sortTypes'

const initialState = {
  isEditorOpened: false,
  isDeleterOpened: 0,
  selectToDelete: false,
  sortBy: sortTypes.NAME,
  sortOrder: sortTypes.ASC,
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
    case actionTypes.OPEN_DELETER:
      return {
        ...state,
        isDeleterOpened: true,
        selectToDelete: action.id
      }
    case actionTypes.CLOSE_DELETER:
      return { ...state, isDeleterOpened: false }
    case actionTypes.SORT_PERSONS:
      console.log(action.sortType)
      return {
        ...state,
        sortBy: action.sortType,
        sortOrder: action.sortType === state.sortBy &&
          state.sortOrder === sortTypes.ASC
          ? sortTypes.DESC
          : sortTypes.ASC
      }
    default:
      return state
  }
}

export default personsReducer
