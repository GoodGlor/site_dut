import React from 'react';
//npm install --save react-chartjs-2 chart.js
import { Pie } from 'react-chartjs-2';
import Flex from '../StyledComponents/Flex'

const ChargesChart = (props) => {

    function randomColor() {
        const h = Math.random() * 360;
        const s = Math.random() * (100 - 60) + 60;
        const l = Math.random() * (80 - 40) + 40;
        
        return `hsl(${h}, ${s}%, ${l}%)`;
    }

    const labels = Object.values(props);
    const uniqueLabels = labels.filter((item, index) => labels.indexOf(item) === index);

    function backgroundColor() {
        let backgroundColors = [];
        for(let i = 0; i < uniqueLabels.length; i++) {
            backgroundColors = [...backgroundColors, randomColor()];
        }
        return backgroundColors;
    }

    const data = {
        labels: uniqueLabels,
        datasets: [{
        label: 'Charges by category',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: backgroundColor(),
        }]
    };


    return (
        <Flex>
        <Pie
          data={data}
          height={200}
          options={{
              plugins: {
                title:{
                    display:true,
                    text:'Charges by category',
                    fontSize:20
                },
                legend:{
                    display:true,
                    position:'bottom'
                },
              },
              maintainAspectRatio: false,
          }}
        />
        </Flex>
    )
}

export default ChargesChart;