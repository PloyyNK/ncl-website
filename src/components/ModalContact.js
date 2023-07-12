export default function ModalContact({toggleModal}) {
    return (
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
    )
}