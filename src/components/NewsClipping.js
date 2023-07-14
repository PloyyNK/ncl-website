import * as React from 'react';
import clippingNews from '../data/clipping-news-data'
import '../styles/StockNews.css'
import { useState } from 'react'

export default function NewsClipping() {

    const [selectedYear, setSelectedYear] = useState("")

    const years = [
        { label: '2014', value: 2014 },
        { label: '2015', value: 2015 },
        { label: '2016', value: 2016 },
        { label: '2017', value: 2017 },
        { label: '2018', value: 2018 },
        { label: '2019', value: 2019 },
        { label: '2020', value: 2020 },
        { label: '2021', value: 2021 }
    ]

    return (
        <>
            <div className='year-selector'>
                <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                    {years.map((year) => {
                        return (
                            <>
                                <option key={year.value}>{year.label}</option>
                            </>
                        )
                    })}
                </select>
            </div>
            <div className='stock-news-table-ctn'>
                <div className='stock-news-table'>
                    {clippingNews.map((stock) => (
                        <>
                            <p>{stock.date}
                                <a href={stock.link} className='hover:text-rose-900 ml-8'>{stock.title}</a></p>
                        </>
                    ))}
                </div>
            </div>
        </>


    )
}