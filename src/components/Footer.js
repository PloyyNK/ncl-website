import '../styles/Footer.css'

export default function Footer() {
    return (
        <footer className='footer-ctn'>
            <div className='com-address'>
                <strong><p>NCL International Logistics Public Company Limited</p></strong>
                <p>56 / 9-10 Soi Taksin 12/1, Somdejprachaotaksin Road,
                    <br></br>
                    Bukkalo, Thon Buri, Bangkok 10600 Phone: 02-459-4945</p>
                <div className='footer-logo'>
                    <img src='https://i.imgur.com/xGqhaAY.png' alt='logo' />
                </div>
            </div>
            <div className='footer-nav'>
                <div className='footer-nav1'>
                    <a href="/">Home</a>
                    <a href="/about-ncl">About us</a>
                    <a href="/business-ncl">Business</a>
                    <a href="/good-governance-ncl">Good Governance</a>
                </div>
                <div className='footer-nav2'>
                    <a href="/investor-relation-ncl">Investor Relation</a>
                    <a href="/news-events-ncl">News & Events</a>
                    <a href="/corperate-social-responsibility">Corperate Social Responsibility</a>
                </div>
            </div>
            <div className='footer-com-group'>
                <strong><p>NCL Group</p></strong>
                <div className='com-group-flag'>
                    <a href='https://www.nclinter.com/vn'>
                        <img src='https://www.nclthailand.com/uploads/banner/1540860041.png' alt='china' />
                    </a>
                    <a href='https://www.nclinter.com/index.php'>
                        <img src='https://www.nclthailand.com/uploads/banner/1520231582.png' alt='singapore' />
                    </a>
                    <a>
                        <img src='https://www.nclthailand.com/uploads/banner/1511175394.png' alt='india' />
                    </a>
                    <a href='https://www.nclinter.com/usa'>
                        <img src='https://www.nclthailand.com/uploads/banner/1511175243.png' alt='usa' />
                    </a>
                    <a href='https://www.zim.com/global-network/asia-oceania/thailand'>
                        <img src='https://www.nclthailand.com/uploads/banner/1512555753.png' alt='zim' />
                    </a>
                </div>
            </div>
        </footer>
    )
}