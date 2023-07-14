import '../styles/InvestorRelation.css'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import ModalContact from '../components/ModalContact'

export default function MoreInfoIR() {

    const navigate = useNavigate()
    const [modal, setModal] = useState(false)

    // navigation between page with button
    const navigateShareholder = () => {
        navigate('/investor-relation-ncl/shareholder-information')
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
        <div className='more-info'>
            <h4 className='font-bold text-center text-3xl more-info-title'>More Information</h4>
            <div className='more-nav'>
                <button onClick={navigateShareholder}>Shareholder Information</button>
                <button onClick={toggleModal}>IR Contact</button>
                {modal && (
                    <ModalContact toggleModal={toggleModal} />
                )}
                <button onClick={navigateAnnual}>Annual Report</button>
                <button onClick={navigateComProfile}>Our Profile</button>
                <button onClick={navigateAnalyst}>Analysis Report</button>
            </div>
        </div>
    )
}