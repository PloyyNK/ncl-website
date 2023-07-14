import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import Transitions from '../components/Transition'
import irNews from '../data/irNews-data'
import '../styles/InvestorRelation.css'
import StockInfo from '../components/StockInfo'
import IRButton from '../components/IRButton'
import MoreInfoIR from '../components/MoreInfoIR'

export default function InvestorRelation() {

    return (
        <Transitions>
            <NavBar />
            <div className='ncl-stock'>
                <StockInfo />
            </div>
            <div className='ir-ctn'>
                <IRButton />
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
            <MoreInfoIR />
            <Footer />
        </Transitions>
    )
}