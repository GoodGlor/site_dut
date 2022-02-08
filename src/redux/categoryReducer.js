import Icons from '../components/Icons'
import { ADD_CATEGORY, EDIT_CATEGORY, REMOVE_CATEGORY } from './actionTypes'
import moment from 'moment'
import { initialState } from './state'

export const categoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CATEGORY:
			return {
				...state,
				categories: [...state.categories, action.payload],
			}
		case REMOVE_CATEGORY:
			return {
				...state,
				categories: [
					...state.categories.filter(
						category => category.id !== action.payload
					),
				],
			}
		case EDIT_CATEGORY:
			return {
				...state,
				categories: [
					...state.categories.map(category => {
						if (category.id === action.payload.id) {
							return action.payload
						}
						return category
					}),
				],
			}
		default:
			return state
	}
}

export const addCategoryAction = payload => ({
	type: ADD_CATEGORY,
	payload: {
		id: Math.trunc(Math.random() * Date.now()),
		name: payload.name,
		icon: Icons[payload.icon],
		description: payload.description,
		date: moment().format('DD MMM'),
		standard: false,
	},
})

export const removeCategoryAction = payload => ({
	type: REMOVE_CATEGORY,
	payload,
})

export const editCategoryAction = payload => ({
	type: EDIT_CATEGORY,
	payload: {
		id: payload.id,
		name: payload.name,
		icon: Icons[payload.icon],
		description: payload.description,
		date: moment().format('DD MMM'),
		standard: false,
	},
})
