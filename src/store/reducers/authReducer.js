import * as Types from '../actions/types'

const init = {
    isAuthenticated: false,
    userId: null
}

const authReducer = (state = init, action) => {
    switch (action.type) {
        case Types.SET_USER: {
            return {
                isAuthenticated: true,
                userId: action.payload.uid
            }
        }
        case Types.LOGOUT_USER: {
            return {
                isAuthenticated: false,
                userId: null
            }
        }
        default: return state
    }
}

export default authReducer