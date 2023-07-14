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

                <div className='chair-letter'>
                    <h5>Message From the Chairman</h5>
                    <p>
                        In 2022, the COVID-19 pandemic started to improve, resulting in the domestic economy beginning to recover. Meanwhile, the global economy has slowed down due to the conflict between Russia and Ukraine, causing an economic downturn for Russia by the Western Hemisphere. Additionally, China continues to implement its Zero COVID policy, and all of these factors have led to a slowdown in production and transportation. Thailand has also been affected by this slowdown, so it is considered another challenge for the Company to plan business operations and evaluate the situation closely, in order to prepare to promptly adapt to the fluctuating circumstances in order to achieve the business objectives as planned. The Company’s Board of Directors, executives, and staff in all departments have fulfilled their duties to the best of their abilities.
                    </p>
                    <p>
                        In 2022, the Company had a total revenue of 1,938.9 million baht, a slight increase compared to the previous year. This was due to the slowdown of the economy caused by the aforementioned factors. Additionally, the freight charges decreased due to the easing of the container shortage problem, and the demand for product transportation decreased. Nevertheless, revenue from the sales of dialysis solutions continued to increase by 14.2 million baht compared to 2021, as a result of the price adjustment of the dialysis solutions in terms of cost and expenses, which increased by 8 percent compared to the previous year. The main reason for this was the increase in expenses related to professional consulting services for the purpose of business expansion.
                    </p>
                    <p>
                        Furthermore, the Company continues to adhere to the policy of expanding its business in line with the Company’s vision and mission to be a leader in providing full-service logistics and has expanded its business in the Non-Logistics sector to reduce the risk of relying solely on logistics business. Additionally, there has been a restructuring of internal management to accommodate the Company’s business expansion.
                    </p>
                    <p>
                        Furthermore, the Company places great importance on conducting business in conjunction with organizational development towards sustainable growth, with a focus on operating in the areas of economics, society, and the environment, under the practice of international standards and good corporate governance principles. Through conducting business with honesty, fairness, transparency, and accountability, the Company supports efforts to combat corruption and operates with respect for human rights. The Company also promotes awareness and encourages all board members, executives, and employees within the organization to work while considering the impact on the environment, society, and all stakeholders.
                    </p>
                    <p>
                        Finally, on behalf of the Board of Directors, executives, employees, and subsidiaries, we would like to express our gratitude to all shareholders and stakeholders for your continuous support and encouragement toward the Company’s operations and business development. The Company will continue to operate under good corporate governance and efficiently and effectively manage customer service to develop and grow sustainably with stability and resilience.
                    </p>
                    <hr></hr>
                </div>

                <Footer />
            </Transitions>
        </>
    )
}