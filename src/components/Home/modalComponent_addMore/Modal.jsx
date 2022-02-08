import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { closeModalAction} from '../../../redux/homeReducer';
import { ADD_ITEM } from '../../../redux/actionTypes';

export const Modal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1050;
	display: ${props => props.display};
	width: 100%;
	height: 100%;
	overflow: hidden;
	background-color: rgba(0, 0, 0, 0.5);
`

export const ModalDialog = styled.div`
	max-width: 500px;
	margin: 40px auto;
`

export const ModalContent = styled.div`
	position: relative;
	width: 100%;
	padding: 40px;
	background-color: #fff;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 4px;
	max-height: 80vh;
	overflow-y: auto;
`

export const ModalClose = styled.div`
	position: absolute;
	top: 8px;
	right: 14px;
	font-size: 30px;
	color: #000;
	opacity: 0.5;
	font-weight: 700;
	border: none;
	background-color: transparent;
	cursor: pointer;
`

export const ModalTitle = styled.div`
	text-align: center;
	font-size: 22px;
	text-transform: uppercase;
`

export const ModalInput = styled.input`
	display: block;
	margin: 20px auto 20px auto;
	width: 280px;
	height: 50px;
	background: #fff;
	box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
	border: none;
	font-size: 18px;
	text-align: center;
	outline: 0;
`

export const ModalSelect = styled.select`
	display: block;
	margin: 20px auto 20px auto;
	width: 280px;
	height: 50px;
	background: #fff;
	box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
	border: none;
	font-size: 18px;
	text-align: center;
	outline: 0;
`

export const ModalBtn = styled.button`
	display: block;
	width: 280px;
	margin: 0 auto;
	padding: 5px 20px;
	height: 40px;
	background: #26b8ff;
	color: white;
	border: none;
	outline: none;
	border-radius: 5px;
`

export default function ModalForm(props) {
	const [category, setCategory] = useState('Food');
	const [description, setDesc] = useState('');
	const [date] = useState(new Date().toString().slice(4, 10));
	const [money, setMoney] = useState('');
	const display = useSelector(state => state.homeReducer.display);
	const dispach = useDispatch();
	const categories = useSelector(state => state.category.categories);


	const submitBtn = e => {
		e.preventDefault()
		dispach(closeModalAction());

		dispach({
			type: ADD_ITEM,
			payload: { category, description, date, money },
			target: props.target,
		})
	}

	return (
		<Modal display={display}>
			<ModalDialog>
				<ModalContent>
					<form action="#">
						<ModalClose onClick={() => {dispach(closeModalAction())}}>&times;</ModalClose>
						<ModalTitle>Add {props.target}</ModalTitle>
						<ModalSelect
							onChange={e => {
								setCategory(e.target.value)
							}}
							value={category}
							required
							name="category"
						>
							{categories.map(category => {
								return(
									<option key={category.id}>{category.name}</option>
								)
							})}
							

						</ModalSelect>
						<ModalInput
							onChange={e => {
								setDesc(e.target.value)
							}}
							value={description}
							required
							placeholder="Description"
							name="description"
							type="text"
						/>
						<ModalInput readOnly value={date} name="date" type="text" />
						<ModalInput
							onChange={e => {
								setMoney(e.target.value)
							}}
							value={money}
							required
							placeholder="Money"
							name="money"
							type="number"
						/>
						<ModalBtn onClick={submitBtn}>Add</ModalBtn>
					</form>
				</ModalContent>
			</ModalDialog>
		</Modal>
	)
}
