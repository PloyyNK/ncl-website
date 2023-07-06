import Calendar from "../components/Calendar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import '../styles/Calendar.css'

export default function IRCalendar() {
    return (
        <>
            <Navbar />
            <div className="calendar-ctn">
                <Calendar />
            </div>
            <Footer />
        </>
    )
}