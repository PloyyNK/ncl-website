import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    scales,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import '../styles/InvestorRelation.css'

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
            display: false,
            text: 'The Consolidated Financial Statement',
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
    }
};

const labels = ['2020', '2021', '2022'];

export const income = {
    labels,
    datasets: [
        {
            label: 'Sales and service income',
            data: [883.95, 1892.80, 1903.59],
            backgroundColor: '#29335c',
        }
    ],
};

export const net = {
    labels,
    datasets: [
        {
            labels: 'Net Profit',
            data: [24.23, 112.73, 5.91],
            backgroundColor: '#29335c',
        }
    ]
}

export function Chart({ dataType }) {
    if (dataType === 'income') {
        return <Bar className='bar-chart' options={{ ...options, responsive: true, maintainAspectRatio: false }} data={income} width={600} height={390} />
    } else {
        return <Bar className='bar-chart' options={{ ...options, responsive: true, maintainAspectRatio: false }} data={net} width={600} height={390} />
    }
}
