import { useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'
import '../styles/Navbar.css'

export default function Navbar() {
    const navRef = useRef()
    const location = useLocation();
    const [showNav, setShowNav] = useState(false);

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    const closeNav = () => {
        setShowNav(false);
    };

    return (
        <header>
            <a href='/'>
                <img src='https://i.imgur.com/xGqhaAY.png' alt='logo' />
            </a>
            <nav ref={navRef}>
                <a
                    href="/"
                    onClick={closeNav}
                    className={location.pathname === '/' ? 'active' : ''}
                >Home
                </a>
                <a
                    href="/about-ncl"
                    onClick={closeNav}
                    className={location.pathname === '/about-ncl' ? 'active' : ''}
                >About us</a>
                <a
                    href="/business-ncl"
                    onClick={closeNav}
                    className={location.pathname === '/business-ncl' ? 'active' : ''}
                >Business</a>
                <a
                    href="/good-governance-ncl"
                    onClick={closeNav}
                    className={location.pathname === '/good-governance-ncl' ? 'active' : ''}
                >Good Governance</a>
                <a
                    href="/investor-relation-ncl"
                    onClick={closeNav}
                    className={location.pathname === '/investor-relation-ncl' ? 'active' : ''}
                >Investor Relation</a>
                <a
                    href="/news-events-ncl"
                    onClick={closeNav}
                    className={location.pathname === '/news-events-ncl' ? 'active' : ''}
                >News & Events</a>
                <a
                    href="/corperate-social-responsibility"
                    onClick={closeNav}
                    className={location.pathname === '/corperate-social-responsibility' ? 'active' : ''}
                >Corperate Social Responsibility</a>
                <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn nav-open-btn' onClick={showNavBar}>
                <FaBars />
            </button>
        </header>
    )
}