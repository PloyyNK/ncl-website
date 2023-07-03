import BackgroundSlider from "../components/BackgroundSlider";
import GoalBanner from "../components/GoalBanner";
import IntroCom from "../components/IntroCom";
import NewsHome from "../components/NewsHome";
import ServiceCard from "../components/Cards/ServiceCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import imageSlider from "../data/bgSlider-data";
import Transitions from '../components/Transition'

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
                <Footer />
            </Transitions>
        </>
    )
}