import { useState } from 'react'
import '../styles/BackgroundSlider.css'

export default function BackgroundSlider({data}) {

    const [currentState, setCurrentState] = useState(0)

    const bgImageStyle = {
        backgroundImage: `url(${data[currentState].url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%',
        opacity: '0.5',
        transition: '0.5s'
    }

    const gotoNext= (currentState) => {
        setCurrentState(currentState)
    }

    return(
        <div className="main">
            <div className='container-style'>
                <div style={bgImageStyle}></div>
                <div className='description'>
                    <div>
                        <h1>{data[currentState].title}</h1>
                        <p>{data[currentState].body}</p>
                    </div>
                    <div className='carousel-boullt'>
                        {
                            data.map((data, currentState) => (
                                <span key={currentState} onClick={() => gotoNext(currentState)}></span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
        
    )
}