import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeCategoryAction } from '../../redux/categoryReducer'
import Icons from '../Icons'
import TableRow from '../StyledComponents/TableRow'
import TableRowItem from '../StyledComponents/TableRowItem'
import TextContent from '../StyledComponents/TextContent'
import ModalEditCategory from './ModalEditCategory'

export default function Category(props) {
	const dispatch = useDispatch()
	const [editCategoryModalActive, setEditCategoryModalActive] = useState(false)

	function removeCategoryActionHandler(id) {
		dispatch(removeCategoryAction(id))
	}

	let removeButton = null
	let editButton = null

	if (!props.standard) {
		removeButton = (
			<FontAwesomeIcon
				onClick={() => removeCategoryActionHandler(props.id)}
				icon={faTrashAlt}
				style={{ cursor: 'pointer' }}
			/>
		)
		editButton = (
			<FontAwesomeIcon
				onClick={() => setEditCategoryModalActive(true)}
				icon={faPen}
				style={{ cursor: 'pointer' }}
			/>
		)
	}



	const category = {...props}

	return (
		<TableRow>
			<TableRowItem>
				<FontAwesomeIcon icon={props.icon} />
				<TextContent margin="10px">{props.name}</TextContent>
			</TableRowItem>
			<TableRowItem>{props.description}</TableRowItem>
			<TableRowItem>{props.date}</TableRowItem>
			<TableRowItem>
				<TableRowItem>{editButton}</TableRowItem>
				<TableRowItem margin="10px">{removeButton}</TableRowItem>
			</TableRowItem>
			<ModalEditCategory
				active={editCategoryModalActive}
				setActive={setEditCategoryModalActive}
				icons={Icons}
				category={category}
			/>
		</TableRow>
	)
}
