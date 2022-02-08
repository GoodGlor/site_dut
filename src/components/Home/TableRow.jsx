import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icons from '../Icons';
import { useDispatch } from 'react-redux';
import {REMOVE_ITEM} from '../../redux/actionTypes';

const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 50px;
    padding: 10px 20px;
`;

export default function TableRow({data, removeId, arr, target}) {
    const dispach = useDispatch();
    return(
    <Row>
        <span><FontAwesomeIcon icon={Icons[data.category]} /> {data.category}</span>
        <span>{data.description}</span>
        <span>{data.date}</span>
        <span>$ { (parseFloat(data.money)).toFixed(2) }</span>
        <span style={{cursor: 'pointer'}}><FontAwesomeIcon onClick={() => {
            const filteredArr = arr.filter((item, index) => index !== removeId)
            dispach({
                type: REMOVE_ITEM,
                filteredArr,
                target: target,
            });
        }} icon={Icons.faTrashAlt} /> <FontAwesomeIcon icon={Icons.faPen} /></span>
    </Row>
    )
}

