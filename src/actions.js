/* global fetch, __PERSONS_API__ */

import * as actionTypes from './actionTypes'

export const openEditor = () => ({ type: actionTypes.OPEN_EDITOR })
export const closeEditor = () => ({ type: actionTypes.CLOSE_EDITOR })
export const openDeleter = id => ({ type: actionTypes.OPEN_DELETER, id })
export const closeDeleter = () => ({ type: actionTypes.CLOSE_DELETER })

export const sortPersons = sortType => ({ type: actionTypes.SORT_PERSONS, sortType })

export const dumpFormData = data => ({ type: actionTypes.DUMP_FORM_DATA, data })

const requestPersons = () => ({ type: actionTypes.REQUEST_PERSONS })
const errorPersons = error => ({ type: actionTypes.ERROR_PERSONS, error })
const receivePersons = persons => ({ type: actionTypes.RECEIVE_PERSONS, persons })

export const loadPersons = () => dispatch => {
  dispatch(requestPersons())
  return fetch(__PERSONS_API__)
    .then(response => response.json())
    .then(response => dispatch(receivePersons(response)))
    .catch(err => dispatch(errorPersons(err)))
}
