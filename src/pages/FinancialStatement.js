import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Transitions from "../components/Transition";
import YearData from "../data/statement-data";
import '../styles/FinancialStatement.css'

export default function MDandA() {
    return (
        <Transitions>
            <Navbar />
            <div className="statement-ctn">
                <h1 className="font-bold text-3xl mb-8">Management Discussion and Analysis</h1>
                {
                    YearData.map((data) => {
                        return (
                            <>
                                <a href={data.link}>{data.year}</a>
                            </>
                        )
                    })
                }
            </div>
            <Footer />
        </Transitions>
    )
}