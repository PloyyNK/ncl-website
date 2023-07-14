import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/Business.css'
import Transitions from '../components/Transition'
import ServiceCard from '../components/ServiceCard';
import Partners from '../components/Partners';

export default function Business() {

    return (
        <>
            <Transitions>
                <NavBar />
                <div className='business-ctn'>
                    <div className='b-bg'>
                        <div className='b-filter'>
                            <div className='b-text'>
                                <strong><p id='title'>WHAT</p></strong>
                                <strong><p id='title'>CAN</p></strong>
                                <strong><p id='title'>WE DO</p></strong>
                                <strong><p id='title'>FOR</p></strong>
                                <strong><p id='title'>YOU ?</p></strong>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Nunc non felis vulputate, lobortis ante id,
                                    tristique ex. Nunc augue ligula, posuere at magna
                                    et, lobortis finibus tortor. In sed lorem nec
                                    odio tristique viverra. Etiam libero ex,
                                    pharetra</p>
                            </div>
                            <div className='more-btn'>
                                <button>Learn More</button>
                            </div>
                        </div>
                    </div>
                    {/* popup card for service */}
                    <ServiceCard />
                </div>
                <p className='text-right'>*Click to see more information</p>
                <div className='mt-20'>
                    <div className='title-line'>
                        <h1 className='font-bold text-2xl ml-8'>Summary of the nature of logistics management services</h1>
                        <div className='line-text'></div>
                    </div>
                    <img className='w-4/6 mx-auto mt-8 mb-8' src='https://www.nclthailand.com/uploads/upfiles/images/%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%93%E0%B8%B0%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%AD%E0%B8%9A%E0%B8%98%E0%B8%B8%E0%B8%A3%E0%B8%81%E0%B8%B4%E0%B8%88%20EN.jpg' />
                </div>
                <Partners />
                <Footer />
            </Transitions>
        </>
    )
}