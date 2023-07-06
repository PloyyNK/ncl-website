import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import Transitions from '../components/Transition'
import irNews from '../data/irNews-data'
import '../styles/InvestorRelation.css'
import { Chart } from '../components/VerticalChart'
import { useState } from 'react'
import InfoIR from '../components/InfoIR'
import { useNavigate } from 'react-router'

export default function InvestorRelation() {

    const navigate = useNavigate()

    const navigateShareholder = () => {
        navigate('/investor-relation-ncl/shareholder-information')
    }

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <Transitions>
            <NavBar />
            {/* <div className='banner ir'>
                <img src='https://cdn.wallpapersafari.com/18/20/5XL4Ud.jpg' />
            </div> */}
            <div className='ir-ctn'>
                <div className='ir-btn'>
                    <button>financial highlight</button>
                    <button>financial statement</button>
                    <button>management discussion and analysis</button>
                    <button>IR Calendar</button>
                </div>
                {/* <div className='chart-btn'>
                        <div className='btn'>
                            <button onClick={() => {
                                setDataType('income')
                            }}>Sales and service income</button>
                            <button onClick={() => {
                                setDataType('net')
                            }}>Net Profit</button>
                        </div>
                        <div className='chart'><Chart dataType={dataType} /></div>
                    </div> */}
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
            {/* <div className='calendar-ctn'>
                <Calendar />
            </div> */}
            <div className='more-info'>
                <h4 className='font-bold text-center text-3xl more-info-title'>More Information</h4>
                {/* <InfoIR /> */}
                <div className='more-nav'>
                    <button onClick={navigateShareholder}>Shareholder Information</button>
                    <button onClick={toggleModal}>IR Contact</button>
                    {modal && (
                        <div className="modal">
                            <div onClick={toggleModal} className="overlay"></div>
                            <div className="modal-content">
                                <h2 className='font-bold'>IR Contact</h2>
                                <div className='office-info'>
                                    <p className='mt-1 font-bold'>Miss Rungarun Bongkodkanok</p>
                                    <p className='text-base'>NCL International Logistics Public Company Limited</p>
                                    <p className='text-sm'>56/9-10 Soi Som det Phra Chao Tak Sin 12/1, Som det Phra Chao</p>
                                    <p className='text-sm'>Tak Sin Road, Bukkalo, Thonburi  Bangkok 10600</p>
                                    <p className='text-sm'>Telephone : 02-459-4945</p>
                                    <p className='text-sm'>Facsimile : 02-473-7374</p>
                                    <p className='text-sm'>Email : ir@nclthailand.com</p>
                                    <p className='text-sm'>Website : www.nclthailand.com</p>
                                </div>
                                <br></br>
                                <div className='ir-contact'>
                                    <p className='font-bold'>Mr.Tirawit Disphanurat</p>
                                    <p className='text-sm'>Tel : 02-459-4888</p>
                                    <p className='text-sm'>Email : tirawit.d@nclthailand.com</p>
                                    <br></br>
                                    <p className='font-bold'>Miss Sirisara Watcharachatchawal</p>
                                    <p className='text-sm'>Tel :02-459-4817</p>
                                    <p className='text-sm'>Email : sirisara.w@nclthailand.com</p>
                                </div>
                                <a className="close-modal" onClick={toggleModal}>
                                    X
                                </a>
                            </div>
                        </div>
                    )}
                    <button>Annual Report</button>
                    <button>Our Profile</button>
                    <button>Analysis Report</button>
                </div>
            </div>
            <Footer />
        </Transitions>
    )
}