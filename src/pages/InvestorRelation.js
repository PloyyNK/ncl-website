import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import Transitions from '../components/Transition'
import irNews from '../data/irNews-data'
import '../styles/InvestorRelation.css'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import StockInfo from '../components/StockInfo'

export default function InvestorRelation() {

    const navigate = useNavigate()
    const [modal, setModal] = useState(false)

    const navigateFinanceGraph = () => {
        navigate('/investor-relation-ncl/finance-graph')
    }

    const navigateShareholder = () => {
        navigate('/investor-relation-ncl/shareholder-information')
    }

    const navigateCalendar = () => {
        navigate('/investor-relation-ncl/ir-calendar')
    }

    const navigateStatement = () => {
        window.location.href = ('https://www.settrade.com/th/equities/quote/ncl/overview')
    }

    const navigateAnalysis = () => {
        navigate('/investor-relation-ncl/management-discussion-analysis')
    }

    const navigateAnnual = () => {
        window.location.href = ('https://www.nclthailand.com/investor-report_42.html')
    }

    const navigateComProfile = () => {
        window.location.href = ('https://www.nclthailand.com/uploads/articles_attc/1149_1686023807_contentAtt_en.pdf')
    }

    const navigateAnalyst = () => {
        navigate('/investor-relation-ncl/analyst-report')
    }

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
            <div className='ncl-stock'>
                {/* <embed src='https://www.set.or.th/th/market/product/stock/quote/NCL/price' /> */}
                <StockInfo />
            </div>
            <div className='ir-ctn'>
                <div className='ir-btn'>
                    <button onClick={navigateFinanceGraph}>Financial highlight</button>
                    <button onClick={navigateStatement}>Financial statement</button>
                    <button onClick={navigateAnalysis}>Management discussion and analysis</button>
                    <button onClick={navigateCalendar}>IR Calendar</button>
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
            <div className='more-info'>
                <h4 className='font-bold text-center text-3xl more-info-title'>More Information</h4>
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
                    <button onClick={navigateAnnual}>Annual Report</button>
                    <button onClick={navigateComProfile}>Our Profile</button>
                    <button onClick={navigateAnalyst}>Analysis Report</button>
                </div>
            </div>
            <Footer />
        </Transitions>
    )
}