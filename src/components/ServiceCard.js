import '../styles/Business.css'
import React, { useState } from "react";

export default function ServiceCard() {

    const [air, setAir] = useState(false)
    const [sea, setSea] = useState(false)
    const [domestic, setDomestic] = useState(false)
    const [other, setOther] = useState(false)

    const toggleAir = () => {
        setAir(!air);
    };

    const toggleSea = () => {
        setSea(!sea);
    };

    const togglDomestic = () => {
        setDomestic(!domestic);
    };

    const toggleOther = () => {
        setOther(!other);
    };


    if (air) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    if (sea) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    if (domestic) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    if (other) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <div className='service-card-ctn'>
            {/* popup for sea freight */}
            <button onClick={toggleSea}>
                <img src='https://i.imgur.com/JqRAhVy.png' alt='sea' />
            </button>
            {sea && (
                <div className='modal'>
                    <div className='overlay' onClick={toggleSea}></div>
                    <div className='modal-content'>
                        <h1 className='font-bold'>International sea freight transport</h1>
                        <p className='mt-8'>
                            Currently, the Company renders sea freight transport services across five continents, namely Europe, America, Asia, Australia, and Africa, which cover main ports of major trade areas in over 180 countries. Sea freight transport can be divided into three types as follows:
                        </p>
                        <ul className='list-disc ml-4 mt-4'>
                            <li>
                                Full container load (FCL), which is suitable for customers with a large quantity of goods in hand, where it is economical to rent a whole container solely for their goods without having to share the container with other customers. The Company will find different sizes of containers according to the needs of the customer, provide shipping lines in line with the Customer’s schedule and requirements, and serve as a customs broker and goods issuance agent.
                            </li>
                            <li>
                                Less than container load (LCL), which is suitable for customers with fewer goods for transit, the quantity of which is not economical to warrant the renting of a whole container solely for their goods. The Company will gather goods from individual customers and allocate loading space in the reserved container, and then it will calculate the space and place the goods suitably for their types and requirements of each customer. This is to ensure that each customer’s goods are put in the same container safely and are delivered on time at the lowest cost. However, since the majority of the customers are operators rendering freight transport services as the Company, they have the abilities to handle their own customs documentation on their own.
                            </li>
                            <li>
                                Shipper Owned Container (SOC): The Company will provide the empty containers for customers to contain their own goods, not necessary to wait for the containers from the shipping agents. In some shipping agents who have no containers to service their customers, the Company will be provided the containers for their customers
                            </li>
                        </ul>
                    </div>
                    <button className="close-modal" onClick={toggleSea}>
                        X
                    </button>
                </div>
            )}


            {/* popup for air freight */}
            <button onClick={toggleAir}>
                <img src='https://i.imgur.com/C3xdd5E.png' alt='air' />
            </button>
            {air && (
                <div className='modal'>
                    <div onClick={toggleAir} className='overlay'></div>
                    <div className='modal-content'>
                        <h1 className='font-bold'>International air freight transport</h1>
                        <p className='mt-8'>This is a fast mode of transport, which takes a shorter time to transport goods to destinations compared to sea freight transport. However, as it bears a higher cost, it is suitable for transporting perishable or temperature-sensitive goods, such as fresh fruits and vegetables, goods with that are high value or need special care, e.g., gems and gold, as well as goods with a low weight and quantity that require fast delivery, e.g., documents and printed materials. The Company finds an airline according to the customer’s schedule and requirements and serves as a customs broker and a goods issuance agent. Currently, the Company can provide air shipment services to over 180 countries. Since November 2019, the Company had been appointed as an agent for Israel Airlines resulting in the increasing revenue from international air transportation.</p>
                        <button className="close-modal" onClick={toggleAir}>
                            X
                        </button>
                    </div>
                </div>
            )}

            {/* popup for domestic freight */}
            <button onClick={togglDomestic}>
                <img src='https://i.imgur.com/6yomt8F.png' alt='domestic' />
            </button>
            {domestic && (
                <div className='modal'>
                    <div onClick={togglDomestic} className='overlay'></div>
                    <div className='modal-content'>
                        <h1 className='font-bold'>Domestic transport services</h1>
                        <p className='mt-8'>In the year 2011, the Company started rendering domestic freight transport services by tractor heads and trailer trucks in order to (1) extend its range of services for its existing customers using the Company’s international transport services and (2) to expand its business using its expertise in logistics services to serve customers that need freight forwarding in the country. In 2022, the Company has 66 tractor heads and 99 trailer trucks. The trailers trucks are available in both skeleton frame, which are used for carrying containers, and flatbed, which are for carrying containers or cargo directly. The Company forwards goods enroute from factories to loading points for exportation, from the loading points for importation into factories or other destinations in the country, and from origins to destinations in different countries, as required by customers. The Company’s existing service points are as follows:</p>
                        <ul className='list-disc ml-8'>
                            <li>
                                <strong>Service point in Hat Yai</strong> : This service point is situated in Hat Yai district, Songkhla.
                            </li>
                            <li>
                                <strong>Service point in Surat Thani</strong> : This service point is situated in Phunphin district, Surat Thani, which offers both short and long-distance transport service. The short-distance transport takes not over one day, which involves delivering goods from factories in Surat Thani to ports or railway stations within the same province or to ports in the southern region, such as the Phuket Port. The long-distance transport takes more than one day, which involves delivering goods from factories in Surat Thani to Bangkok or other provinces and sending goods from destination provinces or nearby provinces back to the southern provinces.
                            </li>
                            <li>
                                <strong>Service point in Laem Chabang, Chonburi </strong>: This service point is situated in Sriracha district, Chonburi. Currently, there are short-distance transport services as delivering empty containers to pick up products, goods from Laem Chabang warehouse to Laem Chabang port and Khlong Toei pier and long-distance transport service is to pick up products, goods from the central and eastern provinces to Laem Chabang port and Khlong Toei pier.
                            </li>
                            <li>
                                <strong>Service point in Lat Krabang</strong> : This service point is situated in Rom Klao bus terminal, Lat Krabang district, Bangkok. Currently, there are short and long-distance transport services as transportation from Klong Toei port, Sahathai port, BMT port in Samut Prakan province to the central, southern and northeast.
                            </li>
                        </ul>
                        <button className="close-modal" onClick={togglDomestic}>
                            X
                        </button>
                    </div>
                </div>
            )}


            {/* popup for other */}
            <button onClick={toggleOther}>
                <img src='https://i.imgur.com/62QV38E.png' alt='other' />
            </button>
            {other && (
                <div className='modal'>
                    <div onClick={toggleOther} className='overlay'></div>
                    <div className='modal-content'>
                        <h1 className='font-bold'>Other services:</h1>
                        <p className='mt-8'>The Company provides services concerning customs formalities and relevant documentation and serves as a goods issuance agent. The services require experts in customs formalities and regulations pertaining to importation and exportation so that the customers can comply with relevant laws in each country and receive or send goods on time.</p>
                        <button className="close-modal" onClick={toggleOther}>
                            X
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}