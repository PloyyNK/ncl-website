import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/GoodGovernance.css'
import { useNavigate } from 'react-router-dom'
import Transitions from '../components/Transition'

export default function GoodGovernance() {

    const navigate = useNavigate()

    const navigateGovPolicy = () => {
        navigate('/good-governance-ncl/coperate-governance-policy')
    }

    const navigateCorruptPolicy = () => {
        navigate('/good-governance-ncl/anticorruption-policy')
    }

    const navigateAsso = () => {
        navigate('/good-governance-ncl/association')
    }

    const navigateCharter = () => {
        navigate('/good-governance-ncl/board-charter')
    }

    const navigateRisk = () => {
        navigate('/good-governance-ncl/risk-management')
    }

    return (
        <>
            <Transitions>
                <NavBar />
                <div className='gg-ctn'>
                    <h1 id='gg-h1' className='font-bold text-3xl'>Good Governance</h1>
                    <h3 className='font-semibold mt-5 text-xl'>Independent Director</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc non felis vulputate, lobortis ante id, tristique ex.
                        Nunc augue ligula, posuere at magna et, lobortis
                        finibus tortor. In sed lorem nec odio tristique viverra.
                        Etiam libero ex, pharetra vitae consequat ut, lobortis
                        nec tortor.</p>
                </div>
                <div className='goodgov-nav'>
                    <div className='photo-decor'>
                        <div className='decor1'><img src='https://www.redwoodlogistics.com/wp-content/uploads/2019/03/Warehousing-1.jpg' alt='decor1' /></div>
                        <div className='decor2'><img src='https://i.pinimg.com/originals/4d/79/91/4d79915c605bc872c5b65e818ecae46d.jpg' alt='decor2' /></div>
                    </div>
                    <button onClick={navigateGovPolicy}>
                        Corporate Governance Policy
                    </button>

                    <button onClick={navigateCorruptPolicy}>
                        Anti Corruption Policy
                    </button>

                    <button onClick={navigateAsso}>
                        Article of Association
                    </button>

                    <button onClick={navigateCharter}>
                        Board Charter
                    </button>

                    <button onClick={navigateRisk}>
                        Risk Management
                    </button>
                </div>
                <Footer />
            </Transitions>
        </>
    )
}