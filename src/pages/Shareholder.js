import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/Shareholder.css'
import { useNavigate } from "react-router";

export default function Shareholder() {

    const navigate = useNavigate()

    const navigateComSnap = () => {
        navigate('/investor-relation-ncl/shareholder-information/company-snapshot')
    }

    const navigateFact = () => {
        navigate('/investor-relation-ncl/shareholder-information/fact-sheet')
    }

    const navigatePayment = () => {
        navigate('/investor-relation-ncl/shareholder-information/dividen-payment-policy')
    }

    return (
        <>
            <Navbar />
            <div className="share-holder-ctn">
                <div className="title-sh text-3xl font-bold text-center m-10">
                    <p>FOR YOUR</p>
                    <div className="line-with-text flex justify-center items-center">
                        <div className="line1"></div>
                        <p>INFORMATION</p>
                        <div className="line2"></div>
                    </div>
                    
                </div>
                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-3 gap-4 sh-nav mb-10 ml-5 mr-5">
                        <a onClick={navigateComSnap}>Company Snapshot</a>
                        <a onClick={navigateFact}>Fact Sheet</a>
                        <a href="https://www.nclthailand.com/investor_38.html">Major Shareholder</a>
                        <a href="https://www.nclthailand.com/investor_39.html">Annual General Meeting (AGM)</a>
                        <a href="https://www.nclthailand.com/investor_50.html">Extraordinary General Meeting (EGM)</a>
                        <a onClick={navigatePayment}>Dividend Payment Policy</a>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}