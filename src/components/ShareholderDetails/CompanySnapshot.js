import './styles/ShareholderStyles.css'
import snapshotData from './data/snapshot'
import { useState } from 'react'

export default function CompanySnapshot() {

    const [year, setYear] = useState("2022")

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };


    console.log(year)

    return (
        <>
            <div className="banner">
                <img src="https://t3.ftcdn.net/jpg/04/26/37/18/360_F_426371877_jGyegFYEcXrgkc6zMrwbjkJlducr7z8h.jpg" />
            </div>
            <div className='snap-content m-10'>
                <h4 className='font-bold'>More Information</h4>
                <select onChange={handleYearChange} value={year}>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
                <ul className="list-disc pl-4">
                    {snapshotData
                        .filter((data) => data.year === year)
                        .map((filteredYear) =>
                            filteredYear.data.map((item, index) => (
                                <li key={index} className="ml-2">
                                    <a href={item.link}>{item.title}</a>
                                </li>
                            ))
                        )}
                </ul>
            </div>
        </>
    )
}