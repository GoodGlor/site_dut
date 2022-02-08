import React from 'react';
//npm install --save react-chartjs-2 chart.js
import {Line} from 'react-chartjs-2';
import Flex from '../StyledComponents/Flex'
import styled from 'styled-components';

const ChartFlex = styled(Flex)`
  margin-bottom: 15px;
  background-color: rgb(209,241,247);
  height: 45vh;
`;


const MainChart = ({chargesDates, chargesData}) => {
//ordering dates   
//const dates = chargesDates.map(x => Date.parse(x)).sort((a,b) => a-b);


const state = {
  labels:  chargesDates,
  datasets: [
    {
      label: 'Income',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(253,178,1,1)',
      borderColor: 'rgba(253,178,1,1)',
      borderWidth: 2,
      data: [1, 150, 52, 15, 10]
    },
    {
        label: 'Expenses',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(132,125,115,1)',
        borderColor: 'rgba(132,125,115,1)',
        borderWidth: 2,
        data: chargesData.map(x=>+x)
      }
  ]
}


    return (
      <ChartFlex>
        <Line
          data={state}
          
          options={{
            title:{
              display:true,
              text:'Money flow',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            },
            maintainAspectRatio: false,
          }}
        />
      </ChartFlex>
    );
}

export default MainChart;