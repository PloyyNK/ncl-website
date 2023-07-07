import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import NewsCard from '../components/NewsCard'
import '../styles/NewsEvents.css'
import BackgroundSlider from '../components/BackgroundSlider'
import NewsClipping from '../components/NewsClipping'
import NewsStock from '../components/NewsStock'
import InterviewClip from '../components/InterviewClip'
import nclNews from '../data/ncl-news-data'
import Transitions from '../components/Transition'

export default function NewsEvents() {

    // To display news, fetch data from backend and 
    // get header, description, category, and id

    return (
        <Transitions>
            <NavBar />
            <h1 id='news-page-title' className='text-3xl font-bold'>News & Events</h1>
            <BackgroundSlider data={nclNews}/>
            <div className='ncl-news'>
                <h1>NCL News</h1>
                <div className='news-card-ctn'>
                    {/* use map instead when fetch data from backend */}
                    <NewsCard
                        header="Lorem ipsum dolor sit amet,consectetur adipiscing elit"
                        description="Proin purus libero, pharetra ut ultrices vel, lacinia at ligula. Integer laoreet..."
                        pic="https://www.nclthailand.com/uploads/articles_icon/1662023268.jpg"
                        category="stock"
                        id='1' />
                    <NewsCard
                        header="Lorem ipsum dolor sit amet,consectetur adipiscing elit"
                        description="Proin purus libero, pharetra ut ultrices vel, lacinia at ligula. Integer laoreet..."
                        pic="https://www.nclthailand.com/uploads/articles_icon/1659602615.png" 
                        category="stock"
                        id='2'/>
                    <NewsCard
                        header="Lorem ipsum dolor sit amet,consectetur adipiscing elit"
                        description="Proin purus libero, pharetra ut ultrices vel, lacinia at ligula. Integer laoreet..."
                        pic="https://www.nclthailand.com/uploads/articles_icon/1659602487.png"
                        category="stock"
                        id='3' />
                    <NewsCard
                        header="Lorem ipsum dolor sit amet,consectetur adipiscing elit"
                        description="Proin purus libero, pharetra ut ultrices vel, lacinia at ligula. Integer laoreet..."
                        pic="https://www.nclthailand.com/uploads/articles_icon/1659602348.png"
                        category="stock"
                        id='4' />
                </div>
            </div>

            <div className='stock-clipping-news'>
                <div className='stock-news'>
                    <h1 className='font-bold text-lg'>Stock Marget News</h1>
                    <NewsStock />
                </div>
                <div className='clipping-news'>
                    <h1 className='font-bold text-lg'>News Clipping</h1>
                    <NewsClipping />
                </div>
            </div>

            <div className='interview-ctn'>
                <h1>Management interview</h1>
                <InterviewClip />
            </div>
            <Footer />
        </Transitions>
    )
}