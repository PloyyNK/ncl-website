import './styles/ShareholderStyles.css';

export default function FactSheet() {
    return (
        <>
            <div className="banner">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&w=1000&q=80" />
            </div>
            <div className="fact-content m-10">
                <h1 className="text-3xl font-bold">General Information and Reference Persons</h1>
                <div className="sheet-content">
                    <h3 className="text-xl text-center font-bold">Company Information</h3>
                    <div class="sheet-table">
                        <table className='main-table'>
                            <tbody>
                                <tr>
                                    <td className='font-bold'>Company</td>
                                    <td>NCL International Logistics Public Company Limited</td>
                                </tr>
                                <tr>
                                    <td className='font-bold'>Symbol:</td>
                                    <td>NCL</td>
                                </tr>
                                <tr>
                                    <td className='font-bold'>Registered No:</td>
                                    <td>0107556000434</td>
                                </tr>
                                <tr>
                                    <td className='font-bold'>Type of Business:</td>
                                    <td>Logistics Solution Provider</td>
                                </tr>
                                <tr>
                                    <td className='font-bold'>Registered Capital:</td>
                                    <td>113,538,030.25 Baht</td>
                                </tr>
                                <tr>
                                    <td className='font-bold'>Paid-up Capital:</td>
                                    <td>113,538,030.25 Baht</td>
                                </tr>
                                <tr>
                                    <td className='font-bold'>No. of common stock:</td>
                                    <td>454,152,248 Shares</td>
                                </tr>
                                <tr>
                                    <td className='font-bold'>Par Value:</td>
                                    <td>0.25 Baht per share</td>
                                </tr>
                                <tr>
                                    <td className='font-bold'>Head Office:</td>
                                    <td>56/9-10 Soi Som det Phra Chao Tak Sin 12/1, Som det Phra Chao Tak Sin Road, Bukkalo, Thonburi Bangkok 10600</td>
                                </tr>
                                <tr>
                                    <td className='font-bold'>Telephone:</td>
                                    <td>02-4737300</td>
                                </tr>
                                <tr>
                                    <td className='font-bold'>Facsimile:</td>
                                    <td>02-4737374</td>
                                </tr>
                                <tr>
                                    <td className='font-bold'>Website:</td>
                                    <td><a href="http://www.nclthailand.com">www.nclthailand.com</a></td>
                                </tr>
                                <tr>
                                    <td className='font-bold'>Company Secretary:</td>
                                    <td>
                                        <table>
                                            <tr>
                                                <td>Telephone: 02-4737300 Ext 300</td>
                                            </tr>
                                            <tr>
                                                <td>Email: rungarun.b@nclthailand.com</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='font-bold'>Investor Relationship:</td>
                                    <td>
                                        <table>
                                            <tr>
                                                <td>Telephone: 02-4737300 Ext 300</td>
                                            </tr>
                                            <tr>
                                                <td>Email: rungarun.b@nclthailand.com</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='font-bold'>Ordinary Share Registrar:</td>
                                    <td>
                                        <table>
                                            <tr>
                                                <td>Thailand Securities Depository Co., Ltd.</td>
                                            </tr>
                                            <tr>
                                                <td>93 Ratchadaphisek Road, Dindaeng, Dindaeng, Bangkok 10400</td>
                                            </tr>
                                            <tr>
                                                <td>Telephone: 0 2009-9000</td>
                                            </tr>
                                            <tr>
                                                <td>Facsimile: 0 2009-9991</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='font-bold'>Auditor:</td>
                                    <td>
                                        <table>
                                            <tr>
                                                <td>EY Office Limited</td>
                                            </tr>
                                            <tr>
                                                <td>33rd floor, Lake Rajada Office Complex, 193/136-137 Rajadapisek Road, Klongtoey, Bangkok 10110</td>
                                            </tr>
                                            <tr>
                                                <td>Tel: 02-264-9090</td>
                                            </tr>
                                            <tr>
                                                <td>Fax: 02-264-0789 - 90</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='font-bold'>Legal Advisor:</td>
                                    <td>
                                        <table>
                                            <tr>
                                                <td>Thanasap Law Office Company Limited</td>
                                            </tr>
                                            <tr>
                                                <td>143/2 Soi Wat Suwankiri, Boromratchonnanee Road, Arun Amarin, Bangkoknoi, Bangkok 10700</td>
                                            </tr>
                                            <tr>
                                                <td>Telephone: 02-4343132</td>
                                            </tr>
                                            <tr>
                                                <td>Facsimile: 02-4343133</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
