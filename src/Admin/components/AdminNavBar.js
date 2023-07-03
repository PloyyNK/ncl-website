import { useRef } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

export default function AdminNavBar() {
    const navRef = useRef()

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <header>
            <a href='/'>
                <img src='https://i.imgur.com/xGqhaAY.png' alt='logo'/>
            </a>
            <nav ref={navRef}>
                <a href="/admin-control-nclth">Home</a>
                <a href="#">Good Governance</a>
                <a href="#">Investor Relation</a>
                <a href="#">News & Events</a>
                <a href="#">Corperate Social Responsibility</a>
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