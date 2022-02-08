import React from 'react';
//npm install --save react-chartjs-2 chart.js
import { Bar } from 'react-chartjs-2';
import Flex from '../StyledComponents/Flex'

function randomColor() {
    const h = Math.random() * 360;
    const s = Math.random() * (100 - 60) + 60;
    const l = Math.random() * (80 - 40) + 40;
    
    return `hsl(${h}, ${s}%, ${l}%)`;
}

const IncomeChart = () => {

const labels = ['category1', 'category2', 'category3', 'category4', 'category5', 'category6', 'category7'];

function backgroundColor() {
    let backgroundColors = [];
    for(let i = 0; i < labels.length; i++) {
        backgroundColors = [...backgroundColors, randomColor()];
    }
    return backgroundColors;
}

const data = {
    labels: labels,
    datasets: [{
      label: 'Income by category',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: backgroundColor(),
      
    }]
  };


    return (
      <Flex>
        <Bar
          data={data}
          
          options={{
            plugins: {
                legend: {
                    display: true,
                    position:'bottom',
                    labels: labels,
                    
                },
                title:{
                    display:true,
                    text:'Income by category',
                    fontSize:20
                },
                
            },
            responsive: true           
           
          }}
        />
      </Flex>
    );
}

export default IncomeChart;