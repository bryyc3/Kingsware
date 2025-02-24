import { Link } from 'react-router-dom'
import './CardInfo.css'

export default function CardInfo({cardHeader, cardDesc, buttonName, consultOption}){
    return(
        <div className="card-info">
            <div className="header-cont">
                <hr className="header-line"/>
                <h1 className="card-header">{cardHeader}</h1>
                <hr className="header-line"/>
            </div>
            <p className="card-description">{cardDesc}</p>
            <Link to="/consultation" state={consultOption}><button className="consult-button">{buttonName}</button></Link>
        </div>
    )
}