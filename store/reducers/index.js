import {combineReducers} from 'redux'
import { postReducer } from './postReduer'

export default combineReducers({
    post:postReducer
})