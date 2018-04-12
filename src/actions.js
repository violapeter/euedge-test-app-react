/* global fetch, __PERSONS_API__ */

import * as actionTypes from './actionTypes'

export const openEditor = () => ({ type: actionTypes.OPEN_EDITOR })
export const closeEditor = () => ({ type: actionTypes.CLOSE_EDITOR })

const requestPersons = () => ({ type: actionTypes.REQUEST_PERSONS })
const errorPersons = error => ({ type: actionTypes.ERROR_PERSONS, error })
const receivePersons = persons => ({ type: actionTypes.RECEIVE_PERSONS, persons })

export const loadPersons = () => dispatch => {
  dispatch(requestPersons())
  return fetch(__PERSONS_API__)
    .then(
      response => {
        if (!response.ok) dispatch(errorPersons(response))
        return response.json()
      }
    )
    .then(response => dispatch(receivePersons(response)))
}
