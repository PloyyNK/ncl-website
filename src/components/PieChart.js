import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const dataRev = {
    labels: ['sea freight', 'air freight', 'land freight', 'other service'],
    datasets: [
        {
            label: 'Each service:',
            data: [86.21, 0.94, 5.64, 7.22],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
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
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
            ],
            borderWidth: 1,
        },
    ],
};

export default function PieChart({ data }) {

    if (data === 'dataAll') {
        return (
            <>
                <Doughnut className='bar-chart' options={{ responsive: true, maintainAspectRatio: false }} data={dataAll} width={600} height={390} />
            </>
        )
    }
    else {
        return(
            <>
                <Doughnut className='bar-chart' options={{ responsive: true, maintainAspectRatio: false }} data={dataRev} width={600} height={390} />
            </>
        )
    }
}

