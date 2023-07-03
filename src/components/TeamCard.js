import '../styles/TeamCard.css'

export default function TeamCard({pic, name, pos}) {
    return (
        <>
        <div className="team-card-ctn">
            <div className="profile-pic">
                <img src={pic}/>
            </div>
            <div className="info">
                <h3>{name}</h3>
                <p>{pos}</p>
            </div>
        </div>
        </>
    )
}