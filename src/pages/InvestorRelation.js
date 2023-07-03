import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import Transitions from '../components/Transition'
import irNews from '../data/irNews-data'
import '../styles/InvestorRelation.css'
import { Chart } from '../components/VerticalChart'
import { useState } from 'react'
import Calendar from '../components/Calendar'
import InfoIR from '../components/InfoIR'

export default function InvestorRelation() {

    const [dataType, setDataType] = useState("income")

    return (
        <Transitions>
            <NavBar />
            <div className='banner ir'>
                <img src='https://cdn.wallpapersafari.com/18/20/5XL4Ud.jpg' />
            </div>
            <div className='ir-ctn'>
                    <div className='chart-btn'>
                        <div className='btn'>
                            <button onClick={() => {
                                setDataType('income')
                            }}>Sales and service income</button>
                            <button onClick={() => {
                                setDataType('net')
                            }}>Net Profit</button>
                        </div>
                        <div className='chart'><Chart dataType={dataType} /></div>
                    </div>
                    <div className='news-alert-ctn'>
                        <h2 className='font-bold'>Investor Relations News</h2>
                        <div className='news-alert'>
                            {irNews.map((news) => {
                                return (
                                    <div className='news-link'>
                                        <p>{news.date}</p>
                                        <a href={news.link}>{news.title}</a>
                                    </div>
                                )
                            })}
                            <a href='/news-events-ncl' className='hover:text-red-700'>Read more...</a>
                        </div>
                    </div>
            </div>
            <div className='calendar-ctn'>
                <Calendar />
            </div>
            <div className='more-info'>
                <h4 className='font-bold'>More Information</h4>
                <InfoIR />
            </div>
            <Footer />
        </Transitions>
    )
}