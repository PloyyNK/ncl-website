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
import ChartDataLabels from "chartjs-plugin-datalabels";
import '../styles/InvestorRelation.css'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

ChartJS.defaults.plugins.legend.display = true;
ChartJS.defaults.plugins.title.display = true;

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        title: {
            text: 'Total Revenue and Profit',
        },
        tooltip: {
            enabled: true,
        },
        datalabels: {
            anchor: 'end',
            align: 'top',
            offset: 4,
            color: '#29335c',
            font: {
                weight: 'bold',
            },
            formatter: (value) => {
                const formattedValue = (value / 1000000000).toFixed(2);
                return `${formattedValue}`;
            },
        },
    },
    scales: {
        x: {
            title: {
                text: 'Year',
                display: true,
            },
        },
        y: {
            display: false,
        },
    },
    title: {
        display: true,
        text: 'Annual Income and Profit',
    },
};

const data = {
    labels: [2017, 2018, 2019, 2020, 2021, 2022],
    datasets: [
        {
            label: 'Revenue',
            data: [988585339, 1220322900, 1308878765, 917155195, 1923897271, 1938921828],
            backgroundColor: '#29335c',
        },
        {
            label: 'Profit',
            data: [-8891541, 1427764, 11672276, -24233931, 112728113, -5905039],
            backgroundColor: '#FFCD01',
        },
    ],
};

const plugins = [ChartDataLabels];

export function Chart() {
    return <Bar
        className='bar-chart'
        options={{ ...options, responsive: true, maintainAspectRatio: false }}
        plugins={plugins}
        data={data}
        width={600}
        height={390} />

}
