import '../styles/InvestorRelation.css'
import { useNavigate } from 'react-router'

export default function IRButton() {

    //navigation between page
    const navigate = useNavigate()

    const navigateFinanceGraph = () => {
        navigate('/investor-relation-ncl/finance-graph')
    }

    const navigateCalendar = () => {
        navigate('/investor-relation-ncl/ir-calendar')
    }

    const navigateAnalysis = () => {
        navigate('/investor-relation-ncl/management-discussion-analysis')
    }

    const navigateStatement = () => {
        window.location.href = ('https://www.set.or.th/en/market/product/stock/quote/ncl/factsheet')
    }

    return (
        <div className='ir-btn'>
            <button onClick={navigateFinanceGraph}>Financial highlight</button>
            <button onClick={navigateStatement}>Financial statement</button>
            <button onClick={navigateAnalysis}>Management discussion and analysis</button>
            <button onClick={navigateCalendar}>IR Calendar</button>
        </div>
    )
}