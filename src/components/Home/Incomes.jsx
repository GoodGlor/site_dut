import React from 'react';
import styled from 'styled-components';
import TableRow from './TableRow';
import ModalForm from './modalComponent_addMore/Modal';
import {openModalAction} from '../../redux/homeReducer';
import { useDispatch, useSelector } from 'react-redux';


const Table = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 50px;
    border-top: 1px solid #cacaca;
    border-bottom: 1px solid #cacaca;
    padding: 10px 20px;
`;

const Filter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

`;

const InputBlock = styled.div`

`;

const Span = styled.span`
    font-size: 18px;
    font-weight: 500;
    display: inline-block;
    margin: 25px 10px 25px 0;  
    color: #5f5f5f;
`;

const Select = styled.select`
    font-size: 18px;
    border: none;
    outline: none;
    color: #5f5f5f;
`;

const AddMore = styled.button`
    height: 40px;
    padding: 0 20px;
    background: #26b8ff;
    color: white;
    border: none;
    outline: none;
    border-radius: 5px;
`;

export default function Incomes() {
    const dispach = useDispatch();
	const incomesDB = useSelector(state => state.homeReducer.incomesDB);

    return(
        <>
            <Filter>
                <InputBlock>
                    <Span>My Incomes</Span>
                    <Select >
                        <option>this week</option>
                        <option>this month</option>
                    </Select>
                </InputBlock>
                <AddMore onClick={() => {dispach(openModalAction())}}>Add more</AddMore>
            </Filter>
            <Table>
                <span>Category</span>
                <span>Description</span>
                <span>Date</span>
                <span>Money</span>
                <span>Action</span>
            </Table>
            {incomesDB.map((item, index, arr) => {
                return <TableRow key={index} removeId={index} data={item} arr={arr} target={'incomes'}/>
        })}
        <ModalForm target='incomes'/>
    </>
    )
}