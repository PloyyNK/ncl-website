import '../styles/NewsHome.css'
import NewsCard from './NewsCard'

export default function NewsHome() {
    return (
        <div className='news-home-ctn'>
            <div className='news-home-title-ctn'>
                <div className='news-home-title'>
                    <strong><a href="/news-events-ncl">News & Events</a></strong>
                </div>
                <div className='divider'></div>
            </div>
            <div className='news-card-ctn'>
                <NewsCard 
                header="Lorem ipsum dolor sit amet,consectetur adipiscing elit"
                description="Proin purus libero, pharetra ut ultrices vel, lacinia at ligula. Integer laoreet..."
                pic="https://www.nclthailand.com/uploads/articles_icon/1662023268.jpg"/>
                <NewsCard 
                header="Lorem ipsum dolor sit amet,consectetur adipiscing elit"
                description="Proin purus libero, pharetra ut ultrices vel, lacinia at ligula. Integer laoreet..."
                pic="https://www.nclthailand.com/uploads/articles_icon/1659602615.png"/>
                <NewsCard 
                header="Lorem ipsum dolor sit amet,consectetur adipiscing elit"
                description="Proin purus libero, pharetra ut ultrices vel, lacinia at ligula. Integer laoreet..."
                pic="https://www.nclthailand.com/uploads/articles_icon/1659602487.png"/>
                <NewsCard 
                header="Lorem ipsum dolor sit amet,consectetur adipiscing elit"
                description="Proin purus libero, pharetra ut ultrices vel, lacinia at ligula. Integer laoreet..."
                pic="https://www.nclthailand.com/uploads/articles_icon/1659602348.png"/>
            </div>
        </div>

    )
}