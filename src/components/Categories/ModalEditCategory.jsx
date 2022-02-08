import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import {
	Modal,
	ModalClose,
	ModalContent,
	ModalDialog,
	ModalInput,
} from '../Home/modalComponent_addMore/Modal'
import Flex from '../StyledComponents/Flex'
import Button from '../StyledComponents/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { editCategoryAction } from '../../redux/categoryReducer'
import TextContent from '../StyledComponents/TextContent'

export default function ModalEditCategory({
	active,
	setActive,
	icons,
	category,
}) {
	const dispatch = useDispatch()

	const [categoryName, setCategoryName] = useState(category.name)
	const [categoryDescription, setCategoryDescription] = useState(
		category.description
	)
	const [selectedIcon, setSelectedIcon] = useState(category.icon)
	const [errorMessage, setErrorMessage] = useState('')
	const faTrashAlt = icons.faTrashAlt
	const faPen = icons.faPen
	const categoryIcons = []

	function onChangeHandler(e) {
		if (e.target.name === 'name') {
			setCategoryName(e.target.value)
		} else if (e.target.name === 'description') {
			setCategoryDescription(e.target.value)
		}
	}

	function handleSubmit(e) {
		e.preventDefault()
		if (categoryName && selectedIcon) {
			dispatch(
				editCategoryAction({
					id: category.id,
					name: categoryName,
					icon: selectedIcon,
					description: categoryDescription,
				})
			)
			setActive(false)
		} else if (!categoryName && !selectedIcon) {
			setErrorMessage('Please, choose some icon 👽 and enter some name 🧐')
		} else if (!categoryName) {
			setErrorMessage('Please, enter name 🧐')
		} else if (!selectedIcon) {
			setErrorMessage('Please, choose some icon 👽')
		}
	}

	for (const [iconName, iconValue] of Object.entries(icons)) {
		if (iconValue !== faTrashAlt && iconValue !== faPen) {
			categoryIcons.push(
				<Flex width="20%" margin="8px" justify="center" key={iconName}>
					<Button
						onClick={e => {
							e.preventDefault()
							setSelectedIcon(iconName)
						}}
					>
						<FontAwesomeIcon name={iconName} icon={iconValue} />
					</Button>
				</Flex>
			)
		}
	}

	return (
		<Modal display={active ? 'block' : 'none'}>
			<ModalDialog>
				<Flex margin="auto 20px">
					<ModalContent>
						<ModalClose onClick={() => setActive(false)}>&times;</ModalClose>
						<form>
							<TextContent>{errorMessage}</TextContent>
							<ModalInput
								onChange={e => onChangeHandler(e)}
								placeholder="Name"
								name="name"
								value={categoryName}
							/>
							<ModalInput
								onChange={e => onChangeHandler(e)}
								placeholder="Description"
								name="description"
								value={categoryDescription}
							/>
							<Flex
								justify={'space-around'}
								width="60%"
								margin="20px auto"
								wrap="wrap"
							>
								{categoryIcons}
							</Flex>
							<Flex>
								<Button
									onClick={e => handleSubmit(e)}
									width="80%"
									margin="0 auto"
								>
									Save changes
								</Button>
							</Flex>
						</form>
					</ModalContent>
				</Flex>
			</ModalDialog>
		</Modal>
	)
}
