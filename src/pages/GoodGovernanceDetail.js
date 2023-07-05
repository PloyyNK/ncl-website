import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/GoodGovernanceDetail.css'
import GoodGovData from '../data/goodGov-data';
import GovPolicy from '../components/GoodGovDetails/GovPolicy';
import CorruptPolicy from '../components/GoodGovDetails/CorruptPolicy';
import Risk from '../components/GoodGovDetails/Risk';
import Asso from '../components/GoodGovDetails/Asso';
import Charter from '../components/GoodGovDetails/Charter';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function GoodGovernanceDetail() {

    const { category } = useParams();

    const renderComponent = (componentName) => {
        switch (componentName) {
            case 'coperate-governance-policy':
                return React.createElement(GovPolicy, null);
            case 'anticorruption-policy':
                return React.createElement(CorruptPolicy, null);
            case 'association':
                return React.createElement(Asso, null);
            case 'board-charter':
                return React.createElement(Charter, null);
            case 'risk-management':
                return React.createElement(Risk, null);
            default:
                return;
        }
    };

    return (
        <>
            <Navbar />
            <div>
                {
                    GoodGovData.filter((data) =>
                        data.category === category
                    )
                        .map((filterData) => {
                            const component = renderComponent(filterData.category);
                            return component ? React.createElement('div', { key: filterData.category }, component) : null;
                        })
                }
            </div>
            <Footer />
        </>

    )
}