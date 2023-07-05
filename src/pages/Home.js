import BackgroundSlider from "../components/BackgroundSlider";
import GoalBanner from "../components/GoalBanner";
import IntroCom from "../components/IntroCom";
import NewsHome from "../components/NewsHome";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import imageSlider from "../data/bgSlider-data";
import Transitions from '../components/Transition'
import ContactForm from "../components/ContactForm";
import PhotoCard from "../components/PhotoCard";
import Subscribe from "../components/Subscribe";

export default function Home() {
    return (
        <>
            <Transitions>
                <Navbar />
                <BackgroundSlider data={imageSlider} />
                <IntroCom />
                <PhotoCard />
                <GoalBanner />
                <NewsHome />
                <div className="contact-sub">
                    <ContactForm />
                    <Subscribe />
                </div>
                <Footer />
            </Transitions>
        </>
    )
}