import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Transitions from "../components/Transition";
import AnalysisData from "../data/analysis-data";
import '../styles/Analysis.css'

export default function Analysis() {
    return (
        <Transitions>
            <Navbar />
            <div className="analysis-ctn">
                <h1 className="font-bold text-3xl ml-8 mt-8">Management Discussion and Analysis</h1>
                {
                    AnalysisData.map((data) => (
                        <>
                        <a href={data.link}>{data.name}</a>
                        </>
                    ))
                }
            </div>
                
            <Footer />
        </Transitions>
    )
}