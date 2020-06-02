import {
  REGISTER,
  LOADING,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOGIN
} from '../action-types'

const initialState = {
  userInfo: {},
  isLoading: false,
  isLoggedin: false,
  errors: {}
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        userInfo: action.payload,
        isLoggedin: true
      }

    case LOGIN:
      return {
        ...state,
        userInfo: action.payload,
        isLoggedin: true
      }

    case LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    case SET_ERRORS:
      return {
        ...state,
        errors: { ...action.payload }
      }

    case CLEAR_ERRORS:
      return {
        ...state,
        errors: {}
      }

    default:
      return state
  }
}

export default userReducer
