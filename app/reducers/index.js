import { combineReducers } from 'redux'
import { DATA_LOADED } from "../actions/"

const reducer = (state = { data: [], loading:true }, action) => {
    switch (action.type) {
        case DATA_LOADED:
            state = { ...state, data: action.payload, loading:false }
            return state
        default:
            return state
    }
}

export const reducers = combineReducers({reducer})
