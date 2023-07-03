import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from 'react';
import { useParams } from 'react-router-dom';
import CompanySnapshot from "../components/ShareholderDetails/CompanySnapshot";
import ShareholderData from "../data/shareholder-data";
import FactSheet from "../components/ShareholderDetails/FactSheet";
import DividenPayPolicy from "../components/ShareholderDetails/DividendPayPolicy";

export default function ShareholderDetails() {

    const { name } = useParams()

    const renderComponent = (componentName) => {
        switch (componentName) {
            case 'company-snapshot':
                return React.createElement(CompanySnapshot, null)
            case 'fact-sheet':
                return React.createElement(FactSheet, null)
            case 'dividen-payment-policy':
                return React.createElement(DividenPayPolicy, null)
            default:
                return;
        }
    }

    return (
        <>
            <Navbar />
            <div>
                {
                    ShareholderData.filter((data) =>
                        data.name === name
                    )
                        .map((filterredData) => {
                            const component = renderComponent(filterredData.name)
                            return component ? React.createElement('div', { key: filterredData.name }, component) : null
                        })
                }
            </div>
            <Footer />
        </>
    )
}