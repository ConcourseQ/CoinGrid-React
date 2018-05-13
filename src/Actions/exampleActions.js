// Modules
import { bindActionCreators } from 'redux'
import store from '../store';

// History
import appHistory from 'appHistory'

export function CreateProjectUser(notificationSystem) {
  return (dispatch) => {
    dispatch({
      type: 'EXAMPLE_ACTION',
      payload: {hello:'world'}
    })
  }
}
