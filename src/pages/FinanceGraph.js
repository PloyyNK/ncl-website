import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PieChart from "../components/PieChart";
import Transitions from "../components/Transition";
import { Chart } from '../components/VerticalChart'
import '../styles/FinanceGraph.css'

export default function FinanceGraph() {
    return (
        <Transitions>
            <Navbar />
            <div className='chart-ctn'>
                <h1 className="font-bold text-center text-3xl mt-20">Financial Highlight</h1>
                <div className='chart'><Chart /></div>
                <div className="pie-ctn">
                    <div className="pie">
                        <PieChart data={'dataAll'} />
                    </div>
                    <div className="pie">
                        <PieChart data={'dataRev'} />
                    </div>
                </div>
            </div>
            <Footer />
        </Transitions>
    )
}