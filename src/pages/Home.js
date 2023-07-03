import BackgroundSlider from "../components/BackgroundSlider";
import GoalBanner from "../components/GoalBanner";
import IntroCom from "../components/IntroCom";
import NewsHome from "../components/NewsHome";
import ServiceCard from "../components/ServiceCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import imageSlider from "../data/bgSlider-data";
import Transitions from '../components/Transition'
import ContactForm from "../components/ContactForm";

export default function Home() {
    return (
        <>
            <Transitions>
                <Navbar />
                <BackgroundSlider data={imageSlider} />
                <IntroCom />
                <ServiceCard />
                <GoalBanner />
                <NewsHome />
                <ContactForm />
                <Footer />
            </Transitions>
        </>
    )
}