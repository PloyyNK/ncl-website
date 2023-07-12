import React from 'react'
import '../styles/IntroCom.css'

export default function IntroCom() {
    return (
        <div className="intro-ctn">
            <div className="intro-description intro-content">
                <h1 className='font-bold text-3xl'>Meet Our Company</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc non felis vulputate, lobortis ante id, tristique ex.
                    Nunc augue ligula, posuere at magna et, lobortis finibus
                    tortor. In sed lorem nec odio tristique viverra. Etiam
                    libero ex, pharetra vitae consequat ut, lobortis nec
                    tortor. Duis a finibus ligula, a euismod ex. Sed
                    condimentum eros nec quam dignissim finibus. Proin
                    pharetra lacus aliquam mi placerat aliquam. Aenean at
                    ligula lobortis</p>
            </div>
            <div className='intro-youtube intro-content'>
                <iframe
                    width="360"
                    height="215"
                    src="https://www.youtube.com/embed/Q3iJ4HRnAYA"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    )
}