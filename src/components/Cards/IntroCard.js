import '../styles/IntroCard.css'

export default function IntroCard({icon, title, description}) {
    return (
        <div className='intro-card-ctn'>
            <div className='intro-card-icon'>
                <img src={icon}/>
            </div>
            <div className='intro-card-title'>
                <h1>{title}</h1>
            </div>
            <div className='intro-card-description'>
                {description}
            </div>
        </div>
    )
}