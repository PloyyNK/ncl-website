import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import Transitions from '../components/Transition'
import '../styles/CorpSocRes.css'
import React, { useState } from 'react'
import SusDev from '../components/CorpSocResDetails/SusDev'
import CorpData from '../data/corp-data'
import SusPolicy from '../components/CorpSocResDetails/SusPolicy'

export default function CorpSocRes() {
    const [component, setComponent] = useState("sustainable-dev")

    const renderComponent = (componentName) => {
        switch (componentName) {
            case 'sustainable-dev':
                return React.createElement(SusDev, null)
            case 'sustainable-policy':
                return React.createElement(SusPolicy, null)
            default:
                return React.createElement(SusDev, null)
        }
    }

    console.log(component)

    return (
        <>
            <Transitions>
                <NavBar />
                <div className='banner-textover'>
                    <img src='https://www.prodensa.com/wp-content/uploads/2021/02/CSR-hero-image.jpg' />
                    <div className='text-corp font-bold text-5xl'>Corperate Social Responsibility</div>
                </div>
                <div className='corp-nav'>
                    <a onClick={() => setComponent("sustainable-dev")}>Sustainable Development for Business</a>
                    <a href='https://www.nclthailand.com/csr_1333_SustainablePolicy.html'>Sustainable Policy</a>
                    <a href='https://www.nclthailand.com/csr_223_OperationandReportPreparation.html'>Operation and Report Preparation</a>
                    <a href='https://www.nclthailand.com/csr_224_SocialandEnvironmentalActivities(AfterProcess).html'>Social and Enviromental Activities</a>
                    <a href='https://www.nclthailand.com/csr_401_SustainabilityReport.html'>Sustainability Report</a>
                </div>
                <div className='corp-com-ctn'>
                    {
                        CorpData.filter((data) =>
                            data.name === component
                        )
                            .map((filterredData) => {
                                const render = renderComponent(filterredData.name)
                                return render ? React.createElement('div', { key: filterredData.name }, render) : null
                            })
                    }
                </div>
                <Footer />
            </Transitions>
        </>
    )
}