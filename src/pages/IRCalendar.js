import Calendar from "../components/Calendar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Transitions from '../components/Transition'
import '../styles/Calendar.css'

export default function IRCalendar() {
    return (
        <Transitions>
            <Navbar />
            <div className="calendar-ctn">
                <Calendar />
            </div>
            <Footer />
        </Transitions>
    )
}