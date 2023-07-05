import './styles/AboutStyles.css'
import React, { useState } from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function TimelineCom() {

    const [appear, setAppear] = useState(false)

    if (appear) {
        document.body.classList.add('active-info')
    } else {
        document.body.classList.remove('active-info')
    }

    return (
        <>
            <div className="timeline-ctn">
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className="year1 btn-ctn">
                                <button className='font-bold'>2013-2014</button>
                            </div>
                            <div className='year1-info'>
                                <p className='font-bold'>Year 2013 </p>
                                <ul className='list-disc'>
                                    <li>
                                        June The Company changed its name from "NCL International Logistics Co., Ltd." to "NCL International Logistics Public Company Limited" to list the company. The Stock Exchange of Thailand
                                    </li>
                                    <li>
                                        Increased registered capital to Baht 105 million and changed the par value of ordinary shares from Baht 10 per share to Baht 0.25 per share, resulting in increased registered share capital from 8,125,000 shares to 420,000,000 shares.
                                    </li>
                                </ul>
                                <p className='font-bold mt-2'>Year 2014</p>
                                <ul className='list-disc'>
                                    <li>
                                        January started to provide warehouse management services to customers. Currently, there is one warehouse at Wyncoast Free Zone. Bangna - Trad (Currently not available)
                                    </li>
                                    <li>
                                        August set up a branch office in Hat Yai, Songkhla.
                                    </li>
                                    <li>
                                        November The company was listed on the MAI on November 11, 2014. Its registered capital is Baht 140 million, paid up capital of Baht 105 million, consisting of 420 million ordinary shares with a par value of Baht 0.25 each.
                                    </li>
                                    <li>
                                        NCL INTER LOGISTICS (S) PTE. LTD, a subsidiary of the Company, is located in Singapore to provide logistics management services. The registered capital is 500,000 dollars. The Company 100% of registered and paid-up capital.
                                    </li>
                                    <li>
                                        December acquisition of shares Trans Offshore Logistics Co., Ltd., which accounted for 22.22% of paid-up capital, paid SGD 1,000,000. The total cost is approximately Baht 33,080,000, registered in Singapore. The company provides logistics management services. This is an investment to expand the logistics business in the pipeline related business. The company has expanded its market share to ASEAN countries and sold its shares. In the beginning of 2016, oil related businesses suffered a loss.
                                    </li>
                                </ul>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className="year2 btn-ctn">
                                <button className='font-bold'>2015-2016</button>
                            </div>
                            <div className='year2-info text-left'>
                                <p className='font-bold'>Year 2015</p>
                                <ul className='list-disc'>
                                    <li>
                                        <strong>February</strong> expanded its domestic transportation business by purchasing 15 additional towing heads. The company has a total of 65 towing heads and 98 towing heads.
                                    </li>
                                    <li>
                                        <strong>March</strong> started to provide full container shipping service from Ranong port to Yangon port in Myanmar.
                                    </li>
                                    <li>
                                        <strong>July</strong> Stop shipping your boat from Ranong pier to Yangon port in Myanmar. This has no significant impact on the Company's core business.
                                    </li>
                                    <li>
                                        <strong>November</strong> Board of Directors The Board of Directors has approved the sale of investment in Trans Offshore Logistics Co., Ltd. in Singapore where the Company holds 22.22% of the total paid-up capital of S $ 1,000,000. To Mr.Alvin Lim Sien Yong, the existing shareholder This is because the associated company had a loss from operation in the 9 months period and the shareholders' equity was negative. Available at a total cost of $ 10,000. The loss from the sale of investments amounted to US $ 990,000 or approximately Baht 32.59 million.
                                    </li>
                                    <li>
                                        <strong>December</strong> issue and allotment of warrants (NCL-W1) to existing shareholders of the Company. Right Offering at the ratio of 3 existing shares to 1 warrant Without value
                                    </li>
                                    <li>
                                        Increased the registered capital of the Company to Baht 140 million with a par value of Baht 0.25 per share to accommodate the offering of shares to the existing shareholders and to accommodate the exercise of NCL-W1.
                                    </li>
                                </ul>
                                <p className='font-bold mt-2'>Year 2016</p>
                                <ul className='list-disc'>
                                    <li>
                                        <strong>January</strong> invested in SSK Inter Logistics Co., Ltd. ("SSK"), an associated company of the Company, on January 27, 2019 with a registered capital of Baht 1 million to provide transportation services. Domestic truck with tow truck On May 13, 2016, the Board of Directors' meeting The Board of Directors passed a resolution approving the sale of 65 towed assets and 98 tail wagons to SSK in accordance with the transfer of investment property, amounting to approximately Baht 120.94 million.
                                        - and in June. SSK's registered capital was increased from Baht 289 million to Baht 1 million, totaling Baht 290 million.
                                    </li>
                                    <li>
                                        <strong>March</strong> co-invested with LEGEND SHIPPING PTE. LTD. (Singapore) to establish Legend Shipping (Thailand) Co., Ltd. ("Subsidiary"), a subsidiary of the Company, on March 11, 2019 with registered capital of 10 million baht. Million Baht to provide container shipping service (SOC) and international freight services. By sea freight is the owner of the container. It is a representative of foreign countries to import and export goods to foreign countries.
                                    </li>
                                    <li>
                                        <strong>June</strong> co-invested with LEGEND SHIPPING PTE. LTD. (Singapore) to establish LEGACY ASIA CAPPITAL PTE. LTD. (The "Subsidiary"), a subsidiary of the Company, located in Singapore on June 1, 2019 with registered capital. $ 200,000 To do the container rental business. To expand our business base to more international and integrated markets and to diversify our business risk.
                                    </li>
                                    <li>
                                        <strong>September</strong> jointly invested in Grace Water Med Co., Ltd. ("Other Associates" or "GWM") by acquiring 8 million ordinary shares on September 23, 2019, holding 44.44% Business Manufacturer of kidney dialysis and related equipment. With this investment, the Company realizes that it will be able to create additional value for the Company in the future and diversify its risk. Encourage the company It has a stable and stable return in the future.
                                    </li>
                                </ul>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className="year3 btn-ctn">
                                <button className='font-bold' onClick={() => setAppear(!appear)}>2017-2018</button>
                            </div>
                            <div className='year3-info' onClick={() => setAppear(!appear)}>
                                <p className='font-bold'>Year 2017</p>
                                <ul className='list-disc'>
                                    <li>
                                        <strong>May</strong> increased its share capital in the subsidiary company, NCL Inter Logistics (S) Pte. Ltd. with 300,000 shares at a par value of SGD 1 each, totaling SGD 300,000, increasing from 700,000 shares at SGD 700,000 to 1,000,000 shares, totaling SGD. 1,000,000, which the Company holds 100 percent of shares.

                                        increased its share capital in the Associated Company, Grace Water Med Co., Ltd. with 17,780 shares at the par value of Baht 1,000 each, totaling of 17.78 million baht, and the other shareholders have joined the capital increase with an increase of 18,000 shares, totaling of 18 million baht to 40,000 shares, totaling of 40 million baht, which the Company holds 44.45 percent of shares.
                                    </li>
                                    <li>
                                        <strong>June</strong> issued and offered the warrants to purchase new ordinary shares of the Company No. 2 (NCL-W2) to the existing shareholders of the Company in proportion to their shareholding (Right Offering) without charge in the ratio of 6.6 shares to 1 warrant for a total amount of up to 63.65 million units.

                                        increased the registered capital of the Company from 140 million baht to 157.5 million baht by issuing 70,000,000 new ordinary shares with a par value of 0.25 baht each, totaling 17,500,000 baht, and allotment of such increased shares in 2 parts.
                                        <p className='ml-2 mt-2'>
                                            1. Supports conversion. Right of the warrants of the Company No. 2 (NCL-W2) of 63,650,000 shares
                                        </p>
                                        <p className='ml-2 mt-2'>
                                            2. Supports Right Adjustment of warrants of the Company No. 1 (NCL-W1) as a condition for the exercise of 5,350,000 shares, with the new exercise ratio as follows: 1 unit of warrant can exercise the right to purchase 1 ordinary share which is changed to 1 unit of warrant with the right to purchase 1.04 ordinary shares, and adjust the exercise price from 4 baht/ ordinary share to the price of 3.848 baht / ordinary share.
                                        </p>
                                    </li>
                                    <li>
                                        <strong>August</strong> approved a goods distribution project for distributing the goods to various areas by expanding the scope of services to customers who want to transport goods in the country with the pickup truck through applying the company specializes in providing goods transportation services. It also supports the expansion of the company's goods transportation business in the future, as well as an opportunity to increase revenue for the Company.

                                        SSK Inter Logistics Co., Ltd. ("SSK"), the associated company has decreased its registered capital from 290 million baht to 168.74 million baht by reducing the number of 12,125,720 shares with the par value of 10 baht each, totaling 121,257,200 baht. This does not affect the operation of the SSK by decreasing the whole capital of Ms. Wassana Suaklinsak, resulting in the termination of the joint venture agreement. As a result, the Company increased its shareholding proportion from 43.84% to 75.35% of the new registered capital.

                                        <p className='text-xs mb-3 mt-2'>
                                            * Additional Information: News of the Stock Exchange of Thailand (SET) "at NCL-M 23/60 16 August 2560 (2017) Subject: Notification of the Acquisition of Assets of NCL International Public Company Limited and the source of capital return of Ms. Wassana Suaklinsak (2nd revision) "
                                        </p>
                                    </li>
                                    <li>
                                        <strong>September</strong> On September 20, 2017, the Company has jointly invested with Zim Integrated Shipping Service Limited (associated company or "ZIM"), an Israeli shipping company, to establish SIM (Thailand) Co., Ltd in order to operate as a maritime shipping agent by container shipping to ZIM with the registered capital of 10 million baht, by which the Company holds 51% of shares. This project also aims to expand the business base to overseas and increase the revenue source for the Company.
                                    </li>
                                </ul>
                                <p className='font-bold mt-5'>Year 2018</p>
                                <ul className='list-disc'>
                                    <li>
                                        <strong>February</strong> On 20 February 2018, a meeting of the Company’s Board of Directors approved the capital increase in NCL Inter Logistics (S) Pte. Ltd., a subsidiary, of USD 1,260,000 to expand business in foreign countries. During the year, the Company has transferred a fund for the capital increase amounting to USD 420,000 by increasing the registered share capital from SGD 1,000,000 to SGD 1,574,635. The registration of increased share capital was completed on 28 December 2018.

                                        The Board of Directors approved NCL International Logistics Public Company Limited. to purchase share of Grace Water Med Co., Ltd. from Mr. Thongchai Phami (Shareholder) number of 3,340 shares at 1,500 baht per share, the total amount is 5,010,000 baht. The purpose is for the company to have the power to control by totalitarianism.  At present, the company holds the share in proportion of 44.45% will turn into the share proportion of 52.80%. which has funding from the Company's working capital which does not affect the operation of the Company in any way. In this regard, the Board of Directors has considered the appropriateness of the purchase price by taking into account various relevant factors thoroughly.

                                        NCL Inter Logistics (S) Pte. Ltd. Which is the Company’s subsidiary, established NCL International Logistics USA INC. in February 23, 2018 (Registered in the United States of America) to provide international freight forwarder with registered capital of USD 100,000. to expand business base in foreign countries and increase source of revenues. On 19 July 2018, NCL Inter Logistics (S) Pte. Ltd. transferred additional investment in NCL International Logistics USA Inc. of USD 30,000 by increasing investment from USD 100,000 to USD 130,000. The registration of increased shares capital of NCL International Logistics USA Inc. was completed on 8 October 2018. NCL Inter Logistics (S) Pte. Ltd. a subsidiary of the Company holds shares in proportion of 100 percent
                                    </li>
                                    <li>
                                        <strong>May</strong> The Board of Directors carefully considered and then approved agreed to dissolution its subsidiary Legacy Asia Capital Pte., Ltd. (Registered in Singapore) for the leasing container business. Buss Capital GmbH, which as sponsor of funding to Legacy could not support the funding of business operations for the Legacy continually due to the bankruptcy. As a result, the Legacy does not have sufficient funds for business operations and expansion, which this could result a problem in the business and cause the loss increase in the future.

                                        NCL Inter Logistics (S) Pte. Ltd. Which is the Company’s subsidiary, established Qingdao National Container Line Company Limited in May 18, 2018 (Registered in China) to provide international freight forwarder with registered capital of CNY 5,000,000. to expand business base in foreign countries and increase source of revenues. As at 31 December 2018, Qingdao National Container Line Company Limited has paid-up shares capital by CNY 346,375. NCL Inter Logistics (S) Pte. Ltd. a subsidiary of the Company holds shares in proportion of 100 percent
                                    </li>
                                    <li>
                                        <strong>July</strong> The Company has approved the Issuance of the Warrants to Purchase the Newly Issued Ordinary Shares of the Company (“NCL-W3”) to the existing shareholders of the company (Right Offering) in the total number not exceed 65,000,000 units at no cost to be allocated to the existing shareholders of the company ratio of every 7 existing ordinary shares for 1 unit of warrants (as the case may be, the fraction of warrant under 1 unit shall be rounded down). The existing price is 2.40 Baht per share. The term of warrant is 16 months from the issuance date.

                                        The Company has approved the Increase of Registered Capital of the Company amount 26,000,000 Baht from 120,913,184.50 Baht to 146,913,184.50 Baht by Issuance of the Newly Issued Ordinary Shares amount not exceed 104,000,000 shares at par value of 0.25 Baht per share to accommodate the exercise of NCL-W3 Warrant

                                        On July 20, 2018, the Company has approved the Articles of Association on article 51 on the company seal. The statement shall be carried out in accordance to the core business of the company, which is the service provider of International Sea Freight Transport. The company agreed to change the company seal, which is easy for customer both in domestic and overseas to remember and supporting sales of the company’s product and service by using the new company seal.

                                        <br></br>
                                        <br></br>

                                        The Company disposed investment in Legacy Asia Capital Pte. Ltd. in full amount at cost, comprising of 140,000 ordinary shares with a par value of SGD 1, totaling SGD 140,000, to a shareholder of Legend Shipping PTE. Ltd. which is a related company in Singapore. As a result, Legacy Asia Capital Pte. Ltd. ended being the Company’s subsidiary since thereon

                                        The Company registered to change the name of the subsidiary company from Legend Shipping (Thailand) Company Limited to LG Container Line Company Limited. The change was registered at the Department of Business Development Ministry of Commerce already

                                        NCL Inter Logistics (S) Pte. Ltd. Which is the Company’s subsidiary, established LG Container Line Pte. Ltd. in July 27, 2018 (Registered in Singapore) for the purpose of being the principal of LG Container Lines Company Limited (formerly known as “Legend Shipping (Thailand) Co., Ltd.”), a subsidiary, as an agent in Thailand to provide international freight forwarder with registered capital of SGD 10,000 (paid-up shares capital by SGD 10,000). NCL Inter Logistics (S) Pte. Ltd. a subsidiary of the Company holds shares in proportion of 100 percent

                                        NCL Inter Logistics (S) Pte. Ltd. Which is the Company’s subsidiary, has invested in PT. NCL INTER LOGISTIK INDONESIA which was established in Indonesia through entering into Convertible loan agreement amounting to USD 60,000 which shareholding was equivalent to 60 percent of registered share capital and entering into Business cooperation agreement for the purpose of controlling either directly or indirectly business operation and management of such company. The Company has controlled and directed various operating activities including financial policy since the agreement date. Such company became subsidiary company since thereon
                                    </li>
                                    <li>
                                        <strong>August</strong> NCL Inter Logistics (S) Pte. Ltd. Which is the Company’s subsidiary, has invested in NCL Inter Logistics Vietnam Company Limited which was established in Vietnam through entering into Convertible loan agreement amounting to USD 100,000 which shareholding was equivalent to 100 percent and entering into Business cooperation agreement for the purpose of controlling either directly or indirectly business operation and management of such company. The Company has controlled and directed various operating activities including financial policy since the agreement date. Such company became subsidiary company since thereon
                                    </li>
                                    <li>
                                        <strong>November</strong> NCL Inter Logistics (S) Pte. Ltd. Which is the Company’s subsidiary, established Ningbo National Container Line Company Limited in November 30, 2018 (Registered in China) to provide international freight forwarder with registered capital of CNY 5,000,000. to expand business base in foreign countries and increase source of revenues. As at 31 December 2018, Ningbo NCL Inter Logistics Company Limited has not yet operated and no paid-up share capital. NCL Inter Logistics (S) Pte. Ltd. a subsidiary of the Company holds shares in proportion of 100 percent
                                    </li>
                                </ul>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className="year4 btn-ctn">
                                <button className='font-bold'>2019-2020</button>
                            </div>
                            <div className='year4-info text-left'>
                                <p className='font-bold'>Year 2019</p>
                                <ul className='list-disc'>
                                    <li>
                                        <strong>February</strong>  NCL Inter Logistics (S) Pte., Ltd. (a subsidiary in Singapore), a subsidiary of the Company. established “NCL International Logistics Private Limited” in Republic of India, which NCL Inter Logistics (S) Pte. Ltd. had shareholding at 100 percent of INR 5,000,000 (USD 70,000) registered share capital. Such company was completed for incorporation on 22 February 2019. As at 31 December 2019, NCL International Logistics Private Limited has INR 286,000 (USD 4,086) paid-up share capital and has yet operated.
                                    </li>
                                    <li>
                                        <strong>April</strong> The Annual General Meeting of Shareholders for the year 2019 had approved the dividend payment at the rate of 0.0067 baht per share, totaling Baht 3,042,819.21 and will be due to pay on May 24, 2019
                                        <br></br>
                                        On 26 April 2019, the Annual General Meeting of SSK Inter Logistics Company Limited’s shareholders approved the capital decrease of 1,699,280 shares, from 16,874,280 shares to 15,175,000 shares. As a result, the Company had shareholding increased from 75.35 percent to 83.79 percent. On 4 September 2019, the Extraordinary General meeting of such company’s shareholders approved the capital decrease of 1,600,000 shares, from 15,175,000 shares to 13,575,000 shares. As a result, the Company had shareholding increased from 83.79 percent to 93.66 percent. The registration of capital decrease was completed on 16 September 2019.
                                        <br></br>
                                        On 30 April 2019, the Company’s Board of Directors approved the resolution disposal on investment in LG Container Lines Company Limited which is a subsidiary, to GTX Logistics (Thailand) Co., Ltd. in full amount at cost, comprising of 599,999 ordinary shares with a par value of Baht 10, totaling Baht 5,999,990. LG Container Lines Company Limited ended being the Company’s subsidiary since the agreement date.
                                    </li>
                                    <li>
                                        <strong>May</strong>  SIM (Thailand) Company Limited has approved the interim dividend payment from the operations for the year ended December 31, 2018 to the shareholders at the rate of Baht 277.30 per share and the Company has received the dividends in proportion to the holding shares in the amount of 1.4 million baht on May 28, 2019
                                        <br></br>
                                        Disposal of investment in LG Container Line Company Limited, a subsidiary, to a local company on May 1, 2019. The Company entered into a share purchase agreement with that company in order to dispose of the investment at cost with ordinary shares for 599,999 shares, par value of Baht 10 per share, in total amount Baht 5,999,990. The Company received full payment from the sale on October 3, 2019, with the Company recognizing the gain from the sale of that investment of 11 million baht in the consolidated statement of comprehensive income for the current year.
                                        <br></br>
                                        In May 2019, NCL Inter Logistics (S) Pte. Ltd. adjusted shareholder structure of NCL Inter Logistics Vietnam Company Limited by transferring additional investments in such subsidiary amounting to VND 1,225,000,000 equivalent to USD 50,000, and registered being such company’s shareholders with shareholding at 49 percent of VND 2,500,000,000 registered and paid-up share capital. Later, in November 2019, there is new shareholder which is a company in Vietnam has invested in NCL Inter Logistics Vietnam Company Limited in the proportion of 51 percent shareholding, totaling VND 1,275,000,000 of VND 2,500,000,000 registered share capital. In addition, the Company’s management considers revising Convertible loan agreement by adjusting the loan amount from USD 100,000 to USD 51,000 resulting from investment of new shareholder which makes shareholding percentage decreasing from 100 percent to 49 percent. As a result of the investment of new shareholders as a result, the proportion of shareholding decreased from 49 percent to December 31, 2019.
                                    </li>
                                    <li>
                                        <strong>August</strong>  On August 13,2019, the meeting of the Board of Directors has approved to increase the capital in NCL Inter Logistics (S) Pte., Ltd in the amount of 25 million baht to expand the operations of foreign subsidiaries. During the year 2019, the Company transferred additional investment in NCL Inter Logistics (S) Pte., Ltd in the amount of SGD 1,325,365. from the previous registered capital of SGD 1,574,635 Singapore dollars to SGD 2,900,00 and the registration process was completed on December 2, 2019.
                                    </li>
                                    <li>
                                        <strong>September</strong>  On September 9, 2019, LG Container Line Pte., Ltd. (a subsidiary in Singapore) entered into a Non-Vessel Operating Common Carrier (NVOCC) division with LG Container Lines Co., Ltd. (a company in Thailand) in the amount of 25 million baht. The subsidiary company has made payment for the purchase of these segments and received the assets transferred on the date of the contract. From the purchase of this segment, the Company has a relationship with customers and technical knowledge which is presented as the whole intangible asset.
                                    </li>
                                    <li>
                                        <strong>October</strong>  Mr.Korn Dabbaransi has submitted his resignation from the Chairman and Independent Director of the Company. The resignation will be effective from October 9, 2019. The Board of Directors Meeting No. 6/2019, on November 11,2019, passed a resolution to approve the appointment of General Porpol Maneerin, Independent Director, to be the Chairman of the Board of Directors and vacate the audit committee Risk Management Committee and the Nomination and Remuneration Committee with effect from November 12,2019 onwards.
                                    </li>
                                    <li>
                                        <strong>November</strong>  The Company has entered into an agreement with EL AL ISRAEL AIRLINE LTD. (Israel) to be the sole air freight forwarder in Thailand which the contract will be effective from 1st of November onwards
                                        <br></br>
                                        On  November 11, 2019, the meeting of the Board of Directors of the Company has approved the disposal of investment in SSK Logistics Company Limited (which has a subsidiary status of the Company) in which the Company holds 12,714,999 shares, representing 93.66%, with the whole sale price of per par value of 10 baht per share, in total of 127,149,990 baht by selling to Mr. Suksan Kittiphattaraphong which is a director in SSK Inter Logistics Company Limited and resulting in SSK Inter Logistics Company Limited ending its subsidiary since that date.
                                    </li>
                                </ul>
                                <p>Year 2020</p>
                                <ul className='list-disc'>
                                    <li>
                                        <strong>January - April</strong>   According to the spread of coronavirus disease in many countries around the world and the number of infected people is continually increasing, causing the Company to slow down the economy and affects most businesses and industries the above situation has a direct impact on the logistics business activities of the Group. It provides a full range of logistics services by land, air, and sea with a wide range of trading partners, partners, customers, and subsidiary offices in many countries.
                                        <ul className='list-disc ml-5'>
                                            <li>
                                                In this regard, such subsidiary companies in the United States (A subsidiary hold 100%) and Indonesia (A subsidiary company entered into a convertible loan agreement), etc. The government issued measures to prohibit people from leaving the area and travel to places that are vulnerable to infection unnecessarily, resulting in the company cannot work normally. The company has been assigned that employees can work from home so that the work can still be performed efficiently under such circumstances.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>February</strong> On February 27, 2020, the meeting of the Board of Directors Has passed a resolution approving the capital increase in subsidiary NCL Inter Logistics (S) Pte., Ltd. for USD 0.77 million or equivalent to 25 million baht for expansion of operations of overseas subsidiaries.

                                        <ul className='list-disc ml-5'>
                                            <li>
                                                in April and in June, the Company transferred additional investment in NCL Inter Logistics (S) Pte. Ltd. of 1.09 million shares at a par value of SGD 1, totaling SGD 1.09 million or equivalent to the amount of 25 million baht for business operation. The registration of the capital increase was completed on September 16, 2020, resulting in SGD 4 millions of paid-up capitals.
                                            </li>
                                            <li>
                                                Later in July, the company has transferred an additional investment of SGD 0.35 million or equivalent to 7.90 million baht, resulting in as of December 31, 2020, NCL Inter Logistics (S) Pte. Ltd. has a registered and paid-up capital amounted of SGD 4.32 million.
                                            </li>
                                            <li>
                                                In April and June, NCL Inter Logistics (S) Pte. Ltd. transferred an additional investment of 1.09 million shares in LG Container Line Pte. Ltd. at a par value of SGD 1 per share or equivalent to SGD 1.09 million for use in business operations. The registration of the capital increase was completed on September 16, 2020, resulting in SGD 2.34 millions of paid-up capitals.
                                            </li>
                                            <li>
                                                Later in July, NCL Inter Logistics (S) Pte. Ltd. has transferred an additional investment of SGD 0.35 million as a result, as of December 31, 2020, LG Container Line Pte. Ltd. has a registered and paid-up capital amounted of SGD 2.69 million.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>May</strong>    On 8 May 2020, the Annual General Meeting of Shareholders 2020approved a decrease in the Company’s registered share capital of 33,375,123 baht from 146,913,185 baht to 113,538,062 baht through the decrease of 133,500,490 registered ordinary shares with a par value 0.25 baht per share, which is the remaining shares from the issuance and offering of warrants No. 2 (NCL-W2) and No. 3 (NCL-W3), which were expired on 29 June 2018 and on December 6, 2019, respectively.
                                        <ul className='list-disc ml-5'>
                                            <li>
                                                And approved the amendment of Company’s memorandum of association to be in line with the reduction of the Company's registered capital from 587,652,738 shares to 454,152,248 shares.
                                            </li>
                                            <li>
                                                The Company registered the decrease in share capital and amended the memorandum of association with the Ministry of Commerce on June 5, 2020.
                                            </li>
                                            <li>
                                                On May 13, 2020, a meeting of the Board of Directors Approved the closure of NCL Inter Logistics Vietnam Company Limited, a subsidiary in Vietnam. It holds shares through NCL Inter Logistics (S) Pte. Ltd. due to significant losses and increased operating expenses. In addition, the situation of the epidemic of coronavirus infection in 2019, which affects the transportation of goods, contributes to a significant decrease in the Company's revenue. Therefore, the said company should be closed. Before it gets more affected for the benefit of the company and the shareholders in the future Currently in the process of registering the dissolution of the business
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>June</strong>   With the ongoing widespread spread of the coronavirus disease (Covid-19) epidemic, resulting in the company, the two subsidiaries in China, Qingdao National Container Line Co., Ltd. and Ningbo NCL Inter Logistics Co., Ltd., were decided to halt recognition of losses due to the impact of the epidemic situation. Coronavirus Disease 2019 in China
                                        <ul className='list-disc ml-5'>
                                            <li>
                                                As of June 31, 2020, the Company received payment from receivables from the sale of investment in SSK, the first installment was 11 tractor trucks and 78 tails with a market value of 41.98 million baht. Complete the registration of ownership transfer.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>July</strong>  Mr. Wantenan Techamorakot has submitted his resignation from the Company Director, Risk Management Committee, and Executive Committee of the Company will be effective from July 1, 2020, onwards, resulting in a decrease of the Company's directors from 8 to 7, with 4 being independent directors and 3 executive directors.
                                        <ul className='list-disc ml-5'>
                                            <li>
                                                On 13 July 2020, a meeting of Board’s Director of the Company approved the issuance and offering of the newly issued convertible debentures of the Company not exceeding Baht 300 million by way of private placement to specific investor which was not related person. The purpose was to support and expand the business in the future and approved increase in the Company’s registered share capital of Baht 30,500,000, from Baht 113,538,062 to Baht 144,038,062 through the issuance of not over 122,000,000 registered ordinary shares with a par value of Baht 0.25 per share, to accommodate for convertible debentures.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        August   To propose to the Extraordinary General Meeting of the Company’s shareholders for approval which the meeting would be held on 28 August 2020. However, on 26 August 2020, a meeting of Board’s Director of the Company approved the resolution to cancel the issuance and offering of the newly issued convertible debentures of the Company not exceeding Baht 300 million by way of private placement to specific investor which was not related person since there was the revision of significant conditions in such agreement. However, the company has negotiated with full force to protect the best interests of the shareholders, but this is not effective due to the high value of this transaction and the duration is quite long. Therefore, the company has reviewed the operation again according to considering the advantages, disadvantages, and risks that may occur to the company, and all of the Board of Directors have carefully and thoughtfully considered, resolved to approve the cancellation of the issuance and offering of the newly issued convertible debentures to protect the interests of the company and to shareholders in the future. Such action will not affect any operations of the company in any way.
                                        <ul className='list-disc ml-5'>
                                            <li>
                                                On August 31, 2020, a meeting of the board of directors of NCL Inter Logistics (S) Pte. Ltd. approved to dispose of the entire investment in PT.NCL INTER LOGISTIK INDONESIA, a subsidiary with an interest through control by NCL Inter Logistics (S) Pte. Ltd. at a total cost of USD 60,000 to another shareholder of the subsidiary. On 31 August 2020, NCL Inter Logistics (S) Pte. Ltd. entered into a share purchase agreement with such a shareholder, and as a result, PT.NCL INTER LOGISTIK INDONESIA has ended as a subsidiary of the Company as from such date.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className="year5 btn-ctn">
                                <button className='font-bold'>2021-2022</button>
                            </div>
                            <div className='year5-info'>
                                <p className='font-bold'>Year 2021</p>
                                <ul className='list-disc'>
                                    <li>
                                        <strong>July</strong>  The Company was increased of the Company's registered capital in the amount of 11,250,000 Baht, divided into 45,000,000 ordinary shares, with a par value of 0.25 Baht per share, from the original registered capital of 113,538,062 Baht to the new registered capital of 124,788,062 Baht. The objective was for support liquidated in the Company's operations and/or to support the Company's business expansion and investment in the future.
                                    </li>
                                    <li>
                                        <strong>August</strong>  The Company had amendment of the terms of the joint venture agreement with Zim Integrated Shipping Service Ltd. ("ZIM") (Israel) to represent the sole air freight service in Thailand. The revisions are made in respect of compensation. The service advisory fee increased at least 45%, resulting in an increase in revenue in this segment that has a positive impact on the Company as well as investors.
                                    </li>
                                    <li>
                                        <strong>September</strong>  The Company collaborated with Eureka Design Public Company Limited to establish a joint venture Company with a registered capital of 20,000,000 Baht. In terms of growing, extracting, and selling hemp, cannabis for medical and commercial purposes in Kasetsart University.
                                    </li>
                                </ul>

                                <p className='font-bold mt-3'>Year 2022</p>
                                <ul className='list-disc'>
                                    <li>
                                        <strong>February</strong>
                                        <ul className='list-disc ml-5'>
                                            <li>
                                                Investment in digital marketing services business by means of entire business transfer of BOB Holding Company Limited (“BOB”) which include all assets, debts, liabilities, and all obligations of BOB at the present or in the future on the transferring date. In this regard, BOB does not have any debts and the only assets are ordinary shares of Cheese Digital Network Company Limited, a Company operating digital marketing service business, in the amount of 125,000 shares, or equivalent to 25.00 percent of the total issued and paid-up shares on the transferring date
                                            </li>
                                            <li>
                                                The Company was decreased of the Company’s registered capital of THB 8,250,000.00 from the existing registered capital of THB 124,788,062.00 to THB 116,538,062.00 by cancelling 33,000,000 unissued registered ordinary shares with a par value of THB 0.25 per share
                                            </li>
                                            <li>
                                                The Company was increased of the Company’s registered capital of THB 18,129,669.00 from the existing registered capital of THB 116,538,062.00 to THB 134,667,731.00 by issuing 72,518,676 newly issued ordinary shares, with a par value of THB 0.25 per share
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>March</strong>  The Company liquidated Suwan Bio Farm Co., Ltd. that operating in support for research and development of planting, extraction, distribution and development of herbal products from plants, for medical and commercial. The Company holds amount of 10,200 shares or 51% of total shares.
                                    </li>
                                    <li>
                                        <strong>April</strong>  The Company disposed investment in Zim (Thailand) Co., Ltd. “ZIM Thailand” which the Company holds 51 percent to Zim Integrated Shipping Services Limited  with a value THB 5,100,000
                                    </li>
                                    <li>
                                        <strong>August</strong>  The Company was established new subsidiary “Golden Supply Co., Ltd.” in registered capital of THB 10,000,000 , which engaged in procurement and fulfillment services.
                                    </li>
                                </ul>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div >
        </>
    )
}