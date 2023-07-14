import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import Transitions from '../components/Transition'
import '../styles/AboutUs.css'
import Vision from '../components/Vision'
import SwiperCard from '../components/SwiperCard'
import React, { useState } from 'react'
import History from '../components/AboutDetails/History'
import TimelineCom from '../components/AboutDetails/Timeline'
import Structure from '../components/AboutDetails/Structure'
import ChairmanLetter from '../components/ChairmanLetter'

export default function AboutUs() {

    const [board, setBoard] = useState("director")
    const [about, setAbout] = useState("history")

    const aboutComponent = ['history', 'structure', 'timeline']

    const handleOnClickBoard = (newBoard) => {
        setBoard(newBoard);
    };

    // function for render component when click button
    const renderComponent = (name) => {
        switch (name) {
            case 'history':
                return React.createElement(History, null)
            case 'timeline':
                return React.createElement(TimelineCom, null)
            case 'structure':
                return React.createElement(Structure, null)
            default:
                return React.createFactory(null)
        }
    }

    return (
        <>
            <Transitions>
                <NavBar />
                <div className='about-us-ctn'>
                    <img src='https://ulinkit.com/wp-content/uploads/2022/09/logi.jpg' />
                </div>

                <div className='nav-about'>
                    <button onClick={() => setAbout("structure")}>Structure</button>
                    <button onClick={() => setAbout("history")}>History</button>
                    <button onClick={() => setAbout("timeline")}>Timeline</button>
                </div>

                {/* rendered component */}
                <div>
                    {
                        aboutComponent.filter((data) =>
                            data === about
                        )
                            .map((filterredData) => {
                                const render = renderComponent(filterredData)
                                return render ? React.createElement('div', { key: filterredData }, render) : null
                            })
                    }
                </div>

                <div className='why-ctn'>
                    <div className='w-filter'>
                        <div className='w-title'>
                            <h1>Why Choose Us</h1>
                        </div>
                        <div className='underline-hl'></div>
                        <div className='w-description'>
                            <p>30 YEARS OF EXPERIENCE IN VARIOUS CASES</p>
                        </div>
                    </div>
                </div>

                <Vision />

                <div className='board-team'>
                    <h1 className='font-bold'>Meet Our NCL Thailand Team</h1>
                    <button onClick={() => handleOnClickBoard("director")}>Board of Directors</button>
                    <button onClick={() => handleOnClickBoard("management")}>Board of Management</button>
                    <SwiperCard board={board} />
                </div>

                <ChairmanLetter />

                <Footer />
            </Transitions>
        </>
    )
}