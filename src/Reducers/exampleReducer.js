import * as util from './utility'
import produce from "immer"

const initialState = {
  example: 'hello world'
}

export default (
  state = initialState,
  action
) => {
  switch(action.type) {
    case 'EXAMPLE_ACTION':{
      return {
        ...state,
        example: 'hello world 2'
      }
    }
    default: return state
  }
}
