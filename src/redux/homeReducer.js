import { OPEN_MODAL, CLOSE_MODAL, REMOVE_ITEM, ADD_ITEM } from './actionTypes'

const initialState = {
	display: 'none',
	chargesDB: [
		{
			category: 'Food',
			description: "All my food",
			date: '22 Aug',
			money: 25,
		},
		{
			category: 'Travel',
			description: "buy a tent",
			date: '15 May',
			money: 180,
		},
		{
			category: 'Health',
			description: "Medicine",
			date: '27 Mar',
			money: 13,
		},
	],
	incomesDB: [
		{
			category: 'Salary',
			description: "",
			date: '22 Aug',
			money: 2300,
		},
		{
			category: 'Gift',
			description: "",
			date: '15 May',
			money: 200,
		},
		{
			category: 'Bonus',
			description: "",
			date: '27 Mar',
			money: 350,
		},
	],
}

export const homeReducer = (state = initialState, action) => {
	switch (action.type) {
		case OPEN_MODAL:
			return {
				...state,
				display: 'block',
			}
		case CLOSE_MODAL:
			return {
				...state,
				display: 'none'
			}

		case REMOVE_ITEM:
			if(action.target === 'charges') {
				console.log(action.filteredArr)
				return {
					...state,
					chargesDB: action.filteredArr
				}
				
			} else {
				return {
					...state,
					incomesDB: action.filteredArr
				}
			}
			case ADD_ITEM:
			if(action.target === 'charges') {
				return {
					...state,
					chargesDB: [...state.chargesDB, action.payload],
				}
				
			} else {
				return {
					...state,
					incomesDB: [...state.incomesDB, action.payload],
				}
			}
		default:
			return state
	}
}

export const openModalAction = () => ({
	type: OPEN_MODAL,
})

export const closeModalAction = () => ({
	type: CLOSE_MODAL,
})
