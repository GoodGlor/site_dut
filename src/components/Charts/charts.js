import React from 'react';
import MainChart from './main-chart';
import IncomeChart from './income-chart';
import ChargesChart from './charges-chart';
import Flex from '../StyledComponents/Flex'
import styled from 'styled-components';
import TableItems from '../dataBase';

const ColumFlex = styled(Flex)`
  flex-direction:column
`;

const rawData = localStorage.DataBase ? JSON.parse(localStorage.getItem('DataBase')) : TableItems;
//there is no definition which localStorage entry is "income" and which is "charge". For now assume all are charges
let chargesData = [];
let chargesCategories = [];
let chargesDates = [];

for (let i = 0; i < rawData.length; i++) {

    chargesData = [...chargesData, rawData[i].money];
    chargesCategories = [...chargesCategories, rawData[i].category];
    chargesDates = [...chargesDates, rawData[i].date];
  
}



const Chart = () => {
    return (
      <div>
        <ColumFlex>
          <MainChart chargesData = {chargesData} chargesDates ={chargesDates} />
          <Flex>
            <IncomeChart />
            <ChargesChart {...chargesCategories} />
          </Flex>
        </ColumFlex>
      </div>
    );
}

export default Chart;

