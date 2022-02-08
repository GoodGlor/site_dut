import { categoryReducer } from './categoryReducer'
import { combineReducers } from 'redux'
import { homeReducer } from './homeReducer'

export const rootReducer = combineReducers({
	category: categoryReducer,
	homeReducer: homeReducer,
})
