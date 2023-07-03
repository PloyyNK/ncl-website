import icon1 from "../images/ship-icon.png"
import icon2 from "../images/air-icon.png"
import icon3 from "../images/truck-icon.png"
import IntroCard from "./IntroCard";
import '../styles/ServiceCard.css'

export default function ServiceCard() {
    return (
        <div className="service-ctn">
            <IntroCard
                icon={icon1}
                title='Sea Freight'
                description='Donec neque lacus, ullamcorper a lobortis 
                vitae, pulvinar eu tellus. Pellentesque dictum ligula eu 
                euismod commodo. Donec mollis faucibus urna id consequat.'
            />
            <IntroCard
                icon={icon2}
                title='Air Freight'
                description='Donec neque lacus, ullamcorper a lobortis 
                vitae, pulvinar eu tellus. Pellentesque dictum ligula eu 
                euismod commodo. Donec mollis faucibus urna id consequat.'
            />
            <IntroCard
                icon={icon3}
                title='Land Freight'
                description='Donec neque lacus, ullamcorper a lobortis 
                vitae, pulvinar eu tellus. Pellentesque dictum ligula eu 
                euismod commodo. Donec mollis faucibus urna id consequat.'
            />
        </div>
    )
}