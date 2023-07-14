import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const optionsRev = {
    plugins: {
        legend: {
            display: true
        },
        title: {
            display: true,
            text: 'Revenue of Each Service',
        },
    },
}

export const optionsAll = {
    plugins: {
        legend: {
            display: true
        },
        title: {
            display: true,
            text: 'Service and Sales Income',
        },
    },
}

const dataRev = {
    labels: ['sea freight', 'air freight', 'land freight', 'other service'],
    datasets: [
        {
            label: 'Each service:',
            data: [86.21, 0.94, 5.64, 7.22],
            backgroundColor: [
                '#606EA6',
                '#2944B2',
                '#102A90',
                '#A09F9F',
            ],
            borderWidth: 1,
        },
    ],
};

const dataAll = {
    labels: ['sales income', 'service income'],
    datasets: [
        {
            label: 'Each service:',
            data: [1799138339, 104454437],
            backgroundColor: [
                '#686666',
                '#29335c',
            ],
            borderWidth: 1,
        },
    ],
};

export default function PieChart({ data }) {

    if (data === 'dataAll') {
        return (
            <>
                <Doughnut className='bar-chart' options={{...optionsAll, responsive: true, maintainAspectRatio: false }} data={dataAll} width={600} height={390} />
            </>
        )
    }
    else {
        return(
            <>
                <Doughnut className='bar-chart' options={{...optionsRev, responsive: true, maintainAspectRatio: false }} data={dataRev} width={600} height={390} />
            </>
        )
    }
}

