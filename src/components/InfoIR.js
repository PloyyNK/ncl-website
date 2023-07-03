import '../styles/InvestorRelation.css'
import React, { useState } from "react";

export default function InfoIR() {

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
        <>
            <div className="more-info-ctn">
                <div className="more-info-nav">
                    <a href='https://www.nclthailand.com/investor-report_42.html'>Annual Report</a>
                    <a href='https://www.nclthailand.com/uploads/articles_attc/1149_1686023807_contentAtt_en.pdf'>Company Profile</a>
                    <a href='/investor-relation-ncl/shareholder-information'>Shareholder Information</a>
                    <a href='https://www.nclthailand.com/investor_44.html'>Analyst Report</a>
                    <a onClick={toggleModal}>IR Contact</a>
                </div>
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
                            <button className="close-modal" onClick={toggleModal}>
                                X
                            </button>
                        </div>
                    </div>
                )}

            </div >
        </>
    )
}