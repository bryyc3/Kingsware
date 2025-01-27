import './CardInfo.css'

export default function CardInfo({cardHeader, cardDesc, buttonName}){
    return(
        <div className="card-info">
            <hr className="header-line"/><h1 className="card-header">{cardHeader}</h1><hr className="header-line"/>
            <p className="card-description">{cardDesc}</p>
            <button className="consult-button">{buttonName}</button>
        </div>
    )
}