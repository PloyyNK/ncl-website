import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/Shareholder.css'

export default function Shareholder() {
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
                        <a href="#">Company Snapshot</a>
                        <a href="#">Fact Sheet</a>
                        <a href="#">Major Shareholder</a>
                        <a href="#">Annual General Meeting (AGM)</a>
                        <a href="#">Extraordinary General Meeting (EGM)</a>
                        <a href="#">Dividend Payment Policy</a>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}