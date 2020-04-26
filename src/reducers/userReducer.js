import { REGISTER, LOADING } from '../action-types'

const initialState = { userInfo: {}, isLoading: false, isLoggedin: false }

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        userInfo: action.payload,
        isLoggedin: true,
      }

    case LOADING:
      return {
        ...state,
        isLoading: action.payload,
      }

    default:
      return state
  }
}

export default userReducer
