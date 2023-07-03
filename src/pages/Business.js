import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/Business.css'
import IntroCard from "../components/Cards/IntroCard";
import icon1 from "../images/ship-icon.png"
import icon2 from "../images/air-icon.png"
import icon3 from "../images/truck-icon.png"
import Transitions from '../components/Transition'

export default function Business() {
    return (
        <>
            <Transitions>
                <NavBar />
                <div className='business-ctn'>
                    <div className='b-bg'>
                        <div className='b-filter'>
                            <div className='b-text'>
                                <strong><p id='title'>WHAT</p></strong>
                                <strong><p id='title'>CAN</p></strong>
                                <strong><p id='title'>WE DO</p></strong>
                                <strong><p id='title'>FOR</p></strong>
                                <strong><p id='title'>YOU ?</p></strong>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Nunc non felis vulputate, lobortis ante id,
                                    tristique ex. Nunc augue ligula, posuere at magna
                                    et, lobortis finibus tortor. In sed lorem nec
                                    odio tristique viverra. Etiam libero ex,
                                    pharetra</p>
                            </div>
                            <div className='more-btn'>
                                <button>Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className='service-card-ctn'>
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
                        <IntroCard
                            icon={"https://cdn-icons-png.flaticon.com/512/5062/5062832.png"}
                            title='Other Service'
                            description='Donec neque lacus, ullamcorper a lobortis 
                vitae, pulvinar eu tellus. Pellentesque dictum ligula eu 
                euismod commodo. Donec mollis faucibus urna id consequat.'
                        />
                    </div>
                </div>
                <div className='partners'>
                    <div className='our-line'>
                        <strong><p>Our</p></strong>
                        <div className='line'></div>
                    </div>
                    <strong><p id='partners-title'>Partners</p></strong>
                    <p>The Company has subsidiary and joint venture and holds shares
                        by a subsidiary (“NCL Group”) engaged a logistics provider
                        for land transport, sea and air freight forwarding services,
                        which cover full-container load (FCL), less-than-container
                        load (LCL) and door-to-door load delivery. In addition,
                        it serves as a customs broker, shipper owned containers
                        (SOC) and engages in warehousing and domestic freight
                        forwarding using tractor head and trailer truck,
                        shipping agency and air freight totally 8 subsidiaries
                        and 3 subsidiaries in other business as provides digital
                        content support systems through telecommunication channels
                        and operates procurement and fulfillment businesses.
                        services related to security. </p>
                    <div className='partners-logo'>
                        <img src='https://media.licdn.com/dms/image/C560BAQESlEFxYRiNqg/company-logo_200_200/0/1570614834406?e=2147483647&v=beta&t=ZqZj58IY06U7uooOlGvQhvaWCFleWK6GCbSm4UbwKuo' />
                        <img src='data:image/png;base64,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' />
                        <img src='data:image/jpeg;base64,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' />
                        <img src='https://i.imgur.com/UGiBAPz.jpg' />
                    </div>
                </div>
                <Footer />
            </Transitions>
        </>
    )
}