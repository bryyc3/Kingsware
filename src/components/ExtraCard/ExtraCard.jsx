import { Link } from 'react-router-dom'
import './ExtraCard.css'

export default function ExtraCard({cardIcon, cardHeader, cardDesc, cardButton, consultOption}){
    return(
        <div className="extra-card">
            <div className="extra-info">
                <span className="material-symbols-outlined card-icon">{cardIcon}</span>
                <h1 className="extra-header">{cardHeader}</h1>
                <p className="extra-desc">{cardDesc}</p>
                <Link to="/consultation" state={consultOption}><button className="consult-button">{cardButton}</button></Link>
            </div>
        </div>
    )
}