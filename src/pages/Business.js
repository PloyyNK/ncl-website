import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/Business.css'
import Transitions from '../components/Transition'
import ServiceCard from '../components/ServiceCard';
import Partners from '../components/Partners';
import LogisticsNature from '../components/LogisticNature';

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
                
                <LogisticsNature />
                <Partners />
                <Footer />
            </Transitions>
        </>
    )
}