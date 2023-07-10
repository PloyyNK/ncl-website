import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import '../styles/InvestorRelation.css'
import { TrashIcon } from '@heroicons/react/solid';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Total Revenue',
        },
    },
    scales: {
        x: {
            title: {
                text: "Year",
                display: true
            }
        },
        y: {
            title: {
                text: "Unit: Million Bath",
                display: true
            }
        }
    }, 
    title: {
        display: true, 
        text: 'Annual Income and Profit'
    }
};

const labels = [2017, 2018, 2019, 2020, 2021, 2022]


export const net = {
    labels,
    datasets: [
        {
            labels: 'Revenue',
            data: [988585339,1220322900,1308878765,917155195,1923897271,1938921828],
            backgroundColor: '#29335c',
        }, 
        {
            labels: 'Profit', 
            data: [-8891541,1427764,11672276,-24233931,112728113,-5905039], 
            backgroundColor: '#FFCD01',
        }
    ]
}

export function Chart() {
    return <Bar className='bar-chart' options={{ ...options, responsive: true, maintainAspectRatio: false }} data={net} width={600} height={390} />

}
