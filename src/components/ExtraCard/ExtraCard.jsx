import './ExtraCard.css'

export default function ExtraCard({cardIcon, cardHeader, cardDesc, cardButton}){
    return(
        <div className="extra-card">
            <div className="extra-info">
                <span className="material-icons troubleshooting">{cardIcon}</span>
                <h1 className="extra-header">{cardHeader}</h1>
                <p className="extra-desc">{cardDesc}</p>
                <button className="consult-button">{cardButton}</button>
            </div>
        </div>
    )
}