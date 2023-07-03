import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import Transitions from '../components/Transition'
import '../styles/AboutUs.css'
import Vision from '../components/Vision'
import SwiperCard from '../components/SwiperCard'
import { useState } from 'react'

export default function AboutUs() {

    const [board, setBoard] = useState("director")

    const handleOnClick = (newBoard) => {
        setBoard(newBoard);
    };

    return (
        <>
            <Transitions>
                <NavBar />
                <div className='about-us-ctn'>
                    <div className='filter'>
                        <div className='about-text'>
                            <div className='title'>
                                <strong>COMPANY HISTORY</strong>
                            </div>
                            <div className='underline'></div>
                            <div className='history-ctn'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nunc non felis vulputate, lobortis ante id, tristique ex.
                                Nunc augue ligula, posuere at magna et, lobortis finibus tortor.
                                In sed lorem nec odio tristique viverra. Etiam libero ex,
                                pharetra vitae consequat ut, lobortis nec tortor. Duis a finibus
                                ligula, a euismod ex. Sed condimentum eros nec quam dignissim finibus.
                                Proin pharetra lacus aliquam mi placerat aliquam. Aenean
                                at ligula lobortis</p>
                            </div>
                        </div>
                        <div className='divider-vl'></div>
                        <div className='map'>
                            <img src='https://static.vecteezy.com/system/resources/previews/001/198/030/original/world-map-png.png' />
                        </div>
                    </div>

                </div>
                <div className='about-bit-ctn'>
                    <h1 id='subj'><strong>A Little Bit About Us</strong></h1>
                    <p>
                        NCL International Logistics Public Company Limited (“Company” or “NCL”) is a logistics provider.
                        Established by Mr. Kitti Phuathavornskul, NCL International Logistics PCL Group was aimed to
                        engage in international freight forwarding services.  This Group was comprised of
                        NCL International Logistics Public Company Limited (formerly known as “Regional First Jubilee Co., Ltd.),
                        founded in 1994; VP International Logistics (Thailand) Co., Ltd. (VP); and Unitrans Global Co., Limited (UNI).
                    </p>
                    <br></br>
                    <p>
                        To restructure the management within the Group and eliminate potential conflicts of interest,
                        VP ceased its operation in 2009 and in 2011, staff who founded UNI sold UNI shares to
                        Mr. Phuathavornskul, the Company’s major shareholder. Later, Mr. Phuathavornskul sold
                        all UNI shares to external parties; however, UNI still utilized the Company’s buildings
                        for its business operations and relied on the Company in terms of documentation and accounting
                        and financial management. Presently, VP and UNI have ceased their business; they notified
                        the Department of Revenue of their business termination in July 2012, and they are now awaiting
                        liquidation. Accordingly, the only operating company is NCL International Logistics Co., Ltd. (“the Company” or “NCL”).
                    </p>
                    <br></br>
                    <p>
                        Since its inception, the Company has grown steadily and has been able to provide
                        both LCL and FCL services and has acted as a customs broker and goods issuance agent.
                        Growing continuously in the international freight forwarding business, in 2011,
                        the Company invested in domestic freight forwarding services by purchasing tractor heads
                        and trailer trucks to ensure service continuity.  The first route established was
                        the southern route and expanded to the East and Bangkok.
                    </p>
                    <br></br>
                    <p>
                        The company had been converted from “Company Limited” to Public Company Limited”
                        and Registered in the Market of Alternative Investment (Mai) on November 11, 2014.
                        Being well-established for over 20 years, it presently has a registered capital
                        of 113.53 million baht which comprises 454.15 million ordinary sharesand paid up
                        registered capital of 113.53 million baht with a par value of 0.25 baht per share.
                    </p>
                    <br></br>
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
                    <h1>Meet Our NCL Thailand Team</h1>
                    <button onClick={() => handleOnClick("director")}>Board of Directors</button>
                    <button onClick={() => handleOnClick("management")}>Board of Management</button>
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